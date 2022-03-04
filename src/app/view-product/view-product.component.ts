import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../common/cart-item';
import { Medicine } from '../common/medicine';
import { CartService } from '../services/cart.service';
import { MedicineService } from '../services/medicine.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  medicine: Medicine = new Medicine();
  constructor(private medicineService: MedicineService, 
              private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleMedicineDetails();
    })
  }
  handleMedicineDetails() {
    const theMedicineId: number = +this.route.snapshot.paramMap.get('id');

    this.medicineService.getMedicine(theMedicineId).subscribe(
      data => {
        this.medicine = data;
      }
    )
  }

  addToCart(){
    console.log(`Adding to cart: ${this.medicine.name}, ${this.medicine.price}`);
    const theCartitem = new CartItem(this.medicine);
    this.cartService.addToCart(theCartitem)
  }

}
