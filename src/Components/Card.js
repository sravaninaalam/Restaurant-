import React,{useState,useEffect} from 'react'
import DataApi from './DataApi'
import {connect} from 'react-redux'
import {addorder,resetnum,defaultset} from '../Reduxcomponents/action'
const Card = ({t_num,f_item,resetnum,defaultset,addorder}) => {
    const [api,setApi]=useState(DataApi)
    const[cloneapi,setCloneApi]=useState(DataApi)
    useEffect(()=>{
        if(f_item!=="AllItems"){
            const variable=cloneapi.filter(i=>i.type===f_item)
            setApi(variable)
        }
        else{
            setApi(cloneapi)
        }
       
    },[f_item])
    const clickHandle=async(id,rname,imgdata,rating)=>{
        if(!t_num){
            alert("please select table number first")
          }
          else{
           await addorder(id,rname,imgdata,rating)
            alert("succesfully ordered")
            await resetnum()
            await defaultset()
          }

    }
  return (
    <>
    <div>
        {api.length>0?
         <div className='container-fluid mt-3'>
         <div className='row mt-2'>
           {api.map((item)=>
           <div className='col-md-3 mt-2'>
               <div className='card' key={item.id} style={{width:"18rem",backgroundColor:"seashell"}}>
                   <img src={item.imgdata} className='card-img-top rounded img-fluid' alt="food" style={{width:"18rem",height:"15rem"}}/>
                   <div className='card-body'>
                       <h4>{item.rname}</h4>
                       <h5>price-{item.price}/-</h5>
                      <button className='btn btn-primary' onClick={()=>{clickHandle(item.id,item.rname,item.imgdata,item.rating)}}>Place Order</button>
                   </div>
               </div>
           </div>
           )}
         </div>
       </div>
        // <div className='container-fluid mt-3'>
        //     <div className='row mt-2'>
        //         {api.map(value=>
        //             <div className='col-md-3 mt-2'>
        //                 <div className='card' style={{width:"18rem"}} key={value.id}>
        //                     <img src={value.imgdata} alt="food" className='card-img-top m-2' style={{width:"18rem",height:"15rem"}}/>
        //                     <div className='card-body'>
        //                         <h3>{value.rname}</h3>
        //                         <h3>{value.rating}</h3>
        //                         <button className='btn btn-primary' onClick={()=>{clickHandle(value.id,value.rname,value.imgdata,value.rating)}}>Place Order</button>
        //                     </div>
        //                 </div>
        //             </div>
        //             )}
        //     </div>
        // </div>
        :
        <div className='spinner-border text-primary mt-3'>
              
        </div>
        }
    </div>
    </>
  )
}
const mapStateToProps=state=>({
    t_num:state.tablereducer.num,
    f_item:state.menureducer.items
})
export default connect(mapStateToProps,{addorder,resetnum,defaultset})(Card)
