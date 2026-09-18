# Workato TC II — Technical Round (Hiring Manager)

**라운드:** 2차 (Hiring Manager)
**인터뷰어:** Singapore HM + 1명 (총 2명)
**일정:** 목요일 9:30pm  
**형식:** 더 테크니컬, 영어 진행
**다음 라운드:** Korean tech team → Korean head of sales

---

## 인터뷰어 분석

### Vinod Ramaswamy — Practice Director (의사결정자)

- **포지션:** Workato APAC Professional Services 전체 책임자 (Nov 2025~)
- **배경:** SAP, Sitecore, Pegasystems, Lithium Tech — 20년+ APAC 엔터프라이즈 PS
- **그가 보는 것:** 고객 앞에 세울 수 있나? 컨설팅 마인드인가? 팀을 키울 수 있나?
- **질문 스타일:** 비즈니스 임팩트, 고객 관계, 커리어 비전 중심. Recipe 문법 같은 건 안 물어봄
- **공략 포인트:**
  - SAP 통합 경험 → 그도 SAP 배경 (Customer Engagement Manager at SAP Asia)
  - 엔터프라이즈 고객 신뢰 구축 스토리
  - 한국 시장에 장기적으로 헌신하겠다는 비전
  - "팀을 만들어가는 과정에 기여하겠다"는 메시지

### Benedict Yeo — Team Lead, TC (기술 검증자)

- **포지션:** Workato 4년 9개월. Automation Consultant → Senior TC → Team Lead
- **자격증:** Automation Pro I & III (Workato 최고 수준 인증)
- **배경:** NetSuite + CRM 통합, VueJS, MySQL, 시스템 통합 설계
- **그가 보는 것:** 실제로 integration 이해하나? 팀에 fit하나? 가르칠 수 있나?
- **질문 스타일:** 실제 시나리오. "이 상황에서 어떻게 하겠어요?" 형식
- **공략 포인트:**
  - NetSuite 언급 가능 → "I work directly with SAP, so ERP integration patterns — financial data, sync logic, field mapping — are very familiar to me. NetSuite follows the same patterns; it's an API and data model ramp-up, not a conceptual gap."
  - 그는 비개발자 배경(Communication 전공)에서 TC로 성장, 나는 개발자 배경에서 TC를 선택 → "I have the engineering foundation, and I'm choosing to put it in front of customers" — 더 강한 포지션
  - Automation Pro 자격증에 대한 존중 표시 → "프리셋 준비 중"이라고 언급

---

## 0. 오프닝 멘트 (첫 인상 — 반드시 준비)

> **Haruka 조언:** "Express a lot of interest" + "Say you have tried Workato"

### 인터뷰 시작 시 첫 마디 (Vinod가 "Tell me about yourself" 또는 "How are you?" 로 열면)

> Thank you for your time, My name is Dohyun, my English name is Leah. I'm in New York right now, moving to Korea later this year.
>
> WHAT I DO AT WORK  
>
> So for the past three years I've been at the intersection of engineering and customer-facing work. Kiss Products is the number one nail and beauty brand in the US, and I'm the main technical person across two platforms. Day to day understanding what the users actually need, designing solutions around that, and making sure they actually adopt it and get real value out of the services.
>
> WHY I APPLY  
>
> Rather than being a software engineer, being the person the users trust when they want more efficient workflow excites me more and that's why I am applying for this position at workato.
>
> I've used Workato at my current job. Built some automations connecting Google Sheets and Jira. What got me was — compared to other 아이파스 tools I'd tried, Workato felt much closer to the business layer. It's still technical, but it's designed so that the people who actually understand the business process can own the automation — not just engineers. That's a different kind of access, and that's where the real adoption happens. And the fact that they moved into AI 올케-스트뤠이션 early with Otto and Agent Studio tells me this is a team that's always ahead of where the market is going.
>
> And being part of building the Korea team from the early stages — that's exactly what I'm looking for right now.

---

## 이 라운드에서 보는 것

- Integration/automation 개념 이해도
- Workato 플랫폼 실제 사용 가능 여부
- 고객 시나리오에서 솔루션 설계 능력
- TC로서의 사고방식 (엔지니어가 아닌 컨설턴트)

