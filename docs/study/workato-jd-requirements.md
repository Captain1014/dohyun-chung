# Workato TC II — JD Requirements 완전 분석

인터뷰에서 직접 물어볼 수 있는 요구사항 전체. 각 항목마다:

- 이게 무슨 뜻인지
- Dohyun의 증거
- 어떻게 답할지

---

## 필수 요건 (Hard Requirements)

---

### 1. 3+ years of hands-on experience in solutions and implementation consulting

**무슨 뜻:** 고객 앞에서 직접 솔루션을 설계하고 구현한 경험. 내부 개발만 한 게 아니라, 고객의 요구사항을 듣고 → 설계하고 → 실제로 돌아가게 만든 경험.

**Dohyun 증거:**

- 24/7 Teach (2023.05–2024.04): 11개월
- Kiss Products (2024.04–2026.05): 25개월
- **합계: 36개월 = 정확히 3년**

**답변:**

> "So I've been doing this for exactly three years across two companies. At 24/7 Teach I worked directly with 100 pilot users — gathered their feedback, figured out what we actually needed to build, shipped it with my team. Then after launch that grew to 3,000 users and I was the one they came to when something wasn't working. At Kiss Products it's been the same pattern but bigger — I built KRS POS from scratch, designed the architecture, caught a critical bug before launch, and I'm still the technical lead on it today. It's not just building — it's owning the whole thing from requirements to customer support."

---

### 2. Knowledge and understanding of integrations and system design principles

**무슨 뜻:** 두 개 이상의 시스템을 연결하는 방법을 안다는 것. REST API, webhooks, 데이터 매핑, 에러 처리, 동기/비동기 패턴 등.

**Dohyun 증거:**

- SAP integration (REST + SOAP 둘 다)
- KRS POS multi-tenant 아키텍처 설계
- AWS 기반 데이터 파이프라인

**답변:**

> "SAP integration is part of my daily work at Kiss Products — REST for some modules, SOAP for others, and I've built data pipelines that connect SAP output to downstream systems on AWS. And separately, I designed the entire architecture for KRS POS — multi-tenant, so I had to think hard about data isolation and how tenants share infrastructure without seeing each other's data. It's not like I just built features on top of someone else's design — I was the one making those calls from the beginning."

---

### 3. Good understanding of technology and industry trends, especially in the app integration space

**무슨 뜻:** iPaaS 시장을 알고 있나? Workato, Zapier, MuleSoft의 차이를 아나? AI가 integration에 어떤 영향을 주는지 아나?

**Dohyun 증거:**

- Workato = Gartner MQ Leader 8년 연속 (2026)
- Otto 출시 (2026.05.06) 알고 있음
- Zapier/Make/MuleSoft 포지셔닝 이해

**답변:**

> "I pay attention to what's actually happening in this space. The Otto launch earlier this month — that to me is the clearest signal of where integration is going. Every other iPaaS vendor is adding AI as a feature on top of what they already have. Workato is treating AI as a layer that sits above the automation layer — that's a completely different architectural bet. And the fact that they've been Gartner MQ Leader eight years in a row tells me the enterprise market is tracking in the same direction."

---

### 4. Good understanding of database technologies, such as SQL and Postgres

**무슨 뜻:** 데이터베이스 쿼리를 읽고 쓸 수 있나? 인덱스, 조인, 테이블 구조를 이해하나? 통합 작업에서 SQL로 데이터를 조회하거나 조작할 수 있나?

**Dohyun 증거:**

- SQL 스킬 보유
- SAP 파이프라인에서 데이터 쿼리 작업
- KRS POS 데이터 아키텍처 설계

**Postgres 직접 경험 없는 경우 대응:**

> "SQL is something I use regularly — mostly for data validation and troubleshooting when payloads coming out of the SAP pipeline don't look right. I'll write queries to check what's actually in the table versus what was expected. Postgres I've used less than MySQL, but honestly the fundamentals are the same — joins, indexing, query patterns. The engine changes, the logic doesn't."

---

### 5. Demonstrated understanding of on-premise infrastructure & cloud-based deployments, configurations along with monitoring & management

**무슨 뜻:**

- **On-premise:** 회사 서버실에 직접 설치된 시스템 (SAP ERP 같은 레거시 시스템이 대표적)
- **Cloud:** AWS, GCP, Azure 같은 클라우드 플랫폼에 배포된 시스템
- **Monitoring:** 시스템이 정상적으로 작동하는지 로그, 알림, 대시보드로 감시하는 것

**Dohyun 증거:**

