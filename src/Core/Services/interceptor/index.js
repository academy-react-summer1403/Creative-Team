// import axios from "axios";
// import { promise } from "zod";
// const baseURL = import.meta.baseURL;
// const instance = axios.create({
//   baseURL: baseURL,
// });

// const onSuccess = (response) => {
//   return response.data;
// };
// const onError = (err) => {
//   console.log(err);
//   if (err.response.status >= 400 && err.response.status < 500) {
//     alert("Client Error:" + err.response.status);
//   }
//   return promise.reject(err);
// };
// instance.interceptors.response.use(onSuccess, onError);

// instance.interceptors.request.use((opt) => {
//   opt.headers.Authorization = "";
//   return opt;
// });
// export default instance;
