import axios from "axios";
import store from "@/store";

//创建一个新的axios实例对象，用于小兔鲜的相关请求
export const baseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net/";
const instanceWithToken = axios.create({ baseURL });
// const instanceWithoutToken = axios.create({ baseURL });

//配置请求拦截器 携带token
instanceWithToken.interceptors.request.use((config) => {
  const token = store.state.user.profile.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
