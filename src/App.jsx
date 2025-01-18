import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu } from './Components/Menu'
import { TrainersPage } from './Pages/TrainersPage'
import { Home } from './Pages/Home'
import { ClassPage } from './Pages/ClassPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/trainers' element={<TrainersPage />} ></Route>
          <Route path='/classes' element={<ClassPage />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
