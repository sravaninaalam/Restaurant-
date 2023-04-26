const init=[]
export default function orderreducer(state=init,action){
    const{type,payload}=action
    switch(type){
        case 'ADDORDER':
            return[...state,payload]
        default:
            return state
    }
}