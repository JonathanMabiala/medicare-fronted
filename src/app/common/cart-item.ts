import { Medicine } from "./medicine";

export class CartItem {

    id: string;
    name:string;
    imageUrl: string;
    price: number;
    quantity: number;

   constructor(medicine: Medicine){
       this.id = medicine.id;
       this.name = medicine.name;
       this.imageUrl = medicine.imageUrl;
       this.price = medicine.price;

       this.quantity = 1;
   }

}
