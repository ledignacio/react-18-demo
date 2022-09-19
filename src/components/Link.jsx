export default function Link({ children, href }) {
  return <a href={href} target="_blank" rel="noreferrer">{children}</a>;
}
