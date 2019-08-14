import axios from 'axios';
let http = {};
const urlall= 'https://www.easy-mock.com/mock/5d4b87243e236e5030fd37f6/cyclvadmin/'
// http.get = (url)=>{
//     return new Promise((resolve)=>{
//         axios.get(urlall + url).then(function (res) {
//             resolve(res.data)
//         }).catch(function (error) {
//             console.log(error);
//         })
//     })
// }
http.get =function getters(url){
    return new Promise(function (resolve) {
        axios.get(urlall + url)
        .then(function (res) {
            resolve(res.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    })
}

export default http