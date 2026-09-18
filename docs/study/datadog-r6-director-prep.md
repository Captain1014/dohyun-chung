# Datadog R6 — Rolf (read-along script)

Windy said he cares about: motivation · why Datadog · external customers · AI · your questions.  
Read these out loud. If he asks something else, use Backup at the end.

---

## Tell me about yourself

> Hi Rolf — thanks for making time. I'm Dohyun, I also go by Leah.
>
> I'm originally from Korea. I moved to New York for college — I studied Computer Science and Sociology at NYU — and I've been working here since I graduated. I'm planning to move back to Seoul.
>
> For the last few years my work has been half building systems and half supporting the people who use them. Right now I'm at Kiss Products. I support two platforms. One is KRS, a POS we built for store owners — so those are external customers. The other is our sales platform that syncs with SAP, and I support a few hundred people inside the company on that.
>
> Before Kiss I was at an edtech startup called 24/7 Teach, where I worked on an AI product for teachers and students and also helped them when things broke.
>
> What I like most is being the person who figures out what's wrong and explains it clearly. That's why I'm excited about TSE at Datadog.

---

## Why this role / why TSE

> Honestly, I can write code — I've done a lot of that on KRS. But the days I feel most useful are when someone's stuck and I have to dig in, find the real cause, and walk them through it.
>
> There's a good example from before we launched KRS. About a month out, I was looking at how multi-tenant data was set up, and I realized one company's data could potentially show up for another. That wasn't something I found while building a feature — I found it because I was thinking about how it would behave with real customers. We fixed it before launch and changed how we review vendor work so it wouldn't happen again.
>
> That's the kind of work I want to do every day. TSE feels like the right fit — not leaving tech, just putting customers in the middle of it.

---

## Why Datadog

> My interest started before I applied. At Kiss we don't run Datadog — we're not at that scale — but we still have the same kinds of problems. SAP sync fails, things get slow, a process dies and nobody knows until someone complains.
>
> So I built some internal dashboards and alerts, basically copying how Datadog thinks about metrics and signals. Using that made me want to work at the company that actually builds the product, not just a smaller version of it.
>
> And the Seoul office matters to me. I'm moving back to Korea, I'm bilingual, and I want to be part of the team while Datadog is still growing there.

---

## External customer experience

### Main story — payroll weekend

> Sure — most of my external customer work is on KRS. Store owners reach out when something looks broken.
>
> One weekend a store owner messaged us pretty upset. They said payroll wasn't being created, and our support person was stressed too. I jumped on it right away.
>
> When I looked, nothing was actually down. Another manager had already created that week's payroll. The problem was the screen opened with an old date filter saved, so today's payroll didn't show up. From the owner's side it looked like nothing existed.
>
> I explained that to the owner and to our support team, and then we fixed the UI so it wouldn't happen the same way again — that took about a couple of days. So it felt like a system outage, but it was really a UX issue. The important part for me was staying calm with the customer and closing the loop so they trusted us again.

### If he wants another example — missing data

> Another one: a merchant said records showed up one day and disappeared the next. It sounded like data loss. I reproduced it and found we had a UTC offset hardcoded on a few back-office pages, so the date filter was wrong. We fixed it across those pages, I documented it for the team, and I walked the merchant through what actually happened so they weren't left thinking we'd lost their data.

### If he asks what external support looks like day to day

> On KRS I'm usually the technical person merchants talk to — onboarding, login and API issues, orders, payroll, that kind of thing. Inside the company I also support the sales platform and SAP sync. The external merchant cases are where I learned to explain technical stuff without making people feel stupid.

---

## AI initiatives

**Say this as one arc:** built an AI product → supported AI users → use AI to do support better → why that matters for Datadog TSE.

### Full answer (~90–120s) — use this

> Yeah — I've touched AI from a few angles, not just as a user of ChatGPT.
>
> The biggest one was at 24/7 Teach. We built **Naomi AI**, an AI-powered K-12 learning platform. I owned a lot of the student-facing front end — UI, accessibility, making sure the experience actually worked for kids and teachers. We had **about 3,000 students** on it. I also sat with the CEO on roadmap: we'd look at conversion and retention numbers, and decide what to build next based on that, not based on whoever yelled loudest. And I worked with backend on API payloads so the product could pull the right data for those flows.
>
> At the same time I was the technical person users came to when the AI product felt broken or confusing — weird behavior, login issues, publishing problems. I'd reproduce it, figure out if it was the model side, the app side, or user expectation, and write bug reports engineering could actually act on. I also started a small internal KB of failure patterns so the team wasn't rediscovering the same issues.
>
> So I wasn't training models from scratch — but I shipped an AI product to real users, and I lived in the gap between "the AI did something" and "the customer understands what happened."
>
> At Kiss I kept using AI, but differently — as a **support workflow**. For recurring incidents I'd paste structured context into Claude — symptom, environment, what we already tried — and ask for ranked root-cause hypotheses, a customer-safe explanation, and escalation notes. Then I'd verify every suggestion against real logs and API responses before anything went out. That cut some recurring triage from roughly 45 minutes to about 15. The hard lesson: AI sounds confident when it's wrong — wrong OAuth scope, wrong endpoint — so I treat it like a junior teammate's draft, never the answer.
>
> For Datadog, that matters because more customers are running AI in production — latency, errors, weird behavior — and TSE is exactly the role that has to debug and explain that under pressure. I want to keep getting deeper on how Datadog customers monitor those workloads. I already know what it feels like when an AI product confuses a user.

