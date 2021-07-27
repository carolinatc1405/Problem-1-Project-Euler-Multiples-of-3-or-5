function MultiplosDe3e5(number){
    let total = 0
    for(let i = 0; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            total = total + i
        }

    }
    console.log(total);
    return total;
};

MultiplosDe3e5(1000);

