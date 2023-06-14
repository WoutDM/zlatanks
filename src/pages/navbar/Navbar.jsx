import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <nav>
      <div>
      <Link to='/'>
          <p>Home</p>
        </Link>
        <Link to='/Matches'>
          <p>Matches</p>
        </Link>
      </div>
    </nav>
  );
}