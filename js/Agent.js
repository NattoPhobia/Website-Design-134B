function directToHome(){
	window.location = "../html/UserProfile.html";
}

function directToChat(){
	window.location = "../html/Chat.html";
}

function directToChooseAgent(){
	window.location = "../html/ChooseAgent.html";
} 

function loadAgents(agents){
	for (var i = 0; i < agents.length;i++) {
		var agt = agents[i];

		document.getElementByClassName("agent").innerHTML += '<div class="agent"><div class="agent_left_panel"> <img class="agent_photo" src="' + agt.image_url + 
			'" alt=""> </div><div class="agent_right_panel"> <h3>' + agt.name + '</h3> <p>' + agt.stars + '</p> <h5>' + agt.address + '</h5></div> <div class="agent_rightmost_panel"><button type="reset" style="width: 35px; height: 35px; margin-top: 55px; font-weight: bold" onclick="directToChooseAgent()">></button></div></div>';
	}
}

function uniqueAgent(name, stars, address, image_url){
	this.name = name;
	this.stars = stars;
	this.address = address;
	this.image_url = image_url;
}

var agent1 = new uniqueAgent("John", "★★★☆☆", "San Maeto, CA", "../resources/default_Profile.jpg");
var agent2 = new uniqueAgent("Reggin", "★★★★☆", "Oakland, CA", "../resources/default_Profile.jpg");
var agent3 = new uniqueAgent("Claire", "★★☆☆☆", "San Francisco, CA", "../resources/default_Profile.jpg");
var agent4 = new uniqueAgent("Isaac", "★★★★★", "San Diego, CA", "../resources/default_Profile.jpg");

loadAgents([agent1,agent2,agent3,agent4]); 