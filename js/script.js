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
});
