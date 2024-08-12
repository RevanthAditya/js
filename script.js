console.log("Welcome to ATM")
let pin =parseInt(prompt("Enter The ATM Pin"))
let Ac = 1000;
let userexist=false;
for(let i=0;i<100;i++){
    if(i==pin){
        console.log("userexist")
        userexist=true;
        break
    }
}
if(!userexist){
    console.log("User Not Exist")
}
else{
    while(true){
        console.log("1.Deposit\n2.WithDraw\n3.Balance Enquiry\n4.Exit")
        let choice= parseInt(prompt("Enter Your Choice"))
        if(choice==1){
            let dep=parseInt(prompt("Enter Amount to Deposit:"))
            Ac=Ac+dep;
            console.log("Now Your Account BAlance is:",Ac)
        }
        else if(choice==2){
            let wth=parseInt(prompt("Enter Amount to withdraw:"))
            Ac=Ac-wth;
            console.log("Now Your Account BAlance is:",Ac)
        }
        else if(choice==3){
            console.log(" Your Account BAlance is:",Ac)
        }
        else if(choice==4){
            console.log("Thanks For Coming Vist Again")
            break;
        }
        else{
            console.log("Invalid Input")
            break;
        }
        let next=prompt("Enter Yes Or No")
        if(next.toLowerCase()=="no"){
            console.log("Thanks for coming,Visit Again")
        }

    }

}
