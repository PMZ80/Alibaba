function MyFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
  function myFunction() {
    document.getElementById("myDropdown-2").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-2')) {
      var dropdownss = document.getElementsByClassName("dropdown-content-2");
      var i;
      for (i = 0; i < dropdownss.length; i++) {
        var openDropdownn = dropdownss[i];
        if (openDropdownn.classList.contains('show')) {
          openDropdownn.classList.remove('show');
        }
      }
    }
  };
  function MEFunction() {
    document.getElementById("myDropdown-3").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-3')) {
      var dropdownsss = document.getElementsByClassName("dropdown-content-3");
      var i;
      for (i = 0; i < dropdownsss.length; i++) {
        var openDropdownnn = dropdownsss[i];
        if (openDropdownnn.classList.contains('show')) {
          openDropdownnn.classList.remove('show');
        }
      }
    }
  };

