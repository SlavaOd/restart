var rozvag = document.querySelector('.rozvag')
var video = document.querySelector('.video')
var result = document.querySelector('.result')
var reg = document.querySelector('.reg')
var alt = document.querySelector('.alt')
var upsell = document.querySelector('.upsell')
var main = document.querySelector('.main')
var back = document.querySelector('.back')
var fix = document.querySelector('.fix')
var out = document.querySelector('.out')
var out_add = document.querySelector('.out_add')
var quantity = document.querySelector('.quantity')

function region() {
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

function percentCreate() {
    percent = upsell.value / resNum
    bonus = percent.toFixed(2) * resSum
}

result.onclick = function() {
    region()
    x = rozvag.value
    y = video.value
    resSum = (x*30) + (y*50)
    resNum = +x + +y
    reg.innerHTML = 'Разом:' + '<br>' + 'Реєстрацій: ' + resNum + 'шт ' +  '<br>' + ' Бонус: ' + resSum + 'грн '
    if (resNum < pln) {
        plan = pln - resNum
        out.style.color = 'red'
        out.innerHTML = 'Ви зробили меньше ' + pln + ' реєстрацій. Щоб отримати додатковий бонус зареєструйте ще ' + plan + ' СП'
        out_add.innerHTML = ''
    }  else if ( upsell.value >= resNum ) {
        restart = resSum*2
        out.innerHTML = 'Додатковий бонус : ' +  resSum + 'грн'
        out_add.innerHTML = 'Загальний бонус : ' +  restart  + 'грн'
    } else {
        percentCreate()
        out.innerHTML = 'Додатковий бонус: ' +  Math.floor(percent.toFixed(2) * resSum) + 'грн'
        out_add.innerHTML = 'Загальний бонус : ' + Math.floor(resSum + bonus) + 'грн'
        
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


  