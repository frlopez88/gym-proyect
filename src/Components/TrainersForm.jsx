import React from 'react'
import { useState } from 'react'

export const TrainersForm = () => {

  const url = import.meta.env.VITE_URL
  const token = import.meta.env.VITE_TOKEN

  const [name, setName] = useState("")
  const [phone_number, setPhone] = useState("")
  const [specialization, setSpecialization] = useState("")

  const nameHandler = (event) => {
    setName(event.target.value)
  }

  const phoneHandler = (event) => {
    setPhone(event.target.value)
  }

  const specializationHandler = (event) => {
    setSpecialization(event.target.value)
  }


  const submitHandler = async () => {

    event.preventDefault()

    const data = {
      name, 
      phone_number, 
      specialization
    }

    const newUrl = `${url}trainer`
    const respose = fetch(newUrl, {
      method: "POST",
      headers: {
        'apikey': token,
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    window.location = "/trainers"
  }


  return (
    <>
      <h1>Trainers Creation</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" onChange={nameHandler} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="tel" className="form-control" onChange={phoneHandler} />
        </div>
        <div className="mb-3">
          <label className="form-label">Specialization</label>
          <input type="tex" className="form-control" onChange={specializationHandler} />
        </div>
        <button className='btn btn-secondary w-100' >Send Data</button>
      </form>
    </>
  )
}