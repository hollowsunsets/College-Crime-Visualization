function makeBarchart() {
    var color = d3.scaleOrdinal()
                  .range(["#bdd7e7","#6baed6","#2171b5"]);
    var cDataset;
    var keys;
    var columnMargin = {top: 20, right: 20, bottom: 30, left: 50},
    columnWidth = 550 - columnMargin.left - columnMargin.right,
    columnHeight = 400 - columnMargin.top - columnMargin.bottom;
  
    var svg = d3.select('#area').append('svg')
                                .attr('width', columnWidth + columnMargin.left + columnMargin.right)
                                .attr('height', columnHeight + columnMargin.top + columnMargin.bottom+45)
                                .attr('class', 'text-center')
    g = svg.append('g')
           .attr('transform', 'translate(' + columnMargin.left + ',' + columnMargin.top + ')');
  
    var divTooltip = d3.select("body")
                       .append("div")
                       .attr("class", "toolTip")
  
    var x0 = d3.scaleBand()
               .rangeRound([0, columnWidth])
               .paddingInner(0.1);
    
    var x1 = d3.scaleBand()
               .padding(0.01);
  
    var y = d3.scaleLinear()
              .rangeRound([columnHeight, 0]);
  
    var xAxis = d3.axisBottom()
                  .scale(x0);
  
    var yAxis = d3.axisLeft()
                  .scale(y);

  
   
}
