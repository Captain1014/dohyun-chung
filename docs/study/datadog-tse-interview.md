# Datadog TSE 2 (Seoul) — 인터뷰 완전 준비 가이드

**포지션:** Global Support Engineering 2 (Technical Support Engineer)
**지역:** Seoul, Korea
**상태:** R1–R5 ✅ · **R6 Director — Rolf (Senior Director TSE APJ, Sydney)**  
**R6 prep:** `datadog-r6-director-prep.md` · R5: `datadog-r5-doc-scenarios.md` · R4: `datadog-r4-behavioral-prep.md`

---

## Round 1.5: HR Screening — Windy (Singapore)

**1. Tell me about yourself.**

> Sure! So — I'm originally from Korea, moved to New York for college where I studied Computer Science and Sociology.  
> After graduating I stayed for the job opportunities, but now I'm ready for a new chapter and want to move back and contribute to the tech ecosystem there.
>
> I have about 3 years of software engineering and technical support experience. I started at an edtech startup called 24/7 Teach where I built an AI chatbot and worked closely with instructors and students to improve the platform. Then for the past 2 years I've been at Kiss Products — the number one nail brand in the US.  On the technical side, I own two platforms. One is KRS, a multi-tenant SaaS POS system I built end-to-end and still run as the technical support lead. The other is our global sales platform supporting 300+ internal users with a live SAP integration — I troubleshoot issues, collect feedback, and implement new feautes or bug fixes.  
> TSE vs SWE  
> I've realized I'm more drawn to the support side. Engineering is reactive — you build what someone else specs out. Support is proactive — you're the one finding the problem before the customer even fully understands it. That's where I actually want to be.

**Why would you be a good fit for this role?**

> The reason I think I'd fit well is that my background sits exactly at the intersection of what this role needs — technical depth and direct customer ownership.
>
> I support 300+ users across two platforms, including a live SAP integration. When things break, I'm the one diagnosing the issue and communicating to non-technical stakeholders at the same time. That combination — troubleshoot fast, explain clearly — is what TSE does every day.
>
> I also have genuine context on observability. I built internal monitoring dashboards at Kiss Products modeled after how Datadog approaches the problem. I already understand why customers need this product — and what it feels like to build something like it yourself.

**Functional background / projects / tools**

> My background is full-stack software engineering,  
>  and my day-to-day is very much customer support and fix their issues. and eventually make the system better. 
>
> At Kiss Products I own two systems. KRS is a multi-tenant SaaS POS I built from scratch — Python backend, PostgreSQL, deployed on AWS. The other is our global sales platform built on Odoo, an open-source ERP, with a live bidirectional SAP integration I maintain in production. I work with REST APIs, troubleshoot Linux servers, write scripts to diagnose issues, and manage cloud infrastructure on AWS. On the customer side, I'm the first responder when something breaks — I triage, communicate, and fix.

**Why support engineering role?**

> I've been doing a hybrid of engineering and support for 3 years, and what I've found is that I actually thrive in the support side. Writing code is satisfying, but there's something different about being the person a customer calls when their system is down — you have to understand the technology deeply, think fast, and communicate clearly under pressure. That combination is where I'm strongest. I'm not moving away from engineering — I want a role where technical depth and customer impact are both required every day. TSE at Datadog is exactly that.

**2. Why Datadog?**

> Honestly, my interest in Datadog started before I even thought about applying. At Kiss Products we run Odoo as our core platform — it's open source and we actively follow its community and releases. Our infrastructure isn't large enough to justify a full Datadog implementation, but the observability problems we face are real — SAP sync failures, platform latency, process health. So I built internal monitoring dashboards and alerting systems inspired directly by how Datadog approaches observability. That's when I realized: I want to work at the company whose product I've been modeling after.
>
> What excites me about TSE specifically is the scale. At Kiss Products I support 300 users across 2 platforms. At Datadog I'd be helping Fortune 500 companies and high-growth AI leaders understand what's happening in their systems before it impacts their customers. The leverage is completely different.
>
> And the Seoul office — I want to be part of building Datadog's presence in Korea at this stage.

**3. When can you start?**

