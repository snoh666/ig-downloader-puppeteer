const puppeteer = require('puppeteer');
const fs = require('fs');

exports.getPhotoSrc = async (link) => {

  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const page = await browser.newPage();

  await page.setViewport({width: 1920, height: 1080});
  await page.goto(link);

  const photoSource = await page.evaluate(() => {
    const imgSrc = document.querySelector('img.FFVAD').getAttribute('src');

    return Promise.resolve(imgSrc);
  });

  const viewSource = await page.goto(photoSource);
  const image = await viewSource.buffer();

  await page.close();
  await browser.close();

  return image;
};

exports.getVideoSrc = async (link) => {

  const browser = await puppeteer.launch({args: ['--no-sandbox'], headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(link);

  await console.log('After go');

  const videoSource = await page.evaluate(() => {
    const vidSrc = document.querySelector('video.tWeCl').getAttribute('src');

    return Promise.resolve(vidSrc);
  });

  const viewSource = await page.goto(videoSource);
  await console.log('Got source');
  const video = await viewSource.buffer();
  await console.log('Buffered');

  await console.log(video);

  await page.close();
  await browser.close();

  return video;

};