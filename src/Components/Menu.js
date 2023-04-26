import React from 'react'
import {connect} from 'react-redux'
import { selectitem,defaultset} from '../Reduxcomponents/action'
const Menu = ({f_item,selectitem,defaultset}) => {
    const i=["AllItems","NonVeg","Veg","Fastfood"]
   
  return (
    <div>
      <center>
      
        <form>
            <label className='h5 form-label mt-3'>Choose an item</label>&nbsp;
            <select name={f_item} onChange={(e)=>selectitem(e.target.value)} className='form-select-sm'>
                {i.map((items,index)=>        
                 <option value={items} key={index} >{items}</option>
               )}
            </select>
        </form>
    
      </center>
    </div>
  )
}
const mapStateToProps=state=>({
    f_item:state.menureducer.items
    
})
export default connect(mapStateToProps,{selectitem,defaultset})(Menu)
