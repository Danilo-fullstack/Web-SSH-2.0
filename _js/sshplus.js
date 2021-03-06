function switchVisible() {
	document.getElementById("price-val") && ("none" == document.getElementById("price-val").style.display ? (document.getElementById("price-val").style.display = "block", document.getElementById("priceon-val").style.display = "none") : (document.getElementById("price-val").style.display = "none", document.getElementById("priceon-val").style.display = "block"))
}

function translate() {
	$.getScript("js/lib/i18next.min.js", function () {
		$.getScript("js/lib/i18nextXHRBackend.min.js", function () {
			$.getScript("js/lib/jquery-i18next.min.js", function () {
				var t = localStorage.getItem("lng");
				t || (localStorage.setItem("lng", "pt-PT"), t = "pt-PT"), i18next.use(i18nextXHRBackend).init({
					lng: t,
					fallbackLng: "pt-PT",
					backend: {
						loadPath: "locales/{{lng}}/translations.json"
					}
				}, function (t, e) {
					jqueryI18next.init(i18next, $, {
						tName: "t",
						i18nName: "i18n",
						handleName: "localize",
						selectorAttr: "data-i18n",
						targetAttr: "i18n-target",
						optionsAttr: "i18n-options",
						useOptionsAttr: !1,
						parseDefaultValueFromContent: !0
					}), $(document).localize()
				})
			})
		})
	})
}

function headerfooter() {
	$("#header").load("header.html", function (t, e, i) {
		$('#drop-lng [data-lng="' + localStorage.getItem("lng") + '"]').addClass("xpto active"), $("#drop-lng label").click(function (t) {
			t.preventDefault(), localStorage.setItem("lng", $(this).attr("data-lng")), location.reload(!0)
		})
	}), $("#footer").load("footer.html", function (t, e, i) {
		$('#drop-lng [data-lng="' + localStorage.getItem("lng") + '"]').addClass("xpto active"), $("#drop-lng label").click(function (t) {
			t.preventDefault(), localStorage.setItem("lng", $(this).attr("data-lng")), location.reload(!0)
		})
	})
}

function switching() {
	$(window).on("load", function () {
		var t = $("#run-switch"),
			e = $(".price-content .period", ".price-container");
		t.on("click", function () {
			if ($(".mo", this).toggleClass("active"), $(".an", this).toggleClass("active"), $(".month", this).toggleClass("active"), $(".switch", this).toggleClass("on"), $(".year", this).toggleClass("active"), e.hasClass("annually")) {
				e.text("month");
				for (var t = 0; t <= 2; t++) $(".price-container:eq(" + t + ") .value").text(parseFloat(Number($(".price-container:eq(" + t + ") .value").text()) / 12).toFixed(2))
			} else {
				e.text("year");
				for (t = 0; t <= 2; t++) $(".price-container:eq(" + t + ") .value").text(parseFloat(12 * Number($(".price-container:eq(" + t + ") .value").text())).toFixed(2))
			}
			e.toggleClass("annually")
		})
	})
}

function openNav() {
	document.getElementById("myNav").style.display = "block"
}

function closeNav() {
	document.getElementById("myNav").style.display = "none"
}

function display() {
	$("#showall").on("click", function () {
		$(".targetDiv").show()
	}), $(".showSingle").on("click", function () {
		$(".targetDiv").hide(), $("#div" + $(this).attr("target")).show()
	})
}

function active() {
	$(".heading a").on("click", function () {
		$(".heading a").removeClass("active"), $(this).addClass("active")
	})
}

function scrollgoto() {
	$(".gocheck").on("click", function (t) {
		var e = $(this.getAttribute("href"));
		e.length && (t.preventDefault(), $("html, body").stop().animate({
			scrollTop: e.offset().top
		}, 1e3))
	})
}

function popover() {
	$('[data-toggle="popover"]').popover()
}

function contactform() {
	$("#contactForm").on("submit", function (t) {
		$.ajax({
			type: "POST",
			url: "php/form-process.php",
			data: $(this).serialize(),
			success: function () {
				$("#msgSubmit").fadeIn(100).show()
			}
		}), t.preventDefault()
	})
}

function livechat() {
	var t, e;
	new Date;
	t = document.createElement("script"), e = document.getElementsByTagName("script")[0], t.async = !0, t.src = "https://embed.tawk.to/58127f62c7829d0cd36c88a9/default", t.charset = "UTF-8", t.setAttribute("crossorigin", "*"), e.parentNode.insertBefore(t, e)
}

