

function loaded() {


        setTimeout(function () {

        }, 1e2);
    loadingcount--;
    if(loadingcount <= 0) {
        $("#loader_bg").hide();
        $("#rule_bg").fadeIn();
    }
}

function init() {
    // 初始化场景
    scene = new THREE.Scene();
    scene2 = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene2.background = new THREE.Color(0xffffff);
    // 创建渲染器
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("mainCanvas"),
        antialias: true, // 抗锯齿
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);


    // 创建透视相机
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    //camera.position.set(0, 10, 30);
    //camera.position.set(-22, 5, 0);
    camera.position.set(-22, 8, 0);
    camera.lookAt(8,0.49,0);

    camera2 = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    //camera.position.set(0, 10, 30);
    //camera.position.set(-22, 5, 0);
    camera2.position.set(-22, 8, 0);
    camera2.lookAt(8,0.49,0);

    // 参数初始化
    mouse = new THREE.Vector2();

   // raycaster = new THREE.Raycaster();

    // 环境光
    var ambientLight = new THREE.AmbientLight(0xffffff);

    scene.add(ambientLight);
    scene2.add(ambientLight);

    var Directionlight = new THREE.DirectionalLight(0xffffff,0.5);
    scene.add(Directionlight); //将光添加到场景中

    //点光源
    var spotLight = new THREE.PointLight(0xccffcc,1.2);
    spotLight.viscosity=true;
    spotLight.position.set(0, 50, 0);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 2048;
    spotLight.shadow.mapSize.height = 2048;

    //lightProbe = new THREE.LightProbe();
    //scene.add( lightProbe );

