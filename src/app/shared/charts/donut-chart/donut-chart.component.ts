import { Component, OnInit, HostListener, Input } from '@angular/core';
import * as d3 from "d3";


@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {
  // @Input() data;

  margin = { top: 20, right: 20, bottom: 30, left: 40 }
  width = 500 - this.margin.left - this.margin.right;
  height = 200 - this.margin.top - this.margin.bottom;
  radius;
  svg;
  color;
  pie;
  data_ready;

  // Create dummy data
  public data = { "5-starts": 9, "4-starts": 20, "3-starts": 30, "2-starts": 8, "1-start": 12 }

  constructor() { }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    d3.select('#donut').select('svg').remove();
    this.drawChart();
    this.drawLegends();
  }

  ngOnInit() {
    // this.drawToolTip();
    this.drawChart();
    this.drawLegends();

  }

  drawToolTip() {
    const tooltipDiv = d3.select("body") //append in body coz position will be basic of mouse over.
      .append('div').attr('id', 'tooltip')
      .attr('style', 'position: absolute;width:30px;height:30px;background-color: #1f9e89;pointer-events : none;')
      .style("opacity", 0);

    tooltipDiv.append('span').attr('id', 'value');
  }

  drawChart() {

    this.radius = Math.min(this.width, this.height) - this.margin.left - this.margin.right;

    this.svg = d3.select("#donut")
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${this.width + this.margin.left + this.margin.right} ${this.height + this.margin.top + this.margin.bottom}`)
      .classed("svg-content-responsive", true)
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", "translate(" + (this.width / 2 - 30) + "," +
        (this.height / 2 + 20) + ")");

    // set the color scale
    this.color = d3.scaleOrdinal()
      .domain(Object.keys(this.data))
      .range(d3.schemeDark2);

    // Compute the position of each group on the pie:
    this.pie = d3.pie()
      .value(function (d) { return d['value'] })

    this.data_ready = this.pie(d3.entries(this.data))

    this.svg
      .selectAll('aaa')
      .data(this.data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(this.radius - 15)
        .outerRadius(this.radius))
      .attr('fill', (d) => { return (this.color(d.data.key)) })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)

    // .on("mouseover", function (d) {
    //   d3.select("#tooltip")
    //     .style("left", d3.event.pageX + "px")
    //     .style("top", d3.event.pageY + "px")
    //     .style("opacity", 1)
    //     .select("#value")
    //     .text(d.data.value);
    // })
    // .on("mouseout", function () {
    //   // Hide the tooltip
    //   d3.select("#tooltip")
    //     .style("opacity", 0);
    // });

  }

  drawLegends() {
    const thisInst = this;
    const legendList = d3.select("#donut svg").append('g').attr('class', 'legends_list');
    const legendG =
      legendList
        .selectAll(".legend")
        .data(thisInst.data_ready)
        .enter().append("g")
        .attr("transform", function (d, i) {
          return "translate(" + (thisInst.width - 50) + "," + (i * 15 + 20) + ")";
        })
        .attr("class", "legend");

    legendG.append("rect") // draw a matching color rect
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", function (d, i) {
        return thisInst.color(d['data']['key']);
      });

    legendG.append("text") // add the text
      .text(function (d) {
        return d['data']['key'] + '(' + d['data']['value'] + ')';
      })
      .style("font-size", 12)
      .attr("y", 10)
      .attr("x", 11);
  }

}

