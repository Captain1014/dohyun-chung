# Interview — STAR Stories Bank

Snowflake SE / Google CE / 범용 면접에서 사용할 실제 경험 기반 STAR 스토리 모음.
타겟별 활용 포인트 분리 표기.

---

## Story #1: Service Account 도입 — 퇴사자 계정으로 인한 시스템 다운

**Google 평가 기준:** RRK (Role-Related Knowledge) + Leadership

**Situation:**
회사에서 클라우드 시스템을 관리하던 담당자가 퇴사했다. 그 사람의 개인 계정으로 서버 관련 이메일(알림, 인증 등)이 설정되어 있었다. 해당 이메일의 도메인 회사가 인수되면서 결제 정보를 다시 등록해야 했는데, 퇴사자의 계정이라 처리할 수 없었다. 결과적으로 회사 시스템 전체가 다운되는 아찔한 상황이 발생했다.

**Task:**
시스템을 복구하고, 같은 문제가 다시 발생하지 않도록 근본적인 해결책을 마련해야 했다.

**Action:**
- 긴급 복구 후, 이 사고의 근본 원인이 "개인 계정에 시스템 의존성이 걸려 있었던 것"임을 팀에 공유
- IT팀과 협력하여 Service Account(프로그램 전용 계정) 도입을 추진
- 개인 계정 → Service Account로 모든 시스템 연동을 전환

**Result:**
- Service Account 도입으로 퇴사자 의존성 완전 제거
- 이후 인원 변동 시에도 시스템 중단 없음
- 팀 전체가 "사람 계정 vs 시스템 계정" 분리의 중요성을 인식

**CE 면접에서 활용 포인트:**
- GCP IAM의 Service Account 개념과 직접 연결됨
- "왜 Service Account를 써야 하는가?"를 실제 사고 경험으로 설명 가능
- 문제 발견 → 근본 원인 분석 → 해결책 제안 → 실행의 리더십 보여줌
- Googleyness: 위기 상황에서 임시방편이 아닌 구조적 해결책을 추구

---

## Story #2: CMS Image Data Flow — 6개 시스템 연동 프로젝트 (KISS, ~2024)

**활용:** Snowflake SE (데이터 파이프라인), Google CE (클라우드 아키텍처), 범용 (시스템 통합)

**Situation:**
KISS 회사에서 디자이너가 제작한 제품 이미지/아트워크가 여러 시스템(ResourceSpace, NAS, S3)에 분산되어 있었다. 제품 데이터(SAP BW Material Master)와 이미지 데이터가 연결되지 않아 Smartsheet, BI 리포트, Sales Platform, WMS 등 다운스트림 시스템에 수동으로 배포해야 했다. Data Engineering 작업량만 50시간 규모.

**Task:**
이미지 생성부터 최종 배포까지의 엔드투엔드 데이터 흐름을 설계하고 구현하는 프로젝트의 개발자로 참여.

**Action:**
- **이미지 파이프라인:** ResourceSpace(DAM) → AWS S3(저장) → CloudFront(CDN 배포) 구축
- **데이터 허브:** SAP BW Material Master → Snowflake DB로 제품 메타데이터 + 이미지 URL 통합
- **API 연동:** ResourceSpace ↔ Salsify API 연결로 제품 정보 멀티채널 배포 자동화
- **다운스트림 배포:** Snowflake에서 Smartsheet, BI report, Sales Platform, WMS, Automation System으로 데이터 공급
- Python (Snowflake Connector, requests, base64) + XML-RPC 활용한 데이터 가공/전송 로직 개발

**Result:**
- 6개 시스템 간 자동화된 데이터 흐름 확립 — 수동 이미지 배포 제거
- 제품 이미지-메타데이터 단일 소스 오브 트루스 (Snowflake)
- Business Analysts, Data Engineers가 Snowflake에서 직접 데이터 접근 가능

**아키텍처:**
```
[Creative/Divisions] → ResourceSpace → S3 → CloudFront → 다운스트림
                                ↕ API
                             Salsify → Sales Channels
SAP BW (Material Master) → Snowflake DB → Smartsheet, BI, WMS, etc.
```

