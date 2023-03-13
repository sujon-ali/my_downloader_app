const downloadBtn = document.querrySelector('#download-btn');

function downloadVideo() {
  const urlTag = document.querrySelector('#url-tag');
  const videoUrl = `${urlTag.value}`;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', videoUrl, true);
  xhr.responseType = 'blob';
  xhr.onload = function() {
    var urlCreator = window.URL || window.webkitURL;
    var videoUrl = urlCreator.createObjectURL(this.response);
    var tag = document.createElement('a');
    tag.href = videoUrl;
    tag.target = '_blank';
    tag.download = 'sample.mp4';
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
  };
  xhr.onerror = err => {
    alert('Failed to download video!');
  };
  xhr.send();
}

downloadBtn.addEventListener('click', downloadVideo);
