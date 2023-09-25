$(document).ready(function () {



    var LslideIndex = 1;

    var myTimerNew;
    
    var slideshowContainer;
    
    var $Li = 1;
    
    var thumbimage;
    
    var Imagearr = [];
    
    var index_id;
    
     
    
    window.addEventListener("load", function () {
    
     
    
        let touchstartX = 0;
    
        let touchstartY = 0;
    
        let touchendX = 0;
    
        let touchendY = 0;
    
     
    
        const slider = document.querySelector('.slider-container'),
    
            slides = Array.from(document.querySelectorAll('.slide'))
    
        slides.forEach((slide, index) => {
    
     
    
            const slideImage = slide.querySelector('img')
    
            // disable default image drag
    
            slideImage.addEventListener('dragstart', (e) => e.preventDefault())
    
     
    
            slide.addEventListener('touchstart', function (event) {
    
                //alert('1');
    
                touchstartX = event.changedTouches[0].screenX;
    
                touchstartY = event.changedTouches[0].screenY;
    
            }, false);
    
     
    
            slide.addEventListener('touchend', function (event) {
    
                touchendX = event.changedTouches[0].screenX;
    
                touchendY = event.changedTouches[0].screenY;
    
                handleGesture();
    
            }, false);
    
     
    
        });
    
     
    
        function handleGesture() {
    
            if (touchendX <= touchstartX) {
    
                console.log('Swiped left');
    
                LplusSlides(1);
    
            }
    
     
    
            if (touchendX >= touchstartX) {
    
                console.log('Swiped right');
    
                LplusSlides(-1);
    
            }
    
     
    
            if (touchendY <= touchstartY) {
    
                console.log('Swiped up');
    
            }
    
     
    
            if (touchendY >= touchstartY) {
    
                console.log('Swiped down');
    
            }
    
     
    
            if (touchendY === touchstartY) {
    
                console.log('Tap');
    
            }
    
        }
    
    
    
        //slide.forEach((slide, index) => {
    
        $(".location_mySlides").each(function (index) {
    
     
    
            thumbimage = $(this).find(".thumb img").attr("src");
    
            thumbimageTitle = $(this).find(".thumb img").attr("title");
    
            Destlink = $(this).find(".location_banner").attr('data-link');
    
     
    
            $(".location_dots").append("<span title='" + thumbimageTitle + "' class='Ldot' id='location_circle' onclick='currentSlide(" + $Li + ")'></span>");
    
     
    
            var newDiv = document.createElement("div");
    
            newDiv.textContent = thumbimageTitle;
    
            newDiv.setAttribute('class', 'thumbimgtitle');
    
            newDiv.setAttribute('title', thumbimageTitle);
    
            newDiv.setAttribute('onclick', 'currentSlide(' + $Li + ')');
    
            newDiv.setAttribute('index', $Li);
    
            $(".location_thumbnail").append(newDiv);
    
     
    
            var newDivLink = document.createElement("div");
    
            newDivLink.innerHTML = "<a href='" + Destlink + "'><span>GO</span><i  class='fa fa-arrow-right' aria-hidden='true'></i></a>";
    
            newDivLink.setAttribute('class', 'thumbimgtitleLink font_bold');
    
            newDivLink.setAttribute('index', $Li);
    
            $(".location_thumbnail").append(newDivLink);
    
            //$(".thumbimgtitleLink").append("<a href='"+Destlink+"'>Go -></a>");
    
     
    
            $(".location_thumbnail").append($('<img alt="Location" index="' + $Li + '" title="' + thumbimageTitle + '" onclick="currentSlide(' + $Li + ')" class="ThumbImgList" src="' + thumbimage + '">'));
    
     
    
            $Li++;
    
           
    
        });
    
     
    
        $(document).on('mouseover', '.thumbimgParent', function (event) {
    
     
    
            index_id = ($(this).find('.ThumbImgList').attr('index'));
    
            $(".thumbimgtitleLink[index='" + index_id + "']").addClass("active");
    
     
    
            //$( ".thumbimgtitleLink[index='"+index_id+"']" ).css('display','inline-block');
    
     
    
        }).on('mouseleave', '.thumbimgParent', function () {
    
     
    
            if (!$(this).hasClass('active')) {
    
                $(".thumbimgtitleLink[index='" + index_id + "']").removeClass("active")
    
            }
    
     
    
        });
    
     
    
        var newDivParent = document.createElement("div");
    
        newDivParent.setAttribute('class', 'thumbimgParent');
    
        $('.location_thumbnail > img').wrap(newDivParent);
    
        //$('.location_thumbnail > .thumbimgtitle').wrap(newDivParent);
    
        //$('.location_thumbnail > .thumbimgtitleLink').wrap(newDivParent);
    
     
    
     
    
        LshowSlides(LslideIndex);
    
        myTimerNew = setInterval(function () { plusSlides(1) }, 5000);
    
     
    
        //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    
        slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
    
     
    
        //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    
        // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
    
        if (slideshowContainer) {
    
            slideshowContainer.addEventListener('mouseenter', pause);
    
            slideshowContainer.addEventListener('mouseleave', resume);
    
        }
    
     
    
        $CurrentSlideTitle = $(".Ldot.active").attr('title');
    
        $NextSlideTitle = $(".Ldot.active").next('.Ldot').attr('title');
    
        $PrevSlideTitle = $(".Ldot").last().attr('title');
    
     
    
        if ($(slider).data('autostart') == 'yes') {
    
            currentSlide(1);
    
        }
    
    });
    
     
    
    $(document).ready(function () {
    
        $('.thumbimgtitle, .thumbimgParent, .thumbimgtitleLink').wrapAll('<div class="single_location_container"></div>');
    
    });
    
     
    
    // NEXT AND PREVIOUS CONTROL
    
    function LplusSlides(n) {
    
        clearInterval(myTimerNew);
    
        if (n < 0) {
    
            LshowSlides(LslideIndex -= 1);
    
        } else {
    
            LshowSlides(LslideIndex += 1);
    
        }
    
     
    
        //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    
     
    
        if (n === -1) {
    
            myTimerNew = setInterval(function () { LplusSlides(n + 2) }, 5000);
    
        } else {
    
            myTimerNew = setInterval(function () { LplusSlides(n + 1) }, 5000);
    
        }
    
    }
    
     
    
    //Controls the current slide and resets interval if needed
    
    function currentSlide(n) {
    
        clearInterval(myTimerNew);
    
        myTimerNew = setInterval(function () { LplusSlides(n + 1) }, 5000);
    
        LshowSlides(LslideIndex = n);
    
     
    
    }
    
     
    
    function LshowSlides(n) {
    
     
    
        var i;
    
        var k;
    
        var j;
    
        $(".ThumbImgTop").remove();
    
    
    
        var slides = document.getElementsByClassName("location_mySlides");
    
     
    
        var dots = document.getElementsByClassName("Ldot");
    
        var thumbimg = document.getElementsByClassName("ThumbImgList");
    
        var thumbimgParent = document.getElementsByClassName("thumbimgParent");
    
        var dest_link_active = document.getElementsByClassName("thumbimgtitleLink");
    
     
    
        if (n > slides.length) { LslideIndex = 1 }
    
     
    
        if (n < 1) { LslideIndex = slides.length }
    
     
    
        for (i = 0; i < slides.length; i++) {
    
            slides[i].style.display = "none";
    
     
    
        }
    
        //n++;
    
        for (i = 0; i < dots.length; i++) {
    
            dots[i].className = dots[i].className.replace(" active", "");
    
        }
    
        for (k = 0; k < thumbimg.length; k++) {
    
     
    
            thumbimg[k].className = thumbimg[k].className.replace(" active", "");
    
        }
    
     
    
        for (j = 0; j < thumbimgParent.length; j++) {
    
     
    
            thumbimgParent[j].className = thumbimgParent[j].className.replace(" active", "");
    
     
    
        }
    
     
    
        for (l = 0; l < dest_link_active.length; l++) {
    
     
    
            dest_link_active[l].className = dest_link_active[l].className.replace(" active", "");
    
     
    
        }
    
     
    
        slides[LslideIndex - 1].style.display = "block";
    
        //slides[LslideIndex-1].className += "active";
    
        dots[LslideIndex - 1].className += " active";
    
        thumbimg[LslideIndex - 1].className += " active";
    
        dest_link_active[LslideIndex - 1].className += " active"
    
        thumbimgParent[LslideIndex - 1].className += " active";
    
    
    
        var LocationGraphic = document.createElement("div");
    
        LocationGraphic.setAttribute('class', 'ThumbImgTop');
    
        $(".thumbimgParent.active").append(LocationGraphic);
    
    
    
    
    
        $CurrentSlideTitle = $(".Ldot.active").attr('title');
    
     
    
        //clearInterval(myTimerNew);
    
        // myTimerNew = setInterval(function(){LplusSlides(n + 1)}, 5000);
    
    }
    
     
    
    pause = () => {
    
        clearInterval(myTimerNew);
    
    }
    
     
    
    resume = () => {
    
        clearInterval(myTimerNew);
    
        myTimerNew = setInterval(function () { LplusSlides(LslideIndex) }, 4000);
    
    }

/////////////////////////////////////////////////////////////



    $(".thumbimgtitle, .thumbimgtitleLink, .thumbimgParent").each(function () {
        var singleLocationDiv = $("<div class='single_location_div'></div>");
        $(this).nextUntil(".thumbimgtitle, .thumbimgtitleLink, .thumbimgParent").addBack().wrapAll(singleLocationDiv);
    });
});