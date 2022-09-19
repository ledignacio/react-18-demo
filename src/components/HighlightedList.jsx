
const HighlightedListItem = ({ highlight = '', item }) => {
  const index = item.toLowerCase().indexOf(highlight.toLowerCase());

  if (index === -1) {
    return (
      <li>
        {item}
      </li>
    );
  }

  return (
    <li>
      {item.slice(0, index)}
      <span className="bg-yellow-300">
        {item.slice(index, index + highlight.length)}
      </span>
      {item.slice(index + highlight.length)}
    </li>
  );
};

export default function HighlightedList({ data, highlight }) {
  if (!data || !(data.length > 0)) {
    return null;
  }

  return (
    <ul className="grid grid-cols-4">
      {data.map((item, i) => (
        <HighlightedListItem key={i} highlight={highlight} item={item} />
      ))}
    </ul>
  );
}
