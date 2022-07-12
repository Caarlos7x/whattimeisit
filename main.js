function carregar() {
  var intervald = window.setInterval(() => 
  {carregar() },1000);  
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('morning')
  var data = new Date()
  var hora = data.getHours()
  var minuto = data.getMinutes()
  var segundo = data.getSeconds()
  var col = document.getElementById('messa')
  var span = document.getElementById('messa')
      
  msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`

  if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = 'morn.jpg'
    document.body.style.background = '#FAF1D6'
    span.textContent = 'Bom dia!'
  } else if (hora >= 12 && hora <= 18) {
    // BOA TARDE
    img.src = 'aftern.jpg'
    document.body.style.background = '#FDAFAB'
    span.textContent = 'Boa tarde!'
  } else {
    // BOA NOITE
    img.src = 'night.jpg'
    document.body.style.background = 'black'
    document.body.style.color = 'grey'
    col.style.color = 'grey'
    span.textContent = 'Boa noite!'
  }

}
