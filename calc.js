console.log("Welcome to Calculator")
var n1 = parseInt(prompt("Enter The Number 1:"))
var n2 = parseInt(prompt("Enter The Number 2:")) 
while(true){
    console.log("1.Addition\n2.Subtraction\n3.Multiplication\n4.Divison\n5.Exit")
    let choice= parseInt(prompt("Enter Your Choice"))
    if(choice==1){
        let Addition=n1+n2;
        console.log("Addition of Two Numbers is:",Addition)
    }
    else if(choice==2){
        let Subtraction=n1-n2;
        console.log("Subtraction of Two Numbers:",Subtraction)
    }
    else if(choice==3){
        let Multiplication=n1*n2;
        console.log(" Multiplication of Two Numbers is:",Multiplication)
    }
    else if(choice==4){
        let Divison=n1/n2;
        console.log(" Multiplication of Two Numbers is:",Divison)
    }
    else if(choice==5){
        console.log("Thanks For Coming Vist Again")
        break;
    }
    else{
        console.log("Invalid Input")
        break;
    }
}
