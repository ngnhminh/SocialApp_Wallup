import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingPage from "./pages/SettingPage";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider } from "./context/AuthProvider";
import { Toaster } from 'react-hot-toast';

const App = () => {
  const location = useLocation();  // Sử dụng useLocation để lấy đường dẫn hiện tại

  return (
    <AuthProvider>
        <div className="flex flex-col relative">
          {location.pathname !== '/Login' && location.pathname !== '/Signup' && <Navbar />}

          <Routes>
            {/* Điều hướng trang khởi đầu */}
            <Route path="/" element={<Navigate to="/Login" replace />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Signup" element={<SignUpPage />} />
            <Route path="/Login" element={<LoginPage />} />
            {/* <Route path="/settings" element={<SettingPage />} /> */}
            <Route path="/Profile" element={<ProfilePage />} />
            {/* <Route path="/chat" element={<ChatPage />} /> */}
          </Routes>

          <Toaster />
        </div>
    </AuthProvider>
  );
};

export default App;