// 光的强度 默认值为1
    spotLight.intensity = 1;
    // 从发光点发出的距离，光的亮度，会随着距离的远近线性衰减
    spotLight.distance = 350;
    // 光色散角度，默认是 Math.PI * 2
    spotLight.angle = 0.4;
    // 光影的减弱程度，默认值为0， 取值范围 0 -- 1之间
    spotLight.penumbra = 0.1;
    // 光在距离上的量值, 和光的强度类似（衰减指数）
    spotLight.decay = 1;

    scene.add(spotLight);
    var cloneLight=spotLight.clone();
    cloneLight.castShadow!=1;
    scene2.add(cloneLight);
    // 平行光
    //var directionalLight = new THREE.DirectionalLight(0xBCD2EE);
    //var directionalLight = new THREE.DirectionalLight(0xffffff);
    //directionalLight.position.set(1, 0.75, 0.5).normalize();
    //directionalLight.castShadow=true;

    //scene.add(directionalLight);


    //THREE.Loader.LoadingManager.addHandler( /\.dds$/i, new THREE.DDSLoader() );
    var mtlLoader = new THREE.MTLLoader();
    //mtlLoader.setPath( './' );       //设置我们需要加载的mtl文件路径
    mtlLoader.load( 'obj/tqz00n.mtl', function( material ) {      //这里加载我们需要的文件名
        material.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( material );      //材质，也可自定义
        //objLoader.setPath( './' );               //设置要加载的obj文件的路径
        objLoader.load( 'obj/tqz00n.obj', function ( object ) {           //加载obj文件
            /*object.position.z = 60;         //这里设置我们的素材相对于原来的大小以及旋转缩放等
            object.position.y = -8.8;
            object.position.x = 50.5;*/
            object.position.z = 0.2;         //这里设置我们的素材相对于原来的大小以及旋转缩放等
            object.position.y = 0.2;
            object.position.x = 0.2;
            object.scale.x = 1;
            object.scale.y = 1;
            object.scale.z = 1;
            object.shininess=2;
            var object1 = object;
            scene.add( object1 );

        });
        loaded();
    }) ;
    loaded();

    var pointx=8;



    addSphere(-pointx,0.49,0,0);//白球
    var sqrt3=Math.sqrt(3);

    addSphere(pointx,0.49,0,1);//1

    addSphere(pointx+sqrt3/2,0.49,0.5,2);//2
    addSphere(pointx+sqrt3/2,0.49,-0.5,3);//3
    addSphere(pointx+2*sqrt3/2,0.49,0,4);//4
    addSphere(pointx+2*sqrt3/2,0.49,1,5);//5
    addSphere(pointx+2*sqrt3/2,0.49,-1,6);//6
    addSphere(pointx+3*sqrt3/2,0.49,0.5,7);//7
    addSphere(pointx+3*sqrt3/2,0.49,-0.5,8);//8
    addSphere(pointx+3*sqrt3/2,0.49,1.5,9);//9
    addSphere(pointx+3*sqrt3/2,0.49,-1.5,10);//10
    addSphere(pointx+4*sqrt3/2,0.49,0,11);//11
    addSphere(pointx+4*sqrt3/2,0.49,1,12);//12
    addSphere(pointx+4*sqrt3/2,0.49,-1,13);//13
    addSphere(pointx+4*sqrt3/2,0.49,2,14);//14
    addSphere(pointx+4*sqrt3/2,0.49,-2,15);//15
    //addSphere(0,0.5,1);
    //addSphere(0,0.5,0);
    //addSphere(11.8,0.5,5);
    //addSphere(12,0.5,5);
    //addSphere(0,0.5,0.5);
    //addSphere(-10,0.5,0.5);
    //addSphere(12,0.5,0);
    //addPlane(15,0,0,17,2,-Math.PI/2);

    for(var i=1;i<16; i++)
    {
        if(i<8) {bodies1.push(bodies[i]);meshes1.push(meshes[i]);}
        else if(i>8) {bodies2.push(bodies[i]);meshes2.push(meshes[i]);}
    }

    addCylinder(15,0.5,0,15.8,0,0,1,Math.PI/2);

    addCylinder(-15,0.5,0,15.8,0,0,1,Math.PI/2);

    addCylinder(7.5,0.5,9,12.2,0,1,0,Math.PI/2);
    addCylinder(-7.5,0.5,9,12.2,0,1,0,Math.PI/2);
    addCylinder(7.5,0.5,-9,12.2,0,1,0,Math.PI/2);
    addCylinder(-7.5,0.5,-9,12.2,0,1,0,Math.PI/2);

    addgroundPlane(0,0,0,30,17,-Math.PI/2);

    var texture = new THREE.TextureLoader().load( 'img/ground-texture0.jpg' );
    var material1=new THREE.MeshLambertMaterial({ color: 0xffffff,map: texture});
    var geometry = new THREE.PlaneGeometry(1000,1000);
    var ground= new THREE.Mesh( geometry, material1 );
    ground.rotateOnAxis(new THREE.Vector3(1,0,0),-Math.PI/2);
    ground.position.x=0;
    ground.position.y=-10;
    ground.position.z=0;
    scene.add(ground);

    var material2=new THREE.MeshStandardMaterial({ color: 0xffffff,shininess: 100});
    var sphereGeo = new THREE.SphereGeometry(0.49, 20, 20);

    potentialWhite = new THREE.Mesh(sphereGeo, material2);
    potentialWhite.castShadow=!0;
    potentialWhite.receiveShadow=!0;
    scene.add(potentialWhite);
    potentialWhite.visible=false;

    mtlLoader.load( 'obj/cue.mtl', function( material ) {      //这里加载我们需要的文件名
        material.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( material );      //材质，也可自定义
        objLoader.load( 'obj/cue.obj', function ( object ) {           //加载obj文件
            object.traverse(function(child) {
                if (child instanceof THREE.Mesh) {
                    child.material.side = THREE.DoubleSide;
                }
            });


            object.position.z = bodies[0].position.z;         //这里设置我们的素材相对于原来的大小以及旋转缩放等
            object.position.y = bodies[0].position.y;
            object.position.x = -bodies[0].position.x;

            object.scale.x = 0.6;
            object.scale.y = 0.6;
            object.scale.z = 0.4;

            object.rotateOnAxis(new THREE.Vector3(0,1,0),3*Math.PI/2);
            //object.rotateOnAxis(new THREE.Vector3(1,0,0),-Math.PI*5/180);

            cue0=object;
            //cueWrap.add(cue0);
            scene2.add(cue0);


        });
        loaded();
    });
    loaded();

    window.addEventListener('resize',resize);

}


