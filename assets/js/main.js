(function() {
    window.onload=function(){
        $('.loader').css('opacity','0');

        init();
    }

    function init(){
        initParticles();
        bindings();
    }

    function bindings(){
        bgOffestEffect();

    }

    function initParticles(){
        particlesJS.load('particles-js', '/assets/data/particles.json', function() {
            //console.log('callback - particles.js config loaded');
        });
    }

    function bgOffestEffect(){
        var offset = {x:0, y:0},
            scale = 8;
            bg = document.querySelector('.parallax-bg');

        // document.addEventListener('mouseenter', cursorEnterScreen, true);
        // function cursorEnterScreen(e){
        //
        // }

        document.addEventListener('mouseenter', cursorPositionListener, false);
        function cursorPositionListener(e) {
            //bg.style.transition = "none";
            var clientRect = document.querySelector('body').getBoundingClientRect();
            offset.x = (event.clientX /(clientRect.width/2) -1) * scale;
            offset.y = (event.clientY /(clientRect.height/2) -1) * scale;
            bg.style.transformOrigin = (50+offset.x) + '% ' + (50+offset.y) + '%';
        }
    }




}).call(this)