import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../common/cart-item';
import { Medicine } from '../common/medicine';
import { CartService } from '../services/cart.service';
import { MedicineService } from '../services/medicine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  medicines: Medicine[]=[];
  currentCategoryId:number;
  searchMode: boolean;

  constructor(private medicineService: MedicineService,
              private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listMedicines();
    })
    
  }

 
  listMedicines() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchMedicines();
    }else{
      this.handleListMedicines();
    }
   
  }

  handleSearchMedicines() {

    const theKeyWord: string = this.route.snapshot.paramMap.get('keyword');

    //now search

    this.medicineService.searchMedicines(theKeyWord).subscribe(
      data => {
        this.medicines = data;
      }
    )
  }

  handleListMedicines(){
     //check if "id" parameter is available
     const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id')

     if(hasCategoryId){
       this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
 
       
     }else{
       //
       this.currentCategoryId = 1
     }
 
     //
     this.medicineService.getMedicineList(this.currentCategoryId).subscribe(
       
       data => {
         this.medicines = data;
       }
     )
  }

  addToCart(theMedicine: Medicine){
    console.log(`Addingto cart: ${theMedicine.name}, ${theMedicine.price}`);

    const theCartItem = new CartItem(theMedicine);
    this.cartService.addToCart(theCartItem);
  }
}
