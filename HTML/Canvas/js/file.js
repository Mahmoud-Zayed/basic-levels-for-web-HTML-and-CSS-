 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 // Create The Canvas On Page

var mypageCanvas = document.createElement('canvas');

// Assign Id To This Canvas

mypageCanvas.id='c';

// Customize The Canvas

mypageCanvas.width = 600;
mypageCanvas.height = 100;
mypageCanvas.style.display = 'block';
mypageCanvas.style.margin = '50px auto';
mypageCanvas.style.border = '2px solid #222';

// Add The Canvas To The Page

document.body.appendChild(mypageCanvas);

// Get Canvas Information

var myCanvas = document.getElementById('c'),

    myContext = myCanvas.getContext('2d');

// Fill And Style Option

myContext.fillStyle = '#CCC';
myContext.strokeStyle = '#000';
myContext.lineWidth = 2;
myContext.font = '60px Arial';

// Add The Text 

myContext.fillText('Elzero Web School', 50, 80);
myContext.strokeText('Elzero Web School', 50, 80);


// Add The Second Text 

//myContext.strokeStyle = 'yellow';
  //myContext.lineWidth = 1;
 // myContext.strokeText('Elzero Web School', 50, 80);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








//var myCanvas = document.getElementById('c'),

	//myContext = myCanvas.getContext('2d');

//myContext.font ='60px Arial';


//myContext.strokeStyle ='brown';

//myContext.fillText('E', 20, 50 );

//myContext.fillStyle ='#F0F';

//myContext.fillText('l', 40, 70 );

//myContext.fillStyle ='#0F0';

//myContext.fillText('z', 60, 90 );

//myContext.fillStyle ='#080';

//myContext.fillText('e', 80, 110 );

//myContext.fillStyle ='#F00';

//myContext.fillText('r', 100, 130 );

//myContext.fillStyle ='#FF0';

//myContext.fillText('o', 120, 150 );

//myContext.strokeText('school', 60, 200);



//	myCanvasWidth =myCanvas.width;

//	myCanvasHeight =myCanvas.height;

// myContext.fillStyle = '#080'; // Fill color

// myContext.fillRect(10, 10, 100, 50);

// myContext.fillStyle = '#F00';

// myContext.fillRect(20, 20, 100, 50);

// myContext.fillStyle = '#00F';

// myContext.fillRect(30, 30, 100, 50);

// myContext.strokeStyle ='#FF0';

// myContext.lineWidth = 5;

// myContext.strokeRect(100, 100, 100, 50);

// myContext.fillRect(0, 0, myCanvasWidth, myCanvasHeight); // Rectangle Filled Inside Canvas

// myContext.strokeStyle ='#00F';

// myContext.lineWidth = 5;

// Top Left Line

// myContext.moveTo(10, 10);

// myContext.lineTo(130, 130);

// Top Right Line

// myContext.moveTo(290, 10);

// myContext.lineTo(170, 130);

// Botton Left Line

// myContext.moveTo(10, 290);

// myContext.lineTo(130, 170);

// Botton Right Line

// myContext.moveTo(290, 290);

// myContext.lineTo(170, 170);

// myContext.stroke();
// myContext.clearRect(10, 10, 100, 100)