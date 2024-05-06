let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");

// Variables
let userDom2 = document.getElementById("username");
let userEmailDom = document.getElementById("email");

// تحديد قوالب النصوص
let usernameTemplate = "Username: <span style='font-family: Arial, sans-serif; color: blue;'>{username}</span>";
let emailTemplate = "Email: <span style='font-family: Times New Roman, serif; color: green;'>{email}</span>";

// استبدال النصوص داخل القوالب بالقيم الحالية
let usernameText = usernameTemplate.replace("{username}", get_user);
let emailText = emailTemplate.replace("{email}", get_email);

userDom2.innerHTML = usernameText;
userEmailDom.innerHTML = emailText;
