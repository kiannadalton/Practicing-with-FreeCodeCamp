// recordCollection object provided by FreeCodeCamp
const recordCollection = {
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

// My code below:
function updateRecords(records, id, prop, value) {
  let album = records[id];
  if (value === "") {
    delete album[prop];
  } else if (prop !== "tracks" && value !== "") {
    album[prop] = value;
  } else if (prop === "tracks" && value !== "" && album.tracks == undefined) {
    album[prop] = [];
    album[prop].push(value);
  } else if (prop === "tracks" && value !== "") {
    album[prop].push(value);
  }
  return records;
}

// some tests:
updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
updateRecords(recordCollection, 2548, "artist", "");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 2468, "tracks", "Free");
console.log(recordCollection);
