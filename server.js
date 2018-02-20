// Requires
const fs = require('fs');

// Const
const ROW_NAMES = 1;
const ROW_FIRST_DAY = 2;
const COL_NAME_DAY = 0;
const COL_NUMBER_DAY = 1;

const split_names = (row_names) => row_names.split(',').filter(e => e != null && e.length > 0);
const get_hours = (cells) => {
    //TODO: filter hours
}

var month = [];

fs.readFile("files/1.csv", "utf8", function(err, data){
    if(err) throw err;

    var rows = data.split("\r\n");

    var names = split_names(rows[ROW_NAMES]);
    console.log(JSON.stringify(names));
    
    const days = rows.filter((_,i) => i < ROW_FIRST_DAY);
    days = days.map(row => {
        const cells = row.split(',');
        month.push({
            name: cells[COL_NAME_DAY],
            day: cells[COL_NUMBER_DAY],
            hours: get_hours(cells.filter((_,i) => i >= 2))
        })
        console.log(row);
    })
});
