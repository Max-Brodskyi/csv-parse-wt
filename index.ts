import * as csvParser from "csv-parser";
import * as fs from "fs";

module main {
  trace(`starting parser!`);

  const data : string[] = [];
  const filename : string = `files/theStallion_30min_export.csv`;

  

  fs.createReadStream(filename)
    .pipe(csvParser())
    .on('data', rawData => data.push(rawData))
    .on('end', () => data.forEach(row => parse(row)));

  trace(`finished parser!`);
}

function parse(rowData : string) {
  // trace(rowData);
}

function trace(msg : string) {
  console.log(msg);
}