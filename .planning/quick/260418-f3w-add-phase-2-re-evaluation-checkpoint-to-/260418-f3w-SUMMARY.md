---
phase: 260418-f3w-add-phase-2-re-evaluation-checkpoint-to-
plan: 01
subsystem: master-plan-refinement
tags: [planning, career, sql-track, checkpoint, decision-driven]
dependency-graph:
  requires: [docs/plan/MASTER_PLAN.md (Section 9 baseline: 5 Phase rows, Phase 0-4)]
  provides: [Section 9 with 2026-10 Re-evaluation Checkpoint + conditional Track A/B Phase 3-4]
  affects: [Section 9 only — Sections 1-8 untouched]
tech-stack:
  added: []
  patterns: [decision-gated branching, conditional phase routing, rubric-based self-assessment]
key-files:
  created: []
  modified:
    - docs/plan/MASTER_PLAN.md
decisions:
  - Phase 3-4 made decision-driven (mock interview at 2026-10) rather than calendar-driven
  - Track A default posture if Phase 0-2 executed faithfully; Track B as safety net
  - SQL sufficiency bar anchored to 3 concrete criteria (window functions, JOIN live coding, business-language explanation EN/KR)
  - Either mock interview OR self-assessment rubric accepted as evaluation mechanism
metrics:
  duration: ~8 minutes
  completed: 2026-04-18
  tasks: 1/1
  files-modified: 1
---

# Phase 260418-f3w Plan 01: Add 2026-10 Re-evaluation Checkpoint + Track A/B Phase 3-4 Summary

Inserted a 2026-10 re-evaluation checkpoint at the end of Phase 2 in `docs/plan/MASTER_PLAN.md` Section 9 and converted the original Phase 3-4 into conditional Track A (pre-sales reallocation) vs Track B (original SQL training preserved), so the final 9 weeks of the SQL track are decision-driven rather than calendar-driven.

## What Changed in Section 9

Three surgical edits to `docs/plan/MASTER_PLAN.md` Section 9:

1. **"Why a dedicated track" paragraph** — appended a `**핵심 원칙:**` line stating "SE 차별화는 pre-sales storytelling이지 SQL 퍼즐이 아닙니다. 따라서 Phase 0-2로 SQL 기본기를 쌓은 뒤 **2026-10 말에 재평가**하여, SQL이 면접 bar를 넘었다면 Phase 3-4의 시간을 데모/STAR/경쟁사 분석으로 재분배합니다."

2. **Phase 개요 table** — replaced the two Phase 3 and Phase 4 rows with five new rows:
   - `🔀 2026-10 Re-evaluation` (1주, 2-3 hrs) — branch point
   - `Phase 3A (Track A: SQL 충분) — Pre-sales 전환` (~6주)
   - `Phase 3B (Track B: SQL 갭 잔존) — Snowflake 시나리오 훈련` (~6주)
   - `Phase 4A (Track A) — 최종 면접 리허설` (~3주)
   - `Phase 4B (Track B) — 면접 SQL 실전 준비` (~3주)

3. **New `### 2026-10 Re-evaluation Checkpoint` subsection** — inserted between `### 주간 리듬 (Phase 1-3 기준)` and `### 리소스 요약`. Contains:
   - 3-item SQL sufficiency bar (window functions 유창성, JOIN 라이브 코딩, 영어/한국어 비즈니스 설명)
   - 2 evaluation mechanisms (mock interview [recommended] or self-assessment rubric)
   - ASCII decision tree routing pass → Track A, fail/partial → Track B
   - Default posture statement: Track A is the expected path if Phase 0-2 was executed faithfully; Track B is a safety net, not a default

## Phase 개요 Table Row Count

| State | Row count | Composition |
|-------|-----------|-------------|
| Before | 5 rows | Phase 0, 1, 2, 3, 4 |
| After | 8 rows | Phase 0, 1, 2 (preserved) + 🔀 Re-evaluation + Phase 3A, 3B, 4A, 4B |

