import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestingMenuPage } from './testing-menu.page';

describe('TestingMenuPage', () => {
  let component: TestingMenuPage;
  let fixture: ComponentFixture<TestingMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestingMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