function onclickStart() {
    if ( $("#mainmenu").fadeOut()) {
        $("#powerBorder, #powerWrap").css("margin-bottom", -$("#powerBorder").height() / 2).width(.132 * $("#powerBorder").height());
        $("#power").css("background-size", $("#powerBorder").width() + "px " + $("#powerBorder").height() + "px");
        var t = setInterval(function () {
            setTimeout(function () {
                $("#hand").show().animate({left: "49%", bottom: "39%"}, 1e2).promise().done(function () {
                    var e = $("#hitRound").height(), t = 40 * window.height / 100 + e / 2;
                    $("#powerWrap, #powerBorder").show();
                    $("#power").height($("#powerBorder").height() * Power/40  + "px");
                })
            }, 1e2),clearInterval(t)
        }, 10)
    }
}

function helper() {
    var grid = new THREE.GridHelper(100, 20, 0xFF0000, 0x000000);
    grid.position.set(0,0,0);
    grid.material.opacity = 0.1;
    grid.material.transparent = true;
    scene.add(grid);

    var axesHelper = new THREE.AxesHelper(30);
    axesHelper.position.set(0,0,0)
    scene.add(axesHelper);
}

function Counterclockwise(){
    if((camera.position.x===-22)&&(camera.position.z<17&&camera.position.z>=-17)){
        camera.position.z += 0.1;
        camera.position.y=(Math.abs(camera.position.z)/22 )*10+5;
        camera.lookAt(0,0,0);
    }
    else if((camera.position.x===-22)&&(camera.position.z>-17)){
        camera.position.z=17;
    }

    if((camera.position.z===17)&&(camera.position.x<22&&camera.position.x>=-22)){
        camera.position.x += 0.1;
        camera.lookAt(0,0,0);
    }
    else if((camera.position.z===17)&&(camera.position.x>=-22)){
        camera.position.x=22
    }

    if((camera.position.x===22)&&(camera.position.z<=17&&camera.position.z>-17)){
        camera.position.z -= 0.1;
        camera.position.y=(Math.abs(camera.position.z)/22 )*10+5;
        camera.lookAt(0,0,0);
    }
    else if((camera.position.x===22)&&(camera.position.z<17)){
        camera.position.z=-17;
    }

    if((camera.position.z===-17)&&(camera.position.x<=22&&camera.position.x>-22)){
        camera.position.x -= 0.1;
        camera.lookAt(0,0,0);
    }
    else if((camera.position.z===-17)&&(camera.position.x<22)){
        camera.position.x=-22
    }

}

function Clockwise(){
    if((camera.position.x===-22)&&(camera.position.z<=17&&camera.position.z>-17)){
        camera.position.z -= 0.1;
        camera.position.y=(Math.abs(camera.position.z)/22 )*10+5;
        camera.lookAt(0,0,0);
    }
    else if((camera.position.x===-22)&&(camera.position.z<17)){
        camera.position.z=-17;
    }

    if((camera.position.z===-17)&&(camera.position.x<22&&camera.position.x>=-22)){
        camera.position.x += 0.1;
        camera.lookAt(0,0,0);
    }
    else if((camera.position.z===-17)&&(camera.position.x>=-22)){
        camera.position.x=22
    }

    if((camera.position.x===22)&&(camera.position.z<17&&camera.position.z>=-17)){
        camera.position.z += 0.1;
        camera.position.y=(Math.abs(camera.position.z)/22 )*10+5;
        camera.lookAt(0,0,0);
    }
    else if((camera.position.x===22)&&(camera.position.z>-17)){
        camera.position.z=17;
    }

    if((camera.position.z===17)&&(camera.position.x<=22&&camera.position.x>-22)){
        camera.position.x -= 0.1;
        camera.lookAt(0,0,0);
    }
    else if((camera.position.z===17)&&(camera.position.x<22)){
        camera.position.x=-22
    }

}

