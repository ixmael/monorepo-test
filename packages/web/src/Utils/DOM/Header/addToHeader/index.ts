const addToHeader = (headElement: HTMLElement): void => {
  document
    .getElementsByTagName('head')[0]
    .appendChild(headElement);
};

export default addToHeader;
