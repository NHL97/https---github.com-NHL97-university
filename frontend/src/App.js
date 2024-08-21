import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Student from './Student'
import Createstudent from './Createstudent'
import Updatestudent from './Updatestudent'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student />} />
          <Route path='/create' element={<Createstudent />} />
          <Route path='/update/:id' element={<Updatestudent />} />
        </Routes>


      </BrowserRouter>
    </div>
  )
}

export default App