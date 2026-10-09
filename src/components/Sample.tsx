import { signal } from "@preact/signals";

export default function Sample() {
  const count = signal(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => count.value++}>Increment</button>
    </div>
  );
}
