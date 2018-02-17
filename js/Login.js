var existingUsers = localStorage.users;
var existingAgents = localStorage.agents;

function UserCredentials(username, password, userType) {
    this.username = username;
    this.password = password;
    this.userType = userType;
}

function login() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
}
