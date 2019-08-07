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

function playPause(videoNumber) {
    var video = document.getElementById("video" + videoNumber.toString());
    if (video.paused)
        video.play();
    else
        video.pause();
} 