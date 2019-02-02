 let question = prompt( "Ваш бюджет на месяц?"),
     date = prompt("YYYY-MM-DD"),
     count = 2;
    

     
let appData = {
    buget: question,
    timeData: date,
    savings: false,

    expenses:{},
    optionalExpenses:{},
    income:[],
};     

function Question(count){
    for(i=0; i< count; i++ ){
        var whatExpenses = prompt("Введите обязательную статью расходов в этом месяце");
        var howMuch = prompt("Во сколько обойдется?");
        return appData.expenses.whatExpenses=howMuch;

    }
}


function showMessage(){
    var oneDay = ((appData.buget - appData.expenses.whatExpenses)/30);
    alert(oneDay);
    }

    
Question(2);
showMessage();