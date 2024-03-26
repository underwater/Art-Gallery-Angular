import { Component, Input, OnInit } from '@angular/core';
import { ArtObject } from 'src/app/models/artObject.model';

@Component({
  selector: 'app-art-object-details-dialog',
  templateUrl: './art-object-details-dialog.component.html',
  styleUrls: ['./art-object-details-dialog.component.scss'],
})
export class ArtObjectDetailsDialogComponent implements OnInit {
  @Input() artObject: ArtObject | null = null;
  constructor() {}

  get imgSrc() {
    return (
      this.artObject?.primaryImageSmall ||
      'http://www.zongolopoulos.gr/wp-content/uploads/2022/10/00456.jpg'
    );
  }

  ngOnInit(): void {}
}
