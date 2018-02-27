$(function()
{ $body = $('body');
  if (typeof function1 !== 'undefined')
      function1();
  else
      $body.append('function1 no encontrada <br />');

  if (typeof function2 !== 'undefined')
      function2();
  else
      $body.append('function2 no encontrada <br />');

  if  (typeof obj !== 'undefined' &&
       typeof obj.functio3 !== 'undefined')
       obj.functio3();
  else
      $body.append('function3 no encontrada <br />');

  if  (typeof obj !== 'undefined' &&
       typeof obj.functio4 !== 'undefined')
       obj.functio4();
  else
      $body.append('function4 no encontrada <br />');

}
)
