import React from 'react'
import { useState } from 'react/cjs/react.development'
import 'font-awesome/css/font-awesome.min.css'

const SearchBar = () => {

  const [buttonclicked, setButtonClicked] = useState()
  const [searchName, setSearchName] = useState()
  const [listContacts, setListContacts] = useState([])

  const contactName = async (name) => {
    console.log(name)
    const res = await fetch(`http://localhost:8088/contactsbyname/${name}`,
      {
        method: 'GET',
      })

    const data = await res.json()
    if (data === '' || searchName.toLowerCase() === '') {
      alert('No data found  :(')
    } else {
      setListContacts(data)
      console.log("list cont")
      console.log(listContacts)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    contactName(searchName)
    setButtonClicked(true)
  }

  return (

    <div className='searchbar-container'>
      <form >
        <div className='search-container button'><button type="submit" onClick={handleSubmit}><i className="fa fa-search"></i></button></div>
        <div className='search-container'><input type="search" placeholder="Search.." value={searchName} onChange={(event) => setSearchName(event.target.value)} name="search" /></div>
      </form>

      {buttonclicked === true &&
        <form className='add-form'>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Type</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              {
                listContacts.map((list) =>
                  <tr>
                    <td>{list.name}</td>
                    <td>{list.type}</td>
                    <td>{list.number}</td>
                  </tr>
                )}
            </tbody>
          </table>
        </form>}
    </div>


  )
}

export default SearchBar
