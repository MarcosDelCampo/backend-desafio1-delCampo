class ProductManager {
	constructor() {
	  this.products = [];
	  this.incremental = 1;
	}
  
	addProduct(title, description, price, thumbnail, code, stock) {
	  const newProduct = {
		id: this.incremental++,
		title,
		description,
		price,
		thumbnail,
		code: code.toString(),
		stock,
	  };
  
	if (!this.products.some((product) => product.code.toString() === code.toString()) &&
  Object.values(newProduct).every((value) => value)
) {
  this.products.push(newProduct);
  console.log(`Producto agregado con el ID ${newProduct.id}.`);
} else {
  console.log("No puede ser agregado. Repeated code")
	}}
  
	getProducts() {
	  console.log(this.products);
	}
  
	getProductByID(id) {
	  const product = this.products.find((product) => product.id === id);
  
	  if (product) {
		console.log(product);
	  } else {
		console.log("Not Found");
	  }
	}

  }
  const productManager= new ProductManager()
  

  productManager.addProduct(
	"Remera lisa",
	"remera lisa color negra",
	2000,
	"Acá iría una imagen de remera lisa",
	10001,
	20
  );
  productManager.addProduct(
	"Remera estampada",
	"remera estampada con fotografía a elección",
	3200,
	"Acá iría una imagen de remera estampada",
	10002,
	15
  );
  productManager.addProduct(
	"Remera manga larga",
	"remera manga larga color azul",
	2500,
	"Acá iría una imagen de remera manga larga",
	10001,
	10
  );

productManager.getProducts();
productManager.getProductByID(1);
productManager.getProductByID(4);