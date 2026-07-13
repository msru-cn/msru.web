Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/container-restrictions/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/container-restrictions/#container-restrictions)Container restrictions

Palantir restricts various system calls (syscalls) from running inside our infrastructure through Secure Computing Mode (seccomp). Seccomp is a security feature in the Linux kernel that allows system call (syscall) restrictions to apply to a process or container.

Seccomp filters provide a way to allowlist the syscalls that a container can make and allows for multiple methods of handling non-allowlisted syscalls, including `LOG`, `KILL`, and `ERRNO` profiles:

*   `LOG` allows non-allowlisted syscalls to run but logs them to auditd/osquery for process auditing.
*   `KILL` terminates any process that makes a non-allowlisted syscall.
*   `ERRNO` prevents a syscall from running, but does not generate a logging event.

Seccomp allows us to reduce the attack surface of a container by preventing/logging syscalls considered to be unsafe or that can be used to escape a container. Doing so provides an additional layer of security between the container and the host as well as between containers. Below, you will find a list of the syscalls we automatically block in the Palantir platform.

If your application makes a syscall listed below, the process will be terminated and our incident response team will be notified. If your use case requires use of these syscalls, contact Palantir support for assistance.

| Linux call | Description |
| --- | --- |
| [ACCT ↗](https://man7.org/linux/man-pages/man2/acct.2.html) | Enables or disables Berkeley Software Distribution (BSD) style accounting. |
| [ADD_KEY ↗](https://man7.org/linux/man-pages/man2/add_key.2.html) | Creates a key in the kernel. If a key already exists, it will be updated. |
| [AFS_SYSCALL ↗](https://man7.org/linux/man-pages/man2/afs_syscall.2.html) | Unimplemented |
| [BPF ↗](https://man7.org/linux/man-pages/man2/bpf.2.html) | Performs operations on the Berkeley Packet Filters. |
| [CLOCK_SETTIME ↗](https://man7.org/linux/man-pages/man2/clock_settime.2.html) | Sets the time of a specified clock (clockid). |
| [CREATE_MODULE ↗](https://man7.org/linux/man-pages/man2/create_module.2.html) | Deprecated post 2.6; kernel creates a loadable module entry. |
| [DELETE_MODULE ↗](https://man7.org/linux/man-pages/man2/delete_module.2.html) | Attempts to remove an unused, loadable module by name. |
| [FANOTIFY_INIT ↗](https://man7.org/linux/man-pages/man2/fanotify_init.2.html) | Requires CAP_SYS_ADMIN; creates a fanotify group and returns a descriptor for the event queue. |
| [FINIT_MODULE ↗](https://man7.org/linux/man-pages/man2/finit_module.2.html) | Loads an ELF image into kernel space and performs sym relocation. |
| [GETPMSG ↗](https://man7.org/linux/man-pages/man2/getpmsg.2.html) | Unimplemented |
| [GET_KERNEL_SYMS ↗](https://man7.org/linux/man-pages/man2/get_kernel_syms.2.html) | Deprecated post 2.6; copies kernel syms to a table. |
| [GET_MEMPOLICY ↗](https://man7.org/linux/man-pages/man2/get_mempolicy.2.html) | Retrieves the non-uniform memory access (NUMA) policy for a thread; NUMA nodes have separate memory controller per NUMA, and crossing nodes is slow. |
| [INIT_MODULE ↗](https://man7.org/linux/man-pages/man2/init_module.2.html) | Loads an ELF image into kernel space. |
| [IOPERM ↗](https://man7.org/linux/man-pages/man2/ioperm.2.html) | Sets port input/output perms; i386 only. |
| [IOPL ↗](https://man7.org/linux/man-pages/man2/iopl.2.html) | Deprecated for ioperm i386 only; changes I/O privilege level. |
| [KCMP ↗](https://man7.org/linux/man-pages/man2/kcmp.2.html) | Compares two processes to determine if they share kernel resources (Virtual Memory, for example). |
| [KEXEC_FILE_LOAD ↗](https://man7.org/linux/man-pages/man2/kexec_file_load.2.html) | Loads a new kernel that can be executed by reboot. |
| [KEXEC_LOAD ↗](https://man7.org/linux/man-pages/man2/kexec_load.2.html) | Loads a new kernel that can later be executed by reboot. |
| [KEYCTL ↗](https://man7.org/linux/man-pages/man2/keyctl.2.html) | Manipulates the kernel key management facility from user space. |
| [LOOKUP_DCOOKIE ↗](https://man7.org/linux/man-pages/man2/lookup_dcookie.2.html) | Returns a directory entry path. |
| [MBIND ↗](https://man7.org/linux/man-pages/man2/mbind.2.html) | Set a memory policy for a memory range; used with Numa nodes. |
| [MIGRATE_PAGES ↗](https://man7.org/linux/man-pages/man2/migrate_pages.2.html) | Moves all pages in a process to another set of nodes; requires CAP_SYS_NICE. |
| [MSGRCV ↗](https://man7.org/linux/man-pages/man2/msgrcv.2.html) | System V message queue operations. |
| [MOUNT ↗](https://man7.org/linux/man-pages/man2/mount.2.html) | Mounts a filesystem; requires CAP_SYS_ADMIN. |
| [MOVE_PAGES ↗](https://man7.org/linux/man-pages/man2/move_pages.2.html) | Moves individual pages of a process to another node. |
| [NAME_TO_HANDLE_AT ↗](https://man7.org/linux/man-pages/man2/name_to_handle_at.2.html) | Obtains a handle for a pathname and opens file via a handle. |
| [NFSSERVCTL ↗](https://man7.org/linux/man-pages/man2/nfsservctl.2.html) | Deprecated as of Linux 3.1; interface to the Kernel NFS Daemon. |
| [OPEN_BY_HANDLE_AT ↗](https://man7.org/linux/man-pages/man2/open_by_handle_at.2.html) | Similar to NAME_TO_HANDLE_AT; instead of returning the handle, opens the file using the handle. |
| [PERF_EVENT_OPEN ↗](https://man7.org/linux/man-pages/man2/perf_event_open.2.html) | Sets up performance monitoring. |
| [PIVOT_ROOT ↗](https://man7.org/linux/man-pages/man2/pivot_root.2.html) | Changes the root mount; requires CAP_SYS_ADMIN. |
| [PKEY_ALLOC ↗](https://man7.org/linux/man-pages/man2/pkey_alloc.2.html) | Allocates or frees a protection key. |
| [PKEY_FREE ↗](https://man7.org/linux/man-pages/man2/pkey_free.2.html) | Allocates or frees a protection key. |
| [PKEY_MPROTECT ↗](https://man7.org/linux/man-pages/man2/pkey_mprotect.2.html) | Sets protection on a region of memory. |
| [PROCESS_VM_READV ↗](https://man7.org/linux/man-pages/man2/process_vm_readv.2.html) | Transfers data between process address spaces. |
| [PROCESS_VM_WRITEV ↗](https://man7.org/linux/man-pages/man2/process_vm_writev.2.html) | Transfers data between process address spaces. |
| [PUTPMSG ↗](https://man7.org/linux/man-pages/man2/putpmsg.2.html) | Unimplemented |
| [QUERY_MODULE ↗](https://man7.org/linux/man-pages/man2/query_module.2.html) | Deprecated in 2.6; queries the kernel for various information pertaining to modules. |
| [QUOTACTL ↗](https://man7.org/linux/man-pages/man2/quotactl.2.html) | Manipulates disk quotes; requires CAP_SYS_ADMIN. |
| [REBOOT ↗](https://man7.org/linux/man-pages/man2/reboot.2.html) | Reboots or enables the reboot keystroke (CTRL-ALT-DEL). |
| [REQUEST_KEY ↗](https://man7.org/linux/man-pages/man2/request_key.2.html) | Requests a key form the kernel's key management facility. |
| [SECURITY ↗](https://man7.org/linux/man-pages/man2/security.2.html) | Unimplemented |
| [SETDOMAINNAME ↗](https://man7.org/linux/man-pages/man2/setdomainname.2.html) | Gets or sets NIS domain name; requires CAP_SYS_ADMIN. |
| [SETHOSTNAME ↗](https://man7.org/linux/man-pages/man2/sethostname.2.html) | Gets or sets the hostname; requires CAP_SYS_ADMIN. |
| [SETNS ↗](https://man7.org/linux/man-pages/man2/setns.2.html) | Reallocates a thread with a name space; must have CAP_SYS_ADMIN in the desired namespace. |
| [SETSID ↗](https://man7.org/linux/man-pages/man2/setsid.2.html) | Creates a session and sets the process group ID. |
| [SETTIMEOFDAY ↗](https://man7.org/linux/man-pages/man2/settimeofday.2.html) | Sets the time of day and timezone/CAP_SYS_TIME. |
| [SET_MEMPOLICY ↗](https://man7.org/linux/man-pages/man2/set_mempolicy.2.html) | Sets default NUMA memory policy. |
| [SWAPOFF ↗](https://man7.org/linux/man-pages/man2/swapoff.2.html) | Disables swap on a file/device; requires CAP_SYS_ADMIN. |
| [SWAPON ↗](https://man7.org/linux/man-pages/man2/swapon.2.html) | Enables swap on a file/device; requires CAP_SYS_ADMIN. |
| [SYSFS ↗](https://man7.org/linux/man-pages/man2/sysfs.2.html) | Gets filesystem type information. |
| [SYSLOG ↗](https://man7.org/linux/man-pages/man2/syslog.2.html) | Reads and/or clears kernel message ring buffer. |
| [TUXCALL ↗](https://man7.org/linux/man-pages/man2/tuxcall.2.html) | Unimplemented |
| [UMOUNT2 ↗](https://man7.org/linux/man-pages/man2/umount2.2.html) | Umounts a filesystem; requires CAP_SYS_ADMIN. |
| [UNSHARE ↗](https://man7.org/linux/man-pages/man2/unshare.2.html) | Disassociates parts of the process execution context; some, but not all, options require CAP_SYS_ADMIN. |
| [USELIB ↗](https://man7.org/linux/man-pages/man2/uselib.2.html) | Deprecated; loads a shared library to be used by calling process. |
| [USERFAULTFD ↗](https://man7.org/linux/man-pages/man2/userfaultfd.2.html) | Creates a file descriptor for handling page faults in user space. |
| [USTAT ↗](https://man7.org/linux/man-pages/man2/ustat.2.html) | Deprecated; gives filesystem stats. |
| [VHANGUP ↗](https://man7.org/linux/man-pages/man2/vhangup.2.html) | Virtually disconnects a terminal; requires CAP_SYS_TTY_CONFIG. |
| [VSERVER ↗](https://man7.org/linux/man-pages/man2/vserver.2.html) | Unimplemented |
| [_SYSCTL ↗](https://man7.org/linux/man-pages/man2/_sysctl.2.html) | Deprecated; reads and writes system parameters. |

[← PREVIOUS Container governance](https://www.palantir.com/docs/foundry/administration/container-governance/)

[NEXT Connected hubs →](https://www.palantir.com/docs/foundry/administration/connected-hubs/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

This website uses cookies and other tracking technologies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners. If we have detected an opt-out preference signal then it will be honored. Further information is available in our [Cookie Policy](https://www.palantir.com/cookie-statement/)

Accept Cookies Reject All

Do Not Sell or Share My Personal Information

![Image 1: Palantir Logo](https://cdn.cookielaw.org/logos/356f77a2-eb53-4146-ba66-df614f266841/018ec371-84cc-7226-bc6b-40b41ec0280c/1204dd5e-843b-4e03-8e5d-3eaeae33575c/Palantir_Logo_300dpi.png)

## Do Not Sell or Share My Personal Data

Opt-Out Request Honored

## Do Not Sell or Share My Personal Data

*   ### Your Privacy 
*   ### Strictly Necessary Cookies 
*   ### Targeting Cookies 

#### Your Privacy

When you visit our website, we store cookies on your browser to collect information. The information collected might relate to you, your preferences or your device, and is mostly used to make the site work as you expect it to and to provide a more personalized web experience. However, you can choose not to allow certain types of cookies, which may impact your experience of the site and the services we are able to offer. Click on the different category headings to find out more and change our default settings according to your preference. You cannot opt-out of our First Party Strictly Necessary Cookies as they are deployed in order to ensure the proper functioning of our website (such as prompting the cookie banner and remembering your settings, to log into your account, to redirect you when you log out, etc.). For more information about the First and Third Party Cookies used please follow this link. 

[More information](https://www.palantir.com/cookie-statement/)

#### Strictly Necessary Cookies

Always Active

These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.

Cookies Details

#### Targeting Cookies

- [x] Targeting Cookies 

Under US privacy laws, you have the right to opt-out of the sale or sharing of your personal information to third parties. These cookies collect information for analytics and to personalize your experience with targeted ads. You may exercise your right to opt out of the sale or sharing of personal information by using this toggle switch. If you opt out we will not be able to offer you personalized ads and will not hand over your personal information to any third parties. Additionally, you may contact our legal department for further clarification about your rights as a California consumer by using this Exercise My Rights link.If you have enabled privacy controls on your browser (such as a plugin), we have to take that as a valid request to opt-out. Therefore we would not be able to track your activity through the web. This may affect our ability to personalize ads according to your preferences.

*   ##### Performance Cookies

- [x] Switch Label label  
These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.

*   ##### Targeting Cookies

- [x] Switch Label label  
These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.

Cookies Details

### Cookie List

Consent Leg.Interest

- [x] checkbox label label

- [x] checkbox label label

- [x] checkbox label label

Clear
*   - [x] checkbox label label 

Apply Cancel

Confirm My Choices

Reject All Allow All

