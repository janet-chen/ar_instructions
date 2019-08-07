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

var codeBlock = '<div class="content">' +
    '<h1>This is a heading</h1>' +
    '<p>This is a paragraph of text.</p>' +
    '<p><strong>Note:</strong> If you don\'t escape "quotes" properly, it will not work.</p>' +
    '</div>';

var header = '<h1>AR Design Guidelines</h1>';

// Inserting the code block to wrapper element
document.getElementById("Header").innerHTML = header;