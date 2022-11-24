import axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "13c59b8a-50ff-4eb3-9c7f-7f51a9ae5e0a",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instanse
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  showUserProfile(userId) {
    console.warn('Obsolete method. Use profileAPI object')
    return  profileAPI.showUserProfile(userId);
  },

  followUser(user) {
    return instanse.post(`/follow/${user}`, {}).then((response) => {
      return response.data;
    });
  },

  unfollowUser(user) {
    return instanse.delete(`follow/${user}`).then((response) => {
      return response.data;
    });
  },
};


export const profileAPI = {
  showUserProfile(userId) {
    return instanse.get(`profile/` + userId);
  },

  getStatus(userId) {
    return instanse.get(`profile/status/` + userId).then((response) => {
      return response.data;
    })
  },
  
  updateStatus(status) {
    return instanse.put(`profile/status/`, { status: status }).then((response) => {
      return response.data;
    })
  },
}

export const authAPI = {
  myProfile() {
    return instanse.get(`auth/me`);
  },
};
