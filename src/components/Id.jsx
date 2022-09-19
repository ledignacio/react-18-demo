import { useId } from 'react';

export default function Id() {
  const id = useId();
  return (
    <li>{id}</li>
  );
}
