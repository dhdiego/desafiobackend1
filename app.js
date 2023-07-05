class ProductManager{
    constructor(){
        this.products=[];
    }


    getProducts=()=>{
        return this.products;
    }

    

    addProducts=(title,description,price,thumbnail,code,stock)=>{
        const product={title,description,price,thumbnail,code,stock,products:[]}

        if(this.products.length===0){
            product.id=1
        } else{
            product.id=this.products[this.products.length -1].id+1
        }

        this.products.push(product)
    }

    getProductById=(categoriaId)=>{
        const indiProduct= this.products.findIndex(prod=>prod.id===categoriaId)
        if(indiProduct===-1){
            console.log('Not Found')
            return
        }
        const insertProduct= this.products[indiProduct].products.includes(categoriaId)
        if (insertProduct){
            console.log('producto Agregado')
            return
        }

        this.products[indiProduct].products.push(categoriaId)
    }
}


const createProducts= new ProductManager()

createProducts.addProducts('titulo1.',30,'imagen1',5,4)
createProducts.addProducts('titulo2.',60,'imagen2',30,10)
createProducts.addProducts('titulo3.',40,'imagen3',60,2)



createProducts.getProductById(1)
createProducts.getProductById(2)
createProducts.getProductById(3)


console.log(createProducts.getProducts())