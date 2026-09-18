# Datadog TSE — Shingang Kim Interview Prep

**Interview:** 2026-07-01 (Tue) 11:00 KST · Zoom · ~45 min  
**Interviewer:** **Shingang Kim** — Sr. Manager, Technical Support Engineering (Seoul)  
**Language:** **Korean + English** (both in same session — switch naturally)  
**Format:** Hiring Manager — technical skill set, experience, **behavioral STAR**, **prioritization**, motivations, why Datadog / why TSE  

**NOT expected:** Full scenario role-play, live Agent debugging (those come later)

**Parent doc:** `datadog-tse-interview.md` · **Full Q&A:** `datadog-shingang-qa.md` ← **오늘 이거**

---

## Full pipeline (confirmed 2026-06-26)

| # | Round | Language | Status |
|---|-------|----------|--------|
| 1 | HackerRank OA | — | ✅ |
| 1.5 | HR — Windy | EN | ✅ |
| 2 | Prior HM round (background / fit) | KR/EN | ✅ |
| **3** | **Shingang Kim — Sr. Manager TSE** | **KR/EN** | **⏳ 2026-07-01** |
| 4 | Cultural connect — 2 team members | KR/EN | ⏳ **Normally onsite** — team discussing **Zoom** for overseas candidate; **Windy will confirm** |
| 5 | **Pair live troubleshooting** | **English** | ⏳ Customer role-play + docs/logs |
| 6 | Final — Director | English | ⏳ Career goals, fit |
| — | **Coffee chat onsite** (pre-offer) | — | ⏳ Informal meet before final offer |

**Customer mix:** ~**70% Korean** / ~**30% other regions** → fluent **English for troubleshooting round** is mandatory.

---

## Shingang Kim — interviewer lens

- **Datadog** Sr. Manager TSE, Seoul (Jul 2023–present)
- **HERE** — Technical Support Manager APAC; critical customer issues; led customer + internal teams
- **Dell** — Professional Services delivery, financial industry clients
- **LG Electronics** — 9 yrs automotive nav/telematics; **integration** with OEM clients (Renault, GM/OnStar, Hyundai/Kia)
- **Education:** KAIST MS CS, Soongsil BS CS

**What he likely tests:** ownership under pressure, integration/connectivity depth, escalation judgment, bilingual communication, team fit — **not** trick coding.

| His background | Your bridge |
|----------------|-------------|
| Critical issues until resolved (HERE) | SAP sync — 48h RCA, 300+ users |
| Integration / API (LG, maps) | SAP IDoc, REST, 6-system pipeline |
| Delivery under constraints (Dell) | 4-team deadlock; D-30 launch |
| APAC global customers | Kiss US/Europe; native KR + fluent EN |

---

## Expected questions

### Opening / motivation (EN or KR)

1. Tell me about yourself / walk through resume  
2. Why Datadog?  
3. Why Technical Support Engineering (not SWE)?  
4. Why Seoul / relocation timing?

### Behavioral STAR (prepare 2 min each, EN + KR summary)

5. Tell me about a **critical production issue** you owned end-to-end  
6. Tell me about a **difficult customer or stakeholder** — how did you handle it?  
7. Tell me about a time you had to **escalate** — what did you include?  
8. Tell me about **prioritizing** when multiple people or issues need you at once  
9. Tell me about a **technical project** you owned (tools, stack, outcome)  
10. Tell me about something that **failed** or almost failed — what did you learn?

**Story map:**

| Question | Story | Hook |
|----------|-------|------|
| Critical issue | SAP sync #3 | 48h RCA, field mapping, 300 users |
| Difficult stakeholder | Phase 1/2 #4 OR frustrated business unit #3 | Didn't say "no" — structured alternative |
| Escalation | SAP → India vendor | Repro spec + logs + timeline |
| Prioritization | Two platforms Kiss | Impact-first; acknowledge all; Jira |
| Technical ownership | KRS POS or PIM pipeline #2 | Multi-tenant, AWS, APIs |
| Prevent disaster | D-30 tenant #5 | TDD gate, process fix |

Full STAR: `docs/study/interview-star-stories.md`

### Technical / tools (can go deeper than prior round)

11. What tools and stack have you used? (AWS, Linux, Python, SAP, REST, monitoring)  
12. How do you troubleshoot an integration when data isn't syncing?  
13. How do you read logs / narrow root cause?  
14. Experience with observability or monitoring? (CloudWatch, internal dashboards — honest about learning Datadog product)

### Prioritization (often conversational, not role-play)

> "When multiple requests come in, I triage by **business impact** — production down or data corruption first, partial degradation second, how-to questions third. I send a short acknowledgment to everyone so no one feels ignored. At Kiss I managed two production platforms simultaneously using Jira and clear ETAs."

Add Kiss proof: SAP outage affecting field sales > admin config question.

---

## Bilingual delivery tips

- **Default to English** if Shingang starts in English; match his language each question  
- Korean answers: slightly more formal (존댓말), clear structure  
- Don't translate word-for-word — same STAR, natural in each language  
- Practice **one full STAR in Korean** (SAP #3) and **one in English** (Phase 1/2 #4)

**30-sec intro (English):**

> I'm Dohyun — Leah. CS and Sociology from NYU, ~3 years across engineering and technical customer lead roles. At Kiss I own two production platforms including a live SAP integration for 300+ users. I'm relocating to Seoul and want a role where technical depth and customer ownership happen every day — that's why Datadog TSE.

---

## Questions to ask Shingang (pick 2)

1. "What does success look like in the first 90 days for a new TSE on your team?"  
2. "What kinds of issues does the Korea team handle most — Agent setup, integrations, logs, something else?"  
3. "How is the Seoul team structured, and where would a TSE 2 fit?"  
4. "What separates strong TSEs from average ones on your team?"  
5. "Can you walk me through the remaining interview steps after today?" *(confirms troubleshooting + cultural connect order)*

**Do NOT ask about salary** in this round — Windy / offer stage only.

---

## What comes after Shingang (prep preview)

| Next round | Prep focus |
|------------|------------|
| **Cultural connect** | Values, teamwork, why Datadog, KR+EN small talk; be warm, curious |
| **Pair troubleshooting (EN)** | Datadog Agent basics, talk-while-debug, `datadog-tse-interview.md` §10 |
| **Director (EN)** | Career arc, 3–5 yr goals, why TSE long-term (consistent with prior answers) |
| **Coffee chat** | Low pressure; genuine interest in team/Seoul office |

Start Agent prep **after** Shingang passes — not before Tuesday.

---

## 6-day schedule (→ 7/1)

| Day | Task | Time |
|-----|------|------|
| Thu 6/26 | STAR #3 + #4 out loud **EN and KR** | 90 min |
| Fri 6/27 | Tools + prioritization script; one STAR recorded | 2 hr |
| Sat 6/28 | Mock 8 behavioral Q; trim to 2 min | 90 min |
| Sun 6/29 | Why Datadog / why TSE — consistent with HR answers | 60 min |
| Mon 6/30 | Full mock 45 min; 2 questions for Shingang | 45 min |
| Tue 7/1 AM | Intro + one STAR + questions only | 20 min |

---

## Day-of checklist

- [ ] Zoom, camera on, quiet space  
- [ ] Notepad — STAR bullet headers only  
- [ ] KR/EN both ready; follow Shingang's language lead  
- [ ] No salary talk; no LinkedIn research mention  
- [ ] If asked expectation again: "Discussed 65M KRW with Windy; open to total package including RSU and ESPP at offer stage"

---

*Updated: 2026-06-26 — Shingang confirmed; pipeline corrected; Aaron R2 attribution removed.*
