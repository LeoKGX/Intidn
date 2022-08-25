import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAboutmeComponent } from './editar-aboutme.component';

describe('EditarAboutmeComponent', () => {
  let component: EditarAboutmeComponent;
  let fixture: ComponentFixture<EditarAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAboutmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
