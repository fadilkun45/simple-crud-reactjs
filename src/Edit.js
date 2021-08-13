import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import Fetch from './Fetch';

const Edit = () => {
    let {id} = useParams()

    let {items} = Fetch("http://localhost:4000/items/" + id)
    let [item,setItem] = useState();
    let [jumlah,setJumlah] = useState();
    let [idkey,setID] = useState();
    let history = useHistory()

      const handleSubmit = (e) => {
        e.preventDefault()
        const valueItem = {item,jumlah,id}
        if(valueItem.item && valueItem.jumlah !== undefined){
            fetch('http://localhost:4000/items/' + id ,{
                method: 'DELETE',
                headers: {"Content-Type" : "application/json"},
              }).then(() => {
                  fetch('http://localhost:4000/items'  ,{
                      method: 'POST',
                      headers: {"Content-Type" : "application/json"},
                      body: JSON.stringify(valueItem)
                  }).then(() => {
                      history.push('/')
                  })
             
              })
        }else{
            history.push('/')
        }
        console.log(valueItem)
      }

    return (
        <form onSubmit={handleSubmit}>
        <h2>Edit Data</h2>
            {
           items&&<input type="hidden" defaultValue={items.item} onChange={(e) => setID(e.target.value)}/>
            }
           <label>Nama Item :</label>
           {
           items&&<input type="text" defaultValue={items.item} onChange={(e) => setItem(e.target.defaultValue)}/>
            }
            <label>Jumlah</label>
            {
            items&& <input type="text" defaultValue={items.jumlah}  onChange={(e) => setJumlah(e.target.value)}/>
            }
        <button>Edit</button>
        </form>
    )
}

export default Edit
