import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';

const Pagination = ({contactsPerPage,totalContacts,paginate}) => {

    //Pagination states
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <div className='pagination justify-content-center'>
            
 {   
            pageNumber.map(number => (
                <td key={number} >
                    <p onClick={()=>paginate(number)}  className="page-link">
                        {number}
                    </p>
                    </td>
            ))
        }
        </div>
    )
}

export default Pagination

