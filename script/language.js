let rus = {
  denis: "Денис Новик",
};

changeLanguage();

function changeLagnuage(){
  let language = lang.checked ? rus : eng;
  document.querySelectorAll('[text]').forEach(el => {
    el.innerHTML = language[el.getAttribute('text')];
  })
}