let switchButton = document.getElementById("switch");

switchButton.addEventListener('change', () => {  
  document.getElementById("lightbulb").classList.toggle('on');
})
