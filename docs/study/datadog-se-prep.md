# Datadog Sales Engineer 준비 가이드

**목표:** Datadog Korea Sales Engineer (2+ years 요건)
**타겟 지원 시기:** 2026년 10월
**현재 배경:** Jenkins, GitLab, AWS 기본 배포 경험

---

## 현직자 벤치마크 (Jisu Jang 경로)

Jisu Jang (Datadog SE, Aug 2025~):
- 경력: POSCO PM 1년 → Wrtn Technologies Platform Engineer 1.9년 → Datadog SE
- Wrtn에서 한 것: Kubernetes (EKS), AWS, CI/CD, SRE/Observability, Platform Engineering
- 총 3년 경력으로 입사

---

## 핵심 개념 (기초)

### Observability란?

"지금 서비스가 잘 돌아가고 있나?" 를 실시간으로 보는 것.

Datadog이 보는 세 가지:

**Metrics (메트릭)** — 숫자로 된 상태
- 예: "서버 CPU 90% 사용 중", "초당 요청 1000개"

**Logs (로그)** — 서버가 기록하는 일기
- 예: "오전 9:32 에러 발생: user_id 123 not found"

**Traces (트레이스)** — 요청이 어디서 느려졌는지 추적
- 예: "고객 버튼 클릭 → 응답 3초 → DB 쿼리에서 2.8초 소요"

### Kubernetes (K8s)란?

서버 여러 개를 자동으로 관리하는 도구.
- 앱이 죽으면 자동으로 재시작
- 트래픽 많아지면 자동으로 서버 증설

### Docker란?

앱 + 실행에 필요한 모든 것을 하나의 박스(컨테이너)에 담는 도구.
어디서든 똑같이 실행됨.

### Datadog + Kubernetes 연결

수십 개 서버가 돌아갈 때 문제 발생 위치를 Datadog으로 한눈에 파악.

---

## 실습 로드맵 (4단계)

### Step 1: Docker 설치 (1일)

```bash
# Mac 기준
brew install --cask docker
```

Docker Desktop 실행 후 확인:
```bash
docker --version
# Docker version 24.x.x 나오면 성공
```

---

### Step 2: Minikube 설치 (1일)

Minikube = 맥북 안에 작은 Kubernetes 환경 만들기

```bash
brew install minikube
minikube start
```

확인:
```bash
minikube status
# Running 나오면 성공
```

---

### Step 3: 간단한 앱 배포 (2-3일)

기존 포트폴리오 사이트나 간단한 Node.js 앱을 Kubernetes에 배포.

기본 구조:
```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:latest
        ports:
        - containerPort: 3000
```

---

### Step 4: Datadog 연결 (2-3일)

1. [app.datadoghq.com](https://app.datadoghq.com) 무료 계정 생성 (14일 트라이얼)
2. Minikube에 Datadog 에이전트 설치:

```bash
helm repo add datadog https://helm.datadoghq.com
helm install datadog-agent datadog/datadog \
  --set datadog.apiKey=<YOUR_API_KEY> \
  --set datadog.logs.enabled=true \
  --set datadog.apm.enabled=true
```

3. Datadog 대시보드에서 확인:
   - Infrastructure → Kubernetes 탭
   - Logs → 실시간 로그
   - APM → 트레이스

---

## 4개월 공부 플랜

| 시기 | 목표 | 내용 |
|------|------|------|
| Month 1 | 개념 + Docker | Observability 3가지 이해, Docker 실습 |
| Month 2 | Kubernetes | Minikube 환경, 앱 배포, 기본 K8s 명령어 |
| Month 3 | Datadog 실습 | Datadog 연결, APM/Logs/Metrics 직접 설정 |
| Month 4 | 데모 준비 | 인터뷰 데모 시나리오 준비, 기술 인터뷰 대비 |

---

## 인터뷰에서 말할 수 있어야 하는 것

> "Minikube로 K8s 환경 구성하고, 거기에 Datadog 에이전트 붙여서 APM이랑 로그 모니터링 직접 세팅해봤어요. 회사에서 Jenkins/GitLab/AWS를 쓰는데, 개인적으로 CloudWatch랑 Datadog 비교해보면서 옵저버빌리티 차이를 이해했어요."

---

## 무료 학습 리소스

- [Datadog Learning Center](https://learn.datadoghq.com) — 공식 무료 코스
- Datadog Fundamentals 자격증 (무료)
- Kubernetes 공식 튜토리얼: [kubernetes.io/docs/tutorials](https://kubernetes.io/docs/tutorials/)
- Docker 공식 가이드: [docs.docker.com/get-started](https://docs.docker.com/get-started/)