---

## 1. Workato 플랫폼 심화

### Q. Walk me through how a Workato Recipe works.

> "A Recipe is the core unit in Workato. It starts with a trigger — something that kicks it off, like a new row in a Google Sheet, a webhook from Salesforce, or a scheduled time. From there you have a sequence of actions — things like creating a record in another system, sending a Slack message, or transforming data. Each action can use data from previous steps. You can add conditional logic, loops, error handling. I've built recipes connecting Sheets and Jira, and the structure felt intuitive — it's essentially a visual workflow builder that non-technical users can actually read and own."

---

### Q. What's the difference between a Trigger and an Action?

> "A trigger is what starts the recipe — it's always listening or polling for an event. An action is what the recipe does in response. So for example: new deal closed in Salesforce is the trigger, create a Jira ticket is the action. One trigger, multiple actions chained after it."

---

### Q. How does Workato handle errors in a recipe?

> "Workato has built-in error handling at the recipe level — you can set up error monitors that catch failed jobs and either retry them, send an alert, or route them to a fallback action. You can also handle errors with the conditions i think. In production integrations, error handling is critical — you don't want a failed API call to silently drop data. I've dealt with this in my own work where I added monitoring at each stage so failures surface immediately."

---

### Q. What's a Connector? Have you built one or used custom ones?

> "A Connector is how Workato talks to a specific app — it handles the authentication, the API calls, and maps the data structures. Workato has hundreds of pre-built connectors. If a connector doesn't exist, you can build a custom one using Workato's SDK or use the HTTP connector to call any REST API directly. I've used the HTTP connector to call APIs that didn't have a native integration — it gives you full control over the request and response mapping, which is essentially what a custom connector does under the hood."

---

### Q. What is a Workbot?

> "Workbot is Workato's conversational interface — it lets you trigger automations and workflows directly from Slack or Teams. So instead of going into a system to create a ticket or check a status, you just message the bot and it handles it. For enterprise users this is really powerful because it meets people where they already are."

---

### Q. Workato vs Make (Integromat) vs Zapier vs MuleSoft — how do you position each?

> "Zapier is great for small teams doing simple one-step automations — but it breaks down fast when you need real business logic or scale. Make is a step up, more flexible, but still SMB-focused and not enterprise-grade from a governance or security perspective. MuleSoft is the full enterprise platform but requires dedicated engineers and has a steep learning curve and cost. Workato sits in the middle in the best way — it's enterprise-grade in terms of security, governance, and scale, but the recipe model means business teams can actually own automations without needing dev help every time. That's the core differentiation."

---

### Q. What is a Recipe Function and when would you use one?

> "A Recipe Function is Workato's way of building reusable sub-recipes — logic you define once and call from multiple parent recipes, like a helper function in code. Instead of building the same logic in five different places, you define it once and call it wherever you need it. I'd use it when the same pattern — data enrichment, a lookup, a notification — appears across multiple workflows. One change applies everywhere.
>
> Workato previously called these callable recipes, but Recipe Functions are the current standard — lighter weight and cleaner to maintain."

---

### Q. How does Workato handle data transformation between systems with different field structures?

> "Workato has a formula layer — similar to Excel formulas — where you can manipulate data in transit. You can concatenate strings, convert data types, format dates, run conditional logic, even parse JSON. For more complex transformations there are list operations for looping over arrays and mapping fields. I've used this when syncing systems where one side uses a full name field and the other splits first and last name separately — you handle that in the recipe itself without needing a separate ETL step."

---

### Q. What is the difference between a real-time trigger and a scheduled trigger? When do you use each?

> "A real-time trigger fires immediately when an event happens — usually via webhook or a persistent connection. A scheduled trigger polls on a fixed interval. Real-time is better for anything time-sensitive like order processing or notifications. Scheduled is better when the source system doesn't support webhooks, or when you're doing batch syncs where real-time isn't necessary — like syncing a report every night. In practice I'd always prefer real-time when the system supports it, and fall back to polling only when needed."

---

### Q. How does Workato handle authentication and manage connection credentials securely?

