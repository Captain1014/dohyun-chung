# GCP Foundation Study Notes

학습일: 2026-03-26
Phase: 1 — GCP Foundation
범위: FOUND-01 (Resource Hierarchy), FOUND-02 (IAM)

---

## 1. GCP Resource Hierarchy

### 구조
```
Organization (회사)
  └── Folder (부서/환경)
       └── Project (리소스가 사는 곳)
            └── Resources (VM, DB, Storage 등)
```

### 핵심 포인트
- **Project**가 GCP의 기본 단위 — 모든 리소스는 Project 안에 존재
- **IAM 정책은 위에서 아래로 상속** — Organization에 설정하면 모든 하위에 적용
- **Billing Account**는 Project와 독립적 — 하나의 Billing Account로 여러 Project 결제 가능

### 실무 설계 패턴
- Folder = 팀/부서별, Project = 환경별 (dev/staging/prod)
- 팀별 Folder로 권한 분리, Project별로 환경 격리
- CE 역할: 고객 조직 구조 → GCP 구조 매핑 제안

---

## 2. IAM (Identity and Access Management)

### 핵심 공식
> **누가 (Member)** + **무엇을 (Role)** + **어디서 (Resource)** = IAM Policy

### Member 종류
- **User Account** — 사람 (user:kim@company.com)
- **Service Account** — 프로그램/앱 (my-app@project.iam.gserviceaccount.com)
- **Group** — 여러 사람 묶음 (group:dev-team@company.com)

### Role 3가지 종류
| 종류 | 설명 | 실무 추천 |
|------|------|----------|
| Basic (Owner/Editor/Viewer) | 너무 넓은 권한 | 비추천 — 최소화 |
| Predefined | 서비스별 세분화 (compute.viewer 등) | **가장 많이 사용** |
| Custom | 직접 만든 역할 | 특수한 경우에만 |

### Service Account — 왜 중요한가
- 프로그램에 사람 계정 쓰면 → 퇴사/계정 변경 시 시스템 장애 위험
- Service Account로 → 사람 의존성 제거, 키 로테이션 가능
- **실제 경험:** 퇴사자 계정 의존으로 시스템 다운 → Service Account 도입으로 해결

### 실무 Best Practices
1. **최소 권한 원칙 (Least Privilege)** — 필요한 만큼만 권한 부여
2. **Predefined Role 사용** — Basic Role(특히 Owner/Editor) 최소화
3. **Group으로 권한 관리** — 개인별 권한 설정은 확장 불가
4. **Service Account 분리** — 앱/서비스마다 전용 Service Account 생성

### CE 활용 포인트
- 고객 첫 상담 시 "조직 구조 + 권한 관리" 설계가 첫 번째 작업
- Service Account 필요성을 실제 사고 사례로 설명 가능
- Google은 "최소 권한 원칙"을 강하게 추천 — CE가 이를 고객에게 전달

---

## 퀴즈 복습

| # | 질문 | 정답 | 이유 |
|---|------|------|------|
| 1 | 리소스가 속하는 단위는? | Project | 모든 GCP 리소스는 Project 안에 존재 |
| 2 | Org 레벨 권한 설정하면? | 모든 하위에 상속 | IAM은 위→아래 상속 구조 |
| 3 | VM만 볼 수 있게 하려면? | Predefined Role | compute.viewer — 서비스별 세분화 |
| 4 | 앱에 Storage 권한 주려면? | Service Account | 프로그램 전용 계정 + 최소 권한 Role |

---

*다음 학습: Cloud SQL* ✅ 완료 (아래 섹션 참조)

---

## 5. VPC 네트워킹

학습일: 2026-03-27
범위: FOUND-05 (VPC Networking)

### 핵심 특징 — Global Network

GCP VPC는 전 세계가 하나의 네트워크. VPC 하나가 서울/미국/유럽을 모두 포함 가능.
같은 VPC 안이면 Google 내부 네트워크로 통신 (인터넷 불필요).

