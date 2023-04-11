import { Link, Outlet } from 'react-router-dom';

export const Nav = ({ style = '', data }) => {

  return (
    <nav className={style}>
      <ul>
        {
          data.map(elem => (
            <li key={elem.id}>
              <Link to={elem.link} >
                {elem.img ? <img src={elem.img} /> : elem.title}
              </Link>
            </li>
          ))
        }
        <Outlet />
      </ul>
    </nav >
  )
}
