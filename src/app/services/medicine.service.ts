import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from '../common/medicine';
import { map } from 'rxjs/operators';
import { MedicineCategory } from '../common/medicine-category';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {




  private baseUrl = 'http://localhost:8080/api/medicine'
  private categoryUrl = 'http://localhost:8080/api/medicine-category';

  constructor(private httpClient: HttpClient) { }

  getMedicineList(theCategoryId: number): Observable<Medicine[]> {

    // need to build based ont the url

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getMedicines(searchUrl);
  }

  getMedicine(theMedicineId: number): Observable<Medicine> {
    //Need to build the url based on the produc id

    const medicinetUrl = `${this.baseUrl}/${theMedicineId}`;

    return this.httpClient.get<Medicine>(medicinetUrl);
  }

  searchMedicines(theKeyWord: string): Observable<Medicine[]> {

    //Build an url based on the keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyWord}`;

    return this.getMedicines(searchUrl);
  }


  private getMedicines(searchUrl: string): Observable<Medicine[]> {
    return this.httpClient.get<GetResponseMedicines>(searchUrl).pipe(
      map(response => response._embedded.medicine)
    );
  }

  getMedicineCategories(): Observable<MedicineCategory[]> {

    return this.httpClient.get<GetResponseMedicineCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.medicineCategory)
    );
  }



  

}
interface GetResponseMedicines {
  _embedded: {
    medicine: Medicine[];
  }
}

interface GetResponseMedicineCategory {
  _embedded: {
    medicineCategory: MedicineCategory[];
  }
}

