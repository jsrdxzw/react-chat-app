import axios from 'axios'
import {getRedirectPath} from "../../util/redirect"

const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOGOUT = 'LOGOUT'

const initState = {
    msg:'',
    redirectTo:'',
    user:'',
    type:''
}

export function user(state=initState,action) {
    switch (action.type){
        case AUTH_SUCCESS:
            return {...state,redirectTo:getRedirectPath(action.payload),msg:'',...action.payload}
        case ERROR_MSG:
            return {...state,msg:action.msg,isAuth:false}
        case LOAD_DATA:
            return {...state,isAuth:true,...action.payload}
        case LOGOUT:
            return {...initState,redirectTo:'/login'}
        default:
            return state
    }
}

function error_msg(msg) {
    return {type:ERROR_MSG,msg}
}

function auth_success(data) {
   return {type:AUTH_SUCCESS,payload:data}
}

export function register({user,pwd,repeatpwd,type}) {
    if(!user||!pwd){
        return error_msg('username or password is necessary')
    }
    if(pwd!==repeatpwd){
        return error_msg('password is not same')
    }
    return dispatch=>{
        axios.post('/user/register',{user,pwd,type})
            .then(res=>{
                if(res.status===200&&res.data.code===0){
                    dispatch(auth_success({user,type}))
                } else {
                    dispatch(error_msg(res.data.msg))
                }
            })
    }
}

export function login({user,pwd}) {
    if(!user||!pwd){
        return error_msg('password or username is necessary')
    }
    return dispatch=>{
        axios.post('/user/login',{user,pwd})
            .then(res=>{
                if(res.status===200&&res.data.code===0){
                    dispatch(auth_success(res.data.data))
                } else {
                    dispatch(error_msg(res.data.msg))
                }
            })
    }
}

export function update(data) {
    return dispatch=>{
        axios.post('/user/update',data)
            .then(res=>{
                if(res.status===200&&res.data.code===0){
                    dispatch(auth_success(res.data.data))
                } else {
                    dispatch(error_msg(res.data.msg))
                }
            })
    }
}

export function load_data(userinfo) {
    return {type:LOAD_DATA,payload:userinfo}
}

export function logout(){
    return {type:LOGOUT}
}