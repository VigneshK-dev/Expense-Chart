import { Card, CardBody, Col, Container, Row } from "reactstrap"
import ExpenseDate from "./ExpenseDate"


function ExpenseCard(props){




return(


<Container className="py-2">
   <Row>
   <Col md={12}>
    <Card className="boxcolor">
    <CardBody className="box">
 
           <div className="titlebox">
               <ExpenseDate newdate ={props.date}/>
               <h2 className="mx-5 text-light">{props.title}</h2>
           </div>

           <div>
            <button className="btn btn-primary">$ {props.price}</button>
           </div>

    </CardBody>  
    </Card>
     </Col>
   </Row> 
</Container>

)

}


export default ExpenseCard