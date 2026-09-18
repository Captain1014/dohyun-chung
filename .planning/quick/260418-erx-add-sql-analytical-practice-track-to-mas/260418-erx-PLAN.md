---
phase: 260418-erx-add-sql-analytical-practice-track-to-mas
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - docs/plan/MASTER_PLAN.md
autonomous: true
requirements:
  - QUICK-01  # Add SQL analytical practice track (5 phases) to MASTER_PLAN.md
  - QUICK-02  # Update application timeline from 2026-08-08 to 2027-01 throughout document
must_haves:
  truths:
    - "MASTER_PLAN.md reflects 2027-01 application start, not 2026-08-08"
    - "MASTER_PLAN.md contains a clearly labeled SQL analytical practice track with 5 phases (Phase 0-4)"
    - "SQL track shows sustainable 3-5 hrs/week pace across 2026-04 to 2026-12"
    - "Weekly rhythm (Section 4) references the SQL analytical practice cadence"
    - "Milestone checkpoints (Section 5) reflect 2027-01 application and include SQL milestones"
    - "Existing MASTER_PLAN.md content (Sections 1-8 structure) is preserved, not deleted"
  artifacts:
    - path: "docs/plan/MASTER_PLAN.md"
      provides: "Updated master plan with SQL analytical track section and corrected application timeline"
      contains: "SQL Analytical Practice Track"
  key_links:
    - from: "MASTER_PLAN.md header"
      to: "Section 5 milestones"
      via: "consistent 2027-01 application date"
      pattern: "2027-01|2027\\.01|1월 지원"
    - from: "Section 4 weekly rhythm"
      to: "Section 9 SQL track"
      via: "reference to SQL analytical practice cadence"
      pattern: "SQL analytical|StrataScratch|분석형 SQL"
---

<objective>
Update `docs/plan/MASTER_PLAN.md` with two coordinated changes: (1) shift the application timeline from 2026-08-08 to 2027-01 everywhere it appears, and (2) add a new "Section 9: SQL Analytical Practice Track" with 5 phases covering 2026-04 to 2026-12 at a sustainable 3-5 hrs/week pace.

Purpose: Reflect the user's 2026-04-18 decision to defer applications from Aug 2026 to Jan 2027 (work commitments require sustainable pace), and formalize the SQL analytical practice track that complements the existing SnowPro/SAA/GCP certification tracks.

Output: Single updated `docs/plan/MASTER_PLAN.md` preserving Sections 1-8 structure with targeted edits + new Section 9.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
</execution_context>

<context>
@.planning/STATE.md
@CLAUDE.md
@docs/plan/MASTER_PLAN.md

<interfaces>
<!-- Current MASTER_PLAN.md structure (preserve these section boundaries) -->

Sections in current MASTER_PLAN.md (as of 2026-04-09 update):
1. 현직자 분석 — Snowflake Korea SE
2. 자격증 전략
3. 주간 상세 타임라인 (2026.04.09 ~ 2026.07.31) — contains Phase 1-5 subsections
4. 매주 꾸준히 할 것 (4~7월 내내)
5. 마일스톤 체크포인트
6. 리스크 & 완화
7. 기존 문서 활용
8. 이번 주 할 일 (2026-04-09 기준)

Dates/phrases that mention the old Aug 2026 application timeline (must be updated to 2027-01):
- Line 3: "**North star:** 7월 지원 시점에..."
- Line 16: "**일정:** 4월~7월 준비 → **8/8 지원 시작** → 11월 말 출근"
- Section 3 header (line 52): "주간 상세 타임라인 (2026.04.09 ~ 2026.07.31)"
- Section 3 Phase 4 table (lines 102-111): "Phase 4: 지원 + 인터뷰 (8월~10월)" with 8/8 rows
- Section 3 Phase 5 table (lines 113-119): "Phase 5: 이직 (11월)"
- Section 5 milestones (lines 136-144): "8월 초", "8/8", "11월 말" entries
- Section 4 header (line 123): "매주 꾸준히 할 것 (4~7월 내내)"
- Line 180 footer: "*Updated: 2026-04-09 — 주간 상세 플랜, 11월 말 출근 목표..."

