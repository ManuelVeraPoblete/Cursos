$(function()
{ var div1 = $('#div1'),
      div2 = $('#div2')
  function1 = function()
  {   div1.append('funcion 1 ejecutada <br />');}
  var function2 = function()
  {   div1.append('funcion 2 ejecutada <br />');}
  var obj =
  {   function3: function()
      {div1.append('funcion 3 ejecutada <br />');}
  }
  var gobj = {
      function4: function()
      { div1.append('funcion 4 ejecutada <br />'); }
  }

  function1();
  function2();
  obj.function3();
  gobj.function4();

  div1.append('<br />');

  div2.load('funcionamiento basico de funciones en html y java script');

});
