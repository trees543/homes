import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/homes">Homes</Link>
          </li>
          <li>
            <Link to="/lots">Lots</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
