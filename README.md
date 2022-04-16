# Functions
- To scrap a webpage

# Installation
- Install `docker`

# Usage
## Using `docker`
```sh
docker run -it -v $PWD/container:/app -w /app node /bin/bash
```
You will also need to install `chromium` and relevant packages:
```sh
apt-get update
# install manually all the missing libraries
apt-get install -y gconf-service libasound2 libatk1.0-0 libcairo2 libcups2 libfontconfig1 libgdk-pixbuf2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libxss1 fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils
# install chrome
wget -P /downloads/ https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
dpkg -i /downloads/google-chrome-stable_current_amd64.deb; apt-get -fy install
```


# Acknowledgements
[Tutorial: How To Scrape a Website Using Node.js and Puppeteer](https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer#step-1-mdash-setting-up-the-web-scraper)