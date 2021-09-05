// Setup
var recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  // my naive approach :blush:
  // if (prop != "tracks" && value != "") {
  //   records[id][prop] = value;
  //   return records;
  // }

  // if (prop == "tracks" && !records[id].hasOwnProperty(prop)) {
  //   records[id][prop] = [value];
  //   return records;
  // }

  // if (prop == "tracks" && value != "") {
  //   records[id][prop].push(value);
  //   return records;
  // }

  if (value === "") {
    // value is empty => delete the property
    delete records[id][prop];
  } else if (prop === "tracks") {
    // logical or with empty array, if 'tracks' not empty, nothing changes
    // if there's no 'tracks' an empty array is added
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(value);
  } else {
    // prop isn't tracks and the property is added and the value assigned
    records[id][prop] = value;
  }
  return records;
}
console.log(recordCollection[5439]);
updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
updateRecords(recordCollection, 5439, "tracks", "SOS");
console.log(recordCollection[5439]);
updateRecords(recordCollection, 5439, "tracks", "");
console.log(recordCollection[5439]);
