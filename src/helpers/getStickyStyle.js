const getStickyStyle = (stickyValue, offset) => {
  let stickyStyle = { position: 'relative' };
  if (stickyValue === 'top') {
    stickyStyle = { position: 'fixed', top: offset, bottom: 'unset' };
  } else if (stickyValue === 'bottom') {
    stickyStyle = { position: 'absolute', bottom: '0', top: 'unset' };
  }
  return stickyStyle;
};

export default getStickyStyle;
