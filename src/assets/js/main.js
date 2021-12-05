"use strict";

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function select() {
  var btns = document.querySelectorAll('.select-btn');
  var items = document.querySelectorAll('.select');
  var dropdowns = document.querySelectorAll('.select-dropdown');
  var className = 'select--active';
  document.addEventListener('click', function (e) {
    if (e.target.closest('.select') === null) {
      dropdowns.forEach(function (i) {
        i.classList.remove('d-block');
        i.classList.remove('d-animate');
      });
      items.forEach(function (el) {
        return el.classList.remove(className);
      });
    }
  });
  btns.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var etClassList = event.target.closest('.select').classList;
      var is_on = etClassList.contains(className);
      var dropdown = item.closest('.select').querySelector('.select-dropdown');
      items.forEach(function (el) {
        return el.classList.remove(className);
      });
      dropdowns.forEach(function (i) {
        i.classList.remove('d-block');
        i.classList.remove('d-animate');
      });

      if (!is_on) {
        etClassList.add(className);
        dropdown.classList.add('d-block');
        setTimeout(function () {
          dropdown.classList.add('d-animate');
        });
      }
    });
  });
}

select();

function objectsTabs() {
  var main = document.querySelector('.objects');
  if (!main) return;
  var buttons = main.querySelectorAll('.objects-switch__link');
  var content = main.querySelectorAll('.objects__content');
  var sw = main.querySelector('.objects-switch');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      sw.classList.toggle('objects-switch--pos-2');
      buttons.forEach(function (i) {
        return i.classList.remove('objects-switch__link--selected');
      });
      content.forEach(function (i) {
        return i.classList.remove('objects__content--active');
      });
      btn.classList.add('objects-switch__link--selected');
      var tabs = btn.dataset.tabs;
      document.querySelector(".objects__content[data-tabs=\"".concat(tabs, "\"]")).classList.add('objects__content--active');
    });
  });
}

objectsTabs();

function showObjectInfo() {
  const cards = document.querySelectorAll('.objects-card');
  if (!cards) return;
  cards.forEach(function (card) {
    const back = card.querySelector('.close-project');
    card.addEventListener('click', function () {
      this.classList.add('objects-card--active');
      back.style.display = 'block'
    });
    back.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      card.classList.remove('objects-card--active');
      back.style.display = 'none'
    });
  });
}

showObjectInfo();

function showServiceInfo() {
  var items = document.querySelectorAll('.service-item');
  if (!items.length) return;
  items.forEach(function (item) {
    var button = item.querySelector('.service-item__head');
    var container = item.querySelector('.service-item__content');
    button.addEventListener('click', function () {
      button.classList.toggle('service-item__head--active');

      if (button.classList.contains('service-item__head--active')) {
        container.style.maxHeight = container.scrollHeight + 'px';
      } else {
        container.style.maxHeight = 0;
      }
    });
  });
}

showServiceInfo();

function quiz() {
  var btnNext = document.querySelector('.quiz-btn--next');
  var btnPrev = document.querySelector('.quiz-btn--prev');
  var steps = document.querySelectorAll('.quiz-step');
  var progressLine = document.querySelector('.quiz-progress__line span');
  var progressCount = document.querySelector('.quiz-progress__count span');
  var stepsLength = steps.length;
  progressCount.textContent = 100 / stepsLength;
  progressLine.style.width = 100 / stepsLength + '%';
  var count = 1;

  function changeStep(count) {
    steps.forEach(function (i) {
      i.classList.remove('d-block');
      i.classList.remove('d-animate');
    });
    var nextStep = document.querySelector(".quiz-step[data-step=\"".concat(count, "\"]"));
    nextStep.classList.add('d-block');
    setTimeout(function () {
      nextStep.classList.add('d-animate');
    });
    progressCount.textContent = 100 / stepsLength * count;
    progressLine.style.width = 100 / stepsLength * count + '%';
  }

  btnNext.addEventListener('click', function () {
    count++;
    if (count > stepsLength) count = stepsLength;
    changeStep(count);
  });
  btnPrev.addEventListener('click', function () {
    count--;
    if (count < 1) count = 1;
    changeStep(count);
  });
}

quiz();

function mobileMenu() {
  var openMenu = document.querySelector('.open-menu');
  var closeMenu = document.querySelector('.close-menu');
  var content = document.querySelector('.mobile-panel');
  openMenu.addEventListener('click', function (e) {
    e.preventDefault();
    show();
  });
  closeMenu.addEventListener('click', function (e) {
    e.preventDefault();
    show();
  });

  function show() {
    content.classList.toggle('mobile-panel--open');
    document.body.classList.toggle('o-hidden');
  }
}

