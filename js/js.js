/*-------------kabl rihla*/
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
  /////
  $(document).ready(function() {
    $('#sub').on('show.bs.collapse', function() {
      $('#sub .collapse').collapse('hide')
    })
  }); 
  ///////
  $(document).ready(function() {
    $('#sub2').on('show.bs.collapse', function() {
      $('#sub2 .collapse').collapse('hide')
    })
  }); 
  /////
  $(document).ready(function() {
    $('#sub3').on('show.bs.collapse', function() {
      $('#sub3 .collapse').collapse('hide')
    })
  }); 
  /////
  $(document).ready(function() {
    $('#sub4').on('show.bs.collapse', function() {
      $('#sub4 .collapse').collapse('hide')
    })
  }); 
  /////
  $(document).ready(function() {
    $('#sub5').on('show.bs.collapse', function() {
      $('#sub5 .collapse').collapse('hide')
    })
  }); 
  /////
  $(document).ready(function() {
    $('#sub6').on('show.bs.collapse', function() {
      $('#sub6 .collapse').collapse('hide')
    })
  }); 
  /////
var acc = document
    .getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        
        this.classList.toggle("active");
        this.nextElementSibling.classList
            .toggle("show");
    }
};
