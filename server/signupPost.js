console.log("signupPost");

var signupPost = function(request,response) {
    console.log('signup in function');
    data1 = "";
    request.on('data',function(chunk){
        data1 += chunk;
    });
    request.on('end',function(){
        if(data1 != ""){
            console.log(data1);
            values = JSON.parse(data1);
            console.log(values.name);
            console.log(values.username);
            var newUser = new User({
                name: values.name,
                username: values.username,
                password: values.password,
                contactNo: values.contactno
            });
            console.log(newUser);
            newUser.save(function (err) {
                if (err) {
                    console.log(err);
                    // throw err;
                }
                else{
                    console.log("saved in db");
                }
            });
            return "Signup posted";
        }
    });
    response.write("signup done");
    return "done";
};

module.exports = signupPost;
// export default signupPost;