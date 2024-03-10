import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVoterComponent } from './edit-voter.component';

describe('EditVoterComponent', () => {
  let component: EditVoterComponent;
  let fixture: ComponentFixture<EditVoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditVoterComponent]
    });
    fixture = TestBed.createComponent(EditVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
