import React from 'react'
import { TrainersTable } from '../Components/TrainersTable'
import { TrainersForm } from '../Components/TrainersForm'

export const TrainersPage = () => {
  return (
    <>
      <main className='container'>
        <TrainersForm />
        <TrainersTable />
      </main>

    </>
  )
}
