import React, {Component} from "react"
import "../App.css"
import * as d3 from "d3"

class SurveyResults extends Component{
  constructor(){
    super()
    this.state = {
      data: [5,10,1,3],
      size: [500, 500],
      surveyData: [],
      typeArr:[],
      resHash: {}
    }
    this.d3Node = React.createRef()

    this.drawBar = this.drawBar.bind(this)
  }

  async getResults(){
    let survey_id = window.location.href.slice(window.location.href.lastIndexOf("/") + 1)
    const res = await fetch(`http://localhost:5000/results/${survey_id}`)
    const results = await res.json()
    this.setState({
      surveyData: results.responses
    })
    console.log(this.state.surveyData)
  }

  componentDidMount(){
    this.getResults().then(res => {
      this.typeProcess().then(stuff => {
        this.drawBar()

      })
    })
  }

  async typeProcess(){
    let resHash = {}
    const stuff = await this.state.surveyData.map(res => {
      if (!resHash[res.question_id]){
        console.log("up dog")
        let quesHash = {
          id: res.question_id,
          answer_type: res.answer_type,
          prompt: res.prompt,
          answer_array: res.answer_array,
          response_string: [res.response_string]
        }
        resHash[res.question_id] = quesHash;
      }

      else if (resHash[res.question_id]) {
        resHash[res.question_id].response_string.push(res.response_string)
      }


      // if (this.state.typeArr.length < res.question_id) {
      //   switch (res.answer_type) {
      //     case "boolean":
      //       this.state.typeArr.push("boolean")
      //       console.log(this.state.typeArr);
      //       break;
      //     case "range":
      //       this.state.typeArr.push("range")
      //       console.log(this.state.typeArr);
      //       break;
      //     case "multiple_choice":
      //       this.state.typeArr.push("multiple_choice")
      //       console.log(this.state.typeArr);
      //       break;
      //     case "string":
      //       this.state.typeArr.push("string")
      //       console.log(this.state.typeArr);
      //       break;
      //     default:
      //       console.log("borked")
      //   }
      // }

    })
    this.state.resHash = resHash
    console.log(this.state.resHash)
  }

//   var margin = {top: 20, right: 20, bottom: 70, left: 40},
//     width = 600 - margin.left - margin.right,
//     height = 300 - margin.top - margin.bottom;
//
// // Parse the date / time
// var	parseDate = d3.time.format("%Y-%m").parse;
//
// var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
//
// var y = d3.scale.linear().range([height, 0]);
//
// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom")
//     .tickFormat(d3.time.format("%Y-%m"));
//
// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left")
//     .ticks(10);
//
// var svg = d3.select("body").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");
//
// d3.csv("bar-data.csv", function(error, data) {
//
//     data.forEach(function(d) {
//         d.date = parseDate(d.date);
//         d.value = +d.value;
//     });
//
//   x.domain(data.map(function(d) { return d.date; }));
//   y.domain([0, d3.max(data, function(d) { return d.value; })]);
//
//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis)
//     .selectAll("text")
//       .style("text-anchor", "end")
//       .attr("dx", "-.8em")
//       .attr("dy", "-.55em")
//       .attr("transform", "rotate(-90)" );
//
//   svg.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)
//     .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 6)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("Value ($)");
//
//   svg.selectAll("bar")
//       .data(data)
//     .enter().append("rect")
//       .style("fill", "steelblue")
//       .attr("x", function(d) { return x(d.date); })
//       .attr("width", x.rangeBand())
//       .attr("y", function(d) { return y(d.value); })
//       .attr("height", function(d) { return height - y(d.value); });
//
// });


  drawBar(qId) {
   const node = this.d3Node
   const dataMax = d3.max(this.state.data)
   const yScale = d3.scaleLinear()
      .domain([0, dataMax])
      .range([0, this.state.size[1]])

    // const xAxis = d3.svg.axis()
    // xAxis.ticks(4)

  d3.select(node)
     d3.selectAll('rect')
     .data(this.state.data)
     .enter()
     .append('rect')

  d3.select(node)
     d3.selectAll('rect')
     .data(this.state.data)
     .exit()
     .remove()

  d3.select(node)
     d3.selectAll('rect')
     .data(this.state.data)
     .style('fill', '#fe9922')
     .attr('x', (d,i) => i * 25)
     .attr('y', d => this.state.size[1] - yScale(d))
     .attr('height', d => yScale(d))
     .attr('width', 25)
     console.log("tacos")
     // .call(xAxis)
  }


  render(){
    return (
      <svg ref={this.d3Node} width={500} height={500}>
      </svg>
    )
  }

}


export default SurveyResults
