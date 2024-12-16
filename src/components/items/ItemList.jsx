import ItemCard from "./itemCard";

function ItemList({ items }) {
  if (items.length === 0) {
    return <h1>No hay ítems para mostrar</h1>;
  }

  return (
    <div>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
