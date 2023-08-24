import React, { useState } from "react";
import { v4 as uuid, v4 } from "uuid";

function ItemForm(props) {

  const [item, setItem] = useState({id: uuid(), name: "", category: "Produce"})

  function handleForm(event) {
    const {name, value} = event.target;
    console.log(name);
    console.log(value);

    setItem({
      ...item,
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onItemFormSubmit(item);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={item.name} onChange={handleForm}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleForm}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