> "Workato stores credentials in encrypted connections that are scoped at the account or workspace level. Individual users don't see the raw credentials — they just use the connection. For OAuth-based apps, Workato manages the token refresh automatically. For API keys or basic auth, they're stored encrypted and never exposed in recipe logic. From an enterprise security standpoint this is important because it means developers building recipes can't accidentally leak credentials or have them show up in logs."

---

## 2. Integration 개념

### Q. What's the difference between REST and SOAP?

> "REST is the modern standard — it uses HTTP, returns JSON or XML, and is stateless. It's lightweight and easy to work with. SOAP is older, uses XML exclusively, and has a more rigid contract defined by WSDL. Most modern SaaS apps use REST. You still see SOAP in enterprise legacy systems like some SAP modules, older ERP systems, financial platforms. In practice when I've integrated with SAP at Kiss Products, we dealt with both depending on the module."

---

### Q. What is a Webhook and how is it different from Polling?

> "A webhook is event-driven — when something happens in the source system, it immediately pushes data to a URL you specify. Polling is when your system repeatedly asks 'did anything change?' on a schedule. Webhooks are more real-time and efficient since you're not making unnecessary calls. Polling is sometimes necessary when the source system doesn't support webhooks. In Workato, most modern connectors use webhooks as triggers, but some legacy systems require scheduled polling recipes."

---

### Q. What is OAuth and why does it matter for integrations?

> "OAuth is how modern apps grant access without sharing passwords. Instead of storing a user's credentials, you get a token that represents permission to act on their behalf. It matters in integrations because it's the secure standard for connecting enterprise apps. Workato handles OAuth flows for most connectors automatically — the user authorizes once and Workato manages the token refresh. Without proper OAuth, integrations become a security liability."

---

### Q. What is idempotency and why is it important in integration design?

> "Idempotency means running the same operation multiple times produces the same result. It's critical in integrations because network failures and retries are common — if your system isn't idempotent, a retry after a timeout could create duplicate records. Good integration design builds in deduplication logic or uses idempotency keys so that retried operations don't cause data corruption."

---

### Q. How do you handle large data volumes in an integration?

> "A few approaches: pagination for API calls that return large datasets, batching to process records in chunks rather than one at a time, and async patterns where you queue work and process it separately. In Workato specifically, there are batch triggers and bulk actions for handling high-volume data. The key is not trying to move everything at once — you design for throughput and fault tolerance."

---

### Q. What is the difference between synchronous and asynchronous integration?

> "Synchronous means the caller waits for a response before continuing — like a REST API call where you send a request and block until you get back a result. Asynchronous means you fire off a request and move on — the result comes back later, usually via a callback or a queue. In integration design, async is generally better for long-running operations or high-volume processing because it doesn't tie up resources waiting. Workato recipes are essentially async by default — a recipe triggers, processes, and completes independently of the source system."

---

### Q. How do you handle API rate limiting in an integration?

> "Rate limiting is one of the most common failure points in production integrations. The approach depends on the API. If the source has a known rate limit — say 100 calls per minute — you design the recipe with throttling or add a wait step between batches. Workato also has concurrency controls at the recipe level so you can limit how many jobs run in parallel. For spiky traffic patterns, I'd look at queuing the work so it processes steadily rather than trying to blast everything at once. And you always want error handling that catches 429 responses specifically and retries with backoff."

---

### Q. What are common data formats you encounter in enterprise integration, and how do you deal with them?

> "JSON is the most common for modern SaaS APIs — clean, lightweight, easy to parse. XML is common in older enterprise systems, especially SOAP-based ones like some SAP modules or financial platforms. CSV comes up for batch file processing — you might receive a nightly export that needs to be processed row by row. EDI is the format in retail and supply chain — very structured but not human-readable. Workato handles JSON and XML natively in the formula layer. For CSV you'd typically use a file connector and parse row by row. EDI usually requires a specialized connector or middleware."

---

### Q. What is the difference between point-to-point integration and hub-and-spoke integration?

