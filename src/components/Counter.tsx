import { createSignal } from "solid-js";
import { button } from "~/recipes/button";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button class={button()} onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
  );
}
