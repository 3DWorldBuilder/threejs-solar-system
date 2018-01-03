function render() {
    // for (var i = 1; i < planets.length; i++) {
    //     planetsPivot[i].rotateOnAxis(new THREE.Vector3(0, 1, 0).normalize(), 0.01 / stars[i].time);
    // }
    // for (var i = 1; i < stars.length; i++) {
    //     planets[i].rotation.y += 0.01 / stars[i].selftime;
    // }
    // for (var i = 0; i < count; i++) {
    //     satlitesPivot[i].rotateOnAxis(new THREE.Vector3(0, 1, 0).normalize(), 0.0001 / satlitesSpeed[i]);
    // }

    for(objKey in celestialBodies) {
        celestialBodies[objKey].update(globalTime.getRelative());
    }
    
    camera.position.x = cameraParameters.getX();
    camera.position.y = cameraParameters.getY();
    camera.position.z = cameraParameters.getZ();
    camera.lookAt(cameraParameters.getCenterX(),
        cameraParameters.getCenterY(),
        cameraParameters.getCenterZ());


    // if(Math.sqrt(
    //     cameraParameters.getX() * cameraParameters.getX()
    //     + cameraParameters.getY() * cameraParameters.getY()
    //     + cameraParameters.getZ() * cameraParameters.getZ()
    // ) > 2000) {
    //     sunMaterial.depthTest = false;
    // } else {
    //     sunMaterial.depthTest = true;
    // }

    renderer.render( scene, camera );
}