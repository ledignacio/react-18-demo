import Link from './Link';

const h2Style = 'bg-blue-500 text-white rounded-md px-3 py-2 shadow-md';

export default function SectionHeader({ children,  el: Element = 'h3', href }) {
  let child = children;
  if (href) {
    child = <Link href={href}>{`🔗 ${children}`}</Link>;
  }

  return (
    <Element className={Element === 'h2' ? h2Style : undefined}>
      {child}
    </Element>
  );
}