SQL resources to reference in new Section 9:
- LeetCode SQL 50 (Phase 0 — already in flight, finish by mid-April)
- StrataScratch (Phase 1 — analytical SQL practice, business case questions)
- DataLemur (Phase 1/4 alternative, interview-style SQL)
- Mode Analytics SQL tutorial (Phase 1 foundation)
- BigQuery public datasets (Phase 2 — window functions, CTEs on real data)
- Snowflake trial TPC-H sample data (Phase 3 — scenario/warehouse training)
- Phase 4 — interview prep (mock SQL live-coding, STAR + SQL)
</interfaces>
</context>

<tasks>

<task type="auto">
  <name>Task 1: Shift application timeline from 2026-08-08 to 2027-01 throughout MASTER_PLAN.md</name>
  <files>docs/plan/MASTER_PLAN.md</files>
  <action>
Edit `docs/plan/MASTER_PLAN.md` to update every reference to the Aug 2026 application window so it reflects the new 2027-01 application start. Do NOT rewrite unaffected content. Apply these targeted edits:

1. **Line 3 (North star):** Change `7월 지원 시점에` → `2027년 1월 지원 시점에`.

2. **Line 16 (일정):** Change `4월~7월 준비 → **8/8 지원 시작** → 11월 말 출근` → `2026-04 ~ 2026-12 준비 → **2027-01 지원 시작** → 2027년 상반기 입사`.

3. **Section 3 header (line 52):** Change `## 3. 주간 상세 타임라인 (2026.04.09 ~ 2026.07.31)` → `## 3. 주간 상세 타임라인 (2026.04.09 ~ 2026.12.31)`. Add a one-line note directly under the header: `> 2026-04-18 업데이트: 지원 시점을 2026-08 → 2027-01로 연기 (업무 병행 위해 지속가능한 페이스 확보). 세부 주차 테이블은 2026-07까지 유지하되, 8월 이후는 아래 Phase 4/5와 Section 9 SQL 트랙으로 흡수.`

4. **Phase 4 subsection (line 102 onward):** Change header `### Phase 4: 지원 + 인터뷰 (8월~10월)` → `### Phase 4: 지원 + 인터뷰 (2027-01 ~ 2027-03)`. In the following table, replace all `8/8` row-labels with `2027-01 (1주차)`, `8월 3주` with `2027-01 (3주차)`, `8월 4주~` with `2027-02 이후`, and `8~10월` with `2027-01 ~ 2027-03`.

5. **Phase 5 subsection (lines 113-119):** Change header `### Phase 5: 이직 (11월)` → `### Phase 5: 이직 (2027 상반기)`. In the table replace `11월 초` → `오퍼 수락 시점`, `11월 중순` → `출국/정착`, `11월 말` → `출근 (2027 Q1~Q2)`. Replace the line `**출근**` with `**출근 (2027 상반기)**`.

6. **Section 4 header (line 123):** Change `## 4. 매주 꾸준히 할 것 (4~7월 내내)` → `## 4. 매주 꾸준히 할 것 (2026-04 ~ 2026-12 내내)`.

7. **Section 5 milestones block (lines 136-144):** Replace the fenced code block with:
```
4/13 (일) ── LeetCode SQL 50 완료 (Phase 0 · SQL 트랙)
2026-05 초 ── SnowPro Core 합격
2026-06 중순 ── AWS SAA 합격
2026-06 말 ── GCP 기초 속성 완료
2026-08 말 ── StrataScratch 분석형 SQL 50+ 문제 완료 (Phase 1 · SQL 트랙)
2026-10 말 ── BigQuery window/CTE 실전 완료 (Phase 2 · SQL 트랙)
2026-12 중순 ── Snowflake 시나리오 SQL 훈련 완료 (Phase 3 · SQL 트랙)
2026-12 말 ── 데모 시나리오, STAR 7개, 경쟁사 분석, 이력서 완료
2027-01 ── 지원 시작
2027 상반기 ── 출근
```

