$(document).ready(function() {
    $('.project-slider').liquidCarousel({
        height: 400, //the height of the list
        duration: 100, //the duration of the animation
        hidearrows: true //hide arrows if all of the list items are visible
    });

    $('.watched-wrap').liquidCarousel({
        height: 150, //the height of the list
        duration: 100, //the duration of the animation
        hidearrows: true //hide arrows if all of the list items are visible
    });

    (function() {
        if ($('.sidebar').outerHeight() < $(".content-right").outerHeight()) {
            $('.sidebar').outerHeight($(".content-right").outerHeight());
        }
    })();

    $(".pics-main-img,.figure-link,.reviews-img").fancybox();
    $(".btn-call,.btn-consult,.btn-credit").fancybox({
        beforeLoad: function() {
            $('.form-danger').text('');
        }
    });
});

// range Slider

var snapSlider = document.getElementById('slider-snap');

var inputNumberLower = document.getElementById('input-number-lower');
var inputNumberUpper = document.getElementById('input-number-upper');

if (inputNumberLower && inputNumberUpper) {

    noUiSlider.create(snapSlider, {
        start: [inputNumberLower.value, inputNumberUpper.value],
        step: 1000,
        margin: 10000,
        connect: true,
        range: {
            'min': 5000,
            'max': 100000
        }
    });

    var snapValues = [
        document.getElementById('slider-snap-value-lower'),
        document.getElementById('slider-snap-value-upper')
    ];

    snapSlider.noUiSlider.on('update', function(values, handle) {
        snapValues[handle].innerHTML = Math.round(values[handle]);
    });


    snapSlider.noUiSlider.on('update', function(values, handle) {

        var value = values[handle];

        if (handle) {
            inputNumberUpper.value = value;
        } else {
            inputNumberLower.value = value;
        }
    });

    inputNumberLower.addEventListener('change', function() {
        snapSlider.noUiSlider.set([this.value, null]);
    });

    inputNumberUpper.addEventListener('change', function() {
        snapSlider.noUiSlider.set([null, this.value]);
    });

}

$('.house .previous').on('click', function() {
    $('.house .project-slider').liquidCarousel('previous');
});
$('.house .next').on('click', function() {
    $('.house .project-slider').liquidCarousel('next');
});

$('.bathhouse .previous').on('click', function() {
    $('.bathhouse .project-slider').liquidCarousel('previous');
});
$('.bathhouse .next').on('click', function() {
    $('.bathhouse .project-slider').liquidCarousel('next');
});



$('textarea, input').on('focus', function() {
    placeholderValue = $(this).attr('placeholder');
    $(this).attr('placeholder', '');
}).on('blur', function() {
    $(this).attr('placeholder', placeholderValue);
});

$('#hmt').on('click', function() {
    $('.h-nav').fadeToggle();
});
$('.c-list').on('click', function() {
    $('.c-list-menu').fadeToggle();
});

$('.slider-wrap').slick({
    dots: true,
    autoplay: true,
    infinite: true
});

$('.filter .btn-more').on('click', function() {
    $('.filter-bottom, .filter-hide').fadeToggle();
    // var filterHeight = $(".filter-top").outerHeight();
    //     $('.filter-top .filter-block').outerHeight(filterHeight);
});

$('.proj .slider,.char-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 480,
        settings: {
            slidesToShow: 2
        }
    }]
});

function changeImg(image) {
    var that = image;
    var mainImg = that.data('main');
    var bigImg = that.data('big');
    $('.pics-main-img .img').attr('src', mainImg);
    $('.pics-main-img').attr('href', bigImg);
}
$('.slider-img').on('click', function() {
    changeImg($(this));
});

// validate forms

