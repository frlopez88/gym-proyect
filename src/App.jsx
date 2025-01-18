import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu } from './Components/Menu'
import { TrainersPage } from './Pages/TrainersPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<TrainersPage />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
