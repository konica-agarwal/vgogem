import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinFlipHistoryComponent } from './coin-flip-history.component';

describe('CoinFlipHistoryComponent', () => {
  let component: CoinFlipHistoryComponent;
  let fixture: ComponentFixture<CoinFlipHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinFlipHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinFlipHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
