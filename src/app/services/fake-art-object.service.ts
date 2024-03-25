import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Departments, ObjectInDepartment } from '../models/department.model';
import { ArtObject } from '../models/artObject.model';

@Injectable({
  providedIn: 'root',
})
export class FakeArtObjectService {
 

  private objectData: ArtObject[] = [
    {
      objectID: 1,
      objectName: 'ΟΜΠΡΕΛΕΣ',
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
      objectDescription: 'Κωδ.: SCL-16',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0145-600x816.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0145-600x816.jpg',
    },
    {
      objectID: 3,
      objectName: 'ΟΜΠΡΕΛΕΣ',
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
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-02',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-02-n-1-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-02-n-1-300x192.jpg',
    },
    {
      objectID: 6,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-03',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-03-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-03-n-300x192.jpg',
    },
    {
      objectID: 7,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-04',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-04-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-04-n-300x192.jpg',
    },

    {
      objectID: 8,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-05',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-05-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-05-n-300x192.jpg',
    },
    {
      objectID: 9,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-06',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-06-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-06-n-300x192.jpg',
    },
    {
      objectID: 10,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-07',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-07-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-07-n-300x192.jpg',
    },

    {
      objectID: 11,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-08',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-08-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-08-n-300x192.jpg',
    },
    {
      objectID: 12,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-09',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-09-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-09-n-300x192.jpg',
    },
    {
      objectID: 13,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-10',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-10-n-300x192.jpg',
      primaryImageSmall: 'https://www.zongolopoulos.gr/wp-content/uploads/',
    },

    {
      objectID: 14,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-11',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-11-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-11-n-300x192.jpg',
    },
    {
      objectID: 15,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-12',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-12-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-12-n-300x192.jpg',
    },
    {
      objectID: 16,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-13',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-13-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-13-n-300x192.jpg',
    },
    {
      objectID: 17,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-14',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-14-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-14-n-300x192.jpg',
    },
    {
      objectID: 18,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-15',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-15-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-15-n-300x192.jpg',
    },
    {
      objectID: 19,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-16',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-16-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-16-n-300x192.jpg',
    },
    {
      objectID: 20,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 40,5×18,7×40,5 εκ. - Κωδ.: SCL-17',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-17-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-17-n-300x192.jpg',
    },
    {
      objectID: 21,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 40,5×18,7×40,5 εκ. - Κωδ.: SCL-18',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-18-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-18-n-300x192.jpg',
    },
    {
      objectID: 22,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 40,5×18,7×40,5 εκ. - Κωδ.: SCL-19',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-19-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-19-n-300x192.jpg',
    },
    {
      objectID: 22,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 40,5×18,7×40,5 εκ. - Κωδ.: SCL-19',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-19-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-19-n-300x192.jpg',
    },
    {
      objectID: 23,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 40,5×18,7×40,5 εκ. - Κωδ.: SCL-20',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-20-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-20-n-300x192.jpg',
    },
    {
      objectID: 24,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 40,5×18,7×40,5 εκ. - Κωδ.: SCL-21',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-21-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-21-n-300x192.jpg',
    },
    {
      objectID: 25,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 40,5×18,7×40,5 εκ. - Κωδ.: SCL-22',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-22-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-22-n-300x192.jpg',
    },

    {
      objectID: 26,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις: 61×46 εκ. - Διαστάσεις με κορνίζα: 64×49 εκ.',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/p-01-232x300.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/p-01-232x300.jpg',
    },
    {
      objectID: 27,
      objectName:
        'Καρτ ποστάλ με 8 επιλεγμένα γλυπτά του Γιώργου Ζογγολόπουλου',
      objectDescription:
        'Πακέτο που περιλαμβάνει 8 κάρτες σε χάρτινη θήκη. Διαστάσεις: 11×16 εκ.',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0004-232x300.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0004-232x300.jpg',
    },
    {
      objectID: 28,
      objectName: 'ΟΜΠΡΕΛΕΣ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 40,5×18,7×40,5 εκ. - Κωδ.: SCL-19',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/ompreles-300x295.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/ompreles-300x295.jpg',
    },
    {
      objectID: 29,
      objectName: 'ΦΑΚΟΣ ΜΕ ΟΜΠΡΕΛΑ',
      objectDescription:
        'Διαστάσεις χάρτινης θήκης: 40x12x42 εκ. - Κωδ.: SCL-20',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_omprela_1-113x300.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_omprela_1-113x300.jpg',
    },
    {
      objectID: 30,
      objectName: 'ΦΑΚΟΣ ΜΕ ΟΜΠΡΕΛΑ',
      objectDescription:
        'Διαστάσεις χάρτινης θήκης: 40x12x42 εκ. - Κωδ.: SCL-20',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_omprela_2-142x300.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_omprela_2-142x300.jpg',
    },
    {
      objectID: 31,
      objectName: 'ΦΑΚΟΣ ΜΕ ΟΜΠΡΕΛΑ',
      objectDescription:
        'Διαστάσεις χάρτινης θήκης: 40x12x42 εκ. - Κωδ.: SCL-20',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_omprela_3-123x300.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_omprela_3-123x300.jpg',
    },
    {
      objectID: 32,
      objectName: 'ΦΑΚΟΣ ΜΕ ΟΜΠΡΕΛΑ',
      objectDescription:
        'Διαστάσεις χάρτινης θήκης: 40x12x42 εκ. - Κωδ.: SCL-20',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_omprela_4-113x300.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_omprela_4-113x300.jpg',
    },
    {
      objectID: 33,
      objectName: 'ΦΑΚΟΣ ΜΕ ΦΑΚΟΥΣ',
      objectDescription:
        'Διαστάσεις γλυπτού: 31,5x9x9 εκ., Διαστάσεις χάρτινης θήκης: 33x10x10 εκ. - Κωδ.: SCL-21',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_fakous_1-137x300.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_fakous_1-137x300.jpg',
    },
    {
      objectID: 34,
      objectName: 'ΚΕΝΟ ΜΕ ΟΜΠΡΕΛΑ',
      objectDescription:
        'Διαστάσεις γλυπτού: 27,5x20x7,5 εκ., - Κωδ.: SCL-22',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/keno_me_omprela_1-211x300.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/keno_me_omprela_1-211x300.jpg',
    },
    {
      objectID: 35,
      objectName: 'ΡΟΜΒΟΣ ΜΕ ΕΛΑΣΜΑΤΑ',
      objectDescription: 'Διαστάσεις γλυπτού: 22x20x5 εκ. - Κωδ.: SCL-23',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/rombos_me_elasmata-300x285.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/rombos_me_elasmata-300x285.jpg',
    },
    {
      objectID: 33,
      objectName: 'ΦΑΚΟΣ ΜΕ ΦΑΚΟΥΣ',
      objectDescription:
        'Διαστάσεις γλυπτού: 31,5x9x9 εκ., Διαστάσεις χάρτινης θήκης: 33x10x10 εκ. - Κωδ.: SCL-21',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_fakous_1-137x300.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_fakous_1-137x300.jpg',
    },

    {
      objectID: 36,
      objectName: 'ΚΕΝΟ ΜΕ ΟΜΠΡΕΛΑ',
      objectDescription:
        'Διαστάσεις γλυπτού: 27,5x20x7,5 εκ., - Κωδ.: SCL-22',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/keno_me_omprela_1-211x300.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/keno_me_omprela_1-211x300.jpg',
    },
    {
      objectID: 37,
      objectName: 'ΡΟΜΒΟΣ ΜΕ ΕΛΑΣΜΑΤΑ',
      objectDescription: 'Διαστάσεις γλυπτού: 22x20x5 εκ. - Κωδ.: SCL-23',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/rombos_me_elasmata-300x285.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/rombos_me_elasmata-300x285.jpg',
    },
    {
      objectID: 38,
      objectName: 'ΡΟΜΒΟΣ ΜΕ ΕΛΑΣΜΑΤΑ',
      objectDescription: 'Διαστάσεις γλυπτού: 22x20x5 εκ. - Κωδ.: SCL-23',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/rombos_me_elasmata-300x285.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/rombos_me_elasmata-300x285.jpg',
    },

    {
      objectID: 39,
      objectName: 'ΚΕΝΟ ΜΕ ΟΜΠΡΕΛΑ',
      objectDescription:
        'Διαστάσεις γλυπτού: 27,5x20x7,5 εκ., - Κωδ.: SCL-22',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/keno_me_omprela_1-211x300.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/keno_me_omprela_1-211x300.jpg',
    },
    {
      objectID: 40,
      objectName: 'ΡΟΜΒΟΣ ΜΕ ΕΛΑΣΜΑΤΑ',
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
    return this._httpClient.get<ArtObject>(this.BASE_URL + `${objectId}`);
  }

  searchObject(
    queryString: any,
    departmentId: any
  ): Observable<ObjectInDepartment> {
    return this._httpClient.get<ObjectInDepartment>(
      this.BASE_URL + `/search?departmentId=${departmentId}&q=${queryString}`
    );
  }
}
