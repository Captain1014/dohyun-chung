# Automattic — Happiness Engineer Apply Pack

**Status:** Resume ready · **Apply now** (sandbox in parallel — see § Apply now vs sandbox)  
**Resume:** `public/resume_dohyun_chung_automattic.pdf`  
**Apply URL:** https://automattic.com/work-with-us/job/happiness-engineer-customer-support-success/  
**Note (2026-06):** LinkedIn posting may be down while **official careers page stays open** — apply via URL above (Greenhouse). LinkedIn repost lag ≠ role closed.

---

## Apply now vs sandbox

| Path | When |
|------|------|
| **Apply today** | Use § Application — WordPress (apply now) below; start LocalWP same week |
| **Stronger WP story** | 4–7 day sandbox first, then paste § Application — WordPress (post-sandbox) |

Salary expectation: **$55,000 USD** (≈ 7,400만원 @ 1,350)

---

## Apply checklist

- [ ] Upload `public/resume_dohyun_chung_automattic.pdf`
- [ ] Paste Why Automattic / HE, salary, initiative STAR, WP section
- [ ] LinkedIn URL: https://www.linkedin.com/in/dohyun-chung/
- [ ] Portfolio: https://dohyun-chung.vercel.app

---

## WP sandbox checklist (minimum)

- [ ] LocalWP: WordPress + WooCommerce installed
- [ ] Products, checkout (test mode), shipping/tax configured
- [ ] One debug story: plugin conflict or checkout issue → `WP_DEBUG` / Health Check → fix
- [ ] Optional: `GET /wp-json/wc/v3/products` with Application Password
- [ ] Write 3–5 sentences for application (template below)

---

## Application — WordPress (apply now)

Use if submitting **before** sandbox is complete. Honest 3–4/10 + adjacent eCommerce.

```
I do not have professional WordPress support experience yet (self-rating ~4/10 
today). I am actively building hands-on skills with LocalWP + WooCommerce this 
week. My adjacent experience is strong: at Kiss I was the primary technical 
contact for 300+ retail merchant operators on a POS platform — checkout flows, 
REST/OAuth API issues, order sync failures, and merchant onboarding. At 24/7 
Teach I supported 3,000+ users on a publishing platform. My debug workflow is 
the same one HE needs: reproduce the issue, read logs, narrow scope (plugin vs 
theme vs config), document the fix for the customer and the team. I use AI daily 
to draft clearer support replies and runbooks.
```

## Application — WordPress (post-sandbox)

Replace apply-now block after LocalWP + one debug story.

```
I do not have professional WordPress support experience. Recently I built a 
local WordPress + WooCommerce store [with LocalWP]: configured products, 
checkout (test mode), shipping zones, and tax. When [specific issue — e.g. 
checkout failed / white screen / plugin conflict], I enabled WP_DEBUG, used 
the Health Check plugin to isolate plugins, and [what you did to fix it]. 
I also tested the WooCommerce REST API (Application Password) to verify 
product data. This mirrors how I debug production issues at Kiss — reproduce, 
read logs, narrow scope, document in our knowledge base.
```

---

## Application — Salary expectation

```
$55,000 USD per year (paid in local currency). I have reviewed the stated 
range of $40,000–$68,000 USD and this reflects my experience in technical 
customer support, eCommerce merchant operations, and bilingual EN/KR communication.
```

---

## Application — Why Automattic / HE (short)

```
Automattic's mission — democratizing publishing and commerce — matches what 
I already do: help merchants and users get unblocked on platforms that power 
their business. At Kiss I supported 300+ retail operators; at 24/7 Teach, 
3,000+ users on a publishing platform. I want to do that at global scale, 
fully remote, with a team that treats support as craft. I'm a self-directed 
remote worker and I use AI daily to work faster and write better documentation.
```

---

## Application — Initiative & impact (STAR hint)

Use one Kiss example:
- **Observability tool** — proactive alerts, fewer reactive tickets
- **Knowledge base** — team resolves issues without escalation
- **OAuth/API fix** — daily merchant access restored