**면접 활용 포인트:**
- **Snowflake SE:** "Snowflake을 데이터 허브로 활용한 프로덕션 프로젝트 경험. SAP→Snowflake 파이프라인, 다운스트림 시스템 배포 아키텍처 이해."
- **Google CE:** "AWS S3/CloudFront 기반 CDN 아키텍처 구축 경험. 멀티 시스템 클라우드 연동."
- **범용:** "6개 이상 시스템 통합 프로젝트를 데이터 흐름 관점에서 설계/구현한 경험."

**정직한 수준 표기:** 프로젝트의 개발자로 참여 — 아키텍처 이해 + 개발 참여. Snowflake 직접 관리/쿼리 최적화는 DCOE 팀 담당이었음.

---

## Story #3: SAP-to-Platform 데이터 동기화 장애 — 300+ 유저 기술 지원

**활용:** SE (기술 지원 / RCA), TPM (운영 안정성), Google CE (고객 기술 문제 해결)

**Situation:**
Kiss Products의 Enterprise Retail OS가 출시된 후, 300명이 넘는 현장 세일즈팀이 매일 플랫폼을 사용하기 시작했다. SAP BW에서 플랫폼으로 제품 데이터를 동기화하는 파이프라인에 간헐적으로 장애가 발생해 주문 처리 오류와 재고 불일치가 생겼다. 현장 팀은 비즈니스팀에 티켓을 올렸고, 비즈니스팀은 나에게 에스컬레이션했다.

**Task:**
장애 원인을 진단하고, 근본적인 해결책을 마련하면서 현장 팀의 업무가 중단되지 않도록 커뮤니케이션을 주도해야 했다.

**Action:**
- 비즈니스팀과 함께 장애 패턴을 분석해 특정 SKU 카테고리에서만 발생한다는 것을 발견
- SAP BW 데이터 구조와 플랫폼 데이터 모델 간의 필드 매핑 불일치를 원인으로 특정
- 인도 벤더 개발팀에 정확한 재현 조건과 기대 동작을 기술 스펙으로 정리해 전달
- 수정 배포 전까지 영향받는 SKU 목록을 비즈니스팀에 공유해 수동 처리 범위를 최소화

**Result:**
- 장애 원인 파악부터 픽스 배포까지 48시간 이내 해결
- 수동 처리 범위를 전체 장애 SKU의 15% 이하로 통제
- 이후 동일 유형 장애 재발 없음 — 필드 매핑 검증 단계가 배포 프로세스에 추가됨

**면접 활용 포인트:**
- SE: "고객 이슈를 단순 에스컬레이션이 아닌 직접 RCA로 해결한 경험"
- Google CE: "엔터프라이즈 고객의 데이터 통합 이슈를 기술적으로 진단하고 해결"
- TPM: "운영 중 장애를 프로세스 개선으로 연결한 사례"

---

## Story #4: 4개 이해관계자 그룹 조율 — Phase 1/2 협상

**활용:** SE (고객 조율), TPM (프로그램 관리), PM (이해관계자 관리), Google CE (범용)

**Situation:**
K Retail Solutions 프로젝트에는 4개 그룹이 얽혀 있었다: 인도 벤더 개발팀, 인도 벤더 PM, 미국 비즈니스팀, 인하우스 엔지니어링팀. 각 그룹은 서로 커뮤니케이션이 단절된 상태였고 나만 모든 그룹의 신뢰를 유지하고 있었다.

**Task:**
대표적 갈등 사례: 비즈니스팀은 원클릭 수령(receiving) 기능을 요구했고, 엔지니어링팀은 Odoo 기본 아키텍처와 충돌한다며 구조적으로 불가능하다고 거부했다. 이 교착 상태를 풀어야 했다.

**Action:**
- 비즈니스팀과 엔지니어링팀을 각각 별도로 만나 각자의 핵심 요구사항과 제약 조건을 독립적으로 파악
- 두 그룹의 요구를 모두 충족하는 Phase 1/2 분리 방안 설계: Phase 1에서는 기존 Odoo 구조를 유지해 런치를 unblock하고, Phase 2에서는 합의된 타임라인 안에 원자적 리팩토링 진행
- 양쪽에 각자의 언어로 설명: 엔지니어링팀에는 기술적 근거로, 비즈니스팀에는 로드맵 커밋으로 제시
- Phase 2 구현에는 직접 개발팀과 함께 참여

