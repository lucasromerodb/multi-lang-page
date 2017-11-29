$(document).ready(function(){
  writeLang('es');
});

function writeLang(selectedLang) {
  $('.keyword').each(function(index, el) {
    $(this).html(languages[selectedLang][$(this).attr('keyword')]);
  });
}

function selectLang() {
  var selectedLang = $('#lang').val();
  writeLang(selectedLang);
}
