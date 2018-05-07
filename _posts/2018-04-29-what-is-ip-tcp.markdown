---
title:  "What is TCP/IP?"
date:   2018-04-29 03:16:11
categories: [Devops]
tags: [Devops]
---

## Introduction to TCP/IP

#### What is TCP/IP?
Transmission Control Protocol (TCP) and Internet Protocol (IP) are two separate computer network protocols. Together they create a “suite” of protocols known as the Internet Protocol Suite (ICP) which is the conceptual model and set of communications protocols used to create the Internet. More plainly put, these are a set of rules that help the internet move data between computers. There are two concepts that can help you understand how the internet moves data quickly but also precisely - **"stateless" and "stateful"**. 

Stateless means systems can do each job without worrying if the jobs before were successful. It's like if you were working the window at a fastfood restaurant and you just grabbed a bag of food and threw it out the window not caring if the right person got the right bag of food. You could work as fast as the bags of food came to you. "Stateful" on the other hand means you need to be responsible for the whole lifecycle of the job. Did it get to where it was routed and did it arrive in the correct state? So, is each person getting the bag of food they ordered - you can see how that might slow down your work. 

**TCP** defines how applications communication across a network, how to break down a message into smaller “packets” for expedited transmission and how to reassemble them at the destination address. 

**IP** defines how to address and route each packet to the right destination. 

Put TCP and IP together you can systematically move data from one computer to another - the internet!

There is a four layer “TCP/IP Model” that describes the responsibilities of moving data between computers. The layers are application, transport, internet and data link. The two computers communicating are in a client/server relationship, the client requests a service or resource (for instance your computer is the client when you turn on your browser and type in Reddit.com) and a server who will return that data (cat memes from reddit). 

Each layer in the TCP/IP model include more protocols to help each layer fulfill its responsibility. 

The **application layer** is responsible for standardizing data exchange. At this layer websites use Hypertext Transfer Protocol (HTTP) to transfer web pages. This layer might also use File Transfer Protocol (FTP) to move files or Simple Mail Transfer Protocol (SMTP) for email.

The **transport layer** is responsible for end to end communication across the network (the request of the cat meme to the cat memes arrival at the destination). This layer uses TCP generally, but User Datagram Protocol (UDP) is another option that is a bit faster and used for applications like online games.

The application layer and the transport layer communicate via “ports”. A port is a “logical connection place” and your computer has physical ports, that allow external devices like keyboards and USBs to be connected and virtual ports. We are talking about these virtual ports. Information flowing to your computer will be routed through a port. Data will show up using your computer's IP address and it will be processed into something known and useful through the port. The application can assign specific protocols to specific ports, so the transport layer knows what to expect. There are some known ports that are assigned by the Internet Assigned Numbers Authority, like 80 for HTTP or 25 for email routing. 

In the transport layer, TCP will also break the data up into “packets”. TCP attaches some “header” data to each packet so the receiving computer can reassemble the data and the sending computer can confirm all the data arrived without any mishaps. Back to our drive through window metaphor, the transport layer is stateful, it needs to keep track of each message and confirm it was received correctly. While being stateful is more of a burden, this part of the internet is what ensures the entire message reaches its destination.

The packet header will also contain the source and destination IP address. Every computer has a unique IP address. An IP address (which is either a 32-bit numeric address (IPv4) is written in decimal as four numbers separated by periods or a 128-bit IP address (IPv6) written in hexadecimal and separated by colons. The IP addresses are mapped to our human readable ‘domain names’ with DNS. DNS is responsible for storing what IP address goes to what domain name. Let’s break down DNS a bit.

**DNS (Domain Name System)** is a massive network of servers that catalogs every domain and IP address on the internet, including registration information, as well as their relation to other domains and web hosts. “DNS software” is a program that is installed on a web server and used to facilitate the transference of data related to the domain name system. 

A **“name server”** is a web server that has DNS software installed on it, particularly a server that is managed by a web host that is specifically designated for managing the domain names that are associated with all of the hosting provider's accounts. Name servers are often called DNS servers as well. [Source](http://www.pcnames.com/articles/the-difference-between-dns-and-name-servers)

Now that we understand a bit of how these computers are finding each other with DNS let's talk about the next layer, the Network Layer or “Internet Layer”. This layer is responsible for trying to send each packet as efficiently as possible. The internet layer does not care if packets get seperated or even if they get lost. It is the responsibility of TCP to check the packets all arrived and if not - try sending them again. The internet layer is really a series of connected router computers that work together to push each packet - in any order - closer to its destination. This layer is stateless, the internet will try to send anything, but it won't keep track of success or failures. This is the stateless part of the internet that allows data to keep moving quickly. It's fast and efficient, but might lose data, that's where TCP is responsible for resending the lost packets.

Finally we hit the **“Data Link”** layer. Here some protocol like Ethernet or WiFi will be responsible from getting the data from the Internet to your physical computer. Ethernet and WiFI create a **Local Area Network** (LAN). These are unique because a central router will act as the sole entrance/exit point to the internet. This router will be assigned that unique IP address that lets other computers find it. The router will be responsible for its own DNS, which will help it route traffic to the specific computer in the LAN, using the computer’s **media access control address** (MAC address). A unique MAC address is given to your computer when it's manufactured. Your computer’s IP address can change if your computer moves locations or networks, but its MAC address will not. You might think of it like your social security number will also be the same, but your home address will change if you move.

There we have it! TCP/IP can help us understand the fundamentals of how the internet works. Each layer and protocol contain more vertical knowledge you can deep dive into, I hope these fundamentals give you enough context to move forward!


