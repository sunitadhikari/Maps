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
const isEmail = (emailVal)=>{
    var atSymbol= emailVal.indexOf("@");
    if(atSymbol<1)return false;
    var dot=emailVal. lastIndexOf('.');
    if(dot<=atSymbol +2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}
const validate = ()=>{
    const usernameVal =username.value.trim();
    const emailVal =email.value.trim();
    const phoneVal =phone.value.trim();
    const passwordVal =password.value.trim();
    const cpasswordVal =cpassword.value.trim();

    if(usernameVal===""){
        setErrorMsg(username, 'username cannot be blank');
    }
    else if(usernameVal.length <= 2){
        setErrorMsg(username, 'username min in 3 char');
    }else{
        setSuccessMsg(username);
    }
    if(emailVal=== ""){
        setErrorMsg(email, 'email cannot be blank');
    }
    else if(isEmail(emailVal)){
        setErrorMsg(emailVal, 'Not a valid Email');
    }else{
        setSuccessMsg(email);
    }
}
function setErrorMsg(input, errormsgs){
const formControl= input.parentElement;
const small =formControl.querySelector('small');
formControl.className="form-control err

}