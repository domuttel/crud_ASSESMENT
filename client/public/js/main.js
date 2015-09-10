$(document).on('ready', function() {
  console.log('sanity check!');
});

$('form').on('submit', function(e){
  e.preventDefault();
  var payload = {
    name = $('#name').val(),
    age = $('#age').val(),
    ethnicity = $('#ethnicity').val()
  };
  $.post('/humans', payload, function(data){
    $('#message').html("Here is the list of humans! with " + data.name + " Age: " + data.age + " Ethnicity: " + data.ethnicity);
  });
  listAnimals();
});

//Shorthand AJAX Req
function listHumans(){
  $('#all').empty();
  $.get('/humans', function(data){
    for (var i = 0; i < data.length; i++) {
      $('#all').append('<li>' + data[i].name + '</li>');
    }
  });
}
