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


    for(i=0; i< count; i++ ){
        let whatExpenses = prompt("Введите обязательную статью расходов в этом месяце",'');
        let howMuch = prompt("Во сколько обойдется?",'');
        appData.expenses[whatExpenses]=howMuch;
        }


