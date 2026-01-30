---
title: Network Enumeration with Nmap
description: Learn how to use the popular network scanning tool, Nmap. Walk through a Hack the Box Academy module with me to learn the basics.
---

# Network Enumeration with Nmap

This document organizes my notes for the HTB academy module entitled "Network Enumeration with Nmap".

## Host and Port Scanning

Information needed at this stage:

- Open ports and their services (including metadata, e.g. version)
- Host OS

Nmap port states:

- `open` => connection successfully established
- `closed` => `RST` (i.e. "reset") packet sent by host
- `filtered` => no response or error code received; cannot _definitively_ determine state
- `unfiltered` => only a valid state for a `TCP`/`ACK` scan; port is accessible, but cannot _definitively_ determine state
- `open|filtered` => no response (i.e. potentially packet/firewall filtered)
- `closed|filtered` => only possible in `IP` ID idle scan

By default, `nmap` scans the top 1000 ports with either the `TCP SYN` scan (`-sS`, if root) or the `TCP` connect scan (`-sT`, otherwise). This behavior is because superuser permissions are required to create raw TCP packets.

Handy port control options:

- `-F`: only scan the top 100 ports
- `--top-ports=X`: scan the top X ports
- `-p-`: scan all ports
- `-p80,443,21,22`: manually specify each
- `-p25-1000`: specify by range

For fine tuned analysis, you can activate the `--packet-trace` flag, which tells `nmap` to log every packet sent. Combining this with the disabling of other scan types (ICMP connect scan with `-Pn`, DNS resolution with `-n`, and ARP ping scan with `--disable-arp-ping`) gives us a nice, clear picture of what is going on in the `SYN` scan.

For example:

```bash
gradyl16@htb[/htb]$ sudo nmap 10.129.2.28 -p 21 --packet-trace -Pn -n --disable-arp-ping
```

```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-15 15:39 CEST
SENT (0.0429s) TCP 10.10.14.2:63090 > 10.129.2.28:21 S ttl=56 id=57322 iplen=44  seq=1699105818 win=1024 <mss 1460>
RCVD (0.0573s) TCP 10.129.2.28:21 > 10.10.14.2:63090 RA ttl=64 id=0 iplen=40  seq=0 win=0
Nmap scan report for 10.11.1.28
Host is up (0.014s latency).

PORT   STATE  SERVICE
21/tcp closed ftp
MAC Address: DE:AD:00:00:BE:EF (Intel Corporate)

Nmap done: 1 IP address (1 host up) scanned in 0.07 seconds
```

### Connect Scan

The `TCP` connect scan gives us the most accurate information as it attempts to establish a complete connection. However, the accuracy comes at a cost; it is the least stealthy scanning technique. Fully established connections are often logged and flagged by EDR (endpoint detection and response) systems, IDS (intrusion detection systems), and IPS (intrusion prevention systems). Note that the "half scan" (`SYN` scan) can also be detected by more advanced IDS/IPS, so do not use it blindly. Lastly, the connect scan is obviously slow since we are waiting on the target for response packets before proceeding.

However, it's still useful in the aforementioned accuracy, and it tends to be less disruptive. This can be attributed to the "normal" behavior, rather than sending `SYN` packets and just abandoning ship (with the `SYN` scan, for example). Further, it is helpful in cases where there is a firewall that prevents incoming packets, but allows outgoing ones. The connect scan bypasses the firewall and can accurately determine the state of the ports in these cases.

### Filtered Ports

Ports can be filtered for many reasons, usually relating to firewall rules. Packets can either be _dropped_, or _rejected_. When a packet is dropped `Nmap` receives no response, and will retry 10 times by default (`--max-retries=10`). If a packet is dropped, scans take much longer. If it is rejected, we are receiving a reply and so the scan can be completed much more quickly. Usually, what happens in practice is that a reply will be sent that indicates that the port is unreachable; this gives us a strong indication that the packet was rejected by the firewall.

### Discovering Open UDP Ports

Some system administrators forget to filter the `UDP` ports along with the `TCP` ones. Since UDP is connectionless, we receive no acknowledgements from the targets. Thus, the scans take much longer than their `TCP` counterparts. A `UDP` scan can be performed with the `-sU` command line option.

