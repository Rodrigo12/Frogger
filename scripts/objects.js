var initialSide = { id: 0, translate: [0, -10, -24.9], rotate: [0, 0, 1], scale: [1, 9.5, 1], rotationAngle: 26.7, image: "grass" };
var roadDownSide = { id: 1, translate: [0, -8, -24.9], rotate: [0, 0, 1], scale: [1, 9.5, 1], rotationAngle: 26.7, image: "stone" };
var road = { id: 2, translate: [0, -5, -24.9], rotate: [0, 0, 1], scale: [2, 9.5, 1], rotationAngle: 26.7, image: "road" };
var roadUpSide = { id: 3, translate: [0, -2, -24.9], rotate: [0, 0, 1], scale: [1, 9.5, 1], rotationAngle: 26.7, image: "stone" };
var riverDownSide = { id: 4, translate: [0, 0, -24.9], rotate: [0, 0, 1], scale: [1, 9.5, 1], rotationAngle: 26.7, image: "grass" };
var river = { id: 5, translate: [0, 3, -25], rotate: [0, 0, 1], scale: [4, 9.5, 1], rotationAngle: 26.7, image: "water" };
//var riverUpSide = { id: 6, translate: [0, 6, -25], rotate: [0, 0, 1], scale: [1, 9.5, 1], rotationAngle: 26.7, image: "water" };

var scenarioArray = [initialSide, roadDownSide, road, roadUpSide, riverDownSide, river];


var frogPosition = {
    bodyPosX: 0.0,
    bodyPosY: -10,
    bodyPosZ: -23.5,
    rightEyePosX: -0.2,
    rightEyePosY: -9.7,
    rightEyePosZ: -23.2,
    leftEyePosX: 0.2,
    leftEyePosY: -9.7,
    leftEyePosZ: -23.2
};

var carPosition = {
    posX: -9.25,
    posY: -4.1,
    posZ: -23.8
};

var busPosition = {
    posX: 9.25,
    posY: -5.8,
    posZ: -23.8
};

var turtlePosition = {
    posX: 9.25,
    posY: 4.0,
    posZ: -24
};



var frogBody = { translate: [frogPosition.bodyPosX, frogPosition.bodyPosY, frogPosition.bodyPosZ], rotate: [0, 0, 1], scale: [0.25, 0.25, 0.25], rotationAngle: 40, image: "frogBody" };
var frogRightEye = { translate: [frogPosition.rightEyePosX, frogPosition.rightEyePosY, frogPosition.rightEyePosZ], rotate: [0, 0, 1], scale: [0.15, 0.15, 0.15], rotationAngle: 86.7, image: "frogEye" };
var frogLeftEye = {  translate: [frogPosition.leftEyePosX, frogPosition.leftEyePosY, frogPosition.leftEyePosZ], rotate: [0, 0, 1], scale: [0.15, 0.15, 0.15], rotationAngle: 4.3, image: "frogEye" };
var frog = { id: 7, body: frogBody, leftEye: frogLeftEye, rightEye: frogRightEye };


function Timberlog() {
    "use strict";
    this.id = 8;
    this.posX = -9.25;//-5.25
    this.posY = 2.3;
    this.posZ = -24.2;
    this.body =  { translate: [-9.25, 2.0, -25], rotate: [0, 0, 1], scale: [0.5, 0.5, 0.5], rotationAngle: 26.7, image: "timberlog"};
    this.active = false;
}

var timberlog = new Timberlog();
var timberlog2 = new Timberlog();
var timberlog3 = new Timberlog();
var timberlog4 = new Timberlog();
var timberlog5 = new Timberlog();
var timberlog6 = new Timberlog();
var timberlog7 = new Timberlog();
var timberlog8 = new Timberlog();
var timberlog9 = new Timberlog();

var timberlogs = [timberlog, timberlog2, timberlog3, timberlog4, timberlog5, timberlog6, timberlog7, timberlog8, timberlog9];

