import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-csvread',
  templateUrl: './csvread.component.html',
  styleUrls: ['./csvread.component.css']
})
export class CSVReadComponent implements OnInit {
  csvRecords: any[] = [];
  csvFile: any;
  colNames: any;
  //header = false;

  constructor(private ngxCsvParser: NgxCsvParser, private http: HttpClient) { }

  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;

  ngOnInit(): void {
  }

  fileChangeListener($event: any): void {
    // Select the files from the event
    const files = $event.srcElement.files;
    this.csvFile = $event.target.files[0];
    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: false, delimiter: ',' })
      .pipe().subscribe((result: any) => {
        this.csvRecords = result;
        this.colNames = this.csvRecords[0];
        console.log(this.csvRecords);
        console.log(this.colNames);
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });

  }

  uploadToDB() {
    //console.log(this.csvFile);
    const formData: FormData = new FormData();
    formData.append('file', this.csvFile);
    // No need to give any headers
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'multipart/form-data',
    //   })
    // };
    const req = new HttpRequest('POST', "http://localhost:8082/csv/upload", formData);
    this.http.request(req).subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      });

  }

}
