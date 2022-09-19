import { useId } from 'react';

export default function Counter({ count }) {
  const id = useId();
  return (
    <div className='bg-white rounded px-4'>
      <div>
        Count: <span className='font-semibold'>{count}</span>
      </div>
      <div>
        Id: <u className='font-semibold'>{id}</u>
      </div>
    </div>
  );
}
