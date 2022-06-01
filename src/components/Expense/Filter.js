import "./Filter.css"


function Filter(props){



function updatedfilter(event){
props.onfilter(event.target.value)
}

return (

    <div className="filbox m-4">
  <h3 className="text-light ">Filter by year</h3>
  <select className="sel" onChange={updatedfilter}>
<option value={2022}>2022</option>
<option value={2021}>2021</option>
<option value={2020}>2020</option>
<option value={2019}>2019</option>
  </select>
   </div>
)


}


export default Filter