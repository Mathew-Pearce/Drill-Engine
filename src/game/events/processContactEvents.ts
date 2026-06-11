export function processContactEvents(
    state,
    callback
  ) {
  
    state.events.forEach(event => {
  
      if (event.type !== 'contact')
        return;
  
      callback(event);
    });
  }