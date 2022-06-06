var CatalogBlock = document.getElementsByClassName("catalog-block")
var BalanceInt = document.getElementById("balance-int")
var AsideBlock = document.querySelector("aside")
var SortButton = document.querySelector(".btn-sort-price")

var Balance = 0
var basketPrice = 0
var SortBool = true

var k = 0

var basket = []

var Books = [
    ["Название 1", "img/img1.png", 150, 0, 0, 1, 1],
    ["Название 2", "img/img1.png", 250, 0, 0, 2, 2],
    ["Название 3", "img/img1.png", 350, 0, 0, 3, 3],
    ["Название 4", "img/img1.png", 150, 0, 0, 4, 4],
    ["Название 5", "img/img1.png", 250, 0, 0, 1, 5],
    ["Название 6", "img/img1.png", 350, 0, 0, 2, 6],
    ["Название 7", "img/img1.png", 150, 0, 0, 3, 7],
    ["Название 8", "img/img1.png", 250, 0, 0, 4, 8],
    ["Название 9", "img/img1.png", 350, 0, 0, 1, 9],
    ["Название 10", "img/img1.png", 150, 0, 0, 2, 10]
]

for(var i = 0; i < Books.length; i++){
    var FigureTemp = document.createElement("figure")
    var ImgTemp = document.createElement("img")
    var NameTemp = document.createElement("h3")
    var BuyButtonTemp = document.createElement("button")
    var FigCTemp = document.createElement("figcaption")

    CatalogBlock[0].append(FigureTemp)
    FigureTemp.append(ImgTemp)
    FigureTemp.append(NameTemp)
    FigureTemp.append(BuyButtonTemp)
    FigureTemp.append(FigCTemp)

    ImgTemp.setAttribute("src", Books[i][1])
    NameTemp.innerHTML = Books[i][0]
    BuyButtonTemp.textContent = "В корзину"
    BuyButtonTemp.classList.add("btn-buy")
    BuyButtonTemp.setAttribute("onclick", "AddItem(Books[" + i + "])")
    FigCTemp.innerHTML = Books[i][2] + " руб."
}

for(var j = 0; j < Books.length; j++){
    for(var i = 0; i < Books.length-1; i++){
        if(Books[i][2] > Books[i+1][2]){
            var FigureTemp = document.createElement("figure")
            var ImgTemp = document.createElement("img")
            var NameTemp = document.createElement("h3")
            var BuyButtonTemp = document.createElement("button")
            var FigCTemp = document.createElement("figcaption")
        
            CatalogBlock[0].append(FigureTemp)
            FigureTemp.append(ImgTemp)
            FigureTemp.append(NameTemp)
            FigureTemp.append(BuyButtonTemp)
            FigureTemp.append(FigCTemp)
        
            ImgTemp.setAttribute("src", Books[i][1])
            NameTemp.innerHTML = Books[i][0]
            BuyButtonTemp.textContent = "В корзину"
            BuyButtonTemp.classList.add("btn-buy")
            
            FigCTemp.innerHTML = Books[i][2] + " руб."

            var ObjectToDestroy = document.querySelectorAll("figure")[i]
            ObjectToDestroy.remove()

            Books.push(Books[i])
            Books.splice(i, 1)
        }
    }
    document.getElementsByClassName("btn-buy")[j].setAttribute("onclick", "AddItem(Books[" + j + "])")
}

SortButton.innerHTML = "&uarr;"

function RestoreCatalog(){
    for(var i = 0; i < document.querySelectorAll("figure").length; i++){
        document.querySelectorAll("figure")[i].style.display = "block"
    }
}

function BookTypeSort(){
    var TypeBookBlock = document.getElementById("BookType")
    var BookType = TypeBookBlock.value

    if(BookType == 0){
        SearchText()
    }
    else{
        RestoreCatalog()
        SearchText()
        for(var i = Books.length-1; i >= 0; i--){
            if(Books[i][5] != BookType){
                document.querySelectorAll("figure")[i].style.display = "none"
            }
        }
    }
}

