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

function fun1() {

    var r = document.getElementsByName('radio');
        for (var i=0;i<r.length; i++) {
        if (r[i].checked && i == 0) {
            pln = 10
        } else if (r[i].checked && i == 1) {
            pln = 15
        }
        else if (r[i].checked && i == 2) {
            pln = 5
        }
    }
}

result.onclick = function() {
    fun1()
    x = rozvag.value
    y = video.value
    resSum = (x*30) + (y*50)
    resNum = +x + +y
    reg.innerHTML = 'Разом:' + '<br>' + 'Реєстрацій: ' + resNum + 'шт ' +  '<br>' + ' Бонус: ' + resSum + 'грн '
    if (resNum < pln) {
        plan = pln - resNum
        itog.style.color = 'red'
        itog.innerHTML = 'Ви зробили меньше ' + pln + ' реєстрацій. Щоб отримати додатковий бонус зареєструйте ще ' + plan + ' СП'
        itog2.innerHTML = ''
    } else if (upsell.value < pln) {
        plan = pln - upsell.value
        itog.style.color = 'red'
        itog.innerHTML = 'Ви зробили меньше ' + pln + ' апсельних операцій. Щоб отримати додатковий бонус зробіть ще ' + plan
        itog2.innerHTML = ''

    }
    else if ( upsell.value >= resNum ) {
        restart = resSum*2
       itog.innerHTML = 'Додатковий бонус : ' +  resSum + 'грн'
       itog2.innerHTML = 'Загальний бонус : ' +  restart  + 'грн'
    } else {
        percent = upsell.value / resNum
        console.log(percent.toFixed(2) * resSum)
        bonus = percent.toFixed(2) * resSum
        // restart = resSum +  resSum / 2
        itog.innerHTML = 'Додатковий бонус: ' +  Math.floor(percent.toFixed(2) * resSum) + 'грн'
        itog2.innerHTML = 'Загальний бонус : ' + Math.floor(resSum + bonus) + 'грн'
        
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


  