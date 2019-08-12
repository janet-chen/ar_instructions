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

// Video functions

function playPause(videoNumber) {
    var video = document.getElementById("video" + videoNumber.toString());
    if (video.paused)
        video.play();
    else
        video.pause();
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

 
