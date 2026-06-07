export function createSubTitle(text) {

    const title =
      document.createElement('h3');
  
    title.textContent =
      text;
  
    title.style.margin =
      '6px 0';
  
    return title;
  }