### 구조
```
VPC (글로벌)
  └── Subnet (특정 Region에 속함, CIDR IP 범위)
       └── VM (특정 Zone에 속함)
```

### Firewall Rules

- Direction: INGRESS(들어오는) / EGRESS(나가는)
- Tag 기반 적용 → VM 역할별 규칙 관리
- 표준 패턴: 웹서버(tag=web) 80/443 허용 / DB(tag=db) 3306은 web 태그에서만

### IP 주소

| | Internal IP | External IP |
|--|-------------|-------------|
| 범위 | 10.x.x.x (사설) | 실제 인터넷 IP |
| 비용 | 무료 | 유료 |
| DB 서버 | 사용 | 불필요 (보안상 제거) |
| 웹 서버 | 사용 | 필요 |

### Cloud NAT

External IP 없는 VM도 Outbound 인터넷 사용 가능 (OS 업데이트 등).
들어오는 트래픽은 차단 — 보안과 기능 동시에.

### 여러 VPC 연결

- **VPC Peering:** 두 VPC 직접 연결, 각각 독립 관리
- **Shared VPC:** 네트워크를 Host Project에서 중앙 관리, 대기업 선호

### Load Balancer

| 종류 | 용도 | 범위 |
|------|------|------|
| HTTP(S) LB | 웹 트래픽 | **글로벌** |
| TCP/UDP LB | 일반 네트워크 | 리전/글로벌 |
| Internal LB | VPC 내부 분산 | 리전 |

글로벌 HTTP LB: IP 하나로 전 세계에서 가장 가까운 서버로 자동 라우팅.

### 표준 3-tier 아키텍처
```
인터넷 → 글로벌 HTTP LB → 웹서버 MIG (External IP)
                              ↓ Internal IP
                           DB 서버 (External IP 없음)
                              ↓ Cloud NAT
                           인터넷 (업데이트용)
```

### 퀴즈 복습

| # | 질문 | 정답 |
|---|------|------|
| 1 | 웹서버/DB 방화벽 설정? | 웹서버 태그 80/443 허용, DB 태그 web에서만 3306 |
| 2 | External IP 없는 VM이 업데이트하려면? | Cloud NAT |
| 3 | 전세계 서비스 LB? | 글로벌 HTTP(S) LB |

---

## 3. Compute Engine (VM)

학습일: 2026-03-27
범위: FOUND-03 (Compute Engine)

### VM 구성 요소

```
VM (인스턴스)
  ├── Machine Type (CPU + RAM 조합)
  ├── Boot Disk (운영체제 저장공간)
  ├── Network (VPC 연결)
  ├── Region & Zone (데이터센터 위치)
  └── Service Account (VM에 부여할 GCP 권한)
```

### Machine Type 계열

| 계열 | 용도 |
|------|------|
| e2 | 일반 웹서버, 저비용 |
| n2 | 범용 균형 |
| c3 | 고성능 컴퓨팅 |
| m3 | 메모리 집약 (대형 DB) |
| a2/a3 | GPU (AI 학습) |

이름 규칙: `[계열]-[타입]-[CPU수]` → e2-standard-4 = e2 계열, CPU 4개

### Region & Zone

- **Region** = 지리적 위치 (도시 단위)
  - `asia-northeast3` = 서울
  - `us-central1` = 미국 중부
- **Zone** = Region 안의 데이터센터 (a, b, c)
- 한국 사용자 서비스 → `asia-northeast3` 선택

### VM 상태와 비용

| 상태 | 비용 |
|------|------|
| RUNNING | CPU + 메모리 + 디스크 |
| TERMINATED | 디스크만 (CPU/메모리 없음) |
| DELETED | 없음 |

→ 개발 서버는 퇴근 후 TERMINATED로 비용 절약

### Preemptible / Spot VM

- 60-91% 저렴, 단 GCP가 언제든 종료 가능
- 가능: 배치 처리, ML 학습 (체크포인트 저장 가능한 것)
- 불가: 웹 서버, DB 서버

