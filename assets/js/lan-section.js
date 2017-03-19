(function() {
    this.initCurrentSection = function(){
        /*onload transition*/
        initTransition('.article-list');
    }

    function initTransition(sel){
        document.querySelector(sel).style.transform = "translateY(0)";
        document.querySelector(sel).style.opacity = "1";
    }
}).call(this)