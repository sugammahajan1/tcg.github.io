import { Injectable } from '@angular/core';
import Swal, { SweetAlertType, SweetAlertResult } from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor() { }

  /******************* toast messages ********************/
  toast(type: SweetAlertType, title: string) {
    const toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      showCloseButton: true,
      timer: 6000,
      animation: false,
      customClass: 'uk-animation-slide-right-small'
    });
    toast.fire({
      type: type,
      title: title,
    });
  }

  /******************* confirmation dialog box (returns a promise) ********************/
  async confirm(title: string, text?: string): Promise<SweetAlertResult> {
    const result: SweetAlertResult = await Swal.fire({
      title: `Are you sure you want to ${title}?`,
      text: text,
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#009688',
      cancelButtonColor: '#688696',
      confirmButtonText: 'Yes',
      animation: false,
      allowOutsideClick: false,
      customClass: 'uk-animation-slide-top-small'
    });
    return result;
  }

  /******************* alert dialog box with button ********************/
  alert(type: SweetAlertType, title: string, text?: string) {
    Swal.fire({
      type: type,
      title: title,
      animation: false,
      text: text,
      confirmButtonColor: '#28bebd',
      customClass: 'uk-animation-slide-top-small'
    });
  }

}
