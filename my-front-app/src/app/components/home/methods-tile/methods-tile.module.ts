import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MethodsTileComponent } from './methods-tile.component';

@NgModule({
  declarations: [MethodsTileComponent],
  imports: [CommonModule, MatTreeModule, MatIconModule],
  exports: [MethodsTileComponent],
})
export class MethodsTileModule {}