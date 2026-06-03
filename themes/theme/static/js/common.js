
$(window).scroll(function(event){
    if($(window).scrollTop() > $(window).height()){
        $(".message").addClass("on");
    }else{
        $(".message").removeClass("on");
    }
})
$(".fixlinks").click(function(){
  $(this).toggleClass("show")
})
$(window).scroll(function () {
  if ($(this).scrollTop() > 60) {
    $("header").stop().show().addClass("sticky");
  }
  else {
    $("header").stop().removeClass("sticky");
  }
});

$(".search").click(function(){
  $(".formbox").slideToggle();
  $(".lang dl").hide();
})
$()

$(".close,.pupback").click(function(){
  $(".pup").removeClass("show");
})
$(".shareclick").click(function(){
	$(".sharelist").toggleClass("active")
})

$(document).keydown(function (eventValue) {
  if (eventValue.keyCode == 27) {
    $(".pup").removeClass("show")
  } else {
    
  }
});

$(".lang span").click(function(){
	$(".formbox").hide();
  $(".lang dl").slideToggle();
})


$(".scroll-top").on('click', function() {
    let target = $(this).attr('data-target');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 300);
});


$(".products-block .catetype .downtit").click(function(){
	$(".products-block .catetype .downmenu").slideToggle();
	$(this).toggleClass("arrow-down")
})
$(function(){
    $('.dropdown').hover(function(){
        $(this).addClass('opens');
    },function(){
       $(this).removeClass('opens');
    })

});
$(function(){
    $('.dropdown-submenu').hover(function(){
        $(this).addClass('opens');
    },function(){
       $(this).removeClass('opens');
    })

});

var wsw = window.screen.width;
if( wsw <= 767  ){
  $("footer .col-md-3 h3").on('click',function () {
    var num = $("footer .col-md-3 h3").index($(this));

    if($("footer .foottop ul").eq(num).css("display")=="none"){
        $("footer .col-md-3").find("h3").removeClass("showico");
        $("footer .col-md-3").eq(num).find("h3").addClass("showico");
        $("footer .foottop ul").hide();
        $("footer .foottop ul").eq(num).toggle();
    }else{
      
        $("footer .col-md-3").eq(num).find("h3").removeClass("showico");
      // $("footer .col-lg-4").find(".fa-angle-up").hide();
        $("footer .foottop ul").hide();
    }
  });
}

$(function () {
  $('.sdlist').find('img').each(function () {
    var e = $(this).parent().prev().text();
    $(this).attr('alt', 'articlepic'); 
    $(this).wrap('<a href="' + $(this).attr("src") + '" data-fancybox="images" title="articlepic" alt="articlepic" data-caption="' + e + '"></a>');
    })

})




var banner = new Swiper(".banner .mySwiper", {
  effect: 'fade',
  pagination: {
	el: ".banner .swiper-pagination",
	clickable: true,
  },
  speed:800,
  loop:true,
  autoplay: true
});


var products = new Swiper(".index-products-block .mySwiper", {
  slidesPerView: 3.3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".index-products-block .swiper-button-next",
    prevEl: ".index-products-block .swiper-button-prev",
  },
  speed:800,
  breakpoints: {
		360: {
			slidesPerView: 1.2,
		},
		320: {
			slidesPerView: 1.2,
		},
		375: {
			slidesPerView: 1.2,
		},
		414: {
			slidesPerView: 1.2,
		},
		767: {
			slidesPerView: 2.1,
		},
		768: {
			slidesPerView: 2.2,
		},
		1024: {
			slidesPerView: 2.2,
		},
		1280: {
			slidesPerView: 3.3,
		},
		1440: {
			slidesPerView: 3.3,
		},
		1680: {
			slidesPerView: 3.3,
		},
	}
});




var brands = new Swiper(".index-brands-block .mySwiper", {
	navigation: {
	  nextEl: ".index-brands-block .swiper-button-next",
	  prevEl: ".index-brands-block .swiper-button-prev",
	},
	spaceBetween: 20,
	slidesPerView: 4,
	grid: {
        rows: 3,
    },
	speed:800,
	loop: true,
	breakpoints: {
		360: {
			slidesPerView: 2,
			grid: {
				rows: 2,
			},
			spaceBetween: 0,
		},
		320: {
			slidesPerView: 2,
			grid: {
				rows: 2,
			},
			spaceBetween: 0,
		},
		375: {
			slidesPerView: 2,
			grid: {
				rows: 2,
			},
			spaceBetween: 0,
		},
		414: {
			slidesPerView: 2,
			grid: {
				rows: 2,
			},
			spaceBetween: 0,
		},
		767: {
			slidesPerView: 2,
			grid: {
				rows: 2,
			},
		},
		768: {
			slidesPerView: 3,
			grid: {
				rows: 3,
			},
		},
		1024: {
			slidesPerView: 3,
			grid: {
				rows: 3,
			},
		},
		1280: {
			slidesPerView: 4,
			grid: {
				rows: 3,
			},
		},
        1440: {
			slidesPerView: 4,
			grid: {
				rows: 3,
			},
		},
        1680: {
			slidesPerView: 4,
			grid: {
				rows: 3,
			},
		},
  }
});


