(function() {
  // helpers
  function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
      } else {
      el.className += ' ' + className;
    }
  }

  function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  function attachEvent(el, event, fun) {
    el.addEventListener(event, fun);
  }

  // scroll animation (https://stackoverflow.com/a/24559613)
  function scrollToTop() {
    var scrollHeight = window.scrollY,
        scrollStep = Math.PI / ( 600 / 15 ),
        cosParameter = scrollHeight / 2,
        scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval( function() {
          if ( window.scrollY != 0 ) {
              scrollCount = scrollCount + 1;  
              scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
              window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
          } 
          else clearInterval(scrollInterval); 
        }, 15 );
    }

  function backToTopInit() {
   var scrollTopPosToShow = 200,
    backToTopBtn = document.getElementById('back-to-top-btn');

    function listenScroll() {
      if (document.body.scrollTop > scrollTopPosToShow || document.documentElement.scrollTop > scrollTopPosToShow) {
          addClass(backToTopBtn, 'is-active-btn');
      } else {
          removeClass(backToTopBtn, 'is-active-btn');
      }
    }

    attachEvent(backToTopBtn, 'click', scrollToTop);
    attachEvent(window, 'scroll', listenScroll);  
  }

  backToTopInit();
})();
