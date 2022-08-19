

exports.addUser = (req, res) => {
    res.render('register');
    console.log("--------", req.body);
   // const exampleForm = document.getElementById("example-form");
    //exampleForm.addEventListener("submit", handleFormSubmit);

    /*async function postFormDataAsJson({ url, formData }) {
        const plainFormData = Object.fromEntries(formData.entries());
        const formDataJsonString = JSON.stringify(plainFormData);

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: formDataJsonString,
        };

        const response = await fetch(url, fetchOptions);
    
        if (!response.ok) {
            const errorMessage = await response.text();
            console.log("err",errorMessage);
            throw new Error(errorMessage);
        }
        
        return response.json();
    }
    async function handleFormSubmit(event) {
        event.preventDefault();

        const form = event.currentTarget;
        const url = form.action;

        try {
            const formData = new FormData(form);
            const responseData = await postFormDataAsJson({ url, formData });

            console.log({ responseData });
        } catch (error) {
            console.error(error);
        }
    }*/
}

exports.login = (req, res) => {
    res.render('connexion');
    console.log("--------", req.body);}



























































/*UserFetech("http://localhost:3500/api/addUser/","POST")
UserFetech("http://localhost:3500/api/me","GET")
UserFetech("http://localhost:3500/api/delete","DELETE")
UserFetech("http://localhost:3500/api/put","PUT")



function UserFetech (url,type,data){
/*fetch Get request
    
    if (type==="GET"){
        fetch (url,{
    method:type,
    headers:{
        "Content-type":"application/json",
    },
})
.then((res) => {
    
    if (res.ok){
        console.log("http request successful");
    }else{
        console.log("http request unsuccessful")
    }
    return res;
})
.then((res) => res.json())
.then((data) =>console.log(data))
.catch((error) => console.log(error));
   
}


/*fetch POST/PUT request


if (type==="POST"|| type==="PUT"){
    fetch (url,{
method:type,
headers:{
    "Content-type":"application/json",
},
body:JSON.stringify({data}),
})

.then((res) => {
    
    if (res.ok){
        console.log("http request successful");
    }else{
        console.log("http request unsuccessful")
    }
    return res;
})
.then((res) => res.json())
.then((data) =>console.log(data))
.catch((error) => console.log(error));
  
}


/*fetch Delete request
if(type ==="DELETE"){
    fetch(url,{
    method:type,
    headers:{
        "Content-type":"application/json",
    },
})
.then((res) => {
    
    if (res.ok){
        console.log("http request successful");
    }else{
        console.log("http request unsuccessful")
    }
   
})
.catch((error) => console.log(error));

}

}*/






    // const token = req.cookies.auth;
    // var bearer = 'Bearer ' + token;
    // const defaultOptions = {
    //     method: 'GET',
    //     withCredentials: true,
    //     credentials: 'include',
    //     headers: {
    //         'Authorization': bearer,
    //     },
    // };
    // let data = getAllUsers(defaultOptions)
    // getAllUsers().then(data => {
    //     console.log(data)
    // })
    
    // console.log('heyyy', defaultOptions);

    // fetch('http://localhost:3500/me', defaultOptions)
    // .then((res) => res.json())
    // .then((res) => {
    //     console.log(res.Authorization + '---reess---');
    //     return res
    // })  
    // .catch(err => {
    //   console.log('----- LALALALALA----', err);
    // });


     // const token = req.cookies.auth;
    // var bearer = 'Bearer ' + token;
    // let userId = jwtUtils.getUserId(token)
    // console.log('homeToken ', userId);
    // const data = {
    //     texte: req.body.texte,
    //     userId : userId,
    // };
    // const defaultOptions = {
    //     method: 'POST',
    //     withCredentials: true,
    //     credentials: 'include',
    //     headers: {
    //         'Authorization': bearer,
        
    //     },
    //     data: data
    // };
    // fetch('http://localhost:3500/new', defaultOptions)
    // .then((res) => res.json())
    // .then((res) => {
    //     console.log(res + '---reess---');
    //     return res
    // })  
    // .catch(err => {
    //   console.log('----- LALALALALA----', err);
    // });