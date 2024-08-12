console.log("Train Ticket Reservation System")
var upperberth = 2000;
var lowerberth = 1000;
var AvailableTickets = 2;
while(true){
    console.log("1.Tickets Available\n2.upperberth\n3.lowerberth\n4.Exit")
    let choice= parseInt(prompt("Enter Your Choice"))
    if(choice==1){
        console.log("welcome to Train Reservation System:")
        console.log("Available tickets Are:",AvailableTickets)
        console.log("Amount for UpperBerth is:",upperberth)
        console.log("Amount for LowerBerth",lowerberth)
    }
    else if(choice==2){
        let UpBerth= parseInt(prompt("Enter Your Amount to Pay:"))
        if(upperberth==UpBerth){
            console.log("Your Ticket Is Booked Successfully")
        }
        else{
            console.log("KINDLY PLEASE CHECK THE AMOUNT BEFORE YOU PAY")
        }
        console.log("Available Tickets Are:",AvailableTickets-1)
        break;
    }
    else if(choice==3){
        let LwBerth= parseInt(prompt("Enter Your Amount to Pay:"))
        if(lowerberth==LwBerth){
        console.log("Ticket is Booked Successfully")
        }
        else{
            console.log("KINDLY PLEASE CHECK THE AMOUNT BEFORE YOU PAY")
        }
        console.log("Available Tickets Are:",AvailableTickets-1)
        break;
    }
    else if(choice==4){
        console.log("Your Process Is Completed,Thanks Visit Again")
    }
    else{
        console.log("Invalid Input Your Choice IS up to 4 Only")
        break;
    }
}
