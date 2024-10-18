(function () {
    function initMarquee(marqueeId) {
        const marquee = document.getElementById(marqueeId);
        const text = marquee.querySelector('span');
        const clone = text.cloneNode(true);
        marquee.appendChild(clone);

        const scrollAmount = 1;
        const speed = 6;

        function move() {
            if (marquee.scrollLeft >= text.offsetWidth) {
                marquee.scrollLeft -= text.offsetWidth;
            } else {
                marquee.scrollLeft += scrollAmount;
            }
        }

        setInterval(move, speed);
    }

    initMarquee('marquee');
    initMarquee('marquee2');
})();
