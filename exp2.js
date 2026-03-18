const result = document.getElementById("SY");
// console.log(result);
result.innerHTML = "<b>Hello World</b>";
// const result1 = document.getElementsByClassName("sk1");
// // console.log(result1);
// result1[1].innerHTML="Gaur"
// result1[0].innerHTML="Sanskar"

// const result2 = document.getElementsByTagName("p");
// // console.log(result2);
// result2[0].innerHTML="This is a paragraph"
// result2[1].innerHTML="This is another paragraph"
// result2[1].style.color="red"
// result2[1].style.fontSize="20px"

//  const result = document.getElementById("SY").getAttribute("class");
//  document.getElementById("p1").innerHTML=result;
//  document.getElementById("p2").innerHTML=result;
function onClick(){
    console.log("Button clicked");
}

function onMouseOver(){
    console.log("Mouse over");
}

function onMouseOut(){
    console.log("Mouse out");
}  
function onMouseDown() {
    console.log("Mouse down");
}
function onMouseUp() {
    console.log("Mouse up");
}
function onMouseMove() {
    console.log("Mouse move");
}
function onDblClick() {
    console.log("Double click");
}