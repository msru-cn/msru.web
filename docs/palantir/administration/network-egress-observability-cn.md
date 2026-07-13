Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/network-egress-observability/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#network-egress-observability)网络 egress 可观测性

## [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#observability-in-control-panel)Control Panel 中的可观测性

在[网络 egress 策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#network-egress-overview)页面中，**Observability** 标签页包含每个导入此策略的 data connection 源的网络 egress 策略使用日志和指标。

在源选择器中选择一个 data connection 源，查看使用该策略创建的网络 egress 日志和指标。

![Image 4: Control Panel 中的网络 egress 日志](https://www.palantir.com/docs/resources/foundry/administration/network-egress-cp-observability.png)

## [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#observability-in-builds)Builds 中的可观测性

网络 egress 日志包含在构建遥测中。要仅查看网络 egress 日志，添加建议的 `Network egress logs` 过滤器。

![Image 5: 网络 egress 日志过滤器](https://www.palantir.com/docs/resources/foundry/administration/network-egress-logs-filter.png)

## [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#log-definition)日志定义

来自不同来源的网络 egress 日志可帮助诊断所有 Foundry 网络层方法的连接问题，如 [direct connection](https://www.palantir.com/docs/foundry/administration/configure-egress/#direct-connection-egress-policies) 或 [agent proxy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) 策略。

### [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#connectivity-sidecar-origin)`connectivity-sidecar` 来源

`connectivity-sidecar` 将连接路由到用于透明代理路由的适当网络 egress 策略。

#### [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#egress-log)Egress 日志

Egress 日志包含以下参数：

*   `connection_id`：连接的唯一标识符。
*   `response_flags`：响应可以是成功或失败。
*   `bytes_sent`：从 sidecar 发送到出站代理的字节数。
*   `bytes_received`：sidecar 从出站代理接收的字节数。
*   `duration_ms`：连接持续时间（毫秒）。
*   `destination_port`：连接的目标端口。
*   `metadata`：
    *   `network_policy`：尝试 egress 时使用的网络 egress 策略的资源标识符。
    *   `source`：尝试 egress 的 data connection 源的资源标识符。
    *   `network_type`：类型可以是 direct 或 agent proxy。
    *   `network_resources`：如果是 agent proxy 网络 egress 策略，则为 data connection agent ID。

![Image 6: 网络 egress 日志](https://www.palantir.com/docs/resources/foundry/administration/network-egress-log.png)

#### [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#dns-query-log)DNS 查询日志

DNS 查询日志包含以下参数：

*   `answer_count`：DNS 响应中返回的 DNS 记录数。
*   `connection_id`：连接的唯一标识符。
*   `parse_status`：解析传入 DNS 消息的结果。
*   `pod_name`：发起 DNS 请求的 pod 名称。
*   `query_class`：请求的 DNS 资源记录类别。几乎总是 1（Internet）。
*   `query_name`：DNS 查询中的主机名。作为 **unsafe parameter** 记录。
*   `query_type`：请求的 DNS 资源记录类型（例如，1 表示 IPv4，2 表示 NS）。
*   `response_code`：DNS 响应代码。
*   `return_message`：`response_code` 的人类可读字符串版本。
*   `sources`：与 DNS 查询关联的源 ID。

### [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#egress-proxy-origin)`egress-proxy` 来源

`egress-proxy` 是处理显式代理连接的服务。

### [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#on-prem-proxy-origin)`on-prem-proxy` 来源

`on-prem-proxy` 是在 Foundry 中运行的服务，在使用 [agent 网络 egress 策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies)时将流量代理到 [data connection agent](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agents)。

### [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#agent-proxy-origin)`agent-proxy` 来源

`agent-proxy` 是在私有网络中的 [data connection agent](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agents) 上运行的服务。它为 [agent 网络 egress 策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies)打开到最终目的地的连接。

## [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#direct-connection)Direct connection

Direct connection egress 有两种可能的结果：成功或失败。

### [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#successful-egress)成功的 egress

流量成功从 Palantir 平台 egress。连接仍可能因目标端的 ingress 防火墙、认证或 TLS 握手问题而失败，但这被视为成功的 egress，因为流量已离开 Palantir 平台。

### [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#failed-egress)失败的 egress

流量未能从 Palantir 平台 egress。

后续步骤：

*   验证尝试 egress 的地址和端口是否存在，并确保 Palantir 平台的 direct connected 网络可以解析它们。
*   如果流量仍然无法 egress，联系 Palantir Support。

## [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#agent-proxy)Agent proxy

Agent proxy 有两种可能的结果：成功的 egress 或失败的 egress。

### [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#successful-egress-1)成功的 egress

流量成功被代理到策略的 data connection agents 之一。连接仍可能因目标端的 ingress 防火墙、认证或 TLS 握手问题而失败，但这被视为成功的 egress，因为流量已被代理到支持的 data connection agent。

### [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#failed-egress-1)失败的 egress

流量未能从 Palantir 平台 egress。

后续步骤：

*   验证尝试 egress 的地址和端口在 data connection 源中是否有对应的网络 egress 策略被导入。
*   确保 agent proxy 策略的所有支持 data connection agents 都是健康的。
*   如果流量仍然无法代理到 data connection agent，联系 Palantir Support。

## [](https://www.palantir.com/docs/foundry/administration/network-egress-observability/#limits)限制

网络 egress 可观测性仅提供给使用 TCP 级别 allowlisting 的网络 egress 策略。

[← 上一篇 Configure egress](https://www.palantir.com/docs/foundry/administration/configure-egress/)

[下一篇 Configure private link egress →](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress/)
