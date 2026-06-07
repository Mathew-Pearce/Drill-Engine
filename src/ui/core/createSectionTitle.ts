export function createSectionTitle(text) {

    const title =
      document.createElement('h2');
  
    title.textContent =
      text;
  
    title.style.margin =
      '6px 0';
  
    return title;
  }