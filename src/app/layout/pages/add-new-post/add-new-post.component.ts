import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { MessagingService } from 'src/app/services/messaging/messaging.service';
import { GlobalVariable } from 'src/app/core/global';
import { ApiUrl } from 'src/app/core/apiUrl';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { PaginationParams } from 'src/app/shared/models/pagination.model';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent implements OnInit {


  newPostForm: FormGroup;
  submitted: boolean = false;

  imageType: Array<string> = [];
  roles: Array<any> = [];
  image: any = '';

  params: PaginationParams;
  paramSubscription: Subscription;

  file_data: any = {};
  dropdownSettings = {};

  pro_id: string = '';

  stylistsData = [];
  typeData = ['Manual Session', 'One To One Session', 'Buy And Get'];
  selectedGetServiceData = [];
  selectedBuyServiceData = [];

  selectedBuyService: any
  selectedGetService: any

  typeValue: string = '';
  showByuGetSel = false;

  startDate: any;
  endDate: any;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
    private route: ActivatedRoute,
    private message: MessagingService,
    public location: Location) {

    this.imageType = GlobalVariable.imageType;

    this.params = new PaginationParams();
    this.params.limit = 0
    this.params.skip = 0

    /********** Fetch ID from route params **********/
    this.paramSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.pro_id = params['pro_id'] ? params['pro_id'] : '';
    });
  }

  ngOnInit() {
    this.addnewPostForm();
    // this.getStylistData();
    /********** Get detail to patch values in form on edit **********/
    if (this.pro_id) {
      this.http.postData(ApiUrl.promotion_discount.get, { promotionId: this.pro_id })
        .subscribe(response => {
          if (response.statusCode === 200) {
            let data = response.info.records[0];
            if (!!data) {
              this.newPostForm.patchValue({
                code: data.code,
                description: data.description,
                termsAndConditions: data.termsAndConditions,
                minimumOrder: data.minimumOrder,
                promotionName: data.promotionName,
                promotionPrice: data.promotionPrice,
                promotionType: data.promotionType,
                stylistId: data.stylistId._id, // manual,o2o
                buyAmountOfServices: data.buyAmountOfServices, // manual,o2o
                buyServiceIds: data.buyServiceIds, // manual,o2o
                getServiceIds: data.getServiceIds, //buy&get
                getAmountOfServices: data.getAmountOfServices, //buy&get
                monthsValidity: data.monthsValidity,
                isShareable: data.isShareable,
                startDate: data.startDate,
                expiryDate: data.expiryDate,
                imageUrl: data.imageUrl
              });
              if (data.imageUrl) {
                this.image = data.imageUrl.thumbnail;
                this.file_data = data.imageUrl;
              }
              this.startDate = new Date(data.startDateMilli)
              this.endDate = new Date(data.endDateMilli);
              this.getStylistServices(data.stylistId._id);
              this.selectedBuyService = [];
              data.buyServiceIds.forEach(element => {
                this.selectedBuyService.push({ id: element._id, itemName: element.name })
              });
              this.selectedGetService = []
              data.getServiceIds.forEach(element => {
                this.selectedGetService.push({ id: element._id, itemName: element.name });
              });
            }
          }
        }, error => {
          this.message.toast('warning', 'invalid id');
        });
    }
    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Services",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: ""
    };
  }

  /********** Create promotion form **********/
  addnewPostForm() {
    this.newPostForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      ReturnOptions: ['', [Validators.required]],
      url: ['', [Validators.required]],
      imageUrl: ['']
    });
  }

  get form() { return this.newPostForm.controls; }

  /********** On selection of image insert the value in form **********/
  onImageSelect(event: any) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      if (this.imageType.includes(file.type)) {
        if ((file.size / 1000000) <= 5) {
          let reader: FileReader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (e: any) => {
            this.image = e.target.result;
          }
          // this.uploadImage(file);
        } else this.message.toast('warning', 'Image size must not be greater than 5MB');
      } else this.message.toast('warning', 'invalid file type');
    }
  }


  /********** Image Upload **********/
  uploadImage(image) {
    let param_data = {
      fileOf: 'Category',
      file: image
    }
    this.http.postData(ApiUrl.imageUpload, param_data, true)
      .subscribe(response => {
        if (response.statusCode === 200) {
          this.file_data = response.info.fileData;
          let imageToSend = JSON.stringify({
            original: this.file_data['original'],
            thumbnail: this.file_data['thumbnail']
          });
          this.newPostForm.patchValue({ imageUrl: imageToSend });
        }
      });
  }

  /********** Remove image and reset file field in form **********/
  removeImage() {
    this.image = '';
    this.newPostForm.controls['imageUrl'].reset();
    this.newPostForm.value.imageUrl = '';
  }

  /********** Submit promotion form for add/edit **********/
  onSubmit() {

    
    this.submitted = true;
    if (this.newPostForm.invalid) {
      setTimeout(() => {
        this.submitted = false;
      }, 15000);
      return;
    }


    if (this.pro_id) {
      this.http.putData(ApiUrl.promotion_discount.create_edit, this.newPostForm.value)
        .subscribe(response => {
          this.afterResponse(response);
        });
    } else {
      this.http.postData(ApiUrl.promotion_discount.create_edit, this.newPostForm.value)
        .subscribe(response => {
          console.log(response);
          this.afterResponse(response);
        });
    }
  }

  /********** After successfull api hit carry out this function **********/
  afterResponse(response) {
    if (response.statusCode === 201 || response.statusCode === 200) {
      this.message.toast('success', ` Item created successfully`);
      this.newPostForm.reset();
      this.router.navigate(['posts']);
    }
  }

  getStylistData() {
    this.http.getData(ApiUrl.stylists.getList, this.params)
      .subscribe(response => {
        if (response.statusCode === 200) {
          this.stylistsData = response.info.records;
        }
      });
  }

  getStylistServices(val) {
    let obj = {
      stylistId: val
    }
    this.http.getData(ApiUrl.stylists.search, obj).subscribe(
      res => {
        this.selectedGetServiceData = [];
        this.selectedBuyServiceData = [];
        res.info.records.forEach(element => {
          this.selectedBuyServiceData.push({ id: element.serviceCategoryId._id, itemName: element.serviceCategoryId.name });
          this.selectedGetServiceData.push({ id: element.serviceCategoryId._id, itemName: element.serviceCategoryId.name });
        });
      }

    )
  }

  /********** Unsubscribe the subscription created by activated route **********/
  ngOnDestroy() {
    if (!!this.paramSubscription) this.paramSubscription.unsubscribe();
  }
}
