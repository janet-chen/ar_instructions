$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
         //trigger: 'focus',
         trigger: 'hover',
         html: true,
         content: function () {
               return  '<p> '+$(this).data('text')+' </p>' + '<img class="img-fluid" src="'+$(this).data('img') + '" />';
         },
         title: 'Toolbox'
   }) 
});

var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 