**Result:**
- 교착 상태 해소 — 양쪽 모두 수용
- Phase 1 예정대로 런치, Phase 2 원자적 트랜잭션 구현 완료
- 이후 수령 매니저 업무 시간 약 80% 단축, 데이터 불일치 0%

**면접 활용 포인트:**
- TPM: "기술적 제약과 비즈니스 요구 사이에서 양쪽이 납득하는 해결책을 설계한 경험"
- SE: "고객(비즈니스팀) 요구를 기술팀과 조율해 딜리버리한 경험"
- 모든 직무: 갈등 해결 → 구조적 솔루션 설계 → 실행

---

## Story #5: D-30 런치 위기 복구 — Technical Design Doc 게이트 도입

**활용:** SE, TPM, PM, Google CE — 가장 임팩트 있는 스토리. 모든 직무에 범용.

**Situation:**
K Retail Solutions 출시 D-30일 전, 벤더가 구현한 멀티테넌트 모듈이 설계와 다르게 구현된 것을 발견했다. Company A와 Company B의 데이터가 격리되지 않아 그대로 출시하면 데이터 유출 사고가 발생할 수 있는 상황이었다. 인하우스 개발팀 전원이 야근에 들어갔다.

**Task:**
30일 안에 영향받은 컴포넌트를 재작성하고, 동시에 같은 문제가 다시 발생하지 않도록 구조적 방어막을 만들어야 했다.

**Action:**
- 인하우스 개발팀과 함께 직접 코드 재작성 참여
- 위기의 근본 원인을 분석: 벤더에게 기술 스펙을 전달했지만 구현 전 검증 단계가 없었던 것
- 세 가지 프로세스 개선 도입:
  1. **Scope Confirmation Checklist** — 모든 기능 개발 전 벤더 PM, 인하우스 개발, TPM 3자 사전 정렬 필수
  2. **Cross-team Code Review** — 모든 벤더 작성 모듈에 인하우스 리뷰 추가
  3. **Technical Design Document 게이트** — 신규 기능 개발 전 TDD 필수 (오프라인 모드부터 첫 적용)

**Result:**
- D-30 위기에서 예정대로 출시 성공
- Phase 2 전체에서 같은 유형의 아키텍처 이탈 사고 0건
- "프로세스 없이 신뢰만으로는 안 된다"는 팀 전체의 공감대 형성

**면접 활용 포인트:**
- TPM: "위기 상황에서 임시방편이 아닌 구조적 해결책으로 연결한 리더십"
- SE: "기술 품질 문제를 고객(비즈니스팀)에 미치기 전에 내부에서 차단한 경험"
- PM: "인시던트 → 프로세스 개선 → 재발 방지의 전형적인 PM 사이클"

---

## Story #6: Enterprise Retail OS 멀티테넌트 아키텍처 설계

**활용:** SE (아키텍처 설계), TPM (기술 의사결정), Google CE (클라우드/엔터프라이즈 설계)

**Situation:**
Kiss Products는 단일 브랜드용 POS를 넘어 Franchise/Group 모델을 지원하는 엔터프라이즈 플랫폼이 필요했다. Company A와 Company B가 같은 인프라를 공유하면서도 데이터가 완전히 격리되어야 했다.

**Task:**
인하우스 개발팀과 함께 멀티테넌트 아키텍처를 설계하고, 벤더 개발팀이 그 설계대로 구현할 수 있도록 기술 스펙을 만들어야 했다.

**Action:**
- 테넌트 격리 레이어 설계: 인증/권한 모델을 tenant ID 기반으로 구성해 Cross-company 데이터 접근 구조적 차단
- 20+ 모듈 전체에 공통 패턴 정의: FilterManager, ExportManager, 단일 사이드바 레이아웃
- API-driven 온보딩 자동화 설계: 신규 파트너 추가 시 수동 설정 없이 프로비저닝
- 벤더 개발팀에 아키텍처 다이어그램 + 기술 스펙 문서로 전달

**Result:**
- 파트너 온보딩 시간: 수일 → 30분 이내 (API 자동화)
- Cross-company 데이터 유출 0건
- 멀티테넌트 지원이 엔터프라이즈 세일즈의 핵심 차별화 포인트가 됨

