
//z1-------------
const drink={
    name: "Napoj Orzeźwiający",
    size: 500, //500ml
    price: 3.2
};

//z2--------------
const drinks_table=[
    {
        name: "Monster",
        size: 500, //500ml
        price: 4.99
    },
    {
        name: "Woda niegazowana",
        size: 1000, //ml
        price: 1.5
    },
    {
        name: "tymbark jablko-mieta",
        size: 500, //500ml
        price: 3.5
    }
]; console.log(drinks_table.length);

//z3---------------------
function add_info(){
    console.log();
    console.log(drink.name);
    console.log(drink.size);
    console.log(drink.price);
}
add_info();

//z4--------------------
drinks_table.push(drink);
console.log();
console.log(drinks_table);

//z5---------------------
console.log();
console.log(drinks_table.length);

const copy_of_a_table=drinks_table;
copy_of_a_table.pop();

console.log(copy_of_a_table.length);

//z6---------------
function full_price() {
    let all_prices=0;
    console.log("Ceny wszystkich napoi:");
    all_prices+=(copy_of_a_table[0].price+copy_of_a_table[1].price+copy_of_a_table[2].price);
    console.log(all_prices);
}

full_price();