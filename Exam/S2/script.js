// 51_Smith

$(window).scroll(()=>{
    let scrollPercent = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
    $('.progressBar').css('width', scrollPercent + '%');
});

//Fixes the resizing breaking scroll bar
$(window).resize(()=>{
    let scrollPercent = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
    $('.progressBar').css('width', scrollPercent + '%');
});