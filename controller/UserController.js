class UserController {
    constructor(formId){
        this.formEl = document.getElementById(formId);
    }
    getvalues(){
        this.formEl.
        fields.forEach(function(field, index){
            if (field.name == "gender"){   
            if (field.checked) {
                user[field.name] = field.value;
            }
            } else {
                
                user[field.name] = field.value;
            }
        });
        addLine(user);
        var objectUser = new User(user.name, user.gender, user.birth, user.country, user.email, user.password, user.photo, user.admin);
        
    }
}