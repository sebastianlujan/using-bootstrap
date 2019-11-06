/* We use js functions and emojis just for fun */

(
  function loadPage() {

    let load = () => {
      let list = document.querySelectorAll('img');
      list.forEach( img => img.classList.add('load-in') )
    }

    setTimeout( load , 500);
  }
)();

    let yummy = document.getElementById('🍔');

    yummy.addEventListener('click', () => {

    let laCarte = document.getElementById('📜');

    if( yummy.classList.contains('x')) {
      yummy.classList.remove('x');
      laCarte.classList.remove('in');
      laCarte.classList.add('out')
    } else {
      yummy.classList.add('x');
      laCarte.classList.add('in');
      laCarte.classList.add('vertical-menu');
    }

    /* removes the vertical-menu and out class in order reset the initial state */
    if( laCarte.classList.contains('vertical-menu') && laCarte.classList.contains('out')) {
      laCarte.classList.remove('out');
      laCarte.classList.remove('vertical-menu');
    }

  });






