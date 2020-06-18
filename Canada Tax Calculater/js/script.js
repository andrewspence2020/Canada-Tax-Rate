
//Canada Tax rate
var wageForYearWithOutTaxDuduction;
var percentage;
var totalTakeHomePayWithTaxDuductions;
var totalTakeHomepay;


//function to format my numbers
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

//function to show the wage 
YearlyRate = function(wage){    
    wageForYearWithOutTaxDuduction = ((wage * 24) * 52);

    //Yearly Salery
    console.log("My Yearly salery is"+ " " + "$" + formatNumber(wageForYearWithOutTaxDuduction));


   
    if (wageForYearWithOutTaxDuduction <=  48535){
        totalTakeHomePayWithTaxDuductions = (wageForYearWithOutTaxDuduction * 15) / 100;
        console.log("Tax rate was at 15%");
    }else if(wageForYearWithOutTaxDuduction > 48535 && wageForYearWithOutTaxDuduction < 97069){
        totalTakeHomePayWithTaxDuductions = (wageForYearWithOutTaxDuduction * 20.5) / 100;
        console.log("Tax rate was 20.5%");

    }else if(wageForYearWithOutTaxDuduction > 97069 && wageForYearWithOutTaxDuduction < 150473){
        totalTakeHomePayWithTaxDuductions = (wageForYearWithOutTaxDuduction * 26) / 100;
        console.log("Tax rate was at 26%");
    }
    else if(wageForYearWithOutTaxDuduction > 150473 && wageForYearWithOutTaxDuduction < 214368){
        totalTakeHomePayWithTaxDuductions = (wageForYearWithOutTaxDuduction * 29) / 100;
        console.log("Tax rate was at 29%");
    }else{
        totalTakeHomePayWithTaxDuductions = (wageForYearWithOutTaxDuduction * 33) / 100;
        console.log("Tax rate was at 33%");
    }

    totalTakeHomePay = wageForYearWithOutTaxDuduction - totalTakeHomePayWithTaxDuductions; 



    //Total Take Home with tax deductions
    console.log("Tax duductions are"+" "+ "$" + formatNumber(Math.round(totalTakeHomePayWithTaxDuductions)) +" "+"Yearly" +'\n' +"My total take home pay is" + " " + "$" +  formatNumber(Math.round(totalTakeHomePay)));
    
    
}

YearlyRate(35);













function newFunction(percentage) {
    console.log(percentage);
}

