
var Kajabi = Kajabi || {};

Kajabi.currentSiteUser = {
  "id" : "-1",
  "type" : "Guest",
  "contactId" : "",
};


Kajabi.theme = {
  activeThemeName: "Premier",
  previewThemeId: null,
  editor: false
};



    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2461731,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');


// Check if the current URL matches the old link
if (window.location.href === "https://www.fullyraw.com/bali-retreat-april-2021") {
    // Redirect to the new link
    window.location.href = "https://www.fullyraw.com/bali-retreat-november-2025";
}






    // Ensure the script runs after the DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
      // Select the div with the class "footer-img"
      const footerImgDiv = document.querySelector('.footer-img');

      if (footerImgDiv) {
        // Create an image element
        const img = document.createElement('img');

        // Set the image source and optional attributes
        img.src = 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/534228/settings_images/04113e-f4cb-735f-aaf2-0ca4ffa3003_Rawfully_Organic_color_logo-ai.png'; // Replace with the path to your image
        img.alt = 'Placeholder Image'; // Add an alt description for accessibility
        img.style.width = '250px'; // Optional: Set width to fit container
        img.style.height = 'auto'; // Optional: Maintain aspect ratio

        // Append the image to the div
        footerImgDiv.appendChild(img);
      } else {
        console.error('Div with class "footer-img" not found.');
      }
    });

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)
},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-45336924-1', 'auto', {});
ga('send', 'pageview');

if (typeof (window.rudderanalytics) === "undefined") {
  !function(){"use strict";window.RudderSnippetVersion="3.0.3";var sdkBaseUrl="https://cdn.rudderlabs.com/v3"
  ;var sdkName="rsa.min.js";var asyncScript=true;window.rudderAnalyticsBuildType="legacy",window.rudderanalytics=[]
  ;var e=["setDefaultInstanceKey","load","ready","page","track","identify","alias","group","reset","setAnonymousId","startSession","endSession","consent"]
  ;for(var n=0;n<e.length;n++){var t=e[n];window.rudderanalytics[t]=function(e){return function(){
  window.rudderanalytics.push([e].concat(Array.prototype.slice.call(arguments)))}}(t)}try{
  new Function('return import("")'),window.rudderAnalyticsBuildType="modern"}catch(a){}
  if(window.rudderAnalyticsMount=function(){
  "undefined"==typeof globalThis&&(Object.defineProperty(Object.prototype,"__globalThis_magic__",{get:function get(){
  return this},configurable:true}),__globalThis_magic__.globalThis=__globalThis_magic__,
  delete Object.prototype.__globalThis_magic__);var e=document.createElement("script")
  ;e.src="".concat(sdkBaseUrl,"/").concat(window.rudderAnalyticsBuildType,"/").concat(sdkName),e.async=asyncScript,
  document.head?document.head.appendChild(e):document.body.appendChild(e)
  },"undefined"==typeof Promise||"undefined"==typeof globalThis){var d=document.createElement("script")
  ;d.src="https://polyfill-fastly.io/v3/polyfill.min.js?version=3.111.0&features=Symbol%2CPromise&callback=rudderAnalyticsMount",
  d.async=asyncScript,document.head?document.head.appendChild(d):document.body.appendChild(d)}else{
  window.rudderAnalyticsMount()}window.rudderanalytics.load("2apYBMHHHWpiGqicceKmzPebApa","https://kajabiaarnyhwq.dataplane.rudderstack.com",{})}();
}

if (typeof (window.rudderanalytics) !== "undefined") {
  rudderanalytics.page({"account_id":"25398","site_id":"26690"});
}

if (typeof (window.rudderanalytics) !== "undefined") {
  (function () {
    function AnalyticsClickHandler (event) {
      const targetEl = event.target.closest('a') || event.target.closest('button');
      if (targetEl) {
        rudderanalytics.track('Site Link Clicked', Object.assign(
          {"account_id":"25398","site_id":"26690"},
          {
            link_text: targetEl.textContent.trim(),
            link_href: targetEl.href,
            tag_name: targetEl.tagName,
          }
        ));
      }
    };
    document.addEventListener('click', AnalyticsClickHandler);
  })();
}

!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.agent='plkajabi';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                                                              document,'script','https://connect.facebook.net/en_US/fbevents.js');


fbq('init', '118960718701833', {"ct":"","country":null,"em":"","fn":"","ln":"","pn":"","zp":""});
fbq('track', "PageView");



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].style.opacity = "1"; 
  dots[slideIndex-1].className += " active";
}



jQuery(document).ready(function ()
         {
         jQuery(window).scroll(function(){
            var getscr=jQuery(window).scrollTop();
            if(getscr >= 100 )
            {
               jQuery(".header").attr("style","background: #f2591d8a; position: fixed; z-index:1111; width:100;");
               jQuery(".header .logo--image").attr("style","height: 50px;");
               jQuery(".header .logo img").attr("style","height: 100px;");
               jQuery(".nav-link").attr("style","line-height: 50px;");
          }
           else
           {
               jQuery(".header").attr("style","");
               jQuery(".header .logo--image").attr("style","");
               jQuery(".header .logo img").attr("style","");
               jQuery(".nav-link").attr("style","");
           }
   });
   
  
           });

$(document).on('click', '.scroll_link',  function(event){   

    event.preventDefault();
$('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
       
        
    }, 500);
    return true;
});

setInterval(function(){plusSlides(1)}, 80000);


$(document).ready(function(){

$( ".header-menu a:nth-child(2)" ).removeClass( "scroll_link" );
$( ".header-menu a:nth-child(3)" ).removeClass( "scroll_link" );

});

function ExpireCookie(days) {
    var date = new Date();
    var d = days;
    date.setTime(date.getTime() + (d * 24 * 60 * 60 * 1000));
    if( d < 1 ) {
      return false;
    } else {
      $.cookie("PopupSubmission", "value", { expires: date });
    }
  }
$(document).ready(function(){
    if ($.cookie('PopupSubmission')) {
    
    } else {
        setTimeout(function(){
            $(".pop_up").show();
        }, 15000);
      
    }
    
    $(".pop_up_content form").submit(function( event ) {
        if (!$.cookie('PopupSubmission')) {
            ExpireCookie('365');
            $(".pop_up").hide();
        }
    });
    
    
    
});

$(document).ready(function(){

  $(".close_img").click(function(){
    $(".pop_up").hide();
  });
  
});
