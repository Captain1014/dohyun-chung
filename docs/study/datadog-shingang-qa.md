# Shingang Kim Interview — Full Q&A (JD-Aligned)

**Today:** 2026-07-01 · 11:00 KST · KR/EN  
**Interviewer:** Shingang Kim — Sr. Manager TSE  
**Format (confirmed):** technical skill set · experience · behavioral · **prioritization** · motivation · why Datadog

> **이 문서 하나만 보세요.** 아래 **6블록 치트시트** → 필요하면 하단 전체 Q&A.

---

# ⭐ 오늘 면접 6블록 치트시트

Shingang이 물을 주제 순서대로 정리. **언어는 면접관 따라 EN/KR 전환.**

**자기소개 (1분)**

> 안녕하세요, 정도현입니다. NYU에서 컴퓨터공학과 사회학을 전공했고, 지금은 뉴욕에서 일하고 있습니다.
>
> 지난 3년간 개발과 고객 지원을 함께 해 왔습니다. 지금 Kiss Products에서 일하고 있는데, 미국 1위 네일·뷰티 브랜드입니다. 두 플랫폼 기술 담당을 맡고 있습니다.
>
> 하나는 처음부터 끝까지 제가 참여한 **KRS**, 멀티테넌트 SaaS POS입니다. 출시 이후에는 전적으로 고객 지원을 맡고 있습니다.
>
> 다른 하나는 **KISS 글로벌 세일즈 플랫폼**으로, **300명이 넘는** 내부 사용자를 지원합니다. SAP와 실시간 연동이 24시간 돌아가기 때문에 **모니터링이 특히 중요한** 플랫폼입니다.
>
> 그래서 매일 고객 문의로 증상을 파악하고, **AWS 서버 로그**와 **SQL**로 원인을 추적한 뒤, 버그면 수정하고 사용법 이슈면 올바르게 안내하는 것입니다.
>
> Kiss 규모에서는 Datadog을 쓰기 어려웠지만, SAP 동기화 장애처럼 모니터링이 꼭 필요한 문제를 직접 다뤘고 내부 대시보드도 만들었습니다. 그 경험을 Datadog 제품으로 고객에게 돕고 싶어 **TSE에 지원**했습니다.

---

## 1. Motivation — why this role (TSE)?

**물을 수 있는 질문:** Why TSE not SWE? · Why support engineering? · What draws you to this role?

**핵심 메시지:** 코드 짜는 것보다 **장애가 났을 때 재현 → 원인 분석 → 고객에게 설명**하는 일에서 제 역할이 더 잘 맞음.

**English (60초):**

> I can build systems — I built KRS POS from scratch. But my highest impact is when production breaks and I'm the person connecting root cause to the people waiting. 30 days before KRS launch I found a multi-tenant data isolation bug by asking how the system would behave in production — not by writing a feature. TSE is that every day: reproduce, diagnose, communicate, educate — with engineering depth behind it.

**한국어 (60초):**

> 시스템을 만들 줄 알지만, 제가 가장 잘하는 일은 다른 쪽입니다. **개발은 요구사항을 받아 구현하는 일**이고, **기술 지원은 문제가 커지기 전에 먼저 짚어내는 일**이라고 느꼈습니다.
>
> KRS 출시 한 달 전, 멀티테넌트 데이터가 섞일 수 있는 버그를 기능 개발 중이 아니라 **“실서비스에서 어떻게 동작할까?”** 를 보면서 찾았습니다. 그때 확신했습니다. 저는 장애를 재현하고, 원인을 분석하고, 고객에게 설명하는 쪽이 맞다고요.

**스토리:** D-30 tenant bug (#5) · 전체 답변 → **Q3** 하단

---

## 2. Why Datadog?

**물을 수 있는 질문:** Why Datadog? · Why our company? · Why Seoul office?

**핵심 메시지:** Kiss에서 observability 문제 직접 겪음 → Datadog 방식 참고해 **내부 모니터링 구축** → 제품 회사에서 일하고 싶음.

**English (60초):**

> Before applying I already cared about observability. At Kiss we have SAP sync failures, latency, process health — I built internal dashboards and alerts modeled on how Datadog thinks about metrics and signals. I want to work at the company behind the product. As a TSE I'd help customers see what's happening before it hits their users — same problem I solve daily, at Fortune 500 scale. And I want to join the Seoul team as Korea grows — 70% Korean customers fits my bilingual background.

**한국어 (60초):**

> 지원 전부터 **시스템 모니터링**에 관심이 있었습니다. Kiss에서는 SAP 동기화 실패, 응답 지연, 프로세스 다운 같은 문제를 매일 다뤘고, Datadog이 metrics와 알림을 다루는 방식을 참고해 **내부 모니터링**을 직접 구축했습니다.
>
> 그래서 그 제품을 만드는 회사에서 일하고 싶었습니다. TSE로서 고객이 장애를 겪기 **전에** 시스템 상태를 이해하도록 돕는 일 — Kiss에서 하던 일을 더 큰 규모로 하고 싶습니다. **서울 팀**에서 한국·글로벌 고객을 함께 지원하는 것도 맞습니다.

**전체 답변 → Q2** 하단

---

## 3. Technical skill set

**물을 수 있는 질문:** What tools do you use? · How do you troubleshoot? · Linux? · Monitoring?

**한 번에 답 (EN, 90초):**


| Area             | You say                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| **Languages**    | Python, JavaScript/TypeScript, React — fixes, scripts, tooling                                   |
| **Cloud**        | AWS — EC2, S3, IAM, **CloudWatch** (logs, alerts)                                                |
| **Linux**        | `grep`, `tail -f`, `ps`, `systemctl` — server log analysis                                       |
| **Integrations** | SAP IDoc/RFC (PyRFC), **REST API** — status codes, payloads                                      |
| **Data**         | PostgreSQL, Snowflake, SQL                                                                       |
| **Monitoring**   | CloudWatch + internal dashboards (Datadog-inspired); **Learning Center** for Datadog product now |
| **Process**      | Jira, Git, Agile                                                                                 |


**Troubleshoot when data won't sync (60초 EN):**

> 1. Clarify scope — one record or all, when started · 2) Reproduce · 3) Trace pipeline source → transform → destination · 4) Logs, queues, API responses · 5) Expected vs actual payload · 6) Workaround for customer · 7) Document for escalation. Same method for SAP or a Datadog integration.