function updateMeshPositions(){
    for(var i=0; i !== meshes.length; i++){
        meshes[i].position.copy(bodies[i].position);
        meshes[i].quaternion.copy(bodies[i].quaternion);
        fallinHole(i);

        if (marks[i]==0) {
            if(i==8) {
                meshes[8].material.visible=false;
                if(Turn==0) {
                    if(player1kind==0)ifGameover=2;
                    else ifGameover = 1;
                    if(player1kind==1){
                        for(var j=1;j<8;j++){
                            if (marks[j]==1) ifGameover = 2;
                        }
                    }
                    else{
                        for(var j=9;j<16;j++){
                            if (marks[j]==1) ifGameover = 2;
                        }
                    }

                }
                else{
                    if(player1kind==0)ifGameover=1;
                    else ifGameover = 2;
                    if(player2kind==1){
                        for(var j=1;j<8;j++){
                            if (marks[j]==1) ifGameover = 1;
                        }
                    }
                    else{
                        for(var j=9;j<16;j++){
                            if (marks[j]==1) ifGameover = 1;
                        }
                    }
                }
            }

            meshes[i].material.visible =false;
            /*if(player1kind==0){
                ifGetScore=1;
                if(i>0&&i<8) {
                    if(Turn==0){
                        player1kind=1;
                        player2kind=2;
                    }
                    else{
                        player1kind=2;
                        player2kind=1;
                    }
                }
                else if(i>8) {
                    if(Turn==0){
                        player1kind=2;
                        player2kind=1;
                    }
                    else{
                        player1kind=1;
                        player2kind=2;
                    }
                }
            }
            else if(Turn==0){
                if(player1kind=1&&i>0&&i<8) ifGetScore=1;
                if(player1kind=2&&i>8) ifGetScore=1;
            }
            else if(Turn==1){
                if(player2kind=1&&i>0&&i<8) ifGetScore=1;
                if(player2kind=2&&i>8) ifGetScore=1;
            }*/


        }

    }

}
function distance2(intersect){
    return (intersect.point.x-bodies[0].position.x)*(intersect.point.x-bodies[0].position.x)+(intersect.point.z-bodies[0].position.z)*(intersect.point.z-bodies[0].position.z);
}

function Firstball(){
    var position1=new THREE.Vector3(camera.position.x,0.49,camera.position.z);
    var ballpos=new THREE.Vector3(bodies[0].position.x,bodies[0].position.y,bodies[0].position.z);
    var ballpos2=new THREE.Vector3(bodies[0].position.x,bodies[0].position.y,bodies[0].position.z);
    var dst1=99999,dst2=99999,dst3=99999;
    var whichkind,nearest;
    raycaster = new THREE.Raycaster(ballpos, ballpos2.sub(position1).normalize());

    //var intersects1 = raycaster.intersectObjects(bodies1);//与单色球相交
    //     //var intersects2 = raycaster.intersectObjects(bodies2);//与双色球相交
    //     //var intersects3 = raycaster.intersectObjects(bodies[8]);//与黑色球相交

    var intersects1 = raycaster.intersectObjects(meshes1);//与单色球相交
    var intersects2 = raycaster.intersectObjects(meshes2);//与双色球相交
    var intersects3 = raycaster.intersectObjects(meshes[8]);//与黑色球相交

    //if(!(intersects1===undefined)) dst1=intersects1[0].distance;//dst1=distance2(intersects1[0]);
    //if(!(intersects2===undefined)) dst2=intersects2[0].distance;//dst2=distance2(intersects2[0]);
    //if(!(intersects3===undefined)) dst3=intersects3[0].distance;//dst3=distance2(intersects3[0]);
    if(intersects1.length!=0) dst1=intersects1[0].distance;
    if(intersects2.length!=0) dst2=intersects2[0].distance;
    if(intersects3.length!=0) dst3=intersects3[0].distance;

    dst1<dst2?((dst1<dst3)?whichkind=1:whichkind=3):((dst2<dst3)?whichkind=2:whichkind=3);//根据最短距离求的最近的球所属类型

    return whichkind;

}