mobileMenu();



function parallaxImages() {
  const section = document.querySelector('.parallax-section')
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      scrub: true,
      start: 'top center'
    }
  })
  // tl.to('.intro-gallery__img--main', {
  //   yPercent: 20,
  //   ease: 'none'
  // }, )
  tl.to('.intro-gallery__img--1', {
    yPercent: -60,
    ease: 'none'
  }, '<')

  tl.to('.intro-gallery__img--2', {
    yPercent: -160,
    ease: 'none'
  }, '<')
  tl.to('.intro-gallery__img--3', {
    yPercent: -100,
    ease: 'none'
  }, '<')


  const owners = document.querySelector('.owners-list')

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: owners,
      scrub: true,
      start: 'top center'
    }
  })

  tl2.to('.owners-item__img--1', {
    yPercent: 40,
    ease: 'none'
  })
  tl2.to('.owners-item__img--2', {
    yPercent: -50,
    ease: 'none'
  }, '<')
  tl2.to('.owners-item__img--4', {
    yPercent: -40,
    ease: 'none'
  }, '>')
  tl2.to('.owners-item__img--5', {
    yPercent: -30,
    ease: 'none'
  }, '<')


}
parallaxImages()

//smooth scroll page
if (window.innerWidth >= 1200) {
  function smoothScrollPage() {
    let html = document.documentElement;
    let body = document.body;

    let scroller = {
      target: document.querySelector("#scroll-container"),
      ease: 0.09, // <= scroll speed
      endY: 0,
      y: 0,
      resizeRequest: 1,
      scrollRequest: 0,
    };

    let requestId = null;

    TweenLite.set(scroller.target, {
      rotation: 0.01,
      force3D: true
    });

    window.addEventListener("load", onLoad);

    function onLoad() {
      updateScroller();
      window.focus();
      window.addEventListener("resize", onResize);
      document.addEventListener("scroll", onScroll);
    }

    function updateScroller() {

      let resized = scroller.resizeRequest > 0;

      if (resized) {
        let height = scroller.target.clientHeight;
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
      }

      let scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

      scroller.endY = scrollY;
      scroller.y += (scrollY - scroller.y) * scroller.ease;

      if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
      }

      TweenLite.set(scroller.target, {
        y: -scroller.y
      });

      requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    }

    function onScroll() {
      scroller.scrollRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }

    function onResize() {
      scroller.resizeRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }
  }

  smoothScrollPage()
}


function autoCloseMobMenu(button) {
  if (window.innerWidth <= 768) {
    let event = new Event("click");
    button.dispatchEvent(event);
  }
}



//scroll to anchor
function scrollToAnchor() {
  const links = document.querySelectorAll('*[data-anchor^="#"]')
  const closeMenu = document.querySelector('.close-menu')
  links.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      const anchor = item.getAttribute('data-anchor')
      gsap.to(window, {
        duration: 1,
        scrollTo: `${anchor}`,
        ease: 'power2'
      })
      autoCloseMobMenu(closeMenu)
    })
  })
}
scrollToAnchor()


const data = [{
    "id": 1,
    "title": "Тессинский",
    "location": [55.75040933530299, 37.650200069554295],
    "price": 4500000,
    "image": "https://static.tildacdn.com/tild3962-3663-4631-a265-306438633532/WEB_entrance_1_tessi.jpg",
    "description": "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Предупреждал текст скатился, реторический приставка, подпоясал раз рукопись вскоре взгляд от всех там заглавных осталось курсивных? Напоивший пор диких от всех себя!"
  },
  {
    "id": 2,
    "title": "ЖК Центральный",
    "location": [55.76568711811793, 37.582351165647864],
    "price": 5500000,
    "image": "https://static.tildacdn.com/tild3962-3663-4631-a265-306438633532/WEB_entrance_1_tessi.jpg",
    "description": "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Предупреждал текст скатился, реторический приставка, подпоясал раз рукопись вскоре взгляд от всех там заглавных осталось курсивных? Напоивший пор диких от всех себя!"
  },
  {
    "id": 2,
    "title": "ЖК Союзный",
    "location": [55.770178159504546, 37.62514214329015],
    "price": 9500000,
    "image": "https://static.tildacdn.com/tild3962-3663-4631-a265-306438633532/WEB_entrance_1_tessi.jpg",
    "description": "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Предупреждал текст скатился, реторический приставка, подпоясал раз рукопись вскоре взгляд от всех там заглавных осталось курсивных? Напоивший пор диких от всех себя!"
  }
]