function isotope() {
	$(window).on("load", function () {
		var e, i = $(".featured").isotope({
				itemSelector: ".isotope-item",
				masonry: {
					columnWidth: ".isotope-item"
				},
				getSortData: {
					selectedCategory: function (t) {
						return $(t).hasClass(e) ? 0 : 1
					}
				}
			}),
			n = $(".featured").find(".featured-items");
		$(".sort-button-group").on("click", ".button", function () {
			if ("all" === (e = $(this).attr("data-category"))) return i.isotope({
				sortBy: "original-order"
			}), void n.css({
				opacity: 1
			});
			var t = "." + e;
			n.filter(t).css({
				opacity: 1
			}), n.not(t).css({
				opacity: 0
			}), i.isotope("updateSortData"), i.isotope({
				sortBy: "selectedCategory"
			})
		}), $(".button-group").each(function (t, e) {
			var i = $(e);
			i.on("click", "li", function () {
				i.find(".active").removeClass("active"), $(this).addClass("active")
			})
		})
	})
}

function owldemo() {
	$(".owl-carousel").owlCarousel({
		onInitialized: function (t) {
			$(".active .owl-video-play-icon").trigger("click")
		},
		nav: !1,
		singleItem: !0,
		autoHeight: !0,
		dots: !0,
		center: !0,
		margin: 0,
		padding: 0,
		animateOut: "fadeOut",
		items: 1,
		autoPlay: 5500,
		stopOnHover: !0,
		center: !0,
		navigation: !1,
		pagination: !1,
		goToFirstSpeed: 1300,
		singleItem: !0,
		autoHeight: !0,
		responsive: !0,
		responsiveRefreshRate: 200,
		responsiveBaseWidth: window,
		video: !0,
		autoplay: !0,
		autoplayTimeout: 9e3,
		autoplayHoverPause: !0,
		navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		responsive: {
			0: {
				items: 1
			}
		}
	})
}

function backtotop() {
	var t = $(".cd-top");
	$(window).scroll(function () {
		300 < $(this).scrollTop() ? t.addClass("cd-is-visible") : t.removeClass("cd-is-visible cd-fade-out"), 1200 < $(this).scrollTop() && t.addClass("cd-fade-out")
	}), t.on("click", function (t) {
		t.preventDefault(), $("body,html").animate({
			scrollTop: 0
		}, 700)
	})
}

function loader() {
	$(window).on("load", function () {
		$("#spinner-area").fadeOut("slow")
	})
}

function listenSlick() {
	$(".slick").on("unslick", function () {
		var t = setInterval(function () {
			590 < $(window).width() && (clearInterval(t), slick())
		}, 100)
	})
}

function slick() {
	$("#slider").slick({
		centerMode: !0,
		centerPadding: "200px",
		slidesToShow: 3,
		infinite: !0,
		arrows: !0,
		responsive: [{
			breakpoint: 1200,
			settings: {
				arrows: !0,
				centerMode: !0,
				centerPadding: "100px",
				slidesToShow: 3
			}
		}, {
			breakpoint: 991,
			settings: {
				arrows: !0,
				centerMode: !0,
				centerPadding: "200px",
				slidesToShow: 1
			}
		}, {
			breakpoint: 768,
			settings: {
				arrows: !0,
				centerMode: !0,
				centerPadding: "150px",
				slidesToShow: 1
			}
		}, {
			breakpoint: 590,
			settings: "unslick"
		}]
	})
}

function popup() {
	$(".popup-with-form").length && $(".popup-with-form").magnificPopup({
		type: "image",
		preloader: !0,
		focus: "#name",
		closeOnBgClick: !0,
		callbacks: {
			beforeOpen: function () {
				$(window).width() < 700 ? this.st.focus = !1 : this.st.focus = "#name"
			}
		}
	}), $(".gallery-item").magnificPopup({
		delegate: "a",
		type: "image",
		tLoading: "Loading image #%curr%...",
		mainClass: "mfp-img-mobile",
		gallery: {
			enabled: !0,
			navigateByImgClick: !0,
			preload: [0, 1]
		}
	}), $(".image-link").magnificPopup({
		type: "image",
		mainClass: "mfp-with-zoom",
		gallery: {
			enabled: !0,
			navigateByImgClick: !0,
			preload: [0, 1]
		},
		image: {
			titleSrc: "title"
		},
		zoom: {
			enabled: !0,
			navigateByImgClick: !0,
			duration: 300,
			easing: "ease-in-out",
			opener: function (t) {
				return t.is("img") ? t : t.find("img")
			}
		}
	})
}

