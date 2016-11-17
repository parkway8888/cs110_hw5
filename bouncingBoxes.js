let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
const NUM_POINTS = 5;
const points = [];
const colors = ['#722F37'];

for(let i = 0; i < NUM_POINTS; i++) {
    points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: Math.random() * 10,
        height: Math.random() * 10,
        xDelta: 1,
        yDelta: 1,
        color: colors[0]
    });
}

const draw = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
	points.forEach(function(point){
        
		context.fillStyle = point.color;
        context.fillRect(point.x, point.y, point.width, point.height);
        
		if(point.x <= 0 || point.x >= (canvas.width-point.width)){
            point.xDelta *= -1;
        }
        
		if((point.y <= 0) || (point.y >= canvas.height-point.height))	{
            point.yDelta *= -1;
        }
        
		point.x += point.xDelta;
        point.y += point.yDelta;

    });
};



let animate = function() {
    draw();
    setTimeout(animate, 10);
};

draw();

$("#play").click(function() {
    animate();
});
