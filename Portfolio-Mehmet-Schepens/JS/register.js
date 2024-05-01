document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Hash the password (You should use a stronger hashing algorithm in production)
    var hashedPassword = sha256(password);
  
    // Save the username and hashed password in local storage
    localStorage.setItem(username, hashedPassword);
  
    alert('Registration successful!');
  });
  
  // Simple SHA-256 hashing function (for demonstration purposes only)
  function sha256(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      var char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString(16);
  }
  