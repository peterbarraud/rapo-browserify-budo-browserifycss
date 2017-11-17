// DOM is ready with plain-old vanilla JS
require('domready')(function () {
    const sayhello = document.getElementById("sayhello");
    const showhello = document.getElementById("showhello");

    sayhello.addEventListener("click", function(){
      showhello.innerText = "Allo, allo";
    });
});

// and if you want to use jquery instead of plain-old vanilla JS
// $(function(){
//     $('[data-toggle="popover"]').popover()
//   $( "#sayhello" ).click(function() {
//     $('#showhello').text('Allo, allo');
//   });   
// });