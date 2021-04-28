
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }


d3.json("samples.json").then(
    d => {
        let name = d.samples
        console.log(name)
    }
    )
