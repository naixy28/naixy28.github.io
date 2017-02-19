(function() {
    window.onload=function(){
        $('.loader').css('opacity','0');

        init();
    }

    function init(){
        this.initCurrentSection&&this.initCurrentSection();
        globalBindings();
    }

    function globalBindings(){

    }

}).call(this)