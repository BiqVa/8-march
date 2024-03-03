button = document.querySelector('.button')
img = document.querySelector('img')
button.addEventListener('click',function(){
  img.style.display = "block"
  anime({
    targets: 'img',
    scale:20,
    duration: 1000,
    easing: 'linear',
    delay:100,
    
  }).finished.then(function(){
    img.style.display = 'none'
  })
})
