/*	[ x ][ x ][ x ][ x ][ x ]
	[ x ][ x ][ x ][ x ][ x ]
	[ x ][ x ][ x ][ x ][ x ]			
0 0

0 1
1 0

0 2
1 1
2 0

1 2
2 1
3 0

2 2
3 1
4 0

3 2
4 1

4 2 */
let ydim = 5,
	xdim = 10;


for (let m = 0; m < ydim + xdim - 1; m++) {
	for (let j = 0; j < xdim; j++) {
		for (let i = 0; i < ydim; i++) {
			if (i + j === m) {
				console.log(i, j);
			}
		}
	}
}











// for (let m = 1; m < ydim; m++) {
// 	for (let j = ydim - m, i = 0; i < m; i++, j++) {
// 		console.log(j, i);
// 	}
// }




// for (let k = 0; k < xdim; k++) {

// 	for (let m = 0; m < 1; m++) {
// 		for (let i = k, j = 0; i < xdim && j < ydim; i++, j++) {

// 			console.log(j, i);



// 		}
// 	}
// }
// for (let k = 0; k < xdim; k++) {

// 	for (let m = 0; m < 1; m++) {
// 		for (let i = k, j = 0; i < xdim && j < ydim; i++, j++) {

// 			console.log(j, i);



// 		}
// 	}
// }