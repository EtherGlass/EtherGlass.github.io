/* Author:WebThemez
 * Author URI:http://webthemez.com
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 */


(function($){
	$(document).ready(function(){
	
		$(".banner-image").backstretch('images/banner.jpg');
		
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

		// add portfolio
		const CAT_MATH = "math";
		const CAT_PLANT = "plant";
		const CAT_ICON = "icon";
		const CAT_ANIMAL = "animal";
		
		
		const CAT_OTHER = "other";

		const CAT_LUCK = "luck";
		const CAT_ZERO = "zero";

		var items = [
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
				catergory: CAT_MATH,
				picPath: "images/nfts/EG1.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025649614946304010" 
			},

			{
				id: "EG-2",
				title: "EtherGlass #2",
				catergory: CAT_MATH,
				picPath: "images/nfts/EG2.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025651813969559553" 
			},

			{
				id: "EG-3",
				title: "EtherGlass #3",
				catergory: CAT_MATH,
				picPath: "images/nfts/EG3.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025652913481187338"
			},

			{
				id: "EG-4",
				title: "EtherGlass #4",
				catergory: CAT_PLANT,
				picPath: "images/nfts/EG4.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025654012992815114"
			},

            {
				id: "EG-5",
				title: "EtherGlass #5",
				catergory: CAT_PLANT,
				picPath: "images/nfts/EG5.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025655112504442890"
			},
			{
				id: "EG-6",
				title: "EtherGlass #6",
				catergory: CAT_PLANT,
				picPath: "images/nfts/EG6.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025656212016070657"
			},

			{
				id: "EG-7",
				title: "EtherGlass #7",
				catergory: CAT_PLANT,
				picPath: "images/nfts/EG7.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025657311527698437"
			},

			{
				id: "EG-8",
				title: "EtherGlass #8",
				catergory: CAT_PLANT,
				picPath: "images/nfts/EG8.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025658411039326210"
			},

			{
				id: "EG-9",
				title: "EtherGlass #9",
				catergory: CAT_PLANT,
				picPath: "images/nfts/EG9.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025659510550954505"
			},

			{
				id: "EG-10",
				title: "EtherGlass #10",
				catergory: CAT_MATH,
				picPath: "images/nfts/EG10.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025660610062581860"
			},

			{
				id: "EG-11",
				title: "EtherGlass #11",
				catergory: CAT_PLANT,
				picPath: "images/nfts/EG11.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025661709574209546"
			},

			{
				id: "EG-K",
				title: "EtherGlass #K",
				catergory: CAT_ICON,
				picPath: "images/nfts/EGk.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025662809085837313"
			},

			{
				id: "EG-12",
				title: "EtherGlass #12",
				catergory: CAT_MATH,
				picPath: "images/nfts/EG12.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025663908597465089"
			},
			{
				id: "EG-W",
				title: "EtherGlass #W",
				catergory: CAT_MATH,
				picPath: "images/nfts/EGw.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025665008109092865"
			},
			{
				id: "EG-14",
				title: "EtherGlass #14",
				catergory: CAT_OTHER,
				picPath: "images/nfts/EG14.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025666107620721468"
			},
			{
				id: "EG-15",
				title: "EtherGlass #15",
				catergory: CAT_ICON,
				picPath: "images/nfts/EG15.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025667207132349416"
			},
			{
				id: "EG-16",
				title: "EtherGlass #16",
				catergory: CAT_MATH,
				picPath: "images/nfts/EG16.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025668306643976506"
			},
			{
				id: "EG-17",
				title: "EtherGlass #17",
				catergory: CAT_PLANT,
				picPath: "images/nfts/EG17.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025669406155604079"
			},
			{
				id: "EG-18",
				title: "EtherGlass #18",
				catergory: CAT_ANIMAL + " + "+ CAT_LUCK,
				picPath: "images/nfts/EG18.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025670505667232410"
			},
			{
				id: "EG-19",
				title: "EtherGlass #19",
				catergory: CAT_ANIMAL + " + "+ CAT_LUCK,
				picPath: "images/nfts/EG19.jpeg",
				marketplace: "OpenSea",
				itemLink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/76505008690628832182644120658996052592304759113794803818016025671605178860408"
			},
			{
				id: "EG-20",
				title: "EtherGlass #20",
				catergory: CAT_ANIMAL,
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
        ];
		
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
										<h3>Buy:</h3>
										<p><a href=${data.itemLink} target="_blank" data-filter=".${data.catergory}">Go to ${data.marketplace}</a></p>
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
})(this.jQuery);