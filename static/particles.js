particlesJS("particles-js", {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 700
      }
    },
    color: {
      value: "#dc143c" // Crimson red
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.85,
      random: false
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        size_min: 1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#00ffff", // Neon blue lines
      opacity: 0.6,
      width: 2
    },
    move: {
      enable: true,
      speed: 1.8,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      attract: {
        enable: true,
        rotateX: 400,
        rotateY: 800
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      grab: {
        distance: 160,
        line_linked: {
          opacity: 1
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});
