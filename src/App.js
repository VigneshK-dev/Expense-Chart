import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Expense from './components/Expense/Expense';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import React,{useState} from 'react';
import { Container } from 'reactstrap';

 
var items = [

  {
    id:1,
    title:"New tv",
    price:213.26,
    date:new Date(2020,12,17)
  },
  {
    id:2,
    title:"Wifi",
    price:745.02,
    date:new Date(2021,8,3)
  },
  
  {
    id:3,
    title:"Iphone",
    price:1099,
    date:new Date(2022,2,27)
  },
  
  {
    id:4,
    title:"Bills",
    price:1583.10,
    date:new Date(2020,4,13)
  },
  {
    id:5,
    title:"Electricity",
    price:199.6,
    date:new Date(2022,1,17)
  }
  
  ]
  



function App() {

const [curritem,updateitem] = useState(items)


function transfer(data){
var newdata = {
  id:Math.random().toString(),
  ...data
}


updateitem(prev=>{
return [newdata,...prev]
})
}


  return (
  <Container>
   <h1 className='text-center text-light m-3'>Expenses</h1>
   <ExpenseForm ontransfer={transfer}/>
   <Expense item = {curritem}/>
   </Container> 
  );
}

export default App;
