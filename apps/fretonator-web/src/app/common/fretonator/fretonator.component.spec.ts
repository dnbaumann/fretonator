import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretonatorComponent } from './fretonator.component';
import { FretonatorModule } from './fretonator.module';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('FretonatorComponent', () => {
  @Component({
    selector: 'app-fretonator-spec',
    template: `
      <app-fretonator [modeMap]="[{
                                  name: 'f',
                                  sharp: false,
                                  flat: false,
                                  doubleFlat: false,
                                  doubleSharp: false,
                                  displayName: 'F'
                                }]"
                      [fretMap]="[
                      { string: 'A', fret: 0, displayName: 'A', degree: 'dominant' },
                      { string: 'A', fret: 2, displayName: 'B', degree: 'submediant' }]">
      </app-fretonator>
    `
  })
  class FretonatorComponentSpec {
  }

  let component: FretonatorComponentSpec;
  let fixture: ComponentFixture<FretonatorComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FretonatorComponentSpec],
      imports: [FretonatorModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretonatorComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
