// // global functions
// let curr_q=$(".curr_q");
let answer=document.getElementsByName("answer");

// // settting the user name

// let Pname=document.getElementById("PName");
let storedName=localStorage.getItem('Name');

// Pname.innerHTML=storedName;
// stroring the questions on localstorage
 $(".c_qtn").eq(0).fadeIn(1000);
function Loaded(){ 
   //  localStorage.setItem("currentQuestion",question[question_index].q);
  //let getQ=localStorage.getItem("currentQuestion");

//$(".curr_q").html(getQ);

 $("#a1").html(question[question_index].a);   
 $("#a2").html(question[question_index].b);   
$("#a3").html(question[question_index].c);  
$("#a4").html(question[question_index].d);  
$("#q_number").html(`${qn}/${question.length} `);

//checkAnswer();
}

function checkAnswer(){

//$("#ansA").click(function(){
    if($('#ansA').is(':checked') && answer[0].value===question[question_index].correctOption){
         console.log('correct');
      //  localStorage.setItem(question[question_index].q,$("label").eq(0).text());
       Correct();
  document.getElementById("check_correct").play();
    $(".objectives").eq(0).addClass("green");
    }

 
//else{
    //console.log("wrong Answer");
   // localStorage.setItem(question[question_index].q,$("label").eq(0).text());

//}
//});

   
//$("#ansB").click(function(){
  else if($('#ansB').is(':checked') && answer[1].value===question[question_index].correctOption){
         console.log('correct');
     //   localStorage.setItem(question[question_index].q,$("label").eq(1).text());
     Correct();
     document.getElementById("check_correct").play();
    $(".objectives").eq(1).addClass("green");
    }
 
//else{
 //   console.log("wrong Answer");

     //localStorage.setItem(question[question_index].q,$("label").eq(1).text());
    
//}
//});

  
//$("#ansC").click(function(){
   else if($('#ansC').is(':checked') && answer[2].value===question[question_index].correctOption){
         console.log('correct');
         //localStorage.setItem(question[question_index].q,$("label").eq(2).text());
          Correct();
            document.getElementById("check_correct").play();
              $(".objectives").eq(2).addClass("green");
    }
//else{
   // console.log("wrong Answer");
     //localStorage.setItem(question[question_index].q,$("label").eq(2).text());
//}
//});

  
//$("#ansD").click(function(){
  else if($('#ansD').is(':checked') && answer[3].value===question[question_index].correctOption){
         console.log('correct');
        // localStorage.setItem(question[question_index].q,$("label").eq(3).text());
         Correct();
           document.getElementById("check_correct").play();
             $(".objectives").eq(3).addClass("green");
    }
 



 else if(!$('#ansA').is(':checked') && !$('#ansB').is(':checked') && !$('#ansC').is(':checked')  && !$('#ansD').is(':checked')             ){
alert("!!Oh sorry " + storedName.toUpperCase() + " you must choose an answer first to continue");
 }


else{
    console.log("wrong Answer");
    // localStorage.setItem(question[question_index].q,$("label").eq(3).text());
    Wrong();
    
navigator.vibrate(500);
if($('#ansA').is(':checked') && answer[0].value!==question[question_index].correctOption){
$(".objectives").eq(0).addClass("red");

}
else if($('#ansB').is(':checked') && answer[1].value!==question[question_index].correctOption){
$(".objectives").eq(1).addClass("red");
 }
else if($('#ansC').is(':checked') && answer[2].value!==question[question_index].correctOption){
$(".objectives").eq(2).addClass("red");
 }

else if($('#ansD').is(':checked') && answer[3].value!==question[question_index].correctOption){
$(".objectives").eq(3).addClass("red");
 }


 document.getElementById("check_wrong").play()
}
localStorage.setItem("Correct",  `${scored*100/question.length} ` );


 EndedQuiz();


if($('#ansA').is(':checked') || $('#ansB').is(':checked') || $('#ansC').is(':checked')  || $('#ansD').is(':checked')   ){
$("#content12-1a").fadeIn(1000);
Disabl();

}
}




// when we click on the label it should light up
$(".objectives").click(function(){
    $('.objectives').removeClass("label_selected");
    $(this).addClass("label_selected");
})

// // next question

function nxtQtn(){
//$('#nxt').click(function(){
    console.log('go_to');
    if(question_index < question.length - 1 ){

       question_index +=1;
    
       Loaded();



    }

 


if (c_q<$(".c_qtn").length) {
    c_q++;
    $(".c_qtn").eq(c_q).toggle(1000);
 
 $(".c_qtn").eq(c_q-1).toggle(1000);
 
}

 


resetValues();
}
// disabbling the choices after selection
function Disabl(){
    $(".Submit_answer").fadeOut(1000);

}
  
function resetValues(){
     $('.objectives').removeClass("label_selected");
     $(".objectives").removeClass("green");
       $(".objectives").removeClass("red");
document.getElementById("ansA").checked=false;
document.getElementById("ansB").checked=false;
document.getElementById("ansC").checked=false;
document.getElementById("ansD").checked=false;

$("#content12-1a").fadeOut(1000);

 $(".Submit_answer").fadeIn(1000);


qn++;
$("#q_number").html(`${qn}/${question.length} `);
}

  //  });


  // for the marks here is the function that drives it
function Correct(){
    scored++;
   $('.correct').html(Math.floor(Math.round(`${scored*100/question.length} `)) + `%`)
 //  $('.correct').html(scored);


}
// for the wrong choice
function Wrong(){
    wronged--;
   $('.wrong').html(Math.floor(Math.round(`${wronged*100/question.length} `)) + `%`);
 
}
Loaded();

function EndedQuiz(){
    if(qn===question.length-1){
      alert("This Next Question Is Your Last Question");
    }
    else if(qn===question.length){
     
       let con = confirm(`\t!Are You sure that was your last answer because if you click ok the questions will disappear \n Or you can click cancel to repick your answer. \nOr else that Was The last question\n Thank you ${storedName.toUpperCase()} for playing`);
        if(con===true){
            $("#header18-15").fadeOut(2000);
            $("#content6-18").fadeOut(3000);
            $("#nxt").fadeOut(3000);
            $("#prev").fadeIn(5000);
            $("#Result").fadeIn(5000);
        }
        else{
            $(".Submit_answer").fadeIn(1000);
            $("#content12-1a").fadeOut(1000);
        }
    }
}