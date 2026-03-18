function calculateResult() {
    let n = document.getElementById("subjects").value ;

    let i;
    let total = 0;
    for ( i = 0; i < n; i++) {
        let x = prompt("enter subject number" +(i+1));
        total += x; 
    }
    
    let avg = total/n;
    // let total;
    if( avg >= 33) {
        document.write("pass")
    }
    else {
        document.write("fail");
    }

    let r = document.getElementById("result").innerHTML = "total marks" + total + "<br/>" + "average reslut" + avg + "<br/>" + "grade" + grade + "<br/>" ;
    // document.write(r)
    r.innerHTML = innerHTML;
} 