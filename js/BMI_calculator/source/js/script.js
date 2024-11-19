let $ = document
let inputKg = $.querySelector('#weight')
let textKg = $.querySelector('#weight-val')
let inputGad = $.querySelector('#height')
let textGad = $.querySelector('#height-val')
let bmiResult = $.querySelector('#result')
let textBmi = $.querySelector('#category')


function BMI (){
    textKg.innerHTML = inputKg.value + ' kg'
    textGad.innerHTML = inputGad.value + ' cm'
    bmiResult.innerHTML = (inputKg.value / (inputGad.value/100*2)).toFixed(1)
    let bmi = bmiResult.innerHTML
    
    if (bmi < 18.5){
        textBmi.innerHTML = 'کم وزن '
        bmiResult.style.color = '#ffc44d'
        textBmi.style.color = '#ffc44d'


    }else if(bmi > 18 && bmi < 29){
        textBmi.innerHTML = 'نرمال'
        bmiResult.style.color =  '#0be881'
        textBmi.style.color = '#0be881'


    }else if(bmi > 25.29 && bmi < 29){
        textBmi.innerHTML = 'اضافه'
        bmiResult.style.color =  '#ff884d'
        textBmi.style.color = '#ff884d'


    }else if (bmi > 30.34 && bmi < 39){
        textBmi.innerHTML = 'چاق'
        bmiResult.style.color =  '#ff5e4d'
        textBmi.style.color = '#ff5e4d'

        }







}







inputGad.addEventListener('input' , BMI)
inputKg.addEventListener('input' , BMI)





