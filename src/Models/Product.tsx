interface Product {
    id: number;
    productName: string;
    description: string;
    price: number;
    quantity: number;
    categoryId: number;
    active: boolean;
    insertedDate: Date;
    insertedBy: number;
    updatedDate: Date;
    updatedBy: number;
    image: string;
}
export default Product;