function getBmi(height,weight,point=2){
    return (weight/(height/100)**2).toFixed(point);
}


function calcBMI() {
    const bmiResult = document.querySelector(".bmi");
    const bmiComment = document.querySelector(".comment");
    let name = nameEl.value;
    let height= heightEl.value;
    let weight= weightEl.value;
    let bmi = getBmi(height, weight);
    if (isNaN(bmi)) {
        bmiResult.innerText = "輸入錯誤!";
        return;
    }
    bmiResult.innerText = bmi;
    if (bmi < 18.5) {
        bmiComment.innerText = "太輕了!";
    } else if (bmi >= 18.5 && bmi < 24) {
        bmiComment.innerText = "標準!";
    } else {
        bmiComment.innerText = "肥胖!";
    }
     console.log(name,height,weight,bmi)
}
const calcEl = document.querySelector('#calc');
const heightEl = document.querySelector('#height');
const weightEl = document.querySelector('#weight');
const nameEl = document.querySelector("#name")