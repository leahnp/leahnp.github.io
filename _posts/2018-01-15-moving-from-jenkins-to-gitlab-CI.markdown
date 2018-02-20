---
title:  "How Gitlab helped me realize I love CI/CD"
date:   2018-01-15 03:24:27
categories: [Kubernetes]
tags: [Kubernetes]
---

### Moving from Jenkins CI to Gitlab CI

You folks probably know I am newish to tech (just hit my one year anniversary fulltime in the industry) and in the beginning the whole idea of [CI](https://en.wikipedia.org/wiki/Continuous_integration)/[CD](https://en.wikipedia.org/wiki/Continuous_delivery) seemed like this big, mysterious, robo-conveyor belt moving things from my personal computer to the cloud. But how!?!? But why!?!!? But what!?!!

The mystery was not aided by the fact we were using Jenkins (in my humble opinion). Now, I don’t have a ton of context in this CI/CD world, so I’m not going to knock Jenkins from a conceptual or technological level; but from a UI/UX level...they aren’t bending over backwards to make their users feel happy or comfortable. As a new user to Jenkins I found myself constantly lost or forgetting “where things were” and wondering why the primary info I desired: why the job failed, was so hard to dig up!

I just figured; I’m a newb and CI/CD is a complicated product - so all CI/CD platforms must be this way. Then about 9 months into my career, after I was just starting to get competent with Jenkins, my team decided to swap to Gitlab CI. After a brief period of self-pity, that I would have to ramp up on another system, I really dug in and took on some big tickets to help me understand Gitlab’s CI/CD offering. I learned a ton from porting CI/CD pipelines from Jenkins to Gitlab. This allowed me to see the parallels, similarities and dissimilarities between the two products.

Thing first thing I had to wrap my head around was that Gitlab was both a “web based git repository manager” like Github AND a continuous integration & continuous delivery platform, like Jenkins. If you want to use Gitlab CI/CD you do must create an adjacent repo, you can’t just trigger CI/CD from Github (or where ever your code lives). There are tools to sync Github and Gitlab, if you don’t want to completely delete your project from Github.

Even before I had experience with Gitlab, I noticed the UI/UX is FRESH! The interface is modern and very intuitive, I was able to “find” things quickly and remember the workflow after a long weekend.  Another cool aspect for our team is that Gitlab is Cloud Native out of the box. Running CI/CD in Kubernetes and containers is a first-class citizen. This creates a fluid experience for teams running CI in containers, compared to relying on a potentially fragile chain of plugins on Jenkins.

### Basic Concepts

Here is a breakdown of the primary Gitlab CI/CD concepts:

#### **Pipeline**: a group of jobs that get executed in stages
- Defined in the .gitlab-ci.yml
- Triggered by events: usually git push; alternatives include scheduling & API hooks
- All jobs in a stage get executed in parallel
- If a job fails, the next stage is usually not started

#### **Job**:  scoped work necessary to complete a pipeline
- Defined in the .gitlab-ci.yml

#### **Runner**: the application that is used to run your jobs and send the results back to GitLab
- Written in Go
- Allows multiple jobs to run concurrently 
- You select the runner that is right for your CI/CD environment

#### **Executor**: modules used to run your builds in different scenarios (we use Kubernetes)
- Calls the Kubernetes cluster API and creates a new Pod for each GitLab CI job

The follow image depicts a "pipeline" with each individual "job". Each section is a "stage". The green check indicated the job passed.
![gitlab ci pipeline display](https://docs.gitlab.com/ee/ci/img/pipelines.png)

The next image is a different view of two pipelines. You can see all the pipeline metadata from this view and also restart or stop pipelines. 
![gitlab ci pipelines](https://docs.gitlab.com/ee/ci/img/pipelines_index.png)

### Conclusion

I absolutely had some fear after my experience with the complexities of Jenkins to learn a new CI/CD platform. In the end ramping up in Gitlab was a very painless...dare I say an enjoyable experience. Since I started using Gitlab I learned a bit about the company and really respect their [community](https://about.gitlab.com/community/) standards, openness and transparency - in addition to their proactive stance on building a platform that people really want. The frictionless nature of Gitlab has allowed me to iterate more quickly, experiment with testing or deployment concepts and really understand what is happening in my CI/CD environment. 

Oh and I realized CI/CD is freaking awesome! It's amazing what a difference a frictionless environment can make to creativity and productivity. 