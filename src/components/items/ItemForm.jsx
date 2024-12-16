import { useState } from "react";

function ItemForm({ createItem }) {
  const [name, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sku, setSku] = useState("");
  const [barcode, setBarcode] = useState("");
  const [department_id, setDepartment_id] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [subcategory_id, setSubCategory_id] = useState("");
  const [status, setStatus] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(name, description, sku, barcode, department_id, category_id, subcategory_id, status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nombre del ítem"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descripción del ítem"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
        <input
        placeholder="Sku"
        onChange={(e) => setTitle(e.target.value)}
      />
        <input
        placeholder="Código de barras"
        onChange={(e) => setTitle(e.target.value)}
      />
        <input
        placeholder="ID Departamento"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="ID Categoría"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="ID SubCategoría"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Estado"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
