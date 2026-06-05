document.addEventListener('DOMContentLoaded', function () {
  var container = document.createElement('div');
  container.id = 'particles-js';
  document.body.prepend(container);

  /* Warm tan particles on midnight — visible in the dark margins
     around the beige content panel. Ambient, no interaction. */
  window.particlesJS('particles-js', {
    particles: {
      number: {
        value: 90,
        density: { enable: true, value_area: 900 }
      },
      color: { value: '#c8b89a' },
      shape: { type: 'circle' },
      opacity: {
        value: 0.55,
        random: true,
        anim: { enable: true, speed: 0.5, opacity_min: 0.08, sync: false }
      },
      size: {
        value: 2.8,
        random: true,
        anim: { enable: false }
      },
      line_linked: {
        enable: true,
        distance: 140,
        color: '#c8b89a',
        opacity: 0.22,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.1,
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
        onclick: { enable: false },
        resize: true
      },
      modes: {
        grab: { distance: 160, line_linked: { opacity: 0.6 } }
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