> "Point-to-point means each system talks directly to each other system — System A connects to B, B connects to C, C connects back to A. It's fast to set up but becomes a mess at scale because the connections multiply exponentially and there's no single place to manage them. Hub-and-spoke puts a central platform — like Workato — in the middle. Every system talks to the hub, and the hub routes to the right destination. This is much more maintainable, observable, and governable. That's actually the core value proposition of any iPaaS — replacing a tangle of point-to-point connections with a single orchestration layer."

---

## 3. 고객 시나리오 문제 (가장 중요)

### Q. A customer wants to sync their Salesforce and NetSuite. How do you approach this?

> "First I'd want to understand the requirements before touching any tooling. What data needs to flow — contacts, opportunities, invoices? Which direction — one-way or bi-directional? What triggers the sync — is it real-time or batch? What does the customer consider the system of record for each data type?
>
> Once I understand that, I'd look at Workato's Salesforce and NetSuite connectors — both have native connectors so there's no custom work needed. I'd design the recipe with the system of record as the trigger, map the fields, handle error cases like what happens if a record already exists on the other side, and set up monitoring.
>
> Then I'd walk the customer through the design before building, get their sign-off, do a test run with sample data, and validate against their expectations before going live."

---

### Q. A customer's recipe is failing intermittently and they don't know why. How do you troubleshoot?

> "I'd start with the job history in Workato — every recipe run logs what happened at each step, including what data came in, what was sent out, and where it failed. That's usually enough to identify the pattern. Is it always the same step? Is it specific records that fail, or random?
>
> If it's a specific step, I'd look at the API response — often it's a timeout, a rate limit, or a data validation error on the receiving system. If it's random, I'd look at whether the source system is sending malformed data occasionally, or whether there's a dependency on an external service that's flaky.
>
> Once I find the cause, I fix it and add error handling so future failures surface clearly instead of silently dropping."

---

### Q. A customer wants to automate their employee onboarding process. How would you design this in Workato?

> "Classic onboarding automation use case. The trigger is typically a new hire record created in the HRIS — Workday, BambooHR, whatever they use. From there, the recipe would chain actions: provision accounts in the tools they need (GSuite, Slack, Jira), create an onboarding task in their project management tool, maybe send a welcome message to the new hire's manager, and notify IT to set up hardware.
>
> The design questions I'd ask: Which systems are they already using? Is provisioning handled by IT or HR? What does the approval flow look like? Are there role-based permissions — does a software engineer need different tools than a salesperson?
>
> The real value isn't just automating the steps — it's making sure nothing falls through the cracks. A new hire's first day experience depends on every system being ready. Workato can own that entire orchestration."

---

### Q. A customer says their Workato recipe runs, but the data isn't showing up in the destination system. What do you do?

> "First thing is check the job log — did the recipe actually complete successfully, or did it silently error? If the job shows success, I'd check the destination system directly — sometimes the data lands but in an unexpected place, filtered out by a view, or in a draft state pending approval.
>
> If the job shows an error, I look at what the destination API returned. Common causes: field mapping issues where you're sending data to a field that doesn't exist, data type mismatches, required fields missing, or permissions on the destination app.
>
> If everything looks correct on the Workato side but data still isn't appearing, I'd involve the destination system admin to check their logs and confirm whether the API calls are actually arriving."

---

### Q. A customer wants to migrate from Zapier to Workato. How do you approach it?

> "First I'd want to understand what they have today — how many Zaps, which systems, what business processes they're supporting. Some Zaps map cleanly to Workato recipes; others might need rethinking because Workato is more capable and you don't want to just replicate a bad design in a better platform.
>
> I'd prioritize the migration by business criticality — mission-critical automations first, and I'd run them in parallel with the Zaps for a period before fully cutting over to validate everything works. I'd also use this as an opportunity to consolidate — if they have five Zaps doing related things, maybe that becomes one well-designed recipe with proper error handling that the Zaps never had.
>
> The migration is also a training opportunity. By the end, the team should understand Workato well enough to build and maintain recipes themselves."

---

### Q. A customer is seeing duplicate records — the same data is getting created twice in the destination system. How do you diagnose and fix this?

