# Datadog R4 — Behavioral Interview

**When:** Tue Jul 7, 2026 · 8:00-9:00 PM EDT  
**Interviewers:** Aaron Kim (Manager 2, TSE) · Jiwon Seo (TSE 2)  
**Format:** Behavioral · Windy 4주제: customers · innovation · teamwork · ownership  
**Language:** **EN + KR** — 면접관 따라 전환

근거: Datadog resume + portfolio만. 임의로 숫자·에피소드 추가하지 않음.

---

## 스토리 메모 (이 형식으로 외우기)

### Payroll — 까다로운 고객 (1순위)
주말에 KRS 스토어 오너 긴급 연락, Payroll 안 만들어진다고 신고  
알고 보니 다른 매니저가 이미 만들어 둔 상태, UI 날짜 필터 때문에 안 보였음  
버그가 아니라 user behavior 문제로 파악하고 설명 후 UI 개선까지 완료  

### Merchant UTC — 데이터 안 보임 (백업)
가맹점에서 기록이 하루는 보이고 다음 날 안 보인다고 신고  
UTC offset이 여러 페이지에 고정돼 날짜 필터가 잘못된 것  
재현 후 cross-page fix, 엔지니어링에 패턴 문서화  

### Observability tool — innovation
사용자 신고 후에야 로그·DB 수동 확인하는 reactive support  
AWS 로그·metrics·DB 읽어서 이상 징후 알림 보내는 도구 구축  
고객 신고 전에 팀이 먼저 이슈 보도록 support 방식 변경  

### Phase 1/2 — teamwork
4팀이 원클릭 receiving 요구 vs Odoo 구조 충돌로 수 주 교착  
양쪽 따로 만나 Phase1은 출시 맞추고 Phase2는 구조 개선으로 합의  
정시 출시, Phase2에서 receiving 플로우 개선  

### D-30 tenant — ownership
출시 30일 전 벤더 멀티테넌트 구현이 설계와 달라 A→B 데이터 노출 위험  
인하우스가 rewrite, scope checklist·TDD gate 도입  
고객 영향 전에 막고 재발 방지까지 책임  

### SAP sync — integration 장애
SAP↔Sales Platform 동기화 실패  
로그로 추적, backlog 정리, observability checkpoint 추가  

### Cron/queue — performance
Sales Platform 느려진다는 신고  
로그·SQL로 order confirmation cron이 queue 터지는 것 확인, batch/queue 수정  

### OAuth — API access
매일 403·token expiry 접근 불만  
auth flow 재현해서 permission scope 오류 확인 후 수정  

### Knowledge base — 문서·개선
post-mortem, integration FAQ, onboarding guide 작성  
팀이 같은 문의 혼자 처리하게 해 반복 티켓 감소  

### 24/7 Teach — 이전 회사
3000명 유저 liaison, 모호한 버그 재현해서 engineering에 전달  
failure pattern 모아 internal KB 구축  

### KRS 0→1 — 프로젝트 소개용
멀티테넌트 POS 처음부터 구축, 외부 merchant technical contact  
D-30 격리 이슈, API onboarding으로 온보딩 단축  

### Sales Platform — 프로젝트 소개용
SAP 연동 B2B wholesale 플랫폼, integration layer 운영  

---

## 질문 → 스토리

| 물으면 | 스토리 |
|--------|--------|
| **Difficult customer / 까다로운 고객** | **Payroll** |
| frustrated / angry customer / 주말 긴급 | **Payroll** |
| data missing / trust issue (기술 깊게) | **Merchant UTC** |
| **Driving innovation** | **Observability tool** |
| process improvement / support better | **Observability tool** 또는 **Knowledge base** |
| **Teamwork / 갈등** | **Phase 1/2** |
| **Ownership** | **D-30** |
| integration debug | **SAP sync** |
| production slow / performance | **Cron/queue** |
| OAuth / API auth | **OAuth** |
| reproduce issues | **Payroll** 또는 **Merchant UTC** |
| educate customers / demo | **KRS merchant contact** (Payroll 맥락) |
| document / KB | **Knowledge base** |
| prior company | **24/7 Teach** |
| biggest project | **KRS 0→1** |
| walk me through work / resume | **KRS 0→1** + **Sales Platform** |
| stress / pressure | **Payroll** |
| Why Datadog / TSE / Seoul | 짧은 fit 답 (아래 Optional) |

**Windy 4주제:** Payroll · Observability tool · Phase 1/2 · D-30

---

## 예상 질문 전체

### Windy 4주제
- Difficult situation with a customer → **Payroll**
- Driving innovation → **Observability tool**
- Teamwork → **Phase 1/2**
- Ownership → **D-30**

