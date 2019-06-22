import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkParserComponent } from './link-parser.component';

describe('LinkParserComponent', () => {
  let component: LinkParserComponent;
  let fixture: ComponentFixture<LinkParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
