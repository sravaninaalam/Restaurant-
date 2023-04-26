export const setnum=(number)=>async dispatch=>{
    dispatch({
        type:"SETNUM",
        payload:number
    })
}
export const resetnum=()=>async dispatch=>{
    dispatch({
        type:"RESETNUM"
    })
}
export const selectitem=(item)=>async dispatch=>{
    dispatch({
        type:"SELECTITEM",
        payload:item
    })
}
export const defaultset=()=>async dispatch=>{
    dispatch({
        type:"DEFAULTSET"
    })
}

export const addorder=(id,rname,imgdata,rating)=>async dispatch=>{
    dispatch({
        type:'ADDORDER',
        payload:{
                id:id,
                rname:rname,
                imgdata:imgdata,
                rating:rating
                
        }
    })
}