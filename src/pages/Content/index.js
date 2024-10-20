const video = document.querySelector('video');

const isYoutube = location.host === 'www.youtube.com';

const scroll = async () => {
  const { aValue } = await chrome.storage.local.get();

  video.currentTime = Math.trunc(aValue);
};

const pause = () => {
  video.pause();
};

const play = () => {
  video.play();
};

const pedalClickHandler = (event) => {
  if (!isYoutube || !video) return;

  if (event.key === 'MediaTrackPrevious') {
    scroll();
  }

  if (event.key === 'MediaTrackNext') {
    pause();
  }

  if (event.key === 'AudioVolumeUp') {
    play();
  }
};

const addGetTimeButton = () => {
  if (!isYoutube || !video) return;

  const container = document.querySelector('.ytp-right-controls');

  const newButton = document.createElement('button');
  newButton.classList.add('ytp-button');
  newButton.innerHTML = `<svg fill="#ffffff" height="100%" width="36px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-68.25 -68.25 591.50 591.50" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 455,242.5 "></polygon> </g></svg>`;

  container.appendChild(newButton);

  newButton.addEventListener('click', () => {
    const currentTime = video.currentTime;

    chrome.runtime.sendMessage({
      contentScriptQuery: 'setAValue',
      aValue: Math.trunc(currentTime),
    });
  });
};

window.addEventListener('keydown', pedalClickHandler);
addGetTimeButton();
