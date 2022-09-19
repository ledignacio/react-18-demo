import Article from '../../components/Article';
import Link from '../../components/Link';
import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';

export default function ConcurrentReact() {
  return (
    <Article>
      <SectionHeader el="h2">
        Concurrent React
      </SectionHeader>

      <Section>
        <Link href="https://reactjs.org/blog/2022/03/29/react-v18.html#what-is-concurrent-react">What is...?</Link>
        <blockquote>
          A key property of Concurrent React is that rendering is interruptible. When you first upgrade to React 18, before adding any concurrent features, updates are rendered the same as in previous versions of React — in a single, uninterrupted, synchronous transaction. With synchronous rendering, once an update starts rendering, nothing can interrupt it until the user can see the result on screen.
        </blockquote>

        <blockquote>
          In a concurrent render, this is not always the case. React may start rendering an update, pause in the middle, then continue later. It may even abandon an in-progress render altogether. React guarantees that the UI will appear consistent even if a render is interrupted. To do this, it waits to perform DOM mutations until the end, once the entire tree has been evaluated. With this capability, React can prepare new screens in the background without blocking the main thread. This means the UI can respond immediately to user input even if it’s in the middle of a large rendering task, creating a fluid user experience.
        </blockquote>
      </Section>
    </Article>
  );
}



