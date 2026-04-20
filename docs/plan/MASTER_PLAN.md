# Master Plan — Cloud Solutions Engineer Career Transition

**North star:** 2027년 1월 지원 시점에 **Snowflake SE + 멀티 클라우드 외국계** 서류를 통과할 수 있는 **자격증·기술 깊이·면접 스토리**를 갖춘다.

**Target companies (priority order):**

| 순위 | 회사 | 직군 | 비고 |
|------|------|------|------|
| **1** | **Snowflake Korea** | **SE Associate** (메인) + Account Engineer (같이 지원) | 한국 오피스 확장 중 (85→150명), SE 조직 성장 |
| **2** | Google Korea | Customer Engineer | 포지션 열릴지 불확실 — 준비는 하되 의존하지 않음 |
| **3** | Datadog Korea | Technical Support Engineer | 보험 — 합격 가능성 높음 |
| **4** | AWS Korea | TAM / SA | SAA 자격증 활용 |
| **5** | Microsoft Korea | CSAM / TSP | 클라우드 + 고객 대면 경험 활용 |
| **6** | GitLab, 기타 외국계 | SE / CSE | 넓게 깔기 |

**일정:** 2026-04 ~ 2026-12 준비 → **2027-01 지원 시작** → 2027년 상반기 입사

---

## 1. 현직자 분석 — Snowflake Korea SE

### Snowflake Associate SE 현직자 (Jaejin Huh)

| 항목 | 현직자 | 나 | 갭 분석 |
|------|--------|-----|---------|
| 데이터 엔지니어링 | Redshift, BigQuery, Airflow, Kafka, K8s | 표면적 수준 | **큰 갭 — 메워야 함** |
| DB/SQL 전문성 | DBA 출신, Oracle 튜닝, RDS 운영 | 사용 수준 | **갭 있음 — SQL 레벨업 필요** |
| 클라우드 경험 | AWS + GCP 멀티클라우드 운영 | AWS 활용 수준 | 갭 있음 |
| 고객 대면 | AWS Support (티켓 기반) | 300+ 유저, 다국적 이해관계자 | **내가 앞섬** |
| 영어 | Professional Working | Fluent (미국 거주/NYU) | **내가 앞섬** |
| 자격증 | SnowPro Core, 정보처리기사, K8s, GKE | 없음 | **즉시 보강 필요** |

### 나의 차별화 포인트 (면접에서 밀 것)

1. **Native-level 영어 + 미국 근무 경험** — 글로벌 고객/HQ 커뮤니케이션 우위
2. **SaaS 플랫폼 0→Production** — 고객 입장을 이해하는 SE
3. **다국적 이해관계자 조율 (인도/미국/한국)** — SE 핵심 역량
4. **고객 온보딩·교육·데모 직접 리드** — pre-sales/post-sales 양쪽 경험

---

## 2. 자격증 전략

