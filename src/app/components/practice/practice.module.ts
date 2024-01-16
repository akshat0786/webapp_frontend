import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PracticeRoutingModule } from './practice-routing.module';
import { UserdataService } from '../../services/userdata.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, PracticeRoutingModule, HttpClientModule],
  providers: [UserdataService],
})
export class PracticeModule {}
