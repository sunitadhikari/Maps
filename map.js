async function late(){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("hello its resolve");
        }, 2000);
    });
 
}