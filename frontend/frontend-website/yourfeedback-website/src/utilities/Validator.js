const emailValidation = (email) =>{
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!email || regex.test(email) === false){
        return false
    }
    return true
}

const passwordValidation = (password) =>{
    var pattern=  /^[A-Za-z]\w{7,14}$/;
    if(!password || !password.match(pattern)){
        return false
    }
    return true
}

export {emailValidation, passwordValidation};
