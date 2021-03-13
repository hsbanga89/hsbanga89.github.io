// Date and Time - Javascript //

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    } // add zero in front of numbers < 10
    return i;
}

(function () {
    let imageThumbnails = document.querySelectorAll('#gallery #gallery-thumbnails ul li img');
    let mainImage = document.querySelector('#gallery #gallery-main-img img');

    for (const thumbnail of imageThumbnails) {
        thumbnail.addEventListener("mouseover", function () {
            mainImage.setAttribute('src', this.getAttribute('src').replace('thumb/', ''));
        });
    }
})();
