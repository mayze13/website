document.addEventListener('DOMContentLoaded', function () {
  /* Create the particles container and prepend to body */
  var container = document.createElement('div');
  container.id = 'particles-js';
  document.body.prepend(container);

  /* Initialise particles — click-only, navy blue dots on beige */
  window.particlesJS('particles-js', {
    particles: {
      number: { value: 0 },
      color: { value: '#1a3a5c' },
      shape: { type: 'circle' },
      opacity: {
        value: 0.55,
        random: true,
        anim: { enable: true, speed: 0.8, opacity_min: 0, sync: false }
      },
      size: {
        value: 5,
        random: true,
        anim: { enable: false }
      },
      line_linked: { enable: false },
      move: {
        enable: true,
        speed: 1.8,
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
        onhover: { enable: false },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        push: { particles_nb: 8 }
      }
    },
    retina_detect: true
  });

  /* The canvas itself needs pointer-events so clicks register */
  var canvas = document.querySelector('#particles-js canvas');
  if (canvas) {
    canvas.style.pointerEvents = 'auto';
  }

  /* Lift all direct body children above the particles layer */
  Array.prototype.forEach.call(document.body.children, function (el) {
    if (el.id !== 'particles-js') {
      el.style.position = 'relative';
      el.style.zIndex   = '1';
    }
  });
});