---

## Notes

- Do **not** claim professional WP support on resume — WP story lives in application only (post-sandbox).
- Ashby Product Support reject ≠ Automattic HE; different bar, fully remote, WP-specific.
- Comp floor 65M KRW ≈ $48k — $55k expectation targets mid-band.

---

## Interview process (Glassdoor synthesis, 2024–2026)

Reports vary by cohort and recruiter path. Treat this as a **likely sequence**, not a guarantee.

| Stage | What happens | Your prep |
|-------|----------------|-----------|
| **1. Application** | Online form + WP/Woo story + salary | Sandbox done before submit |
| **2. Screen (optional)** | Intention form; some report **50 Q / 15 min cognitive** + **12 English Q / 1 min each** | Rest well; English = short clear sentences, not essays |
| **3. Take-home** | Realistic customer issues — explain fix **or actually fix**; multi-scenario mimic of support tickets | Use sandbox bugs; document reproduce → logs → isolate → fix → customer reply |
| **4. Video (short)** | ~10 min with 1–2 senior HEs — background, why Automattic, learning stories | STAR × 2; calm pace OK (one candidate noted anxiety/stutter) |
| **5. Live Slack chat** | ~15 min — walk through **async customer service** as if in Zendesk/Slack | Practice typed replies: empathize → clarify → steps → link docs |
| **6. Offer / decline** | Fully remote; comp often discussed early (some report low initial offer) | Hold $55k ask; band $40–68k |

**Recurring questions**

- WordPress experience **1–10** (honest: sandbox + Kiss merchant ops → aim **4–6** with growth story, not 8+)
- Why Automattic / why Happiness Engineer
- WooCommerce merchant support experience
- Tell me about a time you had to **learn something new** quickly

**What “difficult” usually means (not LeetCode)**

- Take-home quality under time pressure
- Live chat: tone, clarity, troubleshooting order while typing
- Showing you can **debug WP/Woo** without hand-holding

**What does NOT appear in HE reports**

- LeetCode / algorithms
- System design whiteboard
- Multi-week travel

---

## Pre-interview drills (after sandbox)

### Take-home template (customer-facing write-up)

```
1. What the customer reported (symptom)
2. What I checked first (settings, plugins, logs, Health Check)
3. Root cause
4. Fix (steps the customer can follow)
5. Prevention / doc link for next time
```

### Live Slack chat — reply skeleton

```
Hi [Name] — thanks for the details. I can see why that's frustrating.

To narrow this down: [one clarifying question OR one quick check they can do]

If [X], try: 1) … 2) … 3) …
If that doesn't help, reply with [screenshot / error text] and we'll go deeper.
```

### STAR — “learn something new”

Use **OAuth/API debugging at Kiss** or **LocalWP checkout fix** — emphasize self-serve docs, not escalation.

### WP 1–10 answer (script)

```
I'd rate myself 5 today for hands-on WordPress. I haven't supported WP 
professionally, but I recently built a WooCommerce store locally, debugged 
[specific issue], and I'm comfortable with admin, plugins, WP_DEBUG, and 
REST API basics. My strength is the same workflow I use in production SaaS 
support: reproduce, read logs, isolate, document — I'm ramping WP-specific 
depth deliberately for this role.
```

---

## Full application form (copy-paste)

**Apply:** https://automattic.com/work-with-us/job/happiness-engineer-customer-support-success/

### Before you submit (blockers)

| Item | Action |
|------|--------|
| **Resume** | Upload `public/resume_dohyun_chung_automattic.pdf` |
| **WordPress.com username** | Free signup at https://wordpress.com/ — publish at least one post/page (required field) |
| **WP project story** | Best: 2–3h LocalWP + WooCommerce + one debug fix. Minimum: WP.com site + honest Beginner |
| **References ×3** | Include 1 supervisor/manager — notify them first |

### Dropdown selections

