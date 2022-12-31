
   const firebaseConfig = {
    apiKey: "AIzaSyBwyD29Yi-5XkeRxbZD4YQ20PUwfyArHmU",
    authDomain: "project1-e8064.firebaseapp.com",
    databaseURL: "https://project1-e8064-default-rtdb.firebaseio.com",
    projectId: "project1-e8064",
    storageBucket: "project1-e8064.appspot.com",
    messagingSenderId: "1071476840423",
    appId: "1:1071476840423:web:0ddfb0a43f0db817a68f42"
  };


  firebase.initializeApp(firebaseConfig);

  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var teamname = getElementVal("teamname");
    var mem1name = getElementVal("mem1name");
    var mail_1= getElementVal("mail_1");
    var mem2name = getElementVal("mem2name");
    var mail_2= getElementVal("mail_2");
    var mem1num = getElementVal("mem1num");
    var mem2num = getElementVal("mem2num");
  //  var proof1 = getElementVal("proof1");
   // var proof2 = getElementVal("proof2");
   // var prrof1 = getElementVal("prrof1");
   // var prrof1 = getElementVal("prrof1");
  
    saveMessages(teamname,mem1name,mail_1,mem2name,mail_2,mem1num,mem2num);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (teamname,mem1name,mail_1,mem2name,mail_2,mem1num,mem2num) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
        teamname: teamname,
        mem1name : mem1name,
        mail_1:mail_1,
        mem2name:  mem2name,
        mail_2 :mail_2,
        mem1num : mem1num,
        mem2num : mem2num,
      
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };