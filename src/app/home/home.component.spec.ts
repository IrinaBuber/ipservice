import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpServiceComponent } from './home.component';

describe('IpServiceComponent', () => {
  let component: IpServiceComponent;
  let fixture: ComponentFixture<IpServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
