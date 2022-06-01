import { Card } from "reactstrap"

function ExpenseDate(props){

    var month = props.newdate.toLocaleString('en-US',{month:"short"})
    var day = props.newdate.toLocaleString('en-US',{day:"2-digit"})
    var year = props.newdate.getFullYear()


return (

<Card  className="datebox">
  <div className="text-light text-center">
   <div className="month p-1"> {month} </div>
   <div className="year"> {year} </div>
   <div className="day">  {day}  </div>
   </div>  
</Card>

)


}



export default ExpenseDate