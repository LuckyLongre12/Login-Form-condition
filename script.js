const Name = document.getElementById('name') ;
const ID = document.getElementById('ID') ;
const PhNo= document.getElementById('PhNo.') ;
const Pass = document.getElementById('Pass') ;
const Form = document.getElementById('form') ;
const Text = document.getElementById('h2') ;
const InfoBtn = document.getElementById('info') ;
alert("Name:- Lucky                         "+"Password:- password123                         "+"Phone No.:- 9582121370                         "+"Student ID:- 20170016573                         ")

function myFunction() {
    if (!Name.value&& !ID.value&& !PhNo.value&& !Pass.value) {
      Name.style.backgroundColor = 'red';
      ID.style.backgroundColor = 'red';
      PhNo.style.backgroundColor = 'red';
      Pass.style.backgroundColor = 'red';
    }
  /*   if (!ID.value) {
      ID.style.backgroundColor = 'red';
    }
    if (!PhNo.value) {
      PhNo.style.backgroundColor = 'red';
    }
    if (!Pass.value) {
      Pass.style.backgroundColor = 'red';
    } */ 
    if ( Name.value=="Lucky"&& Pass.value=="password123"&& PhNo.value=="9582121370"&& ID.value=="20170016573"){
        alert("Login Successfully");
        Form.style.display = "none";
        InfoBtn.style.display = "none";
        Text.style.display = "block";
        
    }    
    else{
        alert("Login Failed")
    }        
}
Name.addEventListener('input',()=>{
    Name.style.backgroundColor = "white";
});
ID.addEventListener('input',()=>{
    ID.style.backgroundColor = "white";
});
PhNo.addEventListener('input',()=>{
    PhNo.style.backgroundColor = "white";
});
Pass.addEventListener('input',()=>{
    Pass.style.backgroundColor = "white";
});
InfoBtn.addEventListener('click',()=>{
    alert("Name:- Lucky                         "+"Password:- password123                         "+"Phone No.:- 9582121370                         "+"Student ID:- 20170016573                         ")
});
Text.addEventListener('click',()=>{
    Form.style.display = "block";
    InfoBtn.style.display = "block";
    Text.style.display = "none";
    Name.value=null;
    Pass.value=null;
    PhNo.value=null;
    ID.value=null;
})