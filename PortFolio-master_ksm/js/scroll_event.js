$(function(a){
  "use strict";
  a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){
    if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){
      var o=a(this.hash);
      if((o=o.length?o:a("[name="+this.hash.slice(1)+"]")).length)return a("html, body").animate({
        scrollTop:o.offset().top-54},1e3,"easeInOutExpo"),!1}
      }),
      a(".js-scroll-trigger").click(function(){
        a(".navbar-collapse").collapse("hide")
      }),
      a("body").scrollspy({
        target:"#mainNav",offset:56});
        var o=function(){
          a("#mainNav").offset().top>80?a("#mainNav").addClass("navbar-shrink"):a("#mainNav").removeClass("navbar-shrink")};
          o(),a(window).scroll(o),a(".portfolio-modal").on("show.bs.modal",function(o){a(".navbar").addClass("d-none")
        }),
        a(".portfolio-modal").on("hidden.bs.modal",function(o){
          a(".navbar").removeClass("d-none")
        })
      }(jQuery)
    );