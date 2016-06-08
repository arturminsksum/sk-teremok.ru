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