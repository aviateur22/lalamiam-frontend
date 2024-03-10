import { Component } from '@angular/core';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.css']
})
export class SelectImageComponent {
  isImageSelected: boolean = false;
  previewSelectedImageBase64: string ='';
  imageSelected: File|undefined;

  loadSelectedImage(file: File | undefined){
    this.isImageSelected = false;
    if(file){
      this.imageSelected = file;
      const fileReader = new FileReader();
      // Lecture image
      fileReader.readAsDataURL(file);
      fileReader.onload = ()=> {
        this.previewSelectedImageBase64 = fileReader.result as string;
        this.isImageSelected = true;
      }
    }
  }
}
