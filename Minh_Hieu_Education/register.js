function validateData(event) {
    // save data personal information
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    sessionStorage.firstname = firstname;
    sessionStorage.lastname = lastname;
    sessionStorage.age = age;
    sessionStorage.email = email;
    sessionStorage.phoneNumber = phoneNumber;
  
    // save data occupation
    var occupationArray = document
      .getElementById("radioOccupation")
      .getElementsByTagName("input");
    var i = 0;
    while (i < occupationArray.length) {
      if (occupationArray[i].checked == true) {
        sessionStorage.occupation = occupationArray[i].value;
      }
      i += 1;
    }
  
    // save data courses have been selected
    var logicMath = document.getElementById("logicMath").checked;
    var web = document.getElementById("web").checked;
    var pythonGame = document.getElementById("pythonGame").checked;
    sessionStorage.logicMath = logicMath;
    sessionStorage.web = web;
    sessionStorage.pythonGame = pythonGame;
  
    // calculate total price of courses
    var total = 0;
    if (logicMath == true) {
      total += 100;
    }
    if (web == true) {
      total += 100;
    }
    if (pythonGame == true) {
      total += 100;
    }
    sessionStorage.price = total;
  
    // save data payment method
    var paymentMethod = document.getElementById("paymentMethod");
    sessionStorage.paymentMethod = paymentMethod.value;
  
    // solve input validate data
    var errorText = "";
  
    if (firstname.match("^[A-Z a-z]{1,29}$") == null) {
      errorText +=
        "First name has to contain only alphabet characters, not contain special characters <br>";
    }
  
    if (lastname.match("^[A-Z a-z]{1,29}$") == null) {
      errorText +=
        "Last name has to contain only alphabet characters, not contain special characters <br>";
    }
  
    if (email.match("^[A-Za-zd0-9]*@[A-Z.a-z]*$") == null) {
      errorText +=
        "Email has to obey format: alphabet or digits + @ + gmail.com <br>";
    }
  
    if (phoneNumber.match("^((\\+84)|(0))[0-9]{9,10}$") == null) {
      errorText +=
        "Phone number has to contain 9 or 10 digits and start with +84 or 0 <br>";
    }
  
    if (age.match("^(([0-9]|[1-9][0-9]|(1[0-4][0-9]))|(150))$") == null) {
      errorText += "Age has to less than 150 year old <br>";
    }
  
    if (sessionStorage.occupation == "highschool") {
      if (parseInt(age) > 18) {
        errorText +=
          "If your occupation is highschool, your age has be less than or equal to 18 years old <br>";
      }
    }
  
    if (errorText == "") {
      return true;
    } else {
      document.getElementById("error").innerHTML = errorText;
      return false;
    }
  }
  
  function prefillData() {
    if (sessionStorage.firstname != null) {
      // check
      // prefill data personal information
      document.getElementById("firstname").value = sessionStorage.firstname;
      document.getElementById("lastname").value = sessionStorage.lastname;
      document.getElementById("age").value = sessionStorage.age;
      document.getElementById("email").value = sessionStorage.email;
      document.getElementById("phoneNumber").value = sessionStorage.phoneNumber;
  
      // prefill data occupation
      var occupationArray = document
        .getElementById("radioOccupation")
        .getElementsByTagName("input");
      var i = 0;
      while (i < occupationArray.length) {
        if (occupationArray[i].value == sessionStorage.occupation) {
          occupationArray[i].checked = true;
        }
        i += 1;
      }
  
      // prefill data select courses
      if (sessionStorage.logicMath == "true") {
        document.getElementById("logicMath").checked = true;
      }
      if (sessionStorage.web == "true") {
        document.getElementById("web").checked = true;
      }
      if (sessionStorage.pythonGame == "true") {
        document.getElementById("pythonGame").checked = true;
      }
    }
  
    // prefill data payment method
    document.getElementById("paymentMethod").value = sessionStorage.paymentMethod;
  }
  
  function init() {
    // register form
    var regForm = document.getElementById("registerForm");
    regForm.onsubmit = validateData;
  
    // prefill data
    prefillData();
  }
  
  window.onload = init;
  