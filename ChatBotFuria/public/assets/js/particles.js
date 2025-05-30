particlesJS("particles-js", {
  particles: {
    number: { value: 118, density: { enable: true, value_area: 800 } },
    color: { value: "#fffe07" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#3d6c7f" },
      polygon: { nb_sides: 4 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.6894671861721748,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 0,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 224.4776885211732,
      color: "#ffffff",
      opacity: 0.4,
      width: 2.244776885211732,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "top",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 962.0472365193136,
        rotateY: 1042.21783956259,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "remove" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
