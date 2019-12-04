import { Component, OnInit, HostListener, Input } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.scss']
})

export class HorizontalBarComponent implements OnInit {
  // @Input() data;
  data = [{ "name": "Acc", "value": 33 }, { "name": "Rej", "value": 12 }, { "name": "Can", "value": 41 }, { "name": "NR", "value": 16 }, { "name": "OTW", "value": 59 }, { "name": "Sta", "value": 29 }, { "name": "Com", "value": 29 }];

  // set the dimensions and margins of the graph
  margin = { top: 20, right: 20, bottom: 30, left: 40 }
  width = 500 - this.margin.left - this.margin.right;
  height = 200 - this.margin.top - this.margin.bottom;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    d3.select('#graphic').select('svg').remove();
    this.drawChart();
  }

  ngOnInit() {
    this.drawChart();
  }

  drawChart() {
    const thisInst = this;

    // set the ranges
    var y = d3.scaleBand()
      .range([this.height, 0])
      .padding(0.1);

    var x = d3.scaleLinear()
      .range([0, this.width]);

    var svg = d3.select("#graphic").append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${this.width + this.margin.left + this.margin.right} ${this.height + this.margin.top + this.margin.bottom}`)
      .classed("svg-content-responsive", true)
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + this.margin.left + "," + (this.margin.top - 10) + ")");

    this.data.forEach(function (d) {
      d.value = +d.value;
    });

    x.domain([0, (d3.max(this.data, function (d) { return d.value; }) + 5)]) // added static value 5 for scale to extend
    y.domain(this.data.map(function (d) { return d.name; }));
    //y.domain([0, d3.max(data, function(d) { return d.value; })]);

    svg.selectAll(".bar")
      .data(this.data)
      .enter().append("path")
      .attr("class", "bar")
      .attr("d", function (d) {
        return thisInst.rightRoundedRect(x(0), y(d.name), x(d.value) - x(0), y.bandwidth(), 4);
      })
      //.attr("x", function(d) { return x(d.value); })
      // .attr("width", function (d) { return x(d.value); })
      // .attr("y", function (d) { return y(d.name); })
      // .attr("height", y.bandwidth())
      .attr("fill", "#1f9e89");

    //add text
    svg.selectAll('.text')
      .data(this.data)
      .enter()
      .append("g")
      .attr('class', 'text')
      .append("text")
      .text(d => {
        return d.value;
      }).attr("x", (d) => {
        return x(d.value) - 20;
      }).attr("y", (d) => {
        return y(d.name) + 16;
      })

    // add the x Axis
    svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x).tickSizeOuter(0));

    // add the y Axis
    svg.append("g")
      .call(d3.axisLeft(y).tickSizeOuter(0));
  }

  rightRoundedRect(x, y, width, height, radius) {
    return "M" + x + "," + y
      + "h" + (width - radius)
      + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius
      + "v" + (height - 2 * radius)
      + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius
      + "h" + (radius - width)
      + "z";
  }

}
