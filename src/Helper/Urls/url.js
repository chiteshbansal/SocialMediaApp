const API_root = `http://codeial.com:8000/api/v2`;

export const APIurls = {
  login: () => {
    return `${API_root}/users/login`;
  },
  signup: () => {
    return `${API_root}/users/signup`;
  },
  fetchPosts: (page, limit) => {
    return `${API_root}/posts?page=${page}&limit=${limit}`;
  },
};
