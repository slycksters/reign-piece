import { Outlet } from 'react-router-dom';
import { FloatingNavbar } from '@components';
import './App.css';

function App() {
  return (
    <>
      <main className={'position-relative pb-10'}>
        <FloatingNavbar />
        <Outlet />
      </main>
    </>
  );
}

export default App;
