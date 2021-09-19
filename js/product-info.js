var product = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function showCommentList(currentCommentsArray){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentCommentsArray.length; i++){
        let comments = currentCommentsArray[i];

        htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ comments.user +`</h4>
                            <div class="star"<small class="text-muted">` + comments.score + ` </small><i class="fa fa-star" aria-hidden="true"></i></div>
                        </div>
                        <p class="mb-1">` + comments.description +  `</p>
                        <p class="mb-1">` +  comments.dateTime + `</p>
                    </div>
                </div>
            </a>
            `

        document.getElementById("comments-container").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let soldCountHTML = document.getElementById("soldCount");
            let costHTML = document.getElementById("cost");
            let currencyHTML = document.getElementById("currency");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            soldCountHTML.innerHTML = product.soldCount;
            costHTML.innerHTML = product.cost;
            currencyHTML.innerHTML = product.currency;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);

            document.getElementById("user").value = localStorage.getItem("usuario")
        }
    });
});




document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comments = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let soldCountHTML = document.getElementById("soldCount");
            let costHTML = document.getElementById("cost");
            let currencyHTML = document.getElementById("currency");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            soldCountHTML.innerHTML = product.soldCount;
            costHTML.innerHTML = product.cost;
            currencyHTML.innerHTML = product.currency;

            //Muestro las imagenes en forma de galería
            showCommentList(comments);
        }
    });
});