**Observability (honest):**

> No full Datadog at Kiss — scale doesn't justify it. Built CloudWatch dashboards because we needed signals on SAP sync and uptime. Learning Datadog Agent/logs/metrics via Learning Center. I understand the customer side of monitoring gaps.

**전체 답변 → Q13, Q14, Q15** 하단

---

## 4. Experience

**물을 수 있는 질문:** Walk me through your resume · Tell me about a project you owned · What do you do day to day?

**자기소개 + 경험 (EN, 90초) — 이걸로 시작해도 됨:**

> 3 years at engineering + customer support intersection. **Kiss Products** — two production platforms: (1) **KRS** — multi-tenant SaaS POS I built, still technical support lead; (2) **Global sales platform** — live SAP integration, **300+ users**. First responder: reproduce, root cause, fix or escalate, explain to non-technical stakeholders. Before that **24/7 Teach** — 3,000 users, sole technical liaison. NYU CS & Sociology. Relocating to Seoul.

**프로젝트 하나 깊게 (골라 말하기):**


| Pick  | Story                   | One line                                     |
| ----- | ----------------------- | -------------------------------------------- |
| **A** | KRS POS built 0→1       | Python/PostgreSQL/AWS, onboarding days→30min |
| **B** | SAP sync outage         | 48h RCA, 300 users, field mapping fix        |
| **C** | PIM / 6-system pipeline | SAP→Snowflake→downstream integrations        |


**전체 답변 → Q1, Q10** 하단

---

## 5. Behavioral (STAR)

**물을 수 있는 질문:** Difficult customer · Critical issue · Escalation · Failure/lesson · Disagreement

**스토리 4개 — 번호만 외우고 2분씩:**


| If they ask…                  | Story           | Numbers to say                                   |
| ----------------------------- | --------------- | ------------------------------------------------ |
| **Critical production issue** | SAP sync #3     | 300 users · **48 hours** · 15% manual workaround |
| **Difficult stakeholder**     | Phase 1/2 #4    | 4 teams · **80%** time saved · launch on time    |
| **Escalation**                | SAP → vendor #3 | repro spec + logs + 30min update promise         |
| **Almost failed / lesson**    | D-30 tenant #5  | data leak prevented · TDD gate added             |


**STAR 구조:** Situation 20s → Task 10s → Action 60s → Result 30s

**전체 답변 (한/영) → Q6–Q8, Q11** 하단

---

## 6. Prioritization ⭐ (Shingang이 특히 볼 가능성)

**물을 수 있는 질문:** Multiple tickets at once? · How do you prioritize? · Everything is urgent — what do you do?

**English (90초) — 외워두기:**

> I triage by **business impact**, not arrival order.
>
> **P1** — production down, data corruption, field sales blocked → immediate  
> **P2** — partial degradation → within 30 minutes  
> **P3** — how-to, config → within 2 hours  
>
> **Rule:** acknowledge every request fast — even "I'm on a P1, you're next." Silence causes escalations faster than slow fixes.
>
> At Kiss I ran **two platforms** at once. SAP sync affecting 300 salespeople always beat an admin config question. Jira for tracking, clear ETAs, escalate blockers before deadlines slip.

**한국어 (90초):**

> **업무 영향도** 순으로 우선순위를 정합니다. 들어온 순서가 아닙니다.
>
> **P1** — 서비스 전체 다운, 데이터 손상, 현장 영업이 막힘 → 즉시  
> **P2** — 일부 기능 장애 → 30분 안에 응답  
> **P3** — 사용법·설정 문의 → 2시간 안에 응답  
>
> 중요한 건, **모든 티켓에 먼저 “확인했습니다”** 라고 알려주는 것입니다. “P1 처리 중이라 다음 순서입니다”만 해도 됩니다. **답이 없는 시간**이 가장 에스컬레이션을 빠르게 만듭니다.
>
> Kiss에서 플랫폼 두 개를 동시에 봤을 때, 300명 영업에 영향 주는 SAP 동기화가 관리자 설정 문의보다 항상 먼저였습니다. Jira로 추적하고, 예상 시간을 공유하고, 막히면 미리 올렸습니다.

