document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialiazation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  

  
    // modal
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
  

  
    // datepicker
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format:"dd mmmm, yyyy",
    }
    );
  


  
    // select category
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  });