function AddItem(Element){
    if(Element[3] == 0){
        basket.push(Element[6])
        Element[3]++
        Element[4] += Element[2]
        var DivTemp = document.createElement("div")
        var ImgTemp = document.createElement("img")
        var BasketTemp = document.createElement("div")
        var H3Temp = document.createElement("h3")
        var IntTemp = document.createElement("div")
        var PriceTemp = document.createElement("div")
        var DeleteButtonTemp = document.createElement("button")
    
        AsideBlock.append(DivTemp)
        DivTemp.append(ImgTemp)
        DivTemp.append(BasketTemp)
        BasketTemp.append(H3Temp)
        BasketTemp.append(IntTemp)
        BasketTemp.append(PriceTemp)
        BasketTemp.append(DeleteButtonTemp)

        DivTemp.classList.add("item-to-buy")
        ImgTemp.setAttribute("src", Element[1])
        BasketTemp.classList.add("basket-block")
        H3Temp.innerHTML = Element[0]
        IntTemp.innerHTML = Element[3] + " шт."
        IntTemp.classList.add("Int")
        PriceTemp.innerHTML = Element[4] + " руб."
        PriceTemp.classList.add("Price")
        DeleteButtonTemp.classList.add("btn-delete")
        DeleteButtonTemp.innerHTML = "Удалить"
        DeleteButtonTemp.setAttribute("onclick", "ChangeData(" + Element[6] + ", Books[" + (Element[6]-1) + "], false)")
    }
    else{
        Element[3]++
        Element[4] += Element[2]
    }
    
    basketPrice += Element[2]
    ChangeData(Element[6], Element, true)
    console.log(basket)
}

function Sort(){

    switch(SortBool){
        case true:
            k = document.querySelectorAll("figure").length
            for(var j = 0; j < k; j++){
                for(var i = 0; i < k-1; i++){
                    if(Books[i][2] < Books[i+1][2]){
                        var FigureTemp = document.createElement("figure")
                        var ImgTemp = document.createElement("img")
                        var NameTemp = document.createElement("h3")
                        var BuyButtonTemp = document.createElement("button")
                        var FigCTemp = document.createElement("figcaption")
                    
                        CatalogBlock[0].append(FigureTemp)
                        FigureTemp.append(ImgTemp)
                        FigureTemp.append(NameTemp)
                        FigureTemp.append(BuyButtonTemp)
                        FigureTemp.append(FigCTemp)
                    
                        ImgTemp.setAttribute("src", Books[i][1])
                        NameTemp.innerHTML = Books[i][0]
                        BuyButtonTemp.textContent = "В корзину"
                        BuyButtonTemp.classList.add("btn-buy")
                        
                        FigCTemp.innerHTML = Books[i][2] + " руб."
    
                        var ObjectToDestroy = document.querySelectorAll("figure")[i]
                        ObjectToDestroy.remove()
    
                        Books.push(Books[i])
                        Books.splice(i, 1)
                    }
                    BookTypeSort()
                }
            }
            
            SortButton.innerHTML = "&darr;"
            SortBool = false
            break
        case false:
            k = document.querySelectorAll("figure").length
            for(var j = 0; j < k; j++){
                for(var i = 0; i < k-1; i++){
                    if(Books[i][2] > Books[i+1][2]){
                        var FigureTemp = document.createElement("figure")
                        var ImgTemp = document.createElement("img")
                        var NameTemp = document.createElement("h3")
                        var BuyButtonTemp = document.createElement("button")
                        var FigCTemp = document.createElement("figcaption")
                    
                        CatalogBlock[0].append(FigureTemp)
                        FigureTemp.append(ImgTemp)
                        FigureTemp.append(NameTemp)
                        FigureTemp.append(BuyButtonTemp)
                        FigureTemp.append(FigCTemp)
                    
                        ImgTemp.setAttribute("src", Books[i][1])
                        NameTemp.innerHTML = Books[i][0]
                        BuyButtonTemp.textContent = "В корзину"
                        BuyButtonTemp.classList.add("btn-buy")
                        
                        FigCTemp.innerHTML = Books[i][2] + " руб."
    
                        var ObjectToDestroy = document.querySelectorAll("figure")[i]
                        ObjectToDestroy.remove()
    
                        Books.push(Books[i])
                        Books.splice(i, 1)
                    }
                    BookTypeSort()
                }

            }
            SortButton.innerHTML = "&uarr;"
            SortBool = true
            break
    }
    for(var j = 0; j < Books.length; j++){
        console.log(document.getElementsByClassName("btn-buy")[j] + " -> " + j)
        document.getElementsByClassName("btn-buy")[j].setAttribute("onclick", "AddItem(Books[" + j + "])")
    }
    event.preventDefault()
}

