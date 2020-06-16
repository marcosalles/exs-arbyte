var obj = {};

obj.attr = 'Hello, world';
obj.f1 = function() {
	console.log('F1:',this.attr);
	return function() {
		console.log('F1.1:',this.attr);
	}
}
obj.f2 = function() {
	console.log('F2:',this.attr);
	return () => {
		console.log('F2.1:',this.attr);
	}
}
obj.f3 = function() {
	console.log('F3:',this.attr);
	return () => {
		console.log('F3.1:',this.attr);
		return () => {
			console.log('F3.2:',this.attr);
		}
	}
}

var f11 = obj.f1();
f11();
obj.f2()();
obj.f3()()();
