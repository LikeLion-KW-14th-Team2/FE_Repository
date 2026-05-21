import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>

        {/* element 수정 필요 */}
        <Route path='/Simulation' element={<Home/>}/>
        <Route path='/Condition' element={<Home/>}/>
        <Route path='/MyPage' element={<Home/>}/>
        <Route path='/Guide' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
