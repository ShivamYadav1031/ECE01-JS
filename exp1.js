function calculateResult(){
    let n=document.getElementById("subjects").value;
    let i;
    let total=0;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("Enter the subject No."+(i+1)));
        total+=x;

    }
    let average =total/n;
    let grade;
    let result;
    if(average>=90 && average<=100){
    (grade="A+");
    }

    if(average>=75 && average<90){
        (grade="A");
        result="PASS"
    }

    if(average>=60 && average<75){
        (grade="B");
        result="PASS"
    }

    if(average>=40 && average<60){
        (grade="C");
        result="PASS"
    }

    else{
       (grade="F");
       result="FAIL"
    }
    



    let r=document.getElementById("result").innerHTML= "Total marks:" + total + "<br/>" + "Average marks:" + average +"<br/>" + "Grade:"+ grade + "<br/>" + "Result:" + result;

}