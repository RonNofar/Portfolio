// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 4;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});

// Configure renderer clear color
renderer.setClearColor(0x000000, 0);

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
var cube = new THREE.Mesh( geometry, material );

cube.rotation.x = Math.PI * 45 / 180;

// Add cube to Scene
scene.add( cube );

// New Cube
geometry = new THREE.BoxGeometry( 2 , 2,  1.1 ); 
material = new THREE.MeshBasicMaterial( { color: "#111111" } );
var cube1 = new THREE.Mesh( geometry, material );

cube1.rotation.x = Math.PI * 45 / 180;

// Add cube to Scene
scene.add( cube1 );

// New Cube
geometry = new THREE.BoxGeometry( 1 , 1 , 1 ); 
material = new THREE.MeshBasicMaterial( { color: "#E7DFDD" } );
var cube2 = new THREE.Mesh( geometry, material );

cube2.rotation.y = Math.PI * 45 /180;
cube2.rotation.x = Math.PI * 45 / 180;

// Add cube to Scene
scene.add( cube2 );

// Initialize current time
var clock = new THREE.Clock;

// Render Loop
var render = function () {
  // Render the scene
  renderer.render(scene, camera);
  var delta = clock.getDelta();

  //cube.rotation.x += clock.getDelta();
  cube.rotation.y += delta;
  cube2.rotation.y += delta;
  
  requestAnimationFrame( render );
};

render();