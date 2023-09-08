const Arrayexample = {
    testArray() {
        console.log("Hello");
        let carsArray = ["maruti", "toyota", "hundai"];
        const carIndex = carsArray.findIndex((car) => car == "maruti")
        console.log(carIndex);
    },
};
export default Arrayexample;