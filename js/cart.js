//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART2_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {

            articleInCart = resultObj.data;
            showPurchasedProducts(articleInCart);

            updateTotal(articleInCart);
            
            for(let i=0; i < articleInCart.articles.length; i++){
                
                document.getElementById(`${i}`).addEventListener('change',function(e){
                    updateTotal(articleInCart);
                })
            }
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
                        Cantidad:<input type="number" value=${arti.count} id=${i} min="1">
                    </div>
                    <p class="mb-1">` + " " + arti.currency + " " + arti.unitCost + `</p>
                </div>
            </div>
        </div>
        `

        document.getElementById("purchased-product-list").innerHTML = htmlContentToAppend;
    }
}

function updateTotal(articles){

        let htmlSubmitContentToAppend = '';
    let subTotal = 0;
    

    for (let i = 0; i < articles.articles.length; i++) {

        let quantity = document.getElementById(`${i}`).value;

        if (articles.articles[i].currency == "USD"){
            subTotal += (articles.articles[i].unitCost) * 40 * quantity;
        }
        if (articles.articles[i].currency == "UYU"){
            subTotal += articles.articles[i].unitCost * quantity;
        }
    }
    htmlSubmitContentToAppend += `<div <p class="mb-1">` + "Subtotal UYU: " + subTotal + `</p></div>`;
        document.getElementById('subtotal').innerHTML = htmlSubmitContentToAppend;
    

}

