var svg = d3.select("body")
            .append("svg")
            .attr("width",680)
            .attr("height",680)

       
        svg.append('line')
            .attr('stroke-width', 3)
            .attr('x1', 0)
            .attr('y1', 150)
            .attr('x2', 100)
            .attr('y2', 150)
            .attr('stroke', 'black');

        svg.append('line')
            .attr('stroke-width', 3)
            .attr('x1', 0)
            .attr('y1', 170)
            .attr('x2', 100)
            .attr('y2', 170)
            .attr('stroke', 'black');

        svg.append('line')
            .attr('stroke-width', 3)
            .attr('x1', 98)
            .attr('y1', 148)
            .attr('x2', 98)
            .attr('y2', 172)
            .attr('stroke', 'black');

        const curve = d3.line().curve(d3.curveNatural);
        const points1 = [[0, 350], [60, 370], [120, 350], [180, 370],  [240, 350],  [300, 370],  [360, 350],  [420, 370],  [480, 350],[540, 370],  [600, 350]]

        svg.append('path')
            .attr('d', curve(points1))
            .attr('stroke-width', 5)
            .attr('stroke', 'black')
            .attr('fill', 'none');

        const points2 = [[0, 400], [60, 420], [120, 400], [180, 420],  [240, 400],  [300, 420],  [360, 400],  [420, 420],  [480, 400],[540, 420],  [600, 400]]
            
        svg.append('path')
            .attr('d', curve(points2))
            .attr('stroke-width', 5)
            .attr('stroke', 'black')
            .attr('fill', 'none');

        const points3 = [[0, 450], [60, 470], [120, 450], [180, 470],  [240, 450],  [300, 470],  [360, 450],  [420, 470],  [480, 450],[540, 470],  [600, 450]]
            
        svg.append('path')
            .attr('d', curve(points3))
            .attr('stroke-width', 5)
            .attr('stroke', 'black')
            .attr('fill', 'none');

        const points4 = [[0, 500], [60, 520], [120, 500], [180, 520],  [240, 500],  [300, 520],  [360, 500],  [420, 520],  [480, 500],[540, 520],  [600, 500]]
            
        svg.append('path')
            .attr('d', curve(points4))
            .attr('stroke-width', 5)
            .attr('stroke', 'black')
            .attr('fill', 'none');

        var lineFun = d3.svg.line()
            .x(function (d) { return d.x; })
            .y(function (d) { return d.y; })
            .interpolate("linear");

        leg = [{ "x": 150, "y": 70 },//left leg
            { "x": 150, "y": 250 },
            { "x": 170, "y": 250 },
            { "x": 170, "y": 50 },
            { "x": 170, "y": 250 },
            { "x": 170, "y": 45 }, 
            
            ];
        
      

        svg.append("path")
           .attr("d", lineFun(leg))
           .attr("stroke", "black")
           .attr("stroke-width", 10)
           .attr("fill", "black");

        svg.append('circle')
           .attr('cx',158)
           .attr('cy',60)
           .attr('r',16)
           .attr('stroke', 'black');

        svg.append('circle')
           .attr('cx',160)
           .attr('cy',250)
           .attr('r',15)
           .attr('stroke', 'black');

           leg = [{ "x": 200, "y": 70 },//left leg
           { "x": 200, "y":  170},
           { "x": 300, "y":  200},
           { "x": 300, "y":  100},
           { "x": 300, "y":  200},
           { "x": 300, "y":  100},
           
           ];
       
     

       svg.append("path")
          .attr("d", lineFun(leg))
          .attr("stroke", "black")
          .attr("stroke-width", 5)
          .attr("fill", "black");

        leg = [{ "x": 290, "y": 100 },//left leg
          { "x": 290, "y":  300},
          ];
      
    

      svg.append("path")
         .attr("d", lineFun(leg))
         .attr("stroke", "black")
         .attr("stroke-width", 25)
         .attr("fill", "black");
        
         svg.append('circle')
           .attr('cx',290)
           .attr('cy',300)
           .attr('r',12)
           .attr('stroke', 'black');

        svg.append('circle')
           .attr('cx',290)
           .attr('cy',105)
           .attr('r',12)
           .attr('stroke', 'black');

        svg.append('circle')
           .attr('cx',340)
           .attr('cy',190)
           .attr('r',20)
           .attr('stroke', 'black');

        