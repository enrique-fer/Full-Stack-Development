function Invoice(subTotal) {
    this.taxRate = 0.06;
    this.subTotal = subTotal;

    this.total = setInterval(() => {
        console.log((this.taxRate * this.subTotal) + this.subTotal);
    }, 2000);
}

const inv = new Invoice(200);