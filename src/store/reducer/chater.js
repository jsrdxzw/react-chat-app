import axios from "axios"

const USER_LIST = 'USER_LIST'

const state_init = {
    userList: []
}

export function chatters(state = state_init, action) {
    switch (action.type) {
        case USER_LIST:
            return {...state, userList: action.payload}
        default:
            return state
    }
}

function user_list(data) {
    return {type: USER_LIST, payload: data}
}

export function get_user_list(type) {
    return dispatch => {
        axios.get(`/user/list?type=${type}`)
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(user_list(res.data.data))
                }
            })
    }
}

