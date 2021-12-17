import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react/cjs/react.development'
import ContactList from './ContactList'
import { useEffect } from 'react'
import { Button } from 'bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";



const UpdateContact = (dataByName,) => {

  const [name, setName] = useState()
  const [type, setType] = useState()
  const [number, setNumber] = useState()
  const params = useParams();
  console.log(params)
  const navigate = useNavigate()

  useEffect(() => {
    getContactById(params.id)
  }, []);

  // GET Contact By Id 
  const getContactById = async (id) => {
    const res = await fetch(`http://localhost:8088/contacts/${id}`,
      {
        method: 'GET',
      })

    const data = await res.json()
    console.log("ok =>", data)
    setName(data.name)
    setType(data.type)
    setNumber(data.number)
  }

  const editedContact = async (id, name, type, number) => {
    const res = await fetch(`http://localhost:8088/updateContact/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": name,
          "type": type,
          "number": number
        })

      })
    const data = await res.json()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editedContact(params.id, name, type, number)
    console.log(params.id, name, type, number);
    navigate('/');
    window.location.reload(false)
  }


  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <div className="container">
        <div className="form-control">
          <label>Enter name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label><br />
        </div>
        <div className="form-control">
          <label> Enter type:
            <input
              type="text"
              value={type || ""}
              onChange={(e) => setType(e.target.value)}
            />
          </label><br />
        </div>
        <div className="form-control">
          <label>Enter number:
            <input
              type="text"
              value={number || ""}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label><br />
        </div>
        <input type="submit" value="Save Contact" className='btn btn-success' />
      </div>
    </form>
  )

}


export default UpdateContact