- AWS (S3, Lambda, 서버 로그 모니터링)
- SAP = 대표적인 온프레미스 엔터프라이즈 시스템과 연동
- KRS POS 클라우드 배포

**답변:**

> "I work with both sides. On the cloud side — we run AWS at Kiss Products. S3 for storage, Lambda for event-driven jobs, and I monitor server logs for production alerts. On the on-premise side — SAP runs on-premise, so when I build integrations, I'm literally bridging between a legacy on-prem system and cloud infrastructure. That gap is where most of the complexity is. Things like network configurations, authentication across boundaries, payload format differences — all of that is real work I do."

---

### 6. Demonstrated understanding of the SDLC & end-to-end experience in developing, supporting & troubleshooting integrations

**무슨 뜻:**

- **SDLC (Software Development Life Cycle):** 요구사항 수집 → 설계 → 개발 → 테스트 → 배포 → 운영의 전체 사이클
- **End-to-end:** 기획부터 운영까지 전부 해봤나?
- **Troubleshooting integrations:** 통합이 실패했을 때 원인을 찾고 고칠 수 있나?

**Dohyun 증거:**

- KRS POS: 제로에서 프로덕션까지 전체 사이클
- 데이터 격리 이슈: 출시 30일 전 발견 → 수정
- Sales Platform: 실시간 트러블슈팅, 엔드-투-엔드 해결

**답변:**

> "KRS POS is the clearest example — I took that from zero requirements to production. Designed the architecture, built it, caught a critical data isolation bug in testing about 30 days before launch, fixed it, deployed, and I'm still the technical lead today. That's the full cycle in one project. And on the troubleshooting side — I support 300+ users across two platforms at Kiss Products. When something breaks, I own it from the first report to the fix. Nobody hands it off to someone else. It's me."

---

### 7. Demonstrated ability to create quality technical documentation

**무슨 뜻:** API docs, 아키텍처 문서, 런북(runbook), 설계 명세서 등을 명확하게 쓸 수 있나? 기술적인 내용을 비기술 독자도 이해할 수 있게 쓸 수 있나?

**Dohyun 증거:**

- PRD Writing 스킬
- KRS POS 아키텍처 설계 문서
- 24/7 Teach: 교사 인터뷰 → 스프린트 스펙으로 변환

**답변:**

> "Documentation is something I take seriously. At Kiss Products, when I'm designing something like KRS POS, I write architecture specs that both the engineers and the business team can read — because if only engineers can understand it, it's not useful. At 24/7 Teach, I'd sit down with teachers, hear what they were struggling with, and turn that into specs the dev team could actually build from. The goal is always: if I left tomorrow, someone else could pick this up and understand exactly what was built and why."

---

## 우대 요건 (Plus / Nice-to-have)

---

### 8. Experience working with at least one (1) Integration Platform *(필수)*

**플랫폼 목록:** Workato, Tray, TIBCO, Dell Boomi, MuleSoft, WebMethods, Oracle Integration Suite

**각 플랫폼이 뭔지:**

- **Workato:** 현재 지원하는 회사. Enterprise iPaaS. Recipe 기반.
- **Dell Boomi:** Salesforce가 인수한 클라우드 iPaaS. 엔터프라이즈 중간 등급.
- **MuleSoft:** Salesforce 소유. API-first. 엔지니어 필요. 가장 복잡하고 비쌈.
- **TIBCO:** 레거시 엔터프라이즈 미들웨어. 금융/통신사에서 많이 씀.
- **Tray.io:** Developer-first iPaaS. 스타트업/테크팀 타겟.
- **WebMethods:** Software AG 제품. 온프레미스 ESB(Enterprise Service Bus) 계열.
- **Oracle Integration Suite:** Oracle 생태계 통합 플랫폼.

**Dohyun 증거:**

- Workato: Google Sheets + Jira 레시피 직접 제작

**답변:**

> "I've been building with Workato directly — started with recipes connecting Google Sheets and Jira, and kept going from there. I understand how Recipes are structured, how connectors work, how error handling is set up, the difference between real-time triggers and scheduled ones. It came from actually using the platform, not just reading about it."

---

### 9. Cloud business apps: Workday / NetSuite / Salesforce / ServiceNow / SAP *(plus)*

**각 앱이 뭔지:**


| 앱              | 카테고리   | 설명                                      |
| -------------- | ------ | --------------------------------------- |
| **SAP**        | ERP    | 제조/물류/재무 대기업용 ERP. Dohyun이 직접 사용 중      |
| **NetSuite**   | ERP    | Oracle의 클라우드 ERP. 중견기업 타겟. 재무/재고/CRM 통합 |
| **Salesforce** | CRM    | 세계 최대 CRM. 영업 파이프라인, 고객 관리              |
| **Workday**    | HCM/HR | 인사/급여/채용 관리. "HR의 Salesforce"           |
| **ServiceNow** | ITSM   | IT 서비스 관리, 티켓 시스템. 대기업 IT팀 필수           |


