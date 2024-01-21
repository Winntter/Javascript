


function fibonacci(n) {

    if(n === 0) {
        return 0;
    }

    let prev1 = 1;
    let prev2= 1;
    let curr;
    
    for (let i = 2; i<n; i++) {
        curr = prev1 + prev2;
        prev1 = prev2;
        prev2 = curr;
    }
 
    return prev2; 
}

console.log(fibonacci(15))

// Clean Code: 


  const fib = n => (n == 1 || n == 2) ? 1 : fib(n-2) + fib(n-1)

  console.log(fib(10))
