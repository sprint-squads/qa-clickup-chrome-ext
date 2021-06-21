import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IssueService } from 'src/app/services/issue.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.scss']
})
export class PopupComponent implements OnInit, OnDestroy {
  fileList = [];
  tagList = [];
  message: string;
  messageType: string;
  isLoading: boolean;
  priorityList = [
    {name: 'Urgent', value: '1'},
    {name: 'High', value: '2'},
    {name: 'Normal', value: '3'},
    {name: 'Low', value: '4'}
  ];
  issueFormSubscription: Subscription;


  issueForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    tags: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
    file: new FormControl('')
  });

  constructor(private issueService: IssueService) {
    this.issueService.getTags().subscribe((response: any) => {
      this.tagList = response.tags;
    })
  }

  ngOnInit(): void {
    this.message = '';
    this.isLoading = false;
    this.onValueChanges();
  }

  sendIssue() {
    this.isLoading = true;
    const formData = new FormData();
    formData.append('title', this.issueForm.get('title').value);
    formData.append('description', this.issueForm.get('description').value);
    formData.append('tags', this.issueForm.get('tags').value);
    formData.append('priority', this.issueForm.get('priority').value);
    formData.append('file', this.issueForm.get('file').value);

    if (this.issueForm.valid && this.fileList) { 
      this.issueService.createIssue(formData).subscribe(response => {
        if (response) {
          this.message = 'Your issue is sent';
          this.messageType = 'success';
          this.isLoading = false;
          this.issueForm.reset();
        }
      }, (errorResponse) => {
        this.message = errorResponse.error.message;
        this.messageType = 'error';
        this.isLoading = false;
        this.issueForm.reset();
      });
    } else {
      this.isLoading = false;
      this.message = 'Please, fill all fields';
      this.messageType = 'error';
    }
  
  }

  removeFile(file) {
    const id = this.fileList.indexOf(file);
    if (id > -1) {
      this.fileList.splice(id, 1);
    }
  }

  onFileChange(event) {
    this.fileList.push(event.target.files[0]);
    this.issueForm.patchValue({
      file: this.fileList
    });
  }

  onValueChanges(): void {
    this.issueFormSubscription = this.issueForm.valueChanges.subscribe(val => {
      this.message = '';
      this.messageType = '';
    });
  }

  closePopup() {
    window.close();
    this.issueForm.reset();
  }

  ngOnDestroy(): void {
    this.issueForm = null;
    this.isLoading = null;
    if (this.issueFormSubscription) {
      this.issueFormSubscription.unsubscribe();
    }
  }

}
