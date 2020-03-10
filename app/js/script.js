
// Effects on scroll

let isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }

    document.addEventListener("DOMContentLoaded", scrolling, false);
 
    let listItems = document.querySelectorAll(".scroll")
    let itemBoxes = document.querySelectorAll('.itemBox')
    let line = document.querySelector('.line-indicator')
    let services = document.querySelector('.services-main');
    let pageIndicator = true

    function scrolling(e) {
      console.log(pageYOffset, 'прокрутка')
        
        for (let i = 0; i < listItems.length; i++) {
          let listItem = listItems[i];
          
          if (isPartiallyVisible(listItem)) {
            if (listItem.classList.contains('header-main')) {
                document.querySelector('.header-title').classList.add('active');
            }
            if (listItem.classList.contains('line')) {
              let lineHeight = 'height:' + ' ' + (pageYOffset - 1427) + 'px;'
              line.style.cssText = lineHeight
            }
            if (listItem.classList.contains('services-main') && pageIndicator) {
              window.scrollTo({
                top: 4700,
                behavior: 'smooth'
              })
              pageIndicator = false
            } else if (pageYOffset < 3500) {
              pageIndicator = true
            }
            listItem.classList.add("active");
          } else {
            listItem.classList.remove("active");
          }

          if (isFullyVisible(listItem)) {
            if (listItem.classList.contains('about-features') && aboutCounter[0].textContent < 1) {
              document.querySelectorAll('.about-features_counter-item').forEach((item, id) => {
                item.classList.add('animation')
            })
              counterStart ();
          }
          }
        }
      }
    
      function isPartiallyVisible(el) {
        let elementBoundary = el.getBoundingClientRect();
   
        let top = elementBoundary.top;
        let bottom = elementBoundary.bottom;
        let height = elementBoundary.height;
   
        return ((top + height >= 0) && (height + window.innerHeight >= bottom));
      }
   
      function isFullyVisible(el) {
        var elementBoundary = el.getBoundingClientRect();
   
        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;
   
        return ((top >= 0) && (bottom <= window.innerHeight));
      }


// Menu in header

let headerMenuButton = document.querySelector('.header-menu_button')
let headerMenu = document.querySelector('.header-menu')
let headerMenuClose = document.querySelector('.fa-times')
let header = document.querySelector('.header-main')
let headerTitle = document.querySelector('.header-logo')

  headerMenuButton.onclick = function (e) {
    headerMenu.style.cssText = 'transform: translateX(0);'
    headerTitle.style.cssText = 'transform: translateX(0);'
  }

  headerMenuClose.onclick = function(e) {
    headerMenu.style.cssText = 'transform: translateX(100%);'
    headerTitle.style.cssText = 'transform: translateX(-150px);'
  }

  header.onclick = function(e) {
    headerMenu.style.cssText = 'transform: translateX(100%);'
    headerTitle.style.cssText = 'transform: translateX(-150px);'
  }

// Anchors

let nav_link = document.querySelectorAll('.nav_link')
let anchor = document.querySelectorAll('.anchor')
let headerContactButton = document.querySelector('.header-main_button')

nav_link.forEach((item, id) => {
    item.onclick = function () {
        headerMenu.style.cssText = 'transform: translateX(100%);'
        headerTitle.style.cssText = 'transform: translateX(-150px);'
        anchor[id].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
    });
}})

headerContactButton.onclick = function() {
  anchor[5].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
});
}

// Counters

let aboutCounter = document.querySelectorAll('.item-counter')

function counter(val, el, timeout, step) {
    let i = 0;
    (function() {
      if (i <= val) {
        setTimeout(arguments.callee, timeout);
            el.innerHTML = i;
            i = i + step;
      } else { 
            el.innerHTML = val;
      }
    })();
}

function counterStart () {
    aboutCounter.forEach((item, id) => {
        if (id == 0) {
            counter(170, item, 4, 1);
        } else if (id == 1) {
            counter(13, item, 70, 1);
        } else if (id == 2) {
            counter(6, item, 160, 1);
        } else if (id == 3) {
          counter(10, item, 100, 1);
      }
        
    })
}


    

    // window.addEventListener('scroll', scrollSection, false)

    // let services = document.querySelector('.services-main');
    // let pageIndicator = true

    // function scrollSection(e) {

    //   if (pageYOffset > 3500 && pageIndicator) {
    //     window.scrollTo({
    //       top: 4700,
    //       behavior: 'smooth',
    //     })
    //     pageIndicator = false
    //   } else if (pageYOffset < 3200) {
    //     pageIndicator = true
    //   }

    // }