> "Duplicate records almost always come from one of two things: the recipe is firing multiple times for the same event, or there's no deduplication check on the destination side.
>
> First I'd look at the job history — are there multiple successful job runs for the same source record? If yes, I'd look at the trigger configuration — is there a filter issue, or is the source system emitting the same event multiple times?
>
> If the jobs look correct but duplicates still appear, the issue is on the destination side — the recipe is creating a new record when it should be upserting. The fix is adding a lookup step: before creating, check if the record already exists. If it does, update it. If not, create it. That's the upsert pattern — it's the standard design for any bidirectional sync."

---

### Q. A customer needs to sync 50,000 SAP records daily into Salesforce. How do you design this?

> "50,000 records is a bulk operation — you can't do this record-by-record in real time. I'd design it as a scheduled batch job, likely running overnight.
>
> The approach: pull the records from SAP in pages — most APIs have pagination, so you'd loop through pages of 200–500 records at a time. For each page, use Workato's bulk upsert action in Salesforce so you're not making 50,000 individual API calls. You also need to think about delta syncs — do you really need all 50,000 every day, or just the records that changed? If SAP has a last-modified timestamp, you filter on that and only sync what's new or updated.
>
> Error handling is critical here — any record that fails shouldn't stop the whole batch. You'd want to capture failures in a separate list and surface them for review, not silently drop them."

---

### Q. A customer built their own recipes but they're messy and hard to maintain. What do you do?

> "First I'd spend time understanding what they built before touching anything — the recipes might be messy but they're in production, and breaking them would be worse than leaving them. I'd document what each recipe does and the business process it supports.
>
> Then I'd prioritize what to fix based on risk. Recipes that handle critical business data with no error handling are the highest risk. I'd start there — add error handling, clean up the field mapping, and add comments so the logic is understandable.
>
> For the longer term, I'd work with the team to establish standards: naming conventions, how to structure callable recipes for shared logic, where to put error handling. The goal is not just fixing the current mess — it's making sure the next thing they build is cleaner. That's the difference between a TC and a one-time consultant."

---

## 4. TC 사고방식 질문

### Q. How do you prioritize which customers to focus on when you have many?

> "I tier by urgency and impact. First priority is anything that's production-down or blocking a customer's business — that gets immediate attention. Second is customers mid-onboarding where delay has a direct cost. Third is optimization and enhancement work for stable customers. I communicate the queue openly so customers know where they stand and don't feel ignored. The goal is no one feeling like they disappeared into a black hole."

---

### Q. A customer wants a custom feature that Workato doesn't support. How do you handle it?

> "First I'd really understand what they're trying to accomplish — sometimes what they think they need isn't what they actually need. A lot of feature requests can be solved creatively within the existing platform. If it genuinely requires something Workato doesn't have, I'd document it clearly and escalate it to product with the customer context — their use case, industry, and impact. That's valuable product feedback. And I'd be honest with the customer about timeline — I won't promise something I can't deliver. I'd find the closest alternative in the meantime."

---

### Q. How do you measure the success of a customer onboarding?

> "A few signals: Did they go live on schedule? Are they actually using the recipes in production, not just in a test environment? Do they understand the platform well enough to build or modify recipes themselves without calling me every time? Have they seen a measurable business outcome — time saved, errors reduced, process accelerated? The goal is not just technical implementation — it's adoption and value realization. A recipe sitting idle is not a successful onboarding."

---

### Q. Tell me about your experience with enterprise customers and stakeholder management.

> "At Kiss Products I was managing stakeholders across 4 teams with competing priorities for the KRS POS launch — vendor dev, vendor PM, US business, and in-house engineering, all with different definitions of done. The key was talking to each team separately first, understanding what they actually needed vs. what they said they needed, and then designing a plan that addressed each team's real concern. We shipped on time and cut warehouse processing time by 80%. That kind of cross-functional alignment — understanding people, not just systems — is exactly what a TC does every day."

---

### Q. A customer keeps expanding the scope mid-project. How do you handle it?

> "Scope creep is one of the most common challenges in consulting. My approach is to address it early and directly — not as a confrontation but as a conversation. When a new request comes in, I acknowledge it and ask: is this a change to what we agreed, or something to queue for the next phase?
>
> I'd document the original scope clearly at the start — what's in, what's out — so there's a shared reference point. When the customer wants to add something, I can say 'that's a great idea, but it's outside what we scoped for this phase — let's put it in the backlog so it doesn't delay your go-live.'
>
> The key is making sure the customer feels heard, not shut down. You're not saying no — you're protecting their own go-live date."

