const price = 5000;
if(price>= 7000)
{
    const discount = price*10/100;
    const amount = price - discount;
    console.log(amount);
}
else if(price>=2000)
{
    discount = price*5/100;
    amount = price -discount;
    console.log(amount);
}
else{
    console.log(price);
}