+++
title = "Open systems interconnection model"
author = ["Cash Prokop-Weaver"]
date = 2023-03-17T08:23:00-07:00
lastmod = 2023-12-05T14:33:13-08:00
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
> (NO_ITEM_DATA:WhatOSIModelLayersExplainedImperva)


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


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“OSI Model.” 2023. <i>Wikipedia</i>, March. <a href="https://en.wikipedia.org/w/index.php?title=OSI_model&oldid=1145147911">https://en.wikipedia.org/w/index.php?title=OSI_model&#38;oldid=1145147911</a>.</div>
  <div class="csl-entry">NO_ITEM_DATA:WhatOSIModelLayersExplainedImperva</div>
</div>