---

### Q. A customer is technically more advanced than you and knows their system better. How do you handle that?

> "That happens — and I think it's actually fine. My job isn't to know their system better than they do. My job is to know integration patterns, know Workato, and know how to design a solution that connects their system to everything else.
>
> In that kind of engagement I'd be upfront: 'You're the expert on your system — I'm the expert on the integration layer. Let's work together.' I'd ask the right questions, listen carefully, and add value on the Workato side and the solution design side. Customers who are technically strong actually tend to be the best partners because they can move fast once they trust you.
>
> The worst thing you can do is pretend to know something you don't. That destroys trust instantly."

---

### Q. How do you transfer knowledge so customers can self-serve after onboarding?

> "The goal of every onboarding is to make myself unnecessary for the day-to-day. I think about it in three layers: documentation, training, and building habits.
>
> Documentation means the recipes are readable — good naming, comments on non-obvious logic, a simple runbook for common issues. Training means I don't just build in front of them — I explain what I'm doing and why, so they understand the patterns. And habits means I give them small wins early — simple recipes they built themselves — so they have confidence before I hand over the complex ones.
>
> The signal that onboarding succeeded is when the customer calls me for advice, not for help. They're building on their own and just want a second opinion."

---

### Q. Describe a time you had to push back on a customer request.

> "At Kiss Products I had a stakeholder who wanted to cut the testing phase before the KRS POS launch — they were under schedule pressure and thought testing was optional. I pushed back directly: I explained that we had caught a critical data isolation issue in the previous testing cycle that could have exposed one merchant's data to another. I framed it not as 'no' but as 'here's what we risk if we skip this.'
>
> They agreed to keep the testing phase. And I think the reason the pushback worked was that I came in with a specific example of what had already gone wrong — not a theoretical risk, but a real one we'd found. When you push back with evidence and frame it around the customer's own outcome, it lands differently than just saying 'that's not how we do it.'"

---

## 5. AI, MCP, AI Orchestration

> **최신 뉴스 (인터뷰 전 필독)**
>
> - **Otto (05/06/2026)** — Workato's new "Trusted AI Teammate" — an AI agent that works alongside employees to get tasks done autonomously
> - **Gartner MQ Leader (03/18/2026)** — 8th consecutive year as iPaaS Leader
> - **ISO/IEC 42001 (03/26/2026)** — AI governance certification — enterprise trust play
> - **Confluent partnership (12/2025)** — AI agents that detect and act in real time on event streams
>
> **인터뷰에서 활용법:** "I've been following Workato's announcements closely — the Otto launch last week is a perfect example of what I mean about Workato being ahead of the market. Most iPaaS vendors are still automating workflows; Workato is building an AI teammate."

---

### Q. What is Agent Studio and how is it different from a traditional recipe?

> "Agent Studio is Workato's environment for building AI agents — in Workato's terminology, each AI agent is called a **Genie**. A Genie is fundamentally different from a recipe. A recipe is deterministic: trigger fires, step 1 runs, step 2 runs, done. A Genie is dynamic — it interprets natural language input, decides at runtime which tools to use, can loop back if it needs more information, and produces a result without a rigid pre-defined path. Workato calls this capability Deep Action.
>
> The practical difference: a recipe is great for 'every time a new lead comes in from Salesforce, create a Jira ticket.' A Genie is better for 'answer this sales rep's question by pulling context from CRM, Slack, and our deal history.' The Genie figures out what it needs — you don't pre-wire every step.
>
> Otto, which Workato just launched this month, sits on top of this layer — it's the end-user-facing AI teammate built on Genie and Agent Studio infrastructure."

---

### Q. What is MCP (Model Context Protocol) and why does it matter for enterprise customers?

