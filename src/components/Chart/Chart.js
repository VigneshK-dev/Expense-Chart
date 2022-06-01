import ChartBar from "./ChartBar"
import { Card, CardBody, Col, Container, Row } from "reactstrap"
import "./Chart.css"




function Chart(props){


var allvalues = props.data.map(ele=>(
  ele.value
))
var maxvalue = Math.max(...allvalues)
// console.log(maxvalue)
return (


<Container>

<Row>
<Col md={12}>
<Card  className="chart my-3 p-1 ">

  <CardBody  >

  <main className="main" > 
{props.data.map(ele=>(
  <ChartBar key = {ele.label} max={maxvalue} name={ele.label} price={ele.value}/>
))}


   </main>

            
  </CardBody>
 

</Card>

</Col>

</Row>


</Container>

)

}


export default Chart