function main() {
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var spriteMap = new THREE.TextureLoader().load( "tes.bmp" );
    var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xffffff } );
    var sprite = new THREE.Sprite( spriteMaterial );
    var sprite2 = sprite.clone();
    sprite2.position.x=3;
    sprite2.scale.set(0.7,1,1);
    var sprite3 = new THREE.Sprite( spriteMaterial );
    sprite3.position.x=-3;
    sprite3.copy(sprite2);
    sprite2.position.x=-3;
    scene.add( sprite , sprite2, sprite3);

    camera.position.z = 3;

    var animate = function () {
        requestAnimationFrame( animate );

        renderer.render( scene, camera );
    };

    animate();
   
}

main();