function validateName(form) {
    var _form = form;
    _form.name = _form.find('[name="form[user_name]"]');
    _form.dangerName = _form.find('.form-danger-name');
    _form.validateName = function() {
        if (_form.name.val() === '') {
            _form.dangerName.text('Введите имя*');
        } else
        if (!/[А-Яа-яЁёa-zA-Z`\s]{1,100}/.test(_form.name.val())) {
            _form.dangerName.text('Правильно введите имя');
        }
    };
    _form.validateName();
}

function validatePhone(form) {
    var _form = form;
    _form.phone = _form.find('[name="form[user_phone]"]');
    _form.dangerPhone = _form.find('.form-danger-phone');
    _form.validatePhone = function() {
        if (_form.phone.val() === '') {
            _form.dangerPhone.text('Введите телефон*');
        } else
        if (!/[0-9()-\s+]{3,20}/.test(_form.phone.val())) {
            _form.dangerPhone.text('Правильно введите телефон');
        }
    };
    _form.validatePhone();
}

function validateEmail(form) {
    var _form = form;
    _form.email = _form.find('[name="form[user_email]"]');
    _form.dangerEmail = _form.find('.form-danger-email');
    _form.validateEmail = function() {
        if (_form.email.val() === '') {
            _form.dangerEmail.text('Введите e-mail*');
        } else
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,8}$/.test(_form.email.val())) {
            _form.dangerEmail.text('Правильно введите e-mail');
        }
    };
    _form.validateEmail();
}

function validateComment(form) {
    var _form = form;
    _form.comment = _form.find('[name="form[user_comment]"]');
    _form.dangerComment = _form.find('.form-danger-comment');
    _form.validateComment = function() {
        if (_form.comment.val() === '') {
            _form.dangerComment.text('Введите cообщение*');
        }
    };
    _form.validateComment();
}

function validateCallback(form) {
    var _form = form;
    _form.find('.form-danger').text('');

    validateName(_form);
    validatePhone(_form);

}

function validateFeedback(form) {
    var _form = form;
    _form.find('.form-danger').text('');

    validateName(_form);
    validatePhone(_form);
    validateEmail(_form);
    validateComment(_form);

}

$('.form-callback').on('submit', function() {
    validateCallback($(this));
    if (!!($(this).find('.form-danger').text())) {
        return false;
    }
    $.fancybox.close({
        href: '#callback'
    });
    $(this)[0].reset();
    $.fancybox.open({
        href: '#success'
    });
    return false;
});

$('.form-feedback').on('submit', function() {
    validateFeedback($(this));
    if (!!($(this).find('.form-danger').text())) {
        return false;
    }
    $.fancybox.close({
        href: '#feedback'
    });
    $(this)[0].reset();
    $.fancybox.open({
        href: '#success'
    });
    return false;
});
$('.reviews-section .btn-see').on('click', function() {
    var that = $(this);
    that.parents('.reviews-section').find('.reviews-hide').fadeToggle('slow');
});

// function init() {
    // var myMap = new ymaps.Map("map", {
    //     center: [55.76, 37.64],
    //     zoom: 10,
    //     controls: ['smallMapDefaultSet']
    // }, {
    //     searchControlProvider: 'yandex#search'
    // });

    // buildCollection = new ymaps.GeoObjectCollection(null, {
    //         // Опции.
    //         // Необходимо указать данный тип макета.
    //         iconLayout: 'default#image',
    //         // Своё изображение иконки метки.
    //         iconImageHref: 'img/icon-build.png',
    //         // Размеры метки.
    //         iconImageSize: [53, 77],
    //         // Смещение левого верхнего угла иконки относительно
    //         // её "ножки" (точки привязки).
    //         iconImageOffset: [-3, -77],
    // }),
    // readyCollection = new ymaps.GeoObjectCollection(null,
    //  {
    //         // Опции.
    //         // Необходимо указать данный тип макета.
    //         iconLayout: 'default#image',
    //         // Своё изображение иконки метки.
    //         iconImageHref: 'img/icon-ready.png',
    //         // Размеры метки.
    //         iconImageSize: [53, 77],
    //         // Смещение левого верхнего угла иконки относительно
    //         // её "ножки" (точки привязки).
    //         iconImageOffset: [-3, -77]
    // }),
    // buildCoords = [
    //     [55.73, 37.75],
    //     [55.81, 37.75]
    // ],
    // readyCoords = [
    //     [55.73, 37.65],
    //     [55.81, 37.65]
    // ];

    // for (var i = 0, l = buildCoords.length; i < l; i++) {
    //     buildCollection.add(new ymaps.Placemark(buildCoords[i]));
    // }
    // for (var i = 0, l = readyCoords.length; i < l; i++) {
    //     readyCollection.add(new ymaps.Placemark(readyCoords[i]));
    // }

    // myMap.geoObjects.add(buildCollection).add(readyCollection);

// }
// if (!(typeof ymaps === 'undefined')) {
//     ymaps.ready(init);
// }

function init () {

var dataProjects = {
    type: "FeatureCollection",
    features: [
        {
        type: "Feature", 
        id: 0,
        geometry: {
            type: "Point", 
            coordinates: [55.73, 37.75]},
             properties: {
                balloonContentBody: '<div class="balloon"><figure class="figure-item"><img src="img/side-banner.jpg" alt="К7902" class="img figure-img"><figurecaption class="figure-caption"><p class="figure-name">Перейти в галерею</p><a href="/proekty-domov/project/k7902/" class="figure-link"></a></figurecaption></figure><a href="/proekty-domov/project/k7902/" class="balloon-title"><strong>К7902</strong></a><p class="balloon-adress"><strong>Адрес: </strong><span>Московская область, Чеховский район, сельское поселение Дубна СНТ «Ромашкино» участок № 805</span></p><p class="balloon-btn"><a href="" class="btn btn-yellow btn-credit">Хочу такой дом</a></p></div>', 
                hintContent: "К7902"
            },
        options: {
            iconImageHref: 'img/icon-build.png',
            }     
        },
        {
        type: "Feature", 
        id: 1,
        geometry: {
            type: "Point", 
            coordinates: [55.81, 37.75]},
             properties: {
                balloonContentBody: '<div class="balloon"><figure class="figure-item"><img src="img/side-banner.jpg" alt="К7902" class="img figure-img"><figurecaption class="figure-caption"><p class="figure-name">Перейти в галерею</p><a href="/proekty-domov/project/k7902/" class="figure-link"></a></figurecaption></figure><a href="/proekty-domov/project/k7902/" class="balloon-title"><strong>К7902</strong></a><p class="balloon-adress"><strong>Адрес: </strong><span>Московская область, Чеховский район, сельское поселение Дубна СНТ «Ромашкино» участок № 805</span></p><p class="balloon-btn"><a href="" class="btn btn-yellow btn-credit">Хочу такой дом</a></p></div>',  
                hintContent: "К7902"
            },
        options: {
            iconImageHref: 'img/icon-ready.png',
            }     
        }        
    ]
};

    var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 10,
            controls: ['smallMapDefaultSet']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
        });

    // Чтобы задать опции одиночным объектам и кластерам,
    // обратимся к дочерним коллекциям ObjectManager.
    objectManager.objects.options.set({
      // Опции.
      // Необходимо указать данный тип макета.
       iconLayout: 'default#image',
      // Размеры метки.
       iconImageSize: [53, 77],
       // Смещение левого верхнего угла иконки относительно
       // её "ножки" (точки привязки).
       iconImageOffset: [-3, -77]        
    });
    myMap.geoObjects.add(objectManager);
    objectManager.add(dataProjects);
}

if (!(typeof ymaps === 'undefined')) {
    ymaps.ready(init);
}