> I need to give my current company one month's notice, and I'm relocating from New York to Seoul. Depending on when the offer comes, roughly 6 to 8 weeks after that. If the offer comes in early August, I'd be looking at an October start.

**4. Salary expectation?**

> Based on market data for this role in Seoul, I'm targeting around 65 million won. I'm open to discussing the full compensation package.

**5. Do you have any questions?**

> "What does the next round look like, and who will I be speaking with?"

---

## 인터뷰 전체 구조 (실제 프로세스 — 2026-06-26 확정)


| #     | 라운드                                | 형식                                                                            | 언어          | 상태                                                                   |
| ----- | ---------------------------------- | ----------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------- |
| 1     | HackerRank OA                      | Bash, DevOps, AWS, Coding                                                     | —           | ✅                                                                    |
| 1.5   | HR — Windy                         | Screening, comp ballpark, process                                             | EN          | ✅                                                                    |
| 2     | Hiring Manager                     | 배경/프로젝트/도구, why TSE                                                           | KR/EN       | ✅                                                                    |
| **3** | **Shingang Kim — Sr. Manager TSE** | Technical skills, experience, **behavioral**, **prioritization**, motivations | **KR/EN**   | ✅ **2026-07-01** (~25 min)                                           |
| **4** | **Cultural connect — 2 team members** | **Behavioral** (Windy: customers · innovation · teamwork · ownership) | **KR/EN**   | ⏳ **2026-07-07 8pm EDT** · `datadog-r4-behavioral-prep.md` |
| 5     | **Pair live troubleshooting**      | 고객 role-play, 문서/로그 기반 디버깅                                                    | **English** | ⏳                                                                    |
| 6     | Director — final                   | Career goals, long-term fit                                                   | English     | ⏳                                                                    |
| —     | Coffee chat onsite                 | Pre-offer informal meet                                                       | —           | ⏳                                                                    |


**고객 비율:** ~70% 한국 / ~30% 기타 리전 → 영어 troubleshooting 라운드 필수.

---

## Next interviewer: Shingang Kim (R3)

See `**datadog-r3-prep.md`** for full profile, question list, bilingual tips, and story map.

**Core message for Shingang:**

> Integration and ownership under pressure — SAP/production support for 300+ users, same pattern Datadog TSE uses at scale with enterprise customers.

---

## 2라운드 예상 질문

1. 자기소개
2. 왜 Datadog인가?
3. 왜 SWE가 아닌 Support Engineering인가?
4. 직접 처음부터 끝까지 소유한 기술 프로젝트 소개
5. 어려운 고객/이해관계자 상황을 어떻게 해결했는가
6. 어떤 도구를 써봤는가? (AWS, Linux, 모니터링 도구)

---

## 1. 자기소개 (영어, 1분)

> 제 이름은 정도현입니다. 영어 이름은 Leah예요. 현재 뉴욕에 있고 올해 한국으로 이전할 예정입니다.
>
> 지난 3년간 저는 엔지니어링과 고객 대응의 교차점에서 일해왔습니다. Kiss Products는 미국 1위 네일 브랜드인데요, 저는 두 개의 플랫폼을 담당하는 메인 기술 담당자입니다. 하나는 제가 처음부터 끝까지 직접 구축한 멀티테넌트 SaaS POS 시스템 KRS이고, 지금도 ongoing 기술 지원 리드를 맡고 있습니다. 다른 하나는 300명 이상의 내부 사용자를 지원하는 KISS 글로벌 세일즈 플랫폼으로, 실시간 SAP 연동을 유지하고 이슈가 사용자에게 도달하기 전에 먼저 감지합니다.
>
> 제가 깨달은 건, 제 일에서 가장 가치 있는 부분은 코드를 작성하는 게 아니라 — 기술 시스템과 고객의 문제를 동시에 이해하고 그 둘을 연결하는 사람이 되는 것이라는 점입니다. 그게 Datadog TSE에 지원하게 된 이유입니다.

---

## 2. 왜 Datadog인가?

