// main.js – Добавляет анимацию градиента фона на страницу

const style = document.createElement('style');
style.textContent = `
  :root { --text-color: #ffffff; }

  body {
    margin: 0;
    min-height: 100vh;
    color: var(--text-color);
    font-family: sans-serif;
    background: linear-gradient(to right, var(--color1), var(--color2), var(--color3), var(--color4));
    background-size: 300% 300%;
    animation: gradientBG 10s ease infinite;
  }

  @keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

document.head.appendChild(style);
