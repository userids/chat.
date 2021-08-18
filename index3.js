var firebaseConfig = {
  apiKey: "AIzaSyDE9BS7XKKv8g0X3pV-MrY-Xk2quh8y-eg",
  authDomain: "chat2-8f44f.firebaseapp.com",
  databaseURL: "https://chat2-8f44f-default-rtdb.firebaseio.com",
  projectId: "chat2-8f44f",
  storageBucket: "chat2-8f44f.appspot.com",
  messagingSenderId: "609045523887",
  appId: "1:609045523887:web:3ec67881b6d542d444535a",
  measurementId: "G-T6L9Y30ZHJ"
};
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){

    msg=document.getElementById("msg").value;
   firebase.database().ref(room_name).push({ 
         name:user_name,
         message:msg,
         like:0
   });

   document.getElementById("msg").value="";
   }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      message_id = childKey;
       message_data = childData;
     console.log(message_id);
     console.log(message_data);
     const name=message_data['name'];
     message=message_data['message'];
     likes=message_data['like'];
     dislikes=message_data['dislike'];
    name_tag="<h4 id='h4'>"+name+"  "+"<img src='1293029.png' class='user_tick'></h4>";
    message_tag="<h4 class='message_h4'>"+message+"</h4>";
    like_button="<button class='btn btn-primary' id="+message_id+" value="+likes+" onclick='like(this.id)'>";
    thumbs="<span class='glyphicon glyphicon-thumbs-up'>like:"+likes+"</span></button><hr>";
    row=name_tag+message_tag+like_button+thumbs;
    document.getElementById("output").innerHTML+=row;

   } });  }); }
getData();

function like(id){
console.log(id);
button_id=id;
likes=document.getElementById(button_id).value;
updated_like=Number(likes)+1;
firebase.database().ref(room_name).child(id).update({
    like:updated_like
});
}


function logout(){

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";

}
