import {useEffect, useState} from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {

  useEffect(()=>{
    getCovidData()
  },[])
  const [data,setData]=useState([])

  const getCovidData=async()=>{
    const response=await fetch("https://data.covid19india.org/v4/min/data.min.json")
    const objData=await response.json()
    const arrayData = Object.entries(objData).map((e)=>{
      return(
        { [e[0]]: e[1] }
      )
    })
    console.log(arrayData);
    setData(arrayData)
  }

  
  return (
    <div className="App">
      <h1 className="container-fluid mb-3"><span className="font-weight-bold">India</span> Covid-19 Data</h1>
      <table className="table text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col">State</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Recovered</th>
            <th scope="col">Deaths</th>
            <th scope="col">Active</th>
            <th scope="col">Updated</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((currVal,index)=>{
              return(
                <>
                {}
                <tr key={index}>
                  <td scope="col">{Object.keys(currVal)[0]}</td>
                  <td scope="col">{Object.values(currVal)[0].total.confirmed}</td>
                  <td scope="col">{Object.values(currVal)[0].total.recovered}</td>
                  <td scope="col">{Object.values(currVal)[0].total.deceased}</td>
                  <td scope="col">{Object.values(currVal)[0].total.confirmed-Object.values(currVal)[0].total.recovered-Object.values(currVal)[0].total.deceased}</td>
                  <td scope="col">{Object.values(currVal)[0].meta.last_updated}</td>
                </tr>
                </>
              )
            })
          }
        </tbody>
        </table>
    </div>
  );
}

export default App;
