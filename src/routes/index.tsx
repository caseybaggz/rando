import { A, Title } from "solid-start";
import { css } from "~/../styled-system/css";
import { container } from "~/../styled-system/patterns";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class={container({ py: '10' })}>
      <Title>Hello World</Title>
      <Counter />

      <A href="/" class={css({ display: 'inline-flex', p: '4', bg: 'blue.500', color: 'white', borderRadius: 'md' })}>Home</A>
    </main>
  );
}
