import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home'
import NotFound from './routes/NotFound'
import Docs from './routes/Docs';
import Library from './routes/Library'
import Components from './routes/Components'
import Rule from './routes/Rule'

function App() {
  return (<>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/docs/*" element={ <Docs />} />
      <Route path='*' element={ <NotFound /> } />
    </Routes>    
  </>)
}

export default App;

