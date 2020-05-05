
bs = 2;
pt = 4;

result = 1;
while(pt >= 1) {
	result = result * bs;
	pt--;
}

log(result);

/*
bs		pt		pt >= 1		result		pt--
2			4			t 				1*2=2			3
2			3			t 				2*2=4			2
2			2			t 				4*2=8			1
2			1			t 				8*2=16		0
2			0			f BREAK
*/