import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (<>
    <div class="home">
      <Link className="button btn-skip" to="/docs">시작하기</Link>      
    </div>    
  </>)
}

export default Home;