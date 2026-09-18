# Datadog R5 - Doc-Only Study

> **⚠️ 아카이브:** 최종 면접 cheat sheet는 [`datadog-r5-cheatsheet.md`](./datadog-r5-cheatsheet.md) 를 사용하세요. 이 파일은 Windy/공식 문서 직접 인용 아카이브입니다.


**Rule:** 이 파일에는 Windy 이메일과 Datadog 공식 문서에서 **직접 인용한 문장**만 정리합니다.

**출처**

- Windy 이메일
- [Agent](https://docs.datadoghq.com/agent/)
- [Integrations](https://docs.datadoghq.com/getting_started/integrations/)
- [Metrics](https://docs.datadoghq.com/metrics/)
- [Agent Troubleshooting](https://docs.datadoghq.com/agent/troubleshooting/)
- [Agent Commands](https://docs.datadoghq.com/agent/configuration/agent-commands/)

---

## 1. Windy - Pair Troubleshooting Guide

### Format

> 10 minute intro
>
> 40 minute pair troubleshooting
>
> There will be 2 interviewers assigned to this session. One of the interviewers will 'drive' as the customer while the other observes, takes notes, and asks questions
>
> 10 minutes will be for Q&A

### Goal

> The goal is for you to lead the conversation and troubleshooting, thinking critically about the next step in each situation. You will need to use your own laptop to search the docs/Google. We are not testing your knowledge of Linux or the Datadog platform but rather how you work as a team member and your critical thinking skills.

**Note:** Windy Goal line includes the word `docs/Google` verbatim. But in **Other tips** she also wrote: *"Don't google for the answers. Make sure that you read the docs, the answers are in the docs."* For interview prep, treat this as: **open Datadog official documentation on your laptop** — not Google-searching for answer snippets.

### Other tips

> You may use information from Datadog documentation or elsewhere on the internet during the interview.
>
> Check out a video on the Datadog platform for a quick overview.
>
> Also, review documentation on the agent, integrations and metrics as a starting point.
>
> Don't google for the answers. Make sure that you read the docs, the answers are in the docs. Also don't think to yourself; make sure you vocalize your thought process so the team can help you.

---

## 2. Agent - Overview

Source: https://docs.datadoghq.com/agent/

> The Datadog Agent is software that runs on your hosts. It collects events and metrics from hosts and sends them to Datadog, where you can analyze your monitoring and performance data.

> Agent v7 is available.

---

## 3. Agent - Configuration

Source: https://docs.datadoghq.com/agent/

### datadog.yaml / site

> Edit the Agent's main configuration file, `datadog.yaml`, to set the `site` parameter (defaults to `datadoghq.com`).

```yaml
site: YOUR_DATADOG_SITE
```

> See the Getting Started with Datadog Sites documentation for further details on the `site` parameter.

### Log location

> See the Agent log files documentation.

### Troubleshooting link

> Troubleshooting: Find troubleshooting information for the Datadog Agent.

### Fleet Automation

> Fleet Automation is the primary, in-app workflow for installing, upgrading, configuring, and troubleshooting the Datadog Agent at scale.

> Send a flare for support: From the Support tab of a host, generate a flare and attach it to an existing or new Support case without having to use the command line.

---

## 4. Agent Commands - status

Source: https://docs.datadoghq.com/agent/configuration/agent-commands/

> List of commands to display the status of your Datadog Agent and enabled integrations.

| Platform | Command |
| --- | --- |
| Linux | `sudo datadog-agent status` |

> A properly configured integration is displayed under Running Checks with no warnings or errors

Example from docs:

```text
Running Checks
==============
  network (1.6.0)
  ---------------
    Total Runs: 5
    Metric Samples: 26, Total: 130
```

### Subcommands

| Subcommand | Notes |
| --- | --- |
| `flare` | Collect a flare and send it to Datadog. |
| `configcheck` | Print all configurations loaded and resolved of a running Agent. |
| `diagnose` | Execute connectivity diagnosis on your system. |
| `health` | Print the current Agent health. |

---

## 5. Agent Troubleshooting - Checklist

Source: https://docs.datadoghq.com/agent/troubleshooting/

> If you have not yet installed the Datadog Agent, go to the dedicated Agent integration page for installation instructions. If you just installed the Agent, it may take a few moments before you start seeing metrics appear. The first place you should check for metrics is the Metrics Explorer.

> If you think you might be experiencing issues, follow this checklist first:

1. Is your Agent container stopping right after starting? It can be a hostname detection issue.
2. Is your host connected to the internet or able to access it through a proxy?
3. If using a proxy: is your Agent configured for this proxy?
4. Is the Datadog API key set up in your `datadog.yaml` configuration file the API key corresponding to your Datadog platform?
5. Is the site configured in your `datadog.yaml` configuration file matching the one from your organization?
6. Is there only one Datadog Agent running on your host?
7. Did you restart the Datadog Agent after editing a yaml configuration file?

> If the answer to all questions above is `yes`, then run the status command for more details about your Agent and its integrations status. You can also check the Agent logs directly and enable debug mode to get more logging from the Agent.

> If you're still unsure about the issue, you may reach out to the Datadog support team with a flare from your Agent.

---

## 6. Integrations - Overview and Setup

Source: https://docs.datadoghq.com/getting_started/integrations/

> An integration, at the highest level, is when you assemble a unified system from units that are usually considered separately. At Datadog, you can use integrations to bring together all of the metrics and logs from your infrastructure and gain insight into the unified system as a whole

### Three types

> Datadog provides three main types of integrations:

- **Agent-based** integrations are installed with the Datadog Agent and use a Python class method called `check` to define the metrics to collect.
- **Authentication (crawler) based** integrations are set up in Datadog where you provide credentials for obtaining metrics with the API.
- **Library** integrations use the Datadog API to allow you to monitor applications based on the language they are written in

### API key

> To install the Datadog Agent, you need an API key. If the Agent is already downloaded, make sure to set up the API key in the `datadog.yaml` file.

### Configuring Agent integrations

> Configure Agent integrations by navigating to the `conf.d` folder at the root of your Agent's configuration directory. Each integration has a folder named `INTEGRATION_NAME.d`, which contains the file `conf.yaml.example`.

> To activate a given integration:

1. Rename the `conf.yaml.example` file (in the corresponding `INTEGRATION_NAME.d` folder) to `conf.yaml`.
2. Update the required parameters inside the newly created configuration file with the values corresponding to your environment.
3. Restart the Datadog Agent.

### Validation

> To validate your Agent and integrations configuration, run the Agent's `status` subcommand, and look for new configuration under the Checks section.

### Integration troubleshooting

> The first step to troubleshooting an integration is to use a plugin in your code editor or use one of the many online tools to verify that the YAML is valid. The next step is to run through all of the Agent troubleshooting steps.

> If you continue to have problems, contact Datadog support.

---

## 7. Metrics - Overview

Source: https://docs.datadoghq.com/metrics/

> Metrics are numerical values that can track anything about your environment over time, from latency to error rates to user signups.

> Metrics provide an overall picture of your system. You can use them to assess the health of your environment at a glance. Once you identify a problem, you can use logs and tracing to further troubleshoot.

### How metrics get to Datadog

> Metrics can be sent to Datadog from several places.

- **Datadog-Supported Integrations**: Datadog's 1,000+ integrations include metrics out of the box.
- **custom metrics** can be submitted through the Agent, DogStatsD, or the HTTP API.
- **Additionally, the Datadog Agent automatically sends several standard metrics** (such as CPU and disk usage).

### Metric types

> Datadog supports several different metric types that serve distinct use cases: count, gauge, rate, histogram, and distribution.

### Querying / visibility

> You can visualize your metrics and create graphs throughout Datadog: in Metrics Explorer, Dashboards, or Notebooks.

> Tip: To open the Metrics Summary page from Datadog's global search, press `Cmd`/`Ctrl` + `K` and search for `metrics`.

> After selecting a metric, you can filter your query based on tag(s). For instance, you can use `account:prod` to scope your query to include only the metrics from your production hosts.

> The Metrics Summary page displays a list of your metrics reported to Datadog under a specified time frame

---

## 8. YouTube - Product Tour

Source: https://www.youtube.com/watch?v=YmJcbAI_OCg

Video description:

> Datadog offers a single unified platform to observe your infrastructure, applications, network flows, security threats, UX, and more. For full visibility, you can seamlessly navigate between metrics, traces, and logs.

Transcript excerpt:

> Datadog brings together all of this observability data, with infrastructure metrics, traces, and logs in one integrated platform.

> If you see something interesting on a dashboard, you can drill into related processes, hosts, or logs for more information.

---

## 9. 문서에 없는 것

- 정확한 면접 시나리오 문장 (고객 첫 대사는 연습용)
- metrics not showing이 반드시 나온다는 보장
- Linux 명령어 암기 시험 (Windy: not testing Linux knowledge)

**면접 대본:** section 11 — checklist / status / flare 순서는 문서 그대로. 고객 대사만 연습용.

---

## 10. Doc-only 연습 순서

1. Windy 이메일 section 1 - format / goal / tips
2. Agent section 2-3 - Agent 정의, `datadog.yaml`, `site`
3. Agent Troubleshooting section 5 - checklist 7개 순서대로 말하기
4. Agent Commands section 4 - `sudo datadog-agent status`, Running Checks
5. Integrations section 6 - 3 types, conf.yaml 3 steps, validation = status
6. Metrics section 7 - Metrics Explorer, Metrics Summary, tag filter

### 면접에서 할 일 (Windy 인용)

> lead the conversation and troubleshooting, thinking critically about the next step

> use your own laptop to search the docs

> read the docs, the answers are in the docs

> vocalize your thought process

---

## 11. 면접 대본 — 문서 checklist 순서 그대로 (영어)

**사용법:** 소리 내서 읽기. `[YOU]`만 외우면 됨. `[CUSTOMER]`는 면접관이 말하거나 혼자 상상하고 넘어가기.

**근거:** [Agent Troubleshooting](https://docs.datadoghq.com/agent/troubleshooting/) checklist + 이후 status/logs/flare 문장. Windy: lead, read docs, vocalize.

**면접 전:** 브라우저에 https://docs.datadoghq.com/agent/troubleshooting/ 열어두기.

---

### Opening

**[CUSTOMER]** *(연습용 — 면접관이 비슷하게 말함)*  
Hi, we think we're having an issue with the Datadog Agent. We installed it recently and we're not sure metrics are coming through correctly.

**[YOU]**  
Hi, thanks for reaching out. I'll help you troubleshoot this step by step.

I'm going to lead us through the official Datadog Agent troubleshooting documentation on my laptop. I'll read the steps out loud and ask you questions from the checklist so we can narrow this down together.

---

### Before checklist — 문서 첫 단락

**[YOU]**  
The documentation says that if you just installed the Agent, it may take a few moments before metrics appear. It also says the first place to check for metrics is the Metrics Explorer.

Have you already checked Metrics Explorer, or is it completely empty there?

**[CUSTOMER]** *(연습용)*  
We checked Metrics Explorer. We don't see host metrics yet. It's been about a day since install.

**[YOU]**  
Thank you. Since it's been longer than a few moments, the documentation says that if you think you might be experiencing issues, we should follow the troubleshooting checklist first. I'll go through that checklist with you now.

---

### Checklist — 7 questions (문서 순서)

**[YOU] — 1**  
First question from the checklist: Is your Agent container stopping right after starting? The documentation notes this can be a hostname detection issue. Are you running the Agent in a container, and if so, does it stop right after it starts?

**[CUSTOMER]**  
No, we're on a Linux host, not a container. The Agent stays running.

**[YOU] — 2**  
Second question: Is your host connected to the internet, or able to access it through a proxy?

**[CUSTOMER]**  
Yes, the host has internet access. We're not using a proxy.

**[YOU] — 3**  
Third question — the documentation adds this if you're using a proxy: Is the Agent configured for that proxy? Since you said no proxy, we can note that and move on.

**[YOU] — 4**  
Fourth question: Is the Datadog API key set up in your `datadog.yaml` configuration file — and is it the API key corresponding to your Datadog platform?

**[CUSTOMER]**  
Yes, we have an API key in `datadog.yaml`. We copied it from our organization settings.

**[YOU] — 5**  
Fifth question: Is the site configured in your `datadog.yaml` configuration file matching the one from your organization? The documentation calls this out specifically. For example, your organization might use `datadoghq.com` for US. Does the `site` value in `datadog.yaml` match what you use in the Datadog app?

**[CUSTOMER]**  
I'm not sure. We left the default in the file.

**[YOU]**  
That's something we should verify together. The Agent configuration documentation says the `site` parameter defaults to `datadoghq.com`, but it needs to match your organization. Can you confirm which site your team uses when you log into Datadog, and we can compare that to `datadog.yaml`?

**[CUSTOMER]**  
We use the US site — `datadoghq.com`.

**[YOU]**  
Good. Please confirm `site: datadoghq.com` is set in `datadog.yaml` and matches your organization.

**[YOU] — 6**  
Sixth question from the checklist: Is there only one Datadog Agent running on your host?

**[CUSTOMER]**  
Yes, only one Agent.

**[YOU] — 7**  
Seventh question: Did you restart the Datadog Agent after editing a yaml configuration file? The documentation lists this as a required step after config changes.

**[CUSTOMER]**  
We edited the config yesterday but I'm not sure we restarted.

**[YOU]**  
Let's restart the Agent after we confirm the API key and site, then we'll re-check. The documentation expects a restart after yaml edits.

---

### All yes (or resolved) → status — 문서 다음 단계

**[YOU]**  
We've worked through the checklist. For the items we confirmed — API key present, site matching your organization, single Agent, and we'll restart after the yaml check.

The documentation says: if the answer to all questions above is yes, then run the status command for more details about your Agent and its integrations status.

I'm opening the Agent Commands documentation. On Linux, the command is:

```bash
sudo datadog-agent status
```

Can you run that on the host and share the output, especially the Agent, Forwarder, and Running Checks sections?

**[CUSTOMER]** *(연습용)*  
Okay, status shows the Agent is running. Running Checks shows network with no errors.

**[YOU]**  
The Agent Commands documentation says a properly configured integration is displayed under Running Checks with no warnings or errors. That's helpful — it means the Agent is running and at least some checks are collecting metric samples.

---

### Still unsure → logs / flare — 문서 다음 단계

**[YOU]**  
If we're still unsure about the issue after status, the troubleshooting documentation says we can also check the Agent logs directly and enable debug mode to get more logging from the Agent.

For now, after the restart, please check Metrics Explorer again as the documentation recommends as the first place to check for metrics.

If we're still unsure after that, the documentation says you may reach out to the Datadog support team with a flare from your Agent. The Agent Commands documentation lists `flare` as a subcommand to collect a flare and send it to Datadog.

---

### Closing summary

**[YOU]**  
To summarize what we did: we followed the Agent troubleshooting checklist from the documentation — connectivity, API key, site matching your organization, single Agent, and restart after yaml changes. Then we used the status command as the documentation directs when checklist items are satisfied.

Next steps for you: confirm `site` in `datadog.yaml`, restart the Agent, re-check Metrics Explorer, and share status output if metrics still don't appear. If it still fails, we'll collect a flare for support.

Is there anything else on this host you want to check while we're on the call?

---

### Observer가 끼어들 때 (짧게)

**[OBSERVER]**  
Why did you use the checklist instead of guessing?

**[YOU]**  
The Agent troubleshooting documentation says to follow this checklist first when you think you might be experiencing issues. I'm reading the docs and applying the steps in order rather than guessing, which is what I'd do on a real ticket.

**[OBSERVER]**  
Why ask about site?

**[YOU]**  
Because the checklist explicitly asks whether the site configured in `datadog.yaml` is matching the one from your organization. That's a documented step, not something I invented.

---

### 연습 팁

1. 처음염 `[YOU]`만 소리 내서 읽기 — 10분  
2. `[CUSTOMER]` 답은 면접관이 줄 것 → 그때마다 checklist 다음 번호로 넘어가기  
3. 화면에는 https://docs.datadoghq.com/agent/troubleshooting/ 공유  
4. Windy: 매 단계마다 *"I'm on step X of the documentation checklist"* 라고 말하기

---

### 대본 B — status는 OK인데 특정 integration 메트릭 없음 (Integrations 문서)

**상황:** checklist + status 통과. Running Checks에 network는 있지만 nginx 메트릭 없음 *(연습용 — 면접관이 integration 이름 줄 수 있음)*

**[CUSTOMER]**  
Status looks fine for the Agent, but we still don't see nginx metrics in Datadog.

**[YOU]**  
Thank you. The Agent is running, so let's shift from the general Agent checklist to integration setup.

I'm opening the Integrations getting started documentation. It says an integration brings together metrics and logs from your infrastructure. For Agent-based integrations, the Agent uses a check to collect metrics.

The documentation says to configure Agent integrations in the `conf.d` folder. Each integration has a folder named `INTEGRATION_NAME.d` with a file `conf.yaml.example`.

For nginx, can you check whether you have `nginx.d` under your Agent configuration directory?

**[CUSTOMER]**  
We have `nginx.d`, but the file is still named `conf.yaml.example`.

**[YOU]**  
That could be the issue. The documentation lists three steps to activate an integration:

First, rename `conf.yaml.example` to `conf.yaml` in the `nginx.d` folder.

Second, update the required parameters inside `conf.yaml` with values for your environment — for example, the status URL or port nginx exposes.

Third, restart the Datadog Agent.

Can you rename the file and update the parameters, then restart?

**[CUSTOMER]**  
Done. We renamed it and set the status URL. Agent restarted.

**[YOU]**  
To validate, the documentation says run the Agent's status subcommand and look for the new configuration under the Checks section — the Running Checks area.

Can you run `sudo datadog-agent status` again and tell me if nginx appears under Running Checks, and whether there are any warnings or errors?

**[CUSTOMER]**  
nginx shows up now. No warnings.

**[YOU]**  
The Agent Commands documentation says a properly configured integration appears under Running Checks with no warnings or errors. That matches what you're seeing.

For metrics visibility, the Metrics documentation says Datadog-supported integrations include metrics out of the box, and you can visualize them in Metrics Explorer, Dashboards, or Notebooks.

Can you open Metrics Explorer and search for nginx-related metrics? It may take a moment after the integration starts reporting.

**[CUSTOMER]**  
We see nginx metrics now.

**[YOU]**  
Great. To summarize: we confirmed the Agent with the troubleshooting checklist and status, then followed the integration documentation — rename `conf.yaml.example`, update parameters, restart, and validate with status under Running Checks.

---

### 대본 C — status에 warning 있을 때 (문서: logs, debug, flare)

**[CUSTOMER]**  
Status shows the Agent running, but Running Checks has a warning on one check.

**[YOU]**  
The documentation says a properly configured integration should show no warnings or errors under Running Checks. Since we see a warning, we're not done yet.

The troubleshooting documentation says if we're still unsure after the checklist, we can check the Agent logs directly and enable debug mode to get more logging from the Agent.

Can you pull the Agent log lines around the time of that warning? I'll stay on the troubleshooting doc while you do that.

**[CUSTOMER]**  
Here's a snippet from the log.

**[YOU]**  
Thank you. Based on what we see, we may need to adjust the integration `conf.yaml` — the integrations documentation also says the first troubleshooting step for an integration is to verify the YAML is valid.

If we still can't resolve it on the call, the Agent troubleshooting documentation says you may reach out to Datadog support with a flare from your Agent. The flare subcommand collects diagnostic information and sends it to Datadog.

Before we escalate, let's confirm API key, site, and restart one more time from the checklist, then re-run status.

---

### 면접 40분 채우는 말버릇 (Windy: vocalize)

면접관이 답 줄 때까지 **침묵하지 말고** 이렇게 말하기:

- *"I'm on the Agent troubleshooting page now — step four is about the API key in datadog.yaml."*
- *"Let me read the exact wording… yes, it says the API key should correspond to your Datadog platform."*
- *"While you check that, I'll pull up the Agent Commands page for the status command."*
- *"I'm not going to guess the root cause — I'm following the documented order."*
- *"Next documented step after a yaml edit is restart — I'll note that for our action items."*

**10분 Q&A용 한 줄 (문서 기반):**

**[YOU]**  
I prepared by reviewing Agent, integrations, and metrics documentation, and the platform overview video Windy recommended. In the session I'd lead with the official troubleshooting checklist, use status to validate, and read docs on my laptop rather than searching for quick answers.
