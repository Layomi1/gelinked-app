import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
// import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // MatToolbarModule,
    FormsModule,
    // MatIconModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class MaterialModule {
  static forRoot: any;
}
