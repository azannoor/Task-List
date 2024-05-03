import { Display_Alert,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR } from "./Actions"


const reducer = (state,action)=>{
    if(action.type === Display_Alert){
        return {...state,showAlert:true,alertType:'danger',alertText:'please provide all values!'}
    }
    if(action.type ===REGISTER_USER_BEGIN){
        return{...state}
    }
    if(action.type ===REGISTER_USER_SUCCESS){
        return{...state, token:action.payload.token,user:action.payload.user}
    }
    throw new Error(`no such action:${action.type}`)

}

export default reducer