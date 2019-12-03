//Global variables
var scene, camera, renderer;

//Functions
function createParticles() {
    var geom = new THREE.Geometry();
    var material = new THREE.PointCloudMaterial({size: 4, vertexColors: true, color: 0xffffff});
    for (var x = -5; x < 5; x++) {
        for (var y = -5; y < 5; y++) {
            var particle = new THREE.Vector3(x * 10, y * 10, 0);
            geom.vertices.push(particle);
            geom.colors.push(new THREE.Color(Math.random() * 0x00ffff));
        }
    }
    var cloud = new THREE.PointCloud(geom, material);
    scene.add(cloud);

    camera.position.z = 100;
}

function createSprites()
{
    var material = new THREE.SpriteMaterial();  
    for (var x = -5; x < 5; x++) 
    {    
        for (var y = -5; y < 5; y++) 
        {      
            var sprite = new THREE.Sprite(material);      
            sprite.position.set(x * 10, y * 10, 0);      
            scene.add(sprite);    
        }  
    }
    
    camera.position.z = 100;
}

function spriteTexture()
{
    var spriteMap = new THREE.TextureLoader().load( "../assets/tes.bmp" );
    var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xffffff } );
    var spriteMap2 = new THREE.TextureLoader().load( "../assets/Spaceship.png" );
    var spriteMaterial2 = new THREE.SpriteMaterial( { map: spriteMap2, color: 0xffffff } );
    var sprite = new THREE.Sprite( spriteMaterial );
    var sprite2 = sprite.clone();
    sprite2.position.x=3;
    var sprite3 = new THREE.Sprite( spriteMaterial2 );
    sprite3.position.x=-3;
    sprite3.copy(sprite2);
    sprite2.position.x=-3;
    scene.add( sprite , sprite2, sprite3);

    camera.position.z = 3;
}

function animate()
{
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

function main() {
    
    //Add Scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // Default Sprites
    // createSprites();

    // Create Particles using PointCloud
    createParticles();

    // Sprite Texture Mapping 
    // spriteTexture();

    //Render
    animate();
   
}

main();