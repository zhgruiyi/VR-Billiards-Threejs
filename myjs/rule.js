function fallinHole(i){
    if(marks[i]==0){
        //mesh.material.visible =false;
    }
    else if((bodies[i].position.x-15.5)*(bodies[i].position.x-15.5)+(bodies[i].position.z-9.5)*(bodies[i].position.z-9.5)<2){
        //if(!(bodies[i].position.x-15.5)*(bodies[i].position.x-15.5)+(bodies[i].position.z-9.5)*(bodies[i].position.z-9.5)>1.2&&marks[i]==1){
            marks[i]=0;
            if(i!=0) Fallen.push(i);
        //}
    }
    else if((bodies[i].position.x+15.5)*(bodies[i].position.x+15.5)+(bodies[i].position.z-9.5)*(bodies[i].position.z-9.5)<2){
        //if(!(bodies[i].position.x+15.5)*(bodies[i].position.x+15.5)+(bodies[i].position.z-9.5)*(bodies[i].position.z-9.5)>1.2&&marks[i]==1){
            marks[i]=0;
        if(i!=0) Fallen.push(i);
        //}
    }
    else if((bodies[i].position.x+15.5)*(bodies[i].position.x+15.5)+(bodies[i].position.z+9.5)*(bodies[i].position.z+9.5)<2){
        //if(!(bodies[i].position.x+15.5)*(bodies[i].position.x+15.5)+(bodies[i].position.z+9.5)*(bodies[i].position.z+9.5)>1.2&&marks[i]==1) {

            marks[i]=0;
        if(i!=0) Fallen.push(i);
        //}
    }
    else if((bodies[i].position.x-15.5)*(bodies[i].position.x-15.5)+(bodies[i].position.z+9.5)*(bodies[i].position.z+9.5)<2){
        //if(!(bodies[i].position.x-15.5)*(bodies[i].position.x-15.5)+(bodies[i].position.z+9.5)*(bodies[i].position.z+9.5)>1.2&&marks[i]==1){
             marks[i]=0;
        if(i!=0) Fallen.push(i);
        //}
    }
    else if((bodies[i].position.x)*(bodies[i].position.x)+(bodies[i].position.z-9.5)*(bodies[i].position.z-9.5)<1.56){
        //if(!(bodies[i].position.x)*(bodies[i].position.x)+(bodies[i].position.z-9.5)*(bodies[i].position.z-9.5)>0.5&&marks[i]==1){
             marks[i]=0;
        if(i!=0) Fallen.push(i);
        //}
    }
    else if((bodies[i].position.x)*(bodies[i].position.x)+(bodies[i].position.z+9.5)*(bodies[i].position.z+9.5)<1.56) {
        //if (!(bodies[i].position.x) * (bodies[i].position.x) + (bodies[i].position.z + 9.5) * (bodies[i].position.z + 9.5) > 0.5 && marks[i] == 1) {
            marks[i] = 0;
        if(i!=0) Fallen.push(i);
        //}
    }
    else if(!(bodies[i].position.x<17&&bodies[i].position.x>-17&&bodies[i].position.z<11&&bodies[i].position.z>-11)) {
        marks[i] = 0;
    }
}