Here is an example `UDP` scan:

```bash
gradyl16@htb[/htb]$ sudo nmap 10.129.2.28 -F -sU
```

```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-15 16:01 CEST
Nmap scan report for 10.129.2.28
Host is up (0.059s latency).
Not shown: 95 closed ports
PORT     STATE         SERVICE
68/udp   open|filtered dhcpc
137/udp  open          netbios-ns
138/udp  open|filtered netbios-dgm
631/udp  open|filtered ipp
5353/udp open          zeroconf
MAC Address: DE:AD:00:00:BE:EF (Intel Corporate)

Nmap done: 1 IP address (1 host up) scanned in 98.07 seconds
```

Since `Nmap` sends empty datagrams, we often do not receive a response. If the port is indeed open, we only get a response if the application is configured to do so. For any `ICMP` response we receive that is not `error code 3` (port unreachable), `Nmap` marks the port as `open|filtered`.

Another handy option for port scanning is `-sV`. This flag tells `Nmap` to find versioning info on the service exposed by that port.

### Activity Section

Here, I give my commands used to pass the knowledge check questions.

First, we are asked to find all TCP ports on the target, submitting the total number as the answer. Even though we are trying to be comprehensive, it might be simple to get the answer. So, instead of starting with a full scan, we will do a quick one initially. I like to always save output as a rule of thumb; you never know when you'll need those scan results! My naming convention is: `<target-description>_<scan-type>_scan`. Since this is an HTB Academy module designed around nmap and we are performing an initials can, I call it `nmap-module_initial_scan`. Simple enough.

```bash
sudo nmap <TARGET_IP> -oA nmap-module_initial_scan
```

```
Starting Nmap 7.80 ( https://nmap.org ) at 2025-06-21 15:16 CDT
Nmap scan report for 10.129.2.49
Host is up (0.041s latency).
Not shown: 993 closed ports
PORT      STATE SERVICE
22/tcp    open  ssh
80/tcp    open  http
110/tcp   open  pop3
139/tcp   open  netbios-ssn
143/tcp   open  imap
445/tcp   open  microsoft-ds
31337/tcp open  Elite

Nmap done: 1 IP address (1 host up) scanned in 0.85 seconds
```

As we can see, we see a variety of popular ports are almost immediately shown as open. Since it took so little time and we are more concerned with accuracy over speed, let's conduct a full scan. Since it's still a `SYN` scan, it should be quick enough.

```bash
sudo nmap -p- <TARGET_IP> -oA nmap-module_full_scan
```

```
Nmap scan report for 10.129.2.49
Host is up (0.039s latency).
Not shown: 65528 closed ports
PORT      STATE SERVICE
22/tcp    open  ssh
80/tcp    open  http
110/tcp   open  pop3
139/tcp   open  netbios-ssn
143/tcp   open  imap
445/tcp   open  microsoft-ds
31337/tcp open  Elite

Nmap done: 1 IP address (1 host up) scanned in 294.83 seconds
```

So, it turned out not to be very quick. In any case, our initial scan caught everything anyway. Our next task is to "enumerate the hostname". The only way I can think to do this would be to use the `-O` or `-sV` flags, which get operating system and service version information, respectively. Let's run the following:

```bash
sudo nmap -O -sV <TARGET_IP> -oA nmap-module_hostname-discovery_scan
```

