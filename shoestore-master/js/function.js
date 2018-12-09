$(document).ready(function() {
    
  //calling thumbBox will return an array.
  //this array will be 'img'.
      $('#fig-all').on('click', changeImg);
    });
function changeImg(e){
      var imgSrc = $(e.target).attr('src');
      var imgAlt = $(e.target).attr('alt');
      var imgTitle = $(e.target).attr('title');
    } 