| Field | Select |
|-------|--------|
| WordPress experience | **Beginner** (unless LocalWP + WooCommerce done → still Beginner, not Intermediate) |
| Customer-facing support | **Experienced in support** |
| Reviewed compensation | **Yes** |
| Salary expectation | **$55,000 USD** |

### Basic info

| Field | Value |
|-------|-------|
| Location | New York, NY, United States |
| LinkedIn | https://www.linkedin.com/in/dohyun-chung/ |

---

### 1. Why Automattic / Happiness Engineer?

```
Automattic's mission — democratizing publishing and commerce — is the work I 
already do at a smaller scale. At Kiss Products I was the primary technical 
contact for 300+ retail merchant operators on a POS platform: checkout issues, 
API/OAuth failures, order sync problems, and onboarding. At 24/7 Teach I 
supported 3,000+ users on a publishing platform. In both roles the best days 
were when I helped someone get unblocked, explained the fix clearly, and 
documented it so the next person could self-serve.

I'm applying for Happiness Engineer because I want to do that work full-time, 
at global scale, on products I believe in — WordPress and WooCommerce power 
millions of small businesses, the same merchants I care about. Automattic treats 
support as craft (everyone does support rotations; HE as long-term career), 
and the fully remote, high-autonomy culture matches how I already work. I'm 
also Korean/English bilingual, which helps when customers need clear technical 
explanations in either language.

I'm not looking for HE as a stepping stone to pure engineering — I want to 
become excellent at customer-facing technical support and grow within Happiness.
```

---

### 2. WordPress site or project (LocalWP + WooCommerce — update [brackets] after sandbox)

If sandbox not done yet, do LocalWP first OR use § WordPress.com fallback below.

```
I built a practice WooCommerce store locally with LocalWP to prepare for this 
role — a small retail shop with three products, Stripe test-mode checkout, 
shipping zones, and tax settings. The goal was to understand merchant pain 
points: product setup, payment gateway config, and checkout failures.

A specific problem I hit: checkout failed with a generic error after I 
installed [plugin name]. I enabled WP_DEBUG in wp-config.php, reproduced the 
failure, and used the Health Check plugin to disable all plugins except 
WooCommerce — checkout worked again. I re-enabled plugins one by one and found 
[conflicting plugin]. I documented the fix (deactivate X or update to version 
Y) the same way I write runbooks at Kiss. I also verified product data via 
the WooCommerce REST API using an Application Password.

This is local-only (not live), but it mirrors my production debug workflow: 
reproduce → logs → isolate → fix → document for the customer.
```

**WordPress.com fallback** (if no LocalWP yet — create free site today):

```
I created a WordPress.com site ([your-site].wordpress.com) to learn the block 
editor, themes, and plugin basics hands-on. I'm simultaneously building a 
local WooCommerce sandbox with LocalWP for commerce-specific troubleshooting. 
My professional eCommerce experience comes from Kiss — 300+ retail merchants on 
a POS platform — but I'm investing in WordPress-specific depth deliberately 
for this role.
```

---

### 3. Customer support background (free text)

```
Experienced in support — roughly three years of customer-facing technical work.

At Kiss Products (Apr 2024–present) I'm the primary technical contact for 
external merchant customers on our retail POS platform (~300 operators across 
the US and Europe). Channels: email, live chat, phone, Slack, and screen-sharing 
sessions — high volume, often same-day response expectations. Typical issues: checkout/order flow errors, OAuth and 
REST API access failures (403, expired tokens), SAP integration sync failures, 
performance degradation, and onboarding/configuration questions. Customers 
range from non-technical store owners to technical integrators at partner 
agencies.

At 24/7 Teach (May 2023–Apr 2024) I was technical liaison for 3,000+ end 
users on an AI-powered K-12 publishing platform — ambiguous bug reports, 
login/access issues, content publishing problems. Channels: support queue and 
direct email with educators and admins.

I enjoy the work: reproducing unclear reports, finding root cause, explaining 
fixes in plain language, and writing KB articles so the team handles the 
next case without me.
```

---

### 4. Two professional accomplishments

