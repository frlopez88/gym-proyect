import React from 'react'
import { useState , useEffect} from 'react'

export const TrainersTable = () => {

    const url = import.meta.env.VITE_URL
    const token = import.meta.env.VITE_TOKEN
    const [trainers, setTrainers] = useState([])

    const getTrainers = async () => {

        const newUrl = `${url}trainer`
        const response = await fetch(newUrl, {
            method: "GET",
            headers: {
                'apikey': token,
                'Authorization': token
            }
        })

        const responseData = await response.json()
        setTrainers(responseData)
    }

    useEffect( ()=>{
        getTrainers()
    }, [] )

    return (
        <>

            <table className='table'>
                <thead>
                    <th>Trainer Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Specialization</th>
                </thead>
                <tbody>
                    {  trainers.map( (item)=>(
                        <tr key={item.trainer_id} >
                            <td>{item.trainer_id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone_number}</td>
                            <td>{item.specialization}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        
        </>
    )
}