### MIG (Managed Instance Group) — 엔터프라이즈 필수

```
Load Balancer → Instance Group (VM 집합)
                  ├── VM-1 (Zone A)
                  ├── VM-2 (Zone B)  ← 자동 증감
                  └── VM-3 (Zone C)
```

- **Auto Scaling:** 트래픽에 따라 VM 자동 추가/삭제
- **Auto Healing:** VM 다운 시 자동 교체
- **Multi-Zone:** 데이터센터 장애에도 서비스 유지
- 단일 VM 구성은 엔터프라이즈에 비추천

### 비용 할인 옵션

| 옵션 | 할인율 | 조건 | 용도 |
|------|--------|------|------|
| CUD (약정) | ~57% | 1-3년 약정 | 항상 켜는 서버 |
| SUD (자동) | ~30% | 자동 적용 | 일반 운영 |
| Preemptible | ~60-91% | 종료 가능 | 배치/ML |

### CE 고객 상담 질문 체크리스트

1. 서버가 항상 켜있나요, 특정 시간만 쓰나요? → 비용 옵션
2. 트래픽이 일정한가요, 폭주가 있나요? → MIG 여부
3. 사용자가 주로 어느 나라에 있나요? → Region
4. 장애 허용 범위는? → Multi-Zone 여부

### 퀴즈 복습

| # | 질문 | 정답 | 이유 |
|---|------|------|------|
| 1 | 한국 사용자 서비스 Region? | asia-northeast3 | 서울 리전, 지연시간 최소화 |
| 2 | 트래픽 폭주 대응 구성? | MIG + Auto Scaling | 자동 증감, 장애 복구 |
| 3 | 24시간 웹서버 1년+ 운영 할인? | CUD (약정) | 최대 57%, 항상 켜는 서버에 최적 |

---

## 4. Cloud Storage

학습일: 2026-03-27
범위: FOUND-04 (Cloud Storage)

### 구조

```
Bucket (전 세계 유일한 이름)
  └── Objects (실제 파일 — 크기 제한 없음)
```

- 폴더처럼 보이지만 실제로는 평면 구조 (`/`가 포함된 파일명)
- Bucket 이름은 전 세계에서 유일해야 함

### Storage Class

| 클래스 | 접근 빈도 | 최소 보관 | 특징 |
|--------|----------|----------|------|
| Standard | 자주 | 없음 | 저장 비용 높음, 읽기 저렴 |
| Nearline | 월 1회 미만 | 30일 | 중간 |
| Coldline | 분기 1회 미만 | 90일 | 저장 저렴, 읽기 비쌈 |
| Archive | 연 1회 미만 | 365일 | 저장 가장 저렴, 읽기 매우 비쌈 |

**원칙:** 자주 읽을수록 Standard, 거의 안 읽으면 Archive. 저장↓ 읽기↑ 반비례.

### Lifecycle Policy

오래된 파일 자동으로 클래스 전환 또는 삭제:
```
30일 후 → Nearline
90일 후 → Coldline
365일 후 → Archive
7년 후 → 삭제
```
→ 로그, 백업 비용 절감에 활용

### 접근 제어

- **IAM (권장):** Bucket 전체에 권한 → 관리 간편
- **ACL:** Object별 권한 → 특수한 경우만
- **allUsers 공개:** 인터넷 누구나 접근 → 공개 문서, 정적 웹사이트

### 실전 패턴

| 용도 | 설명 |
|------|------|
| 정적 웹사이트 | Bucket 공개 + Cloud CDN 연결 |
| 미디어 저장 | 이미지/동영상 원본 보관 |
| DB 백업 | Coldline/Archive에 저장 |
| 로그 보관 | Lifecycle으로 자동 Archive |
| BigQuery 연동 | CSV/Parquet → Bucket → BigQuery |

### 퀴즈 복습

