import ContactList from "./components/ContactList"
import Header from "./components/Header"
import Form from "./components/Form"
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UpdateContact from "./components/UpdateContact"
import { Link } from "react-router-dom"
import 'bootstrap';
import ShowInfo from "./components/ShowInfo"


const App = () => {

    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" strict exact element={<ContactList />}></Route>
                    <Route path="/updateContact/:id" element={<UpdateContact />}></Route>
                    <Route path="/showInfo/:id" element={<ShowInfo />}></Route>
                </Routes>
                {/* <Link to="/updateContact/:id">{UpdateContact}</Link> */}
            </div>
        </Router>
    )
}
export default App
