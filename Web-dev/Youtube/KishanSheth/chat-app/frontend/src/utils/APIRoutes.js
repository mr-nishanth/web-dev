import axios from "axios";

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const host = "http://localhost:3500";
axios.defaults.baseURL = host;
export const registerRoute = `/api/auth/register`;
export const loginRoute = `/api/auth/login`;
export const setAvatarRoute = `/api/auth/setAvatar`;
export const chatRoute = `/api/auth/login`;
