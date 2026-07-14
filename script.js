document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.gallery-btn');
  const grids = document.querySelectorAll('.gallery-grid');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      grids.forEach(grid => grid.classList.remove('active'));

      button.classList.add('active');
      const target = document.getElementById(button.dataset.category);
      if (target) target.classList.add('active');
    });
  });

  document.querySelectorAll('.accordion').forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        document.querySelectorAll('.accordion').forEach(other => {
          if (other !== item) other.removeAttribute('open');
        });
      }
    });
  });
});