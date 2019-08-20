// Enable popovers
$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        //trigger: 'focus',
        trigger: 'hover',
        html: true,
        content: function () {
            return '<p> ' + $(this).data('text') + ' </p>' + '<img width="240" src="' + $(this).data('img') + '" />';
        },
        title: 'Toolbox'
    })
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});


function searchSidebar() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchbar-input');
  filter = input.value.toUpperCase();
  ul = document.getElementById("ul-sidebar");
  li = ul.getElementsByTagName('li');

// Hide items that don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Video functions
function playPause(videoNumber) {
    var video = document.getElementById("video" + videoNumber.toString());
    if (!video.paused) {
        video.pause();
    }
    // if (video.paused)
    //     video.play();
    // else
    //     video.pause();
}

function pauseFirstVideoPlaySecondVideo(videoNumber1, videoNumber2) {
    var video1 = document.getElementById("video" + videoNumber1.toString());
    var video2 = document.getElementById("video" + videoNumber2.toString());
    if (!video1.paused) {
        video1.pause();
    }
    if (video2.paused) {
        video2.play()
    }
}

var loudVideo = document.getElementById("video1");
loudVideo.volume = 0.1;

 