| # | 질문 | 정답 | 이유 |
|---|------|------|------|
| 1 | 사진(자주) vs 2년 전 백업(거의 안 읽힘) | 사진 Standard, 백업 Archive | 접근 빈도에 맞는 클래스 |
| 2 | 전세계 공개 문서 설정 | allUsers 공개 | 공개 문서 → CDN 연결도 추천 |

---

## 6. Cloud SQL & GCP 데이터베이스

학습일: 2026-03-27
범위: FOUND-06 (Cloud SQL & Managed Databases)

### Cloud SQL — 관리형 관계형 DB

GCP가 운영하는 완전 관리형 DB. MySQL, PostgreSQL, SQL Server 지원.
내가 할 일: 데이터 넣고 쿼리만. GCP가 할 일: 백업, 패치, 모니터링.

### 고가용성 (HA)

```
Primary (Region A-Zone 1) ←→ Standby (Region A-Zone 2)
         ↕ 동기 복제
장애 발생 → 자동으로 Standby가 Primary로 승격 (수 초~수십 초)
```

- 같은 Region, 다른 Zone에 Standby 배치
- Standby는 평소에 읽기 불가 (대기만 함)
- 장애 발생 시 자동 Failover → 다운타임 최소화

### Read Replica

- Primary와 별도 인스턴스, 읽기 전용
- 분석 쿼리, 리포트 등 읽기 부하 분산에 활용
- HA Standby와 다름: Read Replica는 실제로 쿼리 처리 가능

### 연결 방법

| 방법 | 설명 | 언제 사용 |
|------|------|----------|
| Private IP | VPC 내부 직접 연결 | 같은 VPC의 앱 서버 |
| Cloud SQL Auth Proxy | 암호화 터널, 인증 자동 처리 | 외부 연결, 로컬 개발 |
| Public IP | 인터넷 직접 노출 | 비추천 (보안 위험) |

**실무 표준:** Private IP + Cloud SQL Auth Proxy 조합

### GCP 데이터베이스 선택 가이드

| DB | 유형 | 언제 선택 | 핵심 특징 |
|----|------|----------|----------|
| **Cloud SQL** | 관계형 (MySQL/PG/MSSQL) | 기존 앱 마이그레이션 | 완전 관리형, 리전 단위 |
| **Cloud Spanner** | 관계형 + 글로벌 분산 | 글로벌 서비스 + 강한 일관성 필요 | 전 세계 같은 데이터, SQL 지원 |
| **Firestore** | NoSQL 문서형 | 모바일/웹 앱, 실시간 동기화 | SDK 제공, 오프라인 지원 |
| **Bigtable** | NoSQL 와이드컬럼 | IoT, 시계열, 분석 (수억 rows) | 초고속 대용량 읽기/쓰기 |
| **Memorystore** | 인메모리 (Redis/Memcached) | 캐시, 세션, 실시간 순위표 | 마이크로초 응답속도 |

### CE 고객 상담 로직

고객: "DB 어떤 거 써야 해요?"
→ 질문 1: "지금 MySQL/PostgreSQL 쓰고 계세요?" → Yes → Cloud SQL
→ 질문 2: "서비스가 글로벌이고 모든 지역에서 같은 데이터를 바라야 하나요?" → Yes → Cloud Spanner
→ 질문 3: "모바일 앱이고 실시간 동기화 필요한가요?" → Yes → Firestore

### 퀴즈 복습

| # | 질문 | 정답 | 이유 |
|---|------|------|------|
| 1 | Cloud SQL HA에서 장애 시 어떻게 되나? | Standby로 자동 Failover | Primary↔Standby 동기 복제, 자동 전환 |
| 2 | 글로벌 e-commerce, 전 지역 같은 재고 | Cloud Spanner | 글로벌 분산 + 강한 일관성 + SQL |

---

## 7. AWS → GCP 서비스 매핑

학습일: 2026-03-28
범위: FOUND-07 (AWS → GCP Service Mapping)

### 핵심 구조적 차이: 네트워킹

