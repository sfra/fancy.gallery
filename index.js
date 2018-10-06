/*	[ x ][ o ][ x  ][ o ][ x ]
	[ o ][ x ][ o ][ x ][ o]
	[ x ][ o ][ x ][ o ][ x ]*/
/*0 0	1 0
2 0		3 0
4 0		

1 1		0 1
3 1		2 1
		4 1	

0 2		1 2
2 2		3 2
4 2*/
let ydim = 5,
	xdim = 3;

for (let i = 0; i < ydim; i++) {
	for (let j = 0; j < xdim; j++) {
		console.log(j, i);
	}

}