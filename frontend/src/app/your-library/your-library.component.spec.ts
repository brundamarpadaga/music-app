import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourLibraryComponent } from './your-library.component';

describe('YourLibraryComponent', () => {
  let component: YourLibraryComponent;
  let fixture: ComponentFixture<YourLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourLibraryComponent]
    });
    fixture = TestBed.createComponent(YourLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
