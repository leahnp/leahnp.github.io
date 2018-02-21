---
title:  "What’s Going on with Kubernetes Cluster Federation?"
date:   2018-02-18 19:23:10
categories: [Kubernetes]
tags: [Kubernetes]
---

I’ve been involved in Kubernetes for a year and a half now. I have been drinking from a fire hydrant, trying to understand all things Kubernetes - the community direction, the proposals, the current solutions, the good, the bad and the ugly. With so many Special Interest Groups (SIGs) and such a broad community iterating so rapidly, I have come to realize this scope of project is hard for most individuals to have a deep understanding in every area. Considering this, I have tried to keep a “broad, but shallow” understanding of the project by attending the weekly community meeting and Kubecon. But recently I wanted to get a “deep” understanding of a specific part of the Kubernetes ecosystem: Cluster Federation. 

Federation was always an interesting concept to me, but I had never explored beyond the initial concept of: “it’s a magical way to control multiple kubernetes clusters - potentially in multiple cloud providers and on bare metal and move workloads throughout the cluster federation”. 

As a disclaimer I should say, I do not consider myself a Federation “expert”. The following information is the result of about three weeks of experimenting with the Federation project, attending SIG meetings, watching old conference videos and reading blogs. I would encourage you to do your own research and get involved with the SIG Multicluster - they are super awesome and inviting in my experience. 

Over the last 18 months I felt the community went from super stoked about Federation to radio silence. So what happened? 

![what happened to federation kubernetes](https://i.imgflip.com/24z0fc.jpg)

I decided to go on an exploration into the past, present and future of the project formerly known as Ubernetes to try and understand the current state.

### The Community

To begin I wanted to go back in time, to understand the initial pitch and subsequent hype around the concept. I focused on conference videos and blogs from 2016 or later. These resources captured what I learned to be the “v1” phase of the Federation project. <iframe width="560" height="315" src="https://www.youtube.com/embed/pq9lbkmxpS8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Also reading through the initial proposal will give you an idea of the federation problem space and scope: [Kubernetes Cluster Federation (previously nicknamed "Ubernetes"): Requirements Analysis and Product Proposal](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/multicluster/federation.md).

After wrapping my head around the origins of the project, I started learning about the massive changes and shifts that happened around the project in 2017. Here is a list of the highlights:
- The Federation project was incubated in the kubernetes/kubernetes project and released with Kubernetes v1.3.
- Ubernetes project renamed to Federation (more functionally descriptive)
- Federation moved from Kubernetes/Kubernetes to Kubernetes/Federation in v1.9
- The SIG Federation renamed to Multicluster
- Kubefed introduced: A CLI tool to spin up Federation control plane
- “V1” of the federation problem was deemed “problematic” (my probably over-simplified understanding of why being: v1 was a monolithic “Kubernetes on Kubernetes” API, too closely resembling the single-cluster Kubernetes API, forward work would create a tangential and confusing meta orchestration layer)
- “V2” conceptualized with more of a microservices approach, offering components that facilitate federation with a multicluster approach
- SIG Multicluster released new projects: Cluster registry & KubeMCI

So looking back - what happened? Federation was proposed with an agenda in line with Kubernetes in general - abstracting the infrastructure away and creating a world where anyone can deploy anything, anywhere! Ironically in this pursuit of simplicity, Kubernetes (and Federation) have the potential to turn into a hulking monster of complexity. When Federation tried to essentially layer Kubernetes on Kubernetes - the potential for creating a two-headed monster was too real for many people in the community to accept. As a result, the Federation team went back to the drawing board to imagine a more loosely coupled, flexible solution. 

Kelsey Hightower’s keynote on Federation from Kubecon in April 2017 captures a more toned-down approach to Federation:
<iframe width="560" height="315" src="https://www.youtube.com/embed/kwOvOLnFYck" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

To get a more detailed outline of the current state of SIG Multicluster check out this document: [SIG Multicluster - Project Status](https://docs.google.com/document/d/1V8NuRqDoZwugf5Tz8K-SFEJbQ4CCiCTZbU8UBzu8euk/edit?ts=5a7e1151#)

### Trying the Project

Not only did I want to understand the community dynamics and politics behind the project, I also want to learn how the project works. My preferred method of learning - dive in! I used several tutorials and projects as learning tools, each illuminating a different part of the Federation project for me. Depending on your familiarity with Kubernetes, I suggest completing the following tutorials, once or several times. If you are anything like me, new concepts will start to make sense with each pass.

I started with Kelsey Hightower’s [“Cluster Federation (the Hard Way)”](https://github.com/kelseyhightower/kubernetes-cluster-federation). Kelsey’s “hardway” tutorials are a great way to pop open the hood and poke around. He provides instruction to spin up a cluster Federation without using tools like Kubefed, which can obfuscate some of what is going on behind the scenes. 

After doing Federation “the hardway” I followed the K8s community guide to setting up a cluster Federation using [kubefed](https://kubernetes.io/docs/tasks/federation/set-up-cluster-federation-kubefed/).

After these exercises I still one outstanding curiosity: to experiment with multi-cloud Federation. I had the best luck setting up multicloud Kubernetes Cluster Federation with this tutorial: [Pac-Man Application On Federated Kubernetes Cluster Across Multiple Public Cloud providers](https://github.com/font/k8s-example-apps/blob/master/pacman-nodejs-app/docs/pacman-nodejs-app-federated-multicloud.md).

I’m not gonna lie...I was feeling pretty godlike successfully coordinating multiple clusters on AWS, Azure and Google Cloud! My goal of seeing a cluster federation working across multiple clouds was realized. I have to extend a big thanks to the SIG Multicluster members for answering quite a few questions and recommending great resources. I am excited to see how the “V2” Federation API develops this year.

If you’re interested in learning more, I suggest joining their Slack channel, [attending a SIG meeting](https://github.com/kubernetes/community/tree/master/sig-multicluster) or joining their mailing list.







