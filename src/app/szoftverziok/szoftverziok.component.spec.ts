import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzoftverziokComponent } from './szoftverziok.component';

describe('SzoftverziokComponent', () => {
  let component: SzoftverziokComponent;
  let fixture: ComponentFixture<SzoftverziokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SzoftverziokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzoftverziokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
