enum OrderStatus {
    Created,
    Assembling,
    Delivering,
    Done
}

type Product = {
    name: string
    price: number
}

class ProductManager {
    catalog: Product[] = []

    addProduct(product: Product) {
        this.catalog.push(product);
    }
}

const productManager = new ProductManager()

const initCatalog: Product[] = [
    {
        name: 'Ноутбук',
        price: 54999
    },
    {
        name: 'Смартфон',
        price: 31999
    },
    {
        name: 'Беспроводные наушники',
        price: 5999
    },
    {
        name: 'Смарт-часы',
        price: 10999
    },
    {
        name: 'Игровая консоль',
        price: 27999
    },
    {
        name: 'Телевизор',
        price: 45999
    },
    {
        name: 'Планшет',
        price: 24999
    },
    {
        name: 'Умная колонка',
        price: 3999
    },
    {
        name: 'Клавиатура механическая',
        price: 2999
    },
    {
        name: 'Графический планшет',
        price: 11999
    }
]

initCatalog.forEach(product => productManager.addProduct(product));

class Order {
    products: Product[]
    address: string
    orderDate: Date
    deliveryDate: Date
    status: OrderStatus = OrderStatus.Created

    constructor(products: Product[], address: string, deliveryDays: number = 10) {
        this.products = products;
        this.address = address;
        this.orderDate = new Date()
        this.deliveryDate = new Date(this.orderDate)
        this.deliveryDate.setDate(this.deliveryDate.getDate() + deliveryDays);

        console.log('Created order:');
        console.log('Products:')
        products.forEach(product => {
            console.log(`${product.name} - ${product.price}`);
        })
        console.log(`Order sum: ${this.orderSum}`)
        console.log(`Delivery address: ${this.address}`)
    }

    get orderSum() {
        return this.products.reduce((sum, prod) => sum += prod.price, 0)
    }
}

class Cart {
    products: Product[] = []

    addProduct(product: Product) {
        this.products.push(product);
        console.log(`Added product to cart: ${product.name}`)
    }

    removeProduct(id: number) {
        console.log(`Removed product from cart: ${this.products[id].name}`)
        this.products.filter((_, index) => index !== id)
    }

    clearCart() {
        this.products = [];
        console.log('Cart is cleared')
    }

    get cartSum() {
        return this.products.reduce((sum, prod) => sum += prod.price, 0)
    }
}

const cart = new Cart();

class OrderManager{
    orders: Order[] = [];

    createOrder(address: string, deliveryDays?: number) {
        const order = new Order(
            cart.products,
            address,
            deliveryDays
        )
        this.orders.push(order);
        cart.clearCart();
    }
}

const orderManager = new OrderManager();

cart.addProduct(productManager.catalog[0]);
cart.addProduct(productManager.catalog[4]);
cart.addProduct(productManager.catalog[2]);
cart.addProduct(productManager.catalog[2]);
cart.addProduct(productManager.catalog[7]);
cart.addProduct(productManager.catalog[1]);
cart.addProduct(productManager.catalog[9]);

orderManager.createOrder('г. Нигде, ул. Несуществующая, д. -1');