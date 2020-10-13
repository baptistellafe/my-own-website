import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatYouSeePage } from './what-you-see.page';

describe('WhatYouSeePage', () => {
  let component: WhatYouSeePage;
  let fixture: ComponentFixture<WhatYouSeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatYouSeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatYouSeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
