$(document).ready(function(){
$('#signup').validate({
rules: {
    fname: {
        required:true,
        minlength:5
    },
    sname:{
        required:true,
        minlength:5
    },
    mobile:{
        required:true,
        maxlength:10
    },
    password: {
        required:true,
        minlength:8
    },
    day: {
        required:true,
       
    },
    month: {
        required:true,
       
    },
    year: {
        required:true,
       
    },
    gender: {
        required:true,
    }
},
messages: {
    fname: {
        required: "Enter the first name",
     
  
    }
}
}

)


})