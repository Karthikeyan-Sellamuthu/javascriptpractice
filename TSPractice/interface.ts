interface point{
    x:number,
    y:number,
    z:number
}

const cuboid:point={
    x:5,
    y:3,
    z:8
}

//Here in below function I have sent a cuboid object as parameter which is of data type point where
//as the object cuboid that satisifies the interface point
function areaofCuboid(n:point):number{
    let area:number=0;
    area=n.x * n.y * n.z;
    return area;
}
console.log('Area of Cuboid is', areaofCuboid(cuboid));