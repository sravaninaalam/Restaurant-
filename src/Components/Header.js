import React,{useState} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import dataapi from './DataApi'
import Card from './Card'
import Tablenum from './Tablenum'
import Menu from './Menu'
import Searchcard from './Searchcard'
const Header = ({count}) => {
      
    const[data,setData]=useState(dataapi)
    const[clonedata,setClonedata]=useState(dataapi)
    const[search,setSearch]=useState("")
    const[searchid,setSearchId]=useState(null)
    const submitHandler=(e)=>{
       e.preventDefault()
         if(!search){
          setData(clonedata)
         }
         else{
          const searched_item=clonedata.filter(i=>i.rname.toLowerCase()===search.toLowerCase())
          setData(searched_item)
          setSearchId(true)
         }
         setSearch("")
    }
  return (
    <>
     <nav className='navbar navbar-expand-sm bg-dark navbar-dark '>
        <div className='container-fluid'>
            <Link to='/about' style={{textDecoration:"none"}}> 
            <h1 className='navbar-brand' style={{fontStyle:"italic",fontFamily:"cursive"}}>
                   EATPOINT
                  </h1>
             </Link>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                 <span className="navbar-toggler-icon"></span>
             </button>
            <div className="collapse navbar-collapse" id="mynavbar">
                  <ul className='navbar-nav me-auto'>
                    <li className='navbar-item'>    
                        <a href='/review' className='nav-link'>Review</a>
                    </li>
                  </ul>
                  <form className='d-flex' onSubmit={submitHandler}>
                  <input type='text' className='form-control me-3' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search'/>
             </form>
                  <Link to='/order'>
                      <button className='btn btn-primary'>ORDERS 
                              &nbsp; <span className='badge bg-danger'>{count}</span>
                      </button>
                  </Link>
               
            </div>
        </div>
       </nav>
       {searchid?<div>
        <Tablenum/>
     
       <Searchcard data={data}/>
       </div>:
       <div>
          <Tablenum/>
       <Menu/>
       <Card/>
        </div>}
    </>
  )
}

const mapStateToProps=state=>({
  count:state.orderreducer.length
})
export default connect(mapStateToProps)(Header)
