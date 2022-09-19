export default function Box({ children, style }) {
  return (
    <div className='border px-4 rounded-md mb-4 shadow-sm' style={style}>{children}</div>
  );
}
