function directToHome(){
	window.location = "../html/UserProfile.html";
}

function directToChat(){
	window.location = "../html/Chat.html";
}

function directToChooseAgent(){
	window.location = "../html/ChooseAgent.html";
} 

function directToMatched(){
	window.location = "../html/Matched.html";
} 


function search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function popup(){
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
}

function popup1(){
	var popup = document.getElementById("myPopup1");
	popup.classList.toggle("show1");
}

function popup2(){
	var popup = document.getElementById("myPopup2");
	popup.classList.toggle("show2");
}

function popup3(){
	var popup = document.getElementById("myPopup3");
	popup.classList.toggle("show3");
}

function popup4(){
	var popup = document.getElementById("myPopup4");
	popup.classList.toggle("show4");
}

function loadClients(clients){
	for (var i = 0; i < clients.length; i++){
		var clt = clients[0];
		var clt1 = clients[1];
		var clt2 = clients[2];
		var clt3 = clients[3];
		var clt4 = clients[4];
	}

	document.getElementById("client").innerHTML += '<div class="popup" onclick="popup()"><li><a href = "#"><font style="font-size: 20px; font-family: Trebuchet MS;">' + clt.name + 
		'</font><button type="reset" style="width: 25px; height: 25px; font-weight: bold; float: right;" onclick="directToMatched()">></button></a><span class="popuptext" id="myPopup">' + clt.sex +
		'<br>'+ clt.age +'</br>'+ clt.ethnicity +'<br> '+ clt.phone +'</br></span></li></div>';

	document.getElementById("client").innerHTML += '<div class="popup1" onclick="popup1()"><li><a href = "#"><font style="font-size: 20px; font-family: Trebuchet MS;">' + clt1.name + 
		'</font><button type="reset" style="width: 25px; height: 25px; font-weight: bold; float: right;" onclick="directToMatched()">></button></a><span class="popuptext1" id="myPopup1">' + clt1.sex +
		'<br>'+ clt1.age +'</br>'+ clt1.ethnicity +'<br> '+ clt1.phone +'</br></span></li></div>';

	document.getElementById("client").innerHTML += '<div class="popup2" onclick="popup2()"><li><a href = "#"><font style="font-size: 20px; font-family: Trebuchet MS;">' + clt2.name + 
		'</font><button type="reset" style="width: 25px; height: 25px; font-weight: bold; float: right;" onclick="directToMatched()">></button></a><span class="popuptext2" id="myPopup2">' + clt2.sex +
		'<br>'+ clt2.age +'</br>'+ clt2.ethnicity +'<br> '+ clt2.phone +'</br></span></li></div>';

	document.getElementById("client").innerHTML += '<div class="popup3" onclick="popup3()"><li><a href = "#"><font style="font-size: 20px; font-family: Trebuchet MS;">' + clt3.name + 
		'</font><button type="reset" style="width: 25px; height: 25px; font-weight: bold; float: right;" onclick="directToMatched()">></button></a><span class="popuptext3" id="myPopup3">' + clt3.sex +
		'<br>'+ clt3.age +'</br>'+ clt3.ethnicity +'<br> '+ clt3.phone +'</br></span></li></div>';

	document.getElementById("client").innerHTML += '<div class="popup4" onclick="popup4()"><li><a href = "#"><font style="font-size: 20px; font-family: Trebuchet MS;">' + clt4.name + 
		'</font><button type="reset" style="width: 25px; height: 25px; font-weight: bold; float: right;" onclick="directToMatched()">></button></a><span class="popuptext4" id="myPopup4">' + clt4.sex +
		'<br>'+ clt4.age +'</br>'+ clt4.ethnicity +'<br> '+ clt4.phone +'</br></span></li></div>';

}

function uniqueClient(name,sex,age,ethnicity,phone){
	this.name = name;
	this.sex = sex;
	this.age = age;
	this.ethnicity = ethnicity;
	this.phone = phone;
}

var client1 = new uniqueClient("Bill","Sexuality: M","Age: 28","Ethnicity: Asian","Phone: (111)111-1111");
var client2 = new uniqueClient("Rachel","Sexuality: F","Age: 23","Ethnicity: White","Phone: (222)222-2222");
var client3 = new uniqueClient("Jenn","Sexuality: F","Age: 33","Ethnicity: Asian","Phone: (333)333-3333");
var client4 = new uniqueClient("Jordan","Sexuality: M","Age: 20","Ethnicity: African American","Phone: (444)444-4444");
var client5 = new uniqueClient("Aviana","Sexuality: F","Age: 22","Ethnicity: Latino","Phone: (555)555-5555");

loadClients([client1,client2,client3,client4,client5]);