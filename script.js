let question, date;
let count = 2;  
function start(){
        question = +prompt( "Ваш бюджет на месяц?",'');
        date = prompt("YYYY-MM-DD",'');

        while( isNaN(question) || question =="" || question ==null){
                question = +prompt( "Ваш бюджет на месяц?",'');    
        }

        while(isNaN(date) || date =="" || date ==null){
                date = prompt("YYYY-MM-DD",'');   
        }
        
}


let appData = {
    buget: question,
    timeData: date,
    savings: true,

    expenses:{},
    optionalExpenses:{},
    income:[],
};     



function choose(){
    for(i=0; i< count; i++ ){
        let whatExpenses = prompt("Введите обязательную статью расходов в этом месяце",'');
        let howMuch = prompt("Во сколько обойдется?",'');
 

        if(whatExpenses !== null && howMuch !== null && whatExpenses !== '' && howMuch !== ''){
                appData.expenses[whatExpenses]=howMuch;
        }else{
                alert("Error");
                i--;
        }       
    }  
}




appData.moneyPerDay = appData.bujet/ 30;

        if(appData.moneyPerDay<1000){
                alert("Меньше");
        }else if(appData.moneyPerDay>1000 && appData.moneyPerDay<5000){
                alert("В среднем");
        }else{appData.moneyPerDay>5000
                alert("Больше");
        }

function savings(){
        if(appData.savings == true){
                let save = +prompt("Сумма ваших накоплений",'');
                let precent= +prompt("Процентнтая ставка");

                appData.monthIncome = save / 100/12*precent;
                alert("Доход в месяц с депозита: "+appData.monthIncome)
        }
}        

start();
choose();
savings();