> Datadog은 현대 클라우드 스택의 모니터링 및 옵저버빌리티 레이어입니다. 제가 함께 일한 모든 엔지니어링 팀은 Datadog을 쓰고 있거나 쓰고 싶어합니다. TSE가 해결하는 문제 — 고객이 자신의 시스템에서 무슨 일이 일어나는지 이해하도록 돕고, 노이즈 속에서 올바른 신호를 찾아내는 것 — 는 제가 매일 SAP 연동 장애와 플랫폼 이슈를 트러블슈팅하면서 직면하는 문제와 정확히 같습니다.
>
> 특히 끌린 건 레버리지예요. Kiss Products에서는 2개 플랫폼, 300명을 지원합니다. Datadog에서는 수백 개 회사의 엔지니어링 팀을 지원하게 됩니다. 임팩트의 규모가 완전히 다릅니다.
>
> 그리고 서울 오피스 — Datadog이 지금 한국에서 팀을 키우고 있잖아요. 그 초기 단계에 함께하고 싶습니다.

---

## 3. 왜 SWE가 아닌 Support Engineering인가?

> CS 학위가 있고 시스템을 처음부터 구축할 수 있습니다. 하지만 제가 발견한 건, 가장 높은 임팩트를 만드는 일은 새로운 기능을 작성하는 게 아니라 — 고객 문제가 되기 전에 치명적인 이슈를 잡아내거나, 팀이 시스템이 왜 예상과 다르게 동작했는지 이해하도록 돕는 것이라는 점입니다.
>
> Kiss Products에서 KRS POS 출시 30일 전, 멀티테넌트 환경에서 치명적인 데이터 격리 버그를 발견했습니다. 코드를 짜다가 찾은 게 아니라, 시스템이 프로덕션에서 어떻게 동작할지 올바른 질문을 던지다가 찾은 겁니다. 그 문제 해결 방식 — 여기 시스템이 있고, 여기 증상이 있고, 근본 원인을 찾자 — 이게 제가 진심으로 즐기는 일입니다.
>
> TSE는 그 일을 고객과 함께, 더 큰 규모로 하는 것입니다.

---

## 4. 핵심 스토리 3개

### Story 1: KRS POS — 4팀 교착 상태 해결

**상황:**

> KRS POS 개발 중, 벤더 개발팀 / 벤더 PM / 미국 사업부 / 사내 엔지니어링 4개 팀이 수 주간 교착 상태에 빠졌습니다. 각 팀이 서로 다른 요구사항을 주장하며 아무도 결정을 내리지 못하는 상황이었습니다.

**내가 한 것:**

> 각 팀을 개별적으로 만나 실제 요구사항과 표면적 주장을 따로 정리했습니다. 진짜 충돌이 어디서 발생하는지, 어디서 합의가 가능한지 매핑했습니다. 그런 다음 모든 팀을 한 자리에 모아 각 팀의 핵심 니즈를 반영한 단일 실행 계획을 제시했고, 기한 내 출시를 달성했습니다.

**결과:**

> 파트너 온보딩 시간이 수 일에서 30분 이내로 단축됐습니다.

---

### Story 2: 출시 30일 전 치명적 리스크 발견

**상황:**

> KRS POS 출시 30일 전, 데이터 격리 구조를 검토하다가 멀티테넌트 환경에서 파트너 A의 데이터가 파트너 B에게 노출될 수 있는 치명적 버그를 발견했습니다.

**내가 한 것:**

> 즉시 이슈를 제기하고 관련 이해관계자를 소집했습니다. 기존에 없던 리뷰 체크포인트를 릴리즈 프로세스에 도입했고, 고객 데이터에 영향이 가기 전에 문제를 해결했습니다.

**결과:**

> 출시는 예정대로 진행됐고, 그 체크포인트는 지금도 릴리즈 프로세스의 일부로 남아 있습니다.

---

### Story 3: 300+ 사용자 Sales Platform — 지속적 지원

**상황:**

> Kiss Products의 300명 이상의 내부 사용자가 글로벌 세일즈 플랫폼을 사용합니다. SAP와 실시간으로 연동되는 시스템입니다.

**내가 한 것:**

