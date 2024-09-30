function loadData() {
    var name = document.getElementById("confirmName");
    var email = document.getElementById("confirmEmail");
    var age = document.getElementById("confirmAge");
    var phoneNumber = document.getElementById("confirmPhoneNumber");
    name.textContent = sessionStorage.firstname + " " + sessionStorage.lastname;
    email.textContent = sessionStorage.email;
    age.textContent = sessionStorage.age;
    phoneNumber.textContent = sessionStorage.phoneNumber;
  
    var occupation = document.getElementById("confirmOccupation");
    occupation.textContent = sessionStorage.occupation;
  
    var yourCourses = document.getElementById("confirmCourses");
    var tmpCourses = "";
    var count = 0;
    if (sessionStorage.logicMath == "true") {
      tmpCourses += "Logic Math, ";
      count += 1;
    }
    if (sessionStorage.web == "true") {
      tmpCourses += "Web, ";
      count += 1;
    }
    if (sessionStorage.pythonGame == "true") {
      tmpCourses += "Python Game, ";
      count += 1;
    }
    var price = sessionStorage.price;
    var explain = "<br> Explain discount: <br>";
    if (count >= 2) {
      price = (price * 80) / 100;
      explain += "Discount 20% because you selected more than 2 courses <br>";
    }
    if (sessionStorage.paymentMethod == "MB bank") {
      price = (price * 105) / 100;
      explain += "Increase 5% surcharge because your payment method is MB bank";
    }
    var totalPrice = document.getElementById("confirmTotalPrice");
    totalPrice.innerHTML = price + "k VNĐ" + explain;
  
    tmpCourses = tmpCourses.substring(0, tmpCourses.length - 2);
    sessionStorage.Courses = tmpCourses;
    yourCourses.textContent = sessionStorage.Courses;
  
    var paymentMethod = document.getElementById("confirmPaymentMethod");
    paymentMethod.textContent = sessionStorage.paymentMethod;
  }
  
  function cancelButton() {
    window.location = "register.html";
  }
  
  function init() {
    loadData();
    var cancel = document.getElementById("cancelButton");
    cancel.onclick = cancelButton;
  }
  window.onload = init;
  