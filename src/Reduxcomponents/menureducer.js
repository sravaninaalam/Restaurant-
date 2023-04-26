const initial={
    items:"AllItems"
}
export default function menureducer(state=initial,action){
    const{type,payload}=action
    switch(type){
        case 'SELECTITEM':
            return ({...state,items:payload})
        case 'DEFAULTSET':
            return({...state,items:"AllItems"})
        default:
            return state
    }
}