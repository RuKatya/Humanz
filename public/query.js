//Open menu on phone
$('.menuBtn').click(function () {
    if ($('.sideBar').css('display') == 'none') {
        $('.sideBar').css('display', 'block')
        $('.menu').css('width', '84%')
        $('.menuBtn').css('display', 'none')
        $('.menuCloseBtn').css('display', 'block')
    }
})

//Close menu on phone
$('.menuCloseBtn').click(function () {
    if ($('.sideBar').css('display') == 'block') {
        $('.sideBar').css('display', 'none')
        $('.menu').css('width', '8%')
        $('.menu').css('padding', '2.7% 3%')
        $('.menuBtn').css('display', 'block')
        $('.menuCloseBtn').css('display', 'none')
    }
})

//Open menu on phone for show the geolocation information
$('.pinBtn').click(function () {
    if ($('.sideBar').css('display') == 'none') {
        $('.sideBar').css('display', 'block')
        $('.menu').css('width', '84%')
        $('.menuBtn').css('display', 'none')
        $('.menuCloseBtn').css('display', 'block')
    }
})

//Open search area
$('.searchArea__img').click(function () {
    if ($('.searchArea').css('display') == 'none') {
        $('.searchArea').css('display', 'block')
        $('.searchArea__img').css('display', 'none')
        $('.searchCloseBtn').css('display', 'block')
    }
})

//Close search area
$('.searchCloseBtn').click(function () {
    if ($('.searchArea').css('display') == 'block') {
        $('.searchArea').css('display', 'none')
        $('.searchArea__img').css('display', 'block')
        $('.searchCloseBtn').css('display', 'none')
    }
})




