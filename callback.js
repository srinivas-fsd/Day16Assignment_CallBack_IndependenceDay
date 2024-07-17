try
{

    //Create container and displaying it in center of the screen through DOm code

    let container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.textAlign = "center";
    container.style.minHeight = "90vh";
    

    let messageContent = document.createElement("h1");
    messageContent.style.fontSize = "500%";
    messageContent.innerText = "Are you ready for the count down???"
    container.appendChild(messageContent);

    document.body.appendChild(container);

    let displayTen = (displayingNumber,callback)=>{
        try
        {
            setTimeout( ()=>{

                messageContent.innerText = "";
                messageContent.innerText = displayingNumber;

                callback(9,displayEight); 

            },2000);
        }

        catch(ex)
        {
            alert("Error occurred while displaying " +  displayingNumber + "  : " ,ex.message);
        }
       
    }

    let displayNine = (displayingNumber, callback)=>{
        try
        {
            setTimeout( ()=>{

                messageContent.innerText = "";
                messageContent.innerText = displayingNumber;

                callback(8,displaySeven);

            },1000);
        }

        catch(ex)
        {
            alert("Error occurred while displaying " +  displayingNumber + "  : " ,ex.message);
        }
       
    }

    let displayEight = (displayingNumber, callback)=>{
        try
        {
            setTimeout( ()=>{

                messageContent.innerText = "";
                messageContent.innerText = displayingNumber;

                callback(7,displaySix);

            },1000);
        }

        catch(ex)
        {
            alert("Error occurred while displaying " +  displayingNumber + "  : " ,ex.message);
        }
       
    }

    let displaySeven = (displayingNumber, callback)=>{
        try
        {
            setTimeout( ()=>{

                messageContent.innerText = "";
                messageContent.innerText = displayingNumber;

                callback(6,displayFive);

            },1000);
        }

        catch(ex)
        {
            alert("Error occurred while displaying " +  displayingNumber + "  : " ,ex.message);
        }
       
    }

    let displaySix = (displayingNumber, callback)=>{
        try
        {
            setTimeout( ()=>{

                messageContent.innerText = "";
                messageContent.innerText = displayingNumber;

                callback(5,displayFour);

            },1000);
        }

        catch(ex)
        {
            alert("Error occurred while displaying " +  displayingNumber + "  : " ,ex.message);
        }
       
    }

    let displayFive = (displayingNumber, callback)=>{
        try
        {
            setTimeout( ()=>{

                messageContent.innerText = "";
                messageContent.innerText = displayingNumber;

                callback(4,displayThree);

            },1000);
        }

        catch(ex)
        {
            alert("Error occurred while displaying " +  displayingNumber + "  : " ,ex.message);
        }
       
    }

    let displayFour = (displayingNumber, callback)=>{
        try
        {
            setTimeout( ()=>{

                messageContent.innerText = "";
                messageContent.innerText = displayingNumber;

                callback(3,displayTwo);

            },1000);
        }

        catch(ex)
        {
            alert("Error occurred while displaying " +  displayingNumber + "  : " ,ex.message);
        }
       
    }

    let displayThree = (displayingNumber, callback)=>{
        try
        {
            setTimeout( ()=>{

                messageContent.innerText = "";
                messageContent.innerText = displayingNumber;

                callback(2,displayOne);

            },1000);
        }

        catch(ex)
        {
            alert("Error occurred while displaying " +  displayingNumber + "  : " ,ex.message);
        }
       
    }

    let displayTwo = (displayingNumber, callback)=>{
        try
        {
            setTimeout( ()=>{

                messageContent.innerText = "";
                messageContent.innerText = displayingNumber;

                callback(1,displayWishes);

            },1000);
        }

        catch(ex)
        {
            alert("Error occurred while displaying " +  displayingNumber + "  : " ,ex.message);
        }
       
    }


    let displayOne = (displayingNumber, callback)=>{
        try
        {
            setTimeout( ()=>{

                messageContent.innerText = "";
                messageContent.innerText = displayingNumber;

                callback(showText);

            },1000);
        }

        catch(ex)
        {
            alert("Error occurred while displaying " +  displayingNumber + "  : " ,ex.message);
        }
       
    }

    let displayWishes = (callBack)=>{
        try
        {
            setTimeout( ()=>{

                messageContent.innerText = "";
                document.body.style.backgroundImage = "url(https://wallpaperaccess.com/full/6170278.jpg)";
                callBack();
            },1000);
        }

        catch(ex)
        {
            alert("Error occurred while displaying wishes " ,ex.message);
        }
       
    }

    let showText = ()=>{
        try
        {
            setTimeout( ()=>{

                container.style.minHeight = "99vh";
                messageContent.style.marginLeft = "2%";
                messageContent.innerText = "Happy Independence Day!!!";
                
            },1000);
        }

        catch(ex)
        {
            alert("Error occurred while displaying wishes " ,ex.message);
        }
       
    }

   
    //Initaially calling a function to display 10, remaining functions to display other numbers will be called inside callback 
    displayTen(10,displayNine);
  


}

catch(ex)
{
    alert("Error occurred while creating elements : ",ex.message);
}
