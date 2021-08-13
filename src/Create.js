import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Create = () => {

  let [item,setItem] = useState();
  let [jumlah,setJumlah] = useState();
  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const valueItem = {item,jumlah}
    console.log(valueItem)
    fetch('http://localhost:4000/items',{
      method: 'POST',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(valueItem)
    }).then(() => {
      history.push('/')
    })
  }


 



    return (
        <form onSubmit={handleSubmit}>
        <label>Nama Item :</label>
        <input type="text" onChange={(e) => setItem(e.target.value)} required/>
        <label>Jumlah</label>
        <input type="text" onChange={(e) => setJumlah(e.target.value)} required/>
        <button>submit</button>
      </form>
    )
}

export default Create
