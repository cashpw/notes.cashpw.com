+++
title = "Open systems interconnection model"
author = ["Cash Prokop-Weaver"]
date = 2023-03-17T08:23:00-07:00
lastmod = 2023-08-02T11:51:23-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "582ee39e-23ab-4c19-a8a9-5b6ec13ecaf6"
+++

> The Open Systems Interconnection model (OSI model) is a conceptual model, originally conceived as the 7 layer onion skin architecture by Jack Houldsworth of ICL that 'provides a common basis for the coordination of [ISO] standards development for the purpose of systems interconnection'. In the OSI reference model, the communications between a computing system are split into seven different abstraction layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.
>
> (<a href="#citeproc_bib_item_1">“OSI Model” 2023</a>)


## Layers {#layers}

From bottom-to-top:

1.  [Physical layer (OSI model)](#physical-layer--osi-model)
2.  [Data link layer (OSI model)](#data-link-layer--osi-model)
3.  [Network layer (OSI model)](#network-layer--osi-model)
4.  [Transport layer (OSI model)](#transport-layer--osi-model)
5.  [Session layer (OSI model)](#session-layer--osi-model)
6.  [Presentation layer (OSI model)](#presentation-layer--osi-model)
7.  [Application layer (OSI model)](#application-layer--osi-model)


### Application layer (OSI model) {#application-layer--osi-model}

> The application layer is used by end-user software such as web browsers and email clients. It provides protocols that allow software to send and receive information and present meaningful data to users. A few examples of application layer protocols are the Hypertext Transfer Protocol (HTTP), File Transfer Protocol (FTP), Post Office Protocol (POP), Simple Mail Transfer Protocol (SMTP), and Domain Name System (DNS).
>
> (<a href="#citeproc_bib_item_2">“What Is OSI Model | 7 Layers Explained | Imperva” n.d.</a>)


### Presentation layer (OSI model) {#presentation-layer--osi-model}

> The presentation layer handles protocol conversion, data encryption, data decryption, data compression, data decompression, incompatibility of data representation between operating systems, and graphic commands. The presentation layer transforms data into the form that the application layer accepts, to be sent across a network.
>
> (<a href="#citeproc_bib_item_1">“OSI Model” 2023</a>)


### Session layer (OSI model) {#session-layer--osi-model}

> The session layer creates the setup, controls the connections, and ends the teardown, between two or more computers, which is called a "session" [[Session]({{< relref "session.md" >}})]. Since DNS and other Name Resolution Protocols operate in this part of the layer, common functions of the session layer include user logon (establishment), name lookup (management), and user logoff (termination) functions. Including this matter, authentication protocols are also built into most client software, such as FTP Client and NFS Client for Microsoft Networks. Therefore, the session layer establishes, manages and terminates the connections between the local and remote application. The session layer also provides for full-duplex [[Full-duplex]({{< relref "duplex.md#full-duplex" >}})], half-duplex [[Half-duplex]({{< relref "duplex.md#half-duplex" >}})], or simplex [[Simplex]({{< relref "simplex.md" >}})] operation, and establishes procedures for checkpointing, suspending, restarting, and terminating a session between two related streams of data, such as an audio and a video stream in a web-conferencing application. Therefore, the session layer is commonly implemented explicitly in application environments that use remote procedure calls [[Remote procedure call]({{< relref "remote_procedure_call.md" >}})].
>
> (<a href="#citeproc_bib_item_1">“OSI Model” 2023</a>)


### Transport layer (OSI model) {#transport-layer--osi-model}

> The transport layer provides the functional and procedural means of transferring variable-length data sequences from a source host to a destination host from one application to another across a network, while maintaining the quality-of-service functions.
>
> (<a href="#citeproc_bib_item_1">“OSI Model” 2023</a>)


### Network layer (OSI model) {#network-layer--osi-model}

> The network layer provides the functional and procedural means of transferring packets from one node to another connected in "different networks". A network is a medium to which many nodes can be connected, on which every node has an address and which permits nodes connected to it to transfer messages to other nodes connected to it by merely providing the content of a message and the address of the destination node and letting the network find the way to deliver the message to the destination node, possibly routing it through intermediate nodes. If the message is too large to be transmitted from one node to another on the data link layer between those nodes, the network may implement message delivery by splitting the message into several fragments at one node, sending the fragments independently, and reassembling the fragments at another node. It may, but does not need to, report delivery errors.
>
> Message delivery at the network layer is not necessarily guaranteed to be reliable; a network layer protocol may provide reliable message delivery, but it need not do so.
>
> (<a href="#citeproc_bib_item_1">“OSI Model” 2023</a>)


### Data link layer (OSI model) {#data-link-layer--osi-model}

> The data link layer provides node-to-node data transfer—a link between two directly connected nodes. It detects and possibly corrects errors that may occur in the physical layer. It defines the protocol to establish and terminate a connection between two physically connected devices. It also defines the protocol for flow control between them.
>
> (<a href="#citeproc_bib_item_1">“OSI Model” 2023</a>)


### Physical layer (OSI model) {#physical-layer--osi-model}

> The physical layer is responsible for the transmission and reception of unstructured raw data between a device, such as a network interface controller, Ethernet hub, or network switch, and a physical transmission medium. It converts the digital bits into electrical, radio, or optical signals.
>
> (<a href="#citeproc_bib_item_1">“OSI Model” 2023</a>)


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 112.50   | 2023-10-15T01:22:35Z |
| back     | 2.20 | 3   | 6.00     | 2023-07-29T03:41:13Z |

[OSI model]({{< relref "open_systems_interconnection_model.md" >}})


#### Back {#back}

A conceptual model for abstract network connections.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“OSI Model” 2023</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 92.36    | 2023-09-12T01:47:14Z |
| back     | 2.50 | 1   | 1.00     | 2023-07-09T00:20:59Z |

[Physical layer (OSI model)](#physical-layer--osi-model)


#### Back {#back}

Layer responsible for transmission and reception of unstructured raw data between a device (e.g. network swtich) and a physical transmission medium (e.g. fiber optic cable).


#### Source {#source}

(<a href="#citeproc_bib_item_1">“OSI Model” 2023</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 6   | 70.06    | 2023-08-11T15:38:34Z |
| 1        | 2.20 | 6   | 64.76    | 2023-09-11T09:13:37Z |
| 2        | 2.50 | 5   | 36.46    | 2023-09-07T02:05:40Z |
| 3        | 2.50 | 0   | 0.00     | 2023-07-19T13:40:56Z |
| 4        | 2.5  | -1  | 0        | 2023-03-18T14:57:36Z |
| 5        | 2.5  | -1  | 0        | 2023-03-18T14:57:36Z |
| 6        | 2.5  | -1  | 0        | 2023-03-18T14:57:36Z |

[OSI model]({{< relref "open_systems_interconnection_model.md" >}}) layers

1.  {{[Physical layer (OSI model)](#physical-layer--osi-model)}@0}
2.  {{[Data link layer (OSI model)](#data-link-layer--osi-model)}@1}
3.  {{[Network layer (OSI model)](#network-layer--osi-model)}@2}
4.  {{[Transport layer (OSI model)](#transport-layer--osi-model)}@3}
5.  {{[Session layer (OSI model)](#session-layer--osi-model)}@4}
6.  {{[Presentation layer (OSI model)](#presentation-layer--osi-model)}@5}
7.  {{[Application layer (OSI model)](#application-layer--osi-model)}@6}


### Normal {#normal}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.5  | -1  | 0        | 2023-03-18T14:58:45Z |

[OSI model]({{< relref "open_systems_interconnection_model.md" >}}) layers

1.  [Physical layer (OSI model)](#physical-layer--osi-model)
2.  [Data link layer (OSI model)](#data-link-layer--osi-model)
3.  [Network layer (OSI model)](#network-layer--osi-model)
4.  [Transport layer (OSI model)](#transport-layer--osi-model)
5.  [Session layer (OSI model)](#session-layer--osi-model)
6.  [Presentation layer (OSI model)](#presentation-layer--osi-model)
7.  [Application layer (OSI model)](#application-layer--osi-model)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 5   | 40.23    | 2023-08-05T21:42:38Z |
| back     | 2.50 | 3   | 6.00     | 2023-07-24T13:40:58Z |

[Data link layer (OSI model)](#data-link-layer--osi-model)


#### Back {#back}

This layer provides node-to-node data transfer (e.g. network switch to network switch)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“OSI Model” 2023</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 6   | 56.17    | 2023-09-05T17:08:07Z |
| back     | 2.50 | 4   | 15.74    | 2023-08-11T08:35:38Z |

[Network layer (OSI model)](#network-layer--osi-model)


#### Back {#back}

This layer provides functional and procedural means of transferring packets from one node to another connected in "different networks".


#### Source {#source}

(<a href="#citeproc_bib_item_1">“OSI Model” 2023</a>)


### Compare and contrast {#compare-and-contrast}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 6   | 84.13    | 2023-10-19T17:22:50Z |

Nodes and hosts in the [OSI model]({{< relref "open_systems_interconnection_model.md" >}})


#### Back {#back}

-   Nodes: The devices which make up the network itself (switches, routers, etc) which may also include hosts
-   Hosts: Devices which use the network to communicate with each other


#### Source {#source}

(<a href="#citeproc_bib_item_1">“OSI Model” 2023</a>) and [Bard]({{< relref "bard.md" >}})


### Compare and contrast {#compare-and-contrast}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 1   | 1.00     | 2023-08-01T00:01:40Z |

[Transport layer (OSI model)](#transport-layer--osi-model) and [Network layer (OSI model)](#network-layer--osi-model)


#### Back {#back}

-   [Transport layer (OSI model)](#transport-layer--osi-model): Provides a **reliable** connection between two hosts; also flow and congestion control
-   [Network layer (OSI model)](#network-layer--osi-model): Provides _a_ connection between two hosts


#### Source {#source}

(<a href="#citeproc_bib_item_1">“OSI Model” 2023</a>) and [Bard]({{< relref "bard.md" >}})


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 6   | 59.26    | 2023-08-29T07:48:09Z |
| back     | 2.35 | 4   | 13.19    | 2023-08-14T05:59:33Z |

[Session layer (OSI model)](#session-layer--osi-model)


#### Back {#back}

This layer handles setup, teardown, and controls the connections between two or more computers.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“OSI Model” 2023</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.75 | 6   | 37.31    | 2023-09-01T10:21:59Z |
| back     | 2.50 | 1   | 1.00     | 2023-07-16T14:14:57Z |

[Presentation layer (OSI model)](#presentation-layer--osi-model)


#### Back {#back}

The [...] handles protocol conversion, data encryption, data decryption, data compression, data decompression, incompatibility of data formats between operating systems, and graphic commands. The [...] transforms data into the form that the application layer accepts, to be sent across a network.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“OSI Model” 2023</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.60 | 6   | 26.22    | 2023-08-12T19:05:20Z |
| back     | 2.50 | 2   | 2.00     | 2023-07-06T19:24:44Z |

[Application layer (OSI model)](#application-layer--osi-model)


#### Back {#back}

Layer which provides protocols that allow software to send and receive information across the network (e.g. HTTP, FTP, SMTP).


#### Source {#source}

(<a href="#citeproc_bib_item_2">“What Is OSI Model | 7 Layers Explained | Imperva” n.d.</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“OSI Model.” 2023. <i>Wikipedia</i>, March. <a href="https://en.wikipedia.org/w/index.php?title=OSI_model&oldid=1145147911">https://en.wikipedia.org/w/index.php?title=OSI_model&#38;oldid=1145147911</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“What Is OSI Model | 7 Layers Explained | Imperva.” n.d. <i>Learning Center</i>. Accessed March 20, 2023. <a href="https://www.imperva.com/learn/application-security/osi-model/">https://www.imperva.com/learn/application-security/osi-model/</a>.</div>
</div>
