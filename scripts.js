<!--
var currentVisio = null;

function verification_formulaire()
{
	ok = 1;
	var nom = document.getElementById('nom');
	var prenom = document.getElementById('prenom');
	var fonction = document.getElementById('fonction');
	var service = document.getElementById('service');
	var nomresp = document.getElementById('nomresp');
	var fincontrat = document.getElementById('fincontrat');
	var delais = document.getElementById('delais');
	var contrat = document.getElementById('contrat');

	if(nom.value == '')
	{
		nom.style.borderColor = 'red';
		nom.style.color = 'black';
		ok = 0;
	}
	else
	{
		nom.style.backgroundColor = 'white';
		nom.style.color = 'black';
	}

	if(prenom.value == '')
	{
		prenom.style.borderColor = 'red';
		prenom.style.color = 'black';
		ok = 0;
	}
	else
	{
		prenom.style.backgroundColor = 'white';
		prenom.style.color = 'black';
	}

	if(fonction.value == '')
	{
		fonction.style.borderColor = 'red';
		fonction.style.color = 'black';
		ok = 0;
	}
	else
	{
		fonction.style.backgroundColor = 'white';
		fonction.style.color = 'black';
	}

	if(service.value == '')
	{
		service.style.borderColor = 'red';
		service.style.color = 'black';
		ok = 0;
	}
	else
	{
		service.style.backgroundColor = 'white';
		service.style.color = 'black';
	}

	if(nomresp.options.selectedIndex == '0')
	{
		nomresp.style.borderColor = 'red';
		ok = 0;
	}
	else nomresp.style.backgroundColor = 'white';


	if(fincontrat.value == '' || fincontrat.value == 'Cliquez pour choisir une date')	{
		fincontrat.style.borderColor = 'red';
		fincontrat.style.color = 'black';
		ok = 0;
	}else{
		fincontrat.style.backgroundColor = 'white';
		fincontrat.style.color = 'black';
	}
	if(delais.value == '' || delais.value == 'Cliquez pour choisir une date')	{
		delais.style.borderColor = 'red';
		delais.style.color = 'black';
		ok = 0;
	}else{
		delais.style.backgroundColor = 'white';
		delais.style.color = 'black';
	}
	if(contrat.value == '')
	{
		contrat.style.borderColor = 'red';
		contrat.style.color = 'black';
		ok = 0;
	}
	else
	{
		contrat.style.backgroundColor = 'white';
		contrat.style.color = 'black';
	}




	if (ok == 0)
	{
		alert ("Un ou plusieurs champ(s) obligatoire(s) sont vide(s) !");
		document.location.href = "#top";
		return false;
	}
	else
	{
		/*if (delais.value == 'Cliquez pour choisir une date') delais.value = '';
		if (fincontrat.value == 'Cliquez pour choisir une date') fincontrat.value = '';*/

		return true;
	}
}

function show_tel()
{
	document.getElementById('lignedir').style.visibility = "visible";
	document.getElementById('typetel').style.visibility = "visible";

	document.getElementById('lignedir').style.display = "block";
	document.getElementById('typetel').style.display = "block";
}
function hide_tel()
{
	document.getElementById('lignedir').style.visibility = "hidden";
	document.getElementById('typetel').style.visibility = "hidden";

	document.getElementById('lignedir').style.display = "none";
	document.getElementById('typetel').style.display = "none";
}

function show_poste()
{
	document.getElementById('tr_num_poste').style.visibility = "visible";
	document.getElementById('tr_num_poste').style.display = "block";

	document.getElementById('tr_prix_poste').style.visibility = "hidden";
	document.getElementById('tr_prix_poste').style.display = "none";
}

function hide_poste()
{
	document.getElementById('tr_num_poste').style.visibility = "hidden";
	document.getElementById('tr_num_poste').style.display = "none";

	document.getElementById('tr_prix_poste').style.visibility = "visible";
	document.getElementById('tr_prix_poste').style.display = "block";
}

