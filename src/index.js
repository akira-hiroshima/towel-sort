module.exports = function towelSort (matrix) {
	if (matrix == undefined) {return [];}
	let arr=[], buffer=[];
	for(let i=1;i<matrix.length;i+=2){
	matrix[i].reverse();
	}
    for(i=0;i<matrix.length;i++){
		arr = matrix[i].concat();
	for(j=0;j<matrix[i].length;j++) {
			buffer.push(arr[j]);
		}
  }
  return buffer;
}
