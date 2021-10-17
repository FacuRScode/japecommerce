//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART2_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {

            articleInCart = resultObj.data;
            showPurchasedProducts(articleInCart);

            var quantityInputs = document.getElementById("count")
            for (var i=0; i < quantityInputs.length; i++) {
                var input = quantityInputs[i]
                input.addEventListener('change', quantityChanged)
            }
            updateTotal(articleInCart);

            
        }
    });

});


function showPurchasedProducts(articles){

    let htmlContentToAppend = "";

    for(let i = 0; i < articles.articles.length; i++){
        let arti = articles.articles[i];


        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + arti.src + `" alt="` + arti.unitCost + `" alt="` + arti.currency + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ arti.name +`</h4>
                        Cantidad:<input type="number" value=${arti.count} id="count">
                    </div>
                    <p class="mb-1">` + " " + arti.currency + " " + arti.unitCost + `</p>
                </div>
            </div>
        </div>
        `

        document.getElementById("purchased-product-list").innerHTML = htmlContentToAppend;
    }
}

function quantityChanged(event) {
    var input = event.target
    if (isNAN(input.value) || input.value <=0) {
        input.value = 1
    }
    updateTotal();
}



function updateTotal(articles){

    let htmlSubmitContentToAppend = '';
    let subTotal = 0;
    quantity = document.getElementById("count").value;

    for (let i = 0; i < articles.articles.length; i++) {
        if (articles.articles[i].currency == "USD"){
            subTotal += (articles.articles[i].unitCost) * 40 * input;
        }
        if (articles.articles[i].currency == "UYU"){
            subTotal += articles.articles[i].unitCost * input;
        }
    }
    htmlSubmitContentToAppend += `<div <p class="mb-1">` + "Subtotal UYU: " + subTotal + `</p></div>`;
        document.getElementById('subtotal').innerHTML = htmlSubmitContentToAppend;

}

