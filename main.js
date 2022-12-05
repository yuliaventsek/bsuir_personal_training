const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();






const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const changeClass = el => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
})










const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide');


let index = 0;

const activeSlide = n => {
    for (slide of slides) {
         slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}


const prepareCurrentSlide = ind => {
    activeSlide(index);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

// const nextSlide2 = () => {
//     if (index == slides.length - 1) {
//         index = 0;
//         prepareCurrentSlide(index);
//     } else {
//         index++;
//         prepareCurrentSlide(index);
//     }
// }

// slides.addEventListener('click', nextSlide2);
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// mouseenter and mouseleave
this._el.addEventListener('mouseenter', () => {
    this._autoplay('stop');
  });
  this._el.addEventListener('mouseleave', () => {
    this._autoplay();
  });
  // swipe
  if (this._config.swipe) {
    const options = this.constructor.checkSupportPassiveEvents() ? { passive: false } : false;
    this._el.addEventListener('touchstart', onSwipeStart, options);
    this._el.addEventListener('touchmove', onSwipeMove, options);
    this._el.addEventListener('mousedown', onSwipeStart);
    this._el.addEventListener('mousemove', onSwipeMove);
    document.addEventListener('touchend', onSwipeEnd);
    document.addEventListener('mouseup', onSwipeEnd);
    document.addEventListener('mouseout', onSwipeEnd);
  }
  this._el.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });












let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};

select();