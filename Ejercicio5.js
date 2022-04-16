function numeros(min, max){
    return Math.floor(Math.random() * (max - min +1) +min)
};

for(let i = 0; i < 10; i++){
    console.log(numeros(0, 20))
}
