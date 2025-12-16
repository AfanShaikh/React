import './App.css'
import { Form } from './Components/Form';

function App() {
  const field = [
    {
      name: 'userName',
      label: 'user Name',
      type: 'text',
      isRequire: true,
      placeholder: 'Enter Your Name',
    },
    {
      name: 'userEmail',
      label: 'user email',
      type: 'email',
      isRequire: true,
      placeholder: 'Enter Your Email',
    },
    {
      name: 'userPhone',
      label: 'Phone',
      type: 'tel',
      isRequire: true,
      placeholder: 'Enter Your Number',
    },
    {
      name: 'userPass',
      label: 'Password',
      type: 'password',
      isRequire: true,
      placeholder: 'Enter Your Password',
    },
  ];

  return (
    <>
    <Form formData={ field }/>
    </>
  );
};

export default App