> 체계적인 피드백 루프를 구축했습니다 — 사용자 요구사항을 수집하고, 비즈니스 임팩트 기준으로 우선순위를 정하며, 엔지니어링 팀과 협력해 개선사항을 실행했습니다. SAP 동기화 장애가 발생하면 사용자가 알아채기 전에 AWS 서버 로그와 SAP IDoc 큐에서 직접 트러블슈팅했습니다.

**결과:**

> 플랫폼 안정성과 사용자 만족도가 지속적으로 유지됐습니다.

---

## 5. 어려운 고객/이해관계자 상황 (3라운드 대비)

### Q. 어려운 고객 상황을 어떻게 처리했나요?

> Kiss Products에서 주요 사업부가 데이터 동기화 이슈의 즉각적인 수정을 요구했습니다. 하지만 그들이 원하는 방식으로 수정하면 다운스트림에 더 큰 문제가 생길 수 있는 상황이었습니다. 그들은 frustrated하고 에스컬레이션하고 있었습니다.
>
> 그냥 "안 된다"고 하지 않았습니다. 바로 통화를 잡아 긴급함을 인정하고, 그들이 원하는 수정을 급하게 했을 때 실제로 어떤 일이 일어날지 설명했습니다. 그런 다음 근본 원인을 실제로 해결하는 48시간 타임라인의 대안을 제시했습니다. 동의했습니다.
>
> 핵심은 — 먼저 답답함을 인정하고, 그 다음에 진짜 해결책으로 방향을 바꾸는 것입니다. 절대 그냥 "그건 안 돼요"라고만 하지 않습니다.

---

### Q. 여러 티켓을 동시에 어떻게 처리하나요?

> 임팩트와 긴급도로 트리아지합니다. 여러 사용자의 프로덕션 다운이 단일 사용자의 설정 질문보다 항상 우선입니다. 하지만 모든 티켓이 합리적인 시간 안에 응답을 받도록 합니다 — 설령 "확인했습니다, 지금 보고 있습니다"라는 내용이더라도요. 침묵이 고객을 에스컬레이션하게 만듭니다.
>
> Kiss Products에서 두 플랫폼의 이슈를 동시에 관리했습니다. Jira로 모든 것을 추적하고, 블로커가 마감일 위기가 되기 전에 에스컬레이션했습니다.

---

## 6. 티켓에 어떻게 답변을 작성하나요?

> 먼저 티켓을 꼼꼼히 읽고 가능하면 이슈를 재현합니다. 그 다음 답변은 세 부분으로 구성됩니다:
>
> 첫째 — 그들이 경험하는 것을 인정합니다. 일반적인 문구가 아니라 그들의 상황에 구체적으로.
>
> 둘째 — 지금까지 발견한 것, 다음에 할 것.
>
> 셋째 — 타임라인과 그들에게 필요한 것이 있다면 무엇인지.
>
> 목표는 — 고객이 "누가 이걸 보고 있긴 한 건가?"라는 의문을 갖지 않도록 하는 것입니다. 모든 답변이 그 질문에 답합니다.

---

## 7. 기술 도구 질문 대비

**AWS:**

- EC2, S3, IAM, CloudWatch — 실무 사용 경험 있음
- SAP 온프렘 ↔ AWS S3 연동 (월별 명세서), Lambda, 서버 로그 분석

**Linux/Bash:**

- 일상적으로 서버 로그 분석, 프로세스 모니터링
- `grep`, `awk`, `tail -f`, `ps aux`, `systemctl` 실무 사용

**모니터링:**

- Datadog: Agent 설치, 메트릭 수집, 로그 모니터링 학습 중
- 실무: AWS CloudWatch로 서버 상태 모니터링, SAP IDoc 큐 모니터링

**연동/API:**

- SAP IDoc, RFC (PyRFC) 실무 경험
- REST API 트러블슈팅 (HTTP 상태 코드, 페이로드 확인)
- Jira, Git

---

## 8. 역질문 (꼭 준비)

- "새 TSE의 온보딩 프로세스는 어떻게 되나요?"
- "TSE가 혼자 해결하기 어려운 이슈의 에스컬레이션 경로는 어떻게 되나요?"
- "서울 팀이 현재 직면한 가장 큰 기술적 도전은 무엇인가요?"
- "첫 90일 동안 성공했다고 볼 수 있는 기준이 무엇인가요?"

