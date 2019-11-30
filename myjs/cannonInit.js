function initCannon(){
    world = new CANNON.World();
    world.gravity.set(0,-9.8,0);
    world.broadphase = new CANNON.NaiveBroadphase();
    sphereMaterial = new CANNON.Material();
    groundMaterial = new CANNON.Material();
    cylinderMaterial = new CANNON.Material();
    //定义球和地面的相互作用
    var SphereGround = new CANNON.ContactMaterial(groundMaterial, sphereMaterial, { //  定义两个刚体相遇后会发生什么
        friction: 0.6,    // 摩擦系数
        restitution: 0.1   // 恢复系数
    })
    world.addContactMaterial(SphereGround);
    //定义球和球的相互作用
    var SphereSphere = new CANNON.ContactMaterial(sphereMaterial, sphereMaterial, { //  定义两个刚体相遇后会发生什么
        restitution: 0.9    // 恢复系数
    })
    world.addContactMaterial(SphereSphere);
    //定义球和桌沿的相互作用
    var SphereCylinder = new CANNON.ContactMaterial(cylinderMaterial, sphereMaterial, { //  定义两个刚体相遇后会发生什么
        restitution: 0.8    // 恢复系数
    })
    world.addContactMaterial(SphereCylinder);

}

//台球纹理（编号花色）
BallTextures={
    ballTextures: {},
    init: function () {
        for (var color = ["#FEED01", "#182983", "#E53118", "#93117E",
            "#EF7F01", "#00914E", "#871421", "#000000",
            "#FEED01", "#182983", "#E53118", "#93117E",
            "#EF7F01", "#00914E", "#871421"], i =1; i < 16; i++) {
            var whitecanva = document.createElement("canvas");

            if (whitecanva.getContext) {
                var s = whitecanva.getContext("2d");
                w=160,h=90;
                s.canvas.width = w, s.canvas.height = h, s.fillStyle = "#FFFFFF", s.fillRect(0, 0, w, h), s.fillStyle = color[i - 1];
                var linewidth = -2;
                if(8 < i) s.fillRect(0, 2*h/7 , w, 1/2*h);
                else s.fillRect(0,0,w,h);
                s.beginPath(), s.arc(w/2, h/2, 12, 0, 2*Math.PI, 1), s.fillStyle = "#FFFFFF",s.fill();
                s.closePath();//关闭路径

                s.fillStyle = "#000000", s.font = "18px Tahoma", s.textBaseline = "middle",  s.textAlign = "center", s.fillText(i, w/2, h/2);
                this.ballTextures[i] = new THREE.Texture(whitecanva), this.ballTextures[i].anisotropy = 16, this.ballTextures[i].needsUpdate = !0
            }
        }
    }
};
//桌沿实体
function addCylinder(x1,y1,z1,wid,i,j,k,angle){
    // Physics
    var shape = new CANNON.Cylinder(0.5,0.5,wid,200);
    var body = new CANNON.Body({ mass:0 ,material: cylinderMaterial});
    body.addShape(shape);
    body.position.set(x1,y1,z1);
    body.quaternion.setFromAxisAngle(new THREE.Vector3(i,j,k), angle);
    world.addBody(body);
    bodies.push(body);

    // Graphics
    var material= new THREE.MeshStandardMaterial({ color: 0x000000 });
    geometry = new THREE.CylinderGeometry(0,0,wid,200);
    //Geometry( wid, height, 1, 1 );
    mesh = new THREE.Mesh( geometry, material );
    mesh.quaternion.setFromAxisAngle(new THREE.Vector3(i,j,k), angle);
    scene.add(mesh);
    meshes.push(mesh);
}
//桌面实体
function addgroundPlane(x1,y1,z1,wid,height,angle){
    // Physics
    var shape = new CANNON.Plane();

    var body = new CANNON.Body({ mass: 0 ,material: groundMaterial});
    body.addShape(shape);
    body.position.set(x1,y1,z1);

    body.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0), angle);
    world.addBody(body);
    bodies.push(body);

    // Graphics
    //var material= new THREE.MeshStandardMaterial({ color: 0xffffff,metalness:0 });
    var texture = new THREE.TextureLoader().load( 'img/table-texture.jpg' );
    var material= new THREE.MeshLambertMaterial({color: 0x55cc55,map: texture});
    geometry = new THREE.PlaneGeometry(30,17);
    mesh = new THREE.Mesh( geometry, material );
    mesh.receiveShadow=!0;

    mesh.quaternion.setFromAxisAngle(new THREE.Vector3(0,0,0), angle);
    //mesh.visible=false;
    scene.add(mesh);
    meshes.push(mesh);
}
//台球实体
function addSphere(x,y,z,cnt){
    // Physics


    var body = new CANNON.Body({ mass: mass ,material: sphereMaterial});
    var shape = new CANNON.Sphere(0.49);
    body.addShape(shape);
    body.position.set(x,y,z);
    body.velocity.set(0,0,0);

    world.addBody(body);
    bodies.push(body);
    if(cnt==0){
        var material=new THREE.MeshStandardMaterial({ color: 0xffffff});
    }
    else{
        var texture=BallTextures.ballTextures[cnt];
        // Graphics
        var material= new THREE.MeshPhongMaterial({ map:texture,shininess: 100});
    }

    var sphereGeo = new THREE.SphereGeometry(0.49, 20, 20);

    sphereMesh = new THREE.Mesh(sphereGeo, material);
    sphereMesh.castShadow=!0;
    sphereMesh.receiveShadow=!0;
    meshes.push(sphereMesh);
    scene.add(sphereMesh);

    marks.push(1);
}



