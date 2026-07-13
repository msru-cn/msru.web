Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/container-restrictions/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/container-restrictions/#container-restrictions)容器限制

Palantir 通过 Secure Computing Mode (seccomp) 限制各种系统调用 (syscalls) 在我们的基础设施内运行。Seccomp 是 Linux 内核中的安全功能，允许对进程或容器应用系统调用限制。

Seccomp 过滤器提供了一种 allowlist 容器可以进行的 syscalls 的方式，并允许多种处理非 allowlisted syscalls 的方法，包括 `LOG`、`KILL` 和 `ERRNO` 配置文件：

*   `LOG` 允许非 allowlisted syscalls 运行但将其记录到 auditd/osquery 以进行进程审计。
*   `KILL` 终止任何进行非 allowlisted syscall 的进程。
*   `ERRNO` 阻止 syscall 运行，但不生成日志事件。

Seccomp 允许我们通过阻止/记录被认为不安全或可用于容器逃逸的 syscalls 来减少容器的攻击面。这样做在容器和主机之间以及容器之间提供了额外的安全层。以下是我们在 Palantir 平台中自动阻止的 syscalls 列表。

如果你的应用进行了下列任一 syscall，进程将被终止，我们的事件响应团队将收到通知。如果你的用例需要使用这些 syscalls，请联系 Palantir support 获取帮助。

