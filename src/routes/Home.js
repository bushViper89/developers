import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (<>
    <div class="home">
      <Link className="button btn-skip" to="/docs">μμνκΈ°</Link>      
    </div>    
  </>)
}

export default Home;