8. **Line 180 footer:** Update the Updated-stamp line to: `*Updated: 2026-04-18 — 지원 시점 2027-01로 연기, SQL 분석 트랙 (Section 9) 추가, 지속가능한 3-5 hrs/week SQL 페이스*`.

Do not touch Section 6 (리스크), Section 7 (기존 문서), or Section 8 (이번 주 할 일) in this task — Task 2 will handle Section 9 addition only. Preserve all markdown table syntax and emoji markers exactly.
  </action>
  <verify>
    <automated>grep -n "2027-01\|2027년 1월\|2026-12\|2026-04-18" docs/plan/MASTER_PLAN.md | wc -l | awk '$1 >= 6 {print "PASS"; exit 0} {print "FAIL: need >=6 matches, got " $1; exit 1}'</automated>
  </verify>
  <done>
`docs/plan/MASTER_PLAN.md` contains zero remaining mentions of `8/8 지원`, `8월 초` (in milestones), or `11월 말 출근`. All eight targeted edits above are applied. Footer shows `*Updated: 2026-04-18 ...*`.
  </done>
</task>

<task type="auto">
  <name>Task 2: Add Section 9 — SQL Analytical Practice Track (5 phases, 3-5 hrs/week, 2026-04 to 2026-12)</name>
  <files>docs/plan/MASTER_PLAN.md</files>
  <action>
Append a new `## 9. SQL Analytical Practice Track` section to `docs/plan/MASTER_PLAN.md` immediately AFTER Section 8 (이번 주 할 일) and BEFORE the footer `*Updated: ...*` line. Also add one short bullet to Section 4 to reference the new track.

**Step A — Insert new bullet into Section 4 table (매주 꾸준히 할 것):**

Replace the existing row `| SQL 문제풀이 | 매일 1문제 | SE 면접에서 SQL 라이브 코딩 출제됨 |` with TWO rows:
```
| SQL 분석 트랙 (Section 9) | 주 3-5시간 | 분석형 SQL · 윈도우 함수 · BigQuery/Snowflake 시나리오 — SE 면접 라이브 코딩 대비 |
| SQL 가벼운 문제풀이 | 매일 1문제 (부담 없는 수준) | 감각 유지 — 본 훈련은 Section 9 SQL 트랙에서 누적 |
```

**Step B — Append new Section 9 block just before the final `*Updated: ...*` footer line. Use this exact content:**

