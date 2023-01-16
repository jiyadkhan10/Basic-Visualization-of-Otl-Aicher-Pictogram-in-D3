var svg = d3.select("body")
            .append("svg")
            .attr("width",680)
            .attr("height",680)
        

        var lineFun = d3.svg.line()
            .x(function (d) { return d.x; })
            .y(function (d) { return d.y; })
            .interpolate("linear");

        leg = [{ "x": 0, "y": 0 },//left leg
            { "x": 680, "y": 0 },
            { "x": 680, "y": 200 },
            { "x": 0, "y": 0 }];
        
      

        svg.append("path")
           .attr("d", lineFun(leg))
           .attr("stroke", "black")
           .attr("stroke-width", 8)
           .attr("fill", "black");

        svg.append('line')
            .attr('stroke-width', 5)
            .attr('x1', 0)
            .attr('y1', 150)
            .attr('x2', 180)
            .attr('y2', 380)
            .attr('stroke', 'grey');

        svg.append('line')
            .attr('stroke-width', 5)
            .attr('x1', 180)
            .attr('y1', 380)
            .attr('x2', 250)
            .attr('y2', 77)
            .attr('stroke', 'grey');

        svg.append('line')
            .attr('stroke-width', 5)
            .attr('x1', 180)
            .attr('y1', 380)
            .attr('x2', 450)
            .attr('y2', 137)
            .attr('stroke', 'grey');

        svg.append('circle')
            .attr('cx',180)
            .attr('cy',380)
            .attr('r',7)
            .attr('stroke', 'black');
        
        svg.append('line')
            .attr('stroke-width', 5)
            .attr('x1', 250)
            .attr('y1', 77)
            .attr('x2', 320)
            .attr('y2', 290)
            .attr('stroke', 'grey');

        svg.append('circle')
            .attr('cx',220)
            .attr('cy',235)
            .attr('r',25)
            .attr('stroke', 'black');
          
        svg.append('rect')
            .attr('x', -25)
            .attr('y', 670)
            .attr('width', 65)
            .attr('height', 105)
            .attr('fill', 'black')
            .attr('stroke', 'black')
            .attr("transform", "translate(-220,-180) rotate(-48)")

        svg.append('circle')
            .attr('cx',285)
            .attr('cy',264)
            .attr('r',33)
            .attr('stroke', 'black');

        svg.append('line')
            .attr('stroke-width', 15)
            .attr('x1', 180)
            .attr('y1', 380)
            .attr('x2', 250)
            .attr('y2', 320)
            .attr('stroke', 'black');
        
        svg.append('line')
            .attr('stroke-width', 15)
            .attr('x1', 246)
            .attr('y1', 325)
            .attr('x2', 260)
            .attr('y2', 270)
            .attr('stroke', 'black');

        svg.append('line')
            .attr('stroke-width', 15)
            .attr('x1', 290)
            .attr('y1', 460)
            .attr('x2', 400)
            .attr('y2', 340)
            .attr('stroke', 'black');

        svg.append('circle')
            .attr('cx',290)
            .attr('cy',460)
            .attr('r',7)
            .attr('stroke', 'black');
        
            svg.append("circle")
            .attr("cx", 400)
            .attr("cy", 340)
            .attr("r", 7);

        

        svg.append('line')
            .attr('stroke-width', 15)
            .attr('x1', 290)
            .attr('y1', 460)
            .attr('x2', 360)
            .attr('y2', 530)
            .attr('stroke', 'black');
        
        svg.append('circle')
            .attr('cx',360)
            .attr('cy',530)
            .attr('r',7)
            .attr('stroke', 'black');

        svg.append('line')
            .attr('stroke-width', 15)
            .attr('x1', 290)
            .attr('y1', 460)
            .attr('x2', 450)
            .attr('y2', 450)
            .attr('stroke', 'black');
        
        svg.append('circle')
            .attr('cx',450)
            .attr('cy',450)
            .attr('r',7)
            .attr('stroke', 'black');