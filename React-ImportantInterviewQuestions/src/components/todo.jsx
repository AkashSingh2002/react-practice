import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    { name: "Buy groceries", description: "Milk, Bread, Cheese, Eggs" },
    {
      name: "Complete assignment",
      description: "Finish the math assignment due tomorrow",
    },
    { name: "Workout", description: "Go for a 30-minute run in the morning" },
    { name: "Call Mom", description: "Catch up with Mom over the phone" },
    {
      name: "Read book",
      description: "Read at least 50 pages of the new book",
    },
  ]);
  const [isEdit, setIsEdit] = useState(false);
  const [recordIndex, setRecordIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [searchQuery, setSearchQuery] = useState("")
  let timer;

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function handleSearch(e) {
    clearTimeout(timer)

    timer = setTimeout(() => {       
      setSearchQuery(e.target.value)
    }, 500)
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!isEdit) {
      setTodos([...todos, formData]);
    } else {
      setTodos(
        todos.map((todo, index) => (index === recordIndex ? formData : todo))
      );
      setIsEdit(false);
    }

    setFormData({ name: "", description: "" }); // Reset the form after submission or edit
  }

  function handleSort(sortingCondition) {
    let sortedTodos;

    if (sortingCondition === "atoz") {
      sortedTodos = [...todos].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sortedTodos = [...todos].sort((a, b) => b.name.localeCompare(a.name));
    }

    setTodos(sortedTodos);
  }

  const filteredData = searchQuery === "" ? todos : todos.filter((e) => e.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Todo Name"
        />
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <button type="submit">{isEdit ? "Edit" : "Submit"}</button>
      </form>

      <div className="card">
        <input type="text" name="search" id="search" onChange={(e) => handleSearch(e)} placeholder="Search" />
        <div className="buttons">
          <button type="button" onClick={() => handleSort("atoz")}>
            A TO Z
          </button>
          <button type="button" onClick={() => handleSort("ztoa")}>
            Z TO A
          </button>
        </div>
        <div className="grid">
          {filteredData.map((todo, index) => (
            <div key={index} className="grid-item">
              <p><strong>{todo.name}</strong></p>
              <p>{todo.description}</p>
              <button
                type="button"
                onClick={() => {
                  setIsEdit(true);
                  setRecordIndex(index);
                  setFormData({
                    name: todo.name,
                    description: todo.description,
                  });
                }}
              >
                Edit
              </button>
              <button type="button" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todo;
