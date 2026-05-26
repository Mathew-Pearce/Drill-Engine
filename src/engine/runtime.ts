export function createRuntime({ state, systems }: any) {
    let current = structuredClone(state);
  
    return {
      start() {
        setInterval(() => {
          systems.forEach((fn: any) => {
            current = fn(current);
          });
  
          console.log("STATE:", current);
        }, 1000);
      },
  
      getState() {
        return current;
      }
    };
  }