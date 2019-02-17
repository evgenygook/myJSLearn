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
 

        if(whatExpenses !== null && howMuch !== null && whatExpenses !== '' && howMuch !== ''){
                appData.expenses[whatExpenses]=howMuch;
        }else{
                alert("Error");
                i--;
        }       
    }  


        //while
        /*var i = 0;
        while (i < 2){
                console.log("работает цикл")
                let whatExpenses = prompt("Введите обязательную статью расходов в этом месяце",'');
                let howMuch = prompt("Во сколько обойдется?",'');
         
                if(whatExpenses !== null && howMuch !== null && whatExpenses !== '' && howMuch !== ''){
                        appData.expenses[whatExpenses]=howMuch;
                        i++;
                }else{
                        alert("Error");
                        i--;
                        }
                
        } 

        //do_while
        i=0;
        do {
        console.log("работает цикл")
                let whatExpenses = prompt("Введите обязательную статью расходов в этом месяце",'');
                let howMuch = prompt("Во сколько обойдется?",'');
         
                if(whatExpenses !== null && howMuch !== null && whatExpenses !== '' && howMuch !== ''){
                        appData.expenses[whatExpenses]=howMuch;
                        i++;
                }else{
                        alert("Error");
                        i--;
                        }
                } while(i< 2); */

appData.moneyPerDay = appData.bujet/ 30;

        if(appData.moneyPerDay<1000){
                alert("Меньше");
        }else if(appData.moneyPerDay>1000 && appData.moneyPerDay<5000){
                alert("В среднем");
        }else{appData.moneyPerDay>5000
                alert("Больше");
        }


        /* Бывает 3 цикла */