 const firebaseConfig = {
    apiKey: "AIzaSyAlu3AOTVgybmzCBK9sdt-asDps4n6S7gU",
    authDomain: "damasr-3a1d1.firebaseapp.com",
    databaseURL: "https://damasr-3a1d1-default-rtdb.firebaseio.com",
    projectId: "damasr-3a1d1",
    storageBucket: "damasr-3a1d1.appspot.com",
    messagingSenderId: "839492057960",
    appId: "1:839492057960:web:8d86f502dc72b76e2a74dd",
    measurementId: "G-KS982BWPMT"
  };

 
 

var food = "Fried rice and chicken";

const app = firebase.initializeApp(firebaseConfig);

var database = firebase.database();

document.getElementById("form1").addEventListener("submit", (e) => {
  e.preventDefault();

  var fname = document.getElementById("fullname").value;
  var location = document.getElementById("location").value;
  var phone = document.getElementById("phone").value;

  database
    .ref("ORDERS/" + location + fname)
    .set({
      fullname: fname,
      location: location,
      phone: phone,
      food: food,
    })
    .then(() => {
      document.getElementById("modal").style.display = "none";
      alert("Uploaded successfully");
    })
    .catch((error) => {
      if (error) {
        alert("Sorry, something went wrong");
      }
    });
});

document.getElementById("cart").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Fried Rice with Grilled Chicken";
});

document.getElementById("cart2").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Waakye";
});

document.getElementById("cart3").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "French Fries with Chicken";
});
document.getElementById("cart4").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Fried Rice with Grilled Chicken";
});

document.getElementById("cart5").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Waakye";
});

document.getElementById("cart6").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "French Fries with Chicken";
});
document.getElementById("cart7").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Yello Rice with Grilled Chicken";
});
document.getElementById("cart8").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Spaghetti Noddles";
});

document.getElementById("cart9").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Chicken Salad";
});
document.getElementById("cart10").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Khebab";
});
document.getElementById("cart11").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Pizza";
});
document.getElementById("cart12").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Jollof Rice With Chicken";
});


document.getElementById("close").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("modal").style.display = "none";
});
