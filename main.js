$(document).ready(function() {
    $('#form-tarefa').submit(function(e) {
      e.preventDefault();
      var nomeDaTarefa = $('#input-tarefa').val();
      if (nomeDaTarefa.trim() !== '') {
        var listItem = $('<li>').text(nomeDaTarefa);
        listItem.click(function() {
          $(this).toggleClass('completo');
        });
        $('#task-list').append(listItem);
        $('#input-tarefa').val('');
      }
    });
  });