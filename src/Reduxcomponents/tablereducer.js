const initial={
    num:null
}
export default function tablereducer(state=initial,action){
    const {type,payload}=action
    switch(type){
        case 'SETNUM':
            return{...state,num:payload}
        case 'RESETNUM':
            return{...state,num:null}
        default:
            return state
    }
}