function load_disp()
{
	try
	{
		var tel = document.getElementById("tel")
		var np = document.getElementById("nouvoposte")

		if (tel.checked == true) show_tel();
		if (np.checked == true) hide_poste();
	}
	catch(error)
	{
		//alert("error");
	}
}

function Valid_Check(ID_GESTION)
{
	obj = document.getElementById("result");
	var text;

	if(ID_GESTION != '')
	{
		if (text = file('ajax/valid_check.php?id_gestion='+ID_GESTION))
		{
			obj.innerHTML = text;
			setTimeout("Vide_ChampsText()", 1000);
		}
	}
}

function Load_Details(ID_DEMANDE)
{
	obj = document.getElementById("tab");
	var text;

	if(ID_DEMANDE != '')
	{
		if (text = file('ajax/view_details.php?id_demande='+ID_DEMANDE))
		{
			obj.innerHTML = text;
			//setTimeout("Vide_ChampsText()", 1000);
		}
	}
}

function Vide_ChampsText()
{
	obj = document.getElementById("result");
	obj.innerHTML = '';
}

function file(fichier)
{
	if(window.XMLHttpRequest) // FIREFOX
		xhr_object = new XMLHttpRequest();
	else if(window.ActiveXObject) // IE
		xhr_object = new ActiveXObject("Microsoft.XMLHTTP");
	else
		return(false);
		xhr_object.open("POST", fichier, false);
		xhr_object.send(null);
		if(xhr_object.readyState == 4) return(xhr_object.responseText);
		else return(false);
}


// Menu en onglet

var currentIndex = -1;
function manageBlocs( c )
{
	// Si un bloc ouvert le fermer
	if( currentIndex != -1 ) hideBloc(currentIndex);
	if( currentIndex == c )	{
		hideBloc( c );
		currentIndex = -1
	} else {
		currentIndex = c;
		showBloc( currentIndex);
	}
}

function showBloc( ind )
{
	document.getElementById("bloc" + ind).style.display = "";
	document.getElementById("img" + ind).src = "images/moins.jpg";
}

function hideBloc( ind )
{
	document.getElementById("bloc" + ind).style.display = "none";
	document.getElementById("img" + ind).src = "images/plus.jpg";
}


// CALENDRIER

// if two digit year input dates after this year considered 20 century.
var NUM_CENTYEAR = 30;
// is time input control required by default
var BUL_TIMECOMPONENT = false;
// are year scrolling buttons required by default
var BUL_YEARSCROLL = true;

var calendars = [];
var RE_NUM = /^\-?\d+$/;

function calendar1(obj_target) {

	// assigning methods
	this.gen_date = cal_gen_date1;
	this.gen_time = cal_gen_time1;
	this.gen_tsmp = cal_gen_tsmp1;
	this.prs_date = cal_prs_date1;
	this.prs_time = cal_prs_time1;
	this.prs_tsmp = cal_prs_tsmp1;
	this.popup    = cal_popup1;

	// validate input parameters
	if (!obj_target)
		return cal_error("Error calling the calendar: no target control specified");
	if (obj_target.value == null)
		return cal_error("Error calling the calendar: parameter specified is not valid target control");
	this.target = obj_target;
	this.time_comp = BUL_TIMECOMPONENT;
	this.year_scroll = BUL_YEARSCROLL;

	// register in global collections
	this.id = calendars.length;
	calendars[this.id] = this;
}

function cal_popup1 (str_datetime) {
	if (str_datetime) {
		this.dt_current = this.prs_tsmp(str_datetime);
	}
	else {
		this.dt_current = this.prs_tsmp(this.target.value);
		this.dt_selected = this.dt_current;
	}
	if (!this.dt_current) return;

	var obj_calwindow = window.open(
		'calendar.php?datetime=' + this.dt_current.valueOf()+ '&id=' + this.id,
		'Calendar', 'width=200,height='+(this.time_comp ? 215 : 190)+
		',status=no,resizable=no,top=200,left=200,dependent=yes,alwaysRaised=yes'
	);
	obj_calwindow.opener = window;
	obj_calwindow.focus();
}

