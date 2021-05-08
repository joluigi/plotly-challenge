
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }


d3.json("samples.json").then(
    d => { 
        let name = d.samples.map((x,y) => {
        console.log(`Sample Values ${x.sample_values}`);
        console.log(`OTU IDS ${x.otu_ids}`);       
        console.log(`OTU labels ${x.otu_labels}`);
        let  sValues = x.sample_values;
        let otuIds = x.otu_ids;
        let otuIdsList = [];  
        x.otu_ids.forEach((a) => {otuIdsList.push("OTU "+a)});
        let topOtus = otuIdsList.sort((a,b) => b-a).slice(0,10);        
        let otuLabels = x.otu_labels;
        

        let barTrace = {
          type: 'bar',
          x: sValues,
          y: topOtus,
          text: otuLabels,
          orientation: 'h',
          transforms: [{
            type: 'sort',
            target: 'y',
            order: 'descending'
          }]
        }




        let data = [barTrace];

        let layout = { 
          title: `Otus find in Belly button`,
        }

        Plotly.newPlot("bar", data, layout);


        let bubbleTrace = {
          x: otuIds,
          y: sValues,
          mode: 'markers',
          

          }]
        }






    });
}     

);

