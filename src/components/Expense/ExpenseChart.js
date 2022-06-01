import Chart from '../Chart/Chart';

function Expensechart(props){


var chartdata =[
{label:"Jan",value:0},
{label:"Feb",value:0},
{label:"Mar",value:0},
{label:"Apr",value:0},
{label:"May",value:0},
{label:"Jun",value:0},
{label:"Jul",value:0},
{label:"Aug",value:0},
{label:"Sep",value:0},
{label:"Oct",value:0},
{label:"Nov",value:0},
{label:"Dec",value:0}
]


for(let exp of props.Expense){
    var month = exp.date.getMonth()
   chartdata[month].value += exp.price
}

// console.log(chartdata)

return (
    <div>

<Chart data={chartdata}/>

    </div>
)

}

export default Expensechart