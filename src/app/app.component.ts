import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import * as htmlDocx from 'html-docx-js-typescript';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'editor';

  htmlDocument = '<!DOCTYPE html> <html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge">    <meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head>';
  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
  };

  saveDocx(){
    this.htmlDocument + '<body>' + this.htmlContent + '</body></html>';
    htmlDocx.asBlob(this.htmlDocument).then( (data: any) => {
      saveAs(data, 'plantilla1.docx') // save a docx file
    });
  }

  
}
