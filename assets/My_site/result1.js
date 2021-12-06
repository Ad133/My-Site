let nm=localStorage.getItem("Name");
let scores=localStorage.getItem("Correct");
$(".name").html(nm);
$(".correct").html(`Your Correct Answer Percentage without rounding off is: ${scores}%`);

$(".wrong").html(`Your Wrong Answer Percentage without rounding off is: ${100-scores}%`);


