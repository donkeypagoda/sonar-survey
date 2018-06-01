import React, {Component} from "react"
import d3 from "d3"

class SurveyResults extends Component{
  constructor(){
    super()
    this.state = {
      data: []
    }
  }
  //d3 playground
  const testData = [
    { label: "Tacos", count: 15 },
    { label: "Burgers", count: 12 },
    { label: "Milkshakes", count: 7 },
    { label: "Beersh", count: 5 },
    { label: "Tater Tots", count: 10 },
  ]
  const width = 360
  const height = 360
  const radius = Math.min(width, height) / 2
  const color = d3.scaleOrdinal(d3.schemeCategory20b)

  render(){
    return (
      <div>
        TEST
      </div>
    )
  }

}


export default SurveyResults
