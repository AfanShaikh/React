import React from "react";

export const TodoList = ({ props }) => {
  const { dataBase, setDataBase } = props;

  const handleDelete = (id) => {
    const deleteData = dataBase.filter((el) => el.id !== id);
    setDataBase(deleteData);
  };

  const handleEdit = (id) => {
    const editData = dataBase.map((el) => {
      return el.id === id
        ? { ...el, isEdits: !el.isEdits, editValue: el.todo }
        : el;
    });
    setDataBase(editData);
  };

  const handleChange = (id, value) => {
    const updatedData = dataBase.map((el) =>
      el.id === id ? { ...el, editValue: value } : el
    );
    setDataBase(updatedData);
  };

  const handleConfirm = (id) => {
    const updatedData = dataBase.map((el) => {
      return el.id === id ? { ...el, todo: el.editValue, isEdits: false } : el;
    });

    setDataBase(updatedData);
  };

  return (
    <>
      <h4>TodoList</h4>
      {dataBase.map((el) => (
        <div
          key={el.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            width: "70%",
            margin: "auto",
          }}
        >
          <input type="checkbox" />

          {el.isEdits ? (
            <input
              type="text"
              value={el.editValue}
              onChange={(e) => handleChange(el.id, e.target.value)}
            />
          ) : (
            <p>{el.todo}</p>
          )}

          {el.isEdits ? (
            <>
              <button onClick={() => handleEdit(el.id)}>Cancel</button>
              <button onClick={() => handleConfirm(el.id)}>Confirm</button>
            </>
          ) : (
            <>
              <button onClick={() => handleEdit(el.id)}>Edit</button>
              <button onClick={() => handleDelete(el.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </>
  );
};
