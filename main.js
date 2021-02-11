var rozvag = document.querySelector('.rozvag')
var video = document.querySelector('.video')
var result = document.querySelector('.result')
var reg = document.querySelector('.reg')
var alt = document.querySelector('.alt')
var upsell = document.querySelector('.upsell')
var main = document.querySelector('.main')
var back = document.querySelector('.back')
var fix = document.querySelector('.fix')
var itog = document.querySelector('.itog')
var itog2 = document.querySelector('.itog2')

result.onclick = function() {
    x = rozvag.value
    y = video.value
    resSum = (x*30) + (y*50)
    resNum = +x + +y
    reg.innerHTML = 'Разом:' + '<br>' + 'Реєстрацій: ' + resNum + 'шт ' +  '<br>' + ' Бонус: ' + resSum + 'грн '
    if (resNum < 10) {
        plan = 10 - resNum
        itog.style.color = 'red'
        itog.innerHTML = 'Ви зробили меньше 10 реєстрацій. Щоб отримати додатковий бонус зареєструйте ще ' + plan + ' СП'
    } else if (resNum == upsell.value) {
       restart = resSum*2
       itog.innerHTML = 'Додатковий бонус : ' +  resSum + 'грн'
       itog2.innerHTML = 'Загальний бонус : ' +  restart + 'грн'
    }else if (upsell.value / resNum == 0.5) {
        restart = resSum +  resSum / 2
        itog.innerHTML = 'Додатковий бонус: ' +  resSum / 2 + 'грн'
        itog2.innerHTML = 'Загальний бонус : ' +  restart + 'грн'
    }
    
}
alt.onclick = function() {
    location.reload()
}

main.onclick = function() {
    fix.style.display = 'block' 
}

back.onclick = function() {
    fix.style.display = 'none' 
}