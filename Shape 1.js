var svg = d3.select("body")
            .append("svg")
            .attr("width",680)
            .attr("height",680)



    svg.append('circle')
        .attr('cx',220)
        .attr('cy',270)
        .attr('r',25)
        .attr('stroke', 'black');
        
    svg.append('line')
        .attr('stroke-width', 15)
        .attr('x1', 150)
        .attr('y1', 410)
        .attr('x2', 360)
        .attr('y2', 180)
        .attr('stroke', 'black');
    
    


    svg.append('rect')
        .attr('x', -25)
        .attr('y', 670)
        .attr('width', 65)
        .attr('height', 105)
        .attr('fill', 'black')
        .attr('stroke', 'black')
        .attr("transform", "translate(-220,-180) rotate(-45)")


    svg.append('line')
        .attr('stroke-width', 15)
        .attr('x1', 250)
        .attr('y1', 100)
        .attr('x2', 360)
        .attr('y2', 190)
        .attr('stroke', 'black');

    svg.append('circle')
        .attr('cx',200)
        .attr('cy',120)
        .attr('r',25)
        .attr('stroke', 'black')
        .style("fill", 'white');
    
    svg.append('circle')
        .attr('cx',250)
        .attr('cy',100)
        .attr('r',7)
        .attr('stroke', 'black');

    svg.append('circle')
        .attr('cx',150)
        .attr('cy',410)
        .attr('r',7)
        .attr('stroke', 'black');

    svg.append('line')
        .attr('stroke-width', 15)
        .attr('x1', 335)
        .attr('y1', 387)
        .attr('x2', 440)
        .attr('y2', 480)
        .attr('stroke', 'black');

    svg.append('circle')
        .attr('cx',440)
        .attr('cy',480)
        .attr('r',7)
        .attr('stroke', 'black');

    svg.append('line')
        .attr('stroke-width', 15)
        .attr('x1', 360)
        .attr('y1', 360 )
        .attr('x2', 440)
        .attr('y2', 430)
        .attr('stroke', 'black');
    
    svg.append('circle')
        .attr('cx',440)
        .attr('cy',430)
        .attr('r',7)
        .attr('stroke', 'black');
    
        

    
    

