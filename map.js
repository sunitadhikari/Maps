async function example(){
    console.log("start");
    const result = await someAsyncFunction();
    console.log(`result is ${result}`);
    console.log("end");
}
example();