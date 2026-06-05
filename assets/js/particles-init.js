document.addEventListener('DOMContentLoaded', function () {
  var container = document.createElement('div');
  container.id = 'particles-js';
  document.body.prepend(container);

  window.particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: { enable: true, value_area: 900 }
      },
      color: { value: '#f5f0e8' },
      shape: { type: 'circle' },
      opacity: {
        value: 0.45,
        random: true,
        anim: { enable: true, speed: 0.6, opacity_min: 0.05, sync: false }
      },
      size: {
        value: 2.5,
        random: true,
        anim: { enable: false }
      },
      line_linked: {
        enable: true,
        distance: 130,
        color: '#f5f0e8',
        opacity: 0.18,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 0.5 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });

  Array.prototype.forEach.call(document.body.children, function (el) {
    if (el.id !== 'particles-js') {
      el.style.position = 'relative';
      el.style.zIndex   = '1';
    }
  });
});
