(function() {
    this.initCurrentSection = function(){
        initParticles();
    }

    function initParticles(){
        particlesJS.load('particles-js', '/assets/data/particles.json', function() {
            //console.log('callback - particles.js config loaded');
        });
    }

    /**
     * try requestAnimationFrame
     */
    function bgOffestEffect(){
        var offset = {x:0, y:0},
            scale = 4;
        bg = document.querySelector('.parallax-bg');
        document.addEventListener('mousemove', cursorPositionListener, false);
        function cursorPositionListener(event) {
            var clientRect = document.querySelector('body').getBoundingClientRect();
            offset.x = (event.clientX /(clientRect.width/2) -1) * scale;
            offset.y = (event.clientY /(clientRect.height/2) -1) * scale;
            bg.style.transformOrigin = (50+offset.x) + '% ' + (50+offset.y) + '%';
            function AnimationWrap() {
                bg.style.transformOrigin = (50+offset.x) + '% ' + (50+offset.y) + '%';
            }
            requestAnimationFrame(AnimationWrap)
        }
        document.addEventListener('click', clickListener, false);
        function clickListener(event) {
            console.log('a');
            var i = 0;
            var clientRect = document.querySelector('body').getBoundingClientRect();
            offset.x = (event.clientX /(clientRect.width/2) -1) * scale / 60;
            offset.y = (event.clientY /(clientRect.height/2) -1) * scale / 60;

            function AnimationWrap2() {
                i++;
                bg.style.transformOrigin = (50+offset.x*i) + '% ' + (50+offset.y*i) + '%';
                if(i<=60){
                    requestAnimationFrame(AnimationWrap2);
                }
            }
            AnimationWrap2();
        }

    }

}).call(this)