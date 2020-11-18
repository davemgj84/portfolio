const cursorAnimation = () => {
  let cursor = true;
  const speed = 500;
  const interval = setInterval(() => {
    if (cursor) {
      document.getElementById("cursor").style.opacity = 0;
      cursor = false;
    } else {
      document.getElementById("cursor").style.opacity = 1;
      cursor = true;
    }
  }, speed);

  return () => clearInterval(interval);
};

export default cursorAnimation;