```
**1. Proactive observability tool (Kiss — Sales Platform)**

Situation: Merchant-impacting issues (sync failures, API errors) were often 
reported by customers before engineering knew. Reactive firefighting slowed 
everyone down.

What I did: I built an automated observability tool that reads AWS logs, 
metrics, and database signals, detects anomalies, and routes structured alerts 
to the team before customers open tickets. I documented alert meanings and 
runbooks in our knowledge base.

Result: Fewer surprise escalations; the team could intervene on sync/API 
issues earlier. CS and ops started resolving known patterns from the KB without 
looping in engineering. It changed how we worked — from "wait for the email" 
to "see the alert first."

Why it mattered: Merchant uptime directly affects revenue for 300+ operators. 
Proactive support is cheaper and builds trust.

**2. Integration knowledge base + OAuth/API runbook (Kiss)**

Situation: Recurring OAuth scope errors and SAP↔platform sync failures generated 
repeat tickets. Each case took hours because tribal knowledge lived in Slack 
threads.

What I did: I traced the top failure modes, wrote step-by-step reproduction 
and resolution guides, and added escalation criteria (when to involve engineering 
vs. fix in config). I fixed the underlying permission-grant misconfiguration 
that caused daily 403 errors for multiple merchants.

Result: Teammates resolved common OAuth and sync issues independently. Repeat 
ticket volume on those themes dropped noticeably over several months. Mean time 
to resolution improved because bug reports to engineering included clear repro 
steps the first time.

Why it mattered: Support quality scales through documentation, not heroics — 
the same principle Automattic uses at HE scale.
```

---

### 5. AI tool story

```
At Kiss I used Claude (and similar tools) to accelerate recurring support work — 
not as a search engine, but as a workflow partner.

Situation: After incidents I needed runbooks and customer-facing explanations 
fast, and log dumps were too long to parse manually under time pressure.

What I did: I built a repeatable workflow — paste anonymized log excerpts and 
error context into Claude with a fixed template (symptom, environment, what 
we tried). I asked for: likely root-cause hypotheses ranked by probability, 
customer-safe explanation draft, and internal escalation notes. I validated 
every suggestion against the actual logs and API responses before sending 
anything to a merchant or filing a ticket.

What worked: Drafting runbooks and summarizing 500-line log files dropped from 
~45 minutes to ~15, with fewer missed patterns. I also used AI to draft first 
versions of KB articles, then edited for accuracy.

What didn't: AI occasionally suggested plausible-but-wrong causes (wrong OAuth 
scope name, wrong endpoint). I learned to treat output as hypotheses, never 
answers — same discipline as HE triage.

Takeaway: AI helps me serve customers faster when I stay in the loop and verify. 
That's how I'd use it as an HE — draft, verify, ship clear replies.
```

---

### 6. WordPress.com username

Sign up at https://wordpress.com/ → use your username here: `[yourusername]`

---

### 7. References (you fill — template)

```
1. [Full Name] — [Title], Kiss Products — Direct supervisor/manager. 
   Email: [email] | Phone: [phone] | Relationship: [X months/years]

2. [Full Name] — [Title], Kiss Products or 24/7 Teach — Colleague or lead. 
   Email: [email] | Phone: [phone]

3. [Full Name] — [Title], 24/7 Teach — Former manager or senior colleague. 
   Email: [email] | Phone: [phone]
```

Notify all three before submitting.

---

### 8. LinkedIn / anything else

```
LinkedIn: https://www.linkedin.com/in/dohyun-chung/
Portfolio: https://dohyun-chung.vercel.app

I'm fluent in Korean (native) and English — happy to support customers in either 
language. Fully remote today from NYC; no relocation required for this role. 
I'm a self-directed worker and comfortable with async communication across 
time zones.
```

---

### 9. Salary

```
$55,000 USD per year (paid in local currency). I have reviewed the stated 
range of $40,000–$68,000 USD. This reflects my experience in high-volume 
technical support, eCommerce merchant operations, and bilingual communication.
```
