import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import * as moment from 'moment';
import { Blog } from '../../models/blog';
import { Section } from '../../models/section';
import { File } from '../../models/file';

@Component({
  selector: 'dr-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnChanges {

  @Input() blog: Blog;
  @Output() save = new EventEmitter<Blog>();

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges() {
    this.form = null;
    this._fillForm();
  }

  onSave(ev: any) {
    ev.preventDefault();
    this.save.emit(this.form.value);
  }

  onDeleteSection(order: number) {
    const control = <FormArray>this.form.controls['sections'];
    const index = control.getRawValue().findIndex((x) => x.order === order);
    control.removeAt(index);
    const values = <Section[]>control.getRawValue();
    values.forEach((x) => { if (x.order >= order) { x.order--; }});
    control.patchValue(values);
  }

  onSwapSection(order: any) {
    const control = <FormArray>this.form.controls['sections'];
    const values = <Section[]>control.getRawValue();
    const obj1 = values.find((x) => x.order === order);
    const obj2 = values.find((x) => x.order === order + 1);
    if (obj1 && obj2) {
      obj1.order ++;
      obj2.order --;
      control.patchValue(values);
    }
  }

  onAddSection(order: any) {
    const control = <FormArray>this.form.controls['sections'];
    const values = <Section[]>control.getRawValue();
    values.forEach((x) => { if (x.order > order) { x.order++; }});
    control.patchValue(values);
    control.push(this._fillSection({ order: order + 1, text: null, files: null }));
  }

  onAddFile(order: any) {
    const control = <FormArray>this.form.controls['sections'];
    const index = control.getRawValue().findIndex((x) => x.order === order);
    const section = <FormArray>(<FormGroup>control.at(index)).controls['files'];
    const values = <File[]>section.getRawValue();
    section.push(this._fillFile({ order: values.length + 1 , content: null, name: null, path: null }));
  }

  private _fillForm() {
    const blog: Blog = this.blog || { $key: null, key: '', tags: [], title: '', date_published: '', github: '', sections: [null] };
    this.form = this.formBuilder.group({
      key: blog.key,
      $key: blog.$key,
      tags: blog.tags,
      title: blog.title,
      github: blog.github,
      date_published: blog.date_published ? moment(blog.date_published).format('YYYY-MM-DDTMM:ss') : null,
      sections: this.formBuilder.array(this._fillSectionArray(blog.sections))
    });
  }

  private _fillSectionArray(sections: Section[]): any[] {
    const result: any[] = [];
    (sections || [null]).forEach(element => { result.push(this._fillSection(element)); });
    return result;
  }

  private _fillSection(data: Section) {
    const order: number = data ? data.order : this.form && this.form.controls['sections'] ?
      (<Section[]>(<FormArray>this.form.controls['sections']).getRawValue()).length + 1 : 1;

    const section = {
        order: order,
        text: data ? data.text : '',
        files: this.formBuilder.array(data && data.files && data.files.length > 0 ? this._fillFileArray(data.files) : [])
      };
    return this.formBuilder.group(section);
  }

  private _fillFileArray(files: File[]) {
    const result: any[] = [];
    (files || [null]).forEach(element => { result.push(this._fillFile(element)); });
    return result;
  }

  private _fillFile(data: File) {
    const order: number = data ? data.order : this.form && this.form.controls['files'] ?
      (<File[]>(<FormArray>this.form.controls['files']).getRawValue()).length + 1 : 1;

    const file: any = {
      order: order,
      name: data ? data.name : '',
      content: data ? data.content : '',
      path: data ? data.path : ''
    };
    return this.formBuilder.group(file);
  }

}

