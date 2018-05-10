import axios from 'axios'
import {Toast} from 'antd-mobile'

axios.interceptors.request.use(function (config) {
    Toast.loading('loading...',0)
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // Do something with response data
    Toast.hide()
    return response;
}, function (error) {
    return Promise.reject(error);
});