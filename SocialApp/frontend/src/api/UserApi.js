import api from "./api";

const UserApi = {
    getUserByUsername: async (username) => {
      try {
        const response = await api.get(`/USER-SERVICE/api/users/username/${username}`);
        return response.data;
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        throw error;
      }
    },
    getUserByEmail: async (email) => {
      try {
        const response = await api.get(`/USER-SERVICE/api/users/email/${email}`);
        return response.data;
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        throw error;
      }
    },
    getUserByEmailAndPassword: async (email, password) => {
        try {
          const response = await api.get(`/USER-SERVICE/api/users/checkloginwitemail/${email}/${password}`);
          return response.data;
        } catch (error) {
          console.error("Lỗi khi gọi API:", error);
          throw error;
        }
      }
  };
  
export default UserApi;
  

