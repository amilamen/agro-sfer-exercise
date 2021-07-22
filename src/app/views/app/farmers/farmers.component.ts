import { Component, OnInit } from '@angular/core';
import farmersItems, { IFarmers } from 'src/app/data/farmers';

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.scss'],
})
export class FarmersComponent implements OnInit {
  data: IFarmers[] = farmersItems;
  constructor() {}

  ngOnInit(): void {}
}
