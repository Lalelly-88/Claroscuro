$(document).ready(function() {
    $('#modo-claro').click(function() {
      $('body').removeClass('dark-mode').addClass('light-mode');
    });
  
    $('#modo-oscuro').click(function() {
      $('body').removeClass('light-mode').addClass('dark-mode');
    });
  });
  