function misc() {
	$("#myModal").on("shown.bs.modal", function () {
		$("#myInput").focus()
	})
}
document.addEventListener("DOMContentLoaded", function () {
		"use strict";
		loadWindowSettings(), loadWindowEvents(), loadMenu(), loadTabs(), izotope(), popup(), accordion(), loadTooltips(), initSliderUI(), loadCountdown(), speacialCount(), loadSkills(), misc(), slick(), listenSlick(), loader(), backtotop(), owldemo(), isotope(), livechat(), contactform(), popover(), scrollgoto(), active(), display(), switching(), headerfooter(), translate(), switchVisible()
	}), $("img.svg").each(function () {
		var i = jQuery(this),
			n = i.prop("attributes"),
			t = i.attr("src");
		$.get(t, function (t) {
			var e = $(t).find("svg");
			e = e.removeAttr("xmlns:a"), $.each(n, function () {
				e.attr(this.name, this.value)
			}), i.replaceWith(e)
		})
	}),
	function (t) {
		t(document).ready(function () {
			t(".styleswitch").click(function () {
				return function (e) {
					t("link[rel*=style][title]").each(function (t) {
						this.disabled = !0, this.getAttribute("title") == e && (this.disabled = !1)
					})
				}(this.getAttribute("data-rel")), !1
			})
		})
	}(jQuery), jQuery(function (t) {
		var e = window.location.href;
		t("#menu ul li a").each(function () {
			this.href === e && (t(this).addClass("active"), t(this).parent().parent().closest("li").addClass("active2"), t(".active2 a:first").addClass("active"))
		})
	}), $(".mobile .menu-item").on("click", function () {
		"none" === $(".sub-menu", this).css("display") ? $(".sub-menu", this).css("display", "block") : $(".sub-menu", this).css("display", "none")
	}), $(document).ready(function () {
		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			disableOn: 700,
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: !1,
			fixedContentPos: !1
		})
	});
