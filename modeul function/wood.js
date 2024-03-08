function dress(shirt,pant,jacket){
    const pershirt = 400;
    const perpant = 300;
    const perjacket = 700;
    const shirttotal = pershirt * shirt;
    const panttotal = perpant * pant;
    const jackettotal = perjacket * jacket;
    const totalPrice = shirttotal + panttotal + jackettotal;
    return totalPrice;

}
console.log(dress(5,4,2))