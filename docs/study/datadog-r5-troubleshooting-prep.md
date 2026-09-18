# Datadog R5 — Pair Troubleshooting Prep

> **⚠️ 아카이브:** 최종 면접 cheat sheet는 [`datadog-r5-cheatsheet.md`](./datadog-r5-cheatsheet.md) 를 사용하세요. 이 파일은 EN 대본·role-play 연습용으로만 참고.


**Format:** 60min Zoom · 2 x Technical Support Engineers  
**Language:** English  
**Role-play:** one interviewer drives as the customer, one observes/takes notes/asks questions  
**Goal:** lead the conversation, think critically about next steps, use docs, and vocalize thought process

This is **not** a Linux memorization test or Datadog product trivia test. It is a TSE simulation: clarify the customer problem, search/read the docs, apply the right next step, communicate clearly, and escalate with context if needed.

---

## Windy Guide — What They Are Testing



### Session flow


| Time  | Segment              | What to do                                             |
| ----- | -------------------- | ------------------------------------------------------ |
| 10min | Intro                | brief background + why this work fits your experience  |
| 40min | Pair troubleshooting | customer role-play, Datadog docs on laptop, lead out loud |
| 10min | Q&A                  | ask about issue types, ramp-up, success criteria       |




### Evaluation signals


| Strong signal                               | Weak signal                      |
| ------------------------------------------- | -------------------------------- |
| Leads the conversation with clear questions | Waits for interviewer to drive   |
| Vocalizes reasoning before each step        | Thinks silently                  |
| Reads official docs and applies them        | Googles for answer snippets (Windy: don't) |
| Narrows scope before jumping to fixes       | Random command checklist         |
| Gives customer status and next steps        | Focuses only on technical answer |
| Escalates with repro, logs, impact          | Escalates vaguely                |


**Rule:** do not try to look like a Datadog expert. Look like a support engineer who can reason, communicate, and learn from documentation.

---



## 10-Minute Intro



### EN — 60 seconds

> Hi, I'm Dohyun — Leah. I have about three years of experience at the intersection of software engineering and customer-facing technical support.
>
> At Kiss Products, I support two production platforms: KRS, a multi-tenant POS platform for external merchant customers, and our internal Sales Platform with SAP integration for 300+ users. My day-to-day work is reproducing customer-reported issues, tracing root cause through logs, APIs, SQL, and configuration, and explaining findings clearly to both users and engineering.
>
> I am excited for this troubleshooting round because it is close to the work I already do: clarify the issue, follow the data path, use documentation when needed, and keep the customer informed while narrowing down root cause.



### If asked why Datadog / TSE

> Datadog helps teams understand system behavior before it becomes customer impact. At Kiss, I built smaller internal observability workflows for SAP sync, latency, and process health. TSE is the role where technical depth and customer ownership meet every day, so it feels like the right direction for me.

---



## Core Mental Model

```text
Customer environment / app / service
    ↓
Datadog Agent on host or container
    ↓
Agent config: datadog.yaml, site, API key, tags
    ↓
Integration config: conf.d/<integration>.d/conf.yaml
    ↓
Agent status / logs / network forwarding
    ↓
Datadog UI: Metrics Summary, Metrics Explorer, dashboard filters
```

**Goal:** find where data stops.

Use the same pipeline thinking as SAP sync:

> Clarify scope → reproduce → trace source to destination → check logs/config → compare expected vs actual → mitigate → document/escalate.

---



## Must-Know Docs


| Topic                   | Link                                                                                                                                                                               | Why it matters                                                         |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Docs home               | [https://docs.datadoghq.com/](https://docs.datadoghq.com/)                                                                                                                         | Search starting point                                                  |
| Platform overview video | [https://www.youtube.com/watch?v=YmJcbAI_OCg](https://www.youtube.com/watch?v=YmJcbAI_OCg)                                                                                         | Product map: infra, metrics, logs, APM, integrations                   |
| Agent                   | [https://docs.datadoghq.com/agent/](https://docs.datadoghq.com/agent/)                                                                                                             | Agent collects events and metrics from hosts and sends them to Datadog |
| Integrations            | [https://docs.datadoghq.com/getting_started/integrations/#configuring-agent-integrations](https://docs.datadoghq.com/getting_started/integrations/#configuring-agent-integrations) | Agent-based integration setup via `conf.yaml`                          |
| Metrics                 | [https://docs.datadoghq.com/metrics/](https://docs.datadoghq.com/metrics/)                                                                                                         | Metrics types, query/filter/tag basics                                 |




### Browser tabs to open before interview

1. Datadog Docs home
2. Agent docs
3. Agent troubleshooting / Agent commands
4. Configuring Agent integrations
5. Metrics docs

---



## Agent Basics

The Datadog Agent is software that runs on customer hosts. It collects metrics/events and sends them to Datadog.

### Things to know


| Concept                | Meaning                                                            |
| ---------------------- | ------------------------------------------------------------------ |
| `datadog.yaml`         | Main Agent config: API key, site, host tags, proxy                 |
| `site`                 | Datadog destination, for example `datadoghq.com` vs `datadoghq.eu` |
| API key                | Required for Agent data submission                                 |
| `datadog-agent status` | First validation command                                           |
| Agent logs             | Commonly `/var/log/datadog/agent.log` on Linux                     |
| Flare                  | Diagnostic support package for escalation                          |




### What to check in `status`

- Is the Agent running?
- Does the Collector show any integration errors?
- Does the Forwarder show dropped payloads or connection errors?
- Is the endpoint/site correct?
- Are checks running under the expected integration?



### EN phrase

> I want to start with the Agent status because before we debug the dashboard, we need to confirm whether the Agent is running and whether it is successfully collecting and forwarding data.

---



## Integrations Basics

Datadog integrations collect metrics/logs from systems like PostgreSQL, Apache, AWS, Kubernetes, and many others.

### Three integration types


| Type                         | Example                   | Setup                              |
| ---------------------------- | ------------------------- | ---------------------------------- |
| Agent-based                  | PostgreSQL, Apache, Redis | `conf.d/<integration>.d/conf.yaml` |
| Authentication/crawler-based | AWS, Azure, Slack         | credentials in Datadog UI          |
| Library                      | Node.js, Python           | library/API instrumentation        |




### Agent-based integration flow

```text
Find conf.d/<integration>.d/
Rename conf.yaml.example → conf.yaml
Fill required parameters
Restart Datadog Agent
Validate in datadog-agent status under Checks
```



### Common integration failure causes

- `conf.yaml.example` was never renamed to `conf.yaml`
- YAML syntax invalid
- required parameters missing
- wrong credentials or connection URL
- Agent was not restarted after config change
- Agent lacks permission to read file/connect to service
- metric exists but dashboard tag/time filter hides it



### EN phrase

> Since this sounds like an integration-specific issue, I want to verify whether the integration is actually configured and loaded by the Agent. I would check the `conf.yaml`, validate YAML, restart the Agent if config changed, and confirm the check appears in `datadog-agent status`.

---



## Metrics Basics

Metrics are numeric values tracked over time. Datadog stores them as time series and lets users query them by metric name, tags, time, and aggregation.

### Metric types


| Type                     | Use                                          |
| ------------------------ | -------------------------------------------- |
| count                    | total number of events in an interval        |
| rate                     | count divided by time                        |
| gauge                    | last value, useful for CPU/RAM/current state |
| histogram / distribution | latency or percentile-style measurements     |




### If customer says "metrics are missing"

Separate **collection problem** from **visibility/query problem**.

1. Is the Agent/integration collecting the metric?
2. Is the metric actively reporting in Datadog?
3. Is the dashboard using the right time range?
4. Are filters/tags excluding the data?
5. Is the customer looking at the correct org/site/environment?



### EN phrase

> If the Agent looks healthy, I would move to the Datadog side and check whether the metric is actively reporting, then verify the dashboard query, tags, and time range. Sometimes data is present but scoped out by filters.

---



## 40-Minute Troubleshooting Playbook



### 0. Open with empathy and control

> Thanks for sharing the issue. I understand metrics are not showing up, and I will help narrow down where the data path is breaking. I will first clarify the scope, then check the Agent and integration path step by step.



### 1. Clarify scope

Ask:

- Is this affecting one host, one service, or all hosts?
- When did it start?
- Was there any recent change: install, upgrade, config change, firewall/proxy, new integration?
- Is it all metrics or a specific integration metric?
- Which OS/environment is this: Linux, Windows, Kubernetes, Docker, cloud?
- Which Datadog site/org are you using?
- What exactly do you see in the UI?



### 2. Form the first hypothesis

> Based on what you described, I see two possible paths: either the Agent is not sending data, or data is present but filtered out in the UI. I will start at the source with Agent health.



### 3. Use docs openly

> I am going to open the Agent documentation and follow the recommended troubleshooting path. I want to make sure I use the official steps rather than guessing.



### 4. Check Agent health

Ask customer to share or run:

```bash
datadog-agent status
```

If no access:

> If you cannot run commands right now, we can check Fleet Automation or ask someone with host access to generate a flare.



### 5. Check config

Main config:

```text
datadog.yaml
```

Look for:

- API key present
- correct `site`
- proxy/firewall config if needed
- global tags like `env`, `service`

Integration config:

```text
conf.d/<integration>.d/conf.yaml
```

Look for:

- file exists, not only `.example`
- YAML valid
- required parameters
- permissions/credentials



### 6. Check logs

```bash
/var/log/datadog/agent.log
```

Look for:

- `ERROR`
- `WARN`
- authentication failures
- connection failures
- permission denied
- integration check exceptions



### 7. Check network and destination

- outbound HTTPS / port 443
- proxy or firewall
- TLS inspection
- correct Datadog site
- API key valid



### 8. Check UI / metrics visibility

- correct time range
- correct host/service/env tag
- Metrics Summary shows active reporting?
- dashboard query filters too narrow?
- wrong org/site?



### 9. Summarize and close

> Here is what we know so far: the Agent is running, but the integration check is failing with an authentication error. The next step is to update the integration credentials in `conf.yaml`, restart the Agent, and confirm the check appears healthy in `datadog-agent status`. After that, we should see metrics within a few minutes. If it still fails, I would collect a flare and escalate with the status output, logs, config context, and customer impact.

---



## Scenario 1 — Agent Installed, Metrics Not Showing



### Customer prompt

> We installed the Datadog Agent yesterday on an Ubuntu host, but the host metrics are not showing in the dashboard.



### Good opening

> Got it. I will help narrow down whether the Agent is not sending data or whether the metrics are present but not visible in the dashboard. First, is this one host or multiple hosts? And did it ever report metrics, or has it never worked since installation?



### Investigation path

1. Scope: one host or all?
2. Confirm Agent is installed/running.
3. Ask for `datadog-agent status`.
4. Check `site` and API key in `datadog.yaml`.
5. Check Agent logs.
6. Check outbound 443/proxy/firewall.
7. Check UI time range/tags/org.



### Possible root causes

- Agent not running
- wrong API key
- wrong `site`
- firewall/proxy blocking intake
- UI filter/time range hiding metrics

---



## Scenario 2 — Integration Configured, No Integration Metrics



### Customer prompt

> The Agent is running and basic host metrics are visible, but PostgreSQL metrics are missing.



### Good opening

> Since host metrics are visible, the Agent is likely forwarding data. I would focus on whether the PostgreSQL integration is configured, loaded, and able to authenticate to the database.



### Investigation path

1. Check integration docs.
2. Verify `conf.d/postgres.d/conf.yaml` exists.
3. Confirm it is not only `conf.yaml.example`.
4. Validate YAML.
5. Confirm required parameters and credentials.
6. Restart Agent if config changed.
7. Check `datadog-agent status` under Checks.
8. Check Agent logs for auth/permission errors.



### Possible root causes

- `conf.yaml` missing
- invalid YAML
- wrong DB credentials
- DB permission missing
- Agent not restarted
- metric exists but dashboard filter excludes it

---



## Scenario 3 — Metrics Exist, Dashboard Empty



### Customer prompt

> Metrics are reporting in Metrics Summary, but my dashboard graph is empty.



### Good opening

> If Metrics Summary shows the metric is reporting, then collection is probably working. I would focus on the query layer: time range, tags, aggregation, and dashboard filters.



### Investigation path

1. Confirm metric name.
2. Check time range.
3. Check tag filters: `host`, `env`, `service`, region.
4. Remove filters to see if data appears.
5. Compare Metrics Explorer vs dashboard query.
6. Confirm correct org/site.



### Possible root causes

- time window too narrow
- `env:prod` filter but metric has `env:production`
- host tag mismatch
- wrong metric aggregation
- wrong org/site

---

## Full Scenario Scripts — 전체 대본

아래는 **면접관 = 고객**, **당신 = TSE**, 가끔 **Observer**가 끼어드는 형식입니다.  
**영어 대본**을 읽고, **한국어 해석**으로 “왜 이렇게 말하는지” 이해하면 됩니다. 암기보다 **흐름**을 외우세요.

공통 패턴:

```text
인정 → 범위 질문 → 가설 말하기 → docs 열기 → 한 단계씩 → 고객 업데이트 → 마무리
```

---

### 대본 1 — Agent 설치했는데 호스트 메트릭이 안 보임

**한국어 요약:** 어제 Ubuntu에 Agent 설치. 대시보드에 호스트 메트릭 없음.  
**실제 원인:** `datadog.yaml`의 `site`가 `datadoghq.eu`인데 고객은 US org(`datadoghq.com`)를 보고 있음.  
**배우는 것:** 수집 문제는 Agent status → site/API key → forwarder 순으로 좁힌다.

| 역할 | 누가 |
|------|------|
| Customer | 면접관 1 |
| You | 당신 |
| Observer | 면접관 2 (가끔) |

---

**[CUSTOMER]**  
Hi, we installed the Datadog Agent yesterday on an Ubuntu server, but we do not see any host metrics in our dashboard. We need this for production monitoring.

**[YOU]**  
Thanks for reaching out. I understand host metrics are not showing up after yesterday's install, and that is blocking your visibility. I will help narrow this down step by step.

First, I want to clarify scope. Is this affecting only one host, or are multiple hosts missing metrics? And has this host ever reported metrics to Datadog, or has it never worked since installation?

**[CUSTOMER]**  
It is just one host. It has never worked since we installed it yesterday.

**[YOU]**  
Got it — one host, never reported since install. That helps. I see two broad possibilities: either the Agent is not successfully sending data to Datadog, or data is arriving but we are looking in the wrong place in the UI. I will start at the source with Agent health.

I am going to open the official Agent documentation and follow the troubleshooting path. The first step I usually take is `datadog-agent status`, because that tells us whether the Agent is running and whether the forwarder is healthy.

Can you run this on the host and share the output, or paste the Collector and Forwarder sections?

```bash
sudo datadog-agent status
```

**[CUSTOMER]**  
Sure. The Agent says it is running. Under Forwarder, I see something like connection errors, and Endpoints shows `datadoghq.eu`.

**[YOU]**  
That is useful. The Agent process is up, but the Forwarder connection errors suggest data may not be reaching the right Datadog destination.

I want to check two configuration items in `datadog.yaml`: the API key and the `site` parameter. Can you confirm which Datadog site your organization uses in the UI — for example `datadoghq.com` for US, or `datadoghq.eu` for EU?

**[CUSTOMER]**  
We use the US site. Our team logs into app.datadoghq.com.

**[YOU]**  
That likely explains it. Your Agent is configured to send to `datadoghq.eu`, but your organization is on the US site. Metrics sent to the wrong site will not appear in your US org dashboard.

The next step is to update `site` in `/etc/datadog-agent/datadog.yaml` to `datadoghq.com`, verify the API key belongs to this US org, restart the Agent, and then re-check `datadog-agent status` until the Forwarder shows a healthy connection.

After restart, host metrics usually appear within a few minutes. I will stay with you to confirm in Infrastructure or Metrics Summary.

**[OBSERVER]**  
Why did you check `site` before diving into firewall rules?

**[YOU]**  
Because the customer already gave us a strong signal in `status`: the endpoint was `datadoghq.eu` while they use the US app. That is a common misconfiguration on new installs and is faster to verify than network debugging. If `site` and API key were correct and Forwarder was still failing, then I would move to outbound 443, proxy, and `agent.log`.

**[YOU — closing]**  
To summarize: the Agent was running, but it was sending data to the wrong Datadog site. Updating `site` and restarting should resolve it. If it does not, I would collect a flare with status output and escalate. Is there anything else on this host you want to verify while we are here?

**한국어 해석**

- 고객이 “안 보인다”고 하면 바로 방화벽부터 보지 말고 **범위(한 대 vs 전체, 처음부터 vs 갑자기)** 부터.
- `status`에서 **Forwarder / Endpoints** 가 힌트. `datadoghq.eu` vs US org 불일치는 전형적인 신규 설치 실수.
- **site + API key** 맞추고 **restart** → 몇 분 후 UI 확인.
- Observer 질문에는 “왜 그 순서?” → **이미 status에서 단서가 있었기 때문**이라고 말하면 됨.

---

### 대본 2 — 호스트 메트릭은 보이는데 PostgreSQL 메트릭만 없음

**한국어 요약:** Agent는 정상, CPU 등 호스트 메트릭은 보임. PostgreSQL만 없음.  
**실제 원인:** `conf.yaml.example`만 있고 `conf.yaml`로 rename 안 함 → integration 미로드.  
**배우는 것:** 호스트 OK면 **integration conf.d** 로 좁힌다.

---

**[CUSTOMER]**  
Our Datadog Agent is running and we see host metrics, but PostgreSQL metrics are completely missing. We added the integration yesterday.

**[YOU]**  
Thanks. Since host metrics are visible, the Agent is likely installed and forwarding data. I will focus on the PostgreSQL integration path: configuration, whether the check is loaded, and whether it can authenticate to the database.

A few quick questions: is this one database instance or multiple? Any errors in the Datadog integration tile? Did you restart the Agent after changing the integration config?

**[CUSTOMER]**  
One instance. The integration tile shows "no data." We edited a config file yesterday but did not restart.

**[YOU]**  
The missing restart is one thing we should fix, but first I want to confirm the integration is actually enabled.

I am opening the Integrations documentation for PostgreSQL. For Agent-based integrations, the usual path is:

```text
/etc/datadog-agent/conf.d/postgres.d/conf.yaml
```

Can you check whether you have `conf.yaml`, or only `conf.yaml.example`?

**[CUSTOMER]**  
We only have `conf.yaml.example`. We edited that file but did not rename it.

**[YOU]**  
That explains it. The Agent only loads `conf.yaml`. If only the `.example` file exists, the integration is not active even if the content looks correct.

Next steps I would take with you:

1. Copy or rename `conf.yaml.example` to `conf.yaml`
2. Fill in required parameters — host, port, username, password, dbname
3. Validate YAML syntax
4. Restart the Agent: `sudo systemctl restart datadog-agent`
5. Run `sudo datadog-agent status` and look under **Checks** for the PostgreSQL integration

Can you do steps 1–4 and share the Checks section from status?

**[CUSTOMER]**  
Done. Status now shows PostgreSQL check running, but there is an authentication error.

**[YOU]**  
Good progress — the check is loaded now, so configuration is being read. An authentication error usually means credentials in `conf.yaml` are wrong, or the database user lacks permission to run the monitoring queries.

I would compare the username/password in `conf.yaml` with a direct `psql` login using the same credentials. I would also check the integration doc for required PostgreSQL permissions and grants.

If credentials are correct, I would look at `/var/log/datadog/agent.log` for the exact authentication failure message.

**[OBSERVER]**  
What if status looked fine but metrics still did not appear in the UI?

**[YOU]**  
Then I would separate collection from visibility again. I would check Metrics Summary to see if PostgreSQL metrics are actively reporting. If they are reporting, I would review dashboard time range and tag filters like `host`, `db`, or `env`. Sometimes the data exists but the dashboard query scopes it out.

**[YOU — closing]**  
Summary: the integration was never enabled because only `conf.yaml.example` existed. After renaming and restart, the check runs but needs credential/permission fixes. Once auth succeeds, metrics should flow within a few minutes. I can stay on the line to confirm, or if it still fails, we will attach status, logs, and redacted config to a support case.

**한국어 해석**

- **호스트 메트릭 OK = Agent 파이프라인 대체로 OK** → integration 설정으로 시선 이동.
- Agent integration의 **가장 흔한 실수**: `.example`만 수정하고 `conf.yaml` 없음.
- rename → 파라미터 → **restart** → `status`의 **Checks** 확인은 표준 루틴.
- 그 다음 단계가 auth error면 DB 계정/권한 — Kiss에서 DB connection debug 하던 것과 같음.

---

### 대본 3 — Metrics Summary에는 있는데 대시보드만 비어 있음 (Payroll 패턴)

**한국어 요약:** 수집은 됨. Metrics Summary에 metric reporting 중. 대시보드 그래프만 empty.  
**실제 원인:** 대시보드 필터 `env:prod` 인데 metric tag는 `env:production`.  
**배우는 것:** “안 보임”이 항상 Agent 문제는 아님 — **UI query/filter** 확인.

---

**[CUSTOMER]**  
This is frustrating. Our custom application metric shows up in Metrics Summary as actively reporting, but our production dashboard is completely empty. The Agent is fine — I already checked.

**[YOU]**  
I hear you — if the dashboard is empty while you rely on it for production visibility, that is stressful. You mentioned Metrics Summary shows the metric as reporting, which is helpful. That suggests collection may be working and the issue might be in how the dashboard query filters or scopes the data.

I want to confirm a few things: what is the exact metric name in Metrics Summary? What time range is the dashboard using? And are there any template variables or tag filters on the dashboard, like `env`, `service`, or `host`?

**[CUSTOMER]**  
Metric name is `app.orders.processed`. Dashboard is last 4 hours. We have a template variable `env` set to `prod`.

**[YOU]**  
Thank you. I am going to open the Metrics documentation and compare what is reporting versus what the dashboard asks for.

First step: in Metrics Explorer, can you query `app.orders.processed` with no filters for the last 4 hours? Do you see data there?

**[CUSTOMER]**  
Yes, in Metrics Explorer I see data when I do not filter by env.

**[YOU]**  
That is a strong signal. The metric exists, but the dashboard filter is likely excluding it.

Can you click the metric in Metrics Summary and check which tags are attached — specifically the value of `env`?

**[CUSTOMER]**  
The tag is `env:production`, not `env:prod`.

**[YOU]**  
That explains the empty dashboard. The dashboard template variable is filtering on `env:prod`, but the metric is tagged `env:production`, so the query returns no series.

This is not an Agent failure — it is a query scoping issue. To fix it, you can either update the dashboard filter to `env:production`, align your Agent or application tagging to use `env:prod`, or adopt a consistent tagging standard like Unified Service Tagging across Agent and app.

For immediate visibility, changing the dashboard filter is the fastest workaround.

**[OBSERVER]**  
How would you explain this to a customer who insisted the Agent was broken?

**[YOU]**  
I would not lead with "you are wrong." I would say: "I understand why it looks like data is missing. Based on what we verified together, the metric is reporting in Metrics Summary and Metrics Explorer, so collection looks healthy. The dashboard filter is excluding it because of a tag mismatch. Let me show you that side by side so we can pick the best fix."

**[YOU — closing]**  
Summary: collection is healthy; the dashboard filter `env:prod` does not match tag `env:production`. Quick fix is update the filter or standardize tags long term. I am happy to document this for your team so the same confusion does not repeat.

**한국어 해석**

- Payroll **날짜 필터**랑 같은 유형: **데이터는 있는데 UI 조건 때문에 안 보임**.
- Metrics Summary / Explorer로 **수집 vs 표시** 분리하는 게 TSE 핵심 skill.
- 고객이 “Agent 고장”이라고 해도 **같이 화면 보며** tag mismatch 설명 — R4 Payroll과 동일한 태도.

---

### 대본 4 — 로그가 Datadog에 안 들어옴

**한국어 요약:** Agent 설치됨. 메트릭은 보임. 특정 앱 로그 파일은 Log Explorer에 없음.  
**실제 원인:** log path / config 미로드 + Agent user(`dd-agent`)에 파일 read 권한 없음.  
**배우는 것:** logs = log config + **permission** + path.

---

**[CUSTOMER]**  
We enabled log collection on our Linux app server. Host metrics work, but our application logs never show up in Log Explorer.

**[YOU]**  
Thanks. Host metrics working tells me the Agent is generally healthy. For missing logs, I will trace the log pipeline: log configuration, file path, permissions, and whether the Agent log agent is collecting that source.

When did you enable log collection? Did you update an integration `conf.yaml` or a dedicated logs config? And what is the exact file path you expect to tail?

**[CUSTOMER]**  
We added a logs section to our custom check config yesterday. Path is `/var/log/myapp/app.log`. We did restart the Agent.

**[YOU]**  
I am opening the Agent log collection documentation to verify the expected config format.

For file-based logs, the path must exist, the Datadog Agent user must be able to read it, and the logs config must be loaded. Can you run:

```bash
sudo datadog-agent status
```

and share the **Logs Agent** section? Also, on the host, can you run:

```bash
ls -l /var/log/myapp/app.log
```

**[CUSTOMER]**  
Logs Agent is running. The file exists but permissions are `-rw-r-----` owned by `myapp:myapp`. Status does not list our custom log source.

**[YOU]**  
Two findings: first, the log source is not appearing in status, which suggests the config may not be loaded correctly. Second, permissions are `640` owned by `myapp` only, so the Agent user likely cannot read the file.

I would fix this in two steps:

1. **Config** — confirm the logs block is in the correct active `conf.yaml`, YAML is valid, and the Agent was restarted. If needed, run `datadog-agent configcheck` per the docs.
2. **Permissions** — add read access for the Agent user, for example add `dd-agent` to the `myapp` group and ensure group read on the file, or adjust ACLs per your security policy.

After changes, restart the Agent and confirm the log source appears under Logs Agent in `status`. Then check Log Explorer with the correct `source` tag and time range.

**[OBSERVER]**  
Why check permissions before assuming a Datadog platform bug?

**[YOU]**  
Log collection is file-path and OS-permission sensitive. The customer gave us evidence the file exists but is not readable by the Agent user, and the source is not listed in status. Those are local configuration issues we can fix immediately, whereas a platform bug would be the hypothesis only after config, permissions, and `agent.log` look clean.

**[YOU — closing]**  
Summary: logs are not missing because of Datadog overall — the log source is not loaded and/or the Agent cannot read `/var/log/myapp/app.log`. Fix config loading and file permissions, restart, validate in status, then confirm in Log Explorer. If it still fails, I will escalate with status, `agent.log`, and redacted config.

**한국어 해석**

- 메트릭 OK + 로그만 X → **Logs Agent / log config / file permission** 축.
- Linux support에서 흔한 패턴: **경로 틀림**, **권한 없음**, **conf 안 읽힘**.
- `status`에 log source가 **안 보이면** config 문제부터 의심.

---

### 대본 5 — 화난 고객 + “전부 다운됐다” (범위부터 좁히기)

**한국어 요약:** 고객은 “Datadog 전부 망가짐”이라고 함. 실제로는 **AWS integration**만 credential 만료.  
**배우는 것:** 감정 인정 + **scope 좁히기** + integration 타입 구분 (Agent vs crawler).

---

**[CUSTOMER]**  
This is urgent. Nothing in Datadog is working. We have an executive review in two hours and all our AWS metrics are gone. Your platform is broken.

**[YOU]**  
I understand the urgency — if AWS metrics are missing before an executive review, that is a high-impact situation. I am going to help you right now.

First, I want to narrow scope with you. When you say nothing is working, is it literally all Datadog data — host metrics, logs, APM — or is it specifically AWS integration metrics?

**[CUSTOMER]**  
Host metrics still look okay. It is mainly our AWS dashboards.

**[YOU]**  
That helps a lot. Host metrics still reporting suggests the core Agent path on your hosts is likely fine. The issue is probably isolated to the AWS integration, which is an authentication-based integration configured in Datadog rather than through a host `conf.yaml`.

I would open the AWS integration tile in Datadog and check for credential errors, expired role assumption, or recent account changes. Did anything change recently — IAM role, external ID, account ID, or CloudFormation stack?

**[CUSTOMER]**  
We rotated IAM credentials last night.

**[YOU]**  
That is a likely root cause. After credential rotation, crawler-based integrations often stop until the integration tile is updated with the new role or credentials.

Next steps:

1. Open AWS integration configuration in Datadog
2. Verify the IAM role / account / external ID match the new setup
3. Run the integration test or refresh from the tile
4. Confirm AWS metrics resume in Metrics Summary

While you do that, I will stay on the line. If the tile test fails, I will capture the exact error message and escalate with impact, timeline, and the credential change context.

**[OBSERVER]**  
How do you de-escalate the customer tone?

**[YOU]**  
I acknowledged impact first without arguing about "platform broken." Then I asked a scope question that moved us from panic to a narrower technical problem. Once they confirmed host metrics work, we had a concrete path and they could see progress within minutes.

**[YOU — closing]**  
Summary: this is not a full Datadog outage — host metrics are healthy and the issue is likely the AWS integration after IAM rotation. Update integration credentials and re-test. AWS metrics should repopulate after a successful refresh. I will follow up in 30 minutes if needed.

**한국어 해석**

- 화난 고객: **“죄송합니다”만 반복 X** → **영향 인정 + 지금 바로 scope 좁히기**.
- “전부 안 됨” → **정말 전부인지 한 줄 질문**으로 분리.
- AWS = **crawler/auth integration** → `conf.d`가 아니라 **Datadog UI의 integration tile** 확인.

---

## 대본 연습 방법

1. **한 시나리오씩** 소리 내서 읽기 — 10분
2. **[YOU]만** 가리고 고객 말 듣고 즉흥 답 — 10분
3. **Observer 질문** 2개에 30초씩 답 — 5분

**외울 것은 4문장만:**

1. *"Let me clarify scope first."*  
2. *"I am opening the official documentation for the next step."*  
3. *"That tells me the issue is likely at [collection / integration / query] layer."*  
4. *"Here is what we know, here is the next step, and I will update you."*

---

## Customer Communication Templates



### Acknowledge

> I understand this is blocking your visibility into the system. I will walk through the data path with you and keep you updated at each step.



### Explain why

> I am checking this first because it tells us whether the issue is at the collection layer or the visualization layer.



### When stuck

> I do not have the final answer yet, but the next useful step is clear. I would collect the Agent status, relevant logs, and config context, then escalate with a complete repro package while keeping you updated.



### Customer is frustrated

> I understand why this is frustrating, especially if you rely on this dashboard for production visibility. I will focus first on restoring visibility or finding a workaround, then we can confirm root cause.



### Customer is technically wrong

> That makes sense as a possibility. Based on what we are seeing, I think another path may be more likely: the Agent is sending data, but the dashboard filter is excluding it. Let me verify that with you.

---



## Escalation Package

If escalating to senior TSE / engineering, include:

- customer impact and urgency
- exact symptom
- scope: one host vs many, one integration vs all
- timeline / when it started
- environment: OS, Agent version, site, integration
- steps already tried
- `datadog-agent status`
- relevant `agent.log` lines
- relevant config snippets with secrets removed
- screenshots or dashboard query if UI issue
- suspected root cause / next hypothesis



### EN phrase

> If I escalate, I do not want to just say "metrics are missing." I would include scope, impact, Agent status, relevant logs, config context, steps already tried, and the next hypothesis so the next engineer can continue without re-gathering context.

---



## Q&A Questions

Ask 1-2 only.

1. What issue types does the Seoul TSE team handle most often: Agent, integrations, logs, APM, or something else?
2. For a new TSE1, what does strong ramp-up look like in the first three to six months?
3. When a customer issue turns out to be product-side, what does a strong escalation from TSE to engineering look like?
4. How much of the work is ticket-based versus live troubleshooting calls or screenshare?

---



## Final Interview Rules

- Lead the conversation.
- Clarify scope before fixes.
- Use official docs openly.
- Read docs, do not hunt for answer snippets.
- Vocalize every hypothesis.
- Keep customer updated.
- If unknown, say what you will check next.
- End with summary, next steps, and escalation criteria.

