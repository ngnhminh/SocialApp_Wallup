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
            if (error.response && error.response.status === 404) {
                return null;
            }
            console.error("Lỗi khi gọi API:", error);
            throw error;
        }
    },

    checkEmailExists: async (email) => {
        try {
            const response = await api.get(`/USER-SERVICE/api/users/email/${email}`);
            return { success: true, error: "Tài khoản đã tồn tại" };
        } catch (error) {
            let errorMessage = "Lỗi khi gọi API";
            if (error.response && error.response.status === 404) {
                errorMessage = "Tài khoản hợp lệ";
            }
            return { success: false, error: errorMessage };
        }
    },

    getUserByEmailAndPassword: async (email, password) => {
        try {
            const response = await api.get(`/USER-SERVICE/api/users/checkloginwitemail/${email}/${password}`);
            return { success: true, data: response.data };
        } catch (error) {
            let errorMessage = "Lỗi khi gọi API";
            if (error.response && error.response.status === 404) {
                errorMessage = "Tài khoản hoặc mật khẩu không đúng";
            }
            return { success: false, error: errorMessage };
        }
    },

    createUser: async (user) => {
      try {
        console.log("Dữ liệu gửi lên:", JSON.stringify(user, null, 2));
        const response = await api.post(`/USER-SERVICE/api/users/createUser`, user);
        return { success: true, data: response.data };
      } catch (error) {
        console.error("Lỗi khi tạo tài khoản:", error.response ? error.response.data : error.message);
        return { success: false, error: error.response ? error.response.data.error : "Lỗi không xác định" };
      }
    },
};

export default UserApi;
