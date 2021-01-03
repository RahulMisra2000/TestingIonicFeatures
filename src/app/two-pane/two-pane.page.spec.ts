import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwoPanePage } from './two-pane.page';

describe('TwoPanePage', () => {
  let component: TwoPanePage;
  let fixture: ComponentFixture<TwoPanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoPanePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwoPanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
