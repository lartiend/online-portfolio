particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": 55,
      "density": {
        "enable": true,
        "value_area": 800
    }
},
"color": {
  "value": "#ffffff"
},
"shape": {
  "type": "circle",
  "stroke": {
    "width": 0,
    "color": "#000000"
},
"polygon": {
    "nb_sides": 5
},
},
"opacity": {
        // "value": 0.1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
      }
  },
  "size": {
    "value": 5,
    "random": true,
    "anim": {
      "enable": true,
      "speed": 20,
      "size_min": 0.1,
      "sync": false
  }
},
"line_linked": {
    "enable": true,
    "distance": 150,
    "color": "#ffffff",
    "opacity": 0.4,
    "width": 1
},
"move": {
    "enable": true,
    "speed": 5,
    "direction": "none",
    "random": false,
    "straight": false,
    "out_mode": "out",
    "attract": {
      "enable": false,
      "rotateX": 600,
      "rotateY": 1200
  }
}
},
"interactivity": {
  "detect_on": "canvas",
  "events": {
    "onhover": {
      "enable": true,
      "mode": "repulse"
  },
  "onclick": {
      "enable": true,
      "mode": "push"
  },
  "resize": true
},
"modes": {
    "grab": {
      "distance": 400,
      "line_linked": {
        "opacity": 1
    }
},
"bubble": {
  "distance": 400,
  "size": 40,
  "duration": 2,
  "opacity": 8,
  "speed": 3
},
"repulse": {
  "distance": 200
},
"push": {
  "particles_nb": 4
},
"remove": {
  "particles_nb": 2
}
}
},
"retina_detect": true,
}

);


$(function(){

    // animate css
    $('.btn').on('mouseover', function() {
        animate(this, 'flash');
        return true;
    });
    $('#resume-about').on('mouseover', function() {
        animate(this, 'hinge');
        return false;
    });
    $("img[alt='img-snapshots']").on('mouseover', function() {
        animate(this, 'wobble');
        return true;
    });

    function animate(element, animation){
        $(element).addClass('animated '+animation);
        setTimeout(
            function(){
                $(element).removeClass('animated '+animation);
            },
            1000
            );
    };


    // typed.js
    var typed = new Typed("#addmyname", {
        strings: [
            "free now",
            "your next developer",
            "Jan",
        ],
        typeSpeed: 70,
        backSpeed: 100,
        backDelay: 700,
        showCursor: false,
        loop: true,
    });

})
