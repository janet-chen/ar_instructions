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

// Carousel functions
/*
jQuery(window).load(function() {
    /*
        Stop carousel
    */
    //$('.carousel').carousel('pause');
 
// })


// HTML blocks for moving around
var header = '<h1>AR Design Guidelines</h1>';

// Inserting the code block to wrapper element
document.getElementById("Header").innerHTML = header;

var FOV = '<div class="card">'+
'          <div class="card-header" id="headingOne">'+
'            <h5 class="mb-0">'+
'              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">'+ '<i class="fa fa-circle" style="color:#06d6a0;"></i>' +
'                 &nbsp;&nbsp;Choose FOV based on workspace'+
'              </button>'+
'            </h5>'+
'          </div>'+
'          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">'+
'            <div class="card-body">'+
'              <h4>Implement the AR manual for display hardware that can fit the assembly workspace within its FoV to reduce excessive'+
'                head movements for'+
'                <a href="#" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="top" title="Head-mounted Display"'+
'                  data-img="images/HMD.jpg" data-text="Display hardware that is worn on the user\'s head (e.g. HoloLens, Google Glass).">'+
'                  HMD'+
'                </a>and panning operations for'+
'                <a href="#" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="top" title="Handheld Display"'+
'                  data-img="images/HHD.jpg" data-text="Display hardware that is held in the user\'s hands (e.g. tablet, smartphone).">'+
'                  HHD'+
'                </a>. If the type of hardware is restricted or the workspace is extremely large, include visual signifiers of "offscreen" virtual assets.  </h4>'+
'               '+
'              <p>'+
'                <a class="btn btn-secondary" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample">'+
'                  Example'+
'                </a>'+
'              </p>'+
'              <div class="collapse" id="collapse1">'+
'                <div id="carousel1" class="carousel slide" data-ride="carousel">'+
'                  <ol class="carousel-indicators">'+
'                    <li data-target="#carousel1" data-slide-to="0" class="active"></li>'+
'                    <li data-target="#carousel1" data-slide-to="1"></li>'+
'                  </ol>'+
'                  <div class="carousel-inner">'+
'                    <div class="carousel-item active">'+
'                      <img class="d-block w-100" src="gifs/1.gif" alt="First slide">'+
'                      <div class="carousel-caption d-none d-md-block">'+
'                        <a href="https://www.youtube.com/watch?v=-Fd-FHqPXk8">'+
'                          <p>Source</p>'+
'                        </a>'+
'                      </div>'+
'                    </div>'+
'                    <div class="carousel-item">'+
'                      <img class="d-block w-100" src="gifs/2_b.gif" alt="Second slide">'+
'                      <div class="carousel-caption d-none d-md-block">'+
'                        <a href="https://www.youtube.com/watch?v=mn-zvymlSvk&list=PLBlQST3LPyKKAf1CzzhvY82GpwalNGc6b">'+
'                          <p>Source</p>'+
'                        </a>'+
'                      </div>'+
'                    </div>'+
'                  </div>'+
'                </div>'+
'              </div>'+
'            </div>'+
'          </div>'+
'        </div>';

document.getElementById("FOV").innerHTML = FOV;