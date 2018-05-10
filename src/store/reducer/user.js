import axios from 'axios'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const initState = {
    msg:'',
    isAuth:false,
    user:'',
    pwd:'',
    type:''
}

export function user(state=initState,action) {
    switch (action.type){
        case REGISTER_SUCCESS:
            return {...state,isAuth:true,msg:'',...action.payload}
        case ERROR_MSG:
            return {...state,msg:action.msg,isAuth:false}
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