function initMap() {

  const styles = [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    },
    {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#bdbdbd"
      }]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#dadada"
      }]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#c9c9c9"
      }]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }
  ]

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: new google.maps.LatLng(55.76233706539706, 37.62247714777521),
    mapTypeId: "roadmap",
  })

  map.setOptions({
    styles
  })

  const infowindow = new google.maps.InfoWindow({
    content: "",
    pixelOffset: 0
  });
  const formatter = new Intl.NumberFormat('ru');

  data.forEach(item => {
    const coords = item.location
    const latLng = new google.maps.LatLng(coords[0], coords[1])

    // <span">&#215;</span>
    const content = `
    <div class="map-info">
    <img src="${item.image}">
    <div class="map-info-inner-block">
    <h2 class="map-info-title">${item.title}</h2>
    <p class="map-info-text">${item.description}</p>
    <p class="map-info-price">Цена: от ${formatter.format(item.price)}₽</p>
    <a href="" download><button class="btn map-info-btn">Скачать презентацию</button></a>
    </div>
    </div>
    `



    // let infoContent = `
    // <div class="map-info">
    // <img src="${item.image}" />
    // <h2 class="map-info-title">${item.title}</h2>
    // <p class="map-info-text">${item.description}</p>
    // <p class="map-info-price">${item.price}</p>
    // <a href="" download><button class="btn">Скачать презентацию</button></a>
    // </div>
    // `

    const marker = new google.maps.Marker({
      position: latLng,
      map,
      icon: './static/images/svg/marker.svg'
    })



    marker.addListener('click', () => {
      infowindow.setContent(content);
      infowindow.open(map, marker);
    })



  })


}

//получить термины типа недвижимости
// http://localhost:8888/estate/wp-json/wp/v2/type_object

//термины таксономии район
// http://localhost:8888/estate/wp-json/wp/v2/district

//термины таксономии направление
// http://localhost:8888/estate/wp-json/wp/v2/direction

//все объекты
// http://localhost:8888/estate/wp-json/wp/v2/object

//Городская
// http://localhost:8888/estate/wp-json/wp/v2/object?type_object=11

//Загородная
// http://localhost:8888/estate/wp-json/wp/v2/object?type_object=12

//все медиа
// http://localhost:8888/estate/wp-json/wp/v2/media


// если тип недвижимости равен городской то показать термины таксономий район
// если загородный то показать направление




async function changeTypesEstate() {

  const list = document.querySelector('.type-of-estate');
  let termsList;
  try {
    let response = await fetch('http://localhost:8888/estate/wp-json/wp/v2/type_object');

    if (response.ok) {
      let terms = await response.json();
     console.log(terms);
      terms.forEach(item => {
        let label = document.createElement('label');
        label.classList.add('select-dropdown__label');
        label.innerHTML = `
        <input class="select-dropdown__label-input" type="radio" data-id="${item.id}" name="type" value="${item.name}"><span class="select-dropdown__label-txt">${item.name}</span>
        `;

        list.append(label);
      });


        const district = document.querySelector('.objects-controls__district')
        const inputs = document.querySelectorAll('.type-of-estate .select-dropdown__label-input');

        inputs.forEach(item => {
          let attr = item.getAttribute('data-id');
          item.addEventListener('change', () => {
            if(attr == 11) {
              console.log('Городская'); 
              // let distrResponse


            } else if(attr == 12) {


              console.log('Загородная');
            }
          })
        })

        
    } else {
      console.log("Ошибка HTTP: " + response.status);
    }
  } catch (error) {
    console.log(error);
  }


}
changeTypesEstate();



async function defaultParametr() {
  const list = document.querySelector('.filter-parametr')
  try {
    let res = await fetch('http://localhost:8888/estate/wp-json/wp/v2/district');
    if(res.ok) {
      let terms = await res.json();
            terms.forEach(item => {
        let label = document.createElement('label');
        label.classList.add('select-dropdown__label');
        label.setAttribute('data-slug', item.slug);
        label.innerHTML = `
        <input class="select-dropdown__label-input" type="radio" name="type" data-slug="${item.slug}"><span class="select-dropdown__label-txt">${item.name}</span>
        `;
        list.append(label);
      });
        

    } else {
      console.log("Ошибка HTTP: " + response.status);
    }
    
  } catch (error) {
    console.log(error);
  }

}

defaultParametr();

