import "./ChartBar.css"


function ChartBar(props){
var Fill
 if(props.max===0){
    Fill = 0 + "%"
 } else{
 Fill = Math.floor((props.price/props.max)*100) + "%"
 }

return (

<div className="barbox ">

<div className="innerbar">

  <div className="fill" style={{height:Fill}} >

   </div>
</div>

 <div className="barname">
{props.name}
    </div>
 </div>

)
}


export default ChartBar