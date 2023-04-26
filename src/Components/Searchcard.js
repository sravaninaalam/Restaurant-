import React from 'react'
import {connect} from 'react-redux'
import {addorder,resetnum,defaultset} from '../Reduxcomponents/action'
const Searchcard = ({t_num,f_item,resetnum,defaultset,addorder,data}) => {
   
   
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
        {data.length>0?
         <div className='container-fluid mt-3'>
         <div className='row mt-2'>
           {data.map((item)=>
           <div className='col-md-3 mt-2'>
               <div className='card' key={item.id} style={{width:"18rem",backgroundColor:"seashell"}}>
                   <img src={item.imgdata} className='card-img-top rounded' alt="food" style={{width:"18rem",height:"15rem"}}/>
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
export default connect(mapStateToProps,{addorder,resetnum,defaultset})(Searchcard)
