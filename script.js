
let pointA = [0, 5];
let pointB = [3, 2];
let pointC = [1, 10];
let pointD = [7, 4]

function logRectInfo(topLeft, bottomRight) {
    let width = bottomRight[0] - topLeft[0];
    let length = topLeft[1] - bottomRight[1];

    let area = width * length;
    let perimeter = 2 * (width + length);

    console.log(`The area of the triangle is ${area}`);
    console.log(`The length of the perimeter of the triangle is ${perimeter}`);
}

logRectInfo(pointA, pointB);
logRectInfo(pointC, pointD);


