$(".Cot").click(function(){
    let a=document.getElementById("name-form4-p");
      let b=document.getElementById("email-form4-p");
if(a.value==""){
    alert("Please Enter Your Name To Continue");
   // $(".display-4").attr("href","");
}
else if (b.value=="") {
     alert("Please Enter Your Email To Continue");
}
// else if ($(".Sub").click(false)){ 
//     alert("First Submit the form to Continue");
// }
else{
    $(".Cot").attr("href","page2.html"); 
}

});
let Name=document.getElementById("name-form4-p");
Name.oninput=function(){
    localStorage.setItem("Name", Name.value);
}

