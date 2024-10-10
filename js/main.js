$(document).ready(function () {
		$(".tell").mask("+7 (999) 999-9999");
		$('.huk').click(function() {
			$(this).hide(); 
		});
        $(".btn_slide, .btn_present").click(function () {
            $.fancybox({
				href : "#zakaz",
				'padding' : '0'
			});
        });
		$("#text1").click(function () {
            $.fancybox({
				href : "#delivery_text",
				'padding' : '0'
			});
        });
		$("#read_m1").click(function () {
            $.fancybox({
				href : "#read_more1",
				'padding' : '0'
			});
        });
		$("#read_m2").click(function () {
            $.fancybox({
				href : "#read_more2",
				'padding' : '0'
			});
        });
		$("#read_m3").click(function () {
            $.fancybox({
				href : "#read_more3",
				'padding' : '0'
			});
        });
		$("#text2").click(function () {
            $.fancybox({
				href : "#garant_text",
				'padding' : '0'
			});
        });
		$("#text3").click(function () {
            $.fancybox({
				href : "#about_company",
				'padding' : '0'
			});
        });
		$(".open_vid").click(function () {
            $.fancybox({
				href : "#gallery_video",
				'padding' : '0'
			});
        });
        $('.bxslider1').bxSlider({
            pagerCustom: '.pager',
            mode: 'fade',
            auto: true,
            pause: 6000,
            responsive: true
        });
        $('.bxslider2').bxSlider({
            pagerCustom: '#bx-pager',
            auto: true,
            pause: 6000,
            responsive: true
        });
		$(".form").submit(function () {
			if ($(this).find('input[name="phone"]').val() == "") {
				alert("Заполните телефон");
				return false;
			} else {
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: $(this).serialize()
				}).done(function () {
					$(this).find("input").val("");
					alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
					$(".form").trigger("reset");
				});
			}

        return false;
		});
            $('.colors .select').click(function(){
             $('.samsung_s6').removeClass('silver gold gray white green black silver');
             $(this).parent().find('.select').removeClass('act');
             });

             $('.colors .select.silver').click(function(){
             $('.samsung_s6').addClass('silver');
             $(this).parent().find('.select.silver').addClass('act');
             comment = 'Цвет: Серый';
             });

             $('.colors .select.gold').click(function(){
             $('.samsung_s6').addClass('gold');
             $(this).parent().find('.select.gold').addClass('act');
             comment = 'Цвет: Золотой';
             });

             $('.colors .select.gray').click(function(){
             $('.samsung_s6').addClass('gray');
             $(this).parent().find('.select.gray').addClass('act');
             comment = 'Цвет: Серый';
             });

             $('.colors .select.black').click(function(){
             $('.samsung_s6').addClass('black');
             $(this).parent().find('.select.black').addClass('act');
             comment = 'Цвет: Черный';
             });

              $('.colors .select.green').click(function(){
             $('.samsung_s6').addClass('green');
             $(this).parent().find('.select.green').addClass('act');
             comment = 'Цвет: Зеленый';
             });

                $('.colors .select.white').click(function(){
             $('.samsung_s6').addClass('white');
             $(this).parent().find('.select.white').addClass('act');
             comment = 'Цвет: Белый';
             });
			 
			 
			 
			 
			 $('.colors .select').click(function(){
             $('.samsung_s6_ed').removeClass('silver gold gray white green black silver');
             $(this).parent().find('.select').removeClass('act');
             });

             $('.colors .select.silver').click(function(){
             $('.samsung_s6_ed').addClass('silver');
             $(this).parent().find('.select.silver').addClass('act');
             comment = 'Цвет: Серый';
             });

             $('.colors .select.gold').click(function(){
             $('.samsung_s6_ed').addClass('gold');
             $(this).parent().find('.select.gold').addClass('act');
             comment = 'Цвет: Золотой';
             });

             $('.colors .select.gray').click(function(){
             $('.samsung_s6_ed').addClass('gray');
             $(this).parent().find('.select.gray').addClass('act');
             comment = 'Цвет: Серый';
             });

             $('.colors .select.black').click(function(){
             $('.samsung_s6_ed').addClass('black');
             $(this).parent().find('.select.black').addClass('act');
             comment = 'Цвет: Черный';
             });

              $('.colors .select.green').click(function(){
             $('.samsung_s6_ed').addClass('green');
             $(this).parent().find('.select.green').addClass('act');
             comment = 'Цвет: Зеленый';
             });

                $('.colors .select.white').click(function(){
             $('.samsung_s6_ed').addClass('white');
             $(this).parent().find('.select.white').addClass('act');
             comment = 'Цвет: Белый';
             });
			 
			 
			 
			 $('.colors .select').click(function(){
             $('.samsung_s7').removeClass('silver gold gray white green black silver');
             $(this).parent().find('.select').removeClass('act');
             });

             $('.colors .select.silver').click(function(){
             $('.samsung_s7').addClass('silver');
             $(this).parent().find('.select.silver').addClass('act');
             comment = 'Цвет: Серый';
             });

             $('.colors .select.gold').click(function(){
             $('.samsung_s7').addClass('gold');
             $(this).parent().find('.select.gold').addClass('act');
             comment = 'Цвет: Золотой';
             });

             $('.colors .select.gray').click(function(){
             $('.samsung_s7').addClass('gray');
             $(this).parent().find('.select.gray').addClass('act');
             comment = 'Цвет: Серый';
             });

             $('.colors .select.black').click(function(){
             $('.samsung_s7').addClass('black');
             $(this).parent().find('.select.black').addClass('act');
             comment = 'Цвет: Черный';
             });

              $('.colors .select.green').click(function(){
             $('.samsung_s7').addClass('green');
             $(this).parent().find('.select.green').addClass('act');
             comment = 'Цвет: Зеленый';
             });

                $('.colors .select.white').click(function(){
             $('.samsung_s7').addClass('white');
             $(this).parent().find('.select.white').addClass('act');
             comment = 'Цвет: Белый';
             });
			 
            

			
			
			$('.colors .select').click(function(){
             $('.samsung_s7_ed').removeClass('silver gold gray white green black silver');
             $(this).parent().find('.select').removeClass('act');
             });

             $('.colors .select.silver').click(function(){
             $('.samsung_s7_ed').addClass('silver');
             $(this).parent().find('.select.silver').addClass('act');
             comment = 'Цвет: Серый';
             });

             $('.colors .select.gold').click(function(){
             $('.samsung_s7_ed').addClass('gold');
             $(this).parent().find('.select.gold').addClass('act');
             comment = 'Цвет: Золотой';
             });

             $('.colors .select.gray').click(function(){
             $('.samsung_s7_ed').addClass('gray');
             $(this).parent().find('.select.gray').addClass('act');
             comment = 'Цвет: Серый';
             });

             $('.colors .select.black').click(function(){
             $('.samsung_s7_ed').addClass('black');
             $(this).parent().find('.select.black').addClass('act');
             comment = 'Цвет: Черный';
             });

              $('.colors .select.green').click(function(){
             $('.samsung_s7_ed').addClass('green');
             $(this).parent().find('.select.green').addClass('act');
             comment = 'Цвет: Зеленый';
             });

                $('.colors .select.white').click(function(){
             $('.samsung_s7_ed').addClass('white');
             $(this).parent().find('.select.white').addClass('act');
             comment = 'Цвет: Белый';
             });
			
    $('.block_item_del .item__1_del').hover(
    function(){
        $('.item__1_del').css('background-color','#fbe000');
        $('.item__2_del').css('background-color','#fff');
        $('.item__3_del').css('background-color','#fff');
    }
    );
    $('.block_item_del .item__2_del').hover(
        function(){
            $('.item__1_del').css('background-color','#fff');
            $('.item__2_del').css('background-color','#fbe000');
            $('.item__3_del').css('background-color','#fff');
            
        }
    );
    $('.block_item_del .item__3_del').hover(
        function(){
            $('.item__1_del').css('background-color','#fff');
            $('.item__2_del').css('background-color','#fff');
            $('.item__3_del').css('background-color','#fbe000');
        }
    );
	$('#tab1').on("click", function(){
        $('#content-tab1, #title-tab1').css('display','block');
        $('#content-tab2, #title-tab2').css('display','none');
        $('#content-tab3, #title-tab3').css('display','none');
		$('#content-tab4, #title-tab4').css('display','none');
		}
	);
	$('#tab2').on("click", function(){			
			$('#content-tab2, #title-tab2').css('display','block');
			$('#content-tab1, #title-tab1').css('display','none');
			$('#content-tab3, #title-tab3').css('display','none');
			$('#content-tab4, #title-tab4').css('display','none');
		}
	);
	$('#tab3').on("click", function(){
			$('#content-tab4, #title-tab4').css('display','none');
			$('#content-tab3, #title-tab3').css('display','block');
			$('#content-tab1, #title-tab1').css('display','none');
			$('#content-tab2, #title-tab2').css('display','none');
		}
	);
	$('#tab4').on("click", function(){
			$('#content-tab4, #title-tab4').css('display','block');
			$('#content-tab3, #title-tab3').css('display','none');
			$('#content-tab1, #title-tab1').css('display','none');
			$('#content-tab2, #title-tab2').css('display','none');
		}
	);
});