document.querySelector('#signupform').addEventListener('submit',(event)=>{
    event.preventDefault()
})

const processForm = () =>{
    let fullname = document.querySelector('#fullname').value;
    let email = document.querySelector('#email').value;
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let confirm_password = document.querySelector('#confirm_password').value;

    var data ={
        "fullName":fullname,
        "email":email,
        "userName":username,
        "newpassword":password,
        "isEnabled":true,
        "roles":["user"]
    }
    if(password !== confirm_password){
        alert('password mismatch')
    }
    else{
        fetch('https://api.openclass.ng/Register',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((data)=>{
            alert('Congrats')
        })
    }
}

