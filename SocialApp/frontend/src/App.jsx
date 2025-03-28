import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingPage from "./pages/SettingPage";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";

import { Routes, Route} from "react-router-dom";

import { Toaster } from "react-hot-toast";

function App() {


  return (
    <div className="flex flex-col relative">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path="/signup" element={<SignUpPage /> } />
      <Route path="/login" element={<LoginPage /> } />
      <Route path="/settings" element={<SettingPage />} />
      <Route path="/profile" element={<ProfilePage /> } />
      <Route path="/chat" element={<ChatPage /> } />
    </Routes>

    <Toaster />
    </div>
  )
}

export default App
