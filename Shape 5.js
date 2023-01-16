var svg = d3.select("body")
            .append("svg")
            .attr("width",680)
            .attr("height",680)

        svg.append('line')
            .attr('stroke-width', 5)
            .attr('x1', 100)
            .attr('y1', 300)
            .attr('x2', 100)
            .attr('y2', 680)
            .attr('stroke', 'grey');

        svg.append('line')
            .attr('stroke-width', 5)
            .attr('x1', 100)
            .attr('y1', 320)
            .attr('x2', 680)
            .attr('y2', 320)
            .attr('stroke', 'grey');

        svg.append('circle')
            .attr('cx',100)
            .attr('cy',300)
            .attr('r',2)
            .attr('stroke', 'grey')
            .attr('fill', 'grey');

        svg.append('circle')
            .attr('cx',200)
            .attr('cy',320)
            .attr('r',20)
            .attr('stroke', 'black');

        svg.append('rect')
           .attr('stroke-width', 25)
           .attr('width', 100)
           .attr('height', 30)
           .attr('x',270)
           .attr('y', 250)
           .attr('stroke', 'black')
           .attr('fill', 'black');

        svg.append('circle')
           .attr('cx',260)
           .attr('cy',265)
           .attr('r',27)
           .attr('stroke', 'black');

        svg.append('line')
           .attr('stroke-width', 30)
           .attr('x1', 247)
           .attr('y1', 265)
           .attr('x2', 300)
           .attr('y2', 180)
           .attr('stroke', 'black');

        svg.append('line')
           .attr('stroke-width', 30)
           .attr('x1', 288)
           .attr('y1', 185)
           .attr('x2', 460)
           .attr('y2', 185)
           .attr('stroke', 'black');

        svg.append('line')
           .attr('stroke-width', 38)
           .attr('x1', 370)
           .attr('y1', 250)
           .attr('x2', 460)
           .attr('y2', 350)
           .attr('stroke', 'black');

        svg.append('circle')
           .attr('cx',460)
           .attr('cy',350)
           .attr('r',18)
           .attr('stroke', 'black');

        

        var lineFun = d3.svg.line()
           .x(function (d) { return d.x; })
           .y(function (d) { return d.y; })
           .interpolate("linear");

       leg = [{ "x": 450, "y": 240 },//left leg
           { "x": 490, "y":  240},
           { "x": 570, "y":  380},
           { "x": 570, "y":  380},
           { "x": 530, "y":  380},
           
           ];
       
     

       svg.append("path")
          .attr("d", lineFun(leg))
          .attr("stroke", "black")
          .attr("stroke-width", 5)
          .attr("fill", "black");

        svg.append('line')
          .attr('stroke-width', 38)
          .attr('x1', 555)
          .attr('y1', 380)
          .attr('x2', 555)
          .attr('y2', 220)
          .attr('stroke', 'black');

        svg.append('circle')
          .attr('cx',555)
          .attr('cy',220)
          .attr('r',18)
          .attr('stroke', 'black');

        svg.append('circle')
          .attr('cx',551)
          .attr('cy',380)
          .attr('r',22)
          .attr('stroke', 'black');

        

