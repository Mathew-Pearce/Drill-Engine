import { createRuntime } from './engine/runtime';

console.log("ENGINE BOOT");
alert("ENGINE RUNNING");

const runtime = createRuntime({
  state: {
    values: { distance: 0 }
  },
  systems: [
    (s: any) => {
      s.values.distance += 1;
      return s;
    }
  ]
});

runtime.start();