(function() {
    this.initCurrentSection = function(){
        /*onload transition*/
        initTransition('.article-container');
        /*init highlight.js*/
        document.querySelectorAll('pre code').forEach(function(i){hljs.highlightBlock(i);})

    }

    function initTransition(sel){
        document.querySelector(sel).style.transform = "translateY(0)";
        document.querySelector(sel).style.opacity = "1";

    }
}).call(this)