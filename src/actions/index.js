// import User from "../DBModule/db.js";
import Axios from "axios";

export const signupUser = (obj) => {
    // console.log("action signupUser"+obj.name);
    return {
        type: 'SIGNUP',
        payload: {
            obj: obj
        }
    }
}

export const getUserData = () => {
    // console.log("getUserData action");
    var data;
    Axios.get("/getUserData")
        .then(function (response) {
            console.log("axios response");
            // data = JSON.stringify(response.data);
            // console.log(data);
            var data = [
                {
                    _id: '11104017',
                    name: 'RajaSekhar',
                    username: 'raj',
                    contactNo: '9493349437'
                },
                {
                    _id: '305407',
                    name: 'Bala',
                    username: 'balu',
                    contactNo: '9959471732'
                }
            ];
            return { type: 'GET_USER_DATA', payload: data };
            
        });
    // var data = [
    //             {
    //                 _id: '11104017',
    //                 name: 'RajaSekhar',
    //                 username: 'raj',
    //                 contactNo: '9493349437'
    //             },
    //             {
    //                 _id: '305407',
    //                 name: 'Bala',
    //                 username: 'balu',
    //                 contactNo: '9959471732'
    //             }
    //         ];
    // return { type: 'GET_USER_DATA', payload: data }
}

export default { signupUser, getUserData };