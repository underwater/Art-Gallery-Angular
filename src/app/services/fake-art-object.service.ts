import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map, of } from 'rxjs';
import { Departments, ObjectInDepartment } from '../models/department.model';
import { ArtObject } from '../models/artObject.model';

@Injectable({
  providedIn: 'root',
})
export class FakeArtObjectService {
 
  private fakeObjectList: ArtObject[] = [
    {
      objectID: 1,
      objectName: 'ΟΜΠΡΕΛΕΣ',
      departmentId: 1,
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 40,5×18,7×40,5 εκ. - Κωδ.: SCL-17',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0001-1-300x283.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0001-1-300x283.jpg',
    },
    {
      objectID: 2,
      objectName: 'ΠΟΣΕΙΔΩΝΑΣ',
      departmentId: 1,
      objectDescription: 'Κωδ.: SCL-16',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0145-600x816.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0145-600x816.jpg',
    },
    {
      objectID: 3,
      objectName: 'ΟΜΠΡΕΛΕΣ',
      departmentId: 1,
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 40x18x40 εκ. - Κωδ.: SCL-15',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/ksylo-282x300.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/ksylo-282x300.jpg',
    },
    {
      objectID: 4,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      departmentId: 1,
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 16x10x15 εκ. - Κωδ.: SCL-01',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-01-n-300x233.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-01-n-300x233.jpg',
    },
    {
      objectID: 5,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      departmentId: 1,
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-02',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-03-n-4-300x208.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-03-n-4-300x208.jpg',
    },
    {
      objectID: 6,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      departmentId: 1,
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-03',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-03-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-03-n-300x192.jpg',
    },
    {
      objectID: 7,
      objectName: 'ΟΜΠΡΕΛΕΣ',
      departmentId: 1,
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 26x11x26 εκ. - Κωδ.: SCL-07',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-07-n-2-300x203.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-07-n-2-300x203.jpg',
    },
    {
      objectID: 8,
      objectName: 'ΟΜΠΡΕΛΑ',
      departmentId: 1,
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 33x15x40 εκ. - Κωδ.: SCL-08',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-08-n-300x225.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-08-n-300x225.jpg',
    },
    {
      objectID: 9,
      objectName: 'ΚΕΝΟ & ΣΦΑΙΡΑ',
      departmentId: 1,
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 24x12x21 εκ. - Κωδ.: SCL-09',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-09-n-1-300x190.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-09-n-1-300x190.jpg',
    },
    {
      objectID: 10,
      objectName: 'ΧΩΡΙΣ ΤΙΤΛΟ',
      departmentId: 1,
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 24x12x21 εκ. - Κωδ.: SCL-10',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-10-300x200.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-10-300x200.jpg',
    },

    {
      objectID: 11,
      objectName: '4 ΕΠΟΧΕΣ',
      departmentId: 2,
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 25x10x12 εκ. - Κωδ.: SCL-12',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-12-n-300x204.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-12-n-300x204.jpg',
    },
    {
      objectID: 12,
      objectName: '4 ΕΠΟΧΕΣ',
      departmentId: 2,
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 44x13x18 εκ. - Κωδ.: SCL-13',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-13-n-300x146.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-13-n-300x146.jpg',
    },
    {
      objectID: 13,
      objectName: '4 ΕΠΟΧΕΣ',
      departmentId: 2,
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 25x10x12 εκ. - Κωδ.: SCL-14',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-14-n-300x200.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-14-n-300x200.jpg',
    },
    {
      objectID: 14,
      objectName: 'ΧΩΡΙΣ ΤΙΤΛΟ',
      departmentId: 2,
      objectDescription:
        'Διαστάσεις με κορνίζα και τζάμι: 82×81 εκ. / Διαστάσεις χωρίς κορνίζα: 77×76 εκ. - Κωδ.: SLN-01',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf5763-275x300.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf5763-275x300.jpg',
    },

    {
      objectID: 15,
      objectName: 'ΣΥΝΘΕΣΗ',
      departmentId: 2,
      objectDescription: 'σκουλαρίκια σε μασίφ ασήμι 925 – Κωδ.: SR-E-01-N',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-e-01-n-1-600x400.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-e-01-n-1-600x400.jpg',
    },
    {
      objectID: 16,
      objectName: 'ΣΥΝΘΕΣΗ',
      departmentId: 2,
      objectDescription:
        'σκουλαρίκια σε μασίφ ασήμι 925 επιχρυσωμένο με 24Κ – Κωδ.: SG-E-01-N',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-e-01-n-2-600x400.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-e-01-n-2-600x400.jpg',
    },
    {
      objectID: 17,
      objectName: 'ΣΥΝΘΕΣΗ',
      departmentId: 2,
      objectDescription:
        'περιδέραιο σε μασίφ ασήμι 925 επιχρυσωμένο με 24Κ – Κωδ.: SG-P-01-N',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-p-01-n-1-600x400.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-p-01-n-1-600x400.jpg',
    },
    {
      objectID: 18,
      objectName: 'ΠΟΥΛΙ',
      departmentId: 2,
      objectDescription:
        'περιδέραιο σε μασίφ ασήμι 925 επιχρυσωμένο με 24Κ – Κωδ.: SG-P-03-N',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-p-03-n-600x450.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-p-03-n-600x450.jpg',
    },
    {
      objectID: 19,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      departmentId: 2,
      objectDescription:
        'Διαστάσεις γλυπτού: 19x7x13 εκ., Διαστάσεις με θήκη πλεξιγκλάς: 24x12x21 εκ. - Κωδ.: SCL-10',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-10-300x200.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-10-300x200.jpg',
    },

    {
      objectID: 21,
      objectName: 'Έξι σχέδια του γλυπτού Διάφραγμα',
      departmentId: 3,
      objectDescription:
        'Διαστάσεις κάθε σχεδίου: 30×21,5 εκ., Διαστάσεις κασετίνας: 31,5×24,5×2,5 εκ. - Κωδικός: DWG-01',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/1-600x398.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/1-600x398.jpg',
    },
    {
      objectID: 22,
      objectName: 'Έξι σχέδια του γλυπτού Διάφραγμα',
      departmentId: 3,
      objectDescription:
        'Διαστάσεις κάθε σχεδίου: 30×21,5 εκ., Διαστάσεις κασετίνας: 31,5×24,5×2,5 εκ. - Κωδικός: DWG-01',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/2-300x279.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/2-300x279.jpg',
    },
    {
      objectID: 23,
      objectName: 'Έξι σχέδια του γλυπτού Διάφραγμα', 
      departmentId: 3,
      objectDescription:
        'Διαστάσεις κάθε σχεδίου: 30×21,5 εκ., Διαστάσεις κασετίνας: 31,5×24,5×2,5 εκ. - Κωδικός: DWG-01',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/3-600x403.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/3-600x403.jpg',
    },
    {
      objectID: 24,
      objectName: 'Έξι σχέδια του γλυπτού Διάφραγμα',
      departmentId: 3,
      objectDescription:
        'Διαστάσεις κάθε σχεδίου: 30×21,5 εκ., Διαστάσεις κασετίνας: 31,5×24,5×2,5 εκ. - Κωδικός: DWG-01',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/4-300x269.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/4-300x269.jpg',
    },
    {
      objectID: 25,
      objectName: 'Έξι σχέδια του γλυπτού Διάφραγμα',
      departmentId: 3,
      objectDescription:
        'Διαστάσεις κάθε σχεδίου: 30×21,5 εκ., Διαστάσεις κασετίνας: 31,5×24,5×2,5 εκ. - Κωδικός: DWG-01',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0028-300x75.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0028-300x75.jpg',
    },
    {
      objectID: 26,
      objectName: 'Σουβέρ με γλυπτά σε πλεξιγκλάς',
      departmentId: 3,
      objectDescription:
        'Διαστάσεις κάθε σουβέρ: 9x9x0,3 εκ., Διαστάσεις θήκης: 10x10x3,5 εκ. - Κωδικός: SVR-01',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/glypta-600x391.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/glypta-600x391.jpg',
    },
    {
      objectID: 27,
      objectName: 'Σουβέρ με 6 ζωγραφικά έργα σε πλεξιγκλάς',
      departmentId: 3,
      objectDescription:
        'Διαστάσεις κάθε σουβέρ: 9x9x0,3 εκ., Διαστάσεις θήκης: 10x10x3,5 εκ. - Κωδικός: SVR-01',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/zografika-600x402.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/zografika-600x402.jpg',
    },
    {
      objectID: 28,
      objectName: 'Σουβέρ με ζωγραφικά έργα σε πλεξιγκλάς – κόκκινα παστέλ',
      departmentId: 3,
      objectDescription:
        'Διαστάσεις κάθε σουβέρ: 9x9x0,3 εκ., Διαστάσεις θήκης: 10x10x3,5 εκ. - Κωδικός: SVR-01',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/kokkini_seira-600x398.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/kokkini_seira-600x398.jpg',
    },
    {
      objectID: 29,
      objectName: 'Σουβέρ με ζωγραφικά έργα σε πλεξιγκλάς – μπλε παστέλ',
      departmentId: 3,
      objectDescription:
        'Διαστάσεις κάθε σουβέρ: 9x9x0,3 εκ., Διαστάσεις θήκης: 10x10x3,5 εκ. - Κωδικός: SVR-01',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/mple_seira-600x408.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/mple_seira-600x408.jpg',
    },

    {
      objectID: 30,
      objectName: 'ΡΟΜΒΟΣ ΜΕ ΕΛΑΣΜΑΤΑ',
      departmentId: 4,
      objectDescription: 'Διαστάσεις γλυπτού: 22x20x5 εκ. - Κωδ.: SCL-23',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/rombos_me_elasmata-300x285.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/rombos_me_elasmata-300x285.jpg',
    },
  ];

  BASE_URL = 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/';

  constructor(private _httpClient: HttpClient) {}

  getObjectDetails(objectId: any): Observable<ArtObject> {
    const object = this.fakeObjectList.find((obj) => obj.objectID === objectId);
    return new Observable((observer) => {
      observer.next(object);
      observer.complete();
    });
  }

  searchObject(
    queryString: any,
    departmentId: any
  ): Observable<ObjectInDepartment> {

    const filteredObjects = this.fakeObjectList.filter(obj => obj.objectName.includes(queryString) && obj.departmentId === departmentId) as unknown as ArtObject[];
    if (!filteredObjects) {
      return of({} as ObjectInDepartment);
    }
    return new Observable((observer) => {
      observer.next({
        total: filteredObjects.length,
        objectIDs: filteredObjects.map((obj: ArtObject) => obj.objectID),
      });
      observer.complete();
    });
  }

  getPrimaryImageForObjectId(objectId: any): string {
    const object = this.fakeObjectList.find((obj) => obj.objectID === objectId);
    return object ? object.primaryImage : '';
  }
}
