async function getData(){
    const rollnodata = await proj1;
    console.log(rollnodata);
    const biodatas=await getBiodata();
}
getData();