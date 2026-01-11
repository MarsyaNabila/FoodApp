function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === "admin" && p === "admin123") {
    window.location.href = "admin.html";
  } 
  else if (u === "user" && p === "user123") {
    window.location.href = "user.html";
  } 
  else {
    alert("Username atau Password salah!");
  }
}
