
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
                  .map(node => node.dataset.time)
                  .map((timeCode) => {
                    const [mins, secs] = timeCode.split(':').map(parseFloat);
                    return (mins * 60) + secs;
                  })
                  .reduce((total, vidSeconds) => total + vidSeconds);

function formatTime(totalSeconds) {
  let secondsLeft = totalSeconds;
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft %= 3600;

  const mins = Math.floor(secondsLeft / 60);
  secondsLeft %= 60;

  return `${hours} : ${mins} : ${secondsLeft}`;
}

console.log(formatTime(seconds));
