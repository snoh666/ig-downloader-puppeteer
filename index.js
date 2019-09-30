const express = require('express');
const cors = require('cors');
const getSrc = require('./puppeteer');

const app = express();

app.set('Content-type', 'application/json');
app.use(cors());
app.use(express.json());

// ============ Routes

app.post('/insta/photo', (req, res) => {
  const { link } = req.body;

  console.log('Hit photo route');

  ( async () => {
    const image = await getSrc.getPhotoSrc(link);

    await res.json({info: 'Got it', image: image.toString('base64')});
  })();


});

app.post('/insta/video', (req, res) => {

  const { link } = req.body;

  console.log('Hit video route');

  // ==== For now is left to work

  res.json({info: 'Video is still in development'});

  // (async () => {
  //   const video = await getSrc.getVideoSrc(link);

  //   await res.json({ info: 'Got it', video: video.toString('base64') });
  // })();

});


// ========= SERVER
app.listen(80, () => {
  console.log('Listening on port');
});