function Turtle() {
    "use strict";
    this.id = 9;
    this.body = { translate: [turtlePosition.posX, turtlePosition.posY, turtlePosition.posZ], rotate: [0, 0, 1], scale: [0.5, 0.5, 0.3], rotationAngle: 26.7, image: "turtle"};
    this.head = { translate: [turtlePosition.posX, turtlePosition.posY, turtlePosition.posZ], rotate: [0, 0, 1], scale: [0.35, 0.25, 0.30], rotationAngle: 26.7, image: "skin"};
    this.leg1 = { translate: [turtlePosition.posX, turtlePosition.posY, turtlePosition.posZ], rotate: [0, 0, 1], scale: [0.15, 0.25, 0.15], rotationAngle: 6.7, image: "skin"};
    this.leg2 = { translate: [turtlePosition.posX, turtlePosition.posY, turtlePosition.posZ], rotate: [0, 0, 1], scale: [0.15, 0.25, 0.15], rotationAngle: -6.7, image: "skin"};
    this.leg3 = { translate: [turtlePosition.posX, turtlePosition.posY, turtlePosition.posZ], rotate: [0, 0, 1], scale: [0.15, 0.25, 0.15], rotationAngle: -6.7, image: "skin"};
    this.leg4 =  { translate: [turtlePosition.posX, turtlePosition.posY, turtlePosition.posZ], rotate: [0, 0, 1], scale: [0.15, 0.25, 0.15], rotationAngle: 6.7, image: "skin"};
    this.posX = turtlePosition.posX;
    this.posY = turtlePosition.posY;
    this.posZ = turtlePosition.posZ;
    this.active = false;
}

var turtle = new Turtle();
var turtle2 = new Turtle();
var turtle3 = new Turtle();
var turtle4 = new Turtle();
var turtle5 = new Turtle();
var turtle6 = new Turtle();
var turtle7 = new Turtle();

var turtles = [turtle, turtle2, turtle3, turtle4, turtle5, turtle6, turtle7];

function Car() {
    "use strict";
    this.id = 10;
    this.body = { translate: [carPosition.posX, carPosition.posY, carPosition.posZ], rotate: [0, 0, 1], scale: [0.5, 0.5, 0.3], rotationAngle: 26.7, image: "car"};
    this.top = { translate: [carPosition.posX, carPosition.posY, carPosition.posZ], rotate: [0, 0, 1], scale: [0.2, 0.3, 0.2], rotationAngle: 26.7, image: "car"};
    this.wheel1 = { translate: [carPosition.posX, carPosition.posY, carPosition.posZ], rotate: [0, 0, 1], scale: [0.15, 0.125, 0.25], rotationAngle: 26.7, image: "wheel"};
    this.wheel2 = { translate: [carPosition.posX, carPosition.posY, carPosition.posZ], rotate: [0, 0, 1], scale: [0.15, 0.125, 0.25], rotationAngle: 26.7, image: "wheel"};
    this.wheel3 = { translate: [carPosition.posX, carPosition.posY, carPosition.posZ], rotate: [0, 0, 1], scale: [0.15, 0.125, 0.25], rotationAngle: 26.7, image: "wheel"};
    this.wheel4 = { translate: [carPosition.posX, carPosition.posY, carPosition.posZ], rotate: [0, 0, 1], scale: [0.15, 0.125, 0.25], rotationAngle: 26.7, image: "wheel"};
    this.posX = carPosition.posX;
    this.posY = carPosition.posY;
    this.posZ = carPosition.posZ;
    this.active = false;
}

var car = new Car();
var car2 = new Car();
var car3 = new Car();
var car4 = new Car();
var car5 = new Car();
var car6 = new Car();
var car7 = new Car();

var cars = [car, car2, car3, car4, car5, car6, car7];


function Bus() {
    "use strict";
    this.id = 11;
    this.body = { translate: [busPosition.posX, busPosition.posY, busPosition.posZ], rotate: [0, 0, 1], scale: [0.4, 0.7, 0.3], rotationAngle: 26.7, image: "bus"};
    this.head = { translate: [busPosition.posX, busPosition.posY, busPosition.posZ], rotate: [0, 0, 1], scale: [0.4, 0.25, 0.2], rotationAngle: 26.7, image: "busTop"};
    this.wheel1 = { translate: [busPosition.posX, busPosition.posY, busPosition.posZ], rotate: [0, 0, 1], scale: [0.15, 0.125, 0.25], rotationAngle: 26.7, image: "wheel"};
    this.wheel2 = { translate: [busPosition.posX, busPosition.posY, busPosition.posZ], rotate: [0, 0, 1], scale: [0.15, 0.125, 0.25], rotationAngle: 26.7, image: "wheel"};
    this.wheel3 = { translate: [busPosition.posX, busPosition.posY, busPosition.posZ], rotate: [0, 0, 1], scale: [0.15, 0.125, 0.25], rotationAngle: 26.7, image: "wheel"};
    this.wheel4 = { translate: [busPosition.posX, busPosition.posY, busPosition.posZ], rotate: [0, 0, 1], scale: [0.15, 0.125, 0.25], rotationAngle: 26.7, image: "wheel"};
    this.posX = busPosition.posX;
    this.posY = busPosition.posY;
    this.posZ = busPosition.posZ;
    this.active = false;
}

var bus = new Bus();
var bus2 = new Bus();
var bus3 = new Bus();
var bus4 = new Bus();

var buses = [bus, bus2, bus3, bus4];

