//// global function to get id and class of html css
const get_element = (ele) => document.querySelector(ele)
const get_elements = (ele) => document.querySelectorAll(ele)


////product images array 
const json = `[{ "img": "images/food1_.jpg","name": "Strawberry Jam","price": "200", "cat":"food"},
 { "img": "images/food2.jpg","name": "Cadbury","price": "100" ,"cat":"food"},
 { "img": "images/food3.jpg","name": "Spicy Noodle","price": "180", "cat":"food"},
 

 { "img": "images/electronic1.jpg","name": "Laptop","price": "280", "cat":"electronics"},
 { "img": "images/electronic2.png","name": "Smart Watch|Headphone","price": "210", "cat":"electronics"},
 { "img": "images/electronic3.jpg","name": "New Headphone","price": "280", "cat":"electronics"},
 
 { "img": "images/sale1.png","name": "Winter Jacket","price": "180", "cat":"sales"},
 { "img": "images/sale2.jpg","name": "Classic Blazer","price": "230", "cat":"sales"},
 { "img": "images/sale3.jpg","name": "Formal Shirt","price": "100", "cat":"sales"},
 { "img": "images/sale4.jpg","name": "Gift Hamper","price": "330", "cat":"sales"},
 { "img": "images/sale5.png","name": "Choco Bars","price": "280", "cat":"sales"},
 { "img": "images/sale6.jpeg","name": "Sweet Sauce","price": "480","cat":"sales"},
 { "img": "images/sale7.jpg","name": "Digital Camera","price": "90", "cat":"sales"},
 { "img": "images/sale8.jpg","name": "High Tech Camera","price": "80", "cat":"sales"},
 { "img": "images/sale9.jpg","name": "Smart Watch","price": "30", "cat":"sales"},


 { "img": "images/new.jpg","name": "Cute Headphone","price": "230", "cat":"new"},
 { "img": "images/new2_.jpg","name": "Headphone","price": "190","cat":"new"},
 { "img": "images/new4.jpg","name": "Girly Dress","price": "220", "cat":"new"},
 { "img": "images/new5.jpg","name": "Floral Dress","price": "130", "cat":"new"},
 { "img": "images/new6.jpg","name": "Winter Sweater","price": "180", "cat":"new"},
 { "img": "images/ne3.jpg","name": "Stylish Headphone","price": "340", "cat":"new"},

 { "img": "images/clothes1.png","name": "Stylish Blazer","price": "100", "cat":"clothes"},
 { "img": "images/clothes2.jpg","name": "Party Dress","price": "200", "cat":"clothes"},
 { "img": "images/clothes3.jpg","name": "Casual Wear","price": "220", "cat":"clothes"}]`

let products = JSON.parse(json)


var product = products;
print_product(product);


///// print the images
function print_product(product) {
    let img = get_element(".product_img")

    for (key in product) {

        let img_src = src = product[key].img;
        let img_name = src = product[key].name;
        let img_price = src = product[key].price;
        let category = src = product[key].cat;
        // console.log( category );
        img.innerHTML += (`<div class="img_grid ${category} all" id="cat${key}" >
     <img  src = "${img_src}"> 
     <h2>${img_name}  </h2>
     <h3>$${img_price}  </h3> 
     <button class="add_cart" onclick="addCart('cat${key}')" >Add to Cart</button></div>`);
    }
}