// timestamp generating function
function cal_gen_tsmp1 (dt_datetime) {
	return(this.gen_date(dt_datetime) + ' ' + this.gen_time(dt_datetime));
}

// date generating function
function cal_gen_date1 (dt_datetime) {
	return (
		(dt_datetime.getDate() < 10 ? '0' : '') + dt_datetime.getDate() + "-"
		+ (dt_datetime.getMonth() < 9 ? '0' : '') + (dt_datetime.getMonth() + 1) + "-"
		+ dt_datetime.getFullYear()
	);
}
// time generating function
function cal_gen_time1 (dt_datetime) {
	return (
		(dt_datetime.getHours() < 10 ? '0' : '') + dt_datetime.getHours() + ":"
		+ (dt_datetime.getMinutes() < 10 ? '0' : '') + (dt_datetime.getMinutes()) + ":"
		+ (dt_datetime.getSeconds() < 10 ? '0' : '') + (dt_datetime.getSeconds())
	);
}

// timestamp parsing function
function cal_prs_tsmp1 (str_datetime) {
	// if no parameter specified return current timestamp
	if (!str_datetime)
		return (new Date());

	// if positive integer treat as milliseconds from epoch
	if (RE_NUM.exec(str_datetime))
		return new Date(str_datetime);

	// else treat as date in string format
	var arr_datetime = str_datetime.split(' ');
	return this.prs_time(arr_datetime[1], this.prs_date(arr_datetime[0]));
}

// date parsing function
function cal_prs_date1 (str_date) {

	var arr_date = str_date.split('-');

	if (arr_date.length != 3) return cal_error ("Invalid date format: '" + str_date + "'.\nFormat accepted is dd-mm-yyyy.");
	if (!arr_date[0]) return cal_error ("Invalid date format: '" + str_date + "'.\nNo day of month value can be found.");
	if (!RE_NUM.exec(arr_date[0])) return cal_error ("Invalid day of month value: '" + arr_date[0] + "'.\nAllowed values are unsigned integers.");
	if (!arr_date[1]) return cal_error ("Invalid date format: '" + str_date + "'.\nNo month value can be found.");
	if (!RE_NUM.exec(arr_date[1])) return cal_error ("Invalid month value: '" + arr_date[1] + "'.\nAllowed values are unsigned integers.");
	if (!arr_date[2]) return cal_error ("Invalid date format: '" + str_date + "'.\nNo year value can be found.");
	if (!RE_NUM.exec(arr_date[2])) return cal_error ("Invalid year value: '" + arr_date[2] + "'.\nAllowed values are unsigned integers.");

	var dt_date = new Date();
	dt_date.setDate(1);

	if (arr_date[1] < 1 || arr_date[1] > 12) return cal_error ("Invalid month value: '" + arr_date[1] + "'.\nAllowed range is 01-12.");
	dt_date.setMonth(arr_date[1]-1);

	if (arr_date[2] < 100) arr_date[2] = Number(arr_date[2]) + (arr_date[2] < NUM_CENTYEAR ? 2000 : 1900);
	dt_date.setFullYear(arr_date[2]);

	var dt_numdays = new Date(arr_date[2], arr_date[1], 0);
	dt_date.setDate(arr_date[0]);
	if (dt_date.getMonth() != (arr_date[1]-1)) return cal_error ("Invalid day of month value: '" + arr_date[0] + "'.\nAllowed range is 01-"+dt_numdays.getDate()+".");

	return (dt_date)
}

