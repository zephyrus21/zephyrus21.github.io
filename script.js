const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const numberOfElements = 81;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}

staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = anime
  .timeline({
    targets: '.stagger-visualizer div',
    easing: 'easeInOutSine',
    delay: anime.stagger(50),
    loop: true,
    autoplay: false,
    duration: 1400,
    // loopComplete: (a) => console.log('end'),
    //update: () => console.log(staggersAnimation.progress)
  })
  //! 1
  .add({
    scale: anime.stagger([2.5, 1], { from: 'center', grid: [9, 9] }),
    translateX: anime.stagger([-120, 120]),
    rotate: anime.stagger([-60, 60]),
    easing: 'easeInOutCirc',
    delay: anime.stagger(10, { from: 'center' }),
  })
  // ! 2
  .add({
    scale: anime.stagger([2.5, 1], { from: 'center', easing: 'easeInOutCirc' }),
    translateX: anime.stagger([-200, 200]),
    translateY: anime.stagger([-200, 200]),
    rotate: 0,
    delay: anime.stagger(1, { from: 'last' }),
  })
  //! 3
  .add({
    rotate: anime.stagger(2, {
      from: 'center',
      direction: 'reverse',
      easing: 'easeInSine',
    }),
    translateX: 0,
    translateY: 0,
    delay: anime.stagger(10, { from: 'center' }),
  })
  // //! 4
  // .add({
  //   scale: anime.stagger([2, 1], { grid: [9, 9], axis: 'y' }),
  //   translateY: anime.stagger([-100, 200], { grid: [9, 9], axis: 'y' }),
  //   rotate: 0,
  //   delay: anime.stagger(1, { from: 'last' }),
  // });
  //! 5
  .add({
    translateX: () => anime.random(-100, 100),
    translateY: () => anime.random(-100, 100),
    scale: anime.stagger([1.5, 0.5], { from: 'center' }),
    rotate: anime.stagger([10, -10], { from: 'last' }),
    delay: anime.stagger(50, { from: 'center', grid: [9, 9] }),
  })
  //! 6
  .add({
    translateX: () => anime.random(-100, 100),
    translateY: () => anime.random(-100, 100),
    rotate: anime.stagger([-10, 10], { from: 'last' }),
    scale: 1,
    delay: anime.stagger(50, { from: 'center', grid: [9, 9] }),
  })
  //! 7
  .add({
    translateY: anime.stagger(5, {
      from: 'center',
      direction: 'reverse',
    }),
    rotate: 0,
    delay: anime.stagger(50, { from: 'center', grid: [9, 9] }),
  })
  //! 8
  .add({
    translateX: anime.stagger('1rem', {
      grid: [9, 9],
      from: 'center',
      axis: 'x',
    }),
    translateY: anime.stagger('1rem', {
      grid: [9, 9],
      from: 'center',
      axis: 'y',
    }),
    delay: anime.stagger(200, {
      grid: [9, 9],
      from: 'center',
      direction: 'reverse',
    }),
  })
  //! 9
  .add({
    translateX: anime.stagger([25, -25], { from: 'first' }),
    translateY: 0,
    rotate: anime.stagger([40, -40], { from: 'first' }),
    delay: anime.stagger(10, { from: 'first' }),
  })

  //! 11
  .add({
    translateX: 0,
    translateY: 0,
    scale: 1,
    rotate: 360,
    duration: 2000,
    delay: 10,
  });
// //! 10
// .add({
//   translateY: anime.stagger([-240, 240]),
//   rotate: () => anime.random(-100, 100),
//   scale: anime.stagger([1, 3], { from: 'center' }),
//   delay: anime.stagger(10, { from: 0 }),
// });

staggersAnimation.play();
