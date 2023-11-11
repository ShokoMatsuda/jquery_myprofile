$(function() {
    // カルーセル
    $('.slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true,
    });

    // ホバー
    $('.link_hover').hover(
        function() {
            $(this).fadeTo('slow', 0.5);
        },
        function() {
            $(this).fadeTo('slow', 1.0);
        }
    );

    // スクロール時のtopに戻るボタン
    $(window).on('scroll', function(){
        // スクロール量を取得する
        const scrollValue = $(this).scrollTop();

        // スクロール量が100px以上の時のボタンを表示する
        if (scrollValue >= 100) {
             $('#back-btn').css('display', 'inline');
         } else {
            $('#back-btn').css('display', 'none');
         }
    });

     // ページ内リンクがクリックされた時にスクロールをなめらかにする
     $('a[href^="#"]').on('click', function(){

         const speed = 500;
         const href = $(this).attr("href");
         let target;
         if (href == '#') {
            target = $('html');
         } else {
            target = $(href);
        }
         const position = target.offset().top;
         $("html, body").animate({'scrollTop':position}, speed, 'swing');
        //   return false;
         // href属性の値を取得する
         //  const result = $('a').attr('href');
         //  console.log(result);
      });

    //   スクロールした時にフェードインさせる
      $(window).scroll(function () {
          const scrollAmount = $(window).scrollTop();
          const windowHeight = $(window).height();
          $('section').each(function(){
              const position = $(this).offset().top;
              if (scrollAmount > position - windowHeight + 100){
                  $(this).addClass('fade-in');
              }
         });
      });

    // モーダル
      $('.works img').on('click', function(){
          const imgSrc = $(this).attr('src');
          $('.big-img').attr('src', imgSrc);
          $('.modal').fadeIn();
          return false
      });
});