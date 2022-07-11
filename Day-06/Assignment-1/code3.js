// 3. Print the fibonacci sequence?
// example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ..


const fibonacci=(tillNumber)=>{
    const fib=[];
    fib[0]=0;

    if(tillNumber < 1){
        return NaN;
    }

    if(tillNumber === 1){
        return fib;
    }
    fib[1]=1;

    if(tillNumber === 2){
        return fib;
    }

    for( let i=2; i<= tillNumber-1 ;i++)
    {
        fib[i]=fib[i-1]+fib[i-2];
    }

    return fib;

}

arr=[0,1,2,3,8,15,30];
arr.forEach((value)=>{
    console.log(fibonacci(value));
})