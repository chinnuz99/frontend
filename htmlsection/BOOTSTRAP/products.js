var item=[
    {id:100,name:"sugar",price:35,aval_qty:10},
    {id:101,name:"teapowder",price:105,aval_qty:100},
    {id:102,name:"boost",price:150,aval_qty:10},
    {id:103,name:"complan",price:110,aval_qty:5},
    {id:104,name:"rusk",price:110,aval_qty:0},
    {id:105,name:"oreo",price:35,aval_qty:0},
]

//1)print product names only

var item_names=item.map(product=>product.name)
console.log(item_names);

// var item_names=items.map(function(product){return product.name})  without arrow functions
// console.log(item_names);

//2)number of products

var count=items.length()
console.log(count);

//3)print product names in uppercase only

var item_names=items.map(product=>product.name.toUppercase())
console.log(item_names);

// 4)print price above>100
var costly_items=items.filter(item=>item.price>100)
console.log(costly_items);


// 5)print low cost item find pries<100
var low_cost=items.filter(item=>item.price<100)
console.log(low_cost);


// 6)fetch products whose aval qty>5
var low_stock=items.filter(item=>item.aval_qty>5)
console.log(low_stock);

// 7) print all items in stock
var in_stock=items.filter(item=>item.aval_qty>0)
console.log(in_stock);

// 8) print the item which have low aval_qty
var low_aval_item=items.reduce((item1,item2)=>item1.aval_qty<item2.aval_qty?item1:item2)
console.log(low_aval_item);

// var low_aval_qty=items.reduce((item1,item2)=>item1.aval_qty<item1.aval_qty?item1:item2.aval_qty)
// var low_aval_items=items.filter(item=>item.aval_qty==low_aval_qty)
// console.log(low_aval_items);


// 9)print product details which have highest price
var costly_item=items.reduce((item1,item2)=>item1.price>item2.price?item1:item2)
console.log(costly_item);

// 10)print products in descending order of price
var price_sorted=items.sort((item1,item2)=>item2.price - item1.price)
console.log(price_sorted);

// 11)print products in ascending order of avl_qty
var aval_qty_srt=items.sort((item1,item2)=>item1.aval_qty - item2.aval_qty)
console.log(aval_qty_srt);

// 12)find information about boost
var boost_data=item.find(item=>item.name=="boost")
console.log(boost_data);

// 13)find the product of aval_qty at 10
var aval_qty_ten=items.find(item=>item.aval_qty=10)
console.log(aval_qty_ten);

// 14) check hide and seek in the items(some)
var is_available=items.some(item=>item.name=="hideandseek")
console.log(is_available);

// 15) chk the price less than 50
var is_avl_under_fifty=items.some(item=>item.price<=50)
console.log(is_avl_under_fifty);


//  object oriented programming






