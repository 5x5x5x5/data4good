(function() {

  window.samples.lighted_sphere = {

    initialize: function(canvas) {
      var scene = new THREE.Scene();

      var camera = new THREE.PerspectiveCamera( 75, sample_defaults.width / sample_defaults.height, 1, 1000 );
      camera.position.z = 100;

      var geometry = new THREE.CubeGeometry( 70, 70, 70 );
      var material = new THREE.MeshLambertMaterial( { color: 0xdddddd } );

      var mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );

      var renderer = new THREE.WebGLRenderer({canvas: canvas});
      renderer.setSize( sample_defaults.width, sample_defaults.height );

      function animate() {
        requestAnimationFrame( animate, canvas );

        if(sample_defaults.paused) return;

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;

        renderer.render( scene, camera );
      }

      animate();
    }
  };
})();