var mySwiper = new Swiper(".swiper-container", {
	direction: "horizontal",
	loop: !0,
	autoHeight: !0,
	grabCursor: !0,
	centeredSlides: !0,
	autoplay: {
		delay: 5e3,
		speed: 1e3,
		disableOnInteraction: !1
	},
	pagination: {
		el: ".swiper-pagination"
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	scrollbar: {
		el: ".swiper-scrollbar"
	}
});

function loadTooltips() {
	$("#element").tooltip("show"), $(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
}

function initSliderUI() {
	var d = 0;
	$(".slider-ui").length && $(".slider-ui").each(function () {
		var t = $(this),
			e = t.find(".slider-line"),
			i = t.find(".slider-inp"),
			n = "sliderUI" + d,
			o = "inputUI" + d,
			a = parseInt(i.attr("data-start")),
			s = parseInt(i.attr("data-count-step"));
		e.attr("id", n), i.attr("id", o), d++, s = s || 300;
		var l = document.getElementById(n),
			c = document.getElementById(o);

		function r() {
			return {
				VPS1: {
					name: "Service A",
					disk: "100GB",
					ram: "1GB",
					cpu: "1 Core",
					bandwith: "100GB",
					setup: "8€",
					ip: "2 IPs",
					price: "99.09",
					priceon: "8.26",
					orderlink: "http://inebur.com/whmcs/cart.php?a=confproduct&i=0"
				},
				VPS2: {
					name: "Service B",
					disk: "200GB",
					ram: "4GB",
					cpu: "2 Core",
					setup: "15€",
					ip: "4 IPs",
					bandwith: "500GB",
					price: "155.00",
					priceon: "12.92",
					orderlink: "http://inebur.com/whmcs/cart.php?a=confproduct&i=1"
				},
				VPS3: {
					name: "Service C",
					disk: "300GB",
					ram: "8GB",
					cpu: "4 Core",
					setup: "Free",
					ip: "8 IPs",
					bandwith: "2TB",
					price: "299.99",
					priceon: "25.00",
					orderlink: "http://inebur.com/whmcs/cart.php?a=confproduct&i=2"
				},
				VPS4: {
					name: "Service D",
					disk: "400GB",
					ram: "12GB",
					cpu: "4 Core",
					setup: "Free",
					ip: "8 IPs",
					bandwith: "Unlimited",
					price: "395.22",
					priceon: "32.94",
					orderlink: "http://inebur.com/whmcs/cart.php?a=confproduct&i=3"
				},
				VPS5: {
					name: "Service E",
					disk: "500GB",
					ram: "16GB",
					cpu: "8 Core",
					setup: "Free",
					ip: "12 IPs",
					bandwith: "Unlimited",
					price: "545.00",
					priceon: "45.42",
					orderlink: "http://inebur.com/whmcs/cart.php?a=confproduct&i=4"
				}
			}
		}
		noUiSlider.create(l, {
			start: a || 1,
			step: 1,
			connect: "lower",
			tooltips: !0,
			format: {
				to: function (t) {
					return "VPS" + t
				},
				from: function (t) {
					return t
				}
			},
			range: {
				min: 1,
				max: s
			},
			pips: {
				mode: "values",
				values: [1, 2, 3, 4, 5],
				density: 5,
				stepped: !0
			}
		}), l.noUiSlider.on("change", function (t, e, i, n) {
			$(this.target).closest(".sidebar").find(".circle").attr("data-percent", parseInt(i) / s * 100)
		}), l.noUiSlider.on("update", function (t, e) {
			! function (t) {
				var e = r();
				$("#disk-val").html(e[t].disk), $("#cpu-val").html(e[t].cpu), $("#ram-val").html(e[t].ram), $("#setup-val").html(e[t].setup), $("#ip-val").html(e[t].ip), $("#bw-val").html(e[t].bandwith), $("#price-val").html(e[t].price), $("#priceon-val").html(e[t].priceon), $("#orderlink-val").html(e[t].orderlink)
			}(t[e]), c.value = t[e],
				function (t) {
					var e = r();
					$("#orderlink").attr("href", e[t].orderlink)
				}(t[e])
		}), c.addEventListener("change", function () {
			l.noUiSlider.set([null, this.value])
		}), c.addEventListener("keydown", function (t) {
			var e = Number(l.noUiSlider.get()),
				i = l.noUiSlider.steps();
			switch (i = i[0], t.which) {
				case 13:
					l.noUiSlider.set(this.value);
					break;
				case 38:
					l.noUiSlider.set(e + i[1]);
					break;
				case 40:
					l.noUiSlider.set(e - i[0])
			}
		})
	})
}

function loadMenu() {
	$(".nav-menu .menu-toggle").on("click", function () {
		$(this).closest(".menu-wrap").toggleClass("active")
	}), $(".btn-scroll").on("click", function () {
		return $("html, body").animate({
			scrollTop: $($.attr(this, "href")).offset().top - 10
		}, 500), !1
	})
}

function izotope() {
	if ($(".izotope-container").length) {
		var e = $(".izotope-container");
		e.isotope({
			itemSelector: ".item",
			layoutMode: "masonry",
			masonry: {
				columnWidth: ".item"
			}
		})
	}
	$("#filters").on("click", ".but", function () {
		$(".izotope-container").each(function () {
			$(this).find(".item").removeClass("animated")
		}), $("#filters .but").removeClass("activbut"), $(this).addClass("activbut");
		var t = $(this).attr("data-filter");
		e.isotope({
			filter: t
		})
	})
}

function loadTabs() {
	$(".tabs-header").on("click", "li:not(.active)", function () {
		var t = $(this).index();
		$(this).addClass("active").siblings().removeClass("active"), $(this).closest(".tabs").find(".tabs-item").removeClass("active").eq(t).addClass("active")
	})
}

function accordion() {
	$(".accordion").on("click", ".panel-title", function () {
		var t = $(this),
			e = t.parent();
		e.find(".panel-collapse").slideToggle("200"), t.toggleClass("active"), e.siblings().find(".panel-collapse").slideUp("200"), e.siblings().find(".panel-title").removeClass("active")
	}), accordHeight()
}

function accordHeight() {
	$(".accordion.faq .square").each(function () {
		$(this).css({
			height: $(this).parent().outerHeight(!0),
			"padding-top": $(this).parent().outerHeight(!0) / 2 - 20
		})
	})
}

function loadSkills() {
	$(".circle").not(".animated").each(function () {
		$(window).scrollTop() >= $(this).offset().top - .7 * $(window).height() && $(this).addClass("animated").circliful()
	})
}

function selectInit() {
	$(".selectpicker").each(function () {
		var t = $(this),
			e = t.attr("data-class");
		t.selectpicker({
			style: "cst-select " + e
		})
	})
}

function loadWindowEvents() {
	$(window).on("resize", function () {
		offheight(), accordHeight()
	}), $(window).on("scroll", function () {
		loadSkills()
	}), $(window).on("scroll", function () {
		100 <= $(window).scrollTop() ? $(".menu-wrap").addClass("fixed") : $(".menu-wrap").removeClass("fixed")
	})
}

function loadCountdown() {
	$("#clock").countdown("2020/10/24 00:00", function (t) {
		$(this).html(t.strftime('<div>%w <span class="title">Weeks</span></div><div>%d <span class="title">days</span></div><div>%H <span class="title">hours</span></div><div>%S <span class="title">seconds</span></div>'))
	})
}

function speacialCount() {
	$("#specialclock").countdown("2019/12/2", function (t) {
		$(this).html(t.strftime("Time left: [ %D days %H:%M:%S ]"))
	})
}

function offheight() {
	if (750 < $(window).width()) {
		var t = $(".offers").outerHeight(!0);
		$(".offers.light").css("height", t + 1)
	}
}

function loadWindowSettings() {
	offheight(), $(window).width() < 750 && $(".nav-menu .main-menu > .menu-item-has-children > a").on("click", function () {
		if ("#" !== $(this).attr("href")) return $(this).next().slideToggle(0), !1
	})
}

function updateSlidesPerView(t, e, i, n) {
	var o = $(window).width();
	$(window).height();
	return 1199 < o ? n : 991 < o ? i : 700 < o ? e : t
}
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});