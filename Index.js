const downloadBtn = document.querrySelector('#download-btn');

function downloadVideo() {
  const msgTag = document.querrySelector('#message-tag');
  const urlTag = document.querrySelector('#url-tag');
  const url = `${urlTag.value}`;
  msgTag.innerText = url;
}

downloadBtn.addEventListener('click', downloadVideo);
