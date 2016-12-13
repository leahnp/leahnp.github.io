---
title:  "Capstone Project: Centaur App"
date:   2016-12-02 11:04:23
categories: [Ada]
tags: [Ada]
---
### Ada Developers Academy Capstone Project


Goal: Create an application that will record the motion data from my horse moving and identify if she was walking, trotting or cantering. 


![Example of walk, trot, canter](http://i.imgur.com/PAGEohk.gif)


After programming for 6 months, capstone time rolled around at Ada. I had this idea of a device that would track workouts on horseback - kind of like a horse fitbit.


![My Assistant](http://i.imgur.com/q91R9dp.jpg)


The 'first generation' hardware solution was a raspberry pi and accelerometer/gyroscope. A fun solution, but not 'user friendly' as you can see it taped to my saddle here:


![raspberry pi on a horse](http://i.imgur.com/qnEnMFB.jpg)


I quickly moved onto version 2.0 - my phone. An easy solution using the android accelerometer function. I wrote a front end to capture the data points, then load them to the backend for the algorithm to process. The app was written in Node.js and Javascript.


I used Python and a machine learning library called scikit learn to process the data. After training a k-Nearest Neighbor algorithm I could quickly and accurately categorize thousands of data points.


![data visualization](http://i.imgur.com/lEfHpri.gif)


After the algorithm had done its work I could display time spent in each gait to the client. 


![The app](http://i.imgur.com/xLjwVuC.gif)


This project was an amazing, immersive experience, truly the icing on the cake that was my time in the classroom at Ada Developers Academy. I can't believe in such a short time I learned the skills to take on a project like this and look forward to expanding my skills even more during my internship at Samsung SDSA on the Cloud Native Computing Team. 


![Finished project!](http://i.imgur.com/TfdN0eW.jpg)