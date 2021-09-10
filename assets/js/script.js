/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // calculate video percentage 
    // and show in front
    $(function () {
        function updateLength(roundPercent, element) {
            var $round = element
            roundRadius = $round.find('circle').attr('r'),
                roundCircum = 2 * roundRadius * Math.PI,
                roundDraw = roundPercent * roundCircum / 100
            $round.css('stroke-dasharray', roundDraw + ' 999');
        }

        const bannerVideo = document.getElementById('bannerVideo');
        bannerVideo.addEventListener("timeupdate", function () {
            // if the video is loaded and duration is known
            if (!isNaN(this.duration)) {
                const percent_complete = Math.round((this.currentTime / this.duration) * 100)
                // use percent_complete to draw a progress bar
                $('.videoLengthShift').text(`(${this.duration}min)`);
                updateLength(percent_complete, $('.rounded-stroke-1'));
                let timeShift = Math.round(this.duration) - Math.round(this.currentTime);
                $('.videoLengthShift').text(`(${timeShift}min)`);
            }
        });

        document.getElementById('videoLength').addEventListener("click", function () {
            if (bannerVideo.paused) {
                bannerVideo.play();
            } else {
                bannerVideo.pause();
            }
        })
    });

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // code

});
