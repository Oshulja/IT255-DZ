import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsoleSpy } from '../utils';
import { FormAddComponent } from './form-add.component';
import { Room } from '../room/room.model';

describe('FormAddComponent', () => {
  let component: FormAddComponent;
  let fixture: ComponentFixture<FormAddComponent>;

  let originalConsole: any;
  let fakeConsole: any;

  let element, input, form;

  beforeEach(async () => {
    fakeConsole = new ConsoleSpy();
    originalConsole = window.console;
    (<any>window).console = fakeConsole;
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [FormAddComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  afterAll(() => (<any>window).console = originalConsole)

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.myForm.valid).toBeFalsy();
  });

  it('Name invalid when empty', fakeAsync(() => {
    let name = component.myForm.controls['name'];
    expect(name.valid).toBeFalsy();
  }));

  it('Name invalid when not starting with a capital letter', fakeAsync(() => {
    let name = component.myForm.controls['name'];
    name.setValue('lowerCase');
    expect(name.valid).toBeFalsy();
  }));

  it('Name is valid when starting with a capital letter', fakeAsync(() => {
    let name = component.myForm.controls['name'];
    name.setValue('UpperCase');
    expect(name.valid).toBeTruthy();
  }))

  it('Price is invalid when empty', fakeAsync(() => {
    let price = component.myForm.controls['price'];
    expect(price.valid).toBeFalsy();
  }));

  it('Rating is invalid when empty', fakeAsync(() => {
    let rating = component.myForm.controls['rating'];
    expect(rating.valid).toBeFalsy();
  }));

  it('Rating is valid when between 1 and 10 (including)', fakeAsync(() => {
    let rating = component.myForm.controls['rating'];
    rating.setValue(1);
    expect(rating.valid).toBeTruthy();
    rating.setValue(2);
    expect(rating.valid).toBeTruthy();
    rating.setValue(5);
    expect(rating.valid).toBeTruthy();
    rating.setValue(9);
    expect(rating.valid).toBeTruthy();
    rating.setValue(10);
    expect(rating.valid).toBeTruthy();
  }));

  it('Rating is valid when lower than 1', fakeAsync(() => {
    let rating = component.myForm.controls['rating'];
    rating.setValue(0.9);
    expect(rating.valid).toBeFalsy();
    rating.setValue(0);
    expect(rating.valid).toBeFalsy();
    rating.setValue(-1);
    expect(rating.valid).toBeFalsy();
  }));

  it('Rating is valid when higher than 10', fakeAsync(() => {
    let rating = component.myForm.controls['rating'];
    rating.setValue(10.1);
    expect(rating.valid).toBeFalsy();
    rating.setValue(11);
    expect(rating.valid).toBeFalsy();
    rating.setValue(1000);
    expect(rating.valid).toBeFalsy();
  }));

  it('Link is invalid when empty', fakeAsync(() => {
    let link = component.myForm.controls['link'];
    expect(link.valid).toBeFalsy();
  }));

  it('Description is invalid when empty', fakeAsync(() => {
    let description = component.myForm.controls['description'];
    expect(description.valid).toBeFalsy();
  }));

  it('handles name value changes', fakeAsync(() => {
    let name = component.myForm.controls['name'];
    name.setValue('Soba');
    tick();

    expect(fakeConsole.logs).toContain('Uneta vrednost je: \"Soba\" i ona je kraca od 6 karaktera');
  }));

  it('handles description value changes', fakeAsync(() => {
    let description = component.myForm.controls['description'];
    description.setValue('Opis');
    tick();

    expect(fakeConsole.logs).toContain('Uneta vrednost je: \"Opis\" i ona je kraca od 6 karaktera');
  }));

  it('handles description value changes (only 5 characters)', fakeAsync(() => {
    let description = component.myForm.controls['description'];
    description.setValue('Dugac');
    description.setValue('Dugacak opis');
    // tick();

    expect(fakeConsole.logs).toContain('Uneta vrednost je: \"Dugac\" i ona je kraca od 6 karaktera');
  }));

  it('Form is valid when all inputs are valid', fakeAsync(() => {
    let form = component.myForm;
    form.controls['name'].setValue('Soba');
    form.controls['price'].setValue(100);
    form.controls['link'].setValue("www.slika.com");
    form.controls['rating'].setValue(7.5);
    form.controls['description'].setValue("Ovo je opis");

    expect(form.valid).toBeTruthy();
  }))

  it('Form emits a value', fakeAsync(() => {

    spyOn(component.add, 'emit');

    let form = component.myForm;
    form.controls['name'].setValue('Soba');
    form.controls['price'].setValue(100);
    form.controls['link'].setValue("www.slika.com");
    form.controls['rating'].setValue(7.5);
    form.controls['description'].setValue("Ovo je opis");

    component.onSubmit(new Room(form.controls['name'].value, form.controls['description'].value, form.controls['price'].value, form.controls['link'].value, form.controls['rating'].value));

    expect(component.add.emit).toHaveBeenCalled();
    expect(component.add.emit).toHaveBeenCalledWith(new Room(form.controls['name'].value, form.controls['description'].value, form.controls['price'].value, form.controls['link'].value, form.controls['rating'].value));
  }))
});
