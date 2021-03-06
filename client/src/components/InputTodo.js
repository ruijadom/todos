import React, { Fragment, useState }  from 'react';

const InputTodo = () => {

  const [ description, setDescription ] = useState("");

  const onsubmitForm = (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      window.location = "/";
      
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-5">Todos List</h1>
      <form className="d-flex mt-5" onSubmit={onsubmitForm}>
        <input type="text" className="form-control" value={description} onChange={ e => setDescription(e.target.value)}></input>
        <button className="brt btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;