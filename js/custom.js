/* Author:WebThemez
 * Author URI:http://webthemez.com
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 */


(function($){
	const CAT_MATH = "math";
	const CAT_PLANT = "plant";
	const CAT_ARCH = "architecture";
	const CAT_ANIMAL = "animal";
	const CAT_ICON = "icon";
	const CAT_MOGAO = "mogao";
	const CAT_OTHER = "other";

	const CAT_MAIN = "main";
	const CAT_LUCK = "luck";
	const CAT_DARK = "dark";
	const CAT_DOGE = "doge";
	const CAT_CAT = "cat";
	const CAT_BIRD = "bird";
	const CAT_ZERO = "zero";
	const CAT_CRYPTO = "crypto";
	const CAT_MOMENT = "moment";

	var items = getMetadata();
	// Renderring
    // ------------------------------------------------------------------------------------------------
    

	$(document).ready(function(){
    
		new WOW().init();
		/*
			Countdown initializer
		*/
		// var now = new Date();
		// var countTo = 3 * 24 * 60 * 60 * 1000 + now.valueOf();   
		var eventDate = new Date('Oct 13 2021 00:00:00 EST');
		var countTo = eventDate.valueOf();
		$('.timer').countdown(countTo, function(event) {
			$(this).find('.days').text(event.offset.totalDays);
			$(this).find('.hours').text(event.offset.hours);
			$(this).find('.minutes').text(event.offset.minutes);
			$(this).find('.seconds').text(event.offset.seconds);
		});
		

		// slideshows
		picPaths = ['images/banner.jpg']
		items.forEach(data => {
			picPaths.push(data.picPath);
		});
		shuffleArray(picPaths);
		
		$(".banner-image").backstretch(picPaths, {duration: 3500, fade: 2000});
		
		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});
		
	   $('#quote-carousel').carousel({
		 pause: true,
		 interval: 4000,
	   });
		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-151
						}, 1000);
						return false;
					}
				}
			});
		}

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};
		
		items.forEach(data => {
			$(buildItem(data)).prependTo( "#portfolio" );
		});
			

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				var mod = $(".modal");
				$(".modal").prependTo( "body" );
			});

		}



		function buildItem(data) {

			return `
			<!-- item --------->
			<div id = "modalWindow" class="col-sm-6 col-md-3 isotope-item ${data.catergory}">
				<div class="image-box">
					<div class="overlay-container">
						<img src=${data.picPath} alt="">
						<a class="overlay" data-toggle="modal" data-target="#${data.id}">
							<i class="fa fa-search-plus"></i>
							 
						</a>
					</div>
					<a class="btn btn-default btn-block" data-toggle="modal" data-target="#${data.id}">${data.title}</a>
				</div>
				<!-- Modal -->
				<div class="modal fade" id="${data.id}" tabindex="-1" role="dialog" aria-labelledby="${data.id}-label" aria-hidden="true">
					<div class="modal-dialog modal-lg">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span>
									<span class="sr-only">Close</span></button>
								<h4 class="modal-title" id="${data.id}-label">${data.title}</h4>
							</div>
							<div class="modal-body">
								
								<div class="row">												 
									<div class="col-md-12">
										<img src=${data.picPath} alt="">
										<br/>
										<p><a href=${data.itemLink} target="_blank" data-filter=".${data.catergory}">Buy on ${data.marketplace}</a></p>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				<!-- Modal end -->
			</div>
			<!-- item end -->
			`
		}





	}); // End document ready

	function setupWOW() {
		WOW.prototype.defaults = {
		  boxClass: 'wow',
		  animateClass: 'animated',
		  offset: 0,
		  mobile: true
		};
	
		function WOW(options) {
		  if (options == null) {
			options = {};
		  }
		  this.scrollCallback = __bind(this.scrollCallback, this);
		  this.scrollHandler = __bind(this.scrollHandler, this);
		  this.start = __bind(this.start, this);
		  this.scrolled = true;
		  this.config = this.util().extend(options, this.defaults);
		  this.animationNameCache = new WeakMap();
		}
	
		WOW.prototype.init = function() {
		  var _ref;
		  this.element = window.document.documentElement;
		  if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
			return this.start();
		  } else {
			return document.addEventListener('DOMContentLoaded', this.start);
		  }
		};
	
		WOW.prototype.start = function() {
		  var box, _i, _len, _ref;
		  this.boxes = this.element.getElementsByClassName(this.config.boxClass);
		  if (this.boxes.length) {
			if (this.disabled()) {
			  return this.resetStyle();
			} else {
			  _ref = this.boxes;
			  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				box = _ref[_i];
				this.applyStyle(box, true);
			  }
			  window.addEventListener('scroll', this.scrollHandler, false);
			  window.addEventListener('resize', this.scrollHandler, false);
			  return this.interval = setInterval(this.scrollCallback, 50);
			}
		  }
		};
	
		WOW.prototype.stop = function() {
		  window.removeEventListener('scroll', this.scrollHandler, false);
		  window.removeEventListener('resize', this.scrollHandler, false);
		  if (this.interval != null) {
			return clearInterval(this.interval);
		  }
		};
	
		WOW.prototype.show = function(box) {
		  this.applyStyle(box);
		  return box.className = "" + box.className + " " + this.config.animateClass;
		};
	
		WOW.prototype.applyStyle = function(box, hidden) {
		  var delay, duration, iteration;
		  duration = box.getAttribute('data-wow-duration');
		  delay = box.getAttribute('data-wow-delay');
		  iteration = box.getAttribute('data-wow-iteration');
		  return this.animate((function(_this) {
			return function() {
			  return _this.customStyle(box, hidden, duration, delay, iteration);
			};
		  })(this));
		};
	
		WOW.prototype.animate = (function() {
		  if ('requestAnimationFrame' in window) {
			return function(callback) {
			  return window.requestAnimationFrame(callback);
			};
		  } else {
			return function(callback) {
			  return callback();
			};
		  }
		})();
	
		WOW.prototype.resetStyle = function() {
		  var box, _i, _len, _ref, _results;
		  _ref = this.boxes;
		  _results = [];
		  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
			box = _ref[_i];
			_results.push(box.setAttribute('style', 'visibility: visible;'));
		  }
		  return _results;
		};
	
		WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
		  if (hidden) {
			this.cacheAnimationName(box);
		  }
		  box.style.visibility = hidden ? 'hidden' : 'visible';
		  if (duration) {
			this.vendorSet(box.style, {
			  animationDuration: duration
			});
		  }
		  if (delay) {
			this.vendorSet(box.style, {
			  animationDelay: delay
			});
		  }
		  if (iteration) {
			this.vendorSet(box.style, {
			  animationIterationCount: iteration
			});
		  }
		  this.vendorSet(box.style, {
			animationName: hidden ? 'none' : this.cachedAnimationName(box)
		  });
		  return box;
		};
	
		WOW.prototype.vendors = ["moz", "webkit"];
	
		WOW.prototype.vendorSet = function(elem, properties) {
		  var name, value, vendor, _results;
		  _results = [];
		  for (name in properties) {
			value = properties[name];
			elem["" + name] = value;
			_results.push((function() {
			  var _i, _len, _ref, _results1;
			  _ref = this.vendors;
			  _results1 = [];
			  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				vendor = _ref[_i];
				_results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
			  }
			  return _results1;
			}).call(this));
		  }
		  return _results;
		};
	
		WOW.prototype.vendorCSS = function(elem, property) {
		  var result, style, vendor, _i, _len, _ref;
		  style = window.getComputedStyle(elem);
		  result = style.getPropertyCSSValue(property);
		  _ref = this.vendors;
		  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
			vendor = _ref[_i];
			result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
		  }
		  return result;
		};
	
		WOW.prototype.animationName = function(box) {
		  var animationName;
		  try {
			animationName = this.vendorCSS(box, 'animation-name').cssText;
		  } catch (_error) {
			animationName = window.getComputedStyle(box).getPropertyValue('animation-name');
		  }
		  if (animationName === 'none') {
			return '';
		  } else {
			return animationName;
		  }
		};
	
		WOW.prototype.cacheAnimationName = function(box) {
		  return this.animationNameCache.set(box, this.animationName(box));
		};
	
		WOW.prototype.cachedAnimationName = function(box) {
		  return this.animationNameCache.get(box);
		};
	
		WOW.prototype.scrollHandler = function() {
		  return this.scrolled = true;
		};
	
		WOW.prototype.scrollCallback = function() {
		  var box;
		  if (this.scrolled) {
			this.scrolled = false;
			this.boxes = (function() {
			  var _i, _len, _ref, _results;
			  _ref = this.boxes;
			  _results = [];
			  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				box = _ref[_i];
				if (!(box)) {
				  continue;
				}
				if (this.isVisible(box)) {
				  this.show(box);
				  continue;
				}
				_results.push(box);
			  }
			  return _results;
			}).call(this);
			if (!this.boxes.length) {
			  return this.stop();
			}
		  }
		};
	
		WOW.prototype.offsetTop = function(element) {
		  var top;
		  while (element.offsetTop === void 0) {
			element = element.parentNode;
		  }
		  top = element.offsetTop;
		  while (element = element.offsetParent) {
			top += element.offsetTop;
		  }
		  return top;
		};
	
		WOW.prototype.isVisible = function(box) {
		  var bottom, offset, top, viewBottom, viewTop;
		  offset = box.getAttribute('data-wow-offset') || this.config.offset;
		  viewTop = window.pageYOffset;
		  viewBottom = viewTop + this.element.clientHeight - offset;
		  top = this.offsetTop(box);
		  bottom = top + box.clientHeight;
		  return top <= viewBottom && bottom >= viewTop;
		};
	
		WOW.prototype.util = function() {
		  return this._util || (this._util = new Util());
		};
	
		WOW.prototype.disabled = function() {
		  return !this.config.mobile && this.util().isMobile(navigator.userAgent);
		};
	
		return WOW;
	
	  };

	  /* Randomize array in-place using Durstenfeld shuffle algorithm */
    function shuffleArray(array) {
       for (var i = array.length - 1; i > 0; i--) {
           var j = Math.floor(Math.random() * (i + 1));
           var temp = array[i];
           array[i] = array[j];
           array[j] = temp;
        }
    }

	function getMetadata() {
		return [
			{
				id: "EG-0",
				title: "EtherGlass #0",
				catergory: CAT_MATH,
				picPath: "images/nfts/EG0.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025650714457941776"
			},
		
			{
				id: "EG-1",
				title: "EtherGlass #1",
				catergory: CAT_MATH + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG1.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025649614946304010" 
			},
		
			{
				id: "EG-2",
				title: "EtherGlass #2",
				catergory: CAT_MATH + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG2.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025651813969559553" 
			},
		
			{
				id: "EG-3",
				title: "EtherGlass #3",
				catergory: CAT_MATH + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG3.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025652913481187338"
			},
		
			{
				id: "EG-4",
				title: "EtherGlass #4",
				catergory: CAT_PLANT + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG4.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025654012992815114"
			},
		
			{
				id: "EG-5",
				title: "EtherGlass #5",
				catergory: CAT_PLANT + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG5.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025655112504442890"
			},
			{
				id: "EG-6",
				title: "EtherGlass #6",
				catergory: CAT_PLANT + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG6.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025656212016070657"
			},
		
			{
				id: "EG-7",
				title: "EtherGlass #7",
				catergory: CAT_PLANT + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG7.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025657311527698437"
			},
		
			{
				id: "EG-8",
				title: "EtherGlass #8",
				catergory: CAT_PLANT + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG8.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025658411039326210"
			},
		
			{
				id: "EG-9",
				title: "EtherGlass #9",
				catergory: CAT_PLANT + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG9.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025659510550954505"
			},
		
			{
				id: "EG-10",
				title: "EtherGlass #10",
				catergory: CAT_MATH + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG10.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025660610062581860"
			},
		
			{
				id: "EG-11",
				title: "EtherGlass #11",
				catergory: CAT_PLANT + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG11.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025661709574209546"
			},
		
			{
				id: "EG-K",
				title: "EtherGlass #K",
				catergory: CAT_ICON + " + "+ CAT_MAIN,
				picPath: "images/nfts/EGk.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025662809085837313"
			},
		
			{
				id: "EG-12",
				title: "EtherGlass #12",
				catergory: CAT_MATH + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG12.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025663908597465089"
			},
			{
				id: "EG-W",
				title: "EtherGlass #W",
				catergory: CAT_MATH + " + "+ CAT_MAIN,
				picPath: "images/nfts/EGw.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025665008109092865"
			},
			{
				id: "EG-14",
				title: "EtherGlass #14",
				catergory: CAT_OTHER + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG14.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025666107620721468"
			},
			{
				id: "EG-15",
				title: "EtherGlass #15",
				catergory: CAT_ICON + " + "+ CAT_MAIN + " + "+ CAT_DOGE,
				picPath: "images/nfts/EG15.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025667207132349416"
			},
			{
				id: "EG-16",
				title: "EtherGlass #16",
				catergory: CAT_MATH + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG16.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025668306643976506"
			},
			{
				id: "EG-17",
				title: "EtherGlass #17",
				catergory: CAT_PLANT + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG17.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025669406155604079"
			},
			{
				id: "EG-18",
				title: "EtherGlass #18",
				catergory: CAT_ANIMAL + " + "+ CAT_LUCK + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG18.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025670505667232410"
			},
			{
				id: "EG-19",
				title: "EtherGlass #19",
				catergory: CAT_ANIMAL + " + "+ CAT_LUCK + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG19.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025671605178860408"
			},
			{
				id: "EG-20",
				title: "EtherGlass #20",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG20.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025672704690487496"
			},
			{
				id: "ZERO-1",
				title: "ZERO #1",
				catergory: CAT_ANIMAL + " + "+ CAT_ZERO,
				picPath: "images/nfts/ZERO1.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025673804202115082"
			},
			{
				id: "ZERO-2",
				title: "ZERO #2",
				catergory: CAT_MATH + " + "+ CAT_ZERO,
				picPath: "images/nfts/ZERO2.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025674903713742858"
			},
			{
				id: "EG-21",
				title: "EtherGlass #21",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN + " + "+ CAT_DOGE,
				picPath: "images/nfts/EG21.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025676003225370644"
			},
			{
				id: "EG-22",
				title: "EtherGlass #22",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG22.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025677102736998450"
			},
			{
				id: "EG-23",
				title: "EtherGlass #23",
				catergory: CAT_MATH + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG23.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025678202248626186"
			},
			{
				id: "EG-24",
				title: "EtherGlass #24",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN + " + "+ CAT_DOGE,
				picPath: "images/nfts/EG24.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025679301760254018"
			},
			{
				id: "EG-25",
				title: "EtherGlass #25",
				catergory: CAT_OTHER + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG25.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025680401271881738"
			},
			{
				id: "EG-26",
				title: "EtherGlass #26",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN + " + "+ CAT_CAT,
				picPath: "images/nfts/EG26.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025681500783509514"
			},
			{
				id: "EG-27",
				title: "EtherGlass #27",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN + " + "+ CAT_CAT,
				picPath: "images/nfts/EG27.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025682600295137285"
			},
			{
				id: "EG-28",
				title: "EtherGlass #28",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG28.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025683699806765076"
			},
			{
				id: "EG-29",
				title: "EtherGlass #29",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN + " + "+ CAT_CAT,
				picPath: "images/nfts/EG29.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025684799318392842"
			},
			{
				id: "EG-30",
				title: "EtherGlass #30",
				catergory: CAT_ANIMAL + " " + CAT_DARK + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG30.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025685898830020618"
			},
			{
				id: "EG-31",
				title: "EtherGlass #31",
				catergory: CAT_ANIMAL + " " + CAT_BIRD + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG31.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025686998341648404"
			},
			{
				id: "EG-32",
				title: "EtherGlass #32",
				catergory: CAT_ANIMAL + " " + CAT_LUCK + " " + CAT_BIRD + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG32.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025688097853276210"
			},
			{
				id: "EG-H",
				title: "EtherGlass #H",
				catergory: CAT_ANIMAL + " "+ CAT_LUCK + " + "+ CAT_MAIN,
				picPath: "images/nfts/EGh.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025689197364904145"
			},
			{
				id: "EG-34",
				title: "EtherGlass #34",
				catergory: CAT_ANIMAL + " " + CAT_BIRD + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG34.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025690296876531862"
			},
			{
				id: "EG-D",
				title: "EtherGlass #D",
				catergory: CAT_MATH + " + "+ CAT_MAIN,
				picPath: "images/nfts/EGd.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/76505008690628832182644120658996052592304759113794803818016025648515434676324"
			},
			{
				id: "EG-35",
				title: "EtherGlass #35",
				catergory: CAT_ANIMAL + " "+ CAT_LUCK + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG35.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/76505008690628832182644120658996052592304759113794803818016025649614946304001"
			},
			{
				id: "EG-36",
				title: "EtherGlass #36",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG36.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025691396388159518"
			},
			{
				id: "EG-37",
				title: "EtherGlass #37",
				catergory: CAT_MATH + " "+ CAT_DARK + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG37.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025692495899787364"
			},
			{
				id: "EG-I",
				title: "EtherGlass #I",
				catergory: CAT_MATH + " + "+ CAT_MAIN,
				picPath: "images/nfts/EGi.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/76505008690628832182644120658996052592304759113794803818016025650714457931777"
			},
			{
				id: "EG-39",
				title: "EtherGlass #39",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN + " "+ CAT_DARK,
				picPath: "images/nfts/EG39.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/76505008690628832182644120658996052592304759113794803818016025651813969559553"
			},
			{
				id: "EG-40",
				title: "EtherGlass #40",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN + " "+ CAT_DARK,
				picPath: "images/nfts/EG40.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025693595411415090"
			},
			{
				id: "EG-41",
				title: "EtherGlass #41",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG41.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/76505008690628832182644120658996052592304759113794803818016025652913481187329"
			},
			{
				id: "EG-42",
				title: "EtherGlass #42",
				catergory: CAT_ANIMAL + " " + CAT_LUCK + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG42.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025694694923043016"
			},
			{
				id: "EG-43",
				title: "EtherGlass #43",
				catergory: CAT_ANIMAL + " " + CAT_BIRD + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG43.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/76505008690628832182644120658996052592304759113794803818016025654012992815105"
			},
			{
				id: "EG-44",
				title: "EtherGlass #44",
				catergory: CAT_ANIMAL + " " + CAT_BIRD + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG44.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025695794434670642"
			},
		
			{
				id: "EG-45",
				title: "EtherGlass #45",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN + " + "+ CAT_CAT,
				picPath: "images/nfts/EG45.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025696893946298378"
			},
			{
				id: "EG-46",
				title: "EtherGlass #46",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN + " + "+ CAT_CAT,
				picPath: "images/nfts/EG46.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/76505008690628832182644120658996052592304759113794803818016025655112504442881"
			},{
				id: "EG-47",
				title: "EtherGlass #47",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN + " + "+ CAT_CAT,
				picPath: "images/nfts/EG47.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025697993457926244"
			},{
				id: "EG-48",
				title: "EtherGlass #48",
				catergory: CAT_ANIMAL + " " + CAT_BIRD + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG48.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/76505008690628832182644120658996052592304759113794803818016025656212016070657"
			},{
				id: "EG-49",
				title: "EtherGlass #49",
				catergory: CAT_ANIMAL + " " + CAT_BIRD + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG49.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025699092969554020"
			},{
				id: "EG-50",
				title: "EtherGlass #50",
				catergory: CAT_ANIMAL + " " + CAT_BIRD + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG50.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/76505008690628832182644120658996052592304759113794803818016025657311527698433"
			},{
				id: "EG-51",
				title: "EtherGlass #51",
				catergory: CAT_ANIMAL + " " + CAT_DARK + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG51.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025700192481181706"
			},{
				id: "EG-B",
				title: "EtherGlass #B",
				catergory: CAT_ANIMAL + " " + CAT_LUCK + " + "+ CAT_MAIN + " + "+ CAT_DOGE,
				picPath: "images/nfts/EGb.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025701291992809672"
			},{
				id: "EG-52",
				title: "EtherGlass #52",
				catergory: CAT_ANIMAL + " " + CAT_BIRD + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG52.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/76505008690628832182644120658996052592304759113794803818016025658411039326209"
			},{
				id: "EG-53",
				title: "EtherGlass #53",
				catergory: CAT_DARK + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG53.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025702391504437288"
			},{
				id: "EG-M",
				title: "EtherGlass #M",
				catergory: CAT_MOMENT + " + "+ CAT_MAIN,
				picPath: "images/nfts/EGm.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025703491016065193"
			},{
				id: "ZERO-3",
				title: "ZERO #3",
				catergory: CAT_ICON + " " + CAT_ARCH + " " + CAT_ZERO,
				picPath: "images/nfts/ZERO3.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025704590527692810"
			},{
				id: "EG-55",
				title: "EtherGlass #55",
				catergory: CAT_ANIMAL + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG55.jpeg",
				marketplace: "HEN",
				itemLink: "https://www.hicetnunc.xyz/objkt/311898"
			},{
				id: "EG-58",
				title: "EtherGlass #58",
				catergory: CAT_MATH + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG58.jpeg",
				marketplace: "HEN",
				itemLink: "https://www.hicetnunc.xyz/objkt/316638"
			},{
				id: "EG-F",
				title: "EtherGlass #F",
				catergory: CAT_ANIMAL + " " + CAT_LUCK + " " + CAT_BIRD + " + "+ CAT_MAIN,
				picPath: "images/nfts/EGf.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025705690039320636"
			},{
				id: "EG-60",
				title: "EtherGlass #60",
				catergory: CAT_CRYPTO + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG60.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025706789550948452"
			},{
				id: "satoshi",
				title: "EtherGlass Satoshi Nakamoto",
				catergory: CAT_ICON + " " + CAT_CRYPTO,
				picPath: "images/nfts/satoshi.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025707889062578136"
			},{
				id: "EG-T",
				title: "EtherGlass #T",
				catergory: CAT_OTHER + " + "+ CAT_MAIN,
				picPath: "images/nfts/EGt.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025708988574203953"
			},{
				id: "EG-61",
				title: "EtherGlass #61",
				catergory: CAT_ARCH + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG61.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025710088085831700"
			},{
				id: "1ETH",
				title: "ONE ETH",
				catergory: CAT_CRYPTO,
				picPath: "images/nfts/1ETH.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025711187597459466"
			},{
				id: "1BTC",
				title: "ONE BTC",
				catergory: CAT_CRYPTO,
				picPath: "images/nfts/1BTC.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025712287109087242"
			},{
				id: "1DOGE",
				title: "ONE DOGE",
				catergory: CAT_CRYPTO,
				picPath: "images/nfts/1DOGE.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025713386620715018"
			},{
				id: "1ADA",
				title: "ONE ADA",
				catergory: CAT_CRYPTO,
				picPath: "images/nfts/1ADA.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025714486132342794"
			},{
				id: "EG-62",
				title: "EtherGlass #62",
				catergory: CAT_ARCH + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG62.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025715585643970580"
			},{
				id: "1PolygonGif",
				title: "ONE Polygon Giraffe",
				catergory: CAT_ANIMAL,
				picPath: "images/nfts/1PolygonGif.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025706789550948452"
			},{
				id: "1BV",
				title: "ONE Intrecciato Giraffe",
				catergory: CAT_ANIMAL,
				picPath: "images/nfts/1BV.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025717784667226122"
			},{
				id: "cyberdoge",
				title: "EtherGlass CyberDoge",
				catergory: CAT_ANIMAL  + " "+ CAT_ICON + " "+ CAT_DOGE,
				picPath: "images/nfts/cyberdoge.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025718884178853988"
			},{
				id: "EG-64",
				title: "EtherGlass #64",
				catergory: CAT_MATH + " + "+ CAT_MAIN,
				picPath: "images/nfts/EG64.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025719983690481864"
			},{
				id: "zebrapunk",
				title: "EtherGlass ZebraPunk",
				catergory: CAT_ANIMAL,
				picPath: "images/nfts/zebrapunk.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025721083202110440"
			},{
				id: "cryptotiger",
				title: "EtherGlass CryptoTiger",
				catergory: CAT_ANIMAL + " + "+ CAT_CAT,
				picPath: "images/nfts/cryptotiger.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025722182713746104"
			},{
				id: "tobycorgi",
				title: "EtherGlass Toby the Corgi",
				catergory: CAT_ANIMAL + " + "+ CAT_DOGE,
				picPath: "images/nfts/tobycorgi.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025723282225367012"
			},{
				id: "disc1",
				title: "EtherGlass DISC I",
				catergory: CAT_MATH,
				picPath: "images/nfts/disc1.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025724381736999768"
			},{
				id: "disc2",
				title: "EtherGlass DISC II",
				catergory: CAT_MATH,
				picPath: "images/nfts/disc2.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025725481248627210"
			},{
				id: "time1",
				title: "EtherGlass TIME",
				catergory: CAT_ICON,
				picPath: "images/nfts/time1.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025726580760257320"
			},{
				id: "kiska",
				title: "EtherGlass FreeKiska",
				catergory: CAT_ANIMAL,
				picPath: "images/nfts/kiska.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025727680271878075"
			},{
				id: "che",
				title: "EtherGlass Che Guevara",
				catergory: CAT_ICON,
				picPath: "images/nfts/che.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025728779783505839"
			},{
				id: "mogao1",
				title: "EtherGlass Mogao I",
				catergory: CAT_MOGAO,
				picPath: "images/nfts/mogao1.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025729879295131668"
			},{
				id: "vogue1",
				title: "EtherGlass VOGUE",
				catergory: CAT_ICON,
				picPath: "images/nfts/vogue1.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025730978806761089"
			},{
				id: "disc3",
				title: "EtherGlass DISC III",
				catergory: CAT_MATH,
				picPath: "images/nfts/disc3.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025732078318394300"
			},{
				id: "disc4",
				title: "EtherGlass DISC IV",
				catergory: CAT_MATH,
				picPath: "images/nfts/disc4.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025733177830022976"
			},{
				id: "mogao2",
				title: "Etherglass Mogao II",
				catergory: CAT_MOGAO,
				picPath: "images/nfts/mogao2.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025734277341642772"
			},{
				id: "marvel1",
				title: "EtherGlass MARVEL",
				catergory: CAT_ICON,
				picPath: "images/nfts/marvel1.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025735376853272032"
			},{
				id: "disc5",
				title: "EtherGlass DISC V",
				catergory: CAT_MATH,
				picPath: "images/nfts/disc5.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025736476364905304"
			},{
				id: "mogao3",
				title: "EtherGlass Mogao III",
				catergory: CAT_MOGAO,
				picPath: "images/nfts/mogao3.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025737575876526100"
			},{
				id: "supreme",
				title: "EtherGlass Supreme",
				catergory: CAT_ICON,
				picPath: "images/nfts/supreme.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025738675388155818"
			},{
				id: "mogao4",
				title: "EtherGlass Mogao IV",
				catergory: CAT_MOGAO,
				picPath: "images/nfts/mogao4.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025739774899781652"
			},{
				id: "eiffel",
				title: "EtherGlass Eiffel Tower",
				catergory: CAT_ICON,
				picPath: "images/nfts/eiffel.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025740874411411297"
			},{
				id: "EG-65",
				title: "EtherGlass #65",
				catergory: CAT_ANIMAL + " + "+ CAT_CAT,
				picPath: "images/nfts/EG65.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025741973923037384"
			},{
				id: "mogao5",
				title: "EtherGlass Mogao V",
				catergory: CAT_MOGAO,
				picPath: "images/nfts/mogao5.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025743073434664980"
			},{
				id: "gq1",
				title: "EtherGlass Albert Einstein",
				catergory: CAT_ICON,
				picPath: "images/nfts/gq1.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025744172946294691"
			},{
				id: "luna",
				title: "EtherGlass Terra LUNA",
				catergory: CAT_CRYPTO + " " + CAT_MOMENT + " " + CAT_ICON,
				picPath: "images/nfts/luna.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025745272457922530"
			},{
				id: "mogao6",
				title: "EtherGlass Mogao VI",
				catergory: CAT_MOGAO,
				picPath: "images/nfts/mogao6.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025746371969548308"
			},{
				id: "picasso1",
				title: "EtherGlass Picasso I",
				catergory: CAT_ICON,
				picPath: "images/nfts/picasso1.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025747471481176074"
			},{
				id: "vangogh1",
				title: "EtherGlass Van Gogh I",
				catergory: CAT_ICON,
				picPath: "images/nfts/vangogh1.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025748570992803850"
			},{
				id: "monet1",
				title: "EtherGlass Monet I",
				catergory: CAT_ICON,
				picPath: "images/nfts/monet1.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025749670504431626"
			},{
				id: "paper1",
				title: "EtherGlass PAPER",
				catergory: CAT_ICON,
				picPath: "images/nfts/paper1.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025750770016061206"
			},{
				id: "hokusai1",
				title: "EtherGlass Hokusai I",
				catergory: CAT_ICON,
				picPath: "images/nfts/hokusai1.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025751869527687188"
			},{
				id: "lennon",
				title: "EtherGlass John Lennon",
				catergory: CAT_ICON,
				picPath: "images/nfts/lennon.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025752969039316884"
			}
			
		];
	}
})(this.jQuery);