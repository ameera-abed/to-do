import React, {useState} from 'react';

function FormToDo({addToDo}) {
  const [dataInput, setDataInput] = useState ();
  const handleSubmit = e => {
    e.preventDefault ();
    addToDo (dataInput);
    setDataInput ('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={dataInput}
        onChange={e => setDataInput (e.target.value)}
      />
      <button type="submit">Add to do</button>

    </form>
  );
}

export default FormToDo;
