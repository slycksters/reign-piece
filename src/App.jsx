import { Outlet } from 'react-router-dom';
import { FloatingNavbar } from '@components';
import './App.css';

function App() {
  return (
    <>
      <main className={'position-relative mb-5'}>
        <FloatingNavbar />
        <Outlet />
      </main>
    </>
  );
}

export default App;