### If he only wants one example — Naomi only (60s)

> At 24/7 Teach I helped build and ship **Naomi AI**, an AI-powered K-12 platform for about **3,000 students**. I owned the student-facing front end and worked with the CEO on retention-driven roadmap, plus backend on the APIs behind those flows. I was also the liaison when teachers and students hit confusing AI behavior — reproduce, separate product bug from expectation, escalate cleanly. That combo — ship AI, then support the humans using it — is the closest thing I've done to what TSE will see as more customers put AI in their stacks.

### If he pushes "but did you build the model?"

> No — I wasn't the ML researcher. My lane was product + UI + making the AI usable, and then supporting users when it failed in messy real-world ways. For TSE I think that's actually the relevant muscle: customers don't call because they want a paper on transformers — they call because something in production doesn't make sense.

### Don't say

- Don't call the Kiss observability tool "AI" — it was logs/metrics/alerts, not ML.
- Don't pretend Bits AI / LLM Observability expertise you don't have.
- Don't end with "I'm not an expert" as the headline — put the work first, then the honest boundary if asked.

---

## Questions for Rolf (pick 2 — say them like this)

Skip the generic “what does success look like in 90 days” stuff.

**1 — AI + support reality**
> Windy mentioned AI might come up — from where you sit in APJ, are you actually seeing ticket mix shift toward AI workloads and LLM apps yet, or is it still mostly classic infra and APM? Curious what that looks like on the ground.

**2 — Product ships fast, support feels it**
> Datadog ships a lot. When a new product area lands with customers before support is fully ramped, how do you want TSEs to handle that gap — stay in the ticket and dig, or escalate earlier?

**3 — Seoul’s real job in APJ**
> Seoul’s still earlier-stage than some other APJ hubs. From your seat, what’s the actual job of the Korea team over the next couple years — volume coverage for Korean customers, or building deeper product specialists?

**4 — What breaks teams**
> You’ve run support orgs across APJ. When a TSE team starts to struggle — quality, burnout, queue chaos — what’s usually the first thing you notice from your level?

**5 — Honest tradeoff**
> If you had to pick one: would you rather a new TSE in Seoul be really strong at customer communication with medium product depth, or deep on one product pillar but still rough with customers? Curious how you weigh that for this market.

Pick **two**. Prefer 1 + 3, or 2 + 4.  
Don’t ask salary, US transfer, or “what’s the culture like.”

---

## Backup (only if he goes here)

### Walk me through your technical background

> Day to day I work in Python and JavaScript or TypeScript, some React. On the infra side it's mostly AWS — EC2, S3, IAM, CloudWatch — and I live in Linux logs when something's wrong: grep, tail, that kind of thing. A lot of my harder tickets are integrations — SAP IDocs and RFCs, REST APIs, checking status codes and payloads. Databases are PostgreSQL and SQL. For monitoring I've used CloudWatch and the internal dashboards I built. I haven't run Datadog in production at Kiss, but I've been going through the Learning Center on Agent, logs, and metrics so I'm not starting from zero.

### Hard technical / production issue — SAP sync

> After we launched the sales platform, field sales was hitting intermittent sync problems from SAP — wrong orders, inventory looking off. Business escalated to me.
>
> I looked for a pattern with them and it only hit certain SKU categories. Root cause was a field mapping mismatch between SAP and our data model. I wrote up exact repro steps and expected vs actual for our vendor team in India, and while we waited I gave the business a list of affected SKUs so they could work around most of it. We got it resolved in about two days.

### Ownership — multi-tenant before launch

> About a month before KRS launched, we found the vendor's multi-tenant setup didn't match the design — one company's data could potentially leak to another. Even though they built it, I treated it as our problem. We rewrote the bad parts with our in-house team, and then we added review gates so we wouldn't ship that kind of miss again. We still launched on time.

### How do you prioritize

> I don't go strictly by who emailed first. If production is down or data looks wrong or field sales is blocked, that jumps the queue. Partial breakage next. How-to and config questions after that — but I still send a quick "I've got this, looking now" so nobody feels ignored. Silence makes people escalate. At Kiss I juggle both platforms, so SAP affecting hundreds of salespeople always beats an admin config question.

---

## Cheat sheet

| He asks… | Read… |
| --- | --- |
| Tell me about yourself | Opening |
| Why TSE / why this role | Motivation |
| Why Datadog | Why Datadog |
| Customers / client-facing | Payroll (then UTC) |
| AI | Naomi AI (then Kiss AI) |
| Technical / tools | Backup — stack |
| Hard bug | Backup — SAP |
| Ownership | Backup — D-30 |

One story per answer. Stop when you're done — don't stack a second story unless he asks.