// time parsing function
function cal_prs_time1 (str_time, dt_date) {

	if (!dt_date) return null;
	var arr_time = String(str_time ? str_time : '').split(':');

	if (!arr_time[0]) dt_date.setHours(0);
	else if (RE_NUM.exec(arr_time[0]))
		if (arr_time[0] < 24) dt_date.setHours(arr_time[0]);
		else return cal_error ("Invalid hours value: '" + arr_time[0] + "'.\nAllowed range is 00-23.");
	else return cal_error ("Invalid hours value: '" + arr_time[0] + "'.\nAllowed values are unsigned integers.");

	if (!arr_time[1]) dt_date.setMinutes(0);
	else if (RE_NUM.exec(arr_time[1]))
		if (arr_time[1] < 60) dt_date.setMinutes(arr_time[1]);
		else return cal_error ("Invalid minutes value: '" + arr_time[1] + "'.\nAllowed range is 00-59.");
	else return cal_error ("Invalid minutes value: '" + arr_time[1] + "'.\nAllowed values are unsigned integers.");

	if (!arr_time[2]) dt_date.setSeconds(0);
	else if (RE_NUM.exec(arr_time[2]))
		if (arr_time[2] < 60) dt_date.setSeconds(arr_time[2]);
		else return cal_error ("Invalid seconds value: '" + arr_time[2] + "'.\nAllowed range is 00-59.");
	else return cal_error ("Invalid seconds value: '" + arr_time[2] + "'.\nAllowed values are unsigned integers.");

	dt_date.setMilliseconds(0);
	return dt_date;
}

function cal_error (str_message) {
	alert (str_message);
	return null;
}

function delImage() {
	var tableImage = document.getElementById('mat_visio_table_image');
	var hiddenImage = document.getElementById('mat_visio_del_img');
	tableImage.style.display = 'none';
	hiddenImage.value = true;
}

function show_visio() {
	document.getElementById('tr_prix_visio').style.visibility = 'visible';
	document.getElementById('tr_prix_visio').style.display = 'block';

	if(currentVisio) {
		document.getElementById(currentVisio).style.visibility = 'visible';
		document.getElementById(currentVisio).style.display = 'block';
	}
}

function hide_visio() {
	document.getElementById('tr_prix_visio').style.visibility = 'none';
	document.getElementById('tr_prix_visio').style.display = 'hidden';

	if(currentVisio) {
		document.getElementById(currentVisio).style.visibility = 'hidden';
		document.getElementById(currentVisio).style.display = 'none';
	}
}

function show_mat_visio(id) {
	var id_visio = 'visio_' + id;

	if(currentVisio) {
		document.getElementById(currentVisio).style.visibility = 'hidden';
		document.getElementById(currentVisio).style.display = 'none';
	}

	document.getElementById(id_visio).style.visibility = 'visible';
	document.getElementById(id_visio).style.display = 'block';

	currentVisio = id_visio;
}

function show_users() {
	document.getElementById('tr_droit_users').style.visibility = 'visible';
	document.getElementById('tr_droit_users').style.display = 'block';
}

function hide_users() {
	document.getElementById('tr_droit_users').style.visibility = 'hidden';
	document.getElementById('tr_droit_users').style.display = 'none';
}

function loadusers() {
	var select = document.getElementById('add_users_site');
	var select_users = document.getElementById('select_users_site');
	var id = select.value;

	select_users.innerHTML = "";

	var xhr = getXhr()
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var response = xhr.responseText;
			response = eval(response);

			for(var i = 0; i < response.length; i++) {
				var data = response[i];

				if(data.name != null) {
					var option = document.createElement('option');
					option.setAttribute('value', data.name);
					option.innerHTML = data.name;

					select_users.appendChild(option);
				}
			}
		}
	}
	xhr.open("POST","ajax/loadusers.php",true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send("id=" + id);
}

function getXhr(){
	var xhr = null;
	if(window.XMLHttpRequest) // Firefox et autres
	   xhr = new XMLHttpRequest();
	else if(window.ActiveXObject){ // Internet Explorer
	   try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
	}
	else { // XMLHttpRequest non support� par le navigateur
	   alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest...");
	   xhr = false;
	}
	return xhr
}
//-->
