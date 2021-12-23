import ContactList from "./components/ContactList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UpdateContact from "./components/UpdateContact"
import 'bootstrap';
import ShowInfo from "./components/ShowInfo"

const App = (z) => {

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
