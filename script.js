window.onload = function() {

    btn.addEventListener("click", function() {

        var btn = document.querySelector("#btn");
        var label = document.querySelector("#price");
        var USD = document.querySelector("#USD").checked;
        var EUR = document.querySelector("#EUR").checked;
        var GBP = document.querySelector("#GBP").checked;
        var currency;

        if (USD === true) {currency = "USD";}            
        if (EUR === true) {currency = "EUR";}
        if (GBP === true) {currency = "GBP";}
   
        var XHR = new XMLHttpRequest();
        XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
        XHR.send();
    
        XHR.onreadystatechange = function() {
    
            if (XHR.readyState == 4 && XHR.status == 200) {
                let data = JSON.parse(XHR.responseText).bpi[currency].rate.toString();

                if (data.length > 4) {
                    let USD = '';
                    for (let x = 0; x < data.length -2; x++) {
                        USD = USD + data[x];
                    }
                    label.innerHTML = USD + " " + currency;
                }
                else {label.innerHTML = data;}                
            }
        }
    });
}