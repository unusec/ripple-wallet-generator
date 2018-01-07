# Ripple-Wallet-Generator

After reading multiple posts or reddit like [this](https://www.reddit.com/r/Ripple/comments/7oif57/warning_brutal_scam_guy_buys_a_ledger_nano_wallet/), people purcasing expensive Crypto Wallet tools and got scammed loosing a lot of cash, decided to create this FREE simple program to generate a cold storage Ripple wallet, using the official API made available by Ripple. 
This code can be run **offline**.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine.


### Prerequisites

What things you need to install in order to run wallet generator:

* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
* A clean computer without viruses,malware, keyloggers etc. - I recommend Eset Smart Security, you can buy it very cheap ~ 4 EUR from [G2A](https://www.g2a.com/r/eset-smart-security-9)


### Generate Wallet

Step by step instructions that will get you up and running:

* After installing Node.js, download a zip archive of the code using the green *Clone or download* button in on the top-right side
* Extract the archive and go to the extracted folder in your terminal. [Window](https://www.lifewire.com/how-to-open-command-prompt-2618089) - [Mac](https://www.macworld.co.uk/feature/mac-software/how-use-terminal-on-mac-3608274/)
* Run these commands in your terminal:
```
node -v
```
```
npm -v
```

If you see the version of your node and npm then you install dependencies and generate a wallet by running this commands:

```
npm install
```
```
node wallet.js
```

Here is how it should look like - [Ripple Wallet Generator](https://i.imgur.com/QKW5y5D.png)


### Wallet Activation and Safe Keeping

* Now that you have a wallet generated you need to activate it by depositing at least 20 XRP to it(this ammount might be decreased in the future as XRP price will rise).
* You can check the [balance](https://xrpcharts.ripple.com/#/graph) of your wallet using the official tool provided by Ripple.
* Write down the private key(do not print it) and store it a secure place, like a bank safe deposit box if your wallet is really big.


## Donations

Much appreciate it and only if you feel like it, you can donate XRP to this address:

```
rUXmS2w8dbwA98yAws36k1Y4E7XkzvkfwE
```


## Authors

* **UnuSec** - [Twitter](https://twitter.com/UnuSec)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details