- AWS VPC = **리전 단위** → 리전마다 VPC 생성, 리전 간 통신은 피어링 필요
- GCP VPC = **글로벌** → VPC 1개 안에 여러 리전의 서브넷 배치, 리전 간 통신 자동
- 이유: Google이 전 세계 해저 광케이블을 직접 소유, GCP 트래픽은 Google 내부망으로 이동

### 주요 서비스 매핑

| 카테고리 | AWS | GCP | 핵심 차이 |
|---------|-----|-----|----------|
| VM | EC2 | Compute Engine | GCP는 Live Migration 기본 |
| 서버리스 함수 | Lambda | Cloud Functions | 유사 |
| 컨테이너 서버리스 | Fargate | **Cloud Run** | Docker만 있으면 서버리스 실행 |
| K8s | EKS | **GKE** | Google이 K8s 원조, Autopilot 모드로 노드까지 자동 관리 |
| 오브젝트 스토리지 | S3 | Cloud Storage | GCP는 멀티리전/듀얼리전 기본 제공 |
| 관계형 DB | RDS | Cloud SQL | 유사 |
| 글로벌 DB | Aurora (리전) | **Cloud Spanner** (글로벌) | Spanner는 전 세계 강한 일관성 |
| NoSQL | DynamoDB | Firestore / Bigtable | Firestore=모바일, Bigtable=대규모 분석 |
| 데이터 웨어하우스 | Redshift | **BigQuery** | 서버리스, 쿼리 단위 과금, 인프라 관리 불필요 |
| AI/ML | SageMaker | **Vertex AI** | GCP 자체 Gemini 모델 포함 |
| IaC | CloudFormation | Terraform (공식 권장) | GCP는 오픈소스 도구 권장 |
| 모니터링 | CloudWatch | Cloud Monitoring + Logging | GCP는 분리 운영 |
| LB | ALB/NLB (리전별) | Cloud Load Balancing | GCP는 **글로벌 단일 IP** 가능 |

### GCP 3대 킬러 서비스 (CE 필수 암기)

1. **GKE** — K8s 원조, Autopilot 모드, 컨트롤 플레인 무료
2. **BigQuery** — 서버리스 데이터 웨어하우스, 쿼리 단위 과금
3. **Vertex AI + Gemini** — AI/ML 통합 플랫폼, 자체 LLM

### 퀴즈 복습

| # | 질문 | 정답 | 이유 |
|---|------|------|------|
| 1 | 서울/미국/유럽에 서버, VPC 몇 개? | 1개면 충분 | GCP VPC는 글로벌, 서브넷만 리전별 배치 |
| 2 | AWS Redshift → GCP 이전 | BigQuery | 서버리스, 쿼리 단위 과금, 인프라 관리 불필요 |
| 3 | EKS 관리 힘든 고객에게 추천 | GKE Autopilot | K8s 원조, 노드 자동 관리, 컨트롤 플레인 무료 |

---

## 8. BigQuery

학습일: 2026-03-28
범위: FOUND-10 (BigQuery Fundamentals)

### 개념: 데이터 웨어하우스

- 일반 DB (Cloud SQL): 앱이 실시간으로 읽기/쓰기 (주문, 회원가입)
- 데이터 웨어하우스 (BigQuery): 대량 데이터 분석 (매출 트렌드, 이탈 패턴, 리포트)

### BigQuery 3대 특징

1. **서버리스** — 인프라 관리 불필요, 데이터 넣고 SQL 쓰면 끝
2. **쿼리 단위 과금** — 스캔한 데이터 양 기준 ($5/TB), 안 쓰면 $0
3. **속도** — 수십 TB를 수 초~수십 초 안에 분석 (내부 병렬 분산 처리)

### 구조

```
프로젝트 → 데이터셋 (폴더) → 테이블 (데이터) / 뷰 (저장된 쿼리)
```

SQL 그대로 사용 (MySQL/PostgreSQL 경험 있으면 바로 가능)

### 비용 절약 (ACE 시험 단골)

