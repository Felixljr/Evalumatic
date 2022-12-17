import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EditOrExport from './pages/EditOrExport';
import Completed from './pages/Completed';
import ERR404 from './ERR404';

const App = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Login />} />
        {/* Separate/protected route */}
        <Route path='dashboard'>
          <Route index element={<Dashboard />} />
          <Route path='completed' element={<Completed />} />
          <Route path='edit' element={<EditOrExport />} />
        </Route>
      </Route>
      {/* Error 404 not found */}
      <Route path='*' element={<ERR404 />} />
    </Routes>
  );
}

export default App;