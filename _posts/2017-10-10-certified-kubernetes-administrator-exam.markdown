---
title:  "Certified Kubernetes Administrator Exam (CKA)"
date:   2017-10-10 19:24:27
categories: [Kubernetes]
tags: [Kubernetes]
---

I’ve never been an “exam type”. Attending a liberal arts school like Sarah Lawrence College, then moving into a freelance motorcycle stunt riding career, I have found my comfort zone in creating big projects to prove my skills. So when my team at Samsung floated the idea of taking the brand-new [“Certified Kubernetes Administrator”](https://www.cncf.io/certification/expert/) exam, I was intimidated - to say the least!

According to the Cloud Native Computing Foundation website, “The Certified Kubernetes Administrator (CKA) program was created by the Cloud Native Computing Foundation (CNCF), in collaboration with The Linux Foundation, to help develop the Kubernetes ecosystem.” 

I started looking into what the exam would cover, which was exactly...everything. Here are the topics: Application Lifecycle Management, Installation, Configuration & Validation, Core Concepts, Networking, Scheduling, Security, Cluster Maintenance, Logging / Monitoring, Storage and Troubleshooting.

At this point I had been working with Kubernetes for a year, but I just didn’t feel confident I had deep knowledge in all of these categories. Despite my uncertainty, this was an excellent opportunity to study up and test my knowledge.

#### How I prepared:

- I started using VIM full time (the test is entirely terminal based and you have to be QUICK!). 
- I read the [Kubernetes documentation](https://kubernetes.io/docs/home/) and did the corresponding tutorials. 
- Keep in mind the cluster's might be deployed in a way you aren't familiar with - learn the [Kubernetes control plane fundementals](https://kubernetes.io/docs/concepts/overview/components/#master-components) so you can quickly get your footing in the exam clusters.
- I brushed up on etcd and [etcdctl](https://github.com/coreos/etcd/tree/master/etcdctl).
- I studied with my team - this was great to soak up other people's expertise in certain areas.

Finally, I'd done all I could to prepare and it was exam day. The exam was capped at 3 hours (I took the full 3 hours) and I was being watched through my video camera by a moderator (no drinks, notes or other people in the room). Throughout the test you are given tasks and various clusters in different states to perform these tasks on. It was actually pretty cool to work on and troubleshoot real clusters. 

#### Tips for during the exam:
- Keep notes on each question, document things that didn't work or half worked and if you finished the question with confidence.
- Time cap each question, move on if you hit the time cap.
- When you get through all the questions, go back through your notes and work on the questions you didn't quite finished.
- Check out the official breakdown of how each "problem category" is weighted. For example, if you think the question you are working on falls under "Core Concepts" (worth 19%) prioritize it over a "Logging / Monitoring" question (worth 5%).
- Factor in one short break to stretch, drink water or use the restroom.

I'm not going to say it was a breeze, but in the end and on my second try, I did pass the exam. I certainly would not have guessed a year ago, when I was still in bootcamp, that I would be a "Certified Kubernetes Administrator" by the following summer! 

Special thanks to my awesome teammates at Samsung Cloud Native Computing Team for their support.

![CKA badge](https://www.cncf.io/wp-content/uploads/2017/07/logo_cka_whitetext-2.png)