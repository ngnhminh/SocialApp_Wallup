import { create } from "zustand";
import UserApi from "../api/UserApi.js";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import BASE_URL from '../config/config.js';

export const useAuthStore = create((set, get) => ({
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],
  authUser: null,

  
  signup: async (data, navigate) => {
    set({ isSigningUp: true });

    const checkemail = await UserApi.checkEmailExists(data.email);
    if (checkemail.success) {
        toast.error("Email đã tồn tại");
        set({ isSigningUp: false });
        return;
    }

    const response = await UserApi.createUser(data);
    if (response.success) {
        toast.success("Tạo tài khoản thành công");
        navigate("/Login");
    } else {
        toast.error(response.error);
    }
    set({ isSigningUp: false });
  },

  login: async (data, navigate) => {
    set({ isLoggingIn: true });

    if(data.email == ""){
      toast.error("Email không được rỗng");
      return;
    }else if(data.password == ""){
      toast.error("Không được để trống mật khẩu");
      set({ isLoggingIn: false });
      return;
    }else{
      const user = await UserApi.getUserByEmailAndPassword(data.email, data.password);
      if(!user.success){
        toast.error(user.error);
        set({ isLoggingIn: false });
        return;
      }else{
        sessionStorage.setItem("user", JSON.stringify(user.data));
        toast.success("Đăng nhập thành công");
        navigate("/Home");
      }
    }
    set({ isLoggingIn: false });
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("error in update profile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  }
}));
