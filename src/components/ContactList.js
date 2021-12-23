import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Form from "./Form"
import Header from "./Header"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router"
import UpdateContact from "./UpdateContact"
import SearchBar from "./SearchBar"
import About from "./About"
import Pagination from "./Pagination"



const ContactList = () => {

    const USERS_REST_API_URL = 'http://localhost:8088/contacts';
    const [contacts, setContacts] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [dataAdd, setDataAdd] = useState([])
    const location = useLocation()
    const navigation = useNavigate()
    const [contactid, setContactId] = useState()
    const [buttonclick, setButtonClick] = useState(false)
    //Pagination state
    const [currentPage, setCurrentPage] = useState(1)
    const [contactsPerPage, setContactsPerPage] = useState(5)
    

    useEffect(() => {
        axios.get(`${USERS_REST_API_URL}`).then((response) => {
            setContacts(response.data);
        });
    }, []);

    if (!contacts) return null;

    const navigateTo = (id) => navigation('/updateContact/' + id)


    //Edit Contact 
    const editContact = (id, name, type, number) => {
        navigateTo(id)
        {
            location.pathname === '/updateContact/' + id && (
                <UpdateContact />)
        }
        console.log(id, name, type, number)
    }

    //DELETE REQUEST 
    const deleteContact = async (id) => {
        const res = await fetch(`http://localhost:8088/delete/` + id,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        window.location.reload(false)
    }

    //GET Contact By Id 
    const getContactById = async (id) => {
        const res = await fetch(`http://localhost:8088/contacts/${id}`,
            {
                method: 'GET',
            })
        const data = await res.json()
        console.log("ok =>", data)
        setContactId(data.id)
        setButtonClick(true)
    }

    //Pagination states
    const indexOfLastContact = currentPage * contactsPerPage
    const indexOfFirstContact = indexOfLastContact - contactsPerPage
    const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact)

    //Change page on pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <SearchBar />
            <Header onAdd={() => setShowForm(!showForm)}
                showAdd={showForm}
            />

            {showForm ? <Form data={dataAdd} /> : null}
            <h2 className="text-center">Contact List</h2>
            <div className="row">
            </div>
            <br></br>
            <div className="row">
                <table id='table' className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Contact Full Name</th>
                            <th> Contact Type</th>
                            <th> Contact Number</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentContacts.map(
                                (contact) =>
                                    <tr key={contact.id}>
                                        <td> {contact.name} </td>
                                        <td> {contact.type}</td>
                                        <td> {contact.number}</td>
                                        <td>
          <button onClick={() => editContact(contact.id, contact.name, contact.type, contact.number)} className="btn btn-info">Update </button>
          <button style={{ marginLeft: "10px" }} onClick={() => deleteContact(contact.id)} className="btn btn-danger">Delete </button>
          <button onClick={() => getContactById(contact.id)} className="btn btn-success">Show info </button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                {buttonclick === true &&
                    navigation("/showInfo/" + contactid)
                }
            </div>
            <Pagination contactsPerPage={contactsPerPage} totalContacts={contacts.length} paginate={paginate} />
            <About />
        </div>
    )
}


export default ContactList
