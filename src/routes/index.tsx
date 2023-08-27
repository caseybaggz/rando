import { Title } from "solid-start";
import { container } from "~/../styled-system/patterns";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class={container({ py: '10' })}>
      <Title>Hello World</Title>
      <Counter />
    </main>
  );
}
