import classNames from 'classnames';

const defaultStyle = 'bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded focus:ring-4 focus:ring-blue-200';
const disabledStyle = 'bg-gray-500 text-white font-semibold px-4 py-2 rounded';

export default function Button({ children, className, disabled, onClick, type = 'button', value}) {
  const classes = classNames(disabled ? disabledStyle : defaultStyle, className);
  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
      value={value}
    >
      {children}
    </button>
  );
}
