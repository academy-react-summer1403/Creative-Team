// import axios from "axios";
// import { promise } from "zod";
// const baseURL = import.meta.baseURL;
// const instance = axios.create({
//   baseURL: baseURL,
// });

// import { removeItem } from "../api/common/storage.servises";

// import { getItem } from "../api/common/storage.servises";

// const onSuccess = (response) => {
//   return response.data;
// };
// const onError = (err) => {
//   console.log(err);
//   if (err.response.status === 401) {
//     removeItem("token");
//     window.location.pathname = "/";
//   }
//   if (err.response.status >= 400 && err.response.status < 500) {
//     alert("Client Error:" + err.response.status);
//   }
//   return promise.reject(err);
// };
// instance.interceptors.response.use(onSuccess, onError);

// instance.interceptors.request.use((opt) => {
//   const token = getItem("token");
//   opt.headers.Authorization = "Bearer" + token;
//   return opt;
// });
// export default instance;
