document.getelementById('img1').onmouseover = abc;
function abc() {
    document.getElementById('img1').style.filter = 'grayscale(0%)';
}
document.getElementById('img1').onmouseout=xyz;
function xyz(){
    document.getElementById('img1').style.filter='grayscale(100%)';
}