```
---

## 9. SQL Analytical Practice Track

**목표:** SE/Data 면접에서 자주 나오는 **분석형 SQL** (window, CTE, funnel, cohort, 비즈니스 문제 해결 쿼리)을 실전 수준으로 끌어올린다. 자격증 트랙(SnowPro/SAA/GCP)과 **병렬로** 돌리되, 업무와 병행 가능한 **주 3-5시간** 페이스로 누적한다.

**전체 기간:** 2026-04 ~ 2026-12 (약 9개월, 주 3-5시간 × 36주 ≈ 108-180 시간)

**Why a dedicated track:** 자격증 강의만으로는 "SELECT/GROUP BY" 수준을 넘어선 분석형 SQL 감각이 쌓이지 않음. 현직자 갭 분석(Section 1)에서 "SQL 레벨업 필요"로 명시된 항목을 이 트랙으로 체계적으로 메운다.

### Phase 개요

| Phase | 기간 | 메인 리소스 | 주 목표 | 주간 페이스 | 산출물 / 마일스톤 |
|-------|------|-------------|---------|-------------|-------------------|
| **Phase 0 — LeetCode SQL 50 마무리** | 2026-04 (W1-W2) | LeetCode Top SQL 50 | 기본 문법·조인·집계 재확인 | 3-4 hrs/wk | SQL 50 완료 (4/13) |
| **Phase 1 — StrataScratch 분석형 SQL** | 2026-05 ~ 2026-08 (~16주) | StrataScratch (주), DataLemur (보조), Mode Analytics 튜토리얼 | 비즈니스 문제형 쿼리, Easy→Medium 50+ 문제 | 3-5 hrs/wk | 2026-08 말: 50+ 문제 풀이 + 패턴 노트 |
| **Phase 2 — BigQuery Window/CTE 실전** | 2026-09 ~ 2026-10 (~8주) | BigQuery 공개 데이터셋 (NYC taxi, GitHub, Google Trends) | window 함수, CTE, QUALIFY, 퍼널/코호트 쿼리 직접 작성 | 3-5 hrs/wk | 2026-10 말: 개인 쿼리 포트폴리오 10+ 개 |
| **Phase 3 — Snowflake 시나리오 훈련** | 2026-11 ~ 2026-12 중순 (~6주) | Snowflake 트라이얼 + TPC-H 샘플 데이터 | warehouse 튜닝 + 분석 쿼리 시나리오 (예: 매출/리텐션/어트리뷰션) | 3-5 hrs/wk | 2026-12 중순: 시나리오 3-5개 문서화 (데모 재료) |
| **Phase 4 — 면접 SQL 실전 준비** | 2026-12 말 ~ 2027-01 초 (~3주) | DataLemur SE 인터뷰셋 + 모의 라이브 코딩 | 45-60분 라이브 코딩 시뮬레이션, STAR + SQL 연결 | 3-5 hrs/wk | 2027-01 초: 모의 SQL 인터뷰 3회 완료 |

### 주간 리듬 (Phase 1-3 기준)

- **평일 (화·목, 각 45-60분):** 문제 1-2개 풀고 해설 읽기 → 패턴 노트에 기록
- **주말 (토 또는 일, 1-2시간):** 주간 리뷰 + 실제 데이터셋(BigQuery/Snowflake)에 응용 1회
- **총 3-5시간/주** — 업무 몰릴 땐 3시간, 여유 있을 땐 5시간으로 조정 (하한은 지킴)

### 리소스 요약

| 리소스 | 페이즈 | 비용 | 용도 |
|--------|--------|------|------|
| LeetCode SQL 50 | Phase 0 | Free | 문법·조인 재확인 |
| StrataScratch | Phase 1 (메인) | Free tier + 필요 시 유료 | 비즈니스 문제형 SQL (Airbnb, Uber, Google 등 실제 인터뷰 문제) |
| DataLemur | Phase 1, 4 | Free tier + Premium | SE/Data 인터뷰 스타일 문제 + 해설 |
| Mode Analytics SQL 튜토리얼 | Phase 1 초반 | Free | 분석 관점의 SQL 기초 다지기 |
| BigQuery 공개 데이터셋 | Phase 2 | Free (1TB/월 쿼리 무료) | 실데이터로 window/CTE 연습 |
| Snowflake 트라이얼 + TPC-H | Phase 3 | Free (30일 + $400 크레딧) | warehouse·시나리오 훈련 |

### 산출물 (누적)

1. `docs/study/sql-patterns.md` — StrataScratch/DataLemur에서 반복 등장하는 분석 쿼리 패턴 정리 (Phase 1 시작 시 생성)
2. `docs/study/sql-portfolio/` — BigQuery/Snowflake에서 직접 작성한 쿼리 10+ 개 (Phase 2-3)
3. `docs/study/sql-scenarios.md` — 3-5개 비즈니스 시나리오 (매출/리텐션/어트리뷰션) 쿼리 + 결과 해설 (데모 재료, Phase 3)
4. `docs/study/sql-interview-log.md` — 모의 SQL 인터뷰 피드백 로그 (Phase 4)

### 리스크 & 완화

| 리스크 | 완화 |
|--------|------|
| 업무 바빠서 주 3시간도 못 채우는 주 발생 | Phase 1을 최대 4주까지 연장 허용. 하한(주 3시간)은 지키되 상한(5시간)은 flexible |
| 자격증 공부(SnowPro/SAA)와 시간 충돌 | 자격증 기간(4-6월)에는 Phase 1 페이스를 하한(3 hrs/wk)로 낮추고, 자격증 이후 Phase 2부터 상한까지 끌어올림 |
| 분석형 SQL은 혼자 풀면 피드백 부족 | DataLemur/StrataScratch 해설 + LLM(Claude/GPT)에 쿼리 리뷰 요청으로 보완 |
| 12월 면접 대비 집중도 부족 | Phase 4 (2026-12 말 ~ 2027-01 초)를 면접 준비 Phase 3(Section 3)과 통합 운영 |

```

