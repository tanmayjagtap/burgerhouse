console.log('Hello')
const validateForm = () => {
    var dataflag = true;
    var name = document.forms["myForm"]["fname"].value;
    if(name===""){
        alert('Name Field Cannot be Empty')
        dataflag=false;
    }
    else if(name===/^[A-Za-z]+$/){
        alert('Name should contain only alphabets')
        dataflag=false
    }
    else if(name.length<3){
        alert('Name too Short')
        dataflag=false
    }
    else if(name.length>25){
        alert('Name too Big')
        dataflag=false
    }

    var mailValidator =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var email = document.forms["myForm"]["email"].value;
    if(email===""){
        alert('Email Field Is Empty')
        dataflag=false
    }
    else if(!email.match(mailValidator)){
        alert('Please Enter valid Email')
        dataflag=false
    }

    var msg = document.forms["myForm"]["message"].value;
    if(msg===''){
        alert('Message Field cannot be Empty')
        dataflag=false
    }
    else if(msg.length<10){
        alert('Message too short')
        dataflag=false
    }
    else if(msg.length>100){
        alert('Message too long')
        dataflag=false
    }   

    if(dataflag===true){
        alert('Success')
    }
}