function validateCaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length == 0) {
      alert("Please complete the CAPTCHA.");
      return false;
    } else {
      return true;
    }
  }


  function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6LeW8tIpAAAAAC2Xr-B4kpxU6PzxOfIV4owYKK9A', {action: 'LOGIN'});
    });
  }

