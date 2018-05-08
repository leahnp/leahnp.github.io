Basic Linux Concepts

#### What is Linux?

Linux is a computer operating system. An operating system is a software layer that coordinates between you computer’s hardware (CPU, memory and devices like keyboards and mice) and the applications you use (web browsers, word editors or games). Other common operating systems are Windows or Mac OXS. 

#### Is “Linux” the same as “Unix”?

UNIX is an operating system developed in the 1960’s. Today the term “Unix” is used to describe any operating system that conforms to the Unix standard, meaning the core operating system operates the same as the original Unix operating system. “Unix-like” is a general term, with no official definition, used to describe software that behaves similar to Unix. Linux and MAC OSX are both “unix-like”.

#### What is a “Linux Distribution”?

“Linux distros” are different flavors of Linux. Ubuntu and Fedora are popular distributions. Distributions come with different “package managers”, capabilities and strengths. Some distributions are better for certain scenarios or workloads. Be aware each distribution has different tools and functions - if you are trying to accomplish something be sure to include the distro in your google search, ie: “How to install vim on debian linux”.

#### What is a “package manager”?

A package manager will assist with keeping track of what programs are installed on your computer, make it easy to install new programs and upgrade programs.

#### And what is the Linux “kernel”?

Not popcorn related (unfortunately), all Linux distributions use the same Linux kernel. The kernel is the lowest level of software that interfaces with your computer's hardware. One of the kernel’s main jobs is the manage resources like CPU, memory and IPC [“Inter-process communication”](https://en.wikipedia.org/wiki/Inter-process_communication). There are three common types of kernels: microkernel, monolithic kernel and hybrid kernel. 

A **microkernel** really just cares about CPU, memory and IPC and can complete all its functions in “supervisor mode” (also known as kernel mode). Everything else your computer needs to function is considered an “accessory” and is run in “user mode” (more about that below). This type of kernel makes it harder for the applications to interact with your computers hardware, but in the end it is more secure.

A **monolithic** kernel deals with managing resources in addition to device drivers, file system management, and system server calls. Monolithic kernels deal with all these concerns in “supervisor mode” which allows for more direct communication with the hardware but that benefit makes monolithic kernels less secure than microkernels. 

![kernel image](https://i.stack.imgur.com/gV8hn.png)

The Linux kernel is an open-source monolithic Unix-like computer operating system kernel (hey, we should understand all those words by now).

#### Why do people and companies use Linux?

Linux is open source software - unlike Windows or Mac OXS. This means the code for Linux is open to the public for people or companies to modify or extend to meet their requirements.

Linux is a free and flexible operating system, there are many kinds of Linux distributions which offer different bundles of tools and capabilities. Lots of governments run Linux on their computer - it's free! Computers hosting websites or applications commonly run use Linux, as do computers tasked with automated testing or serving media.
