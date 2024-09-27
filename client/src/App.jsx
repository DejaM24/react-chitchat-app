import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home.jsx';
import Room from './components/Room.jsx';


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/room' element={<Room></Room>}></Route>
    </Routes>
    </>
  )
}

export default App
