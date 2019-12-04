import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http/http.service';
import { ApiUrl } from '../../../core/apiUrl';
import { ActivatedRoute, Params } from '@angular/router';
import { MessagingService } from 'src/app/services/messaging/messaging.service';
import { PaginationParams, Paginate } from '../../../shared/models/pagination.model';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postsData: Array<any> = [
    {
      name:'Tv',
      postImage:{
        main:{
          original:'',
          thumbnail:'',
        },
        other:[
          {
            original:'',
            thumbnail:''
          },
          {
            original:'',
            thumbnail:''
          },
          {
            original:'',
            thumbnail:''
          },
          {
            original:'',
            thumbnail:''
          }
        ]
      },
      shipping:'Home Delivery',
      category:'electic appliances',
      returnOption:true,
      desc:'a fully packed tv appliance inside a box conataining a mobile as a gift and a voucher worth $1000 packed inside '
    }
  ];
  albums = [
    {
    src: 'http://farm6.staticflickr.com/5444/17679973232_568353a624_b.jpg',
    caption:'wallpaper',
    thumb:'http://farm6.staticflickr.com/5444/17679973232_568353a624_b.jpg'
  },
  {
    src: 'http://farm8.staticflickr.com/7367/16426879675_e32ac817a8_b.jpg',
    caption:'wallpaper',
    thumb:'http://farm8.staticflickr.com/7367/16426879675_e32ac817a8_b.jpg'
  },
  {
    src: 'http://farm6.staticflickr.com/5612/15344856989_449794889d_b.jpg',
    caption:'wallpaper',
    thumb:'http://farm6.staticflickr.com/5612/15344856989_449794889d_b.jpg'
  }
]
  params: PaginationParams;
  paginate = new Paginate();


  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private message: MessagingService,
    private _lightbox: Lightbox
  ) {
    this.params = new PaginationParams();
    this.paginate.page = 1;
  }

  ngOnInit() {
  }

  pagination(event: any) {
    this.paginate.page = event;
    this.params.skip = (event - 1) * this.params.limit;
  }
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.albums, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
