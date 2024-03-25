import { TestBed } from '@angular/core/testing';
import { FakeDepartmentService } from './fake-department.service';

describe('FakeDepartmentService', () => {
  let service: FakeDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeDepartmentService);
  });


  fit('should return the list of departments', (done) => {
    const expectedDepartments = [
      { departmentId: 1, displayName: 'πλεξιγκλάς' },
      { departmentId: 2, displayName: 'καρφίτσα' },
      { departmentId: 3, displayName: 'μεταξοτυπία' },
        { departmentId: 4, displayName: 'γλυπτος' },
    ];

    service.getDepartments().subscribe({
      next: (departments) => {
        expect(departments.departments).toEqual(expectedDepartments);
        done();
      },
      error: done.fail,
    });
  });


    fit('should return the objects in a department', (done) => {
        const expectedObjects = { total: 10, objectIDs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
    
        service.getObjectsInDepartments(1).subscribe({
        next: (objects) => {
            expect(objects).toEqual(expectedObjects);
            done();
        },
        error: done.fail,
        });
    });

    fit ('should return the objects in department 2', (done) => {
        const expectedObjects = { total: 10, objectIDs: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] };

        service.getObjectsInDepartments(2).subscribe({
            next: (objects) => {
                expect(objects).toEqual(expectedObjects);
                done();
            },
            error: done.fail,
        });
    });


    fit('should return an error when the department is not found', (done) => {
        const expectedError = new Error('Department not found');
        
        service.getObjectsInDepartments(5).subscribe({
            next: (objects) => { // Ensure this matches the expected data type
                done.fail('Unexpected success response');
            },
            error: (error) => {
                expect(error).toEqual(expectedError);
                done();
            },
        });

 
    });
});
