import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AsyncValidator } from './validation/asyncValidator';
import { UniqueService } from './services/unique.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular File Upload Example with PHP';
  
  constructor(public http: HttpClient)
  {
    
  }
  file=new FormControl('')
  file_data:any=''
  fileChange(index,event) {
    
    const fileList: FileList = event.target.files;
    //check whether file is selected or not
    if (fileList.length > 0) {

        const file = fileList[0];
        //get file information such as name, size and type
        console.log('finfo',file.name,file.size,file.type);
        //max file size is 4 mb
        if((file.size/1048576)<=4)
        {
          let formData = new FormData();
          let info={id:2,name:'raja'}
          formData.append('file', file, file.name);
          formData.append('id','2');
          formData.append('tz',new Date().toISOString())
          formData.append('update','2')
          formData.append('info',JSON.stringify(info))
          this.file_data=formData
          
        }else{
          //this.snackBar.open('File size exceeds 4 MB. Please choose less than 4 MB','',{duration: 2000});
        }
        
    }

  }

  ip="http://127.0.0.1/async/"
  
  uploadFile()
    {
      this.http.post(this.ip+'upload-file.php',this.file_data)
      .subscribe(res => {
      //send success response
      }, (err) => {
      //send error response
    });
    }
  
  
  
  }
  
