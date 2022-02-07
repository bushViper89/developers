import './App.css';
import {
  BrowserRouter,
  Routes,  
  Route  
} from 'react-router-dom';
import Home from './routes/Home'
import Library from './routes/Library'
import Component from './routes/Component'
import Rule from './routes/Rule'
import NotFound from './routes/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/library' element={ <Library /> } />
        <Route path='/rule' element={ <Rule /> } />
        <Route path='/component' element={ <Component /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
