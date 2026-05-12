fib = (n) => {
	if (n <= 0) {
		return 0
	}

	if (n <= 2) {
		return 1
	}

	return fib(n - 2) + fib(n - 1)
}


console.log(fib(0)) //0
console.log(fib(1)) //1
console.log(fib(2)) //1
console.log(fib(6)) //8
console.log(fib(10)) //55
console.log(fib(60)) //1548008755920