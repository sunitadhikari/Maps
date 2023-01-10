let a=new Promise(resolve, reject)=>{
    setTimeout(()=>{
        resolve("27 Deg")
    })
})
async function sunita(){
    return 5
}
sunita().then((x)=>{
    alert(x)
}
)