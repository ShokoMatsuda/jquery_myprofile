$(function() {
    // カルーセル
    $('.carousel').slick({
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
        // href属性の値を取得する
        const result = $('a').attr('href');
        console.log(result);
     });

});
