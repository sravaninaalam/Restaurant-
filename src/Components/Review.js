import React, { useState ,useEffect} from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
const getLocalData=()=>{
    const lists= localStorage.getItem("reviews")
    if(lists){
     return JSON.parse(lists)
    }
    else{
     return[]
    }
 }
const Review = () => {
  const[feedback,setFeedBack]=useState('')
  const[fb,setFb]=useState(getLocalData())
  const[editid,seteditId]=useState(null)
  const handleForm=(e)=>{

    e.preventDefault()
    if(feedback && editid){
      setFb(
        fb.map((i)=>{
          if(i.id===editid){
            return{i,name:feedback}
          }
          return i
        })
      )
      setFeedBack("")
      seteditId(null)
    }
        else{
          if(feedback){
    const newfb={
      id:new Date().getTime().toString(),
      name:feedback
    }
    setFb([...fb,newfb])
    setFeedBack('')
  }
}
  }
  const deletereview=(index)=>{
    const updated=fb.filter((i)=>i.id!==index)
    setFb(updated)
}
const editreview=(ind)=>{
  const edited=fb.find((i)=>i.id===ind)
  setFeedBack(edited.name)
  seteditId(ind)
}
  useEffect(()=>{
    localStorage.setItem("reviews",JSON.stringify(fb))
},[fb])
  return (
    <>
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
              <Link to='/'>
              <h1 className='navbar-brand'>< ArrowBackIcon/></h1></Link>
              <h1 className='navbar-brand'>EATPOINT</h1>
        </nav>
  
    <div className='container mt-4'>
    <form onSubmit={handleForm}>
          <label for="feedback">Feedback:</label>
            <textarea className='form-control' rows="3" cols="5" id="feedback" value={feedback} onChange={(e)=>setFeedBack(e.target.value)}></textarea>
            <br></br>
        <button className='btn btn-primary'>SUBMIT</button>

    </form>
       <div className='mt-3 '>

       {fb.map((i)=>
         <div key={i.id} className='container border mt-3' >
           <h5>{i.name}
           <span className='float-end' style={{color:"red"}}><DeleteOutlinedIcon onClick={()=>deletereview(i.id)}/></span>
                <span className='float-end 'style={{color:"blue"}}><EditTwoToneIcon onClick={()=>editreview(i.id)}/></span>
           </h5>
         </div>
        )}

       </div>

    </div>
    </>
  )
}

export default Review
