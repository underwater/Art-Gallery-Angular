

# COMPONENT TREE
----------------
<app-home-page>
	<app-header>
   	<app-department-details>
		<app-art-object-card>
            <app-image-loader> (**)
		    (dialog) <app-art-object-details-dialog> 


(**) The ImageLoaderComponent in Angular is designed to load images asynchronously while displaying a loading indicator until the image is fully loaded.


# SERVICES
----------
- DepartmentSerice -->  fetches a list of all departments within the museum. It returns an Observable of Departments, which is likely a collection of department

- ArtObjectService --> getObjectDetails(objectId: any): Observable<ArtObject>: This method takes an objectId as a parameter and returns an Observable of ArtObject. It makes an HTTP GET request to the Met Museum API to fetch details about a specific art object

- DepartmentArtStateService --> Acts as a higher-level service that orchestrates and manages the state and data flow concerning art objects and departments within the application. It utilizes both ArtObjectService and DepartmentService to aggregate and process data in a way that's useful for the application's UI.

# MODELS
--------
* ArtObject
* DepartmentDetails


