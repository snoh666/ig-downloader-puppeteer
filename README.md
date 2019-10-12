# REST API with Puppeteer 
Back end to [ig-downloader-front](https://github.com/snoh666/IG-downloader-front) using express and puppeteer (headless chrome web scraper).\
Builded to improve downloading photos and videos from instagram automatically with inputing only link, because front cant do that on its own.
## Modules used
* Puppeteer
* Express
## How to use?
1. Install all dependencies
  ````console
    npm install
  ````
1. Start it with nodemon or node
  ````console
    npm start
  ````
  ````console
  node index.js
  ````
1. Fetch link in body.link with POST method
## Routes
 http://localhost/insta/photo \
 http://localhost/insta/video == isnt working. [ISSUE](https://github.com/snoh666/ig-downloader-puppeteer/issues) open.