**면접 활용 포인트:**
- SE: "멀티테넌시 아키텍처를 직접 설계하고 구현을 주도한 경험 — Snowflake/SaaS 플랫폼 이해와 연결"
- TPM: "기술 아키텍처 의사결정을 주도하고 벤더 구현을 관리한 경험"
- Google CE: "엔터프라이즈 고객 요구(격리, 확장성)를 설계 수준에서 해결한 경험"

---

## Story #7: PIM 이니셔티브 — 전사 제품 데이터 플랫폼 구축 (0 → Production)

**활용:** SE (기술 프로젝트 리드), TPM (프로그램 관리), PM (0→1 프로덕트), Google CE (클라우드 아키텍처)

**Situation:**
Kiss Products는 수천 개의 SKU 제품 데이터가 SAP BW, Excel 파일, 각 팀의 로컬 시트에 분산되어 있었다. 마케팅, 영업, 물류, BI 팀이 각자 다른 버전의 데이터를 갖고 있었고, 신제품 출시 때마다 각 팀이 수동으로 데이터를 정합하는 데만 수십 시간이 소요됐다. "어떤 데이터가 맞는 데이터인가?"에 답할 수 있는 Single Source of Truth가 없었다.

**Task:**
전사 제품 데이터를 하나의 플랫폼으로 통합하는 PIM(Product Information Management) 이니셔티브를 처음부터 구축하고, 각 팀의 온보딩과 지속적인 운영 지원까지 주도해야 했다.

**Action:**
- **아키텍처 설계:** SAP BW(Material Master) → Snowflake DB → 다운스트림 시스템(BI, WMS, Sales Platform)으로 이어지는 단방향 데이터 파이프라인 설계
- **데이터 모델링:** 제품 메타데이터(SKU, 카테고리, 속성, 이미지 URL)와 SAP 필드를 Snowflake 스키마로 정의; 필드 매핑 검증 로직 구현
- **검증 워크플로우:** SAP에서 데이터가 올라올 때 필수 필드 누락, 타입 불일치, 중복 SKU를 자동 감지하는 검증 레이어 구축 (Python + Snowflake stored procedures)
- **대량 업로드 파이프라인:** 기존 Excel 기반 데이터를 일괄 마이그레이션하는 bulk upload 스크립트 개발; 수천 행 데이터를 안전하게 처리
- **운영 지원 주도:** Business Analysts, Data Engineers 대상 Snowflake 쿼리 인터페이스 온보딩 교육; 각 팀이 직접 데이터에 접근하고 리포트를 뽑을 수 있도록 지원

**Result:**
- 분산된 제품 데이터를 Snowflake 단일 플랫폼으로 통합 — Single Source of Truth 확립
- 신제품 출시 시 수동 데이터 정합 작업 제거; 관련 팀의 준비 시간 대폭 단축
- Business Analysts, Data Engineers가 Excel 없이 Snowflake에서 직접 데이터 접근 가능
- SAP 필드 매핑 검증 레이어로 데이터 품질 이슈 사전 차단

**면접 활용 포인트:**
- **SE:** "제품 데이터 플랫폼을 0에서 구축하고 엔드투엔드 소유한 경험. SAP→Snowflake 파이프라인 설계 + 운영 지원까지."
- **TPM:** "여러 팀(BI, 영업, 물류)의 데이터 통합 프로젝트를 처음부터 끝까지 주도한 경험. 기술 + 온보딩 + 지속 운영."
- **Google CE:** "클라우드 기반 데이터 허브(AWS + Snowflake) 구축 경험. 엔터프라이즈 데이터 거버넌스 문제를 아키텍처로 해결."
- **PM:** "조직 전체의 페인포인트(데이터 분산)를 발견하고 솔루션을 정의해 직접 구축한 0→1 경험."

**정직한 수준 표기:** PIM 이니셔티브의 기술 리드 및 운영 주도자. Snowflake 스키마 설계와 파이프라인 구축에 직접 참여; 고급 Snowflake 성능 최적화는 DCOE 팀과 협업.

---

*Last updated: 2026-05-14*
*Target: 7-10 stories covering Snowflake SE + Google CE + 범용*