**전체 답변 → Q9** 하단

---

## 역질문 (끝에 2개)

1. **EN:** "What does success look like in the first 90 days for a new TSE on your team?"
2. **EN:** "What issue types does the Korea team handle most — Agent, integrations, logs?"

---

## 오늘 15분 리허설 순서

1. **§1** Motivation (EN)
2. **§2** Why Datadog (EN)
3. **§6** Prioritization (EN) ⭐
4. **§5** SAP STAR (KR)
5. **§3** Tools + troubleshoot sync (EN)
6. 역질문 2개

---

# (아래) 전체 Q&A 상세 — JD 매핑 + 한/영 full scripts

**Role:** [Technical Support Engineer 1–2, Seoul](https://careers.datadoghq.com/ko/detail/6883301/)

---

## JD → 답변 매핑 (한눈에)


| JD (담당 업무 / 자격)    | 네 답변 / 스토리                                                  |
| ------------------ | ----------------------------------------------------------- |
| 멀티채널 기술 지원 + 고객 교육 | Kiss 300+ 유저 — 티켓/직접 연락/미팅, 플랫폼 사용법 안내                      |
| 기술 문제 **재현**       | SAP sync — 패턴 분석 → 특정 SKU에서 재현                              |
| **600+ 통합** 학습     | SAP·REST·Odoo·Snowflake·S3 — integration troubleshooting 경험 |
| 고객 피드백 → 내부 제품 논의  | 유저 피드백 → 버그픽스/기능 개선 직접 반영                                   |
| 제품 영역 전문가로 성장      | Observability 학습 중; Kiss에서 monitoring 직접 구축                 |
| 하이브리드 3–5일         | 서울 이전 예정, hybrid OK                                         |
| CS 전공              | NYU CS & Sociology                                          |
| 오픈소스 기여            | Odoo 커뮤니티·릴리스 팔로우; 솔직히 deep contributor는 아님                 |
| 자기주도·세심함·지속 학습     | D-30 버그 사전 발견; Datadog Learning Center 진행                   |
| 고객 중심 비판적 사고       | hotfix 요구 → blast radius 설명 → 48h RCA                       |
| 서면·구두 커뮤니케이션       | Bilingual KR native / EN fluent; 비기술 이해관계자 대상               |
| 프로그래밍 + Linux      | Python, JS/TS, React; grep, tail, systemctl, server logs    |
| 주말 교대 가능           | "필요 시 가능; 사전 일정 조율 선호"                                      |


---

# SECTION A — Motivation & Fit

---

## Q1. 자기소개 / Tell me about yourself

### English (~90 sec)

> I'm Dohyun — I go by Leah. I'm Korean, studied Computer Science and Sociology at NYU, and I've spent the last three years at the intersection of engineering and customer-facing technical work.
>
> I'm currently at Kiss Products, the number one nail brand in the US. I own two production platforms. One is KRS — a multi-tenant SaaS POS I built end-to-end and still run as the technical support lead. The other is our global sales platform with a live SAP integration, supporting 300-plus internal users across sales, CS, and marketing.
>
> Day to day, I'm the first responder when something breaks — I reproduce issues, find root cause, fix or escalate, and explain what's happening to non-technical stakeholders. That's the work I want to do at scale, which is why I'm applying to Datadog TSE and relocating to Seoul.

**JD hook:** *Multi-channel support, reproduce issues, customer education — I already do this for 300 users.*

### 한국어 (~90초)

> 안녕하세요, 정도현입니다. NYU에서 컴퓨터공학과 사회학을 전공했고, 지난 3년간 개발과 고객 지원을 함께 해 왔습니다.
>
> 지금은 미국 1위 네일 브랜드 Kiss Products에서 **운영 중인 플랫폼 두 개**를 담당합니다. **KRS**는 제가 처음부터 만든 멀티테넌트 POS이고, 지금도 기술 지원 리드를 맡고 있습니다. **글로벌 영업 플랫폼**은 SAP와 실시간 연동되며, 영업·CS·마케팅 등 **300명이 넘는** 내부 사용자를 지원합니다.
>
> 매일 하는 일은 장애가 났을 때 1차 대응, 재현, 원인 분석, 수정 또는 에스컬레이션, 그리고 비개발 직군에 상황을 설명하는 것입니다. 이 일을 Datadog 규모에서 하고 싶어 TSE에 지원했고, 올해 서울로 이전할 예정입니다.

---

## Q2. Why Datadog? / 왜 Datadog인가요?

### English

> My interest in Datadog started before I applied. At Kiss we use Odoo as our core ERP — we follow the open-source community closely. Our stack isn't large enough for full Datadog, but we have real observability problems: SAP sync failures, latency spikes, process health. I built internal monitoring dashboards and alerting modeled on how Datadog thinks about metrics and signals.
>
> That made me want to work at the company behind the product, not just copy the pattern. As a TSE I'd help customers understand what's happening in their systems before it impacts their users — the same problem I solve daily with SAP integration, but at Fortune 500 scale.
>
> And the Seoul office — I want to be part of growing Datadog's presence in Korea, especially with 70% Korean customers on the team.

**JD hook:** *Product expertise, educate customers, global growth — Seoul team.*

### 한국어

> 지원 전부터 Datadog에 관심이 있었습니다. Kiss에서 Odoo ERP를 운영하면서 오픈소스 커뮤니티를 꾸준히 팔로우하고 있고, SAP 동기화 실패·지연·프로세스 헬스 같은 observability 문제를 매일 다룹니다. Datadog이 metrics와 signal을 다루는 방식을 참고해서 내부 모니터링 대시보드와 알림을 직접 만들었습니다.
>
> 그 패턴만 따라 하는 게 아니라, 그 제품을 만드는 회사에서 일하고 싶었습니다. TSE로서 고객이 장애가 사용자에게 닿기 전에 시스템에서 무슨 일이 일어나는지 이해하도록 돕는 일 — SAP 연동에서 매일 하는 일을 훨씬 큰 규모로 하는 것입니다.
>
> 서울 오피스가 한국 시장을 키우는 단계라는 점도 매력적입니다. 팀 고객의 70%가 한국이라고 들었는데, 제 한국어와 기술을 함께 쓸 수 있는 환경이라고 생각합니다.

---

## Q3. Why TSE, not SWE? / 왜 SWE가 아니라 Support Engineering인가요?

### English

> I can build systems — I built KRS from scratch. But the work where I have the most impact is when production breaks and I'm the person connecting technical root cause to the people waiting on the other side.
>
> Example: 30 days before KRS launch, I found a critical multi-tenant data isolation bug — not while writing a feature, but while asking how the system would behave in production. Fixing that before customers were affected was more meaningful to me than shipping another feature.
>
> TSE is that job every day: reproduce, diagnose, communicate, educate — with engineering depth behind it. I'm not leaving engineering; I'm choosing customer impact plus technical depth.

**JD hook:** *Reproduce technical issues, customer-first, programming background.*

### 한국어

> 시스템을 만들 수 있습니다 — KRS를 처음부터 구축했습니다. 하지만 임팩트가 가장 큰 순간은 프로덕션에서 문제가 터졌을 때, 기술적 근본 원인과 기다리는 사람들을 연결해 주는 때입니다.
>
> 예를 들어 KRS 출시 30일 전, 멀티테넌트 데이터 격리 버그를 발견했는데, 기능을 코딩하다가가 아니라 프로덕션에서 어떻게 동작할지 질문하다가 찾았습니다. 고객에게 영향 가기 전에 막은 그 경험이, 새 기능 하나 더 만드는 것보다 의미 있었습니다.
>
> TSE는 매일 reproduce, 진단, 커뮤니케이션, 교육을 하는 역할이고, 그 뒤에 엔지니어링 깊이가 있습니다. 엔지니어링을 포기하는 게 아니라, 고객 임팩트와 기술 깊이를 함께 선택하는 것입니다.

---

## Q4. Why Seoul / relocation / start date?

### English

> I'm Korean, and after four years in New York I want to move back and build my career in Korea's tech ecosystem. I need about one month notice at Kiss, plus relocation — so roughly 6 to 8 weeks after offer. If offer comes in August, October start is realistic.
>
> Hybrid 3 to 5 days in the Seoul office works well for me. I'm planning the move with my partner.

### 한국어

> 한국인이고, 뉴욕에서 4년 지낸 뒤 한국 tech 생태계에서 커리어를 쌓고 싶습니다. 퇴사 1개월 전 notice와 이전 준비로, 오퍼 후 6~8주 정도 필요합니다. 8월에 오퍼가 나오면 10월 시작이 현실적입니다.
>
> 서울 오피스 주 3~5일 하이브리드는 문제없습니다. 파트너와 함께 이전을 계획 중입니다.

---

## Q5. Why are you a good fit for this role? (JD summary question)

### English

> Three reasons.
>
> **One — customer ownership at scale.** I support 300-plus users on two production platforms with a live SAP integration. I'm first responder, educator, and fixer — same as TSE, smaller scale.
>
> **Two — integration troubleshooting.** Datadog has 600-plus integrations. I've debugged SAP IDoc pipelines, REST APIs, and multi-system data flows. I know how to reproduce, narrow root cause, and escalate with a complete package.
>
> **Three — communication.** Bilingual Korean and English. 70% Korean customers, 30% global — I can support both. I translate technical issues for business teams daily.

### 한국어

> 세 가지 이유가 있습니다.
>
> **첫째, 고객 ownership 경험.** SAP 실시간 연동이 있는 프로덕션 플랫폼 두 개에서 300명 이상을 지원합니다. 1차 대응, 교육, 해결이 일상입니다.
>
> **둘째, 통합 트러블슈팅.** Datadog은 600개 이상 통합이 있고, 저는 SAP IDoc, REST API, 다중 시스템 데이터 흐름을 디버깅해 왔습니다. 재현, 원인 좁히기, 완전한 정보로 에스컬레이션하는 패턴을 압니다.
>
> **셋째, 커뮤니케이션.** 한국어 네이티브, 영어 유창합니다. 팀 고객 70% 한국·30% 글로벌 — 둘 다 지원 가능합니다.

---

# SECTION B — Behavioral STAR (JD: customer-first, critical thinking)

---

## Q6. Critical production issue you owned / 심각한 프로덕션 이슈 경험

**Story:** SAP sync #3

### English (~2 min)

> **Situation:** After we launched our enterprise sales platform, 300-plus field salespeople used it daily. Our SAP BW to platform sync pipeline failed intermittently — wrong orders, inventory mismatches. Business escalated to me.
>
> **Task:** Find root cause, fix it, and keep field teams working while we resolved it.
>
> **Action:** I analyzed failure patterns with the business team and found it only affected certain SKU categories. Root cause was a field mapping mismatch between SAP BW and our platform data model. I documented exact repro conditions and expected behavior for our India vendor dev team. While waiting for the fix, I shared the affected SKU list so manual workaround covered under 15% of impacted items.
>
> **Result:** Root cause to fix deployed within 48 hours. Same failure type never recurred — we added a field mapping validation step to our release process.
>
> **At Datadog:** Same pattern — reproduce, narrow scope, communicate workaround, fix root cause, prevent recurrence.

### 한국어 (~2분)

> **상황:** 엔터프라이즈 세일즈 플랫폼 출시 후 300명 이상의 현장 영업팀이 매일 사용했습니다. SAP BW에서 플랫폼으로 가는 동기화 파이프라인이 간헐적으로 실패해 주문 오류와 재고 불일치가 발생했고, 비즈니스팀이 저에게 에스컬레이션했습니다.
>
> **과제:** 근본 원인을 찾고, 현장 업무가 멈추지 않게 하면서 해결하는 것이었습니다.
>
> **행동:** 비즈니스팀과 장애 패턴을 분석해 특정 SKU 카테고리에서만 발생함을 발견했습니다. 원인은 SAP BW와 플랫폼 데이터 모델 간 필드 매핑 불일치였습니다. 인도 벤더 개발팀에 재현 조건과 기대 동작을 스펙으로 정리해 전달했고, 수정 전까지 영향 SKU 목록을 공유해 수동 처리를 전체의 15% 이하로 통제했습니다.
>
> **결과:** 48시간 이내 원인 파악부터 배포까지 완료. 동일 유형 재발 없음 — 배포 프로세스에 필드 매핑 검증 단계가 추가되었습니다.

---

## Q7. Difficult customer or stakeholder / 어려운 고객·이해관계자

**Story:** Phase 1/2 #4 (or frustrated business unit from SAP story)

### English (~2 min)

> **Situation:** On our KRS POS project, four groups were deadlocked for weeks — vendor dev, vendor PM, US business, and in-house engineering. Business demanded one-click receiving. Engineering said it conflicted with Odoo's architecture and was structurally impossible.
>
> **Task:** Unblock delivery without burning either side.
>
> **Action:** I met business and engineering separately to understand real needs vs. positions. I designed a Phase 1 / Phase 2 plan: Phase 1 ships on the existing Odoo structure so we hit the launch date. Phase 2 delivers atomic receiving on an agreed timeline. I explained in technical terms to engineering and roadmap terms to business.
>
> **Result:** Both sides accepted. Phase 1 launched on time. Phase 2 cut receiving manager work by about 80% with zero data inconsistency.
>
> I didn't say "no" — I reframed what "yes" could look like on a realistic timeline.

### 한국어 (~2분)

> **상황:** KRS POS 프로젝트에서 벤더 개발, 벤더 PM, 미국 비즈니스, 인하우스 엔지니어링 4개 그룹이 수 주간 교착 상태였습니다. 비즈니스는 원클릭 수령을 요구했고, 엔지니어링은 Odoo 아키텍처와 충돌해 구조적으로 불가능하다고 했습니다.
>
> **과제:** 어느 한쪽도 태우지 않고 딜리버리를 unblock하는 것이었습니다.
>
> **행동:** 비즈니스와 엔지니어링을 각각 만나 표면적 주장이 아닌 실제 니즈를 파악했습니다. Phase 1은 기존 Odoo 구조로 런치 일정을 맞추고, Phase 2에서 합의된 일정 안에 원자적 수령을 구현하는 방안을 설계했습니다. 엔지니어링에는 기술 근거로, 비즈니스에는 로드맵으로 설명했습니다.
>
> **결과:** 양쪽 수용, Phase 1 정시 런치, Phase 2에서 수령 업무 시간 약 80% 단축, 데이터 불일치 0건.

---

## Q8. Escalation / 에스컬레이션 경험

**Story:** SAP → vendor escalation (same #3, different angle)

### English

> After I narrowed the SAP sync issue to a field mapping bug in vendor-owned code, I escalated to our India vendor dev team. I didn't just forward the ticket — I included: exact repro steps, affected SKU categories, sample payloads, expected vs. actual behavior, business impact (300 users, order errors), and a suggested severity.
>
> I told the business team: "I've identified root cause and escalated with full context — update in 30 minutes if no response."
>
> **When I escalate at Datadog:** customer impact, repro, environment, logs, what I tried, suggested severity — and the customer always knows the next step.

### 한국어

> SAP 동기화 이슈가 벤더 코드의 필드 매핑 버그로 좁혀진 뒤, 인도 벤더 개발팀에 에스컬레이션했습니다. 티켓만 넘긴 게 아니라 재현 절차, 영향 SKU 카테고리, 샘플 페이로드, 기대/실제 동작, 비즈니스 임팩트(300명, 주문 오류), 심각도 제안을 포함했습니다.
>
> 비즈니스팀에는 "원인 특정 후 전체 컨텍스트와 함께 에스컬레이션했고, 30분 내 업데이트하겠다"고 말했습니다. Datadog에서도 고객 임팩트, 재현, 환경, 로그, 시도한 것, 심각도 — 그리고 고객에게 다음 단계를 항상 알리는 것이 원칙입니다.

---

## Q9. Prioritization — multiple tickets / people at once ⭐ (Shingang likely)

**Story:** Two platforms at Kiss

### English

> I triage by **business impact**, not arrival order.
>
> **P1** — production down, data corruption, or field sales blocked → immediate  
> **P2** — partial degradation → respond within 30 minutes  
> **P3** — how-to or config questions → within 2 hours  
>
> **Critical rule:** acknowledge every request quickly — even "I've seen your ticket, I'm on a P1, you're next." Silence causes escalations faster than slow fixes.
>
> At Kiss I ran two platforms simultaneously. SAP sync affecting 300 salespeople always beat an admin config question. I tracked everything in Jira with clear ETAs and escalated blockers before deadlines slipped.
>
> **Example:** SAP sync failing during business hours = P1. KRS partner onboarding question = P2 unless launch window. Documentation request = P3.

### 한국어

> **비즈니스 임팩트**로 트리아지합니다. 들어온 순서가 아닙니다.
>
> **P1** — 프로덕션 다운, 데이터 손상, 현장 영업 차단 → 즉시  
> **P2** — 부분 장애 → 30분 내 응답  
> **P3** — 사용법·설정 질문 → 2시간 내  
>
> **원칙:** 모든 요청에 빠르게 acknowledgment — "P1 처리 중입니다, 다음 순서입니다"만이라도. 침묵이 느린 수정보다 에스컬레이션을 빠르게 만듭니다.
>
> Kiss에서 플랫폼 두 개를 동시에 운영했습니다. 300명 영업에 영향 주는 SAP 동기화는 항상 admin 설정 질문보다 우선이었고, Jira로 ETA를 관리하고 마감 전에 블로커를 에스컬레이션했습니다.

---

## Q10. Technical project you owned / 기술 프로젝트 소개

**Story:** KRS POS (JD: programming, reproduce, educate)

### English

> I built KRS — a multi-tenant SaaS POS from zero to production. Python backend, PostgreSQL, AWS. I designed tenant isolation, API-driven partner onboarding — cut onboarding from days to under 30 minutes.
>
> I'm still the technical support lead: users report issues, I reproduce, fix or ship improvements. Before launch I caught a critical tenant isolation bug 30 days early — same operational mindset as reproducing customer issues at Datadog.
>
> Stack: Python, PostgreSQL, REST APIs, AWS EC2/S3, Linux server logs for debugging.

### 한국어

> KRS — 멀티테넌트 SaaS POS를 제로에서 프로덕션까지 구축했습니다. Python, PostgreSQL, AWS. 테넌트 격리 설계, API 기반 파트너 온보딩으로 온보딩을 며칠에서 30분 이내로 줄였습니다.
>
> 지금도 기술 지원 리드로 이슈 재현, 수정, 개선 배포를 합니다. 출시 30일 전 치명적 테넌트 격리 버그를 사전에 발견했습니다. Datadog에서 고객 이슈를 재현하는 것과 같은 운영 마인드셋입니다.

---

## Q11. Something that failed / almost failed — what did you learn?

**Story:** D-30 tenant isolation #5

### English

> **Situation:** 30 days before KRS launch, we found the vendor implemented multi-tenant isolation wrong — Company A data could leak to Company B.
>
> **Action:** In-house team rewrote affected code. Root cause: we sent specs but had no verification gate before implementation. We added Scope Confirmation Checklist, cross-team code review on vendor modules, and Technical Design Document gate for new features.
>
> **Result:** Launched on schedule. Zero repeat architecture deviations in Phase 2.
>
> **Lesson:** Trust isn't a process. Verification before production — same discipline I'd apply when validating a customer's Datadog Agent or integration config.

### 한국어

> **상황:** KRS 출시 30일 전, 벤더가 멀티테넌트 격리를 잘못 구현해 Company A 데이터가 B에 노출될 수 있었습니다.
>
> **행동:** 인하우스 팀이 코드 재작성. 근본 원인은 스펙은 전달했지만 구현 전 검증 단계가 없었던 것. Scope Confirmation Checklist, 벤더 모듈 크로스 리뷰, TDD 게이트를 도입했습니다.
>
> **결과:** 정시 출시. Phase 2에서 동일 유형 아키텍처 이탈 0건.
>
> **교훈:** 신뢰만으로는 부족하고, 프로덕션 전 검증이 필요합니다.

---

## Q12. Customer feedback → product improvement (JD 담당 업무)

### English

> On our sales platform, I run a structured feedback loop. Sales and CS report friction → I prioritize by business impact → I either fix directly or spec it for engineering.
>
> Example: repeated confusion about SAP sync delay visibility. Users didn't know if data was stale or broken. I shipped a last-synced timestamp on the product view — support tickets on that topic dropped significantly.
>
> That's the TSE loop: customer interaction → identify pattern → feed back to improve the product or docs.

### 한국어

> 세일즈 플랫폼에서 체계적 피드백 루프를 운영합니다. 영업·CS 불편 사항 → 비즈니스 임팩트로 우선순위 → 직접 수정 또는 엔지니어링 스펙.
>
> 예: SAP 동기화 지연 시 데이터가 stale인지 broken인지 구분이 안 돼 반복 문의가 왔습니다. 제품 화면에 last-synced 타임스탬프를 추가했고, 해당 주제 티켓이 크게 줄었습니다. TSE 루프와 같습니다 — 고객 인터랙션 → 패턴 파악 → 제품·문서 개선 피드백.

---

# SECTION C — Technical (JD: programming, Linux, reproduce, integrations)

---

## Q13. Tools and stack? / 사용 도구?

### English

> **Languages:** Python, JavaScript/TypeScript, React — daily for fixes and tooling  
> **Cloud:** AWS — EC2, S3, IAM, CloudWatch for server monitoring and logs  
> **Linux:** grep, tail -f, ps, systemctl — server log analysis and process checks  
> **Integrations:** SAP IDoc and RFC (PyRFC), REST API troubleshooting — HTTP status, payloads  
> **Data:** PostgreSQL, Snowflake, SQL  
> **Monitoring:** CloudWatch; internal dashboards I built inspired by Datadog — learning Datadog product via Learning Center now  
> **Process:** Jira, Git, Agile  

### 한국어

> Python, JS/TS, React / AWS EC2·S3·CloudWatch / Linux grep·tail·systemctl / SAP IDoc·RFC, REST API 트러블슈팅 / PostgreSQL, Snowflake / CloudWatch + Datadog 방식 참고한 내부 모니터링 / Jira, Git

---

## Q14. How do you troubleshoot when data isn't syncing? (JD: reproduce + integrations)

### English

> Systematic approach — same for SAP or a Datadog integration:
>
> 1. **Clarify scope** — one record or all? one host or fleet? when did it start?
> 2. **Reproduce** — can I trigger it consistently?
> 3. **Check the pipeline** — source → transform → destination. Where does data stop?
> 4. **Logs and queues** — SAP IDoc queue, application logs, API response codes
> 5. **Compare** — expected vs. actual payload, field mapping
> 6. **Mitigate** — workaround for customer while fixing root cause
> 7. **Document** — repro steps if escalating
>
> At Kiss this resolved SAP sync issues in 48 hours. Same method applies to Datadog Agent or integration tiles.

### 한국어

> 1. 범위 확인 — 한 건 vs 전체, 언제부터
> 2. 재현
> 3. 파이프라인 추적 — 소스 → 변환 → 목적지, 어디서 끊기는지
> 4. 로그·큐 — IDoc 큐, 앱 로그, HTTP 상태
> 5. 기대 vs 실제 페이로드·필드 매핑 비교
> 6. 고객 workaround
> 7. 에스컬레이션 시 repro 문서화

---

## Q15. Observability / monitoring experience? (JD: product expertise)

### English (honest)

> We don't run full Datadog at Kiss — scale doesn't justify it. But we have real observability needs: SAP sync health, platform latency, process uptime.
>
> I built internal dashboards and alerts on AWS CloudWatch — inspired by Datadog's approach to metrics and signals. I understand why customers need visibility before incidents hit users.
>
> I'm actively going through Datadog Learning Center Fundamentals to get hands-on with Agent, logs, and metrics before I'd support customers on it. I learn fast because I've been on the customer side of monitoring gaps.

### 한국어

> Kiss 규모에서는 full Datadog 도입이 어렵지만, SAP sync 헬스·지연·프로세스 uptime 같은 observability 니즈는 있습니다. CloudWatch 기반 내부 대시보드·알림을 Datadog 방식을 참고해 구축했습니다. Datadog Learning Center로 Agent·로그·메트릭 hands-on 학습 중이며, 모니터링 공백을 겪어 본 고객 측 경험이 있어 왜 이 제품이 필요한지 이해합니다.

---

## Q16. Open source contribution? (JD 자격 — honest)

### English

> I'm not a top open-source contributor on GitHub. What I do: we run Odoo in production, so I follow the community, release notes, and bug discussions actively. I understand how customers depend on open-source integrations — upgrade risk, breaking changes, community support.
>
> I'm eager to deepen contribution as I grow at Datadog. My strength today is production support of open-source ERP, not maintainer-level commits.

### 한국어

> GitHub top contributor는 아닙니다. 다만 Odoo를 프로덕션에서 운영하며 커뮤니티·릴리스 노트·버그 논의를 꾸준히 팔로우합니다. 오픈소스 통합에 의존하는 고객의 업그레이드 리스크와 breaking change를 이해합니다. Datadog에서 성장하며 기여를 늘리고 싶고, 현재 강점은 오픈소스 ERP 프로덕션 지원 경험입니다.

---

## Q17. Weekend on-call rotation? (JD 자격)

### English

> I understand TSE sometimes requires weekend coverage. I'm willing to participate in rotation when needed. At Kiss I've handled urgent production issues outside business hours when sales teams were blocked. I prefer clear schedule visibility so I can plan ahead.

### 한국어

> TSE에 주말 교대가 필요할 수 있다는 점 이해합니다. 필요 시 참여 가능합니다. Kiss에서도 영업팀이 막혔을 때 업무 시간 외 긴급 대응을 한 적이 있습니다. 일정이 미리 공유되면 좋겠습니다.

---

## Q18. Don't know the answer?

### English

> I don't end with "I don't know." I say: "I don't have the answer yet — I'll check our documentation and internal knowledge base first. If needed I'll escalate to a senior TSE with full context. I'll update you within 30 minutes with either an answer or the next step."
>
> Customer should always know someone is working on it and what happens next.

### 한국어

> "모르겠습니다"로 끝내지 않습니다. "아직 확답은 없고, 문서와 내부 KB를 확인하겠습니다. 필요 시 시니어 TSE에 컨텍스트와 함께 에스컬레이션하겠고, 30분 내 답변 또는 다음 단계를 업데이트하겠습니다."

---

## Q19. How do you write ticket replies? (JD: written communication)

### English

> Three parts:
>
> 1. **Acknowledge** — their specific symptom, not generic "sorry for the inconvenience"
> 2. **Status** — what I checked, what I found, what I'm doing next
> 3. **Next steps** — timeline, what I need from them, workaround if any
>
> Goal: customer never wonders "is anyone actually working on this?"

### 한국어

> 1. **인정** — 일반적 사과가 아닌 구체적 증상
> 2. **현황** — 확인한 것, 발견, 다음 행동
> 3. **다음 단계** — 일정, 고객에게 필요한 것, workaround

---

## Q20. Salary? (if asked — redirect lightly)

### English

> I discussed with Windy — I'm targeting around 65 million KRW base and I'm open to reviewing the full package including RSU and ESPP at the offer stage.

*(Don't open this topic yourself in Shingang round.)*

---

# SECTION D — Your questions for Shingang (pick 2–3)


| #   | Question                                                                   | Why ask                                    |
| --- | -------------------------------------------------------------------------- | ------------------------------------------ |
| 1   | What does success look like in the first 90 days for a new TSE?            | JD: onboarding, product expertise path     |
| 2   | What issue types does the Korea team see most — Agent, integrations, logs? | Shows prep for role                        |
| 3   | How is the Seoul team structured — where does TSE 2 fit?                   | Manager lens                               |
| 4   | What separates strong TSEs from average ones on your team?                 | Learn his bar                              |
| 5   | Can you walk me through the remaining interview steps?                     | Confirm troubleshooting + cultural connect |


### 한국어 버전 (필요 시)

1. "신규 TSE의 첫 90일에서 성공이란 어떤 모습인가요?"
2. "한국 팀이 가장 많이 다루는 이슈 유형은 무엇인가요?"
3. "서울 팀 구조와 TSE 2의 위치가 어떻게 되나요?"
4. "팀에서 강한 TSE와 평균 TSE의 차이는 무엇인가요?"

---

# SECTION E — 오늘 아침 20분 리허설 순서

1. ✅ Q1 자기소개 (EN) — 90초
2. ✅ Q3 Why TSE (EN) — 60초
3. ✅ Q9 Prioritization (EN) — 60초 ⭐
4. ✅ Q6 SAP STAR (KR) — 2분
5. ✅ Q7 Stakeholder STAR (EN) — 2분
6. ✅ Q13 Tools — 45초
7. ✅ Q14 Troubleshoot sync — 60초
8. ✅ 역질문 2개

**Shingang hook (마지막에 한 번):** integration + ownership until resolved — HERE/LG 배경과 같은 패턴.

---

*Day-of: 2026-07-01 · JD source: careers.datadoghq.com/ko/detail/6883301*