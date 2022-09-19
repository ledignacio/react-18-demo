import classNames from 'classnames';

const defaultStyle = 'shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200';

export default function Input({ className, onChange, type = 'text', value }) {
  const classes = classNames(defaultStyle, className);
  return (
    <input
      className={classes}
      type={type}
      onChange={onChange}
      value={value}
    />
  );
}