function scoring(){
    for(var i=0;i<16;i++){
        if(marks[i]==0){
            if(player1kind==0){
                ifGetScore=1;
                if(i>0&&i<8) {
                    if(Turn==0){
                        player1kind=1;
                        player2kind=2;
                    }
                    else{
                        player1kind=2;
                        player2kind=1;
                    }
                }
                else if(i>8) {
                    if(Turn==0){
                        player1kind=2;
                        player2kind=1;
                    }
                    else{
                        player1kind=1;
                        player2kind=2;
                    }
                }
            }

        }
    }
    for(var i=0;i<Fallen.length;i++){

        if(Turn==0){
            if(player1kind==1&&Fallen[i]>0&&Fallen[i]<8) ifGetScore=1;
            if(player1kind==2&&Fallen[i]>8) ifGetScore=1;
        }
        else if(Turn==1){
            if(player2kind==1&&Fallen[i]>0&&Fallen[i]<8) ifGetScore=1;
            if(player2kind==2&&Fallen[i]>8) ifGetScore=1;
        }
    }
    Fallen=[];
}

function updateGameState(){
    if(Scoreperiod==true&&ifGameover==0){
        if(time>500){
            time=0;

            if(Turn==0&&(marks[0]!=0)) {
                $("#hand").show().animate({left: "49%", bottom: "39%"}, 1e3);

                camera.lookAt(bodies[0].position.x,bodies[0].position.y,bodies[0].position.z);
                for(i=0;i<bodies.length;i++)
                {
                    bodies[i].velocity.set(0,0,0);
                    bodies[i].velocity.setZero();
                    bodies[i].initVelocity.setZero();
                    bodies[i].angularVelocity.setZero();
                    bodies[i].initAngularVelocity.setZero();
                }
                scoring();
                if(iffoul==0) cue0.visible=true;
                if(iffoul==1) ifplace=true;
                camera.position.y-=10;
                Scoreperiod=false;
            }
            else if(Turn==1&&marks[0]!=0) {
                $("#hand").show().animate({left: "49%", bottom: "39%"}, 1e3);
                Scoreperiod=false;
                //camera.position.y-=10;
                camera.lookAt(bodies[0].position.x,bodies[0].position.y,bodies[0].position.z);
                for(i=0;i<bodies.length;i++)
                {
                    bodies[i].velocity.set(0,0,0);
                    bodies[i].velocity.setZero();
                    bodies[i].initVelocity.setZero();
                    bodies[i].angularVelocity.setZero();
                    bodies[i].initAngularVelocity.setZero();
                }
                scoring();
                if(iffoul==0) cue0.visible=true;
                if(iffoul==1) ifplace=true;
                camera.position.y-=10;
            }
            if(marks[0]!=0&&(iffoul==1)){
                $("#hand").hide();
                marks[0]=0;
            }
            if(marks[0]==0) {

                Scoreperiod = false;
                camera.lookAt(0, 0, 0);
                ifplace=true;
                //camera.position.y -= 10;
                for (i = 0; i < bodies.length; i++) {
                    bodies[i].velocity.set(0, 0, 0);
                    bodies[i].velocity.setZero();
                    bodies[i].initVelocity.setZero();
                    bodies[i].angularVelocity.setZero();
                    bodies[i].initAngularVelocity.setZero();
                }
                ifGetScore = 0;
            }
            if(ifGetScore==0){
                iffoul=0;
                if(Turn==0) {Turn=1;$("#player1").hide();$("#player2").show();}
                else if(Turn==1) {Turn=0;$("#player2").hide();$("#player1").show();}
            }


        }


    }
    if(Scoreperiod==false){

        if(marks[0]==1) camera.lookAt(bodies[0].position.x,bodies[0].position.y,bodies[0].position.z);
    }

    time+=1;

}

