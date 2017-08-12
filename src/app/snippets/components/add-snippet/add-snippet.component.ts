import moment from 'moment-es6';
import { Component, OnInit, OnChanges, Input, Inject, Output, EventEmitter } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Snippet } from './../../models/snippet';
import { SnippetService } from './../../services/snippet.service';

@Component({
  selector: 'dr-add-snippet',
  templateUrl: './add-snippet.component.html',
  styleUrls: ['./add-snippet.component.scss']
})
export class AddSnippetComponent implements OnChanges {

  @Input() snippet: Snippet;
  @Output() finished = new EventEmitter();

  constructor(
    public dialog: MdDialog,
    private _snippetService: SnippetService) {}

  ngOnChanges() {
    console.log('ngonchanges', this.snippet)
    if (this.snippet) {
      setTimeout(() => {
        const dialogRef2 = this.dialog.open(DialogResultExampleDialogComponent, {
          data: this.snippet
        });
        dialogRef2.afterClosed().subscribe((result: FormGroup) => {
          if (result) {
            console.log('SAVING', result.value);
            this._snippetService.saveSnippet(result.value);
          } else {
            console.log('CANCELING');
          }
          this.finished.next(result);
        });
      });
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogResultExampleDialogComponent, {
        data: null
    });
    dialogRef.afterClosed().subscribe((result: FormGroup) => {
      if (result) {
        console.log('SAVING', result.value);
        this._snippetService.saveSnippet(result.value);
      } else {
        console.log('CANCELING');
      }
    });
  }

}

@Component({
  selector: 'dr-add-snippet-dialog',
  templateUrl: 'add-snippet-dialog.html',
  styleUrls: ['./add-snippet.component.scss']
})
export class DialogResultExampleDialogComponent implements OnInit {

  snippet: Snippet;
  form: FormGroup;

  constructor(
    public dialogRef: MdDialogRef<DialogResultExampleDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: Snippet,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.snippet = this.data;
    this.form = null;
    this._fillForm();
  }

  private _fillForm() {
    const snippet = this.snippet || new Snippet();

    this.form = this.formBuilder.group({
      $key: [snippet.$key,  [Validators.required]],
      language: snippet.language,
      category: snippet.category,
      title: [snippet.title, [  Validators.required ]],
      description: snippet.description,
      code: snippet.code,
      extension: snippet.extension,
      date_published: snippet.date_published ? moment(snippet.date_published).format('YYYY-MM-DDTMM:ss') : null,
      date_created: snippet.date_published ? moment(snippet.date_published).format('YYYY-MM-DDTMM:ss') : null,
      date_reviewed: snippet.date_published ? moment(snippet.date_published).format('YYYY-MM-DDTMM:ss') : null,
    });
  }
}
