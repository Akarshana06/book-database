// import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import { AddBookForm } from './components/AddBookForm.jsx';
import AddBookForm from './components/AddBookForm';
import Home from './Home';
const App = () => {
  return (
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-book" element={<AddBookForm/>}/>
       </Routes>
     </BrowserRouter>
  )
}

export default App
