
import { useState } from "react";


function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(Object.values(inputs))

    const createContact = async () => {
      const res = await fetch('http://localhost:8088/addnew',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(inputs)
        })
      const data = await res.json()
      console.log(JSON.stringify(inputs));
    }
    createContact()
    window.location.reload(false);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <div className="container">
        <div className="form-control">
          <label>Enter name:
            <input
              type="text"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </label><br />
        </div>
        <div className="form-control">
          <label> Enter type:
            <input
              type="text"
              name="type"
              value={inputs.type || ""}
              onChange={handleChange}
            />
          </label><br />
        </div>
        <div className="form-control">
          <label>Enter number:
            <input
              type="text"
              name="number"
              value={inputs.number || ""}
              onChange={handleChange}
            />
          </label><br />
        </div>
        <input type="submit" value="Save Contact" className='btn btn-success' />
      </div>
    </form>
  )
}


export default Form