```
Starting Nmap 7.80 ( https://nmap.org ) at 2025-06-21 15:31 CDT
Nmap scan report for 10.129.2.49
Host is up (0.038s latency).
Not shown: 993 closed ports
PORT      STATE SERVICE     VERSION
22/tcp    open  ssh         OpenSSH 7.6p1 Ubuntu 4ubuntu0.7 (Ubuntu Linux; protocol 2.0)
80/tcp    open  http        Apache httpd 2.4.29 ((Ubuntu))
110/tcp   open  pop3        Dovecot pop3d
139/tcp   open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
143/tcp   open  imap        Dovecot imapd (Ubuntu)
445/tcp   open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
31337/tcp open  ftp         ProFTPD
No exact OS matches for host (If you know what OS is running onit, see https://nmap.org/submit/ ).
TCP/IP fingerprint:
OS:SCAN(V=7.80%E=4%D=6/21%OT=22%CT=1%CU=37007%PV=Y%DS=2%DC=I%G=Y%TM=685716D
OS:7%P=x86_64-pc-linux-gnu)SEQ(SP=FF%GCD=1%ISR=106%TI=Z%CI=Z%II=I%TS=A)OPS(
OS:O1=M539ST11NW7%O2=M539ST11NW7%O3=M539NNT11NW7%O4=M539ST11NW7%O5=M539ST11
OS:NW7%O6=M539ST11)WIN(W1=FE88%W2=FE88%W3=FE88%W4=FE88%W5=FE88%W6=FE88)ECN(
OS:R=Y%DF=Y%T=40%W=FAF0%O=M539NNSNW7%CC=Y%Q=)T1(R=Y%DF=Y%T=40%S=O%A=S+%F=AS
OS:%RD=0%Q=)T2(R=N)T3(R=N)T4(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T5(R=
OS:Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=
OS:R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N%T
OS:=40%IPL=164%UN=0%RIPL=G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=40%CD=
OS:S)

Network Distance: 2 hops
Service Info: Host: NIX-NMAP-DEFAULT; OS: Linux; CPE: cpe:/o:linux:linux_kernel

OS and Service detection performed. Please report any incorrectresults at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 68.04 seconds

```

We can see in our results that we did not even need the `-O` flag (which probably took the majority of the time) as the "Service Info" provided gives us the hostname of `NIX-NMAP-DEFAULT`.

---

## Saving the Results

As mentioned earlier, we should always save the results of our scans. `Nmap` can save the results of our scans in three different formats:

- "Normal" text output (`-oN`, `.nmap` file extension)
- Grepable output (`-oG`, `.gnmap` file extension)
- XML output (`-oX`, `.xml` file extension)

To save in all formats (as I usually do), use the `-oA` flag.

### Style sheets

The XML output is very handy for writing up technical documentation later down the line. This is because we can easily convert it to HTML with `xsltproc`:

```bash
gradyl16@htb[/htb]$ xsltproc target.xml -o target.html
```

```
Starting Nmap 7.80 ( https://nmap.org ) at 2025-06-21 15:54 CDT
Nmap scan report for 10.129.2.49
Host is up (0.041s latency).
Not shown: 65428 closed ports, 100 filtered ports
PORT      STATE SERVICE     VERSION
22/tcp    open  ssh         OpenSSH 7.6p1 Ubuntu 4ubuntu0.7 (Ubuntu Linux; protocol 2.0)
80/tcp    open  http        Apache httpd 2.4.29 ((Ubuntu))
110/tcp   open  pop3        Dovecot pop3d
139/tcp   open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
143/tcp   open  imap        Dovecot imapd (Ubuntu)
445/tcp   open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
31337/tcp open  Elite?
1 service unrecognized despite returning data. If you know the service/version, please submit the following fingerprint at https://nmap.org/cgi-bin/submit.cgi?new-service :
SF-Port31337-TCP:V=7.80%I=7%D=6/21%Time=68571C14%P=x86_64-pc-linux-gnu%r(G
SF:etRequest,1F,"220\x20HTB{pr0F7pDv3r510nb4nn3r}\r\n");
Service Info: Host: NIX-NMAP-DEFAULT; OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 178.36 seconds
```

---

## Nmap Scripting Engine

The NSE (Nmap Scripting Engine) gives us the capability to write Lua scripts for interacting with certain service. It provides 14 different categories of scripts.

You can specify which scripts you want to use at the command line by using the `--script` option. You can pass it either a category, a specific script, or a comma-separated list of scripts. For example:

