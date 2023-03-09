const ffmpeg = require('ffmpeg.js');

const downloadVideo = async (url) => {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const result = await ffmpeg({
    MEMFS: [{ name: "video.mp4", data: new Uint8Array(buffer) }],
    arguments: ["-i", "video.mp4", "output.mp4"], 
    // Replace with desired output file name and format
    print: function(data) { console.log(data); },
    printErr: function(data) { console.error(data); },
    });
  const output = result.MEMFS[0];
  const urlObject = URL.createObjectURL(new Blob([output.data]));
  const a = document.createElement('a');
  a.href = urlObject;
  a.download = 'output.mp4'; 
  // Replace with desired file name and extension
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(urlObject);
};
//downloadVideo('https://example.com/video.mp4');
//Button Click Call
const downloadButton = document.getElementById('download-btn'); // Replace with the ID of your download button
downloadButton.addEventListener('click', async () => {
  const urlTag = document.getElementById('url-tag');
  const url = `${urlTag.value}`;// Replace with your video URL
  await downloadVideo(url);
});