**Dohyun 증거:**

- **SAP: 직접 경험** (가장 복잡하고 엔터프라이즈 무거운 것)

**답변:**

> "SAP is what I work with every day — it's the primary ERP at Kiss Products, and it's one of the most complex ones out there. Building integrations on top of SAP means dealing with really specific data models, BAPI calls, SOAP and REST depending on the module, massive payloads. What I've learned working with SAP — field mapping, handling large data volumes, pipeline design — those patterns apply directly to NetSuite and Workday. The connector handles the API specifics. The underlying integration logic is the same."

---

### 10. Web development frameworks and JS frontend/backend *(plus)*

**무슨 뜻:** React, Vue, Node.js 같은 웹 프레임워크를 알고 있나? TC로서 고객의 기술 스택을 이해하거나, 커스텀 커넥터/임베딩 작업을 할 때 필요.

**Dohyun 증거:**

- JavaScript/TypeScript, React (스킬에 명시)
- Naomi AI 프론트엔드 개발 주도
- Python, full-stack 경험

**답변:**

> "I have a full-stack background — React and TypeScript on the frontend, Python and Node on the backend. At 24/7 Teach I led the frontend build for Naomi AI, which is an AI-powered K-12 platform. Where this matters in a TC role is when a customer's integration touches their web application — you need to actually understand how APIs connect to UI components, how auth flows work end to end. A lot of TC candidates have the integration knowledge but not the dev background. I have both."

---

### 11. OEM or embedded SaaS solutions *(plus)*

**OEM이 뭔지:**
OEM = **Original Equipment Manufacturer**. 소프트웨어에서는 **다른 회사의 제품에 자기 기술을 내장해서 파는 것**을 의미.

Workato의 OEM 제품 = **Workato Embedded (구: Workato OEM)**
→ SaaS 회사가 Workato를 자기 제품 안에 내장해서 고객에게 통합 기능을 제공하는 것.

예시: 

- 어떤 HR SaaS 회사가 "우리 제품은 Salesforce, SAP과 자동으로 연동됩니다"라고 말할 때 → 그 통합 엔진이 실제로 Workato Embedded일 수 있음
- 고객은 Workato인지 모르고 HR 제품의 기능으로 사용

**Dohyun 증거:**

- KRS POS: 멀티테넌트 SaaS 제품 (직접 설계 + 운영)
- SaaS 제품을 고객에게 제공한 경험

**답변:**

> "KRS POS is a multi-tenant SaaS product — I designed it and I run it. Operators subscribe and use it as a service built into their workflow. They don't install anything. So when I think about Workato Embedded, where you're putting Workato's automation capability inside someone else's product, that's actually a model I've lived from the other side. I've had to think about data isolation between tenants, tenant-level permissions, how you scope access so one customer can't touch another's data. That's the core of what embedded SaaS requires."

---

### 12. Embedding third-party integrations or iFrames into web app *(plus)*

**iFrame이 뭔지:**
iFrame = **Inline Frame**. 웹페이지 안에 다른 웹페이지나 앱을 창문처럼 끼워 넣는 HTML 태그.

예시: 구글 맵을 내 웹사이트에 박아놓는 것 = iFrame 사용.
Workato 맥락: 기업 포털 안에 Workato 자동화 대시보드를 iFrame으로 내장해서, 사용자가 별도 로그인 없이 쓸 수 있게 하는 것.

**서드파티 통합 임베딩** = 외부 서비스(결제, 지도, 채팅 등)를 내 앱 안에 기술적으로 연결하는 것.

**Dohyun 증거:**

- KRS POS 개발 시 서드파티 연동 가능성 있음
- React + TypeScript로 웹앱 개발 경험

**답변:**

> "Connecting third-party APIs into React applications is something I've done — that's standard frontend work for me. The iframe embedding pattern specifically — I understand how it works conceptually, and in KRS POS we looked at how to surface external data inside the operator interface. Workato Embedded uses this pattern so customers can access their automation dashboard without leaving your product. It's not something I've deployed at production scale in this exact context, but the frontend architecture around it is familiar territory."

---

## 인터뷰에서 직접 물어볼 수 있는 질문 형태

Benedict Yeo가 requirements를 기반으로 물어볼 가능성 높은 형식:

---

