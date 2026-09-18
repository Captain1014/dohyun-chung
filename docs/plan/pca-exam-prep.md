# PCA exam prep notes (new syllabus)

**Purpose:** Align PCA study with the **current Professional Cloud Architect** exam (community-reported “new syllabus”), not legacy materials.

**Sources (community, not official Google):**  
- [Reddit — Passed PCA (new syllabus), AMA](https://www.reddit.com/r/googlecloud/comments/1qbw4ku/passed_gcp_professional_cloud_architect_new/)  
- Thread comments (Filipo24, Relative_Rope4234, etc.) — verify against [official exam guide](https://cloud.google.com/learn/certification/cloud-architect) before booking.

---

## Format (reported)

| Item | Detail |
|------|--------|
| Questions | **60** in **2 hours** |
| Case studies | Typically **2** per attempt; **~7–8 questions each** — do **not** skip case study prep |
| Prep time cited | One passer: **~2 weeks** at **~2 hrs/day** (full-time job); another: refresher after prior PCA + hands-on GCP |

---

## Case studies (newer set — confirm in official materials)

Names cited as of the thread:

- **Altostrat Media**
- **Cymbal Retail**
- **EHR Healthcare**
- **KnightMotives Automotive**

Example draw: **EHR** + **Cymbal** (7–8 Q per case). Read each case and **map possible architectures** to technical requirements — that drives which topics to study.

---

## What to use

1. **Google official exam guide + learning path** (authoritative scope).
2. **Cloud Skills Boost** labs — hands-on called out as high value.
3. **Scenario-style practice** — “best service + architecture tradeoffs,” not isolated definitions.
4. **Whizlabs** — optional extra for scenario-style questions (community: “pretty decent”).
5. **YouTube** — one review video referenced: `https://www.youtube.com/watch?v=UGt48Ekf8jg` (verify it still matches your syllabus version).

---

## What to avoid

- **Exam dumps** — multiple reports: real questions **do not** match dumps; focus on **decision-making** from requirements.

---

## LLM practice (thread suggestion)

Use ChatGPT/Gemini to generate **realistic scenario questions**, including newer **AI/ML** areas on the PCA syllabus. Example prompt shape:

> I'm preparing for the Google Cloud Professional Cloud Architect exam. Please generate 50 realistic sample exam questions to test my knowledge, including the latest AI topics in the GCP PCA syllabus.

Adjust difficulty if too easy. Note: one comment said generated complexity was **slightly below** the real exam but still useful for review.

---

## Topic emphasis (from passers’ question recall)

High frequency or explicitly mentioned:

| Area | Focus |
|------|--------|
| **Vertex AI** | Know **services and roles** at a solid level; not necessarily deepest internals, but breadth across Vertex |
| **GKE** | Large share: networking, limits, deployments, exposing services |
| **Networking** | Hybrid: **VPN vs Interconnect** tradeoffs; **load balancing** for multi-regional |
| **Cloud Run** | Revisions, gradual traffic, safe rollouts; **when to choose** which compute platform |
| **Cloud Build** | **Triggers**, external repos, CI/CD automation (more questions than some expect) |
| **Compute Engine** | **Spot** VMs; **MIGs** + load balancers |
| **DR** | **RTO/RPO** and architecture patterns to meet targets |
| **Databases** | **Cloud SQL**, **Spanner** (multi-region); **Bigtable** (e.g. schema / read-heavy analytics scenarios) |
| **Security** | Firewalls, **Cloud Armor**, org policies (e.g. region restrictions), **VPC-SC**, IAM, logging, **KMS**; time-bound access (e.g. auditor 1 month) |

---

## Other tips

- **Get Certified / vouchers:** Some regions run programs with **free or discounted exam vouchers** — check [Skills Boost](https://www.cloudskillsboost.google/) and local Google Cloud promos when you register.
- **Case study reading:** Some say questions are **explicit enough** that deep memorization of the PDF is optional; others still recommend **full read-through** + solution sketching. Safer to **read + outline architectures**.

---

*Last updated: 2026-03-30 — synthesized from Reddit thread; cross-check all names and weights against current Google PCA documentation before the exam.*