| 방법 | 설명 | 효과 |
|------|------|------|
| 파티셔닝 | 날짜별로 테이블 분할 | 필요한 날짜만 스캔 → 비용 감소 |
| 클러스터링 | 자주 필터하는 컬럼 기준 정렬 | 스캔량 감소 |
| SELECT * 피하기 | 필요한 컬럼만 선택 | 불필요한 스캔 방지 |

### 추가 기능

- **BigQuery ML**: SQL만으로 머신러닝 모델 생성 (Python/TensorFlow 불필요)
- **Looker Studio 연동**: BigQuery 데이터를 대시보드/차트로 시각화 (무료)

### CE 추천 로직

- "데이터 분석/리포트" → BigQuery
- "실시간 주문 처리" → Cloud SQL
- "모바일 실시간 동기화" → Firestore
- "ML 모르는 분석가가 예측 모델" → BigQuery ML

### 퀴즈 복습

| # | 질문 | 정답 | 이유 |
|---|------|------|------|
| 1 | 1년간 상품 판매 분석 — Cloud SQL vs BigQuery? | BigQuery | 대량 데이터 분석 용도, 앱 DB에 부하 안 줌 |
| 2 | 매일 이번 달만 조회하는데 전체 스캔 비용 문제 | 날짜별 파티셔닝 | 필요한 날짜만 스캔 → 비용 절감 |
| 3 | Python 모르는 분석가가 이탈 예측 모델 만들기 | BigQuery ML | SQL만으로 ML 모델 생성 가능 |

---

## 9. gcloud CLI

학습일: 2026-03-28
범위: FOUND-09 (gcloud CLI Fundamentals)

### 명령어 패턴

```
gcloud [서비스] [리소스] [동작] [이름] --[옵션]
```

동작: create / list / describe / delete / start / stop

### 4가지 CLI 도구 구분 (ACE 필수)

| 도구 | 용도 | 예시 |
|------|------|------|
| `gcloud` | GCP 서비스 전반 | `gcloud compute instances create` |
| `gsutil` | Cloud Storage 전용 | `gsutil cp file.txt gs://bucket/` |
| `bq` | BigQuery 전용 | `bq query "SELECT ..."` |
| `kubectl` | K8s Pod/Service 관리 | `kubectl apply -f deploy.yaml` |

### ACE 시험 필수 명령어

**설정:**
- `gcloud config list` — 현재 설정 확인
- `gcloud config set project PROJECT_ID` — 프로젝트 변경
- `gcloud config set compute/region asia-northeast3` — 리전 기본값

**Compute Engine:**
- `gcloud compute instances create/list/describe/stop/start/delete`

**Cloud Storage:**
- `gsutil mb gs://bucket` — 버킷 생성
- `gsutil cp local gs://bucket/` — 파일 업로드
- `gsutil ls gs://bucket/` — 파일 목록

**IAM:**
- `gcloud projects get-iam-policy PROJECT_ID` — 정책 확인
- `gcloud projects add-iam-policy-binding` — 역할 부여

**GKE:**
- `gcloud container clusters create` — 클러스터 생성
- `gcloud container clusters get-credentials` — 클러스터 연결
- 이후 `kubectl`로 Pod/Service 관리

### Cloud Shell

- GCP 콘솔 브라우저 내 터미널 (무료)
- gcloud/gsutil/bq/kubectl 미리 설치됨
- ACE 실습에 최적

### 퀴즈 복습

| # | 질문 | 정답 | 이유 |
|---|------|------|------|
| 1 | 서울에 e2-medium VM 만들기 | `gcloud compute instances create --machine-type=e2-medium --zone=asia-northeast3-a` | 패턴: gcloud + 서비스 + 리소스 + 동작 |
| 2 | `gcloud storage cp`가 안 되는 이유 | 스토리지는 `gsutil` 사용 | gcloud가 아닌 별도 도구 |
| 3 | GKE 클러스터 연결 후 Pod 배포 | 연결: `gcloud`, 배포: `kubectl` | gcloud=클러스터 관리, kubectl=내부 리소스 관리 |
