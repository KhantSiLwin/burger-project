$(document).ready(function(){


    $(window).on("load",function () {
        $('.loader-container').fadeOut(500,function () {
            $(this).remove();
        });
    });

    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        let result = $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").hasClass("open");
    
        if(result){
    
            $(this).removeClass("open");
    
    
    
        }else{
    
            $(this).addClass("open");
    
    
        }
    });
    
    
    setInterval(() => {         
        //replaced function() by ()=>
       let d = new Date();
       let day= d.getDate();
       document.getElementById("date").innerText=day;
       let hour= d.getHours();
       document.getElementById("hour").innerText=hour;
       let minute= d.getMinutes();
       document.getElementById("minute").innerText=minute;
       let second= d.getSeconds();
       document.getElementById("second").innerText=second;
        
        // just testing if it is working
      }, 1000);
    
      let screenHeight = $(window).height();
      // console.log(screenHeight);
    
    
      $(window).scroll(function () {
          let currentPosition = $(this).scrollTop();
          // console.log(currentPosition);
          if(currentPosition > screenHeight-150){
              $(".navbar-brand").addClass("navbar-blur");
              $(".site-logo").addClass("site-mini");
              $(".site-nav").addClass("site-nav-scroll");
          }else{
              $(".navbar-brand").removeClass("navbar-blur");
              $(".site-logo").removeClass("site-mini");
              $(".site-nav").removeClass("site-nav-scroll");
              setActive("home");
          }
      });
    
    
      function setActive(current) {
    
          $(".nav-link").removeClass("borderBottom");
          $(".nav-link").removeClass("nav-link-hover");
          $(`.nav-link[href='#${current}']`).addClass('borderBottom');
    
      }
    
      function navScroll() {
    
          let currentSection = $("section[id]");
          currentSection.waypoint(function (direction) {
              if(direction == "down"){
                  let currentSectionId = $(this.element).attr('id');
                  setActive(currentSectionId);
                  console.log(currentSectionId)
              }
    
          },{ offset:'0px' });
    
          currentSection.waypoint(function (direction) {
    
              if(direction == "up"){
                  let currentSectionId = $(this.element).attr('id');
                  setActive(currentSectionId);
              }
    
          },{ offset:'150px' });
    
      }
    
      navScroll();
    
      new WOW().init();
    ;

    
})