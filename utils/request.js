import axios from "axios";
import store from "@/store";
import router from "@/router";

//创建一个新的axios实例对象，用于小兔鲜的相关请求
export const baseURL = "http://pcapi-xiaotuxian-front-devtest.itheima.net/";
const instanceWithToken = axios.create({ baseURL });
const instanceWithoutToken = axios.create({ baseURL });

//配置请求拦截器 携带token
instanceWithToken.interceptors.request.use((config) => {
  const token = store.state.user.profile.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// instanceWithToken.interceptors.request.use((config) => {
//   const token = store.state.user.profile.token;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });
//
// instanceWithToken.interceptors.request.use((config) => {
//   const token = store.state.user.profile.token;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });
//
// instanceWithToken.interceptors.request.use((config) => {
//   const token = store.state.user.profile.token;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

//配置响应拦截器 精简数据层级，检查token是否过期

instanceWithToken.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      router
        .push("/login")
        .then(() => {
          console.log("跳转成功");
        })
        .catch(() => {
          console.log("跳转失败");
        });
      store.commit("user/setUser", {});
    }
    return Promise.reject(error);
  }
);

instanceWithoutToken.interceptors.response.use((response) => {
  return response.data;
});

const generateRequestConfig = (url, methods, data) => ({
  url: url,
  method: methods,
  [methods === "get" ? "params" : "data"]: data,
});

export function requestWithToken(url, methods, data) {
  return instanceWithToken(generateRequestConfig(url, methods, data));
}

export function requestWithoutToken(url, methods, data) {
  return instanceWithoutToken(generateRequestConfig(url, methods, data));
}