//TUNNEL OBJECTS
var tunnelPosition = {
    posX: -7.5,
    posY: -5.0,
    posZ: -23
};
var tunnelBody = { translate: [tunnelPosition.posX, tunnelPosition.posY, tunnelPosition.posZ], rotate: [0, 0, 0], scale: [2.0, 2.0, 2.0], rotationAngle: 90.0, image: "tunnel"};
var tunnelLeftSide = { translate: [ -8.8, -7.5, -23], rotate: [0, 0, 0], scale: [4.0, 0.4, 3.0], rotationAngle: 90.0, image: "stone"};
var tunnelRightSide = { translate: [-8.8, -2.5, -23], rotate: [0, 0, 0], scale: [4.0, 0.4, 3.0], rotationAngle: 90.0, image: "stone"};
var tunnelTop = { translate: [-8.8, -5.0, -20.5], rotate: [0, 0, 0], scale: [4.1, 3.0, 0.8], rotationAngle: 90.0, image: "stone"};
var tunnel = { id : 11,	body: tunnelBody, leftSide: tunnelLeftSide, rightSide: tunnelRightSide, top: tunnelTop};

//BILLBOARD OBJECTS
var billboardGrassPosition = {
    posX: 4.0,
    posY: -10.5,
    posZ: -23
};
var billboardGrassBody = { translate: [billboardGrassPosition.posX, billboardGrassPosition.posY, billboardGrassPosition.posZ], rotate: [0, 0, 0], scale: [1.0, 0.00000001, 1.0], rotationAngle: 90.0, image: "billboardGrass"};
var billboardGrass = { id : 12,	body: billboardGrassBody};


var treePosition = {
    posX: 0.0,
    posY: -10.5,
    posZ: -23
};
var treeBody = { translate: [treePosition.posX, treePosition.posY, treePosition.posZ], rotate: [0, 0, 0], scale: [2.0, 0.00000001, 2.0], rotationAngle: 90.0, image: "tree"};
var tree = { id : 13, body: treeBody};

var bigRockPosition = {
    posX: 6.0,
    posY: 2.3,
    posZ: -23
};
var bigRockBody = { translate: [bigRockPosition.posX, bigRockPosition.posY, bigRockPosition.posZ], rotate: [0, 0, -1], scale: [1.0, 0.00000001, 1.0], rotationAngle: 90.0, image: "bigRock"};
var bigRock = { id : 14, body: bigRockBody};


var landscapePosition = {
    posX: 0.0,
    posY: 40.5,
    posZ: -26
};
var landscapeBody = { translate: [landscapePosition.posX, landscapePosition.posY, landscapePosition.posZ], rotate: [0, 0, 1], scale: [1.0, 1.0, 1.0], rotationAngle: 26.7, image: "landscape"};
var landscape = { id : 15, body: landscapeBody};

// STENCIL OBJECTS
var stencilCube1 = {id: 16.1, posX: -3.5, posY:6, posZ:-24.9, translate: [-3.5, 6, -24.9], rotate: [0, 0, 1], scale: [1, 1, 1], rotationAngle: 26.7, image: "grass" };
var stencilCube2 = {id: 16.2, posX: 0, posY:6, posZ:-24.9, translate: [0, 6, -24.9], rotate: [0, 0, 1], scale: [1, 1, 1], rotationAngle: 26.7, image: "grass" };
var stencilCube3 = {id: 16.3, posX: 3.5, posY:6, posZ:-24.9, translate: [3.5, 6, -24.9], rotate: [0, 0, 1], scale: [1, 1, 1], rotationAngle: 26.7, image: "grass" };

var stencilCube4 = {id: 16.4, posX: -7.5, posY:6, posZ:-24.9, translate: [-7.5, 6, -24.9], rotate: [0, 0, 1], scale: [1, 2, 1], rotationAngle: 26.7, image: "grass" };
var stencilCube5 = {id: 16.5, posX: 7.5, posY:6, posZ:-24.9, translate: [7.5, 6, -24.9], rotate: [0, 0, 1], scale: [1, 2, 1], rotationAngle: 26.7, image: "grass" };

var stencilCubes = [stencilCube1, stencilCube2, stencilCube3, stencilCube4, stencilCube5];


var allyObjects = [timberlogs, turtles, stencilCubes];
var enemyObjects = [cars, buses];


//Dead Frog
var deadFrogPosition = {
    posX: frogPosition.bodyPosX,
    posY: frogPosition.bodyPosY,
    posZ: frogPosition.bodyPosZ
};
var deadFrogBody = { translate: [deadFrogPosition.posX, deadFrogPosition.posY, deadFrogPosition.posZ], rotate: [0, 0, 0], scale: [1.0, 0.00000001, 1.0], rotationAngle: 90.0, image: "deadFrog"};
var deadFrog = { id : 17,	body: deadFrogBody};

