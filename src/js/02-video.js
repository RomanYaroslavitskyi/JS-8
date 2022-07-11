import Player from '@vimeo/player';

import throttle from 'lodash.throttle';
console.log(throttle);
const container = document.querySelector('#vimeo-player');

console.log('container :>> ', container);

const player = new Player(container, {
  id: 19231868,
});

player.on('pause', e => {
  console.log('e_Pause :>> ', e);
});
player.on('play', e => {
  console.log('e_Play :>>', e);
});
player.on(
  'timeupdate',
  throttle(eTimeupdate => {
    console.log(eTimeupdate);
    localStorage.setItem('videoplayer-current-time', eTimeupdate.seconds);
  }, 1000)
);
player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
console.log(setCurrentTime);
// player.on('timeupdate', throttle(setCurrentTimeVideo, 1000));

console.log(player);
