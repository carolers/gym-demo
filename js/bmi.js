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
        bmiComment.innerText = " "
        return;
    }
    bmiResult.innerText = bmi;
    if (bmi < 18.5) {
        bmiComment.innerText = "太輕了!";
    } else if (bmi >= 18.5 && bmi < 24) {
        bmiComment.innerText = "標準!";
    } else if (bmi >= 24 && bmi < 27) {
        bmiComment.innerText = "過重!";
    } else if (bmi >= 27 && bmi < 30) {
        bmiComment.innerText = "輕度肥胖!";
    } else if (bmi >= 30 && bmi < 35) {
        bmiComment.innerText = "中度肥胖!";
    } else  {
        bmiComment.innerText = "重度肥胖!"
    }
     console.log(name,height,weight,bmi)
}
const calcEl = document.querySelector('#calc');
const heightEl = document.querySelector('#height');
const weightEl = document.querySelector('#weight');
const nameEl = document.querySelector("#name")