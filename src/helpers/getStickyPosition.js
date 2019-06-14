const getStickyPosition = (
  mainSection,
  mainSectionInner,
  sideBar,
  offset = 0
) => {
  let stickyValue;

  // console.log(mainSection.height);
  // console.log(mainSection);
  // console.log(mainSectionInner.height);

  // console.log(sideBar.bottom);
  // console.log(mainSectionInner.bottom);
  // console.log(sideBar.bottom >= mainSectionInner.bottom);

  console.log(sideBar.bottom);
  console.log(mainSectionInner.height);

  if (mainSection.height <= mainSectionInner.height) {
    stickyValue = '';
    console.log('a');
  } else if (
    sideBar.top <= offset &&
    sideBar.bottom >= offset &&
    sideBar.bottom - offset > mainSectionInner.height
  ) {
    stickyValue = 'top';
    console.log('b');
  } else if (
    sideBar.top <= offset &&
    sideBar.bottom - 101 <= mainSectionInner.height
  ) {
    stickyValue = 'bottom';
    console.log('c');
  } else {
    stickyValue = '';
    console.log('d');
  }
  return stickyValue;
};

export default getStickyPosition;
