var svg = d3.select("body")
            .append("svg")
            .attr("width",680)
            .attr("height",680)


                     

           svg.append('circle')
           .attr('cx',300)
           .attr('cy',350)
           .attr('r',120)
           .attr('stroke', 'black');

           svg.append('rect')
           .attr('stroke-width', 25)
           .attr('width', 220)
           .attr('height', 100)
           .attr('x',190)
           .attr('y', 230)
           .attr('stroke', 'white')
           .attr('fill', 'white');

           svg.append('circle')
            .attr('stroke-width', 3)
            .attr('cx',370)
            .attr('cy',295)
            .attr('r',50)
            .attr('stroke', 'black')
            .attr('fill', 'white');

            svg.append('rect')
           .attr('stroke-width', 25)
           .attr('width', 210)
           .attr('height', 100)
           .attr('x',150)
           .attr('y', 230)
           .attr('stroke', 'white')
           .attr('fill', 'white');

        svg.append('line')
           .attr('stroke-width', 3)
           .attr('x1', 373)
           .attr('y1', 246)
           .attr('x2', 353)
           .attr('y2', 343)
           .attr('stroke', 'black');

           svg.append('circle')
            .attr('stroke-width', 3)
            .attr('cx',300)
            .attr('cy',280)
            .attr('r',65)
            .attr('stroke', 'black')
            .attr('fill', 'white');

            svg.append('rect')
           .attr('stroke-width', 25)
           .attr('width', 210)
           .attr('height', 110)
           .attr('x',90)
           .attr('y', 220)
           .attr('stroke', 'white')
           .attr('fill', 'white');

           svg.append('line')
           .attr('stroke-width', 3)
           .attr('x1', 312)
           .attr('y1', 216)
           .attr('x2', 280)
           .attr('y2', 343)
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

        
        
           

              