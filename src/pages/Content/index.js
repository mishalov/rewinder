const video = document.querySelector('video');

const isYoutube = location.host === 'www.youtube.com';

const scroll = () => {
  const timing = chrome.storage.sync.get('aValue');

  video.currentTime = timing;
};

const pedalClickHandler = (event) => {
  if (!isYoutube || !video) return;

  if (event.key === 'MediaTrackPrevious') {
    scroll();
  }
};

window.addEventListener('keydown', pedalClickHandler);
