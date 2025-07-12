import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AdminProvider } from './contexts/AdminContext';
import AdminLogin from './pages/admin/AdminLogin';

function App() {
  return (
    <AuthProvider>
      <AdminProvider>
        <Routes>
          <Route path="*" element={<AdminLogin />} />
        </Routes>
      </AdminProvider>
    </AuthProvider>
  );
}