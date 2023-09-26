function init() 
{ 
	
	//Eesti Lipp

	var canvas = document.getElementById("canvas");
	if(canvas.getContext)
	{
 		var ctx = canvas.getContext("2d");
        ctx.fillStyle="#0072CE";
		ctx.fillRect (75, 0, 190, 60); 
		
        var ctx = canvas.getContext("2d");
        ctx.fillStyle="#000000";
		ctx.fillRect (75, 60, 190, 60); 
		
        ctx.lineWidth = 1;
		ctx.strokeRect(75, 120, 190, 60);
		

    

	}
	
	//täht
	var polygon = document.querySelector("polygon");
	function movePolygon(dx, dy) {
    
    var points = polygon.getAttribute("points");

    var coordinates = points.split(/\s+/).map(function(coord) {
        var xy = coord.split(",");
        return [parseFloat(xy[0]), parseFloat(xy[1])];
    });

    for (var i = 0; i < coordinates.length; i++) {
        coordinates[i][0] += dx;
        coordinates[i][1] += dy;
    }

    points = coordinates.map(function(xy) {
        return xy.join(",");
    }).join(" ");

    polygon.setAttribute("points", points);
}

	movePolygon(15, 10);



	//diagramm dwfwfwgvdfes
	var canvas = document.getElementById("canvas");
	if (canvas.getContext) {
	var ctx = canvas.getContext("2d");
	var centerX = canvas.width / 4+20	;
	var centerY = canvas.height / 2+90;
	var radius = Math.min(centerX, centerY) - 20; 
	var sliceAngle = Math.PI * 2 * (1 / 6);

	// rotate go brr
	var rotationAngle = (240 * Math.PI) / 180;

	//black part
	ctx.beginPath();
	ctx.moveTo(centerX, centerY) ;
	ctx.arc(centerX, centerY, radius,rotationAngle, rotationAngle + sliceAngle, false);
	ctx.fillStyle = "#000"; 
	ctx.fill();

	//white part
	ctx.beginPath();
	ctx.moveTo(centerX, centerY);
	ctx.arc(centerX, centerY, radius, rotationAngle + sliceAngle, rotationAngle + Math.PI * 2, false);
	ctx.fillStyle = "#FFFFFF"; 
	ctx.fill();
	ctx.strokeStyle = "#000"; 
	ctx.lineWidth = 2; 
	ctx.stroke();


} 
	}  
onload=init;

