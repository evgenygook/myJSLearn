 let question = prompt( "Ваш бюджет на месяц?"),
     date = prompt("YYYY-MM-DD"),
     count = 2;

     
var appData = {
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
        var howMuch = prompt("Введите обязательную статью расходов в этом месяце");
        return appData.expenses[i].whatExpenses=howMuch;
    }
}

console.log(appData.expenses);