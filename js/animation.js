function remain( objKey ) {
    if ((calculateParams[celestialBodies[objKey].parent.name] && celestialBodies[objKey].parent.name != "Sun") ||
        calculateParams[objKey])
        return true;
    return false;
}


function render() {
    for (var objKey in celestialBodies) {
        if ( firstflag || remain(objKey)) {
            celestialBodies[objKey].update(globalTime.getRelative());
        }
    }
    if (firstflag) {
        $("#prompt").fadeOut(500);
        container.appendChild(renderer.domElement);
    }
    firstflag = false;
    var body = params.Camera;
    var renderCamera = trackCamera[body].camera;
    trackCamera[body].setCamera();

    // if(Math.sqrt(
    //     cameraParameters.getX() * cameraParameters.getX()
    //     + cameraParameters.getY() * cameraParameters.getY()
    //     + cameraParameters.getZ() * cameraParameters.getZ()
    // ) > 2000) {
    //     sunMaterial.depthTest = false;
    // } else {
    //     sunMaterial.depthTest = true;
    // }
    renderer.render(scene, renderCamera);
}