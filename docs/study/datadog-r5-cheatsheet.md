# Datadog R5 — Pair Troubleshooting Cheat Sheet (Final)

> **Use this file only.**  
> Consolidates `datadog-r5-troubleshooting-prep.md` (role-play scripts) + `datadog-r5-doc-only.md` (doc quotes) into one interview cheat sheet.  
> **Rule:** Every **Fix** must follow Datadog official docs (start at [Agent Troubleshooting](https://docs.datadoghq.com/agent/troubleshooting/)). Do not invent OS-only flows as the Fix.

---

## Interview Format (60 min)


| Time  | Segment                                                                                            |
| ----- | -------------------------------------------------------------------------------------------------- |
| 10min | Intro — background, why TSE                                                                        |
| 40min | Pair troubleshooting — customer role-play, **~5 bugs**, reference **official docs** on your laptop |
| 10min | Q&A                                                                                                |


**What they test:** Linux memorization ❌ · lead + questions + docs + think aloud ✅  
**Windy:** Google snippet hunt ❌ · Datadog official docs ✅ · **vocalize** your thought process ✅

---

## Universal Routine (Every Scenario)

```text
1. Empathize — "I understand this is blocking you."
2. Scope — one host vs all? when started? what changed?
3. Hypothesis — collection vs integration vs UI filter?
4. Think aloud — say what you're checking and why
5. One step — command or config check → customer update
6. Close — summary + next step + flare/escalate if stuck
```

**Four phrases to memorize (natural TSE tone):**

1. *"Let me clarify scope first."*
2. *"The next thing I want to check is [status / datadog.yaml / the integration config]."*
3. *"That tells me the issue is likely at the [collection / integration / query] layer."*
4. *"Here is what we know, here is the next step, and I will update you."*

**Optional (when needed):**

- *"Give me one moment — I want to confirm the required config for this integration."*
- *"Can you run this on the host and share the output?"*

---

## Browser Tabs Before Interview

1. [Docs home](https://docs.datadoghq.com/)
2. [Agent](https://docs.datadoghq.com/agent/)
3. [Agent Troubleshooting](https://docs.datadoghq.com/agent/troubleshooting/)
4. [Agent Commands](https://docs.datadoghq.com/agent/configuration/agent-commands/)
5. [Integrations — conf.yaml](https://docs.datadoghq.com/getting_started/integrations/#configuring-agent-integrations)
6. [Log Collection](https://docs.datadoghq.com/agent/logs/)
7. [Metrics](https://docs.datadoghq.com/metrics/)

---

## Official Troubleshooting Docs — Quick Links (by product)

When the customer names a product, jump straight to its troubleshooting index. **Start every Agent problem at [Agent Troubleshooting](https://docs.datadoghq.com/agent/troubleshooting/).**

**Core Infrastructure & Agent**

- [Agent Troubleshooting](https://docs.datadoghq.com/agent/troubleshooting/) — main checklist (hostname, proxy, api_key, site, duplicate Agent, restart)
- [Troubleshoot an Agent Check](https://docs.datadoghq.com/agent/troubleshooting/agent_check_status/) — a specific check WARNING/exception
- [Check Agent Site](https://docs.datadoghq.com/agent/troubleshooting/site/) — Agent healthy but no data in UI (site mismatch)

**Observability & Logs**

- [APM Troubleshooting](https://docs.datadoghq.com/tracing/troubleshooting/) — traces missing / SDK ↔ Agent connection
- [Logs Troubleshooting](https://docs.datadoghq.com/logs/troubleshooting/) — logs missing / ingestion / index
- [Log Collection Troubleshooting Guide](https://docs.datadoghq.com/logs/guide/log-collection-troubleshooting-guide/) — Agent-side collection (permissions, restart, tailing)

**Networks & Databases**

- [Database Monitoring (DBM)](https://docs.datadoghq.com/database_monitoring/troubleshooting/) — Postgres/MySQL/SQL Server no data
- [Network Device Monitoring (NDM)](https://docs.datadoghq.com/network_monitoring/devices/troubleshooting/) — SNMP device not visible

**Security & Analytics**

- [Code Security](https://docs.datadoghq.com/security/code_security/troubleshooting/) — SAST/SCA, 403 (`DD_API_KEY`/`DD_APP_KEY`/`DD_SITE`)
- [Product Analytics](https://docs.datadoghq.com/product_analytics/troubleshooting/) — funnel/pathways discrepancies

---

## Global Quick Reference

### File paths


| Path                                           | Purpose                                  |
| ---------------------------------------------- | ---------------------------------------- |
| `/etc/datadog-agent/datadog.yaml`              | `api_key`, `site`, `logs_enabled`, proxy |
| `/etc/datadog-agent/conf.d/<name>.d/conf.yaml` | integration / log source                 |
| `/var/log/datadog/agent.log`                   | Agent's own logs                         |


### Commands (Linux — EC2 / bare-metal pattern)


| Command                                      | When                                             |
| -------------------------------------------- | ------------------------------------------------ |
| `sudo systemctl status datadog-agent`        | Is the service running?                          |
| `sudo journalctl -u datadog-agent -n 50`     | Why did boot/start fail?                         |
| `sudo systemctl restart datadog-agent`       | After yaml config change                         |
| `sudo datadog-agent status`                  | **First choice** — Forwarder, Checks, Logs Agent |
| `sudo datadog-agent configcheck`             | YAML parse / loaded config                       |
| `sudo datadog-agent integration show <name>` | Integration details                              |
| `sudo datadog-agent diagnose`                | Connectivity diagnosis                           |
| `sudo datadog-agent flare`                   | Escalation support bundle                        |
| `curl -v https://datadoghq.com`              | Outbound HTTPS                                   |
| `nc -zv agent-intake.logs.datadoghq.com 443` | Intake reachability                              |
| `ls -l /var/log/...`                         | Log file permissions                             |


### K8s (only if customer uses Kubernetes)


| Command                                                              | When                        |
| -------------------------------------------------------------------- | --------------------------- |
| `kubectl get pods -n datadog`                                        | Agent Pod status            |
| `kubectl describe pod <pod> -n datadog`                              | Events / init / mount fails |
| `kubectl logs <pod> -n datadog -c agent`                             | Agent container logs        |
| `kubectl exec -it <pod> -n datadog -c agent -- datadog-agent status` | Run status inside Pod       |


### Data path (mental model)

```text
App / host / integration
  → Agent (datadog.yaml + conf.d)
  → Forwarder → Datadog intake (site + API key)
  → UI (Metrics Explorer / Log Explorer / dashboard filters)
```

**"Not showing" = find where the path breaks:** source → Agent → forward → UI query

### Logs — Agent collection vs Datadog Log Pipeline


| Layer             | Where                                                        | What we fix in interview      |
| ----------------- | ------------------------------------------------------------ | ----------------------------- |
| **Collection**    | Agent host (`logs_enabled`, conf.d, permissions, multi-line) | Scenarios 6–8, 11             |
| **Pipeline (UI)** | Datadog → Logs → Pipelines                                   | Parse / remap / grok / filter |


If logs **never appear** in Log Explorer → collection first.  
If logs appear but look **wrong** (fields missing, unparsed) → Log Pipeline processors, not Agent restart.

---

# Scenario Cheat Sheet

Windy focus areas: **Agent · Integrations · Metrics**. Same three buckets for interview triage.


| Category        | When customer says…                                                    | Scenarios |
| --------------- | ---------------------------------------------------------------------- | --------- |
| **Agent**       | Host/logs/network/K8s Agent broken; nothing or almost nothing arriving | 1–13      |
| **Integration** | Host metrics OK; one product (Postgres, nginx, AWS…) missing           | 14–20     |
| **Metrics**     | Data path OK or mostly OK; Summary / Explorer / dashboard query wrong  | 21–25     |


**Quick route:** host metrics missing → **Agent** → specific check missing → **Integration** → Summary OK, graph empty → **Metrics**

### Agent

1. Service won't start / no metrics after install (official checklist)
2. API key invalid / 403
3. Site mismatch
4. YAML indentation (tab vs space)
5. YAML list syntax (`-type` vs `- type`)
6. `logs_enabled: false`
7. Log file permission denied
8. Multi-line stack traces
9. Proxy / firewall / Forwarder timeout
10. Docker → DogStatsD custom metrics
11. K8s Agent can't collect container logs
12. Container/K8s hostname error (Agent exits) — official hostname_containers
13. K8s Agent Pod won't start

### Integration

14. Postgres/MySQL connection failure
15. Redis/Nginx bind (not 127.0.0.1)
16. Only `conf.yaml.example` (no `conf.yaml`)
17. Config edited but Agent not restarted
18. Nginx/Apache wrong status URL
19. Check loaded but WARNING / exception in `status`
20. AWS / crawler integration — credentials / IAM rotated (UI, not `conf.d`)

### Metrics

21. Metrics Summary OK, dashboard empty (tag / filter)
22. Wrong metric name / typo in query
23. Wrong aggregation (avg vs sum / rate misuse)
24. Time range / timezone hides the series
25. Custom metric never reporting (app not emitting)

---

## Scenario 1 — [Agent] Installed but No Metrics / Not Staying Up

**Problem:**  
Customer installed the Agent but sees no metrics (or Agent stops right after start).

**Docs to check (source of truth):**

- [Agent Troubleshooting](https://docs.datadoghq.com/agent/troubleshooting/) ← **follow this page in order**
- Container stop → [Hostname Detection in Containers](https://docs.datadoghq.com/agent/troubleshooting/hostname_containers/)
- Then: [Agent status command](https://docs.datadoghq.com/agent/configuration/agent-commands/#agent-status-and-information) · [Agent log files](https://docs.datadoghq.com/agent/configuration/agent-log-files/) · [Debug mode](https://docs.datadoghq.com/agent/troubleshooting/debug_mode/) · [Flare](https://docs.datadoghq.com/agent/troubleshooting/send_a_flare/)

**Ask / check with customer (official checklist — say yes/no out loud):**

- [ ] Agent container stopping right after starting? → hostname docs
- [ ] Host on internet, or access via proxy?
- [ ] If proxy: Agent configured for that proxy?
- [ ] `api_key` in `datadog.yaml` = this org’s API key?
- [ ] `site` in `datadog.yaml` matches the organization?
- [ ] Only one Datadog Agent on the host?
- [ ] Restarted Agent after any yaml edit?

**Commands (after checklist):**

```bash
sudo datadog-agent status
# Agent logs (path per Agent log files docs; Linux often:)
sudo tail -100 /var/log/datadog/agent.log
# still unclear → debug mode (see debug_mode docs), then:
sudo datadog-agent flare
```

**Technical knowledge (from that page):**

- Just installed → metrics may take a few moments; **first place to check = Metrics Explorer**
- Checklist answers all `yes` → run **status** for Agent + integrations
- Still unsure → Agent logs + debug → support with **flare**

**Fix (docs order only):**  
Work the [troubleshooting checklist](https://docs.datadoghq.com/agent/troubleshooting/) → if all yes, `datadog-agent status` → Agent logs / debug → if still stuck, **flare** to Datadog support. Fix whatever checklist item failed (hostname, proxy, api_key, site, duplicate Agent, missing restart).

---

## Scenario 2 — [Agent] Running but API Key Invalid / 403

**Problem:**  
Agent process is running. `status` shows API Key invalid or HTTP 403.

**Docs to check:**

- [Agent Troubleshooting — API key](https://docs.datadoghq.com/agent/troubleshooting/)
- [Agent configuration — datadog.yaml](https://docs.datadoghq.com/agent/configuration/)

**Ask / check with customer:**

- [ ] Where was the API key copied from? (Org Settings → API Keys)
- [ ] Is placeholder `API_KEY_HERE` still in the file?
- [ ] Extra **spaces** or newlines before/after the key?
- [ ] Key from the correct **org**?
- [ ] **Restart** after yaml edit?

**Commands:**

```bash
sudo datadog-agent status          # API Key section → invalid?
sudo grep api_key /etc/datadog-agent/datadog.yaml
sudo systemctl restart datadog-agent
sudo datadog-agent status          # re-check
```

**Technical knowledge:**

- `api_key:` wrong / spaces / placeholder → Forwarder rejects (403)
- Config change → **must restart**

**Fix (docs):** Checklist item — set the correct org `api_key` in `datadog.yaml` → **restart** Agent (required after yaml edit) → `datadog-agent status` → confirm in Metrics Explorer.

---

## Scenario 3 — [Agent] Healthy but No Data in UI (Site Mismatch)

**Problem:**  
Agent status shows running. Forwarder endpoint is `datadoghq.eu` but customer views US org (`app.datadoghq.com`) — or vice versa.

**Docs to check:**

- [Agent configuration — site](https://docs.datadoghq.com/agent/configuration/)
- [Getting Started with Datadog Sites](https://docs.datadoghq.com/getting_started/site/)

**Ask / check with customer:**

- [ ] Which URL does the team log into? (`app.datadoghq.com` vs `app.datadoghq.eu`)
- [ ] What is `site:` in `datadog.yaml`?
- [ ] What does `status` → Forwarder → **Endpoints** show?
- [ ] Is the API key from the **same site org**?

**Commands:**

```bash
sudo datadog-agent status            # Forwarder / Endpoints
sudo grep site /etc/datadog-agent/datadog.yaml
sudo systemctl restart datadog-agent
```

**Technical knowledge:**

- `site:` must match the org URL (`datadoghq.com` vs `datadoghq.eu`)
- Wrong site can look healthy → data goes to the **wrong** org

**Fix (docs):** Checklist / [Check Agent Site](https://docs.datadoghq.com/agent/troubleshooting/site/) — make `site` match the organization → restart → `status` → Metrics Explorer.

---

## Scenario 4 — [Agent] Broken YAML Indentation (Tab vs Space)

**Problem:**  
After config edit, Agent refuses to load yaml. `configcheck` fails or Agent won't start.

**Docs to check:**

- [Agent Troubleshooting](https://docs.datadoghq.com/agent/troubleshooting/)
- [Integrations — YAML config](https://docs.datadoghq.com/getting_started/integrations/#configuring-agent-integrations)

**Ask / check with customer:**

- [ ] Recent **manual yaml** edit?
- [ ] Used Tab key? (YAML = **spaces only**)
- [ ] Nested block indent correct? (usually 2 spaces)
- [ ] Which file — `datadog.yaml` or `conf.d/.../conf.yaml`?

**Commands:**

```bash
sudo datadog-agent configcheck       # line number + parse error
sudo datadog-agent status
sudo systemctl restart datadog-agent
```

**Technical knowledge:**

- YAML: **no tabs**, spaces only
- `yaml: line X: did not find expected key` = indent/structure error
- Compare indent to integration doc example yaml

**Fix:** Fix indent on error line with spaces → configcheck clean → restart

---

## Scenario 5 — [Agent] YAML List Syntax Error (`-type` vs `- type`)

**Problem:**  
Log config or integration check array syntax error. Agent fails to parse config.

**Docs to check:**

- Relevant integration or [Log Collection config](https://docs.datadoghq.com/agent/logs/)
- [Integrations conf.yaml example](https://docs.datadoghq.com/getting_started/integrations/#configuring-agent-integrations)

**Ask / check with customer:**

- [ ] In logs/integration block, is there a **space** after list `-`?
- [ ] Wrong: `-type: file` / Correct: `- type: file`
- [ ] Compared line-by-line to docs example yaml?

**Commands:**

```bash
sudo datadog-agent configcheck
sudo datadog-agent status
sudo systemctl restart datadog-agent
```

**Technical knowledge:**

- YAML array item = `-`  (dash + space) + key
- `-type:` = invalid list entry — configcheck pinpoints line

**Fix:** Match docs example list syntax → configcheck → restart

---

## Scenario 6 — [Agent] Host Metrics OK but Log Explorer Empty (`logs_enabled: false`)

**Problem:**  
Metrics Summary / host metrics OK. No logs in Log Explorer.

**Docs to check:**

- [Agent Log Collection](https://docs.datadoghq.com/agent/logs/)
- [Agent configuration — logs_enabled](https://docs.datadoghq.com/agent/configuration/)

**Ask / check with customer:**

- [ ] When was log collection **enabled**?
- [ ] Is `logs_enabled: true` in `datadog.yaml`?
- [ ] Per-source log config in conf.d?
- [ ] Restart after yaml edit?
- [ ] `status` → **Logs Agent** section running?

**Commands:**

```bash
sudo grep logs_enabled /etc/datadog-agent/datadog.yaml
sudo datadog-agent status              # Logs Agent section
sudo systemctl restart datadog-agent
sudo datadog-agent configcheck
```

**Technical knowledge:**

- Master switch: `logs_enabled: true` in `datadog.yaml`
- Default false — common "metrics-only silo"
- Logs on = global flag + (often) per-source config in conf.d

**Fix:** `logs_enabled: true` → restart → confirm Logs Agent in status → Log Explorer (time range)

---

## Scenario 7 — [Agent] Log Config OK but File Not Ingested (Permission Denied)

**Problem:**  
Log config looks correct. Agent logs show permission denied when tailing the **app** log file. Nothing (or incomplete) in Log Explorer.

**Docs to check (source of truth):**

- [Log Collection Troubleshooting Guide — Permission issues tailing log files](https://docs.datadoghq.com/logs/guide/log-collection-troubleshooting-guide/#permission-issues-tailing-log-files)
- Related: [Setting file permissions for rotating logs](https://docs.datadoghq.com/logs/guide/setting-file-permissions-for-rotating-logs/) · [Custom log file with heightened read permissions](https://docs.datadoghq.com/logs/guide/custom-log-file-with-heightened-read-permissions/)

**Ask / check with customer:**

- [ ] Exact path being tailed?
- [ ] `logs_enabled: true` and active `conf.yaml`?
- [ ] Permission denied for that path in Agent logs?
- [ ] Source listed under Logs Agent in `status`?

**Commands (from log-collection troubleshooting guide):**

```bash
# See where the path is blocked (read + execute on parents)
namei -m /path/to/your/log/file.log

ls -l /path/to/your/log/file.log
sudo -u dd-agent cat /path/to/your/log/file.log   # optional read test

sudo datadog-agent status
sudo systemctl restart datadog-agent
```

**Technical knowledge (docs):**

- Agent does **not** run as root (`dd-agent` user)
- Needs **read** on the log file and **execute (+x)** on **parent directories**
- New files after **logrotate** can drop Agent access — set rotate/`create` perms (docs often cite `644`) or ACL

**Fix (docs order):**

1. `namei -m` on the log path — find which directory/file blocks `dd-agent`
2. Grant Agent user read + execute on folders / read on file, e.g.  
   `sudo chmod a+rx /path/to/parent/folder`  
   `sudo chmod a+r /path/to/your/log/file.log`  
   (or tighter: add `dd-agent` to the owning group / ACL per rotating-logs guide)
3. Fix **logrotate** so rotated files stay readable (`create 644 ...` or ACL — see rotating-logs docs)
4. Restart Agent → `status` Logs Agent → Log Explorer

**Note:** [Agent Permission Issues](https://docs.datadoghq.com/agent/troubleshooting/permissions/) is mainly about Agent's **own** logs under `/var/log/datadog/` and sockets — different problem from tailing **customer** app logs.

---

## Scenario 8 — [Agent] Stack Trace Split into Unreadable Single Lines (Multi-line)

**Problem:**  
Java/Python stack trace appears as dozens of separate single-line logs in Log Explorer.

**Docs to check:**

- [Agent Log Collection — multi-line](https://docs.datadoghq.com/agent/logs/advanced_log_collection/#multi-line-aggregation)
- Relevant log source conf.yaml example

**Ask / check with customer:**

- [ ] Multi-line logs? (stack trace, JSON block)
- [ ] `log_processing_rules` block present?
- [ ] Pattern for **new log line** start? (timestamp `^\d{4}-\d{2}-\d{2}`, etc.)
- [ ] Compared to docs example rule?

**Commands:**

```bash
sudo datadog-agent configcheck
sudo datadog-agent status
sudo systemctl restart datadog-agent
```

**conf.yaml example (concept):**

```yaml
logs:
  - type: file
    path: /var/log/myapp/app.log
    source: myapp
    log_processing_rules:
      - type: multi_line
        name: new_log_start_with_date
        pattern: \d{4}-\d{2}-\d{2}
```

**Technical knowledge:**

- Default = **line-by-line** parsing
- Multi-line = regex defines "start of new log event"
- Pattern must match app log format (timestamp, log level prefix, etc.)

**Fix:** Add `log_processing_rules` + `type: multi_line` + correct regex → restart → verify single event in Log Explorer

---

## Scenario 9 — [Agent] Forwarder Timeout / Packet Drop (Proxy / Firewall)

**Problem:**  
`status` shows Forwarder connection timeout. Data dropped.

**Docs to check:**

- [Agent Troubleshooting — connectivity](https://docs.datadoghq.com/agent/troubleshooting/)
- [Agent Proxy Configuration](https://docs.datadoghq.com/agent/configuration/proxy/)

**Ask / check with customer:**

- [ ] Corporate **proxy**? Firewall?
- [ ] Outbound **HTTPS 443** allowed?
- [ ] TLS inspection / SSL bump?
- [ ] Recent network policy change?
- [ ] Correct `site` + intake endpoint?

**Commands:**

```bash
sudo datadog-agent status              # Forwarder errors
sudo datadog-agent diagnose
curl -v https://datadoghq.com
nc -zv agent-intake.logs.datadoghq.com 443
sudo grep -A5 proxy /etc/datadog-agent/datadog.yaml
sudo systemctl restart datadog-agent
```

**Technical knowledge:**

- Agent → Datadog intake = **outbound HTTPS**
- Proxy environment needs `proxy:` block in `datadog.yaml`
- Distinguish site mismatch vs network block: endpoint URL + curl result

**Fix:** Verify reachability with curl/nc → proxy config or firewall rule → restart → Forwarder OK in status

---

## Scenario 10 — [Agent] Docker Container → Host DogStatsD Custom Metrics Missing

**Problem:**  
Host Agent running. App container sends custom metrics via DogStatsD (UDP 8125) but nothing in UI.

**Docs to check:**

- [DogStatsD](https://docs.datadoghq.com/developers/dogstatsd/)
- [DogStatsD Docker](https://docs.datadoghq.com/developers/dogstatsd/?tab=hostagent)

**Ask / check with customer:**

- [ ] Where does container app send statsd? (`127.0.0.1:8125`?)
- [ ] Container vs host = **different network namespace**
- [ ] DogStatsD port **8125/UDP** listening on host?
- [ ] Docker network mode? (bridge / host)

**Commands:**

```bash
sudo datadog-agent status              # DogStatsD section
ss -ulnp | grep 8125
# From container — must target HOST IP, not 127.0.0.1:
# DD_AGENT_HOST=172.17.0.1 or host.docker.internal
docker inspect <container> | grep -i ip
```

**Technical knowledge:**

- DogStatsD = **UDP 8125**
- Container's `127.0.0.1` = container itself — **not host Agent**
- Fix: send to **host bridge IP** or `--network host` or `DD_AGENT_HOST` env

**Fix:** Point app statsd to host IP (not container localhost) → verify DogStatsD in status → metric in UI

---

## Scenario 11 — [Agent] K8s DaemonSet Cannot Collect Container Logs

**Problem:**  
Agent DaemonSet deployed on K8s. App pod logs missing from Log Explorer.

**Docs to check:**

- [Agent Kubernetes — log collection](https://docs.datadoghq.com/containers/kubernetes/log/)
- [Datadog Helm chart — log config](https://docs.datadoghq.com/containers/kubernetes/installation/)

**Ask / check with customer:**

- [ ] Agent = DaemonSet on each node?
- [ ] **Volume mount** in Helm values / manifest?
- [ ] Host path `/var/log/pods` mounted into Agent container?
- [ ] `kubectl get pods -n datadog` — Running?
- [ ] RBAC / permissions for log access?

**Commands:**

```bash
kubectl get pods -n datadog
kubectl describe pod <agent-pod> -n datadog    # volume mounts
kubectl logs <agent-pod> -n datadog -c agent
kubectl exec -it <agent-pod> -n datadog -c agent -- datadog-agent status
```

**Technical knowledge:**

- K8s container logs live on **node filesystem** (`/var/log/pods`)
- Agent pod must **mount** that path to read logs
- DaemonSet = per-node Agent — missing mount = no container logs

**Fix:** Add `/var/log/pods` volume mount in Helm values / manifest → redeploy → Logs Agent in status → Log Explorer

---

## Scenario 12 — [Agent] Container/K8s Hostname Error (Agent Exits)

**Problem:**  
Agent container/Pod starts then stops. Logs show hostname error. No metrics.

```text
Error while getting hostname, exiting: unable to reliably determine the host name.
You can define one in the agent config file or in your hosts file
```

**Docs to check (source of truth):**

- [Agent Troubleshooting checklist](https://docs.datadoghq.com/agent/troubleshooting/) — first item: container stopping → hostname
- [Hostname Detection in Containers](https://docs.datadoghq.com/agent/troubleshooting/hostname_containers/)

**Ask / check with customer:**

- [ ] Docker, ECS, or Kubernetes?
- [ ] Helm / Datadog Operator / Manual DaemonSet?
- [ ] Log contains `unable to reliably determine the host name`?
- [ ] On K8s: Agent can reach Kubelet? (docs: `Successful configuration found for Kubelet`)
- [ ] Cloud AWS/GCP/Azure — metadata endpoint reachable?

**Commands:**

```bash
kubectl get pods -n datadog
kubectl logs <agent-pod> -n datadog -c agent
kubectl logs <agent-pod> -n datadog -c agent --previous
```

**Technical knowledge (from hostname_containers docs):**

On Kubernetes, hostname failure usually means Agent cannot access at least one of:

1. Kubelet API  
2. Cloud provider metadata endpoint  
3. Container runtime API  

Most common Kubelet blocker: **TLS certificate verification** (cert not signed by cluster CA / missing SAN). TLS verify is enabled by default.

**Fix (docs — match install method tab):**

1. Confirm the hostname error in logs.  
2. Follow [Accessing the Kubelet API](https://docs.datadoghq.com/agent/troubleshooting/hostname_containers/#accessing-the-kubelet-api).  
3. If TLS verification blocks Kubelet: set `tlsVerify: false` / `DD_KUBELET_TLS_VERIFY=false` on **all** Agent containers:
   - **Operator:** `spec.global.kubelet.tlsVerify: false`  
   - **Helm:** `datadog.kubelet.tlsVerify: false`  
   - **Manual DaemonSet:** env `DD_KUBELET_TLS_VERIFY=false`  
4. If non-official deploy: ensure RBAC `get` on `nodes/metrics`, `nodes/spec`, `nodes/proxy`, `nodes/stats`.  
5. If cloud metadata restricted: restore access (e.g. AWS hop limit per linked docs).  
6. Docs last-path when not using Kubelet/cloud: set `DD_HOSTNAME` (e.g. downward API `spec.nodeName`).  
7. Redeploy → Agent stays running → Metrics Explorer.  

Still unsure → [flare](https://docs.datadoghq.com/agent/troubleshooting/send_a_flare/).

---

## Scenario 13 — [Agent] K8s Pod Won't Start (Pending / CrashLoopBackOff)

**Problem:**  
Customer cannot get the Datadog Agent up in Kubernetes. Pods stuck in `Pending`, `Error`, or `CrashLoopBackOff`. No metrics.

**Docs to check:**

- [Kubernetes Agent installation](https://docs.datadoghq.com/containers/kubernetes/installation/)
- [Agent Troubleshooting](https://docs.datadoghq.com/agent/troubleshooting/)

**Ask / check with customer:**

- [ ] Namespace? Usually `datadog`
- [ ] Helm chart / Operator / DaemonSet?
- [ ] Pod status: `Pending` vs `CrashLoopBackOff` vs `Running`?
- [ ] Recent change: values, API key secret, node taints, resources?
- [ ] API key and site set (Secret / Helm values / Operator)?

**Commands:**

```bash
kubectl get pods -n datadog
kubectl describe pod <agent-pod> -n datadog    # Events: ImagePullBackOff, mount, OOM, scheduling
kubectl logs <agent-pod> -n datadog -c agent
kubectl logs <agent-pod> -n datadog -c agent --previous   # if CrashLoop
```

**Technical knowledge:**


| Status                 | Likely meaning                                  | Next look                       |
| ---------------------- | ----------------------------------------------- | ------------------------------- |
| `Pending`              | Not scheduled (resources, taints, nodeSelector) | `describe` Events               |
| `ImagePullBackOff`     | Bad image / registry auth                       | `describe` Events               |
| `CrashLoopBackOff`     | Container starts then dies                      | `logs` + `--previous`           |
| `Running` then no data | Pod up — shift to Agent config (key/site)       | `exec` + `datadog-agent status` |


- Order: **get → describe → logs**
- If logs show hostname error → **Scenario 12** ([hostname_containers](https://docs.datadoghq.com/agent/troubleshooting/hostname_containers/)) first
- Different from Scenario 11: here Agent Pod itself is unhealthy; #11 assumes Agent is up but can't read app logs

**Fix:** If hostname error in logs → Scenario 12 docs Fix. Else resolve Events from `describe`/`logs` (secret, image, resources) → Pod `Running` → checklist/`status` → Metrics Explorer. Still stuck → flare.

---

## Scenario 14 — [Integration] Postgres/MySQL Connection Failure

**Problem:**  
Integration enabled but Checks show connection error. No DB metrics.

**Docs to check:**

- [PostgreSQL integration](https://docs.datadoghq.com/integrations/postgres/) (or MySQL)
- [Integrations — conf.yaml 3 steps](https://docs.datadoghq.com/getting_started/integrations/#configuring-agent-integrations)

**Ask / check with customer:**

- [ ] Does `conf.d/postgres.d/conf.yaml` exist? (not `.example` only)
- [ ] host, port, username, password, dbname correct?
- [ ] Agent restart after config change?
- [ ] DB user has **permissions** for monitoring queries?
- [ ] Can customer log in with same credentials via `psql`?

**Commands:**

```bash
ls /etc/datadog-agent/conf.d/postgres.d/
sudo datadog-agent integration show postgres
sudo datadog-agent status              # Running Checks → postgres
sudo tail -50 /var/log/datadog/agent.log
sudo systemctl restart datadog-agent
# Customer side:
psql -h HOST -U USER -d DBNAME         # credential verify
```

**Technical knowledge:**

- Activate integration: rename `conf.yaml.example` → `conf.yaml` → params → **restart**
- Integration check = Agent TCP + auth + query to DB
- Auth error in status ≠ broken Agent — **credential/permission** layer

**Fix:** Fix conf.yaml params + DB grants (per integration doc) → restart → clean Checks in status

---

## Scenario 15 — [Integration] Points to 127.0.0.1 but Connection Refused (Redis/Nginx Bind)

**Problem:**  
Integration config uses `127.0.0.1` / localhost. Target app binds to a different interface IP only.

**Docs to check:**

- Relevant integration doc (Redis, Nginx, etc.)
- App config doc (`redis.conf`, `nginx.conf`)

**Ask / check with customer:**

- [ ] Which **IP:port** is the app listening on?
- [ ] `127.0.0.1` only vs `0.0.0.0` vs private IP?
- [ ] Agent and app on **same host**? (container vs host adds complexity)
- [ ] Check listen address with `ss` / `netstat`

**Commands:**

```bash
sudo datadog-agent integration show nginx    # or redis
sudo datadog-agent status
ss -tlnp | grep :6379                        # example: Redis port
curl http://ACTUAL_IP:PORT/status            # nginx status URL
sudo systemctl restart datadog-agent
```

**Technical knowledge:**

- `127.0.0.1` = loopback — **same network namespace only**
- App bound to `10.0.1.5:6379` only → localhost connect **fails**
- Datadog conf `host`/`port` must match app **actual** listen address

**Fix:** Confirm app listen address → match integration conf.yaml host/port → restart → status

---

## Scenario 16 — [Integration] Only `conf.yaml.example` Exists, No Integration Metrics

**Problem:**  
Customer "configured integration but no metrics." Host metrics OK.

**Docs to check:**

- [Integrations — 3 activation steps](https://docs.datadoghq.com/getting_started/integrations/#configuring-agent-integrations)

**Ask / check with customer:**

- [ ] Only `conf.yaml.example` — no `conf.yaml`?
- [ ] Required params filled?
- [ ] Restart after rename?
- [ ] Integration **listed** under Running Checks in `status`?

**Commands:**

```bash
ls /etc/datadog-agent/conf.d/<integration>.d/
sudo datadog-agent status
sudo systemctl restart datadog-agent
sudo datadog-agent configcheck
```

**Technical knowledge:**

- Agent **only loads** `conf.yaml` — `.example` is template only
- #1 integration mistake in interviews

**Fix:** Rename/copy to `conf.yaml` → fill params → restart → Checks in status

---

## Scenario 17 — [Integration] Config Edited but Agent Not Restarted

**Problem:**  
Customer filled `conf.yaml` correctly. Status still shows no check / old behavior. Host metrics OK.

**Docs to check:**

- [Agent Troubleshooting — restart after yaml](https://docs.datadoghq.com/agent/troubleshooting/)
- [Integrations — activate conf.yaml](https://docs.datadoghq.com/getting_started/integrations/#configuring-agent-integrations)

**Ask / check with customer:**

- [ ] Did you restart the Agent after saving `conf.yaml`?
- [ ] When was the last restart vs last edit?
- [ ] `conf.yaml` exists (not only `.example`)?

**Commands:**

```bash
sudo datadog-agent status              # check listed?
ls -l /etc/datadog-agent/conf.d/<name>.d/conf.yaml
sudo systemctl restart datadog-agent
sudo datadog-agent status              # re-check Running Checks
```

**Technical knowledge:**

- yaml edits are **not live** — Agent must restart (or reload where supported)
- Checklist question #7 in Agent troubleshooting docs

**Fix:** Restart Agent → confirm check under Running Checks with metric samples

---

## Scenario 18 — [Integration] Nginx/Apache Wrong Status URL

**Problem:**  
Web server integration enabled. Check fails or returns no useful metrics. Bind/IP may be fine.

**Docs to check:**

- [Nginx integration](https://docs.datadoghq.com/integrations/nginx/) (or Apache)
- Integration `conf.yaml.example` required params

**Ask / check with customer:**

- [ ] What `nginx_status_url` / stub_status URL is in `conf.yaml`?
- [ ] Can browser or `curl` hit that URL from the Agent host?
- [ ] Does nginx `stub_status` module / endpoint actually exist?
- [ ] HTTP 404 / 401 / connection refused?

**Commands:**

```bash
sudo datadog-agent status
sudo datadog-agent integration show nginx
curl -v http://127.0.0.1/nginx_status      # example — use customer's URL
sudo tail -50 /var/log/datadog/agent.log
sudo systemctl restart datadog-agent
```

**Technical knowledge:**

- Many web integrations scrape a **status endpoint**, not the homepage
- Wrong path = check error even if nginx is up for users
- Validate with `curl` from the **same host** the Agent runs on

**Fix:** Align `conf.yaml` URL with real status endpoint → curl OK → restart → clean check

---

## Scenario 19 — [Integration] Check Loaded but WARNING / Exception in Status

**Problem:**  
Integration appears under Running Checks, but warnings/errors every run. Metrics sparse or missing.

**Docs to check:**

- Specific integration troubleshooting section
- [Agent Commands — status / Running Checks](https://docs.datadoghq.com/agent/configuration/agent-commands/)

**Ask / check with customer:**

- [ ] Exact warning/exception text from `status`?
- [ ] Same error in `/var/log/datadog/agent.log`?
- [ ] Permissions (DB grants, file read, HTTP auth)?
- [ ] YAML valid (`configcheck`)?

**Commands:**

```bash
sudo datadog-agent status              # scroll to that check
sudo datadog-agent configcheck
sudo tail -100 /var/log/datadog/agent.log
sudo datadog-agent integration show <name>
```

**Technical knowledge:**

- Docs: healthy check = Running Checks **with no warnings or errors**
- "Listed" ≠ "healthy" — read the error body
- Common: auth, missing required field, timeout to service

**Fix:** Fix the specific exception (cred/grant/param) → restart if needed → status clean

---

## Scenario 20 — [Integration] AWS / Crawler Integration — Credentials Rotated (UI)

**Problem:**  
Host Agent metrics fine. AWS dashboards empty after IAM/key rotation. Customer says "Datadog is broken."

**Docs to check:**

- [AWS integration](https://docs.datadoghq.com/integrations/amazon_web_services/)
- [Integrations types — crawler vs Agent](https://docs.datadoghq.com/getting_started/integrations/)

**Ask / check with customer:**

- [ ] Host metrics still OK? (separates Agent path)
- [ ] Only AWS / cloud metrics missing?
- [ ] Recent IAM role / access key / External ID change?
- [ ] Errors on the AWS integration tile in Datadog UI?

**Commands:**

```bash
sudo datadog-agent status    # often healthy — not the fix path
# Primary work is in Datadog UI integration tile + customer AWS IAM
```

**Technical knowledge:**


| Type               | Setup                     | Troubleshoot where           |
| ------------------ | ------------------------- | ---------------------------- |
| **Agent-based**    | `conf.d/.../conf.yaml`    | Host + `status` Checks       |
| **Crawler / auth** | Credentials in Datadog UI | Integration tile + cloud IAM |


- Don't dig forever in `conf.d` for AWS CloudWatch metrics
- Scope first: "all Datadog" vs "AWS only"

**Fix:** Update AWS integration tile credentials/role → test/refresh → Metrics Summary for AWS metrics

---

## Scenario 21 — [Metrics] In Metrics Summary but Dashboard Empty (UI Filter)

**Problem:**  
Customer says "Datadog is broken." Metrics Summary shows metric reporting. Dashboard graph empty.

**Docs to check:**

- [Metrics — querying / tags](https://docs.datadoghq.com/metrics/)
- [Metrics Explorer](https://docs.datadoghq.com/metrics/explorer/)

**Ask / check with customer:**

- [ ] Exact metric name?
- [ ] Dashboard **time range**?
- [ ] Template variable / tag filter? (`env:prod` vs `env:production`)
- [ ] Data in Metrics Explorer **without filter**?
- [ ] Correct org/site?

**Commands:**

```bash
# Agent commands often NOT needed — UI layer issue
sudo datadog-agent status    # only if customer insists collection is broken
```

**Technical knowledge:**

- **Collection ≠ visibility** — tag mismatch hides data in dashboard
- Metrics Summary = "is it reporting?" / Explorer = query debug
- Same pattern as dashboard date/filter mismatches in production support

**Fix:** Align dashboard filter with actual tags OR standardize tagging → no Agent change needed

---

## Scenario 22 — [Metrics] Wrong Metric Name / Typo in Query

**Problem:**  
Customer built a dashboard. Graph empty. They insist the metric exists.

**Docs to check:**

- [Metrics Explorer](https://docs.datadoghq.com/metrics/explorer/)
- [Metrics Summary](https://docs.datadoghq.com/metrics/)

**Ask / check with customer:**

- [ ] Exact string in the query vs Metrics Summary search?
- [ ] `app.request.count` vs `app.requests.count`?
- [ ] Does Summary show an **active** metric with a similar name?

**Commands:**

```bash
# Usually UI-only — Agent optional
sudo datadog-agent status    # only if you still need to confirm collection
```

**Technical knowledge:**

- Metric names are exact strings
- Explorer autocomplete / Summary search catches typos faster than Agent debug

**Fix:** Correct metric name in dashboard → data appears (if actively reporting)

---

## Scenario 23 — [Metrics] Wrong Aggregation (avg vs sum / rate)

**Problem:**  
Metric exists and tags look right. Graph looks "empty", flat zero, or nonsensical vs customer expectation.

**Docs to check:**

- [Metrics types](https://docs.datadoghq.com/metrics/) (count, gauge, rate, histogram, distribution)
- Querying docs — rollup / as_count() / as_rate()

**Ask / check with customer:**

- [ ] Metric type in Summary (count vs gauge)?
- [ ] Query using `avg` on a count that should be `sum`?
- [ ] Comparing rate vs raw count without transforming?

**Commands:**

```bash
# UI: Metrics Explorer — try sum vs avg; change rollup
```

**Technical knowledge:**

- Gauge → often `avg`/`max`; count/rate → often `sum`
- Wrong aggregation can look like "no data" or wrong shape
- Confirm type in Metrics Summary before arguing Agent is broken

**Fix:** Match aggregation to metric type → re-query in Explorer → fix dashboard

---

## Scenario 24 — [Metrics] Time Range / Timezone Hides the Series

**Problem:**  
Metric reported earlier. Dashboard/Explorer "empty" in the window they are viewing.

**Docs to check:**

- [Metrics Explorer](https://docs.datadoghq.com/metrics/explorer/)

**Ask / check with customer:**

- [ ] Dashboard time: last 15m vs last 1d?
- [ ] When did the metric last report in Summary?
- [ ] Browser/org timezone vs when the event happened?
- [ ] Live spike already outside the current zoom?

**Commands:**

```bash
# UI: widen time range; check "last reported" in Metrics Summary
```

**Technical knowledge:**

- Collection can be fine; query window too narrow
- Same pattern as application UI date filters in production support

**Fix:** Widen range / align timezone → confirm series → keep Agent out of it if Summary shows history

---

## Scenario 25 — [Metrics] Custom Metric Never Reporting (App Not Emitting)

**Problem:**  
Customer expects `myapp.orders.processed`. Not in Metrics Summary at all. Agent host metrics OK.

**Docs to check:**

- [Custom metrics](https://docs.datadoghq.com/metrics/custom_metrics/)
- [DogStatsD](https://docs.datadoghq.com/developers/dogstatsd/)

**Ask / check with customer:**

- [ ] Is this an integration metric or **custom** from their code?
- [ ] App actually calling DogStatsD / API submit?
- [ ] `status` → DogStatsD receiving packets?
- [ ] Related to Scenario 10 (container targeting wrong host)?

**Commands:**

```bash
sudo datadog-agent status              # DogStatsD section
ss -ulnp | grep 8125
# Ask app team to confirm emit path / metric name
```

**Technical knowledge:**

- No series in Summary = often **not emitted**, not dashboard filter
- Split: Agent receiving UDP? vs app never sending? vs wrong name?
- After emit works → still verify tags for Scenario 21 style issues

**Fix:** Confirm emit path (code + DogStatsD reachability) → metric appears in Summary → then wire dashboard

---

## Escalation — Flare Package

If stuck, ask customer to run:

```bash
sudo datadog-agent flare
```

**Include in escalation:**

- Customer impact + urgency
- Scope (one host / one integration / all)
- Environment (OS, Agent version, site)
- Steps tried + `status` output + `agent.log` snippets
- Redacted config (no secrets)

**Phrase:** *"If I escalate, I include scope, impact, status, logs, config context, and next hypothesis — not just 'metrics missing.'"*

---

## 10-min Intro (~60 seconds)

> Hi, I'm Dohyun — Leah. I have about three years of experience at the intersection of software engineering and customer-facing technical support.
>
> At Kiss Products, I support two production platforms on AWS — KRS, a multi-tenant POS platform for external merchant customers, and our internal Sales Platform with SAP integration for 300+ users. My day-to-day is reproducing customer issues, tracing root cause through server logs, APIs, SQL, and configuration, and explaining findings clearly.
>
> I'm excited for this round because it's close to what I already do: clarify the issue, follow the data path, and keep the customer informed while narrowing root cause.

---

## Practice Schedule


| Day | Focus                                                 |
| --- | ----------------------------------------------------- |
| 1   | Agent 1–3 + intro                                     |
| 2   | Agent 4–8 (yaml + logs)                               |
| 3   | Agent 9–13 (network + K8s + hostname)                 |
| 4   | Integration 14–20                                     |
| 5   | Metrics 21–25 + mock 5-bug run (mix all 3 categories) |


**Per scenario (5 min):** read problem → scope questions → state hypothesis → request command → summarize fix out loud