function resize() {
    if (this.width != window.innerWidth || this.height != window.innerHeight) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        $("#mainCanvas").css("width", window.innerWidth + "px").css("height", window.innerHeight + "px");
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
         $("#powerBorder, #powerWrap").css("margin-bottom", -$("#powerBorder").height() / 2).width(.132 * $("#powerBorder").height());
         $("#power").css("background-size", $("#powerBorder").width() + "px " + $("#powerBorder").height() + "px");
        $("#GameOver1").css("width", window.innerWidth + "px");
        $("#GameOver1 img").css("top", 0.5*window.innerHeight-0.2*window.innerWidth + "px");
        $("#GameOver2").css("width", window.innerWidth + "px");
        $("#GameOver2 img").css("top", 0.5*window.innerHeight-0.2*window.innerWidth + "px");
    }
}


function animate(time) {
    requestAnimationFrame(animate);
    if(time && lastTime){
        var dt = time - lastTime;
        world.step(fixedTimeStep, dt / 1000, maxSubSteps);
    }
    document.getElementById("replay").onclick=function(){
        window.location.href="test.html";
    }
    document.getElementById("exit").onclick=function(){
        window.location.href="index.html";
    }
    updateGameState();
    updateMeshPositions();

    if(ifGameover==0){
        //$("#GameOver1").show();
        renderer.render(scene, camera);
        renderer.autoClear=false;
        renderer.autoClearColor=false;
        renderer.clearDepth();

        renderer.render(scene2, camera2);

        if (left) {
            Clockwise();

        }
        if (right) {
            Counterclockwise();
        }

        lastTime = time;
    }
    else if(ifGameover==1){
        $("#GameOver1").show();

    }
    else if(ifGameover==2){
        $("#GameOver2").show();
    }


}



$(window).mousemove(function (event) {
    event.preventDefault();
    if(marks[0]==0&&ifplace){
        if(ifclick){
            camera.position.set(-22, 8, 0);
            camera.lookAt(8,0.49,0);
            ifclick=false;
        }
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        //新建一个三维单位向量 假设z方向就是0.5
        //根据照相机，把这个向量转换到视点坐标系
        var vector = new THREE.Vector3(mouse.x, mouse.y,0).unproject(camera);

        //在视点坐标系中形成射线,射线的起点向量是照相机， 射线的方向向量是照相机到点击的点，这个向量应该归一标准化。
        //raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
        var deltay=0.49-camera.position.y;
        var r= vector.sub(camera.position).normalize();
        var scale0=deltay/r.y;
        var deltax=scale0*r.x;
        var deltaz=scale0*r.z;
        potentialWhiteX=camera.position.x+deltax;
        potentialWhiteZ=camera.position.z+deltaz;

        potentialWhite.visible=true;
        potentialWhite.position.x=potentialWhiteX;
        potentialWhite.position.y=0.49;
        potentialWhite.position.z=potentialWhiteZ;

    }
    else{
        if(leftPress){

                potentialWhite.visible=false;
                rotateEnd.set( event.clientX, event.clientY );
                rotateDelta.subVectors( rotateEnd, rotateStart );

                cam_rot[Turn] += rotateDelta.x / window.innerWidth * 180;


                var t = bodies[0].position.x+10 * Math.cos(cam_rot[Turn]*Math.PI/180);
                var a = bodies[0].position.z+10* Math.sin(cam_rot[Turn]*Math.PI/180);
                //camera.position.x=bodies[0].position.x;
                //camera.position.z=bodies[0].position.z;

                camera.position.x =t;
                camera.position.z = a;

                camera.lookAt(bodies[0].position.x,bodies[0].position.y,bodies[0].position.z);
                rotateStart.copy( rotateEnd );

        }
    }
})

