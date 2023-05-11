// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    let scuberHQ = 42;
    if (someValue > 42) {
        let distFromHQ = someValue - scuberHQ;
        return distFromHQ
    } else {
        let distFromHQ = scuberHQ - someValue;
        return distFromHQ
    }
}


function distanceFromHqInFeet(value) {
    let ManhattanBlock = 264;
    return distanceFromHqInBlocks(value) * ManhattanBlock;
}



/* distanceFromHqInBlocks(50)
//              distanceFromHqInBlocks(operation, value)
distanceFromHqInFeet(distanceFromHqInBlocks, 34)
 */
console.log(distanceFromHqInBlocks(50))
//let inFeet = distanceFromHqInBlocks(operation, value)
console.log(distanceFromHqInFeet(43))

function distanceTravelledInFeet(startSteet, endStreet) {
    if (startSteet < endStreet) {
        return (endStreet - startSteet) * 264
    } else {
        return (startSteet - endStreet) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let value = distanceTravelledInFeet(start, destination);

if (value < 400){
    return 0
} else if(value > 401 && value < 2000){
    return (value - 400)*.02
}else if (value > 2001 && value < 2500){
    return 25
}else{
    return 'cannot travel that far'
}

}