### JD / Resume에서 나올 수 있는 것
- How do you reproduce issues? → **Payroll** or **Merchant UTC**
- Debugging integration? → **SAP sync**
- API / OAuth? → **OAuth**
- Observability / monitoring? → **Observability tool**
- Educate customers? → **Payroll** (explain UX) + merchant demos
- Escalate to engineering? → **Merchant UTC**
- Customer feedback → product? → **Knowledge base**
- Critical production? → **Cron/queue** or **SAP sync**
- Programming as TSE? → observability tool 만들었지만 목적은 support 혁신
- Bilingual? → KR native, EN fluent, Seoul 70% KR
- Weekend on-call? → Payroll 주말 사례 + willing
- Open source? → Odoo production, community follow, honest not top contributor

### Aaron / Jiwon
- Success in 90 days? → 역질문
- Why hire you? → Opening + Windy 4 stories
- Questions for us? → Aaron: 6-month success / Jiwon: Seoul issue types

---



## 0. Opening



### EN

> Hi Aaron and Jiwon, thank you for taking the time.
>
> For the past three years, my work has been at the intersection of engineering and customer-facing technical support. At Kiss Products, I support our KRS POS platform for external merchant customers and our Sales Platform with SAP integration.
>
> A lot of my day-to-day work is close to what a TSE does: reproducing customer-reported issues, tracing root cause through logs, APIs, and SQL, distinguishing product issues from configuration problems, and communicating clearly to both users and engineering. That's why Datadog TSE feels like a strong fit for me.



### KR

> 안녕하세요, Aaron 님, Jiwon 님. 시간 내주셔서 감사합니다. 
>
> 지난 3년간 개발과 고객 대면 기술 지원을 함께 해 왔습니다. Kiss Products에서 외부 가맹점 고객용 KRS POS와 SAP 연동 Sales Platform을 지원하고 있습니다.
>
> 매일 하는 일이 TSE와 많이 겹칩니다. 고객 문의를 재현하고, 로그·API·SQL로 원인을 추적하며, 제품 문제와 설정 문제를 구분하고, 사용자와 엔지니어링 양쪽에 명확히 설명하는 것입니다. 그래서 Datadog TSE가 잘 맞는다고 생각합니다.

---



## 1. Difficult Situation With Customers

**Story:** Payroll weekend urgent (primary) · Merchant UTC (backup if data/technical)

### EN — Payroll

> One weekend I got an urgent message from a KRS store owner — payroll wasn't being created, the merchant was upset, and our support team was stressed.
>
> I looked into it right away. The system was fine. Another manager had already created that week's payroll, but the UI opened with a saved date filter from last week, so today's records weren't visible. The merchant assumed nothing was created.
>
> I explained what was happening to the support team and the merchant, and within about 48 hours we updated the UI so the same confusion couldn't happen again. What looked like a system failure was really a user behavior and UX issue.

### KR — Payroll

> 주말에 KRS 스토어 오너가 긴급 연락 왔습니다. Payroll이 안 만들어진다고 하셨고, 가맹점 측은 매우 불편해하셨고 지원팀도 당황한 상태였습니다.
>
> 바로 확인해 보니 시스템은 정상이었습니다. 다른 매니저가 이미 그 주 급여를 만들어 두었는데, UI가 지난주 저장 날짜 필터로 열려 있어서 오늘 항목이 보이지 않았습니다. 가맹점 입장에서는 만들어지지 않은 것으로 보였습니다.
>
> 지원팀과 가맹점에 상황을 설명했고, 약 48시간 안에 UI를 수정해 같은 혼란이 반복되지 않게 했습니다. 시스템 장애처럼 보였지만 실제로는 user behavior와 UX 문제였습니다.

### EN — Merchant UTC (backup)

> A merchant reported records visible one day and missing the next — it looked like data loss. I reproduced it, found a UTC offset hardcoded across back-office pages, shipped a cross-page fix, and documented the pattern for engineering.

### KR — Merchant UTC (backup)

> 가맹점에서 기록이 하루는 보이고 다음 날 안 보인다고 했습니다. 데이터 유실처럼 보였지만 재현해 보니 여러 페이지에 UTC offset이 고정된 문제였고, 수정 후 패턴을 문서화했습니다.

---



## 2. Driving Innovation

**Story:** Sales Platform automated observability tool (resume)

### EN

> One example of driving innovation was building an automated observability tool for our Sales Platform.
>
> Before that, support was mostly reactive. Users would report something looked wrong, and we would manually check AWS logs, metrics, and database state. We often learned about issues only after users were already affected.
>
> I built a tool that reads AWS server logs, metrics, and database state in real time, synthesizes anomalies into structured alerts, and routes them to the team proactively. The goal was to surface important failure signals earlier so we could investigate before customers had to report the issue.
>
> Support shifted from reactive to more proactive. That's also why Datadog interests me — the product helps teams understand system behavior before it becomes customer impact.



### KR

