function registerEvents() {
  $('#contact-form')[0].reset();
  $("#contact-form").submit(function (event) {
    event.preventDefault();
    onContactFormSubmit(event);
  });
}

function onContactFormSubmit(event) {
  $('#contact-form input[type=submit]').val('Enviando...');

  let fromEmail = event.target.elements.email.value;
  let name = event.target.elements.name.value;
  let message = event.target.elements.message.value;

  let toEmail = 'laura.gutierrez.lopezfranca@gmail.com';
  let subject = 'DeliciosApp web - Nuevo mensaje a través del formulario de contacto';
  let body = (
    '<p>Se muestran a continuación los datos de contacto del formulario:</p>' +
    '<ul><li>Email: ' + fromEmail + '</li>' +
    '<li>Nombre: ' + name + '</li>' +
    '<li>Mensaje: ' + message + '</li></ul>'
  );
  sendEmail(
    fromEmail, toEmail, subject, body,
    function (response) {
      $('#contact-form input[type=submit]').val('Enviar mensaje');
      if (response[0] == 0) {
        $('#contact-form-success-message').removeClass('display-none');
        $('#contact-form-error-message').addClass('display-none');
      } else {
        $('#contact-form-success-message').addClass('display-none');
        $('#contact-form-error-message').removeClass('display-none');
      }
    },
    function (error) {
      $('#contact-form input[type=submit]').val('Enviar mensaje');
      $('#contact-form-success-message').addClass('display-none');
      $('#contact-form-error-message').removeClass('display-none');
    }
  );
}

function sendEmail(fromEmail, toEmail, subject, body, onSuccess, onError) {
  $.ajax({
    type: 'POST',
    url: "https://acumbamail.com/api/1/sendOne/",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType: 'json',
    data: {
      'auth_token': 'PfV2e4BQmbrb8zwnZf0z',
      'from_email': fromEmail,
      'to_email': toEmail,
      'subject': subject,
      'body': body,
    },
    success: function (response) {
      setTimeout(() => onSuccess(response), 500);
    },
    error: function (error) {
      onError(error);
    }
  });
}

function showWorkInProgressAlert() {
  alert('Próximamente...');
}

function showAboutUsAlert() {
  alert(
    'EDIX: Desarrollo de Aplicaciones Multiplataforma\n\n' +
    'Trabajo final de grado elaborado por:\n' +
    '\t- Alvaro\n' + 
    '\t- Adrián\n' +
    '\t- Gonzalo Ferández Ruiz\n'
    
  );
}
