import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Condition } from './pages/Condition'
import { ConditionMain } from './pages/ConditionMain'
import { Simulation } from './pages/Simulation'
import { SimulationMain } from './pages/SimulationMain'
import { Landing } from './pages/Landing'
import { MyPage } from './pages/MyPage'
import { Guide } from './pages/Guide'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home/>}/>

        {/* element 수정 필요 */}
        <Route path='/Simulation' element={<Simulation />} />
        <Route path='/SimulationMain' element={<SimulationMain />} />
        <Route path='/Condition' element={<Condition/>}/>
        <Route path='/ConditionMain' element={<ConditionMain />} />
        <Route path='/MyPage' element={<MyPage/>}/>
        <Route path='/Guide' element={<Guide/>}/>
      </Routes>
    </>
  )
}

export default App
