import React from 'react'
import { useState , useEffect} from 'react'

export const ClassForm = () => {

    const [name, setName] = useState("")
    const [start_date, setStartDate] = useState("")
    const [start_time, setStartTime] = useState("")
    const [trainer_id, setTrainerId] = useState("")
    const [trainers, setTrainers] = useState([])

    const url = import.meta.env.VITE_URL
    const token = import.meta.env.VITE_TOKEN

    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const startDateHandler = (event) => {
        setStartDate(event.target.value)
    }

    const trainerHandler = (event) => {
        setTrainerId(event.target.value)
    }

    const startTimeHandler = (event) => {
        setStartTime(event.target.value)
    }

    const getTrainers = async () => {
        const newUrl = `${url}trainer?select=trainer_id,name`
        const response = await fetch(newUrl, {
            method: "GET", 
            headers: {
                'apikey' : token, 
                'Athorization': token
            }
        })

        const data = await response.json()
        setTrainers(data)
    }


    const submintHandler = async () => {

        event.preventDefault()
        const newUrl = `${url}class`
        const data = {
            name,
            start_date,
            start_time,
            trainer_id
        }
        const response = await fetch(newUrl, {
            method: "POST",
            headers: {
                'apikey': token,
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

    }

    useEffect( ()=>{

        getTrainers()


    }, [] )

    return (
        <>
            <h1>Class Creation</h1>
            <form onSubmit={submintHandler}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={nameHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Start Date</label>
                    <input type="date" className="form-control" onChange={startDateHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Start Time</label>
                    <input type="time" className="form-control" onChange={startTimeHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Instructor</label>
                    <select onChange={trainerHandler} className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        { trainers.map( (item)=>(
                            
                            <option value ={item.trainer_id}>  {item.name} </option>

                        ) )  }
                    </select>
                </div>
                <button className='btn btn-secondary w-100' >Send Data</button>
            </form>
        </>
    )
}
