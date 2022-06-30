import { Routes as WrapperRoutes, Route, BrowserRouter}  from 'react-router-dom';
import Login from './pages/Login';
import PsicologoCreate from './pages/Psicologo/create';
import PsicologoList from './pages/Psicologo/list';

export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/cadastro" element={<PsicologoCreate />} />
        <Route path="/lista" element={<PsicologoList />} />
        <Route path="/login" element={<Login />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}