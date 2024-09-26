// import { useState } from 'react'
// import './App.css'
import DataEntry from './components/DataEntry/DataEntry'
import Setup from './components/Setup/Setup'
import CostsEntry from './components/CostsEntry/CostsEntry'
import Layout from './pages/Layout/Layout'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/costs' element={<CostsEntry />} />
          <Route path='/setup' element={<Setup />} />
          <Route path='/dataentry' element={<DataEntry />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