var honor = new Swiper(".index-honor-block .mySwiper", {
	slidesPerView: 7,
	spaceBetween: 0,
	centeredSlides: true,
	navigation: {
	  nextEl: ".index-honor-block .swiper-button-next",
	  prevEl: ".index-honor-block .swiper-button-prev",
	},
	loop: true,
	speed:800,
	breakpoints: {
		  360: {
			  slidesPerView: 1.2,
		  },
		  320: {
			  slidesPerView: 1.2,
		  },
		  375: {
			  slidesPerView: 1.2,
		  },
		  414: {
			  slidesPerView: 1.2,
		  },
		  767: {
			  slidesPerView: 3,
		  },
		  768: {
			  slidesPerView: 4,
		  },
		  1024: {
			  slidesPerView:5,
		  },
		  1280: {
			  slidesPerView: 5,
		  },
		  1440: {
			  slidesPerView: 7,
		  },
		  1680: {
			  slidesPerView: 7,
		  },
	  }
});


var products = new Swiper(".promotionbox .mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	navigation: {
	  nextEl: ".promotionbox .swiper-button-next",
	  prevEl: ".promotionbox .swiper-button-prev",
	},
	loop: true,
	speed:800,
	breakpoints: {
		  360: {
			  slidesPerView: 1,
		  },
		  320: {
			  slidesPerView: 1,
		  },
		  375: {
			  slidesPerView: 1,
		  },
		  414: {
			  slidesPerView: 1,
		  },
		  767: {
			  slidesPerView: 2,
		  },
		  768: {
			  slidesPerView: 2,
		  },
		  1024: {
			  slidesPerView:3,
		  },
		  1280: {
			  slidesPerView: 3,
		  },
		  1440: {
			  slidesPerView: 3,
		  },
		  1680: {
			  slidesPerView: 3,
		  },
	  }
});




var bigimg = new Swiper(".bigimg .mySwiper", {
	speed:800,
	loop:true,
	autoplay: true,
	navigation: {
		nextEl: ".bigimg .swiper-button-next",
		prevEl: ".bigimg .swiper-button-prev",
	},
	pagination: {
        el: ".bigimg .swiper-pagination",
        type: "fraction",
      },
});


var picbox = new Swiper(".picbox .mySwiper", {
	slidesPerView: 2.4,
	spaceBetween: 30,
	speed:800,
	loop: true,
	centeredSlides: true,
	breakpoints: {
		  360: {
			  slidesPerView: 1.2,
		  },
		  320: {
			  slidesPerView: 1.2,
		  },
		  375: {
			  slidesPerView: 1.2,
		  },
		  414: {
			  slidesPerView: 1.2,
		  },
		  767: {
			  slidesPerView: 2.4,
		  },
		  768: {
			  slidesPerView: 2.4,
		  },
		  1024: {
			  slidesPerView: 2.4,
		  },
		  1280: {
			  slidesPerView: 2.4,
		  },
		  1440: {
			  slidesPerView: 2.4,
		  },
		  1680: {
			  slidesPerView: 2.4,
		  },
	},
	autoplay:true,
});


var picbox2 = new Swiper(".picbox2 .mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	speed: 800,
	loop: true,
	breakpoints: {
		  360: {
			  slidesPerView: 1,
		  },
		  320: {
			  slidesPerView: 1,
		  },
		  375: {
			  slidesPerView: 1,
		  },
		  414: {
			  slidesPerView: 1,
		  },
		  767: {
			  slidesPerView: 2,
		  },
		  768: {
			  slidesPerView: 2,
		  },
		  1024: {
			  slidesPerView: 2,
		  },
		  1280: {
			  slidesPerView: 2,
		  },
		  1440: {
			  slidesPerView: 2,
		  },
		  1680: {
			  slidesPerView: 3,
		  },
	},
	autoplay:true,
});




var smallimgs = new Swiper(".small-img .mySwiper", {
	spaceBetween: 20,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
	breakpoints: {
		360: {
			slidesPerView: 4,
		},
		320: {
			slidesPerView: 4,
		},
		375: {
			slidesPerView: 4,
		},
		414: {
			slidesPerView: 4,
		},
		767: {
			slidesPerView: 4,
		},
		768: {
			slidesPerView: 5,
		},
		1024: {
			slidesPerView: 5,
		},
		1280: {
			slidesPerView: 5,
		},
	}
});
var bigimgs = new Swiper(".big-img .mySwiper", {
	spaceBetween: 0,
	thumbs: {
	  swiper: smallimgs,
	},
	speed:1200,
	navigation: {
		nextEl: ".big-img .swiper-button-next",
		prevEl: ".big-img .swiper-button-prev",
	}
  
	
});







$(document).ready(function($) {
	$('.counter').counterUp({
		time: 1000
	});
  });

$(document).ready(function() {
  var $tab_li = $('.taba  .col-md-2');
  $tab_li.click(function() {
      $(this).addClass('active').siblings().removeClass('active');
      var index = $tab_li.index(this);
     // $('.tabcontent .items').eq(index).show().siblings().hide();
      $('.tabcontent .items').eq(index).show().siblings().hide();

  });

});


$(document).ready(function() {
	var $tab_li = $('.main-menu .navigation>li>ul>li>ul>li');
	$tab_li.click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		var index = $tab_li.index(this);
	   // $('.tabcontent .items').eq(index).show().siblings().hide();
		$('.main-header .main-menu .navigation>li>ul>li .texts').eq(index).show().siblings().hide();
  
	});
  
  });



