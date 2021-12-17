import React from 'react'
import UpdateContact from './UpdateContact'
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react"



const ShowInfo = (props) => {
    const [contact, setContacts] = useState()
    const [name, setName] = useState()
    const [type, setType] = useState()
    const [number, setNumber] = useState()
    const params = useParams();

    //GET Contact By Id 
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

    getContactById(params.id, name, type, number)

    return (
        <div>
            {<form className='add-form'>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Type</th>
                            <th>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{type}</td>
                            <td>{number}</td>
                        </tr>
                    </tbody>
                </table>
            </form>}
        </div>
    )
}

export default ShowInfo
