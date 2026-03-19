import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeToken } from '../Redux/Auth/Action';

export const Navbar = () => {
  const dispatch = useDispatch();

  const nav = [
    { path: '/', element: 'music' },
    { path: '/login', element: 'login' },
  ];

  return (
    <div className="mainDiv">
      {nav &&
        nav.map((el, i) => {
          return (
            <NavLink
              style={({ isActive }) => ({
                background: isActive ? 'tomato' : 'transparent',
              })}
              to={el.path}
              className="navLink"
              end
              key={i}
            >
              {el.element}
            </NavLink>
          );
        })}

      <button onClick={() => dispatch(removeToken())}>logout</button>
    </div>
  );
};