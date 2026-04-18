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
| SQL 문제풀이 | 매일 1문제 | SE 면접에서 SQL 라이브 코딩 출제됨 |
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

## 8. 이번 주 할 일 (2026-04-09 기준)

1. [ ] LeetCode SQL 50 마무리 (24문제 남음 → 4/13 일요일까지)
2. [ ] Udemy SnowPro Core 강의 수강 중 — 이번 주 50% 목표
3. [ ] Snowflake 무료 트라이얼 계정 생성 (아직 안 했다면)
4. [ ] SnowPro Core 시험 일정 확인 (온라인 응시 가능 여부)
5. [ ] LinkedIn Job Alert 설정: Snowflake Korea SE, Google Korea CE

---

*Updated: 2026-04-18 — 지원 시점 2027-01로 연기, SQL 분석 트랙 (Section 9) 추가, 지속가능한 3-5 hrs/week SQL 페이스*
