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
var quantity = document.querySelector('.quantity')

// var timer = setInterval(function(){
//     fun1()
// },2000)

function fun1() {
    var r = document.getElementsByName('radio');
        for (var i=0;i<r.length; i++) {
        if (r[i].checked && i == 0) {
            pln = 10
        } else if (r[i].checked && i == 1) {
            pln = 15
        }
    }
}

  

result.onclick = function() {
    fun1()
    x = rozvag.value
    y = video.value
    resSum = (x*30) + (y*50)
    resNum = +x + +y
    up = upsell.value *30
    reg.innerHTML = 'Разом:' + '<br>' + 'Реєстрацій: ' + resNum + 'шт ' +  '<br>' + ' Бонус: ' + resSum + 'грн '
    quantity.innerHTML = 'Середній бонус за ' + upsell.value + ' операцій ~ ' + up + ' грн'
    if (resNum < pln) {
        plan = pln - resNum
        itog.style.color = 'red'
        itog.innerHTML = 'Ви зробили меньше ' + pln + ' реєстрацій. Щоб отримати додатковий бонус зареєструйте ще ' + plan + ' СП'
    } else if (resNum == upsell.value) {
       restart = resSum*2
       itog.innerHTML = 'Додатковий бонус : ' +  resSum + 'грн'
       itog2.innerHTML = 'Загальний бонус : ' +  (restart + up) + 'грн'
    } else if (upsell.value / resNum == 0.5) {
        restart = resSum +  resSum / 2
        itog.innerHTML = 'Додатковий бонус: ' +  resSum / 2 + 'грн'
        itog2.innerHTML = 'Загальний бонус : ' +  (restart + up) + 'грн'
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


  