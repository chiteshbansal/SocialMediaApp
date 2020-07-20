const API_root = `http://codeial.com:8000/api/v2`;

export const APIurls = {
  login: () => {
    console.log(`${API_root}/users/login`);
    return (`${API_root}/users/login`);
  },
  signup: () => {
    return `${API_root}/users/signup`;
  },
  editProfile :() =>{
    return `${API_root}/users/edit`;
  },
  fetchPosts: (page, limit) => {
    return `${API_root}/posts?page=${page}&limit=${limit}`;
  },
  userProfile :(userId) => {
    return `${API_root}/users/${userId}`
  },
  fetchFriends :()=>{
    return `${API_root}/friendship/fetch_user_friends`;
  },
  addFriend :(userId)=>{
    return `${API_root}/friendship/create_friendship?user_id=${userId}`;
  },
  removeFriend :(userId)=>{
    return `${API_root}/friendship/remove_friendship?user_id=${userId}`;
  },
  createPost :() =>{
    return `${API_root}/posts/create`;
  },
};
