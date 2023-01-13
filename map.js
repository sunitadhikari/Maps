const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');

//add event
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    ValidityState();
})
const validate = ()=>{
    const username=username.value.trim();
    const email=email.value.trim();
    const phone=phone.value.trim();
    const password=password.value.trim();
    const cpassword=cpassword.value.trim();

    if(username===""){
        setErrormsg(username, 'username cannot be blank');
    }
    else if(username.length <= 2){
        setErrormsg(username, 'username min in 3 char');
    }else{
        setSuccessMsg(username);
    }
    if(username===""){
        setErrormsg(username, 'username cannot be blank');
    }
    else if(username.length <= 2){
        setErrormsg(username, 'username min in 3 char');
    }else{
        setSuccessMsg(username);
    }
}