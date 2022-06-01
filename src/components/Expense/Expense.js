import ExpenseCard from './ExpenseCard';
import {  Container } from 'reactstrap';
import Filter from './Filter';
import { useState } from 'react';
import Expensechart from './ExpenseChart';

function Expense(props){

  const [currfilter,updatefilter]  = useState("2022")


function filtered(data){
updatefilter(data)
 }


var filterarr = props.item.filter(ele=>{
return ele.date.getFullYear().toString() === currfilter 
})


return(

<Container className='dark con' >
<Filter  onfilter ={filtered}/>
<Expensechart Expense={filterarr} />
{filterarr.length === 0 ? (<h4 className='text-light text-center fw-bold m-2'>no expense found</h4>    ) : (
filterarr.map(ele=>(
<ExpenseCard key={ele.id} title={ele.title} price={ele.price} date={ele.date}/>
)) 
)}
  </Container>
)


}



export default Expense