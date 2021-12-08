function sendMail(params) {
  var tempParams ={
    from_name:document.getElementById("formName").value,  
    message:document.getElementById("formMessage").value,
  };

  emailjs.send("service_1ceh6oq", "template_h8v78mf", tempParams)
  .then(function(res){
    console.log("success", res.status);
  })
}