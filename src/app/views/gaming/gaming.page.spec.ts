import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GamingPage } from './gaming.page';

describe('GamingPage', () => {
  let component: GamingPage;
  let fixture: ComponentFixture<GamingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GamingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
