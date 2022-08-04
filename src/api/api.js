import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "5b4f131a-2bd8-47e2-a021-b9e66418d19d",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userID) {
    return instance.post(`follow/${userID}`);
  },
  unfollow(userID) {
    return instance.delete(`follow/${userID}`);
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please use ProfileAPI obkect');
    // return instance.get(`profile/${userId}`);
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status});
  },

};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe});
  },
  
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//   return instance.get(baseUrl + `follow/${u.id}`).then((response) => {
//     return response.data;
//   });
// };
