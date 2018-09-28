let arr = [],
    i = 1,
    start = false;

function setup() {
  createCanvas(800, 600);
  
  for (let x = 0; x < width; x++) {
    arr.push(random(height));
  }
}
		
function draw() {
  background(32, 194, 14);
  
  for (let n = 0; n < width; n++) {
    line(n, height - arr[n], n, height);
    stroke(0);
  }
  
  if(start){
    for(let n = 0; n < width / 2; n++){
    	let key = arr[i],
        	j = i - 1;
      
    	while (j > 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      
    	arr[j + 1] = key;
    	i++;
    }
  }
}

function mousePressed() {
  start = start ? false : true;
}