| Linux 调用 | 描述 |
| --- | --- |
| [ACCT ↗](https://man7.org/linux/man-pages/man2/acct.2.html) | 启用或禁用 Berkeley Software Distribution (BSD) 风格的记账。 |
| [ADD_KEY ↗](https://man7.org/linux/man-pages/man2/add_key.2.html) | 在内核中创建密钥。如果密钥已存在，将被更新。 |
| [AFS_SYSCALL ↗](https://man7.org/linux/man-pages/man2/afs_syscall.2.html) | 未实现 |
| [BPF ↗](https://man7.org/linux/man-pages/man2/bpf.2.html) | 对 Berkeley Packet Filters 执行操作。 |
| [CLOCK_SETTIME ↗](https://man7.org/linux/man-pages/man2/clock_settime.2.html) | 设置指定时钟 (clockid) 的时间。 |
| [CREATE_MODULE ↗](https://man7.org/linux/man-pages/man2/create_module.2.html) | 2.6 后弃用；内核创建可加载模块条目。 |
| [DELETE_MODULE ↗](https://man7.org/linux/man-pages/man2/delete_module.2.html) | 尝试按名称移除未使用的可加载模块。 |
| [FANOTIFY_INIT ↗](https://man7.org/linux/man-pages/man2/fanotify_init.2.html) | 需要 CAP_SYS_ADMIN；创建 fanotify 组并返回事件队列的描述符。 |
| [FINIT_MODULE ↗](https://man7.org/linux/man-pages/man2/finit_module.2.html) | 将 ELF 镜像加载到内核空间并执行符号重定位。 |
| [GETPMSG ↗](https://man7.org/linux/man-pages/man2/getpmsg.2.html) | 未实现 |
| [GET_KERNEL_SYMS ↗](https://man7.org/linux/man-pages/man2/get_kernel_syms.2.html) | 2.6 后弃用；将内核符号复制到表中。 |
| [GET_MEMPOLICY ↗](https://man7.org/linux/man-pages/man2/get_mempolicy.2.html) | 检索线程的非一致内存访问 (NUMA) 策略。 |
| [INIT_MODULE ↗](https://man7.org/linux/man-pages/man2/init_module.2.html) | 将 ELF 镜像加载到内核空间。 |
| [IOPERM ↗](https://man7.org/linux/man-pages/man2/ioperm.2.html) | 设置端口输入/输出权限；仅限 i386。 |
| [IOPL ↗](https://man7.org/linux/man-pages/man2/iopl.2.html) | 仅限 i386 的 ioperm 弃用；更改 I/O 权限级别。 |
| [KCMP ↗](https://man7.org/linux/man-pages/man2/kcmp.2.html) | 比较两个进程以确定它们是否共享内核资源。 |
| [KEXEC_FILE_LOAD ↗](https://man7.org/linux/man-pages/man2/kexec_file_load.2.html) | 加载可通过重启执行的新内核。 |
| [KEXEC_LOAD ↗](https://man7.org/linux/man-pages/man2/kexec_load.2.html) | 加载可稍后通过重启执行的新内核。 |
| [KEYCTL ↗](https://man7.org/linux/man-pages/man2/keyctl.2.html) | 从用户空间操作内核密钥管理设施。 |
| [LOOKUP_DCOOKIE ↗](https://man7.org/linux/man-pages/man2/lookup_dcookie.2.html) | 返回目录条目路径。 |
| [MBIND ↗](https://man7.org/linux/man-pages/man2/mbind.2.html) | 为内存范围设置内存策略；与 Numa 节点一起使用。 |
| [MIGRATE_PAGES ↗](https://man7.org/linux/man-pages/man2/migrate_pages.2.html) | 将进程中的所有页面移动到另一组节点；需要 CAP_SYS_NICE。 |
| [MSGRCV ↗](https://man7.org/linux/man-pages/man2/msgrcv.2.html) | System V 消息队列操作。 |
| [MOUNT ↗](https://man7.org/linux/man-pages/man2/mount.2.html) | 挂载文件系统；需要 CAP_SYS_ADMIN。 |
| [MOVE_PAGES ↗](https://man7.org/linux/man-pages/man2/move_pages.2.html) | 将进程的单个页面移动到另一个节点。 |
| [NAME_TO_HANDLE_AT ↗](https://man7.org/linux/man-pages/man2/name_to_handle_at.2.html) | 获取路径名的句柄并通过句柄打开文件。 |
| [NFSSERVCTL ↗](https://man7.org/linux/man-pages/man2/nfsservctl.2.html) | Linux 3.1 起弃用；内核 NFS 守护进程接口。 |
| [OPEN_BY_HANDLE_AT ↗](https://man7.org/linux/man-pages/man2/open_by_handle_at.2.html) | 类似 NAME_TO_HANDLE_AT；使用句柄打开文件而非返回句柄。 |
| [PERF_EVENT_OPEN ↗](https://man7.org/linux/man-pages/man2/perf_event_open.2.html) | 设置性能监控。 |
| [PIVOT_ROOT ↗](https://man7.org/linux/man-pages/man2/pivot_root.2.html) | 更改根挂载；需要 CAP_SYS_ADMIN。 |
| [PKEY_ALLOC ↗](https://man7.org/linux/man-pages/man2/pkey_alloc.2.html) | 分配或释放保护密钥。 |
| [PKEY_FREE ↗](https://man7.org/linux/man-pages/man2/pkey_free.2.html) | 分配或释放保护密钥。 |
| [PKEY_MPROTECT ↗](https://man7.org/linux/man-pages/man2/pkey_mprotect.2.html) | 在内存区域设置保护。 |
| [PROCESS_VM_READV ↗](https://man7.org/linux/man-pages/man2/process_vm_readv.2.html) | 在进程地址空间之间传输数据。 |
| [PROCESS_VM_WRITEV ↗](https://man7.org/linux/man-pages/man2/process_vm_writev.2.html) | 在进程地址空间之间传输数据。 |
| [PUTPMSG ↗](https://man7.org/linux/man-pages/man2/putpmsg.2.html) | 未实现 |
| [QUERY_MODULE ↗](https://man7.org/linux/man-pages/man2/query_module.2.html) | 2.6 中弃用；查询内核的各种模块相关信息。 |
| [QUOTACTL ↗](https://man7.org/linux/man-pages/man2/quotactl.2.html) | 操作磁盘配额；需要 CAP_SYS_ADMIN。 |
| [REBOOT ↗](https://man7.org/linux/man-pages/man2/reboot.2.html) | 重启或启用重启按键 (CTRL-ALT-DEL)。 |
| [REQUEST_KEY ↗](https://man7.org/linux/man-pages/man2/request_key.2.html) | 从内核密钥管理设施请求密钥。 |
| [SECURITY ↗](https://man7.org/linux/man-pages/man2/security.2.html) | 未实现 |
| [SETDOMAINNAME ↗](https://man7.org/linux/man-pages/man2/setdomainname.2.html) | 获取或设置 NIS 域名；需要 CAP_SYS_ADMIN。 |
| [SETHOSTNAME ↗](https://man7.org/linux/man-pages/man2/sethostname.2.html) | 获取或设置主机名；需要 CAP_SYS_ADMIN。 |
| [SETNS ↗](https://man7.org/linux/man-pages/man2/setns.2.html) | 用命名空间重新分配线程；需要在目标命名空间中具有 CAP_SYS_ADMIN。 |
| [SETSID ↗](https://man7.org/linux/man-pages/man2/setsid.2.html) | 创建会话并设置进程组 ID。 |
| [SETTIMEOFDAY ↗](https://man7.org/linux/man-pages/man2/settimeofday.2.html) | 设置时间和时区/CAP_SYS_TIME。 |
| [SET_MEMPOLICY ↗](https://man7.org/linux/man-pages/man2/set_mempolicy.2.html) | 设置默认 NUMA 内存策略。 |
| [SWAPOFF ↗](https://man7.org/linux/man-pages/man2/swapoff.2.html) | 禁用文件/设备上的交换；需要 CAP_SYS_ADMIN。 |
| [SWAPON ↗](https://man7.org/linux/man-pages/man2/swapon.2.html) | 启用文件/设备上的交换；需要 CAP_SYS_ADMIN。 |
| [SYSFS ↗](https://man7.org/linux/man-pages/man2/sysfs.2.html) | 获取文件系统类型信息。 |
| [SYSLOG ↗](https://man7.org/linux/man-pages/man2/syslog.2.html) | 读取和/或清除内核消息环形缓冲区。 |
| [TUXCALL ↗](https://man7.org/linux/man-pages/man2/tuxcall.2.html) | 未实现 |
| [UMOUNT2 ↗](https://man7.org/linux/man-pages/man2/umount2.2.html) | 卸载文件系统；需要 CAP_SYS_ADMIN。 |
| [UNSHARE ↗](https://man7.org/linux/man-pages/man2/unshare.2.html) | 解除进程执行上下文的关联；部分选项需要 CAP_SYS_ADMIN。 |
| [USELIB ↗](https://man7.org/linux/man-pages/man2/uselib.2.html) | 已弃用；加载供调用进程使用的共享库。 |
| [USERFAULTFD ↗](https://man7.org/linux/man-pages/man2/userfaultfd.2.html) | 创建用于在用户空间处理页错误的文件描述符。 |
| [USTAT ↗](https://man7.org/linux/man-pages/man2/ustat.2.html) | 已弃用；提供文件系统统计信息。 |
| [VHANGUP ↗](https://man7.org/linux/man-pages/man2/vhangup.2.html) | 虚拟断开终端；需要 CAP_SYS_TTY_CONFIG。 |
| [VSERVER ↗](https://man7.org/linux/man-pages/man2/vserver.2.html) | 未实现 |
| [_SYSCTL ↗](https://man7.org/linux/man-pages/man2/_sysctl.2.html) | 已弃用；读写系统参数。 |

[← 上一篇 Container governance](https://www.palantir.com/docs/foundry/administration/container-governance/)

[下一篇 Connected hubs →](https://www.palantir.com/docs/foundry/administration/connected-hubs/)
