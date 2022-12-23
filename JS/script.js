let shop = document.getElementById("shop");

let shopItemsData = [{
    id: "jdcjksdcn",
    name: " Relaxed fit T-shirt",
    price: 12.99,
    img: "RES/t-shirtbl.webp"
},
{
    id: "fgvhwxcdf",
    name: "Nylon Sports Cap",
    price: 14.99,
    img: "res/casquette.jpg"
},
{
    id: "ergyhrdgd",
    name: "Sneakers",
    price: 34.99,
    img: "RES/airforce1.webp"
}]

let generateshop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, img } = x;
        return `
        <div id=product-id-${id} class="item">
        <h3>${name}</h3>
        <img src=${img} width="220">
        <div class="price-quantity">
        <h2>$ ${price} </h2>
            <div class="button">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">0</div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
            <div class="button-2">
            <i class="bi bi-heart"></i>
            <i class="bi bi-trash"></i>
            
        </div>
        </div>
    </div>`
    }).join(""));
}

generateshop();

let increment = (id) => {
    let selectedItem = id
    console.log = (selectedItem)

};
let decrement = () => {
    console.log = ("decrement")
};
let update = () => { };


