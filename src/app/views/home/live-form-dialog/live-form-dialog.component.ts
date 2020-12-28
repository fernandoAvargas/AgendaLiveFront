import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {

  public liveForm: FormGroup;

  constructor(

    private fb: FormBuilder,
    private rest: LiveService,

    public dialogRef: MatDialogRef<LiveFormDialogComponent>

  ) { }

  ngOnInit(): void {

    this.liveForm = this.fb.group({
      liveName: ['',[Validators.required]],
      channelName: ['',[Validators.required]],
      liveLink: ['',[Validators.required]],
      liveDate: ['2020-12-30T20:00:00',[Validators.required]],
      liveTime: ['']
    });
  }

  cancel(): void {
    this.dialogRef.close();
    this.liveForm.reset();
  }

  createLive():void{
      
    this.rest.postLives(this.liveForm.value).subscribe(result =>{})
    this.dialogRef.close();
    this.liveForm.reset();
      
  }
}
