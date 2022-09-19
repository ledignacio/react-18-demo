const getBgColor = (color) => {
  switch (color) {
  case 'red':
    return 'bg-red-500';
  case 'green':
    return 'bg-green-500';
  case 'orange':
  default:
    return 'bg-orange-500';
  }
};

export default function Highlight({ children, color = 'orange' }) {
  const colorClass = getBgColor(color);
  return (
    <span className={`${colorClass} p-1 rounded text-white`}>{children}</span>
  );
}