> "MCP is a standard that lets AI models — like LLMs — securely connect to and interact with enterprise systems. Without MCP, an AI agent would have no structured way to query a CRM, pull records from a database, or trigger an action in a business tool. MCP defines how those connections work in a safe, governed way.
>
> For enterprise customers, this matters a lot because security and governance are non-negotiable. MCP means the AI agent can only access what it's been explicitly given access to — it's not a free-for-all. Workato has positioned itself as a leader in Enterprise MCP, which means it's the layer that connects AI to the rest of the business in a way IT teams can actually trust and control."

---

### Q. A customer wants an AI agent that can answer sales reps' questions using CRM data. How would you design this in Workato?

> "Classic enterprise AI agent use case. I'd start by understanding the scope: what questions are reps actually asking? Deal status, contact history, next steps — that kind of thing?
>
> The design in Workato would use Agent Studio. You'd connect the agent to the CRM as a data source — Salesforce or whatever they use — using a Workato connector. The agent gets a set of tools it can use: look up a deal, pull contact activity, check pipeline status. When a rep asks a question via Slack or Teams, the agent interprets the intent, decides which tool to call, retrieves the data, and responds in natural language.
>
> The governance layer is important: the agent only has access to the CRM fields you've explicitly exposed, and every action it takes is logged. That's what makes it enterprise-ready rather than just a chatbot."

---

### Q. What's the difference between a workflow automation and an AI agent? When do you use each?

> "A workflow automation is rule-based and deterministic — if X happens, do Y. You know exactly what it will do every time. An AI agent is intent-based — it interprets what the user is trying to accomplish and figures out the steps to get there. It can handle ambiguity, incomplete information, and novel situations.
>
> The honest answer is that most enterprise automation today is still workflow automation — and that's fine. Workflows are reliable, auditable, and fast. AI agents add value when the task requires natural language understanding, judgment, or dynamic decision-making.
>
> In practice I'd position them as complementary: the agent handles the conversational interface and interprets intent, and then it calls a workflow recipe to execute the actual business logic. You get the flexibility of AI at the top and the reliability of deterministic workflows underneath."

---

### Q. How does Workato's AI positioning compare to its competitors?

> "Most iPaaS platforms added AI as a feature — a co-pilot here, a suggestion engine there. Workato went further by making AI orchestration a core part of the platform through Agent Studio and MCP support. The difference is that Workato isn't just helping you build integrations faster — it's becoming the infrastructure layer that connects AI agents to enterprise systems.
>
> The most recent signal is Otto — Workato's AI teammate that launched just this month. That's not a feature bolt-on. That's Workato saying: we're not just building tools for developers to automate workflows, we're putting an AI agent directly in the hands of business users that can get work done autonomously on their behalf.
>
> That's a fundamentally different value proposition than Zapier or even MuleSoft. Zapier is still workflow-first. MuleSoft is API-first. Workato is positioning itself as the orchestration layer for the agentic era. And being a Gartner Magic Quadrant Leader for the 8th consecutive year while making this pivot is a strong signal that the enterprise market is following. It's a coherent and differentiated bet."

---

## 5b. Agentic Era — 2차 피드백 기반 추가 준비

> **2차 피드백 핵심:** "agentic era, AI product, customers in 2028 will run a few agents, AI orchestration"
> 3차에서 이 관점으로 깊이 들어올 가능성 높음.

---

### Q. How do you see enterprise automation changing in the next 2-3 years?

> "The shift I see is from rule-based automation to intent-driven automation. Today, every step has to be pre-wired — someone defines the trigger, maps the fields, writes the conditions. By 2028, enterprises will define a goal and constraints, and agents will figure out the steps. The recipe doesn't disappear — it becomes a tool the agent calls. The difference is who's doing the orchestration: before, it was a developer. Soon, it's the agent.
>
> Workato's bet is that the integration layer — connecting agents to enterprise systems safely — is where the real value sits. MCP is the governance standard that makes this possible. Agent Studio is where you build those agents. Otto is the first proof that this actually works in production.
>
> The TC role evolves with this. It's not just 'build recipes' anymore. It's 'design what the agent can see, what it can do, and when it needs to ask a human.' That's a more interesting problem."

---

### Q. What does it look like when a company is fully in the agentic era?

