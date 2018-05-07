import Axios from "axios";

var respData = (state) => {
    Axios.get("/getUserData")
        .then(function (response) {
            console.log("axios response");
            console.log(JSON.stringify(response.data));
            state = JSON.stringify(response.data);
            // state = JSON.parse(state);
            // return JSON.stringify(response.data);
            // return [
            //     {
            //         _id: '11104017',
            //         name: 'RajaSekhar',
            //         username: 'raj',
            //         contactNo: '9493349437'
            //     },
            //     {
            //         _id: '305407',
            //         name: 'Bala',
            //         username: 'balu',
            //         contactNo: '9959471732'
            //     }
            // ];
            return state;
        })
        .catch(function (error) {
            console.log("reducer error: " + error);
            // return state;
        });


}
export default function (state = null, action) {
    if (action.type === "GET_USER_DATA") {
        console.log("getuserdata reducer");
        // return respData(state);
        return action.payload;
        // .then(function(response){
        //     return response;
        // });
    }
    else {
        console.log("pre else red");
        return state;
    }



    // return [
    //     {
    //         _id: '11104017',
    //         name: 'RajaSekhar',
    //         username: 'raj',
    //         contactNo: '9493349437'
    //     },
    //     {
    //         _id: '305407',
    //         name: 'Bala',
    //         username: 'balu',
    //         contactNo: '9959471732'
    //     }
    // ];
}