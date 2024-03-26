import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departments, ObjectInDepartment } from '../models/department.model';

@Injectable({
  providedIn: 'root',
})
export class FakeDepartmentService {
  private departmentData = {
    departments: [
      {
        departmentId: 1,
        displayName: 'πλεξιγκλάς',
      },
      {
        departmentId: 2,
        displayName: 'καρφίτσα',
      },
      {
        departmentId: 3,
        displayName: 'μεταξοτυπία',
      }
    ],
  };

  constructor() {}

  getDepartments(): Observable<Departments> {
    return new Observable((observer) => {
      observer.next(this.departmentData);
      observer.complete();
    });
  }

  getObjectsInDepartments(depId: number): Observable<ObjectInDepartment> {
    const departments = {
      1: { total: 10, objectIDs: [1, 2, 3, 4, 5,  7, 8, 9, 10] },
      2: { total: 10, objectIDs: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
      3: { total: 10, objectIDs: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30] },
    };

    return new Observable((observer) => {
      const department = departments[depId as keyof typeof departments];
      if (department) {
        observer.next(department);
        observer.complete();
      } else {
        observer.error(new Error('Department not found'));
      }
    });
  }
}