```bash
gradyl16@htb[/htb]$ sudo nmap 10.129.2.28 -p 25 --script banner,smtp-commands

Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-16 23:21 CEST
Nmap scan report for 10.129.2.28
Host is up (0.050s latency).

PORT   STATE SERVICE
25/tcp open  smtp
|_banner: 220 inlane ESMTP Postfix (Ubuntu)
|_smtp-commands: inlane, PIPELINING, SIZE 10240000, VRFY, ETRN, STARTTLS, ENHANCEDSTATUSCODES, 8BITMIME, DSN, SMTPUTF8,
MAC Address: DE:AD:00:00:BE:EF (Intel Corporate)
```

`Nmap` provides an aggressive scanning option with the `-A` flag. This is equivalent to running default scripts (`-sC`), service version detection, `-sV`, OS detection (`-O`), _and_ running `traceroute` (`--traceroute`).

### Vulnerability Assessment

If you run all scripts in the `vuln` category, `Nmap` will search vulnerability databases against detected service versions to provide information on actively vulnerable software. For example:

```bash
gradyl16@htb[/htb]$ sudo nmap 10.129.2.28 -p 80 -sV --script vuln
```

```
Nmap scan report for 10.129.2.28
Host is up (0.036s latency).

PORT   STATE SERVICE VERSION
80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))
| http-enum:
|   /wp-login.php: Possible admin folder
|   /readme.html: Wordpress version: 2
|   /: WordPress version: 5.3.4
|   /wp-includes/images/rss.png: Wordpress version 2.2 found.
|   /wp-includes/js/jquery/suggest.js: Wordpress version 2.5 found.
|   /wp-includes/images/blank.gif: Wordpress version 2.6 found.
|   /wp-includes/js/comment-reply.js: Wordpress version 2.7 found.
|   /wp-login.php: Wordpress login page.
|   /wp-admin/upgrade.php: Wordpress login page.
|_  /readme.html: Interesting, a readme.
|_http-server-header: Apache/2.4.29 (Ubuntu)
|_http-stored-xss: Couldn't find any stored XSS vulnerabilities.
| http-wordpress-users:
| Username found: admin
|_Search stopped at ID #25. Increase the upper limit if necessary with 'http-wordpress-users.limit'
| vulners:
|   cpe:/a:apache:http_server:2.4.29:
|     	CVE-2019-0211	7.2	https://vulners.com/cve/CVE-2019-0211
|     	CVE-2018-1312	6.8	https://vulners.com/cve/CVE-2018-1312
|     	CVE-2017-15715	6.8	https://vulners.com/cve/CVE-2017-15715
...
```

---

## Performance

Scanning performance can be crucial in certain situations, such as dealing with a very large network or when operating on low bandwidth. In such cases, `Nmap` provides facilities to control the speed (`-T <0-5>`), the frequency (`--min-parallelism <number>`), which timeouts (`--max-rtt-timeout <time>`) the packets should have, and the number of retries (`--max-retries <number>`).

### Timeouts

Here is an example scan that optimizes the RTT (round trip time) taken by a given exchange:

#### Default

```bash
gradyl16@htb[/htb]$ sudo nmap 10.129.2.0/24 -F
```

```
<SNIP>
Nmap done: 256 IP addresses (10 hosts up) scanned in 39.44 seconds
```

#### Optimized

```bash
gradyl16@htb[/htb]$ sudo nmap 10.129.2.0/24 -F --initial-rtt-timeout 50ms --max-rtt-timeout 100ms
```

```
<SNIP>
Nmap done: 256 IP addresses (8 hosts up) scanned in 12.29 seconds
```

### Max Retries

Another way to increase scan speed is by specifying the retry rate of sent packets (`--max-retries`). The default value is `10`, but we can reduce it to `0`. This means if Nmap does not receive a response for a port, it won't send any more packets to that port and will skip it.

#### Default

```bash
gradyl16@htb[/htb]$ sudo nmap 10.129.2.0/24 -F | grep "/tcp" | wc -l
```

```
23
```

#### Fewer Retries

```bash
gradyl16@htb[/htb]$ sudo nmap 10.129.2.0/24 -F --max-retries 0 | grep "/tcp" | wc -l
```

```
21
```

### Rates

If we know our bandwidth (e.g., during a white box penetration test), then we can set out minimum packet sending rate (in packets/s) accordingly. This substantially speeds up our scans:

