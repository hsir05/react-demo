import axios from 'axios'

export function requestData(url,method,data) {
  return axios({
        method:method,
        url:`api/capital${url}`,
        data:data,
        // baseURL: 'https://some-domain.com/api/',
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        //设置超时时间
        // timeout: 1000,

        responseType: 'json', //返回数据类型// default
        withCredentials:true
    }).then(response => {
        return response
    }).catch(err => {
      throw err
    });
}

// 并发请求
// function getUserAccount() {
//   return axios.get('/user/12345');
// }
//
// function getUserPermissions() {
//   return axios.get('/user/12345/permissions');
// }
//
// axios.all([getUserAccount(), getUserPermissions()])
//   .then(axios.spread(function (acct, perms) {
//     // Both requests are now complete
//   }));
