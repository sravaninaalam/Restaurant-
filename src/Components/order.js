import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const order = ({items}) => {
  return (
   <>
      {items.length>0?
      <div>
               <div className='mt-4 text-center'>
               <h4 style={{fontStyle:"italic",fontFamily:"cursive",color:"crimson"}}>
                   Your orders so far..!ThankYou for ordering 💛 Enjoy your food</h4>
                   <hr></hr>
             </div>
        <div className='container mt-3'>
             <div className='row'>
                {items.map((item)=>
                <div className='col-md-4 mt-2'>
                <div className='card' style={{width:"18rem",backgroundColor:"seashell"}} key={item.id}>
                    <img src={item.imgdata} style={{width:"18rem",height:"15rem"}} alt='ordered item' className='card-img-top img-thumbnail'/>
                    <h4 className='card-body'>{item.rname}</h4>
                    
                </div>
                </div>
                )}
                </div>
                </div>
            </div>
            :<div>
                 <h4 className='text-center mt-4'>No Orders Placed..!</h4>
                
            </div>  
            
        
    } 
    <div className='mt-4 text-center'>
        <Link to='/'>
               <button className='btn btn-primary'>BackHome</button>
          </Link>
    </div>
  
     </>
  )
}
const mapStateToProps=state=>({
    items:state.orderreducer
})
export default connect(mapStateToProps)(order)

