/// <reference path="./jquery-3.4.1.min.js"/>

function userModel() {
    this.fullName = undefined;
    this.emailId = undefined;
    this.isMailSend = undefined;
}

function userRepository() {

    this.add = function (userModel) {

        //$(document).trigger("custom", ["Custom", "Event"]);

        $(document).trigger("custom", [userModel, (leUserModel) => {

            if (leUserModel.isMailSend === true) {
                console.log("Mail Log Send");
            }

        }]);
    }

}

function userContext() {

    this.add = function (userModel) {

        let userRepositoryObj = new userRepository();

        $(document).on("custom", function (event, userModel, callBackNotify) {

            console.log(event.currentTarget);

            if (userModel.emailId != null) {
                console.log("Send Mail");

                userModel.isMailSend = true;

                callBackNotify(userModel);
            }

            //console.log(JSON.stringify(userModelObj));
        });

        userRepositoryObj.add(userModel);

    }
}

let userModelObj = new userModel();
userModelObj.fullName = "Kishor";
userModelObj.emailId = "Kishor.naik011.net@gmail.com";

let userContextObj = new userContext();
userContextObj.add(userModelObj);


// $("#Obj").on("custom", function (event, param1, param2) {
//     alert(param1 + "\n" + param2);
// });
// $("#Obj").trigger("custom", ["Custom", "Event"]);
