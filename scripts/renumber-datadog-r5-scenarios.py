#!/usr/bin/env python3
"""Renumber and reorder Datadog R5 scenario cheat sheet (1-24 contiguous by category)."""
from __future__ import annotations

import re
import sys
from pathlib import Path

PATH = Path(__file__).resolve().parents[1] / "docs/study/datadog-r5-cheatsheet.md"

OLD_TO_NEW: dict[int, int] = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    11: 9,
    12: 10,
    13: 11,
    16: 12,
    9: 13,
    10: 14,
    14: 15,
    17: 16,
    18: 17,
    19: 18,
    20: 19,
    15: 20,
    21: 21,
    22: 22,
    23: 23,
    24: 24,
}
NEW_TO_OLD = {new: old for old, new in OLD_TO_NEW.items()}

HEADER_RE = re.compile(r"^## Scenario (\d+) — (.*)$", re.MULTILINE)
ESC_MARKER = "## Escalation — Flare Package"
CHEAT_TITLE = "# Scenario Cheat Sheet"

NEW_INDEX = """# Scenario Cheat Sheet

Windy focus areas: **Agent · Integrations · Metrics**. Same three buckets for interview triage.

| Category | When customer says… | Scenarios |
| -------- | ------------------- | --------- |
| **Agent** | Host/logs/network/K8s Agent broken; nothing or almost nothing arriving | 1–12 |
| **Integration** | Host metrics OK; one product (Postgres, nginx, AWS…) missing | 13–19 |
| **Metrics** | Data path OK or mostly OK; Summary / Explorer / dashboard query wrong | 20–24 |

**Quick route:** host metrics missing → **Agent** → specific check missing → **Integration** → Summary OK, graph empty → **Metrics**

### Agent
1. Service won't start (Dead on Arrival)
2. API key invalid / 403
3. Site mismatch
4. YAML indentation (tab vs space)
5. YAML list syntax (`-type` vs `- type`)
6. `logs_enabled: false`
7. Log file permission denied
8. Multi-line stack traces
9. Proxy / firewall / Forwarder timeout
10. Docker → DogStatsD custom metrics
11. K8s Agent can't collect container logs
12. K8s Agent Pod won't start

### Integration
13. Postgres/MySQL connection failure
14. Redis/Nginx bind (not 127.0.0.1)
15. Only `conf.yaml.example` (no `conf.yaml`)
16. Config edited but Agent not restarted
17. Nginx/Apache wrong status URL
18. Check loaded but WARNING / exception in `status`
19. AWS / crawler integration — credentials / IAM rotated (UI, not `conf.d`)

### Metrics
20. Metrics Summary OK, dashboard empty (tag / filter)
21. Wrong metric name / typo in query
22. Wrong aggregation (avg vs sum / rate misuse)
23. Time range / timezone hides the series
24. Custom metric never reporting (app not emitting)

---

"""


def apply_explicit_cross_refs(text: str) -> str:
    text = text.replace("Scenarios 6–8, 13", "Scenarios 6–8, 11")
    text = text.replace("Scenarios 6-8, 13", "Scenarios 6-8, 11")
    text = re.sub(
        r"Different from Scenario 13\b",
        "Different from Scenario 11",
        text,
        flags=re.IGNORECASE,
    )
    text = text.replace(
        "here Agent Pod itself is unhealthy; #13 assumes",
        "here Agent Pod itself is unhealthy; #11 assumes",
    )
    text = text.replace("Related to Scenario 12", "Related to Scenario 10")
    text = text.replace("Scenario 15 style", "Scenario 20 style")
    return text


def parse_blocks(scenario_blob: str) -> dict[int, tuple[str, str]]:
    blocks: dict[int, tuple[str, str]] = {}
    parts = re.split(r"(?=^## Scenario \d+ —)", scenario_blob, flags=re.MULTILINE)
    for part in parts:
        part = part.strip("\n")
        if not part.strip():
            continue
        m = HEADER_RE.match(part)
        if not m:
            raise ValueError(f"Unrecognized scenario chunk:\n{part[:200]}...")
        old_num = int(m.group(1))
        title = m.group(2).strip()
        body = part[m.end() :]
        if old_num in blocks:
            raise ValueError(f"Duplicate scenario {old_num}")
        blocks[old_num] = (title, body)
    return blocks


def main() -> int:
    text = PATH.read_text(encoding="utf-8")
    esc_idx = text.find(ESC_MARKER)
    if esc_idx < 0:
        raise SystemExit(f"Marker not found: {ESC_MARKER!r}")

    first_m = re.search(r"^## Scenario \d+ —", text, re.MULTILINE)
    if not first_m:
        raise SystemExit("No scenario headers found")

    cheat_idx = text.index(CHEAT_TITLE)
    prefix = text[:cheat_idx]
    scenario_blob = text[first_m.start() : esc_idx]
    suffix = text[esc_idx:]

    blocks = parse_blocks(scenario_blob)
    expected_old = set(OLD_TO_NEW.keys())
    if set(blocks.keys()) != expected_old:
        missing = expected_old - set(blocks.keys())
        extra = set(blocks.keys()) - expected_old
        raise SystemExit(f"Scenario set mismatch. missing={sorted(missing)} extra={sorted(extra)}")

    rebuilt_parts: list[str] = []
    header_nums: list[int] = []

    for new in range(1, 25):
        old = NEW_TO_OLD[new]
        title, body = blocks[old]
        body = apply_explicit_cross_refs(body)
        rebuilt_parts.append(f"## Scenario {new} — {title}\n{body}")
        if not rebuilt_parts[-1].endswith("\n"):
            rebuilt_parts[-1] += "\n"
        header_nums.append(new)

    out = prefix + NEW_INDEX + "".join(rebuilt_parts) + suffix
    out = apply_explicit_cross_refs(out)

    # Practice schedule — flexible replace
    out = re.sub(
        r"^## Practice Schedule\n+.*?(?=^## |\Z)",
        """## Practice Schedule


| Day | Focus |
| --- | ----- |
| 1 | Agent 1–3 + intro |
| 2 | Agent 4–8 (yaml + logs) |
| 3 | Agent 9–12 (network + K8s) |
| 4 | Integration 13–19 |
| 5 | Metrics 20–24 + mock 5-bug run (mix all 3 categories) |


""",
        out,
        count=1,
        flags=re.MULTILINE | re.DOTALL,
    )

    PATH.write_text(out, encoding="utf-8")

    final_headers = [int(x) for x in re.findall(r"^## Scenario (\d+) —", PATH.read_text(), re.M)]
    if final_headers != list(range(1, 25)):
        raise SystemExit(f"VERIFY FAILED: got {final_headers}")

    print("Wrote:", PATH)
    print("Verified: 24 scenario headers 1-24 contiguous.")
    for old in sorted(OLD_TO_NEW):
        print(f"  {old:2d} → {OLD_TO_NEW[old]:2d}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