Preserved rows (byte-identical): Phase 0 — LeetCode SQL 50 마무리, Phase 1 — StrataScratch 분석형 SQL, Phase 2 — BigQuery Window/CTE 실전.

## Untouched Regions (confirmed)

- **Sections 1-8** — byte-identical to pre-edit state (verified: `grep -cE "^## [1-8]\." = 8`).
- **Section 9 intro paragraphs** (목표, 전체 기간) — unchanged; only the "Why a dedicated track" paragraph received an appended `**핵심 원칙:**` line.
- **Section 9 `### 주간 리듬 (Phase 1-3 기준)`** — unchanged.
- **Section 9 `### 리소스 요약` table** — unchanged.
- **Section 9 `### 산출물 (누적)` list** — unchanged.
- **Section 9 `### 리스크 & 완화` table** — unchanged.
- **Footer** — `*Updated: 2026-04-18 — 지원 시점 2027-01로 연기, SQL 분석 트랙 (Section 9) 추가, 지속가능한 3-5 hrs/week SQL 페이스*` remains as the final line exactly once.

## Track A vs Track B Decision Criteria

**Sufficiency bar (pass all 3 → Track A):**
1. Window functions 유창성 — ROW_NUMBER/RANK/DENSE_RANK, LAG/LEAD, explicit FRAME clause (ROWS BETWEEN) fluent
2. JOIN 라이브 코딩 — INNER/LEFT/SELF/ANTI joins live-coded with ON vs WHERE filter separation correct
3. 비즈니스 언어로 쿼리 설명 — query logic and results explainable to business stakeholders in both EN and KR ("why does this query answer this business question")

**Evaluation mechanism (pick one):**
- (A) Mock SQL interview (recommended) — DataLemur SE interview set or LLM-driven 45-60 min live coding, recorded, pass/fail per bar item
- (B) Self-assessment rubric — "막힘 없이 가능 / 느리지만 가능 / 막힘" per bar item; 3/3 "막힘 없이 가능" to pass

**Routing:**
- Pass all 3 → Track A (Phase 3A + 4A): 15-min Snowflake demo design + rehearsal, STAR 7 refinement (SF SE + GCP CE), competitive 1-pager (Snowflake vs Databricks/BigQuery/Redshift), integrated mock interviews
- Fail 1+ → Track B (Phase 3B + 4B): original Snowflake scenario training + DataLemur live coding drills

## Verification Results

All plan-defined checks pass:

| Check | Expected | Actual | Status |
|-------|----------|--------|--------|
| `### 2026-10 Re-evaluation Checkpoint` heading count | 1 | 1 | PASS |
| `Track A` mentions | ≥3 | 6 | PASS |
| `Track B` mentions | ≥3 | 5 | PASS |
| Rationale line count | 1 | 1 | PASS |
| `sufficiency bar` mention | ≥1 | 1 | PASS |
| 3 bar criteria (Window / JOIN / business-language) | 3 | 3 | PASS |
| Top sections 1-8 preserved | 8 | 8 | PASS |
| `Phase 3A\|3B\|4A\|4B` occurrences | ≥4 | 6 | PASS |
| Phase 0/1/2 row preservation | 1 each | 1 each | PASS |
| Footer last line | `Updated: 2026-04-18 ...` | matches | PASS |
| Track A deliverable markers (15-min demo / STAR 7 / Snowflake vs Databricks) | present | present | PASS |

## Deviations from Plan

None — plan executed exactly as written. The three surgical edits landed cleanly, no Rule 1-4 deviations triggered, no auth gates encountered.

## Commits

- `27e4d43` — docs(260418-f3w-01): add 2026-10 re-evaluation checkpoint + Track A/B split in Section 9

## Self-Check: PASSED

- File exists: `/Users/dochung/Desktop/2026/docs/plan/MASTER_PLAN.md` — FOUND (modified)
- Commit exists: `27e4d43` — FOUND in `git log --oneline --all`
- All 11 verification checks — PASS
