export const getData = function(url) {
  return fetch(url, {
    headers: new Headers({
      'Content-Type': 'application/json',
      // "Authorization" ;"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6..."
    }),
    method: 'GET',
    mode: "cors", 
    credentials: 'include'
  }).then(res => res.json());
}

export const postData = function(url, obj) {
  return fetch(url, {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    method: 'POST',
    mode: "cors", 
    credentials: 'include',
    body: JSON.stringify(obj)
  }).then(res => res.json());

}

export const block = function(text="loading...", ele=$('html') ){
  return ele.block({
    message: `<h5 class="text-dark"><i class="fa fa-spinner fa-spin m-r-5"></i> ${text}</h5>`
  });
}

export const unblock = function(ele=$('html')){
  return ele.unblock();
}

export const toast = {
  init:function(cb){
    toastr.options = {
      "closeButton": true,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "newestOnTop": false,
      "onclick": cb,
      "showDuration": "3000",
      "hideDuration": "1000",
      "timeOut": "60000",
      "extendedTimeOut": "5000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut",
    }
  },
  alert: function(title="跌落警告", text=""){
    toastr["error"](text, title);
  },
  success: function(title="狀態解除", text=""){
    toastr["success"](text, title);
  }
}