$('document').ready(function () {

    //Custom Cursor
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + (e.pageY - 2) + "px; left: " + (e.pageX - 8) + "px;")
    });
    document.addEventListener('click', e => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500);
    });

    //Reveal On Scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('#sticky').fadeIn(200);
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                $('#sticky').fadeOut(200);
            }
        } else {
            $('#sticky').fadeOut(200);
        }
    });

    //scroll To Section
    $('.scroll__link').click(function (e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        if (target.length) {
            var scrollTo = target.offset().top;
            $('body, html').animate({
                scrollTop: scrollTo + 'px'
            }, 500);
        }
    });

    //Animation on hover banner image
    // let card = document.querySelector('.banner__img');
    // card.addEventListener('mousemove', function (e) {
    //     let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    //     let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    //     card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    // });

    //OWL CAROUSEL - KNOWLEDGE
    var $owl = $('#knowledgeCarousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        autoplay: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
    $owl.trigger('refresh.owl.carousel');

    //SIMPLE PARLLAX
    // var firetorch = document.getElementsByClassName('firetorch__img');
    // new simpleParallax(firetorch, {
    //     overflow: true,
    //     transition: 'cubic-bezier(0,0,0,1)'
    // });
    var hand1 = document.getElementsByClassName('robot--hand__img');
    new simpleParallax(hand1, {
        overflow: true,
        orientation: 'up right',
        transition: 'cubic-bezier(0,0,0,1)'
    });
    var hand2 = document.getElementsByClassName('human--hand__img');
    new simpleParallax(hand2, {
        overflow: true,
        orientation: 'down left',
        transition: 'cubic-bezier(0,0,0,1)'
    });
    var delivering = document.getElementsByClassName('delivering--icon');
    new simpleParallax(delivering, {
        overflow: true,
        scale: 1.5,
        transition: 'cubic-bezier(0,0,0,1)'
    });
    var p2 = document.getElementsByClassName('p-2');
    var p3 = document.getElementsByClassName('p-3');
    var p4 = document.getElementsByClassName('p-4');
    new simpleParallax(p2, {
        overflow: true,
        scale: 1.5,
        transition: 'cubic-bezier(0,0,0,1)'
    });
    new simpleParallax(p3, {
        overflow: true,
        scale: 1.5,
        transition: 'cubic-bezier(0,0,0,1)'
    });
    new simpleParallax(p4, {
        overflow: true,
        scale: 0,
        transition: 'cubic-bezier(0,0,0,1)'
    });
});

const mouse = new smoothMouse();

function smoothMouse() {
  const target = document.documentElement || document.body.parentNode || document.body;
  const speed = 75;
  const smooth = 12;

  let moving = false;
  let pos = target.scrollTop;

  target.addEventListener('mousewheel', scroll, { passive: false });

  function scroll(e) {
    // disable default scrolling
    e.preventDefault();

    let delta;

    if (e.detail) {
      if (e.wheelDelta) delta = e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1);else
      delta = -e.detail / 3;
    } else {
      delta = e.wheelDelta / 120;
    }

    pos += -delta * speed;
    pos = Math.max(0, Math.min(pos, target.scrollHeight - target.clientHeight));

    if (!moving) update();
  }

  function update() {
    moving = true;

    const delta = (pos - target.scrollTop) / smooth;

    target.scrollTop += delta;

    if (Math.abs(delta) > 0.5) window.requestAnimationFrame(update);else
    moving = false;
  }
}