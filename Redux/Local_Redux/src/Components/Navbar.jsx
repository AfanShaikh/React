// import { NavLink } from 'react-router-dom';

// export const Navbar = () =>{
//     const routes = [
//         { path: '/', element: 'home'},
//         { path: '/login', element: 'login'},
//         { path: '/signup', element:'signup'},
//         { path: '/todo', element: 'todo'},
//         { path: '/counter', element:'counter'},
//     ];

//     return<></>
// };
import { NavLink } from 'react-router-dom'

export const Navbaar = () => {

  const routes = [
    { path: '/', element: 'home' },
    { path: '/todologin', element: 'todologin' },
    { path: '/todosign', element: 'todosign' },
    { path: '/counter', element: 'counter' },
    { path: '/todo', element: 'todo' }
  ]

  return (
    <>
      {routes.map((el, i) => (
        <NavLink
          to={el.path}
          key={i}
          style={{
            display: 'inline-flex',
            justifyContant: 'space-evenly',
            alignItam: 'center',
            width: '100px',
            margin: '20px'
          }}
        >
          {el.element}
        </NavLink>
      ))}
    </>
  );
};