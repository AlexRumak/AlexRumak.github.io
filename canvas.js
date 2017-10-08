/*
 * Alexander Rumak
 */

function draw() {
    var canvas = document.getElementById('tutorial');

    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');
        //drawTriangle(ctx);
        //drawInvertedTriangles(ctx);
        //drawHalfCircle(ctx);
        //drawAllTheseCircles(ctx);

        setInterval(function(){
            drawingSquares(ctx, canvas);
        }, 200);
       
    }
}

function drawAllTheseCircles(ctx) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
            ctx.beginPath();
            var x = 25 + j * 50; // x coordinate
            var y = 25 + i * 50; // y coordinate
            var radius = 20; //Arc radius
            var startAngle = 0;
            var endAngle = Math.PI + (Math.PI * j) / 2; //End point on circle
            var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

            ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

            if(i > 1) {
                ctx.fill();
            } else {
                ctx.stroke();
            }
        }
    }
}

function randomValue() {
    return Math.round(Math.random() * 255);
}

function changeCtxColor(ctx) {
    var red = randomValue();
    var green = randomValue();
    var blue = randomValue();
    ctx.fillStyle = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function downTriangle(ctx, x, y, height, width) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+width, y); 
    ctx.lineTo(x+width/2, y+height);
    ctx.lineTo(x, y);
    ctx.fill();
}

function upTriangle(ctx, x, y, height, width) {
    ctx.beginPath();
    ctx.moveTo(x, y+height);
    ctx.lineTo(x+width, y+height);
    ctx.lineTo(x + width/2, y);
    ctx.lineTo(x, y+height);
    ctx.fill();
}

function drawingSquares(ctx, canvas) {
    var width = canvas.width;
    var height = canvas.height;
    var divisionNum = 40;

    var count = 0;
    for(var i = 0; i < width; i = i + divisionNum) {
        for(var j = 0; j < height; j = j + divisionNum) {
            changeCtxColor(ctx);
            if(count == 0) {
                downTriangle(ctx, j, i, 40, 40);
                count = 1;
            }
            else {
                upTriangle(ctx, j, i, 40, 40);     
                count = 0;           
            }
        }
    }
}

function drawInvertedTriangles(ctx) {

    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105,25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();


}

function drawTriangle(ctx) {
    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.lineTo(200, 500);
    ctx.lineTo(600, 500);
    ctx.fill();
}

function draw1() {

    var canvas = document.getElementById('tutorial');
    
    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.font = '48px serif';
        ctx.fillText('Hello World!', 0, 100);
        setTimeout(function() {
            ctx.font = '10px serif';
            ctx.fillText('Bonnie says hi', 0, 100);
        }, 2000);

    } 
    else {
    
    }

}

function drawHalfCircle(ctx) {
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.arc(50, 50, 100, 100, 3);
    ctx.stroke();
}