$(window).mousedown(function (event) {
    event.preventDefault();
    leftPress = true;
    ifclick=true;
    rotateStart.set( event.clientX, event.clientY );
});

$(window).mouseup(function (event) {
    event.preventDefault();
    leftPress = false;

    if(marks[0]==0){
        bodies[0].position.x=potentialWhiteX;
        bodies[0].position.y=0.49;
        bodies[0].position.z=potentialWhiteZ;
        meshes[0].position.copy(bodies[0].position);
        meshes[0].quaternion.copy(bodies[0].quaternion);
        bodies[0].velocity.setZero();
        bodies[0].initVelocity.setZero();
        bodies[0].angularVelocity.setZero();
        bodies[0].initAngularVelocity.setZero();
        marks[0]=1;
        meshes[0].material.visible=true;
        cue0.visible=true;
        potentialWhite.visible=false;
    }
});

$(window).keydown(function (event) {
    switch (event.keyCode) {
        case 65: // a
            left = true;
            break;
        case 68: // d
            right = true;
            break;
    }
});

$(window).keyup(function (event) {
    switch (event.keyCode) {
        case 65: // a
            left = false;
            break;
        case 68: // d
            right = false;
            break;
        case 69: // e

            $("#rule_bg").hide();
            break;
        case 83: // s
            if(Power>=5) {
                Power -= 5;
            }
            $("#power").height($("#powerBorder").height() * Power/40  + "px");
            break;
        case 87: // w
            if(Power<=35){
                Power+=5;
            }
            $("#power").height($("#powerBorder").height() * Power/40  + "px");
            break;
        case 32: // space
            ifGetScore=0;
            ifplace=false;
            var forward = new THREE.Vector3(1, 0, 0);
            forward.x = camera.position.x - bodies[0].position.x;
            forward.z = camera.position.z - bodies[0].position.z;
            forward.normalize();
            if (Turn == 0) {
                bodies[0].velocity.set(-Power * forward.x, 0, -Power * forward.z);
                camera.position.y+=10;
                if(player1kind!=0&&Firstball()!=player1kind) iffoul=1;
                $("#hand").hide();
                var t = setInterval(function () {
                    setTimeout(function () {
                        cue0.visible = false;
                    }, 1e2), clearInterval(t)
                }, 10)
            }

            if(Turn==1) {
                bodies[0].velocity.set(-Power * forward.x, 0, -Power * forward.z);
                camera.position.y+=10;
                if(player2kind!=0&&Firstball()!=player2kind) iffoul=1;
                $("#hand").hide();
                var t = setInterval(function () {
                    setTimeout(function () {
                        cue0.visible = false;
                    }, 1e2), clearInterval(t)
                }, 10)
            }
            Scoreperiod=true;
            camera.lookAt(bodies[0].position.x,bodies[0].position.y,bodies[0].position.z);
            time=0;
            break;
    }
});



$(document).ready(function () {
    $("#howToPlay").show();
    onclickStart();

    $("#player2").hide();
    initCannon();
    BallTextures.init();
    init();

    $("#GameOver1").css("width", window.innerWidth + "px").css("height", window.innerHeight + "px");
    $("#GameOver1 img").css("top", 0.5*window.innerHeight-0.2*window.innerWidth + "px");
    $("#GameOver2").css("width", window.innerWidth + "px");
    $("#GameOver2 img").css("top", 0.5*window.innerHeight-0.2*window.innerWidth + "px");
    $("#GameOver1").hide();
    $("#GameOver2").hide();
    //helper();
    animate();
});
