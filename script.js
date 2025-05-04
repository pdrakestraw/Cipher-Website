/**
 * Encrypts a String, text using two modulars, shift and case_sensitive 
 * Returns to the result in the explore page
 */
function encrypt() {
    let text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value);
    let case_sensitive = document.getElementById("case_sensitive");
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let base = code >= 65 && code <= 90 ? 65 : 97;
            if(case_sensitive.checked == false){
              result += (String.fromCharCode(((code - base + shift) % 26) + base)).toLowerCase();
            }
            else{
              result += String.fromCharCode(((code - base + shift) % 26) + base);
            }
            
        } else {
            result += char;
        }
    }
    document.getElementById("result").innerText = result;
}

/**
 * Cylces through a list of Strings and types them out at a given speed
 * Current forward speed: 40
 * Current backward speed: 10
 */
$(function() {
    var typed = new Typed('#typed-text', {
      strings: [
        "Discover the fascinating world of cryptography!",
        "Learn how the Caesar Cipher works!",
        "Try encrypting your own message!"
      ],
      typeSpeed: 40,
      backSpeed: 10,
      loop: true
    });
  });

/**
 * Makes the box in the 'index.html' page draggable
 */
$(function() {
  $("#draggable").draggable();
})


  $(document).ready(function() {
    console.log("Ready to learn");
  
    $.ajax({
      url: "info.txt",
      success: function(data) {
        $('#info-text').text(data);
      },
      error: function(xhr, status, error) {
        console.error("Error loading file:", error);
      }
    });
  });

  $(document).ready(function() {
    $('#copy-icon').click(function() {
      const $temp = $('<textarea>');
      $('body').append($temp);
      $temp.val($('#result').text()).select();
      document.execCommand('copy');
      $temp.remove();
  
      alert('Result copied to clipboard!');
    });
  });
  
  
