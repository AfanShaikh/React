import './App.css';
import { PropsOverView } from './Components/PropsOverView';
import { PropsValidations } from './Components/PropsValidations';

function App() {
  

  return (
    <>
    <PropsOverView
      Components = {1}
      Name = "Afan Shaikh"
      Email = "shaikhaffan.8286@gmail.com"
      Phone = {8591051582} 
    />
    <PropsOverView
      Components = {2}
      Name = "Nilu"
      Email = "niluyadav@gmail.com"
    />
    <PropsOverView />
    <PropsValidations label="Afan" length={6} />
    </>
  )
}

export { App }