---

## 9. 핵심 키워드 (답변에 자연스럽게 녹이기)


| 키워드                              | 언제 쓰나     |
| -------------------------------- | --------- |
| "root cause"                     | 문제 해결 스토리 |
| "reproduce the issue"            | 티켓 처리 방법  |
| "before it reaches the customer" | 사전 감지 스토리 |
| "triage by impact"               | 다수 티켓 처리  |
| "acknowledge first"              | 어려운 고객 대응 |
| "bridge technical and business"  | 왜 TSE 답변  |


---

## 10. 3라운드: 팀 엔지니어 면접 (시나리오 기반)

### Q1. 고객이 "Datadog Agent 설치했는데 메트릭이 안 들어와요"라고 티켓을 넣었어요. 어떻게 대응하나요?

> 먼저 고객의 환경을 파악합니다. 어떤 OS인지, Agent 버전은 무엇인지, 언제부터 안 됐는지 확인해요.
>
> 그 다음 단계적으로 확인합니다:
>
> 1. Agent가 실행 중인지 — `sudo datadog-agent status`
> 2. API key가 올바른지 — `datadog.yaml` 파일 확인
> 3. 네트워크 연결이 되는지 — Datadog 서버에 아웃바운드 포트(443) 열려있는지
> 4. 로그에서 에러 확인 — `tail -f /var/log/datadog/agent.log`
>
> 고객한테는 각 단계마다 진행 상황을 업데이트해요. 침묵하지 않습니다.

---

### Q2. 동시에 여러 티켓이 들어왔어요. 어떻게 처리하나요?

> 임팩트와 긴급도로 트리아지합니다.
>
> - 프로덕션 완전 다운 → 즉시 대응
> - 기능 일부 안 됨 → 30분 내 응답
> - 설정 질문 → 2시간 내 응답
>
> 모든 티켓에 일단 "확인했습니다, 지금 보고 있습니다" 라는 응답을 먼저 보냅니다. 침묵이 고객을 에스컬레이션하게 만들어요.
>
> Kiss Products에서 두 플랫폼 이슈를 동시에 관리한 경험이 있습니다. Jira로 트래킹하고, 블로커는 마감일 전에 에스컬레이션했습니다.

---

### Q3. 화가 난 고객을 어떻게 다루나요?

> 먼저 감정을 인정합니다. "불편을 드려서 죄송합니다"가 아니라 — "이 이슈가 운영에 영향을 주고 있다는 거 이해합니다. 지금 바로 확인하겠습니다."
>
> 그 다음 빠르게 상황을 파악하고, 진행 상황을 자주 업데이트합니다. 고객이 가장 싫어하는 건 "아무것도 모른 채 기다리는 것"이에요.
>
> Kiss Products에서 사업부가 즉각적인 수정을 요구하며 에스컬레이션한 적이 있습니다. 그냥 "안 된다"고 하지 않았어요. 통화를 잡아 상황을 설명하고, 근본 원인을 해결하는 48시간 대안을 제시했습니다. 동의했어요.

---

### Q4. 해결책을 모를 때 어떻게 하나요?

> "모르겠어요"로 끝내지 않습니다.
>
> "지금 당장은 확실하지 않습니다. 공식 문서와 내부 지식 베이스를 먼저 확인하고, 필요하면 시니어 TSE나 엔지니어링 팀에 에스컬레이션하겠습니다. 30분 안에 업데이트 드리겠습니다."
>
> 중요한 건 — 고객이 다음 단계가 뭔지 항상 알고 있어야 한다는 것입니다.

---

### Q5. 고객이 기술적으로 틀린 말을 하고 있어요. 어떻게 수정하나요?

> 직접 "틀렸어요"라고 하지 않습니다.
>
> "말씀하신 방향도 이해가 됩니다. 제가 확인해본 결과 실제로는 이렇게 동작하고 있어요 — [설명]. 이 방향으로 접근하면 어떨까요?"
>
> 고객이 틀렸다는 걸 깨닫게 하되, 체면을 지켜주는 방식으로 합니다.

---

### Q6. 티켓 답변을 어떻게 작성하나요?

