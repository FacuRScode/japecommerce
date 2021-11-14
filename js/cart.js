//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART2_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            articleInCart = resultObj.data;
            showPurchasedProducts(articleInCart);
            Cost(articleInCart);
            for (let i = 0; i < articleInCart.articles.length; i++) {
                document.getElementById(`${i}`).addEventListener('change', function (e) {
                    Cost(articleInCart);
                })
                document.getElementById('sendRadios').addEventListener('click', function (e) {
                    Cost(articleInCart);
                })
            }
        }
    });

    getJSONData(CART_BUY_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            let msg = resultObj.data;
            validForm(msg);
            
        }
    });

    document.getElementById('creditCardPaymentRadio').addEventListener('change', function(){
        deshabilitarRadio();
    });
    document.getElementById('bankingRadio').addEventListener('change', function(){
        deshabilitarRadio();
    });


    document.getElementById('sendPayType').addEventListener('click', function (e) {
        payModal(e);
    });
});

function showPurchasedProducts(articles) {
    let htmlContentToAppend = "";
    for (let i = 0; i < articles.articles.length; i++) {
        let arti = articles.articles[i];
        htmlContentToAppend += `
        <tr>
            <td><img src="${arti.src}" width="50px"></td>
            <td>${arti.name}</td>
            <td>${arti.unitCost} ${arti.currency}</td>
            <td><input class=""form-control" style="width:60px;" type="number" id="${i}" value="${arti.count}" min="1"</td>
        `
        document.getElementById("purchased-product-list").innerHTML = htmlContentToAppend;
    }
}

function Cost(articles) {
    let htmlSubtotalContentToAppend = '';
    let subTotal = 0;
    for (let i = 0; i < articles.articles.length; i++) {

        let quantity = document.getElementById(`${i}`).value;

        if (articles.articles[i].currency == "USD") {
            subTotal += (articles.articles[i].unitCost) * 40 * quantity;
        }
        if (articles.articles[i].currency == "UYU") {
            subTotal += articles.articles[i].unitCost * quantity;
        }
    }
    htmlSubtotalContentToAppend += `<div <span style="font-weigt:bold">` + subTotal + " UYU" + `</span></div>`;
    document.getElementById('subtotalText').innerHTML = htmlSubtotalContentToAppend;
    
    let radioSelected = document.querySelector('input[name="sendType"]:checked').value;
    let sendCost = (radioSelected * subTotal) / 100
    document.getElementById('sendCost').innerHTML = sendCost + ' UYU';
    document.getElementById('totalCost').innerHTML = subTotal - sendCost + ' UYU';
}

function payModal(e) {
    let radioSelected = document.querySelector('input[name="paymentType"]:checked').value;
    document.getElementById('paymentType').innerHTML = radioSelected;
}


function deshabilitarRadio() {
    let radioSelected = document.querySelector('input[name="paymentType"]:checked').value;
    let bankAccountNumberInput = document.getElementById('bankAccountNumber')
    let creditCardNumber = document.getElementById('creditCardNumber')
    let creditCardSecurityCode = document.getElementById('creditCardSecurityCode')
    let dueDate = document.getElementById('dueDate')

    if (radioSelected === 'creditCard') {
        bankAccountNumberInput.disabled = true
        creditCardNumber.disabled = false
        creditCardSecurityCode.disabled = false
        dueDate.disabled = false
    }
    if (radioSelected === 'banking') {
        bankAccountNumberInput.disabled = false
        creditCardNumber.disabled = true
        creditCardSecurityCode.disabled = true
        dueDate.disabled = true
    }

}

function validForm(msg) {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                    alert('revise los datos ingresados')
                }else{
                    alert(msg.msg)
                }
                
                form.classList.add('was-validated')
            }, false)
        })  
};