#### Default

```bash
gradyl16@htb[/htb]$ sudo nmap 10.129.2.0/24 -F
```

```
<SNIP>
Nmap done: 256 IP addresses (10 hosts up) scanned in 29.83 seconds
```

#### Optimized

```bash
gradyl16@htb[/htb]$ sudo nmap 10.129.2.0/24 -F --min-rate 300
```

```
<SNIP>
Nmap done: 256 IP addresses (10 hosts up) scanned in 8.67 seconds
```

### Timing

`Nmap` offers 6 different timing templates to use (labeled 0-5). The value we select determines the "aggressiveness" of our scans (in ascending order). The default value is "normal" (3). Here is the list:

- `-T 0` / `-T paranoid`
- `-T 1` / `-T sneaky`
- `-T 2` / `-T polite`
- `-T 3` / `-T normal`
- `-T 4` / `-T aggressive`
- `-T 5` / `-T insane`

These templates contain options that can also be set manually. The exact combinations of options for these templates were empirically derived and can be found [here](https://nmap.org/book/performance-timing-templates.html).

---

## Firewall and IDS/IPS Evasion

I'm only going to say this once: do not attack a system without permission from the owner! That is _highly_ **illegal**, and I do not condone such unauthorized actions in any way. You are responsible for the trouble you get yourself into by not heeding my words. With that said, let's get into how to do this in an authorized setting. First, some background.

### Firewalls

A firewall is a security measure against unauthorized connections from external networks. Every firewall has a software component that monitors network traffic between the firewall and incoming data connections, handling connections based on rules that have been set by system administrators. Each packet may either be passed (let through), ignored (dropped), or blocked (rejected).

### IDS/IPS

IPS and IDS work hand in hand to both proactively _prevent_ suspicious activities and to _detect_ them, using a variety of different techniques, depending on the system. While most commercial systems rely on pattern/signature matching schemes, academia has been exploring the feasibility of more intelligent anomaly-based IDSs that can learn to distinguish between benign and malicious traffic on a network-specific basis. Despite the draw, they are less common due to struggles with false positive detection, performance concerns, along with a variety of other factors.

### Nmap's Utilities

`Nmap` provides an `ACK` scan (`-sA`) that is much harder to filter compared to the half or connect scans as it only sends a single `TCP` `ACK` packet to the target. Regardless of port state, the host must respond with an `RST` flag. Since filtering mechanisms can usually not determine whether the connection was initiated by an internal host or the external one based solely on an `ACK`, these packets are usually passed on.

### Detecting IDS/IPS

Unlike firewalls and their rules, detecting IDS/IPS is much more difficult as they act as passive network observers rather than actively managing traffic. The only real strategy for finding them is to use disposable VPSs (virtual private servers). Essentially, you just attempt to take some actions from behind such an IP and then observe whether the IP gets banned/deserviced.

### Decoys

Network administrators block certain subnets in certain regions from communicating with their internal network in practice, for reasons that are organization-specific. In these cases, we can use `Nmap`'s decoy (`-D`) flag. This instructs `Nmap` to spoof the IP header to disguise the true origin of the sent packet. It is critical to note that the decoys must be alive. Else, the service on the target host may be unreachable due to `SYN` flooding security mechanisms. Here is an example scan along with the results:

```bash
gradyl16@htb[/htb]$ sudo nmap 10.129.2.28 -p 80 -sS -Pn -n --disable-arp-ping --packet-trace -D RND:5
```

```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-21 16:14 CEST
SENT (0.0378s) TCP 102.52.161.59:59289 > 10.129.2.28:80 S ttl=42 id=29822 iplen=44  seq=3687542010 win=1024 <mss 1460>
SENT (0.0378s) TCP 10.10.14.2:59289 > 10.129.2.28:80 S ttl=59 id=29822 iplen=44  seq=3687542010 win=1024 <mss 1460>
SENT (0.0379s) TCP 210.120.38.29:59289 > 10.129.2.28:80 S ttl=37 id=29822 iplen=44  seq=3687542010 win=1024 <mss 1460>
SENT (0.0379s) TCP 191.6.64.171:59289 > 10.129.2.28:80 S ttl=38 id=29822 iplen=44  seq=3687542010 win=1024 <mss 1460>
SENT (0.0379s) TCP 184.178.194.209:59289 > 10.129.2.28:80 S ttl=39 id=29822 iplen=44  seq=3687542010 win=1024 <mss 1460>
SENT (0.0379s) TCP 43.21.121.33:59289 > 10.129.2.28:80 S ttl=55 id=29822 iplen=44  seq=3687542010 win=1024 <mss 1460>
RCVD (0.1370s) TCP 10.129.2.28:80 > 10.10.14.2:59289 SA ttl=64 id=0 iplen=44  seq=4056111701 win=64240 <mss 1460>
Nmap scan report for 10.129.2.28
Host is up (0.099s latency).

PORT   STATE SERVICE
80/tcp open  http
MAC Address: DE:AD:00:00:BE:EF (Intel Corporate)

Nmap done: 1 IP address (1 host up) scanned in 0.15 seconds
```

`Nmap` interprets `-D RND:5` as "use 5 randomly generated decoys, and sandwich our real IP between them" (you will not find my IP in there or any of the other scan results, but nice try). Another thing to note is that you may manually specify the source IP to spoof with `-S`.

### DNS Proxying

By default, Nmap performs a reverse `DNS` resolution (unless otherwise specified) to find more important information about our target. These `DNS` queries are also passed in most cases because the given web server is supposed to be found and visited. The `DNS` queries are made over the `UDP` port 53. The `TCP` port 53 was previously only used for the so-called "Zone transfers" between the `DNS` servers or data transfer larger than 512 bytes. More and more, this is changing due to IPv6 and `DNSSEC` expansions. These changes cause many `DNS` requests to be made via `TCP` port 53.

However, Nmap still gives us a way to specify `DNS` servers ourselves (`--dns-server <ns>,<ns>`). This method could be fundamental to us if we are in a demilitarized zone (DMZ). The company's `DNS` servers are usually more trusted than those from the Internet. So, for example, we could use them to interact with the hosts of the internal network. As another example, we can use `TCP` port 53 as a source port (`--source-port`) for our scans. If the administrator uses the firewall to control this port and does not filter IDS/IPS properly, our `TCP` packets will be trusted and passed through.

Examples:

#### SYN-Scan of Filtered Port

```bash
gradyl16@htb[/htb]$ sudo nmap 10.129.2.28 -p50000 -sS -Pn -n --disable-arp-ping --packet-trace
```

```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-21 22:50 CEST
SENT (0.0417s) TCP 10.10.14.2:33436 > 10.129.2.28:50000 S ttl=41 id=21939 iplen=44  seq=736533153 win=1024 <mss 1460>
SENT (1.0481s) TCP 10.10.14.2:33437 > 10.129.2.28:50000 S ttl=46 id=6446 iplen=44  seq=736598688 win=1024 <mss 1460>
Nmap scan report for 10.129.2.28
Host is up.

PORT      STATE    SERVICE
50000/tcp filtered ibm-db2

Nmap done: 1 IP address (1 host up) scanned in 2.06 seconds
```

#### SYN-Scan From DNS Port

```bash
gradyl16@htb[/htb]$ sudo nmap 10.129.2.28 -p50000 -sS -Pn -n --disable-arp-ping --packet-trace --source-port 53
```

```
SENT (0.0482s) TCP 10.10.14.2:53 > 10.129.2.28:50000 S ttl=58 id=27470 iplen=44  seq=4003923435 win=1024 <mss 1460>
RCVD (0.0608s) TCP 10.129.2.28:50000 > 10.10.14.2:53 SA ttl=64 id=0 iplen=44  seq=540635485 win=64240 <mss 1460>
Nmap scan report for 10.129.2.28
Host is up (0.013s latency).

PORT      STATE SERVICE
50000/tcp open  ibm-db2
MAC Address: DE:AD:00:00:BE:EF (Intel Corporate)

Nmap done: 1 IP address (1 host up) scanned in 0.08 seconds
```