> 세 부분으로 구성합니다:
>
> 1. **인정** — 그들이 경험하는 것을 구체적으로 인정. 일반적인 문구 금지.
> 2. **현황** — 지금까지 발견한 것, 다음에 할 것.
> 3. **다음 단계** — 타임라인과 고객에게 필요한 것.
>
> 목표: 고객이 "누가 보고 있긴 한 건가?" 라는 의문을 갖지 않도록.

---

## Compensation (research + negotiation)

**HR verbal (Windy):** **50M KRW base** · **no bonus** · **~$10K RSU** · user stated **65M KRW** expectation

### RSU — almost certainly **total 4-year grant**, NOT per year

Datadog standard new-hire RSU ([Levels.fyi](https://www.levels.fyi/companies/datadog/salaries), [employee vesting accounts](https://blog.balthazar-rouberol.com/cant-enough-be-enough)):


| Item       | Typical Datadog pattern                                        |
| ---------- | -------------------------------------------------------------- |
| Grant size | **$10K = total value at grant date** (confirm in offer letter) |
| Vest       | **4 years**, **1-year cliff**                                  |
| Year 1     | **$0 RSU** (cliff)                                             |
| Years 2–4  | ~~**25% per year** → **~~$2,500/year** in stock at grant price |
| ESPP       | Separate — discounted stock purchase (small upside)            |


**Example total comp (if base stays 50M, RSU $10K grant, FX ~1,350):**


| Year    | Base | RSU (approx) | Notes                              |
| ------- | ---- | ------------ | ---------------------------------- |
| Year 1  | 50M  | **0**        | Cliff — cash only                  |
| Year 2+ | 50M  | ~**3.4M**/yr | $2.5K × 1,350 — stock price varies |


**Still well below 65M floor** even in year 2 unless base moves.

### Market benchmarks (web search, Jun 2026)


| Source                                                                                                                 | Figure                       | Caveat                                    |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------- |
| [Remember — Datadog Korea](https://career.rememberapp.co.kr/job/company/3339772)                                       | **~74M KRW** company avg     | All roles (~98 employees) — not entry TSE |
| [WorldSalaries — TSE Seoul](https://worldsalaries.com/average-technical-support-engineer-salary-in-seoul/south-korea/) | ~42M avg / ~65M top quartile | Generic market, not Datadog               |
| US TSE 1–2 (SF job posting)                                                                                            | $66K–$88K base + RSU         | US band; Korea localized lower            |
| User floor                                                                                                             | **65M KRW base**             | Documented in `applications.md`           |


**Verdict:** 50M base is **below** your floor and **below** Remember company average — **not crazy to feel underpaid**. HR opening number is often **low anchor**; negotiate at **written offer** only.

### At offer — ask Windy / HR (not Shingang)

1. Base salary — target **60–65M KRW**
2. RSU: **total grant** vs annual? **Vest schedule + cliff?** Refreshers?
3. ESPP discount rate
4. Signing bonus (sometimes available if base band is fixed)
5. Level (TSE 1 vs 2) — affects band

**Script:**

> "Based on my experience and the Seoul market, I'm looking for **65M KRW base**, or equivalent total compensation through base + RSU. Can we review the full package including vesting schedule?"

**Leverage:** Parallel offers (even interviewing elsewhere) unlock RSU/base movement per [comp negotiation patterns](https://jobsbyculture.com/blog/datadog-compensation-2026) — equity often more flexible than base.

**Decision rule:** If final offer is **50M base + $10K/4yr RSU** with no movement → **below floor** — acceptable only as short stepping stone if you explicitly choose that tradeoff.

---

## 절대 하지 말 것

- "모르겠어요"로 끝내지 말 것 → "지금 당장은 모르지만, 이렇게 찾아볼 것 같습니다"
- 고객 욕하지 말 것 → "어려운 고객"도 항상 중립적으로
- 기술만 얘기하지 말 것 → 항상 비즈니스 임팩트로 마무리
- Shingang / interviewer LinkedIn 조사 티 내지 말 것
- HM 라운드에서 연봉 negotiation 시작하지 말 것 → offer / Windy