Ensure the final file ends with the updated `*Updated: 2026-04-18 ...*` footer line from Task 1 (it should remain the last line). Do not duplicate it.
  </action>
  <verify>
    <automated>grep -c "## 9. SQL Analytical Practice Track" docs/plan/MASTER_PLAN.md | awk '$1 == 1 {print "PASS"; exit 0} {print "FAIL: expected exactly 1 Section 9 heading, got " $1; exit 1}' && grep -c "StrataScratch" docs/plan/MASTER_PLAN.md | awk '$1 >= 3 {print "PASS"; exit 0} {print "FAIL: expected >=3 StrataScratch mentions, got " $1; exit 1}' && grep -E "Phase 0|Phase 1|Phase 2|Phase 3|Phase 4" docs/plan/MASTER_PLAN.md | grep -c "SQL\|StrataScratch\|BigQuery\|Snowflake 시나리오\|LeetCode" | awk '$1 >= 5 {print "PASS"; exit 0} {print "FAIL: expected >=5 SQL phase rows, got " $1; exit 1}'</automated>
  </verify>
  <done>
Section 9 exists with the heading `## 9. SQL Analytical Practice Track`, contains the 5-phase table (Phase 0 LeetCode, Phase 1 StrataScratch, Phase 2 BigQuery, Phase 3 Snowflake, Phase 4 interview), specifies 3-5 hrs/week pace, and spans 2026-04 to 2026-12. Section 4 has an additional row referencing the SQL analytical track. Footer `*Updated: 2026-04-18 ...*` is the final line of the file and appears exactly once.
  </done>
</task>

</tasks>

<verification>
After both tasks complete, run these one-shot checks on `docs/plan/MASTER_PLAN.md`:

1. **Timeline coherence:** `grep -E "8/8 지원|8월 초.*지원|11월 말.*출근" docs/plan/MASTER_PLAN.md` returns NO matches (all old-timeline strings removed).
2. **New timeline present:** `grep -c "2027-01" docs/plan/MASTER_PLAN.md` returns ≥ 4.
3. **Section 9 present and well-formed:** `grep -c "## 9. SQL Analytical Practice Track" docs/plan/MASTER_PLAN.md` returns exactly 1.
4. **SQL resources named:** file contains `StrataScratch`, `BigQuery`, `DataLemur`, `LeetCode SQL 50`, `TPC-H`.
5. **Pace spec:** file contains the string `3-5 hrs/wk` or `주 3-5시간` in Section 9.
6. **Structural integrity:** file still contains headings for Sections 1-8 (`## 1.` through `## 8.`) — existing structure preserved.
7. **Footer stamp:** final non-empty line starts with `*Updated: 2026-04-18`.
</verification>

<success_criteria>
- `docs/plan/MASTER_PLAN.md` consistently reflects 2027-01 application start (no lingering Aug 2026 references in headers/milestones/timeline).
- A new Section 9 exists documenting the 5-phase SQL analytical practice track at 3-5 hrs/week spanning 2026-04 to 2026-12.
- Section 4 references the new SQL track.
- Section 5 milestones include SQL track milestones (Phase 1/2/3 checkpoints).
- Existing Sections 1-8 structure is preserved; edits are targeted, not rewrites.
- Footer shows `*Updated: 2026-04-18 ...*`.
</success_criteria>

<output>
After completion, create `.planning/quick/260418-erx-add-sql-analytical-practice-track-to-mas/260418-erx-SUMMARY.md` summarizing:
- What was changed (timeline shift + new Section 9)
- Before/after counts for key timeline strings
- Location of new Section 9 and its phase structure
</output>
