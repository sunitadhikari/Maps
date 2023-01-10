async function late(){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("hello its resolve");
        }, 2000);
    });
 const message =await promise;
}

 delayesHello();