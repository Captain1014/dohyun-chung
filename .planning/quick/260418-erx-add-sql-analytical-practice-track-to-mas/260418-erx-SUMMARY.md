---
phase: 260418-erx-add-sql-analytical-practice-track-to-mas
plan: 01
subsystem: planning/master-plan
tags: [master-plan, timeline, sql-track, snowflake, bigquery, datalemur, stratascratch]
one-liner: Shift CE/SE application start from 2026-08-08 to 2027-01 and add a 5-phase, 3-5 hrs/wk SQL analytical practice track (2026-04 to 2026-12) to MASTER_PLAN.md
requires: []
provides:
  - docs/plan/MASTER_PLAN.md#section-9-sql-analytical-practice-track
  - timeline baseline (2027-01 application) for downstream planning docs
affects:
  - docs/plan/MASTER_PLAN.md
tech-stack:
  added: []
  patterns:
    - "targeted Markdown edits (preserve existing structure)"
    - "phase-based learning track with weekly cadence"
key-files:
  created: []
  modified:
    - docs/plan/MASTER_PLAN.md
decisions:
  - "Defer applications from 2026-08-08 to 2027-01 to keep a sustainable work-compatible pace"
  - "Formalize SQL analytical practice as its own track (Section 9), not a sub-bullet under weekly rhythm"
  - "Weekly SQL pace 3-5 hrs/wk (hard floor 3, soft ceiling 5) so it survives busy work weeks"
  - "Resource stack: LeetCode (Phase 0) → StrataScratch + DataLemur + Mode (Phase 1) → BigQuery public datasets (Phase 2) → Snowflake TPC-H (Phase 3) → DataLemur interview sets (Phase 4)"
metrics:
  duration: 2.2m
  completed: 2026-04-18
  tasks: 2
  files_changed: 1
requirements:
  - QUICK-01
  - QUICK-02
---

# Quick Task 260418-erx: Add SQL Analytical Practice Track + Shift Timeline Summary

Shifted the Cloud Solutions Engineer career-transition plan from a tight 2026-08-08 application window to a sustainable 2027-01 application window, and added a dedicated 5-phase SQL analytical practice track (Section 9) spanning 2026-04 to 2026-12 at a work-compatible 3-5 hrs/week cadence.

## What Changed

### 1. Timeline shift (Task 1, commit `e66f6e4`)

Every reference to the Aug 2026 application window was updated to 2027-01. Targeted edits only — existing Section 1-8 structure preserved.

| Location | Before | After |
|----------|--------|-------|
| Line 3 (North star) | `7월 지원 시점에...` | `2027년 1월 지원 시점에...` |
| Line 16 (일정) | `4월~7월 준비 → 8/8 지원 시작 → 11월 말 출근` | `2026-04 ~ 2026-12 준비 → 2027-01 지원 시작 → 2027년 상반기 입사` |
| Section 3 header | `(2026.04.09 ~ 2026.07.31)` | `(2026.04.09 ~ 2026.12.31)` + 2026-04-18 update note |
| Phase 4 header | `(8월~10월)` | `(2027-01 ~ 2027-03)` with row-labels rewritten to 2027-01 주차/2027-02/2027-01~03 |
| Phase 5 header | `(11월)` | `(2027 상반기)` — 11월 초/중순/말 → 오퍼/출국/출근 (2027 Q1~Q2) |
| Section 4 header | `(4~7월 내내)` | `(2026-04 ~ 2026-12 내내)` |
| Section 5 milestones | 7-line block ending `11월 말 ── 출근` | 10-line block with SQL track checkpoints + `2027-01 ── 지원 시작`, `2027 상반기 ── 출근` |
| Section 6 risk row (auto-fix) | `인터뷰 60일 → 11월 말 출근에 빠듯 / 8/8 지원으로 버퍼 확보` | `인터뷰 60일 → 2027 상반기 출근에 빠듯 / 2027-01 지원으로 버퍼 확보` |
| Footer stamp | `*Updated: 2026-04-09 ...*` | `*Updated: 2026-04-18 — 지원 시점 2027-01로 연기, SQL 분석 트랙 (Section 9) 추가, 지속가능한 3-5 hrs/week SQL 페이스*` |

**Before/after string counts** (`docs/plan/MASTER_PLAN.md`):

| Pattern | Before | After |
|---------|--------|-------|
| `8/8 지원` | 2 | 0 |
| `8월 초.*지원` / `8월 초` in milestone block | 1 | 0 |
| `11월 말.*출근` | 2 | 0 |
| `2027-01` | 0 | 13 |
| `2026-12` | 0 | 11 |
| `2026-04-18` | 0 | 3 |

### 2. Section 9 — SQL Analytical Practice Track (Task 2, commit `ab3b568`)

New section appended after Section 8 and before the footer. Also updates Section 4 weekly rhythm table.

