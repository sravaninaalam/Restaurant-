import React from 'react'
import {connect} from 'react-redux'
import { setnum,resetnum } from '../Reduxcomponents/action'

const Tablenum = ({t_num,setnum,resetnum}) => {
     const n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    // const[tablenum,setTablenum]=React.useState('')
    const active="btn btn-outline-primary active m-2"
    const inactive="btn btn-outline-primary m-2"
  return (
    <div>
     <center>
     <div>
        <div>
            <h4>Select Table Number</h4>
          <span>
            {n.map((num,index)=>
            {
                return(
                    <div style={{display:"inline"}} key={index}>
                        {/* <button className={tablenum===num?active:inactive} onClick={()=>setTablenum(num)}>{num}</button> */}
                        <button className={t_num===num?active:inactive} onClick={()=>setnum(num)}>{num}</button>
                    </div>
                )
            }
            )}
            </span>
        </div>
      </div>
     </center>
    </div>
  )
}

const mapStateToProps=state=>(
  {
    t_num:state.tablereducer.num
  }
)

export default connect(mapStateToProps,{setnum,resetnum})(Tablenum)