### "Can you walk me through an integration you've built end-to-end?"

> "Sure — KRS POS is the clearest one. It's a multi-tenant SaaS product for retail operators at Kiss Products. I started from zero — no existing system, no architecture. I sat down with the business team, figured out what the operators actually needed, designed the data model and the multi-tenant architecture myself, then built and deployed it. About 30 days before launch I caught a critical data isolation bug — one tenant's data could have been visible to another. I stopped, redesigned that layer, and fixed it before anything went live. That was probably the most important moment in the whole project. After launch, new partner onboarding went from taking days down to under 30 minutes. And I'm still the technical lead on it today — running health checks, taking operator feedback, deploying improvements. That's the full cycle."

---

### "How have you handled troubleshooting a failing integration?"

> "At Kiss Products I support 300+ internal users across two platforms — so something breaking and needing a fix in real time is pretty regular. The way I approach it: first, I try to reproduce it. If I can reproduce it, I can fix it. I check the logs, trace where the payload is failing, figure out if it's a data issue, a connectivity issue, or something in the logic. At one point we had an issue in our SAP pipeline where records were being dropped silently — no error, just missing data downstream. I traced it back to a field mapping mismatch where SAP was outputting a format that the downstream system wasn't handling. Fixed the transformation, added validation so it would catch that class of issue going forward. The principle is the same every time — reproduce, isolate, fix, and then build in a check so it doesn't happen quietly again."

---

### "What's your experience with SQL in an integration context?"

> "SQL is something I reach for a lot when I'm troubleshooting or validating data in a pipeline. If records are coming out of SAP and something looks off downstream, I'll query directly to check what's actually in the table versus what was expected. I use joins when I'm tracing data across multiple tables, and I write queries to validate transformation logic — like making sure a field mapping actually produced the right output. I've worked more with MySQL than Postgres, but the query patterns are the same. The database engine changes; the SQL thinking doesn't."

---

### "Have you worked with any cloud business applications?"

> "SAP is my main one — I work with SAP integration every day at Kiss Products. REST for some modules, SOAP for others, depending on which part of the system you're talking to. SAP is one of the most complex ERPs out there, so if you can build integrations on top of SAP, the patterns transfer to other enterprise apps pretty directly. The field mapping logic, handling large data volumes, dealing with nested payloads — that applies to NetSuite, Workday, Salesforce. The connectors abstract the API differences. The integration design is the same."

---

### "Tell me about your experience with technical documentation."

> "I write documentation as part of every project, not as an afterthought. For KRS POS, I wrote the full architecture spec — it had to work for engineers but also for the business team that was going to use the system. If only one group can read it, it's not actually useful. At 24/7 Teach, I'd interview teachers directly, hear what wasn't working in the classroom, and translate that into sprint-ready specs that the dev team could build from without needing follow-up conversations. The test I always use is: if I left tomorrow, could someone else pick this up and understand what was built and why? If not, the documentation isn't done."

---

### "What do you know about OEM or embedded integrations?"

> "Workato Embedded is the product line where a SaaS company puts Workato inside their own product — so their customers get integration capability without ever seeing the Workato interface. The customer just sees it as a feature of the product they're already using. The technical challenges there are around multi-tenancy — how do you scope each customer's recipes, how do you isolate their data, how do you handle authentication at the tenant level. I've designed for exactly those problems in KRS POS. It's a multi-tenant SaaS product — operators subscribe, each has their own scoped access, data isolation is built in. So when I look at Workato Embedded, I understand what the design requirements are from having built a system with the same constraints."

---

### "Have you worked with any on-premise systems?"

> "Yes — SAP at Kiss Products runs on-premise. So the integrations I build have to cross that boundary — from an on-prem SAP environment to cloud services on AWS. That's where most of the complexity is. You're dealing with network configurations, authentication that works across both environments, payload formats that may not match. The on-prem to cloud bridge is not a theoretical thing for me — it's the actual setup I work in."

---

## 한 줄 요약 — 포지셔닝 원칙


| 요건 유형                            | 전략                           |
| -------------------------------- | ---------------------------- |
| 강점 (SAP, SDLC, 문서화, JS/TS)       | 구체적 숫자와 스토리로 증명              |
| 보통 (SQL, on-prem, 문서화)           | "daily toolkit" 프레이밍으로 자연스럽게 |
| 약점 (NetSuite/Salesforce/Workday) | SAP으로 시작, "same patterns" 연결 |
| 모르는 것 (OEM, iFrame)              | 개념 설명 + KRS POS 연결           |
| 절대 금지                            | 약점 먼저 꺼내기, "I haven't..." 시작 |


