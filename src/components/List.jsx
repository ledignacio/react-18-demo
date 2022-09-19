const ListItem = ({ item }) => {
  return (
    <li>
      {item}
    </li>
  );
};

export default function List({ data }) {
  if (!data || !(data.length > 0)) {
    return null;
  }

  return (
    <ul className="grid grid-cols-4">
      {data.map((item, i) => (
        <ListItem key={i} item={item} />
      ))}
    </ul>
  );
}