import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { ConvertToSpacePipe } from './../shared/convert-to-space.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { ProductGuardService } from "./product-guard.service";
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([{ path : 'products', component : ProductListComponent },
    { path : 'products/:id', 
    canActivate :  [ProductGuardService],
    component : ProductDetailComponent },
  ]),
    SharedModule 
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe,
  ],
  providers : [
    ProductGuardService,
    ProductService
  ]
})
export class ProductModule { }
