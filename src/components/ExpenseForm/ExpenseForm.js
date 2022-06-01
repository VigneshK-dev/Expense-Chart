import { Card, Container } from "reactstrap"
import "./ExpenseForm.css"
import React,{useState} from "react"

function ExpenseForm(props){

const [currtext,updatetext] = useState("")
const [curramount,updateamount] = useState("")
const [currdate,updatedate] = useState("")

const [currexpcard,showexpcard] = useState(false)




function update(event){
event.preventDefault()
updatetext("")
updateamount("")
updatedate("")
var newdata ={
    title:currtext,
    price:curramount,
    date:new Date(currdate)
}
props.ontransfer(newdata)
}

function expcard(){
showexpcard(!false)
}

function cancel(){
    showexpcard(false)
}

return (

    <Container className="form">
<Card className={currexpcard ? "p-4 my-3 formcard" :"d-none"}>
    
    <form onSubmit={update}>
     <div className="inputbox mb-4 py-5">

     <label className="fw-bold p-2">Title</label>
    <input  type="text" value={currtext} onChange={(event)=>updatetext(event.target.value)} className="form-control " />

    <label className="fw-bold p-2">Amount</label>
    <input type="number"   value={curramount} onChange={(event)=>updateamount(event.target.value)}  className="form-control" />

    </div>
    
<div className="d-flex">
<label className="fw-bold p-2">Date</label>
   <input type="date"  value={currdate} onChange={(event)=>updatedate(event.target.value)}  className="form-control date"/>
   </div>

   <button type="submit" className="btn btns btn-primary float-end ">Add Expense</button>
   <button type="submit" className="btn btns btn-primary float-end px-3 mx-4" onClick={cancel}>Cancel</button>
</form>



</Card>

<Card className= {currexpcard ? "d-none":"extformcard p-3 my-3" }>
 <button className="formbtn btn-primary text-center" onClick={expcard}>Add New Expense</button>
</Card>


</Container>
)



}


export default ExpenseForm