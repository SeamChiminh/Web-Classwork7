
import { FooterComp } from './components/FooterComp';
import { MainComp } from './components/MainComp';

import { NavbarComp } from './components/NavbarComp';


function App() {
  return (
    <>
      <NavbarComp/>
      <div className='my-10'>
          <MainComp/>
      </div>
      <FooterComp/>
    </>
  )
}

export default App;
