//Asychronous function
function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        
        // process the picture once it is completed
        callback(url);
    }, 3000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://images.unsplash.com/photo-1538587888044-79f13ddd7e49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmUlMjBjdXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
download(url, process);

//Nesting Callbacks//
function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        // process the picture once it is completed
        callback(url);
    }, 3000);
}

const url1 = 'https://m.media-amazon.com/images/I/81aXc7aUc1L._SL1500_.jpg';
const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
const url3 = 'https://www.javascripttutorial.net/pic3.jpg';

download(url1,function(picture){
    console.log(`Processing ${picture}`);
    // download the second picture
    download(url2,function(picture){
        console.log(`Processing ${picture}`);
        // download the third picture
        download(url3,function(picture){
            console.log(`Processing ${picture}`);
        });
    });
});


//function My Displayer, myCalculator, getFile//

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//     }

//     function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//     }

//     let result = myCalculator(5, 5);
//     myDisplayer(result);
//     setInterval(myFunction, 1000);

//     function myFunction() {
//     let d = new Date();
//     document.getElementById("demo").innerHTML=
//     d.getHours() + ":" +
//     d.getMinutes() + ":" +
//     d.getSeconds();
//     }
//     function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//     }

//     function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//     if (req.status == 200) {
//     myCallback(this.responseText);
//     } else {
//     myCallback("Error: " + req.status);
//     }
//     }
//     req.send();
//     }
//     getFile(myDisplayer);
//     <img src="img_car.jpg" alt="Nice car" style="width:100%"></img>

//     //function Ajax//
//     function ajaxCall() {
//     let ajaxRequest = new XMLHttpRequest();

//     ajaxRequest.onreadystatechange = function() {
//         if (ajaxRequest.readyState == XMLHttpRequest.DONE ) {
//            if (ajaxRequest.status == 200) {
//                let myDiv = document.getElementById('main');
//                let newDiv = document.createElement('div');
//                newDiv.innerHTML = ajaxRequest.responseText;
//                myDiv.appendChild(newDiv);
//            }
//            else if (ajaxRequest.status == 400) {
//               console.log('There was an error 400');
//            }
//            else {
//               console.log('something else other than 200 was returned');
//            }
//         }
//     };

//     ajaxRequest.open("GET", 'http://jsonplaceholder.typicode.com/todos', true);
//     ajaxRequest.send();
// }

// function clearMain(){
//   document.getElementById('main').innerHTML = "";
// }
