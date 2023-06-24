const firebaseConfig = {
  apiKey: "AIzaSyC5Z0OtKlLo93kx_HD2nRxdI5Ye1s2zGZo",
  authDomain: "ht-auth.firebaseapp.com",
  databaseURL: "https://ht-auth.firebaseio.com",
  projectId: "ht-auth",
  storageBucket: "ht-auth.appspot.com",
  messagingSenderId: "273822458984",
  appId: "1:273822458984:web:466fc5daa74cdc9e3407dd",
  measurementId: "G-JYKHLCBPY2",
};

var food = "Fried rice and chicken";

const app = firebase.initializeApp(firebaseConfig);

var database = firebase.database();

document.getElementById("form1").addEventListener("submit", (e) => {
  e.preventDefault();

  var fname = document.getElementById("firstname").value;
  var lname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;

  database
    .ref("ORDERS/" + lname + fname)
    .set({
      fullname: fname,
      location: lname,
      phone: email,
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
  food = "Fried rice and chicken";
});

document.getElementById("cart2").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Waakye";
});

document.getElementById("cart3").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Fries with chicken";
});
document.getElementById("cart4").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Fried rice and chicken";
});

document.getElementById("cart5").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Waakye";
});

document.getElementById("cart6").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Fries with chicken";
});
document.getElementById("cart7").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Fries with chicken";
});
document.getElementById("cart8").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Fried rice and chicken";
});

document.getElementById("cart9").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Waakye";
});
document.getElementById("cart10").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Fries with chicken";
});
document.getElementById("cart11").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Fries with chicken";
});
document.getElementById("cart12").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  food = "Fried rice and chicken";
});


document.getElementById("close").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("modal").style.display = "none";
});