**Location:** `docs/plan/MASTER_PLAN.md` lines ~186 onward (directly after `## 8. 이번 주 할 일` and before the final `*Updated: 2026-04-18 ...*` footer).

**Phase structure** (all at 3-5 hrs/wk, total span 2026-04 to 2026-12):

| Phase | Period | Main resource | Milestone |
|-------|--------|---------------|-----------|
| Phase 0 — LeetCode SQL 50 마무리 | 2026-04 (W1-W2) | LeetCode Top SQL 50 | SQL 50 완료 (4/13) |
| Phase 1 — StrataScratch 분석형 SQL | 2026-05 ~ 2026-08 (~16주) | StrataScratch + DataLemur + Mode Analytics | 50+ 문제 + 패턴 노트 |
| Phase 2 — BigQuery Window/CTE 실전 | 2026-09 ~ 2026-10 (~8주) | BigQuery 공개 데이터셋 | 쿼리 포트폴리오 10+ 개 |
| Phase 3 — Snowflake 시나리오 훈련 | 2026-11 ~ 2026-12 중순 (~6주) | Snowflake 트라이얼 + TPC-H | 3-5개 시나리오 문서화 |
| Phase 4 — 면접 SQL 실전 준비 | 2026-12 말 ~ 2027-01 초 (~3주) | DataLemur SE 인터뷰셋 | 모의 SQL 인터뷰 3회 |

**Section 4 update:** `SQL 문제풀이 | 매일 1문제` split into two rows — "SQL 분석 트랙 (Section 9) | 주 3-5시간" plus "SQL 가벼운 문제풀이 | 매일 1문제 (부담 없는 수준)".

**Deliverables planned (not yet created):**

- `docs/study/sql-patterns.md` (Phase 1)
- `docs/study/sql-portfolio/` (Phase 2-3)
- `docs/study/sql-scenarios.md` (Phase 3)
- `docs/study/sql-interview-log.md` (Phase 4)

## Verification

All 7 checks from the plan's `<verification>` block passed:

1. `grep -E "8/8 지원|8월 초.*지원|11월 말.*출근"` → 0 matches (exit 1 from grep)
2. `grep -c "2027-01"` → 13 (≥4)
3. `grep -c "## 9. SQL Analytical Practice Track"` → 1 (exact)
4. Resource names: `StrataScratch`, `BigQuery`, `DataLemur`, `LeetCode SQL 50`, `TPC-H` all present
5. `grep -c "3-5 hrs/wk\|주 3-5시간"` → 7
6. Sections 1-8 headings all still present (lines 20, 42, 52, 125, 137, 154, 166, 176)
7. Final non-empty line: `*Updated: 2026-04-18 — ...*`

Plan's per-task automated verifiers also passed:

- Task 1: `grep -n "2027-01|2027년 1월|2026-12|2026-04-18" | wc -l` → PASS (≥6)
- Task 2: Section 9 heading count + StrataScratch count + 5 SQL phase rows → PASS

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Section 6 risk row contained old timeline strings that broke overall verification**

- **Found during:** Task 1 verification (after the 8 scripted edits)
- **Issue:** Plan instructed "Do not touch Section 6" in Task 1, but the overall `<verification>` check #1 requires `grep -E "8/8 지원|... |11월 말.*출근"` to return NO matches. Section 6 line 161 contained both: `인터뷰 60일 → 11월 말 출근에 빠듯 | 8/8 지원으로 버퍼 확보, 복수 회사 병행`. Leaving it untouched would have violated the plan's own verification criteria and left a factual inconsistency in the risk table.
- **Fix:** Rewrote the single risk row to `인터뷰 60일 → 2027 상반기 출근에 빠듯 | 2027-01 지원으로 버퍼 확보, 복수 회사 병행`. No other Section 6 rows touched.
- **Files modified:** `docs/plan/MASTER_PLAN.md` (line 161)
- **Commit:** `e66f6e4` (included in Task 1 commit)

## Known Stubs

None. Deliverable files listed in Section 9 (`docs/study/sql-patterns.md`, `sql-portfolio/`, `sql-scenarios.md`, `sql-interview-log.md`) are intentionally future artifacts — they are Phase 1-4 outputs of the SQL track itself and will be created as each phase begins. The Section 9 text frames them as future deliverables, not broken references.

## Commits

| Task | Hash | Message |
|------|------|---------|
| 1 | `e66f6e4` | `docs(260418-erx-01): shift application timeline from 2026-08 to 2027-01` |
| 2 | `ab3b568` | `docs(260418-erx-02): add Section 9 SQL Analytical Practice Track` |

## Self-Check: PASSED

- `docs/plan/MASTER_PLAN.md` exists and contains Section 9 heading (line ~188) — FOUND
- Commit `e66f6e4` exists in `git log --oneline` — FOUND
- Commit `ab3b568` exists in `git log --oneline` — FOUND
- Footer is final non-empty line with `*Updated: 2026-04-18 ...*` — FOUND
