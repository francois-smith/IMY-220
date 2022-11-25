// 51_Smith

$(document).ready(()=>{
    $('body').scrollspy({target: ".site-header"});
});

$(".site-header nav a").click((e)=> { 
    let href = $(e.target).attr('href');
    let offsetTop = href === "#" ? 0 : $(href).offset().top - 180;
    console.log(offsetTop);
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
});

const calulatePercentage = () => {
    let scrollPercent = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
    $('.progressBar').css('width', scrollPercent + '%');
}

$(window).resize(calulatePercentage).scroll(calulatePercentage);