| 순서 | 자격증 | 목표 시기 | 이유 |
|------|--------|-----------|------|
| **1** | **SnowPro Core** | 4월 (2-3주) | 1순위 회사(Snowflake) JD에 preferred 명시 |
| **2** | **AWS SAA** | 5-6월 (2달) | AWS/MS/기타 외국계 지원 시 기본 자격 + 클라우드 기본기 증명 |
| **3** | **GCP 기초 학습 (10~20시간)** | 6월 4주 (SAA 직후) | Google CE 면접 대비 — 자격증 불필요, GCP 핵심 서비스 + AWS 비교 수준이면 충분 ([출처](https://practice-interviews.ghost.io/understanding-the-customer-engineer-interview-process-at-google/)) |

---

## 3. 주간 상세 타임라인 (2026.04.09 ~ 2026.12.31)

> 2026-04-18 업데이트: 지원 시점을 2026-08 → 2027-01로 연기 (업무 병행 위해 지속가능한 페이스 확보). 세부 주차 테이블은 2026-07까지 유지하되, 8월 이후는 아래 Phase 4/5와 Section 9 SQL 트랙으로 흡수.

### Phase 1: SnowPro Core + SQL 기초 (4월, 4주)

| 주차 | 날짜 | 메인 학습 | 병행 | 산출물 |
|------|------|-----------|------|--------|
| **W1** | 4/7~4/13 | SnowPro Core 강의 (Udemy) — 25% | ✅ LeetCode SQL 50 마무리 (26/50→50/50) | SQL 50 완료 |
| **W2** | 4/14~4/20 | SnowPro Core 강의 — 50% + Snowflake 트라이얼 핸즈온 시작 | SQL Window Functions 시작 (LeetCode 태그) | 강의 50% |
| **W3** | 4/21~4/27 | SnowPro Core 강의 — 75~100% + 핸즈온 (warehouse, 테이블 설계) | SQL Window Functions 계속 | 강의 완료 |
| **W4** | 4/28~5/4 | SnowPro Core 모의고사 반복 + 약점 보강 + **시험 응시** | Snowflake 핸즈온 심화 | **🎯 SnowPro Core 합격** |

**학습 리소스:**
- Udemy: SnowPro Core COF-C02/C03 강의 (4.6/5, 12.5K ratings, 2026.03 업데이트)
- Snowflake 무료 트라이얼 (30일)
- Snowflake 공식 문서
- LeetCode SQL 50: https://leetcode.com/studyplan/top-sql-50/

### Phase 2: AWS SAA + Snowflake 심화 (5월~6월 중순, 6주)

| 주차 | 날짜 | 메인 학습 | 병행 | 산출물 |
|------|------|-----------|------|--------|
| **W5** | 5/5~5/11 | SAA 강의 시작 (Udemy) — IAM, VPC, S3 | Snowflake 핸즈온 (Snowpipe, Stages) | SAA 강의 20% |
| **W6** | 5/12~5/18 | SAA 강의 — EC2, RDS, Lambda, ELB | Snowflake 핸즈온 (Data Sharing, Streams) | SAA 강의 40% |
| **W7** | 5/19~5/25 | SAA 강의 — Route53, CloudFront, SQS/SNS | Snowflake 심화 (Tasks, Cortex AI) | SAA 강의 60% |
| **W8** | 5/26~6/1 | SAA 강의 — 나머지 완료 | Snowflake 심화 (Snowpark 기초) | SAA 강의 100% |
| **W9** | 6/2~6/8 | SAA 모의고사 반복 + 약점 보강 | 데이터 아키텍처 (Lake vs Warehouse vs Lakehouse) | 모의고사 70%+ |
| **W10** | 6/9~6/15 | SAA 모의고사 + 약점 집중 + **시험 응시** | ETL/ELT 패턴 정리 | **🎯 AWS SAA 합격** |

**병행 (5~6월 내내):**
- SQL: Window Functions + Medium 난이도 (매일 1문제)
- Snowflake 핸즈온: 주 3회, 1시간
- LinkedIn: 주 1회 포스트/댓글 — Snowflake Korea + Google Korea 네트워크

### Phase 2.5: GCP 기초 속성 (6월 3~4주, 2주)

| 주차 | 날짜 | 할 일 | 산출물 |
|------|------|-------|--------|
| **W11** | 6/16~6/22 | GCP 핵심 서비스 — Compute Engine, GKE, BigQuery, Cloud Storage, IAM | 서비스별 정리 노트 |
| **W12** | 6/23~6/29 | AWS↔GCP 서비스 매핑 + Google CE 면접 포인트 정리 | **GCP 비교표 완성** |

### Phase 3: 면접 준비 (7월, 4주)

| 주차 | 날짜 | 할 일 | 산출물 |
|------|------|-------|--------|
| **W13** | 6/30~7/6 | **경쟁사 분석** — Snowflake vs Databricks vs BigQuery vs Redshift | 비교표 1장 |
| **W14** | 7/7~7/13 | **Snowflake 데모 연습** — 15분 데모 시나리오 설계 + 연습 | 데모 스크립트 완성 |
| **W15** | 7/14~7/20 | **STAR 스토리 7개** — Snowflake SE + Google CE 맞춤 버전 각각 | `interview-star-stories.md` 완성 |
| **W16** | 7/21~7/27 | **이력서 최종 수정** + LinkedIn 업데이트 + 모의 면접 1~2회 | 이력서 완성 |
| **W17** | 7/28~8/3 | 버퍼 — 부족한 부분 보강 + 최종 점검 | **지원 준비 완료** |

### Phase 4: 지원 + 인터뷰 (2027-01 ~ 2027-03)

| 시기 | 회사 | 준비물 |
|------|------|--------|
| **2027-01 (1주차)** | Snowflake SE Associate + AE | SnowPro Core + Snowflake 핸즈온 + 데모 |
| **2027-01 (1주차)** | Google CE | GCP 기초 (자격증 불필요) + AWS↔GCP 비교 숙지 + CE 맞춤 STAR |
| **2027-01 (3주차)** | Datadog TSE | 현재 이력서로도 가능 |
| **2027-01 (3주차)** | AWS TAM/SA | SAA + AWS 경험 |
| **2027-02 이후** | MS, GitLab, 기타 | 클라우드 cert + 고객 대면 경험 활용 |
| **2027-01 ~ 2027-03** | 인터뷰 진행 (평균 60일) | 프레젠테이션 라운드 준비 포함 |

### Phase 5: 이직 (2027 상반기)

| 시기 | 할 일 |
|------|-------|
| **오퍼 수락 시점** | 오퍼 수락 + 입사 서류 |
| **출국/정착** | 한국 도착 + 정착 |
| **출근 (2027 Q1~Q2)** | **출근 (2027 상반기)** |

---

## 4. 매주 꾸준히 할 것 (2026-04 ~ 2026-12 내내)

| 항목 | 빈도 | 이유 |
|------|------|------|
| SQL 분석 트랙 (Section 9) | 주 3-5시간 | 분석형 SQL · 윈도우 함수 · BigQuery/Snowflake 시나리오 — SE 면접 라이브 코딩 대비 |
| SQL 가벼운 문제풀이 | 매일 1문제 (부담 없는 수준) | 감각 유지 — 본 훈련은 Section 9 SQL 트랙에서 누적 |
| Snowflake 핸즈온 | 주 3회, 1시간 | 면접에서 "직접 해봤다"고 말할 수 있어야 함 |
| LinkedIn 활동 | 주 1회 포스트/댓글 | Snowflake Korea + Google Korea 직원 네트워크 |
| 데이터 아키텍처 공부 | 주 1회 | Lake/Warehouse/Lakehouse, ETL/ELT 패턴 |

---

## 5. 마일스톤 체크포인트

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

---

## 6. 리스크 & 완화

| 리스크 | 완화 |
|--------|------|
| Snowflake SE 포지션이 8월에 없을 수 있음 | AE도 같이 지원 + LinkedIn Alert 지금부터 + Datadog/AWS/MS 넓게 깔기 |
| Google CE 포지션 열릴지 불확실 | 2순위이므로 영향 제한적 — 열리면 즉시 지원 |
| SAA 2달 안에 실패 | 7월 초까지 연장 가능 — 면접 준비와 병행 |
| Snowflake 기술 깊이 부족 (현직자 대비) | 영어 + 고객 대면으로 차별화, 기술은 SnowPro + 핸즈온으로 최소 기준 충족 |
| 인터뷰 60일 → 2027 상반기 출근에 빠듯 | 2027-01 지원으로 버퍼 확보, 복수 회사 병행 |

---

## 7. 기존 문서 활용

| 문서 | 용도 | 수정 필요 |
|------|------|-----------|
| `docs/study/interview-star-stories.md` | STAR 스토리 — **Snowflake SE + Google CE 양쪽 버전** | W15에서 작업 |
| `docs/study/ce-prep-beyond-certification.md` | Google CE 특화 준비 | 2순위 — GCP 속성 학습 시 참고 |
| `docs/plan/pca-exam-prep.md` | PCA 준비 노트 | 보류 — 현 플랜에서 PCA 불필요 |

---

## 8. 이번 주 할 일 (2026-04-18 기준)

1. [ ] LeetCode SQL 50 나머지 19문제 중 **5문제** 풀기
2. [ ] Udemy SnowPro Core 강의 등록 + 이번 주 **2시간 수강**
3. [ ] Snowflake 무료 trial 계정 생성 + 로그인만 해두기
4. [ ] StrataScratch 가입 + ID 10087 풀어보기 (30분, 감 잡기용)
5. [ ] LinkedIn Job Alert: Snowflake Korea SE + Databricks Korea SE
6. [ ] STAR 스토리 후보 3개 메모 (현 KissProducts 업무 중 RCA/위기복구/이해관계자 조율 케이스)

---

---

## 9. SQL Analytical Practice Track

**목표:** SE/Data 면접에서 자주 나오는 **분석형 SQL** (window, CTE, funnel, cohort, 비즈니스 문제 해결 쿼리)을 실전 수준으로 끌어올린다. 자격증 트랙(SnowPro/SAA/GCP)과 **병렬로** 돌리되, 업무와 병행 가능한 **주 3-5시간** 페이스로 누적한다.

**전체 기간:** 2026-04 ~ 2026-12 (약 9개월, 주 3-5시간 × 36주 ≈ 108-180 시간)

**Why a dedicated track:** 자격증 강의만으로는 "SELECT/GROUP BY" 수준을 넘어선 분석형 SQL 감각이 쌓이지 않음. 현직자 갭 분석(Section 1)에서 "SQL 레벨업 필요"로 명시된 항목을 이 트랙으로 체계적으로 메운다.

**핵심 원칙:** SE 차별화는 pre-sales storytelling이지 SQL 퍼즐이 아닙니다. 따라서 Phase 0-2로 SQL 기본기를 쌓은 뒤 **2026-10 말에 재평가**하여, SQL이 면접 bar를 넘었다면 Phase 3-4의 시간을 데모/STAR/경쟁사 분석으로 재분배합니다.

### Phase 개요

| Phase | 기간 | 메인 리소스 | 주 목표 | 주간 페이스 | 산출물 / 마일스톤 |
|-------|------|-------------|---------|-------------|-------------------|
| **Phase 0 — LeetCode SQL 50 마무리** | 2026-04 (W1-W2) | LeetCode Top SQL 50 | 기본 문법·조인·집계 재확인 | 3-4 hrs/wk | SQL 50 완료 (4/13) |
| **Phase 1 — StrataScratch 분석형 SQL** | 2026-05 ~ 2026-08 (~16주) | StrataScratch (주), DataLemur (보조), Mode Analytics 튜토리얼 | 비즈니스 문제형 쿼리, Easy→Medium 50+ 문제 | 3-5 hrs/wk | 2026-08 말: 50+ 문제 풀이 + 패턴 노트 |
| **Phase 2 — BigQuery Window/CTE 실전** | 2026-09 ~ 2026-10 (~8주) | BigQuery 공개 데이터셋 (NYC taxi, GitHub, Google Trends) | window 함수, CTE, QUALIFY, 퍼널/코호트 쿼리 직접 작성 | 3-5 hrs/wk | 2026-10 말: 개인 쿼리 포트폴리오 10+ 개 |
| **🔀 2026-10 Re-evaluation** | 2026-10 말 (1주) | 모의 SQL 인터뷰 1회 + self-assessment rubric | SQL 면접 bar 도달 여부 판정 → Track A or Track B 선택 | 2-3 hrs | 재평가 결과 노트 + 경로 결정 |
| **Phase 3A (Track A: SQL 충분) — Pre-sales 전환** | 2026-11 ~ 2026-12 중순 (~6주) | Snowflake 데모 환경 + 경쟁사 공식 자료 | 15-min Snowflake 데모 설계·리허설 + STAR 7개 refinement + 경쟁사 1-pager | 3-5 hrs/wk | 데모 스크립트 1개 + STAR 7개 (SF SE/GCP CE 버전) + 경쟁사 비교 1-pager |
| **Phase 3B (Track B: SQL 갭 잔존) — Snowflake 시나리오 훈련** | 2026-11 ~ 2026-12 중순 (~6주) | Snowflake 트라이얼 + TPC-H 샘플 데이터 | warehouse 튜닝 + 분석 쿼리 시나리오 (매출/리텐션/어트리뷰션) | 3-5 hrs/wk | 2026-12 중순: 시나리오 3-5개 문서화 (데모 재료) |
| **Phase 4A (Track A) — 최종 면접 리허설** | 2026-12 말 ~ 2027-01 초 (~3주) | 모의 인터뷰 (데모 + STAR + 행동 질문) | 데모 20분 + Q&A 25분 통합 리허설 | 3-5 hrs/wk | 2027-01 초: 종합 모의 인터뷰 2-3회 완료 |
| **Phase 4B (Track B) — 면접 SQL 실전 준비** | 2026-12 말 ~ 2027-01 초 (~3주) | DataLemur SE 인터뷰셋 + 모의 라이브 코딩 | 45-60분 라이브 코딩 시뮬레이션, STAR + SQL 연결 | 3-5 hrs/wk | 2027-01 초: 모의 SQL 인터뷰 3회 완료 |

### 주간 리듬 (Phase 1-3 기준)

- **평일 (화·목, 각 45-60분):** 문제 1-2개 풀고 해설 읽기 → 패턴 노트에 기록
- **주말 (토 또는 일, 1-2시간):** 주간 리뷰 + 실제 데이터셋(BigQuery/Snowflake)에 응용 1회
- **총 3-5시간/주** — 업무 몰릴 땐 3시간, 여유 있을 땐 5시간으로 조정 (하한은 지킴)

### 2026-10 Re-evaluation Checkpoint

Phase 2 (BigQuery Window/CTE 실전) 종료 시점에 **의도적인 재평가**를 진행합니다. 이 체크포인트의 목적은 남은 9주(Phase 3-4)의 학습 시간을 SQL 드릴링에 계속 투자할지, 아니면 SE 면접에서 점수를 더 크게 움직이는 pre-sales 자산(데모/STAR/경쟁사)에 재분배할지 결정하는 것입니다.

**SQL 면접 "sufficiency bar" (다 충족 시 Track A):**

1. **Window functions 유창성** — ROW_NUMBER/RANK/DENSE_RANK, LAG/LEAD, 명시적 FRAME 절(ROWS BETWEEN)까지 막힘 없이 작성 가능
2. **JOIN 라이브 코딩** — INNER/LEFT/SELF/ANTI join을 실시간으로 풀어내고, 필터 조건을 ON 절과 WHERE 절에 올바르게 분리할 수 있음
3. **비즈니스 언어로 쿼리 설명** — 작성한 쿼리의 로직과 결과를 **영어**와 **한국어** 양쪽으로 비즈니스 이해관계자 수준으로 설명 가능 (단순 구문 설명이 아닌 "왜 이 쿼리가 이 비즈니스 질문에 답하는가")

**재평가 메커니즘 (둘 중 하나 선택):**

- **(A) 모의 SQL 인터뷰 1회 (권장):** DataLemur SE 인터뷰셋 또는 LLM(Claude/GPT) 기반 45-60분 라이브 코딩 세션. 녹화 후 위 3개 bar 항목별로 pass/fail 판정
- **(B) Self-assessment rubric:** 3개 bar 항목에 대해 각각 "막힘 없이 가능 / 느리지만 가능 / 막힘" 체크. 3개 모두 "막힘 없이 가능"이면 통과

**결정 트리:**

```
2026-10 말 재평가 결과
│
├─ SQL bar 3개 항목 모두 충족 (pass)
│   └─ ▶ Track A: Phase 3A + Phase 4A (Pre-sales 전환)
│          · 15-min Snowflake 데모 시나리오 설계 + 리허설
│          · STAR story 7개 refinement (Snowflake SE + Google CE 버전)
│          · 경쟁사 분석 1-pager (Snowflake vs Databricks/BigQuery/Redshift)
│
└─ SQL bar 1개 이상 미충족 (fail or partial)
    └─ ▶ Track B: Phase 3B + Phase 4B (기존 SQL 시나리오/면접 훈련 유지)
           · Snowflake 시나리오 훈련 (매출/리텐션/어트리뷰션)
           · DataLemur SE 인터뷰셋 + 45-60분 라이브 코딩 반복
```

**기본 전제:** Phase 0-2를 성실히 수행했다면 Track A 경로가 유력합니다. Track B는 안전망으로 남겨두되, "SQL이 완벽하지 않으면 계속해야 한다"는 관성에 끌려가지 않도록 bar 기준을 엄격히 유지합니다. SE 면접의 합격 요인은 데모와 스토리이지 완벽한 SQL이 아니기 때문입니다.

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

---

---

## 10. 면접 준비 4대 역량 — 우선순위·리소스·타임라인 매핑

**목적:** SE 면접을 통과하는 데 실제로 필요한 역량을 **중요도 가중치**로 정리하고, Section 3/9의 타임라인에 매핑해 어느 달에 무엇을 공부해야 하는지를 한 눈에 본다.

### 10.1 SE 면접 역량 중요도 (Snowflake/Databricks SE 기준)

| # | 역량 | 가중치 | 평가 방식 | 왜 이 비중인가 |
|---|------|--------|-----------|----------------|
| 1 | **SQL + Snowflake 제품지식** | **40%** | 라이브 SQL 코딩 + 15-min 데모 | SE 기술 검증의 1차 관문 — 여기서 막히면 이후 라운드 진입 불가 |
| 2 | **Business Engineering (Soft Skill)** | **25%** | 행동 질문 + STAR + 모의 고객 응대 | SE의 본질은 "기술을 비즈니스 언어로" — 당신 이력서 강점과 직결 |
| 3 | **System Design 기초** | **20%** | 화이트보드 아키텍처 설명 | 멀티테넌시/API/확장성 — 당신 이력서 강점, 방어 가능 |
| 4 | **Troubleshooting / RCA** | **10%** | 사례 기반 질문 + 가상 장애 시나리오 | 이미 강함, 복습으로 충분 |
| 5 | **Python / 자료구조** | **5%** | 드물게 가벼운 코딩 질문 | SE는 알고리즘 하드 안 나옴, 읽기 가능 수준이면 OK |

### 10.2 역량별 리소스 (받은 리스트 필터링)

**카테고리 1: Coding & Data (메인 SQL은 Section 9 참조)**
- Python 기초 읽기: [Codecademy Learn Python 3](https://www.codecademy.com/) — **최대 10시간, 라이브 코딩용 아님**
- 자료구조 개념만: [Programiz DSA](https://www.programiz.com/dsa) — Array / Hash / Stack / Queue만 (나머지 skip)
- ❌ **NeetCode는 제외** — SE는 알고리즘 퍼즐 안 나옴, 시간 낭비

**카테고리 2: System Design**
- 핵심: [ByteByteGo](https://bytebytego.com/) — 멀티테넌시 챕터는 **필수** (당신 이력서 연결)
- 보조: [Grokking the System Design Interview (Educative)](https://www.educative.io/) — LB/캐싱/복제
- 스킵: AWS Architecture Center 심화 — SE는 데이터 엔지니어 아님, 고수준 이해로 충분

**카테고리 3: Troubleshooting**
- 방법론: [Google SRE Book — Troubleshooting 챕터](https://sre.google/sre-book/effective-troubleshooting/) — 3시간만 투자, 프레임워크만 흡수
- 디버깅 사례: [Sentry Answers](https://sentry.io/answers/) — 본인 KissProducts 이슈 대입 → STAR로 변환
- 기술문서 작성: [Pragmatic Engineer — Technical Design Docs](https://blog.pragmaticengineer.com/scaling-engineering-teams-design-docs/)

**카테고리 4: Business Engineering**
- **가장 중요**: [Exponent](https://www.tryexponent.com/) — SE 전용 트랙 존재, 모의 면접 녹화·복기
- 글로벌 팀 조율: [HBR Leading Remote Teams](https://hbr.org/) — 당신의 인도/미국 경험 STAR화
- 요구사항 명세화: [Product Plan PRD Guide](https://www.productplan.com/glossary/product-requirements-document/)

### 10.3 월별 학습 매핑 (Section 3와 통합)

| 월 | 메인 자격증/이벤트 | Python | SQL (Section 9) | System Design | Troubleshooting | Business Eng |
|---|---|---|---|---|---|---|
| **2026-04** | SnowPro Core 강의 시작 | - | Phase 0: SQL 50 마무리 | - | - | STAR 재료 수집 (현업무) |
| **2026-05** | SnowPro Core 강의 완료 | Codecademy 기초 (주 1시간) | Phase 1 시작: StrataScratch | - | - | - |
| **2026-06** | **🎯 SnowPro Core 합격** | - | Phase 1 진행 | - | - | - |
| **2026-07** | AWS SAA 강의 시작 | - | Phase 1 진행 | ByteByteGo 주 1챕터 | - | - |
| **2026-08** | AWS SAA 강의 중 | - | Phase 1 완료 | ByteByteGo 주 1챕터 | - | - |
| **2026-09** | AWS SAA 모의고사 | - | Phase 2: BigQuery window | Grokking 주 1주제 | SRE Book 3시간 | - |
| **2026-10** | **🎯 AWS SAA 합격** + 🔀 SQL 재평가 | - | Phase 2 완료 | - | Sentry Answers + STAR | Exponent 시작 (주 1시간) |
| **2026-11** | 한국 이민 + GCP 속성 | - | Phase 3 (Track A or B) | - | - | Exponent 모의 + PRD guide |
| **2026-12** | 한국 지사 적응 + 네트워킹 | - | Phase 3 완료 | - | - | Exponent 모의 3회 + 커피챗 5명 |
| **2027-01** | **🎯 지원 시작** | - | Phase 4 (면접 실전) | - | - | 실제 인터뷰 |

### 10.4 매달 학습 시간 예산 (회사일 병행 가정)

| 월 | 자격증 | SQL (Section 9) | 기타 3개 역량 합계 | 총계 |
|---|---|---|---|---|
| 2026-04 ~ 06 (SnowPro 집중) | 6 hrs/wk | 3 hrs/wk | 1 hr/wk (Python 읽기) | **10 hrs/wk** |
| 2026-07 ~ 10 (SAA 집중) | 5 hrs/wk | 3-4 hrs/wk | 2 hrs/wk (System Design) | **10-11 hrs/wk** |
| 2026-11 ~ 12 (이민+면접준비) | 1-2 hrs/wk (GCP 속성) | 3 hrs/wk | 3-4 hrs/wk (Exponent + RCA + PRD) | **7-9 hrs/wk** (이사 부담 고려 축소) |

### 10.5 역량별 산출물 체크리스트 (2027-01 지원 전까지)

- [ ] **SQL**: StrataScratch 50+ 문제 + BigQuery 쿼리 포트폴리오 10+ 개 + Snowflake 시나리오 3-5개 (Section 9 산출물)
- [ ] **Python**: Codecademy Learn Python 3 완주 — 읽기 수준
- [ ] **System Design**: ByteByteGo 멀티테넌시 + LB/캐싱/복제 노트 1장
- [ ] **Troubleshooting**: 본인 KissProducts 경험 기반 **RCA STAR 3개** (D-30 위기복구 포함)
- [ ] **Business Engineering**:
  - STAR 스토리 7개 (Snowflake SE + Google CE 버전 각각)
  - Snowflake 15-min 데모 스크립트 1개
  - 경쟁사 1-pager (Snowflake vs Databricks/BigQuery/Redshift)
  - Exponent 모의 면접 3회 녹화 + 복기

---

*Updated: 2026-04-18 — Section 8 갱신 + Section 10 (4대 역량 프레임워크·월별 매핑·시간 예산) 추가. Section 9 SQL 트랙과 통합 운영.*
