document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('mainNavbar');
    if (!nav) return;
  
    const ON = 100;  // после этой прокрутки включаем компактный режим
    const OFF = 20;  // ниже этой отключаем (разные пороги убирают "дрожание")
  
    const update = () => {
      const y = window.scrollY;
      if (y > ON) nav.classList.add('scrolled');
      else if (y < OFF) nav.classList.remove('scrolled');
    };
  
    window.addEventListener('scroll', update, { passive: true });
    update(); // на случай, если страница обновилась уже в прокрученном состоянии
  });