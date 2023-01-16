var svg = d3.select("body")
            .append("svg")
            .attr("width",1080)
            .attr("height",1080)

            var arcGenerator = d3.arc()
            .outerRadius(100)
            .innerRadius(0)
            .startAngle(-Math.PI / 2)
            .endAngle(Math.PI / 2);

        var lineFun = d3.svg.line()
            .x(function (d) { return d.x; })
            .y(function (d) { return d.y; })
            .interpolate("linear");

            

        leg = [{ "x": 300, "y": 250 },//left leg
            { "x": 350, "y":  400},
            { "x": 450, "y":  400},
            { "x": 400, "y": 250 },//left leg
            { "x": 300, "y": 250 },
            { "x": 450, "y":  400},
            ];
        
      

        svg.append("path")
           .attr("d", lineFun(leg))
           .attr("stroke", "black")
           .attr("stroke-width", 5)
           .attr("fill", "black");

        svg.append('line')
           .attr('stroke-width', 25)
           .attr('x1', 320)
           .attr('y1', 270)
           .attr('x2', 160)
           .attr('y2', 150)
           .attr('stroke', 'black');

        svg.append('circle')
           .attr('cx',160)
           .attr('cy',150)
           .attr('r',12)
           .attr('stroke', 'black');

        svg.append('line')
           .attr('stroke-width', 25)
           .attr('x1', 400)
           .attr('y1', 260)
           .attr('x2',550)
           .attr('y2', 230)
           .attr('stroke', 'black');

        svg.append('circle')
           .attr('cx',550)
           .attr('cy',230)
           .attr('r',12)
           .attr('stroke', 'black');


        leg1 = [{ "x": 388, "y": 425 },//left leg
           { "x": 300, "y":  600},
           
           ];

           svg.append('line')
           .attr('stroke-width', 25)
           .attr('x1', 378)
           .attr('y1', 428)
           .attr('x2', 410)
           .attr('y2', 428)
           .attr('stroke', 'black');
     

       svg.append("path")
          .attr("d", lineFun(leg1))
          .attr("stroke", "black")
          .attr("stroke-width", 25)
          .attr("fill", "black");

      leg2 = [{ "x": 430, "y": 427 },//left leg
          { "x": 520, "y":  600},
          
          ];

          svg.append('line')
           .attr('stroke-width', 25)
           .attr('x1', 409)
           .attr('y1', 428)
           .attr('x2', 440)
           .attr('y2', 428)
           .attr('stroke', 'black');

           svg.append("path")
           .attr("d", lineFun(leg2))
           .attr("stroke", "black")
           .attr("stroke-width", 25)
           .attr("fill", "black");


           svg.append('circle')
           .attr('cx',330)
           .attr('cy',190)
           .attr('r',25)
           .attr('stroke', 'black');

           svg.append('circle')
           .attr('cx',300)
           .attr('cy',600)
           .attr('r',12)
           .attr('stroke', 'black');

           svg.append('circle')
           .attr('cx',520)
           .attr('cy',600)
           .attr('r',12)
           .attr('stroke', 'black');

           svg.append('line')
           .attr('stroke-width', 25)
           .attr('x1', 750)
           .attr('y1', 270)
           .attr('x2', 750)
           .attr('y2', 450)
           .attr('stroke', 'black');

           svg.append('circle')
           .attr('cx',750)
           .attr('cy',270)
           .attr('r',12)
           .attr('stroke', 'black');

           svg.append('circle')
           .attr('cx',750)
           .attr('cy',450)
           .attr('r',12)
           .attr('stroke', 'black');

           svg.append('line')
           .attr('stroke-width', 25)
           .attr('x1', 950)
           .attr('y1', 270)
           .attr('x2', 950)
           .attr('y2', 450)
           .attr('stroke', 'black');

           svg.append('circle')
           .attr('cx',950)
           .attr('cy',270)
           .attr('r',12)
           .attr('stroke', 'black');

           svg.append('circle')
           .attr('cx',950)
           .attr('cy',450)
           .attr('r',12)
           .attr('stroke', 'black');

           svg.append('circle')
           .attr('cx',850)
           .attr('cy',280)
           .attr('r',55)
           .attr('stroke', 'black');
           
           svg.append('rect')
           .attr('stroke-width', 25)
           .attr('width', 146)
           .attr('height', 110)
           .attr('x',777)
           .attr('y', 150)
           .attr('stroke', 'white')
           .attr('fill', 'white');

           svg.append('circle')
           .attr('cx',850)
           .attr('cy',200)
           .attr('r',30)
           .attr('stroke', 'black');

           svg.append('line')
           .attr('stroke-width', 25)
           .attr('x1', 810)
           .attr('y1', 455)
           .attr('x2', 810)
           .attr('y2', 650)
           .attr('stroke', 'black');

           svg.append('circle')
           .attr('cx',810)
           .attr('cy',455)
           .attr('r',12)
           .attr('stroke', 'black');

           svg.append('circle')
           .attr('cx',810)
           .attr('cy',650)
           .attr('r',12)
           .attr('stroke', 'black');

           svg.append('line')
           .attr('stroke-width', 25)
           .attr('x1', 880)
           .attr('y1', 455)
           .attr('x2', 880)
           .attr('y2', 570)
           .attr('stroke', 'black');

           svg.append('circle')
           .attr('cx',880)
           .attr('cy',455)
           .attr('r',12)
           .attr('stroke', 'black');

           svg.append('circle')
           .attr('cx',880)
           .attr('cy',570)
           .attr('r',12)
           .attr('stroke', 'black');








         