import axios from 'axios'
import {getRedirectPath} from "../../util/redirect"

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
    msg:'',
    redirectTo:'',
    isAuth:false,
    user:'',
    pwd:'',
    type:''
}

export function user(state=initState,action) {
    switch (action.type){
        case REGISTER_SUCCESS:
            return {...state,isAuth:true,redirectTo:getRedirectPath(action.payload),msg:'',...action.payload}
        case LOGIN_SUCCESS:
            return {...state,isAuth:true,redirectTo:getRedirectPath(action.payload),msg:'',...action.payload}
        case ERROR_MSG:
            return {...state,msg:action.msg,isAuth:false}
        case LOAD_DATA:
            return {...state,isAuth:true,...action.payload}
        default:
            return state
    }
}

function error_msg(msg) {
    return {type:ERROR_MSG,msg}
}

function register_success(data) {
   return {type:REGISTER_SUCCESS,payload:data}
}

function login_success(data) {
    return {type:LOGIN_SUCCESS,payload:data}
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
                    dispatch(register_success({user,type}))
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
                    dispatch(login_success(res.data.data))
                } else {
                    dispatch(error_msg(res.data.msg))
                }
            })
    }
}

export function load_data(userinfo) {
    return {type:LOAD_DATA,payload:userinfo}
}