> "A few signals. First, employees stop navigating between systems — they state an intent and an agent handles the execution. A sales rep doesn't log into Salesforce, pull a report, check Slack, and write a summary. They ask a question and get an answer. Second, workflows aren't just triggered by events — they're triggered by context. An agent notices a deal hasn't moved in 30 days and proactively surfaces it. Third, the integration layer becomes infrastructure, not IT projects. You don't build a new recipe every time a new system comes in — the agent discovers tools and connects them.
>
> Workato's position in that world is the platform that connects AI to all the systems it needs to act on — with the governance layer that makes IT comfortable enough to actually deploy it."

---

### Q. As a TC, how does your role change when customers are running AI agents instead of traditional recipes?

> "The core skill is the same — understand the customer's business process and design the right solution. But the scope expands. With recipes, you're designing deterministic flows. With agents, you're designing trust boundaries: what data can the agent access, what actions can it take autonomously, what decisions require a human in the loop, and what gets logged for audit.
>
> That's actually closer to consulting than recipe-building. You're having a conversation with the customer about how much they trust automation, where the risk is, and what governance they need. The technical layer — MCP connections, tool definitions, escalation logic — is what you implement. But the design conversation is what makes or breaks it.
>
> I think engineers who only know how to build recipes will struggle with this shift. The TC role becomes more valuable, not less."

---

## 6. 역질문 (Hiring Manager / TC Team Lead용)

1. **(★ 가장 강력)** What does a successful first 90 days look like for a TC II joining the Korea team right now?
2. What are the most common failure modes you see in customer onboardings — where do things typically go wrong?
3. How mature is the Workato Korea customer base right now — are we mostly in early adoption or are there established enterprise accounts?
4. How closely does the TC team work with the product team when customers surface gaps or feature requests?
5. What's the technical depth of the Korean enterprise customers you're targeting — are they expecting to build their own recipes, or are they expecting Workato to do it for them?

---

## 7. 빠른 참고 — Workato 핵심 용어


| 용어                | 설명                                                                          |
| ----------------- | --------------------------------------------------------------------------- |
| Recipe            | Workato의 기본 자동화 단위 (trigger + actions). 결정론적, 순서 고정                         |
| Trigger           | 레시피를 시작시키는 이벤트 (real-time webhook or scheduled polling)                     |
| Action            | 트리거 이후 실행되는 작업                                                               |
| Connector         | 특정 앱과의 연결 인터페이스. 12,000+ 앱 지원                                               |
| Recipe Function   | 재사용 가능한 서브 레시피 (구: callable recipe — 2021년 deprecated)                      |
| Workbot           | Slack/Teams 기반 대화형 자동화 — 양방향 (trigger + interactive response)               |
| Job               | 레시피 실행 1회 인스턴스                                                               |
| Agent Studio      | AI 에이전트(Genie) 빌더 — 동적, intent 기반                                           |
| Genie             | Workato AI 에이전트의 공식 명칭. Deep Action으로 12,000+ 앱 동적 오케스트레이션                  |
| Otto              | Workato AI teammate (2026.05 출시). Genie 기반의 사용자 대면 슈퍼에이전트                    |
| MCP               | Model Context Protocol — AI 에이전트가 엔터프라이즈 시스템에 안전하게 접근하는 표준. Workato = MCP 리더 |
| Lookup table      | 레시피 내에서 참조하는 정적 데이터 테이블                                                      |
| Recipe IQ         | Workato의 AI 기반 레시피 추천/자동완성                                                   |


---

## 8. 주의사항

- 이 라운드는 HR보다 훨씬 깊이 들어옴. "어떻게 접근하겠습니까?" 질문이 많음
- 모르는 것은 솔직하게 인정하되 "어떻게 접근할지"로 답변
- Workato 경험은 Google Sheets + Jira 레시피 직접 제작으로 증명 → 플랫폼 깊이보다 "통합 패턴 이해 + 빠른 학습"으로 포지셔닝. 약점을 먼저 꺼내지 말 것
- 싱가포르 HM → 아시아 시장 이해도, 한국 고객 특성에 대한 관점도 준비
- 항상 솔루션 설계 시 "먼저 요구사항 이해"로 시작할 것

