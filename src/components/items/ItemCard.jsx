function ItemCard({ item }) {
  return (
    <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>{item.sku}</p>
        <p>{item.barcode}</p>
        <p>{item.department_id}</p>
        <p>{item.category_id}</p>
        <p>{item.subcategory_id}</p>
        <p>{item.created_at}</p>
        <p>{item.status}</p>
    </div>
  )
}

export default ItemCard;
