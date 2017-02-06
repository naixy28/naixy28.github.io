(function() {
    window.onload=function(){
        $('.loader').css('opacity','0');

        init();
    }

    function init(){
        initParticles();
        bindings();
    }

    function bindings(){}

    function initParticles(){
        particlesJS.load('particles-js', '/assets/data/particles.json', function() {
            console.log('callback - particles.js config loaded');
        });
    }


}).call(this)