> Sales Platform용 자동 observability 도구를 만든 경험입니다.
>
> 이전에는 지원이 대부분 사후 대응이었습니다. 사용자가 이상하다고 하면 그때 AWS 로그, metrics, DB 상태를 수동으로 확인했고, 알게 될 때는 이미 사용자 영향이 난 경우가 많았습니다.
>
> AWS 서버 로그·metrics·DB 상태를 실시간으로 읽고, 이상 징후를 구조화된 알림으로 만들어 팀에 미리 보내는 도구를 만들었습니다. 큰 모니터링 플랫폼이 목표는 아니었고, 중요한 실패 신호를 더 일찍 보이게 하는 것이 목표였습니다.
>
> 사후 대응에서 사전에 징후를 보는 쪽으로 바뀌었습니다. Datadog에 관심 있는 이유도 비슷합니다. 고객 영향이 나기 전에 시스템 상태를 이해하도록 돕는 제품이기 때문입니다.

---



## 3. Teamwork

**Story:** KRS — 4 groups, Phase 1 / Phase 2 (portfolio case study)

### EN

> A teamwork example is from the KRS POS project with four groups: India vendor dev, India vendor PM, US business, and in-house engineering.
>
> We had a conflict around one-click receiving. Business wanted a simple workflow for store operators. Engineering pushed back because it conflicted with Odoo's default stock-picking architecture and could create data consistency risk.
>
> I met both sides separately to understand what they actually needed. I proposed Phase 1 on the existing Odoo structure so launch was not blocked, and Phase 2 for atomic receiving on an agreed timeline. I explained in technical terms to engineering and in roadmap terms to business.
>
> Both sides accepted. Phase 1 launched, and Phase 2 later reduced receiving manager workload while preventing partial-state issues.



### KR

> KRS POS 프로젝트 사례입니다. 인도 벤더 개발, 벤더 PM, 미국 비즈니스, 인하우스 엔지니어링 네 그룹이 관련되어 있었습니다.
>
> 원클릭 receiving 기능을 두고 충돌이 있었습니다. 비즈니스는 매장 운영 속도를 위해 단순한 플로우를 원했고, 엔지니어링은 Odoo 기본 stock-picking 구조와 맞지 않아 데이터 일관성 위험이 있다고 했습니다.
>
> 양쪽을 따로 만나 표면적 요구가 아니라 실제 니즈를 파악했습니다. Phase 1은 기존 Odoo 구조로 출시를 막지 않고, Phase 2에서 합의된 일정 안에 atomic receiving을 하자고 제안했습니다. 엔지니어링에는 기술 근거로, 비즈니스에는 로드맵으로 설명했습니다.
>
> 양쪽이 수용했고 Phase 1은 출시했으며, Phase 2에서 receiving 업무 부담이 줄고 partial state 문제도 막았습니다.

---



## 4. Ownership

**Story:** D-30 tenant isolation + process gates (resume / portfolio)

### EN

> An ownership example is from KRS, about 30 days before launch.
>
> We found a vendor-implemented multi-tenant module did not match our design. One company's data could potentially be exposed to another. Even though the vendor built it, I treated it as our responsibility because we owned the product and customer outcome.
>
> I worked with in-house engineering to rewrite the affected components and communicated clearly across business, vendor, and engineering. After the fix, we added a scope confirmation checklist, cross-team code review for vendor modules, and a technical design document gate before new features.
>
> The project still launched, and the same type of architecture deviation did not repeat in Phase 2. Ownership to me means owning the risk, the fix, and the process that prevents recurrence.



### KR

> KRS 출시 약 30일 전 사례입니다.
>
> 벤더가 구현한 멀티테넌트 모듈이 설계와 달랐고, A사 데이터가 B사에 노출될 수 있는 위험이 있었습니다. 벤더 구현이어도 제품과 고객 결과를 우리가 책임진다고 보고 대응했습니다.
>
> 인하우스 엔지니어링과 영향 범위 코드를 다시 작성했고, 비즈니스·벤더·엔지니어링에 상황을 투명하게 공유했습니다. 즉시 수정 뒤 scope confirmation checklist, 벤더 코드 cross-team review, 신규 기능 전 technical design document gate를 도입했습니다.
>
> 프로젝트는 출시했고 Phase 2에서 같은 유형의 아키텍처 이탈은 반복되지 않았습니다. ownership은 버그를 찾는 것에서 끝나지 않고, 위험·수정·재발 방지까지 책임지는 것이라고 생각합니다.

---



## Optional (짧게)


|                 | EN                                                                                                                                | KR                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Why Datadog** | Production issues, logs/metrics, integrations — I built smaller proactive tooling at Kiss; Datadog does this at enterprise scale. | 프로덕션 이슈, 로그·metrics, 연동 — Kiss에서 작은 규모로 proactive 도구를 만들었고, Datadog은 그걸 엔터프라이즈 규모로 하는 회사입니다. |
| **Why TSE**     | Most value when a customer is blocked — reproduce, root cause, explain clearly.                                                   | 고객이 막혔을 때 재현·원인·설명에서 가장 가치를 냅니다.                                                             |
| **Ask Aaron**   | What does strong performance look like in the first six months on your team?                                                      | 팀에서 TSE의 첫 6개월, 잘한다는 기준이 무엇인가요?                                                              |
| **Ask Jiwon**   | What customer issue types come up most on the Seoul team?                                                                         | 서울 팀에서 가장 많이 다루는 이슈 유형이 무엇인가요?                                                               |


