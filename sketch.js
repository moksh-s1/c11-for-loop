var weight = [35,38,42,45,43,34,36,41,48,32];
var sum = 0
function setup() {
  createCanvas(400,400);
 
  for(var w = 0; w <weight.length; w++){
 sum = sum + weight[w]
 console.log(sum)

  }
  var avg = sum/weight.length

 console.log(avg)
}

function draw() 
{
  background(30);
}

 

