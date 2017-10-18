var divisions=["div1","div2","div3","div4","div5","div6"]
var visibleDiv = null;
    function visibility(divId) {
      if(visibleDiv === divId) {
        visibleDiv = null;
      } else {  
        visibleDiv = divId;
      }
      hideVisibleDivs();
    }
    function hideVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < divsions.length; i++) {
        divId = divsions[i];
        div = document.getElementById(divId);
        if(visibleDiv === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }
    var divs = ["div1","div2","div3","div4","div5","div6"];
    var visibleDivId = null;
    function divVisibility(divId) {
      if(visibleDivId === divId) {
        visibleDivId = null;
      } else {
        visibleDivId = divId;
      }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      
      var i, divId, div;
      for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }  
    $(document).ready(function() {
    $('#div1').hide();
    $('#preview').on('click', function() {
            $('#div1').show();
    });
    $('#div2').hide();
    $('#preview1').on('click', function() {
            $('#div2').show();
    });
    $('#div3').hide();
    $('#preview2').on('click', function() {
            $('#div3').show();
    });
     $('#div4').hide();
    $('#preview3').on('click', function() {
            $('#div4').show();
    });
    $('#div5').hide();
    $('#preview4').on('click', function() {
            $('#div5').show();
    });
    $('#div6').hide();
    $('#preview5').on('click', function() {
            $('#div6').show();
    });
});