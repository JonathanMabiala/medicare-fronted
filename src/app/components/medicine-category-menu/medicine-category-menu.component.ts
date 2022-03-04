import { Component, OnInit } from '@angular/core';
import { MedicineCategory } from 'src/app/common/medicine-category';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine-category-menu',
  templateUrl: './medicine-category-menu.component.html',
  styleUrls: ['./medicine-category-menu.component.css']
})
export class MedicineCategoryMenuComponent implements OnInit {

  medicineCategories: MedicineCategory[];


  constructor(private medicineService: MedicineService) { }

  ngOnInit(): void {

    this.listMedicineCategories();
    
  }

  listMedicineCategories() {
    this.medicineService.getMedicineCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.medicineCategories = data;
      }
    )
  }

}
