import { Routes, Route, Link } from 'react-router-dom';
import Library from './Library'
import Components from './Components'
import Rule from './Rule'

function Developers() {
  return (
    <div className='container'>
      <header className='container__header'>
        <nav className='nav'>
          <div><Link to="/"><h1>developers</h1></Link></div>
          <ul>
            <li><Link to="/docs/library">Library</Link></li>
            <li><Link to="/docs/rule">Rule</Link></li>
            <li><Link to="/docs/components">Components</Link></li>
          </ul>
        </nav>
        <div className="nav-path">path</div>
      </header>
      <div className='contents'>
        <aside>side nav</aside>
        <div>        
          <Routes>
            <Route path='/' element={ <Library /> } />
            <Route path='library' element={ <Library /> } />
            <Route path='rule' element={ <Rule /> } />
            <Route path='components' element={ <Components /> } />
          </Routes>        
        </div>
      </div>
    <footer className='container__footer'>© 2021. bushViper All rights reserved.</footer>
    </div>
  )
}

export default Developers;