function SearchText(){
    var SearchTextBlock = document.querySelector("#search-bar")
    var SText = SearchTextBlock.value
    if(SText != ""){
        for(var i = 0; i < document.querySelectorAll("figure h3").length; i++){
            var re = new RegExp("^(" + document.querySelectorAll("figure h3")[i].textContent + ")", "gi")
            // if(SText != document.querySelectorAll("figure h3")[i].textContent){
            //     document.querySelectorAll("figure")[i].style.display = "none"
            // }
            // else{
            //     document.querySelectorAll("figure")[i].style.display = "block"
            // }
            if(SText.match(re) != null){
                document.querySelectorAll("figure")[i].style.display = "block"
            }
            else{
                document.querySelectorAll("figure")[i].style.display = "none"
            }
            
        }
    }
    else{
        RestoreCatalog()
    }

    event.preventDefault()
}

function ChangeData(BookId, Element, Change_Remove){
    
    switch(Change_Remove){
        case true:
            for(var i = 0; i < basket.length; i++){
                if(basket[i] == BookId){
                    document.querySelectorAll(".Int")[i].innerHTML = Element[3] + " шт."
                    document.querySelectorAll(".Price")[i].innerHTML = Element[4] + " руб."
                    document.querySelector(".btn-buy-items").style.display = "inline"
                    break
                }
            }
            break
        case false:
            for(var i = 0; i < basket.length; i++){
                if(basket[i] == BookId){
                    if(Element[3] == 1){
                        var ObjectToDestroy = document.querySelectorAll(".item-to-buy")[i]
                        ObjectToDestroy.remove()
                        basket.splice(i, 1)
                        Element[3]--
                        Element[4] -= Element[2]
                        if(basket.length == 0){
                            document.querySelector(".btn-buy-items").style.display = "none"
                        }
                    }
                    else{
                        Element[3]--
                        Element[4] -= Element[2]
                        ChangeData(Element[6], Element, true)
                    }
                    basketPrice -= Element[2]
                    break
                }
            }
            break
    }
    
    document.querySelector("aside h1").innerHTML = "Корзина(" + basketPrice + " руб.)"
    document.querySelector("p").style.display = "none"
}

function BalanceChange(ChangeInt){
    Balance += ChangeInt
    BalanceInt.innerHTML = Balance + " руб."
    document.querySelector("aside h1").innerHTML = "Корзина(" + basketPrice + " руб.)"
}

function Buy(){
    if(Balance >= basketPrice){
        
        for(var i = document.querySelectorAll(".item-to-buy").length-1; i >= 0; i--){
            Books[i][3] = 0
            Books[i][4] = 0
            var ObjectToDestroy = document.querySelectorAll(".item-to-buy")[i]
            ObjectToDestroy.remove()
            basket.pop()
        }
        BalanceChange(-basketPrice)
        
        basketPrice = 0
        document.querySelector("aside h1").innerHTML = "Корзина(" + basketPrice + " руб.)"
        document.querySelector(".btn-buy-items").style.display = "none"
        document.querySelector("p").style.display = "block"
        document.querySelector("p").innerHTML = "Покупка успешно совершена"
        
    }
    else{
        document.querySelector(".btn-buy-items").style.display = "none"
        document.querySelector("p").style.display = "block"
        document.querySelector("p").innerHTML = "Недостаточно средств"
    }
    console.log(basket)
}

BalanceChange(10000)
