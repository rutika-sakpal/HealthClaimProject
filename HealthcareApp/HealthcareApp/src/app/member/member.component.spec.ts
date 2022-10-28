import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MemberComponent } from './member.component';

describe('MemberComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MemberComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MemberComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HealthcareApp'`, () => {
    const fixture = TestBed.createComponent(MemberComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HealthcareApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MemberComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('HealthcareApp app is running!');
  });
});
