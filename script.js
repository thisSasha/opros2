var ifr = document.getElementById('submit')
var btn = document.getElementById('subm')
ifr.onload = function(){
    btn.classList.add('go')
    btn.innerHTML = 'ВЫ отправили'
    setTimeout(() => {
        btn.style.display = 'none'
    }, 2000);
}