//Plus 1
var plus1Position = {
    posX: frogPosition.bodyPosX,
    posY: frogPosition.bodyPosY,
    posZ: frogPosition.bodyPosZ
};
var plus1Body = { translate: [plus1Position.posX, plus1Position.posY, plus1Position.posZ], rotate: [0, 0, 0], scale: [1.0, 0.00000001, 1.0], rotationAngle: 90.0, image: "plus1"};
var plus1 = { id : 17,	body: plus1Body};

//Frog Reflection
var frogReflectionPosition = {
    bodyPosX: 0.0,
    bodyPosY: -10,
    bodyPosZ: -24.3,
    rightEyePosX: -0.2,
    rightEyePosY: -9.7,
    rightEyePosZ: -24.9,
    leftEyePosX: 0.2,
    leftEyePosY: -9.7,
    leftEyePosZ: -24.9
};

var frogReflectionBody = { translate: [frogReflectionPosition.bodyPosX, frogReflectionPosition.bodyPosY, frogReflectionPosition.bodyPosZ], rotate: [0, 0, 1], scale: [0.25, 0.25, 0.25], rotationAngle: 40, image: "frogBody" };
var frogReflectionRightEye = { translate: [frogReflectionPosition.rightEyePosX, frogReflectionPosition.rightEyePosY, frogReflectionPosition.rightEyePosZ], rotate: [0, 0, 1], scale: [0.15, 0.15, 0.15], rotationAngle: 86.7, image: "frogEye" };
var frogReflectionLeftEye = {  translate: [frogReflectionPosition.leftEyePosX, frogReflectionPosition.leftEyePosY, frogReflectionPosition.leftEyePosZ], rotate: [0, 0, 1], scale: [0.15, 0.15, 0.15], rotationAngle: 4.3, image: "frogEye" };
var frogReflection = { id: 18, body: frogReflectionBody, leftEye: frogReflectionLeftEye, rightEye: frogReflectionRightEye };


//LENS FLARE
//var sun = {posX: -6.0, posY: 4.0, posZ: -5.0, translate: [-6.0, 9.0, -20.5], rotate: [0, 0, 1], scale: [1.5, 0.00000001, 1.5], rotationAngle: 50.0, image: "sun"};


//var sun = {posX: -4.0, posY: 3.1, posZ: -6.9, translate: [-6.0, 9.0, -19.5], rotate: [0, 0, 1], scale: [1.5, 0.00000001, 1.5], rotationAngle: 50.0, image: "sun"};
//var flare1 =  {posX: -4.0, posY: 4.5, posZ: -5.2, translate: [-3.7, 5.0, -21.5], rotate: [0, 0, 0], scale: [0.5, 0.00000001, 0.5], rotationAngle: 0.0, image: "flare1"};
//var flare2 =  {posX: -4.0, posY: 5.8, posZ: -3.8, translate: [-4.5, 6.0, -21.0], rotate: [0, 0, 0], scale: [0.3, 0.00000001, 0.3], rotationAngle: 0.0, image: "flare2"};

var sun = {posX: 0.1, posY: 5.0, posZ: -20.0, translate: [0.1, 5.0, -20.0], rotate: [0, 0, 1], scale: [1.5, 0.00000001, 1.5], rotationAngle: 50.0, image: "sun"};
var flare1 =  {posX: 0.1, posY: 4.0, posZ: -21.0, translate: [0.1, 4.0, -21.0], rotate: [0, 0, 0], scale: [0.5, 0.00000001, 0.5], rotationAngle: 0.0, image: "flare1"};
var flare2 =  {posX: 0.1, posY: 3.0, posZ: -21.5, translate: [0.1, 3.0, -21.5], rotate: [0, 0, 0], scale: [0.3, 0.00000001, 0.3], rotationAngle: 0.0, image: "flare2"};

var lensflare = [sun, flare1, flare2];

//FIREWORK
function Particle() {
    "use strict";
    this.life =	0.0;
    this.fade =	0.0;
    this.r = 0.882;
    this.g = 0.552;
    this.b = 0.211;
    this.x = frogPosition.bodyPosX;
    this.y = frogPosition.bodyPosY;
    this.z = frogPosition.bodyPosZ;
    this.vx = 0.0;
    this.vy = 0.0;
    this.vz = 0.0;
    this.az = 0.15;
    this.body = {translate: [frogPosition.bodyPosX, frogPosition.bodyPosY, frogPosition.bodyPosZ], rotate: [0, 0, 1], scale: [0.05, 0.00000001, 0.05], rotationAngle: 0, image: "particle"};
}

var particles = [];
var i;
for (i = 0; i < 90; i = (i + 1)) {
    var particle = new Particle();
    particles.push(particle);
}