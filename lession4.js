//nest-object
const product = {
    id:"123",
    name:"Banana",
    price:12000,
    tracking:{
        harvest:"2025-9-10",
        package:"2025--9-11",
        deliver:"2025-9-13",
        distribute:"2025-9-15",
    }
}
console.log(product.tracking.harvest)