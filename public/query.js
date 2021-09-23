$('.menuBtn').click(function () {
    if ($('.sideBar').css('display') == 'none') {
        $('.sideBar').css('display', 'block')
        $('.menu').css('width', '84%')
        $('.menuBtn').css('display', 'none')
        $('.menuCloseBtn').css('display', 'block')
    }
})

$('.pinBtn').click(function () {
    if ($('.sideBar').css('display') == 'none') {
        $('.sideBar').css('display', 'block')
        $('.menu').css('width', '84%')
        $('.menuBtn').css('display', 'none')
        $('.menuCloseBtn').css('display', 'block')
    }
})


$('.menuCloseBtn').click(function () {
    if ($('.sideBar').css('display') == 'block') {
        $('.sideBar').css('display', 'none')
        $('.menu').css('width', '8%')
        $('.menu').css('padding', '2.7% 3%')
        $('.menuBtn').css('display', 'block')
        $('.menuCloseBtn').css('display', 'none')
    }
})


$('.searchArea__img').click(function () {
    if ($('.searchArea').css('display') == 'none') {
        $('.searchArea').css('display', 'block')
        $('.searchArea__img').css('display', 'none')
        $('.searchCloseBtn').css('display', 'block')
    }
})

$('.searchCloseBtn').click(function () {
    if ($('.searchArea').css('display') == 'block') {
        $('.searchArea').css('display', 'none')
        $('.searchArea__img').css('display', 'block')
        $('.searchCloseBtn').css('display', 'none')
    }
})




