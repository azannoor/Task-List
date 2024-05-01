import { Display_Alert } from "./Actions"

const reducer = (state,action)=>{
    if(action.type === Display_Alert){
        return {...state,showAlert:true,alertType:'danger',alertText:'please provide all values!'}
    }
    throw new Error(`no such action:${action.type}`)
}

export default reducer