const values = document.getElementsByClassName("salary");
const show_salary = document.getElementById("value");




const salaryBtn = document.getElementById("what_is_salary");


function total_Salary(){

    let salary = 0;

    for(let i = 0 ; i < 4 ; i++){
       salary  +=  Number( values[i].innerText) ;
    }

    show_salary.innerText = salary

}


salaryBtn.addEventListener('click' , total_Salary);


// ====================================================================


const math_number = document.getElementsByClassName("math");
const english_number = document.getElementsByClassName("english");
const science_number = document.getElementsByClassName("science");

// console.log(math_number[0].innerText);
// console.log(english_number[0].innerText);
// console.log(science_number[0].innerText);


const total_Marks = document.getElementsByClassName("total")
const avarage_Marks = document.getElementsByClassName("avarage");
const std_grade = document.getElementsByClassName("grade")



const calculate_ALl_Btn = document.getElementById("marksBtn");







function calculation(){
    let total_value = 0;
    let avg_value = 0;

    for(let i = 0 ; i <= 4 ; i++ ){

     let math = 0;
     let english = 0;
     let science = 0;
     
     math =  Number(math_number[i].innerText);
     english = Number(english_number[i].innerText);
     science = Number(science_number[i].innerText);

    total_value = math+english+science;
    avg_value = Math.round(total_value / 3);

    total_Marks[i].innerText = total_value;
    avarage_Marks[i].innerText = avg_value + "%";

    if(avg_value > 40 && avg_value < 60){
        std_grade[i].innerText = "B";
    }else if(avg_value > 60 && avg_value < 80 ){
        std_grade[i].innerText = "B+"
    }
    else if(avg_value > 80 && avg_value < 90 ){
        std_grade[i].innerText = "A"
        
    }else if(avg_value < 40){
        std_grade[i].innerText = "C"
    }
    else{
        std_grade[i].innerText = "A+"
    }
    
}

}

calculate_ALl_Btn.addEventListener('click' , calculation);