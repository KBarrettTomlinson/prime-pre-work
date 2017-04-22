console.log('File loaded!');

// Call the function defined below to actually do something!
var arrayOfRooms = convertRooms();
console.log(arrayOfRooms);
for (i=0;i<arrayOfRooms.length;i++){
  console.log("arrayOfRooms index " + i,arrayOfRooms[i]);
}

console.log("Room1 global value",room1);
console.log("Room2 global value",room2);
console.log("Room3 global value",room3);
console.log("Room4 global value",room4);


function convertRooms() {
  // Each array of data is in the order of: [total seats needed, rollingChairs, cubes, color of seats]
  var roomsArray = [[20, 10, 10, 'red'], [24, 10, 14, 'blue'], [23, 8, 11, 'black'], [18, 5, 13, 'blue']];
  var roomsObjectArray = [];
  /*console.log(roomsArray.length);*/
  // Convert each room array into a Room object
  // Write code here, remember to log the new object you create at the end of
  // each iteration.
  for (i=0;i<roomsArray.length;i++){
    var roomName = "room"+(i+1);
    /*console.log("roomName",roomName);*/
    window[roomName] = new Room(roomsArray[i]);
    /*console.log(roomName);*/
    roomsObjectArray.push(window[roomName]);
    console.log("LOOP: " + roomName);
  }
  /*console.log("Room1",room1);
  console.log("Room2",room2);
  console.log("Room3",room3);
  console.log("Room4",room4);
  for (i = 0; i < roomsObjectArray.length; i++){
    console.log("Inside convertRooms()", roomsObjectArray[i]);
  }
  console.log("Inside convertRooms", roomsObjectArray);*/
  return roomsObjectArray;
}
/*End Function convertRooms*/

/**
 * Represents a classroom at Prime
 * @constructor
 * @param {Array} roomArray - an array of data representing a single room
 *  @property {Number} capacity - number of seats in this room
 *  @property {Array} rollingChairs - an array of rolling chair objects
 *  @property {Array} cubes - an array of cube objects
 *  @property {Array} color - color of rollingChairs
**/
function Room(roomArray) {
  // Write constructor logic here to convert the array into a Room object
  // You will need to also create RollingChair and Cube objects!
  this.capacity = roomArray[0];
  var numRollingChairs = roomArray[1];
  /*this.rollingChairs = new RollingChair("rolling",roomArray[3]);*/
  this.assignChairs = function(){
    var chairArray = [];
    /*console.log("numRollingChairs", numRollingChairs);*/
    for (j = 0; j < numRollingChairs; j++){
      var chair = new RollingChair("rolling", roomArray[3]);
      /*console.log("chair variable in assignChairs",chair);*/
      chairArray.push(chair);
    }
    return chairArray;
  };
  this.rollingChairs = this.assignChairs();
  var numCubes = roomArray[2];
  this.assignCubes = function (){
    var cubeArray = [];
    for (k = 0; k < numCubes; k++){
      var cube = new Cube(24);
      cubeArray.push(cube);
    }
    return cubeArray;
  };
  this.cubes = this.assignCubes();
  this.color = roomArray[3];
}
/* End Room Constructor*/

/**
 * Represents a Rolling Chair seat
 * @constructor
 * @param {String} type - type of seat this is
 * @param {String} color - color of the seat fabric
**/
function RollingChair(type, color) {
  // Write constructor logic here to create a single rolling chair object
  this.type = type;
  this.color = color;
}
/* End RollingChair Constructor

/**
 * Represents a Cube seat
 * @constructor
 * @param {String} length - length of each side
 * @property {Function} volume - method that calculates the volume of the cube
**/
function Cube(length) {
  // Write constructor logic here to create a single cube seat object
  this.length = length;
  this.volume = Math.pow(this.length,3);
}
/* End Cube Constructor*/

// -- DON'T TOUCH CODE BELOW --
module.exports = {
  Room: Room,
  convertRooms: convertRooms,
  RollingChair: RollingChair,
  Cube: Cube
};
