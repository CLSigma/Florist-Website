/*!
* Start Bootstrap - Modern Business v5.0.2 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function pokaz(id)
{
 var tresc='';
 switch (id)
 { case 2: tresc += pokazProdukty();break;
 case 3: tresc += pokazKoszyk(); break;
 case 4: tresc += pokazGalerie();break;
 default: tresc += pokazO();break;
 }
 //pobierz element o wskazanym id i ustaw jego nową zawartość:
 document.getElementById('blok').innerHTML = tresc;
}
function pokazO(){ 
 var tresc ='<header class="bg-dark py-5">';
 tresc +='<div class="container px-5">';
 tresc +='<div class="row gx-5 align-items-center justify-content-center">';
 tresc +='<div class="col-lg-8 col-xl-7 col-xxl-6">';
 tresc +='<div class="my-5 text-center text-xl-start">';
 tresc +='<h1 class="display-5 fw-bolder text-white mb-2">Kwiaciarnia "Tulipan"</h1>';
 tresc +='<p class="lead fw-normal text-white-50 mb-4">Nasza kwiaciarnia powstała w 2015r. Od tamtego czasu grono naszych klientów stale się powiększa i znalazły się w nim takie osobistości jak Damian Podsiadło czy Maria Rodowicz. Kwiaty to nasza pasja.</p>';
 tresc +='</div>';
 tresc +='</div>';
 tresc +='<div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><div id="przykladowaKaruzela" class="carousel slide" data-ride="carousel">  <!-- Dodanie kodu ze strony podanej w laboratoriach-->';
					  tresc +='<div class="carousel-inner">';
						tresc +='<div class="carousel-item active">';
						 tresc +=' <img  style="height: 427px" class="d-block w-100" src="zdjecie4.jpg" alt="Pierwszy slajd">';
						tresc +='</div>';
						tresc +='<div class="carousel-item">';
						tresc +='  <img  style="height: 427px" class="d-block w-100" src="zdjecie2.jpg" alt="Drugi slajd">';
						tresc +='</div>';
						tresc +='<div class="carousel-item">';
						tresc +='  <img  style="height: 427px" class="d-block w-100" src="zdjecie3.jpg" alt="Trzeci slajd">';
						tresc +='</div>';
						tresc +='<div class="carousel-item">';
						tresc +='  <img  style="height: 427px" class="d-block w-100" src="zdjecie1.jpg" alt="Czwarty slajd">';
						tresc +='</div>';
						tresc +='<div class="carousel-item">';
						tresc +='  <img  style="height: 427px" class="d-block w-100" src="zdjecie5.jpg" alt="Piąty slajd">';
						tresc +='</div>';
					 tresc +=' </div>';
					tresc +='</div>';
					tresc +='</div>';
 tresc +='</div>';
 tresc +='</div>';
 tresc +='</header>';
 tresc +='<!-- Features section-->';
 tresc +='<section class="py-5" id="features">';
 tresc +='<div class="container px-5 my-5">';
 tresc +='<div class="row gx-5">';
 tresc +='<div class="col-lg-4 mb-5 mb-lg-0"><h2 class="fw-bolder mb-0">Zapewniamy</h2></div>';
 tresc +='<div class="col-lg-8">';
 tresc +='<div class="row gx-5 row-cols-1 row-cols-md-2">';
 tresc +='<div class="col mb-5 h-100">';
 tresc +='<div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>';
 tresc +='<h2 class="h5">Szybka i wygodna dostawa</h2>';
 tresc +='<p class="mb-0">Nasi dostawcy pracują od poniedziałku do soboty w godzinach 9:00 - 19:00. Istnieje możliwość zmiany czasu dostawy w zależności od preferencji klienta.</p>';
 tresc +='</div>';
 tresc +='<div class="col mb-5 h-100">';
 tresc +='<div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>';
 tresc +='<h2 class="h5">Bezpieczeństwo</h2>';
 tresc +='<p class="mb-0">Nasza kwiaciarnia zachowuje wszystkie niezbędne wymogi sanitarne, dlatego bukiety dla naszych klientów sa w pełni bezpieczne.</p>';
 tresc +='</div>';
 tresc +='<div class="col mb-5 mb-md-0 h-100">';
 tresc +='<div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>';
 tresc +=' <h2 class="h5">Szeroki wybór produktów</h2>';
 tresc +='<p class="mb-0">Nasza kwiaciarnia zapewnia szeroki wybór dostępnych kwiatów. Możliwe są subskrypcje naszych bukietów oraz większe zamówienia po ustaleniu szczegółów z właścicielem</p>';
 tresc +='</div>';
 tresc +='<div class="col h-100">';
 tresc +='<div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>';
 tresc +='<h2 class="h5">Kwiaty na każdą okazję</h2>';
 tresc +='<p class="mb-0">Szukasz bukietu na dzień kobiet? Czy może chciałbyś skomponować bukiet dla mamy na dzień matki? A może potrzebujesz kwiatów do udekorowania sali weselnej? Zapewniamy wszystkie te usługi, a nawet wiele więcej.</p>';
 tresc +='</div>';
 tresc +='</div>';
 tresc +='</div>';
 tresc +='</div>';
 tresc +='</div>';
 tresc +='</section>';
 tresc +='<!-- Testimonial section-->';
 tresc +='<div class="py-5 bg-light">';
 tresc +='<div class="container px-5 my-5">';
 tresc +='<div class="row gx-5 justify-content-center">';
 tresc +='<div class="col-lg-10 col-xl-7">';
 tresc +='<div class="text-center">';
 tresc +='<div class="fs-4 mb-4 fst-italic">"Potrzebowałem natychmiast bukietu na rocznicę ślubu, ta kwiaciarnia od razu zrealizowała moje zamówienie i już na następny dzień bukiet znalazł się u mojej żony w wazonie. Serdecznie ją polecam!"</div>';
 tresc +='<div class="d-flex align-items-center justify-content-center">';
 tresc +='<img class="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />';
 tresc +='<div class="fw-bold">';
 tresc +='Dariusz Podsiadło';
 tresc +='<span class="fw-bold text-primary mx-1">/</span>';
 tresc +='Kraków';
 tresc +='</div>';
 tresc +='</div>';
 tresc +='</div>';
 tresc +='</div>';
 tresc +='</div>';
 tresc +='</div>';
 tresc +='</div>';
 //przekaż wynik – gotową zawartość – do miejsca wywołania funkcji:
 return tresc;
}
function pokazGalerie() 
{
 var tresc='';
 tresc+='</br><h1 style="margin-left:2%;">Galeria naszych produktów</h1></br>';
 tresc+=' <div class="galeria">';
 tresc+='<a href="zdjecia/obraz1.jpg" target="_blank" data-lightbox="galeria" data-title="Róże"><img src="miniaturki/obraz1.jpg" alt="Róże" class="zdjecie"></a>  <!-- dodanie do zdjęcia tytułu oraz lightboxa -->';
 tresc+='<a href="zdjecia/obraz2.jpg" target="_blank" data-lightbox="galeria" data-title="Goździki"><img src="miniaturki/obraz2.jpg" alt="Goździki" class="zdjecie"></a>  <!-- dodanie do zdjęcia tytułu oraz lightboxa -->';
 tresc+='<a href="zdjecia/obraz3.jpg" target="_blank" data-lightbox="galeria" data-title="Anthurium"><img src="miniaturki/obraz3.jpg" alt="Anthurium" class="zdjecie"></a>  <!-- dodanie do zdjęcia tytułu oraz lightboxa -->';
 tresc+='<a href="zdjecia/obraz4.jpg" target="_blank" data-lightbox="galeria" data-title="Chryzantemy"><img src="miniaturki/obraz4.jpg" alt="Chryzantemy" class="zdjecie"></a>  <!-- dodanie do zdjęcia tytułu oraz lightboxa -->';
 tresc+='<a href="zdjecia/obraz5.jpg" target="_blank" data-lightbox="galeria" data-title="Lilie"><img src="miniaturki/obraz5.jpg" alt="Lilie" class="zdjecie"></a>  <!-- dodanie do zdjęcia tytułu oraz lightboxa -->';
 tresc+='<a href="zdjecia/obraz6.jpg" target="_blank" data-lightbox="galeria" data-title="Gerbery"><img src="miniaturki/obraz6.jpg" alt="Gerbery" class="zdjecie"></a>  <!-- dodanie do zdjęcia tytułu oraz lightboxa -->';
 tresc+='<a href="zdjecia/obraz7.jpg" target="_blank" data-lightbox="galeria" data-title="Margaritki"><img src="miniaturki/obraz7.jpg" alt="Margeritki" class="zdjecie"></a>  <!-- dodanie do zdjęcia tytułu oraz lightboxa -->';
 tresc+='<a href="zdjecia/obraz8.jpg" target="_blank" data-lightbox="galeria" data-title="Eustomy"><img src="miniaturki/obraz8.jpg" alt="Eustomy" class="zdjecie"></a>  <!-- dodanie do zdjęcia tytułu oraz lightboxa -->';
 tresc+='<a href="zdjecia/obraz9.jpg" target="_blank" data-lightbox="galeria" data-title="Irysy"><img src="miniaturki/obraz9.jpg" alt="Irysy" class="zdjecie"></a>  <!-- dodanie do zdjęcia tytułu oraz lightboxa -->';
 tresc+='<a href="zdjecia/obraz10.jpg" target="_blank" data-lightbox="galeria" data-title="Tulipany"><img src="miniaturki/obraz10.jpg" alt="Tulipany" class="zdjecie"></a>  <!-- dodanie do zdjęcia tytułu oraz lightboxa -->';
 tresc+='<a href="zdjecia/obraz11.jpg" target="_blank" data-lightbox="galeria" data-title="Słoneczniki"><img src="miniaturki/obraz11.jpg" alt="Słoneczniki" class="zdjecie"></a>  <!-- dodanie do zdjęcia tytułu oraz lightboxa -->';
 tresc+='<a href="zdjecia/obraz12.jpg" target="_blank" data-lightbox="galeria" data-title="Żonkile"><img src="miniaturki/obraz12.jpg" alt="Żonkile" class="zdjecie"></a>  <!-- dodanie do zdjęcia tytułu oraz lightboxa -->';
 tresc+='<a href="zdjecia/obraz13.jpg" target="_blank" data-lightbox="galeria" data-title="Frezje"><img src="miniaturki/obraz13.jpg" alt="Frezje" class="zdjecie"></a> <!-- dodanie do zdjęcia tytułu oraz lightboxa -->';
 tresc+='</div>';
 tresc+='</br></br><div class="lokalizacja"><h4>Dodatkowe informacje</h4></br>'+  
 'Twoja geolokalizacja to:</p>'+
 '<div id="geo">'+
 '<p><button onclick="getLocation()">Pokaż lokalizację</button></p>'+
 '</div>'+
 '</br><div id="mapka" style="width:350px; height:250px;"></div>'+
 '</div>';
 return tresc;
}
function pokazProdukty()
{
 var tresc='';
 //uzupełnij treść:
 tresc+= '<div id="kontener">'+               
 '<div id="glowny"><h1>Nasze produkty</h1></br>'+   
 'Zdjęcia produktów można zobaczyć w galerii</br></br>'+
 '<table class ="niewidzialna">'+
 '<tr><td>Róże</td><td>6,99 zł</td><td><input type="number" id="ilosc1" min="1" max="25"></input></td><td><button type="button" onClick="zapisz(1)">Dodaj</button></td></tr>'+
 '<tr><td>Goździki</td><td>5,99 zł</td><td><input type="number" id="ilosc2" min="1" max="25"></input></td><td><button type="button" onClick="zapisz(2)">Dodaj</button></td></tr>'+
 '<tr><td>Anthurium</td><td>7,99 zł</td><td><input type="number" id="ilosc3" min="1" max="25"></input></td><td><button type="button" onClick="zapisz(3)">Dodaj</button></td></tr>'+
 '<tr><td>Chryzantemy</td><td>3,99 zł</td><td><input type="number" id="ilosc4" min="1" max="25"></input></td><td><button type="button" onClick="zapisz(4)">Dodaj</button></td></tr>'+
 '<tr><td>Lilie</td><td>9,99 zł</td><td><input type="number" id="ilosc5" min="1" max="25"></input></td><td><button type="button" onClick="zapisz(5)">Dodaj</button></td></tr>'+
 '<tr><td>Gerbery</td><td>6,99 zł</td><td><input type="number" id="ilosc6" min="1" max="25"></input></td><td><button type="button" onClick="zapisz(6)">Dodaj</button></td></tr>'+
 '<tr><td>Margaritki</td><td>5,99 zł</td><td><input type="number" id="ilosc7" min="1" max="25"></input></td><td><button type="button" onClick="zapisz(7)")>Dodaj</button></td></tr>'+
 '<tr><td>Eustomy</td><td>7,99 zł</td><td><input type="number" id="ilosc8" min="1" max="25"></input></td><td><button type="button" onClick="zapisz(8)">Dodaj</button></td></tr>'+
 '<tr><td>Irysy</td><td>6,99 zł</td><td><input type="number" id="ilosc9" min="1" max="25"></input></td><td><button type="button" onClick="zapisz(9)">Dodaj</button></td></tr>'+
 '<tr><td>Tulipany</td><td>3,99 zł</td><td><input type="number" id="ilosc10" min="1" max="25"></input></td><td><button type="button" onClick="zapisz(10)">Dodaj</button></td></tr>'+
 '<tr><td>Słoneczniki</td><td>6,99 zł</td><td><input type="number" id="ilosc11" min="1" max="25"></input></td><td><button type="button" onClick="zapisz(11)">Dodaj</button></td></tr>'+
 '<tr><td>Żonkile</td><td>4,99 zł</td><td><input type="number" id="ilosc12" min="1" max="25"></input></td><td><button type="button" onClick="zapisz(12)">Dodaj</button></td></tr>'+
 '<tr><td>Frezje</td><td>8,99 zł</td><td><input type="number" id="ilosc13" min="1" max="5"></input></td><td><button type="button" onClick="zapisz(13)">Dodaj</button></td></tr>'+
 '</table>'+
 '</div>'+
 '<div id="boczny"><h2>Jakie kwiaty najlepiej kupić na prezent?</h2></br>'+ 
 'Wypełnij formularz, a my odeślemy nasze propozycje</br></br>'+ 
 '<form method="post" action="mailto:przykladowy_email@pollub.edu.pl" onsubmit="return sprawdz()" >'+ 
 '<table>'+
 '<tr><td>Imie</td><td><input name="imie" size="20" id="imie"></td><td id="imie_error" style="color:red;"></td></tr>'+
 '<tr><td>Wiek</td><td><input name="wiek" size="20" id="wiek"/></td><td id="wiek_error" style="color:red;"></td></tr>'+
 '<tr><td>Email</td><td><input name="email" size="20" id="email"/></td><td id="email_error" style="color:red;"></td></tr>'+
 '</table></br>'+
 '<h4>Zainteresowania</h4>'+
 '<p><input name="zainteresowania" type="checkbox" id="programowanie"/>Programowanie'+
 '<input name="zainteresowania" type="checkbox" id="malarstwo"/>Malarstwo'+
 '<input name="zainteresowania" type="checkbox" id="czytanie"/>Czytanie'+
 '<input name="zainteresowania" type="checkbox" id="sport"/>Sport'+
 '<input name="zainteresowania" type="checkbox" id="muzyka"/>Muzyka'+
 '<span id="zainteresowania_error" style="color:red;"></span></p>'+
'<h4>Ulubiony kolor</h4>'+
'<p><input name="kolor" id="kolor" type="radio" value="czerwony" checked="checked"/>Czerwony'+
'<input name="kolor" type="radio" value= "niebieski" />Niebieski'+
'<input name="kolor" type="radio" value= "biały" />Biały'+
'<input name="kolor" type="radio" value= "pomarańczowy" />Pomarańczowy'+
'<span id="kolor_error" style="color:red;"></span><br />'+
'<input type="submit" value=" Wyślij " style="margin-right: 3%;"/>'+
'<input type="reset" value=" Anuluj " />'+
'</form>'+
 '</div>'+
 '</div>';
 return tresc;
}

function pokazKoszyk()
{
 var tresc='';
 tresc+= '<div id="kontener">'+ 
 '<div id="glowny"><h1>Twój koszyk</h1></br></br>'+ 
 '<div id="koszyk">';
 var suma_calosc = 0;
	if(sessionStorage.length==0){  
		tresc+='<h2>Koszyk jest pusty</h2>';
		suma_calosc = 0;
	}
	else{
		tresc+='<table class="widzialna">'+
		'<tr><td>Nazwa</td><td>Ilość</td><td>Cena</td></tr>'; //Tworzenie koszyka w formie tabeli
		for(var i=0;i<sessionStorage.length;i++) { 
			tresc+='<tr><td>'+sessionStorage.key(i)+'</td><td>'+sessionStorage.getItem(sessionStorage.key(i))+'<td>';
			var suma=pokazCene(i);
			tresc+=suma+' zł</td><td><button type="button" onClick="usun('+i+')">Usuń</button></td><td><button type="button" onClick="usun_wszystko('+i+')">Usuń wszystkie</button></td></tr>';
			suma_calosc+=suma;
		}
		tresc+='<tr><td style="border: solid 0px black;"></td><td>Suma</td><td>'+suma_calosc+' zł</td></tr></table>';
	}

 tresc+='</div><div id="zamowienie">'+
 '</br></br><h3>Złóż zamówienie</h3></br></br>'+
 '<form action="mailto:przykladowy_email@gmail.com" method="post">'+ 
 '<div id="formularz">'+
 '<div id="dane_osobowe">'+  
 '<fieldset><legend><h5>Dane osobowe</h5></legend></br>'+
 '<table class ="niewidzialna1">'+
 '<tr><td>Imie</td><td><input type="text" name="imie" pattern="[A-Za-ząćęłńóśźżĄĘŁŃÓŚŹŻ\x20]{1,}" required></td></tr>'+
 '<tr><td>Nazwisko</td><td><input type="text" name="nazwisko" pattern="[A-Za-ząćęłńóśźżĄĘŁŃÓŚŹŻ\x20\e-]{1,}" required></td></tr>'+
 '<tr><td>Email</td><td><input type="email" name="email" placeholder="abc@gmail.com"  pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required></td></tr>'+
 '<tr><td>Telefon</td><td><input type="tel" name="tel" pattern="^([0-9]{9})$"  placeholder="123456789" title="Podaj numer telefonu, który ma 9 cyfr (bez spacji)" required></td></tr>'+
 '</table></fieldset>'+
 '</div>'+
 '<div id="adres">'+
 '<fieldset><legend><h5>Dane adresowe</h5></legend></br>'+
 '<table class ="niewidzialna1">'+
 '<tr><td>Ulica</td><td><input type="text" name="ulica" pattern="[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ\x20]{2,}" required></td></tr>'+
 '<tr><td>Numer domu/bloku</td><td><input type="text" name="nr_domu" pattern="[0-9]{1,4}" required></input></td></tr>'+
 '<tr><td>Kod pocztowy</td><td><input type="text" name="kod_pocztowy" pattern="[0-9]{2}\-[0-9]{3}" title="Podaj kod pocztowy w formacie 99-999" required></input></td></tr>'+
 '<tr><td>Miejscowość</td><td><input type="text" name="miejscowowsc" pattern="[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ\x20\e-]{2,}" required></input></td></tr>'+
 '</table></fieldset>'+
 '</div>'+
 '</div>'+
 '<div id="platnosc">'+
 '<fieldset><legend><h5>Dane karty platniczej</h5></legend></br>'+
 '<table class ="niewidzialna1">'+
 '<tr><td>Karta</td><td><input type="radio" name="karta" value="Visa" checked="true"> Visa</td><td><input type="radio" name="karta" value="MasterCard"> Master Card</td></tr>'+
 '<tr><td>Numer</td><td><input type="text" name="numer_karty" pattern="^([0-9]{13}||[0-9]{16})$"  title="Podaj numer karty, który ma 13 lub 16 liczb (bez spacji)"  required></td></tr>'+
 '<tr><td>Data ważności</td><td><input type="month" required></td></tr>'+
 '<tr><td>Kod CVV</td><td><input type="text" name="cvv" pattern="^([0-9]{3,4})$" title="Podaj numer CVV, który ma od 3 do 4 liczb (bez spacji)" required></td></tr>'+
 '</table></fieldset>'+
 '</div>'+
 '<input type="submit" value="Rejestruj" style=" margin-right: 3%;">'+
 '<input type="reset" value="Wyczyść">'+
 '</form></div>'+
 '</div>'+
 '<div id="boczny"><h2>Czy chcesz zamówić subskrypcję skomponowanego bukietu?</h2></br></br>'+
 'Istnieje możliwość edytowania zawartości bukietu w trakcie trwania subskrypcji.</br></br>';
 tresc+='Cena za miesiąc: '+suma_calosc+' zł </br>';
 var suma_rabat=(suma_calosc-(suma_calosc*0.1)).toFixed(2);
 tresc+='Cena za miesiąc przy subskrypcji 6 misięcy (rabat 10%): '+suma_rabat+' zł </br>';
 var suma_rabat=(suma_calosc-(suma_calosc*0.2)).toFixed(2);
 tresc+='Cena za miesiąc przy subskrypcji 12 misięcy (rabat 20%): '+suma_rabat+' zł </br></br>';
 tresc+='<input type="radio" name="subskrypcja" value="1"> Miesiąc <input type="radio" name="subskrypcja" value="6"> 6 Miesięcy <input type="radio" name="subskrypcja" value="12"> 12 Miesięcy<br />'+
 '</div>'+
 '</div>';
 return tresc;
}

function zaktualizujKoszyk(){  
	var tresc = '';
	if(sessionStorage.length==0){
		tresc+='<h2>Koszyk jest pusty</h2>';
		suma_calosc = 0;
	}
	else{
		tresc+='<table class="widzialna">'+
		'<tr><td>Nazwa</td><td>Ilość</td><td>Cena</td></tr>';
		var suma_calosc = 0;
		for(var i=0;i<sessionStorage.length;i++) { 
			tresc+='<tr><td>'+sessionStorage.key(i)+'</td><td>'+sessionStorage.getItem(sessionStorage.key(i))+'<td>';
			var suma=pokazCene(i);
			tresc+=suma+' zł</td><td><button type="button" onClick="usun('+i+')">Usuń</button></td><td><button type="button" onClick="usun_wszystko('+i+')">Usuń wszystkie</button></td></tr>';
			suma_calosc+=suma;
		}
		tresc+='<tr><td style="border: solid 0px black;"></td><td>Suma</td><td>'+suma_calosc+' zł</td></tr></table></br></br>';
	}
	document.getElementById('koszyk').innerHTML = tresc;
	
	tresc='';
	tresc+='<h2>Czy chcesz zamówić subskrypcję skomponowanego bukietu?</h2></br></br>'+
	'Istnieje możliwość edytowania zawartości bukietu w trakcie trwania subskrypcji.</br></br>';
	tresc+='Cena za miesiąc: '+suma_calosc+' zł </br>';
	var suma_rabat=(suma_calosc-(suma_calosc*0.1)).toFixed(2);
	tresc+='Cena za miesiąc przy subskrypcji 6 misięcy (rabat 10%): '+suma_rabat+' zł </br>';
	var suma_rabat=(suma_calosc-(suma_calosc*0.2)).toFixed(2);
	tresc+='Cena za miesiąc przy subskrypcji 12 misięcy (rabat 20%): '+suma_rabat+' zł </br></br>';
	tresc+='<input type="radio" name="subskrypcja" value="1"> Miesiąc <input type="radio" name="subskrypcja" value="6"> 6 Miesięcy <input type="radio" name="subskrypcja" value="12"> 12 Miesięcy<br />';
	document.getElementById('boczny').innerHTML = tresc;
}

function zapisz(id){  
 switch (id){ 
 case 1: 
	var nazwa= "Róże";
	var ilosc= document.getElementById("ilosc1").value;
	break;
 case 2: 
	var nazwa= "Goździki";
	var ilosc= document.getElementById("ilosc2").value;
	break;
 case 3: 
	var nazwa= "Anthurium";
	var ilosc= document.getElementById("ilosc3").value;
	break;
 case 4: 
	var nazwa= "Chryzantemy";
	var ilosc= document.getElementById("ilosc4").value;
	break;
 case 5: 
	var nazwa= "Lilie";
	var ilosc= document.getElementById("ilosc5").value;
	break;
 case 6: 
	var nazwa= "Gerbery";
	var ilosc= document.getElementById("ilosc6").value;
	break;
 case 7: 
	var nazwa= "Margeritki";
	var ilosc= document.getElementById("ilosc7").value;
	break;
 case 8: 
	var nazwa= "Eustomy";
	var ilosc= document.getElementById("ilosc8").value; 
	break;
 case 9: 
	var nazwa= "Irysy";
	var ilosc= document.getElementById("ilosc9").value;
	break;
 case 10: 
	var nazwa= "Tulipany";
	var ilosc= document.getElementById("ilosc10").value;
	break;
 case 11: 
	var nazwa= "Słoneczniki";
	var ilosc= document.getElementById("ilosc11").value; 
	break;
 case 12: 
	var nazwa= "Żonkile";
	var ilosc= document.getElementById("ilosc12").value;
	break;
 case 13:
	var nazwa= "Frezje";
	var ilosc= document.getElementById("ilosc13").value;
	break;
 }

	if(ilosc==""){
		alert("Puste pole");
	}
	else{
		sessionStorage.setItem(nazwa,ilosc);
	}
}

function pokazCene(id){ 
	switch (sessionStorage.key(id)){
 case "Róże": 
	var cena= 6.99;
	break;
 case "Goździki": 
	var cena= 5.99;	
	break;
 case "Anthurium": 
	var cena= 7.99;
	break;
 case "Chryzantemy": 
	var cena= 3.99;
	break;
 case "Lilie": 
	var cena= 9.99;
	break;
 case "Gerbery": 
	var cena= 6.99;
	break;
 case "Margeritki": 
	var cena= 5.99;
	break;
 case "Eustomy":  
	var cena= 7.99;
	break;
 case "Irysy": 
	var cena= 6.99;
	break;
 case "Tulipany": 
	var cena= 3.99;
	break;
 case "Słoneczniki": 
	var cena= 6.99;
	break;
 case "Żonkile": 
	var cena= 4.99;
	break;
 case "Frezje":
	var cena= 8.99;
	break;
	}
	
	var suma= cena*sessionStorage.getItem(sessionStorage.key(id)); 
	return suma;
	
}

function usun_wszystko(id){ 
	sessionStorage.removeItem(sessionStorage.key(id));
	zaktualizujKoszyk();
}

function usun(id){ 
	if(sessionStorage.getItem(sessionStorage.key(id))==1){
		sessionStorage.removeItem(sessionStorage.key(id));
	}
	else{
		sessionStorage.setItem(sessionStorage.key(id),sessionStorage.getItem(sessionStorage.key(id))-1);
	}
	zaktualizujKoszyk();
}


function sprawdzPole(pole_id,obiektRegex) {    
//Funkcja sprawdza czy wartość wprowadzona do pola tekstowego
//pasuje do wzorca zdefiniowanego za pomocą wyrażenia regularnego
//Parametry funkcji:
//pole_id - id sprawdzanego pola tekstowego
//obiektRegex - wyrażenie regularne
//---------------------------------
var obiektPole = document.getElementById(pole_id);
if(!obiektRegex.test(obiektPole.value)) return (false);
else return (true);
}

function sprawdz_radio(nazwa_radio){ //Laboratorium 8 - funkcja potrzebna do walidacji radio w javascript
//Funkcja sprawdza który przycisk radio wybrano
//z grupy przycisków o nazwie nazwa_radio
//---------------------------------------
var obiekt=document.getElementsByName(nazwa_radio);
 for (i=0;i<obiekt.length;i++){ 
	if(obiekt[i].checked)
		wybrany=obiekt[i].value;
 }
 return wybrany;
}

function sprawdz_box(nazwa_box) 
{//Funkcja sprawdza ktory przycisk typu checkbox
//z grupy przycisków o nazwie nazwa_box jest zaznaczony
//sprawdzam od razu wszystkie przyciski
//----------------------------------------
var obiekt=document.getElementsByName(nazwa_box);  //tworzę listę checkboxów które mają tę samą nazwę
var wybrany=""; //tworzę pustą zmienną która będzie zawierać zaznaczone zainteresowania
for (i=0;i<obiekt.length;i++){ 
	if(obiekt[i].checked) //sprawdza czy checkbox jest zaznaczony
		wybrany+=obiekt[i].id + "  "; //jeśli tak to daje jego wartość do zmiennej wybrany
}

if(wybrany=="") //jeśli zmienna wybrany nie zmieniła wartości to funkcja zwraca false
	return false;
else
	return wybrany; //jeśli zmieniła to funkcja zwraca wartość zaznaczonych checkboxów
}

function sprawdz() 
{ //Funkcja realizujaca sprawdzanie całego fomularza
//wykorzystując funkcje pomocnicze
//--------------------------------
var ok=true; //zmienna informująca o poprawnym wypełnieniu formularza
//Definicje odpowiednich wyrażeń regularnych dla sprawdzenia
//poprawności danych wprowadzonych do pól tekstowych
obiektImie = /^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ\x20]{2,20}$/; //wyrażenie regularne dla imienia
obiektemail =
/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
obiektWiek=/^[1-9][0-9]{1,2}$/;
//Sprawdzanie kolejnych pól formularza.
//w przypadku błędu - pojawia się odpowiedni komunikat
if (!sprawdzPole("imie",obiektImie))
{ ok=false;
document.getElementById("imie_error").innerHTML=
"   Wpisz poprawnie imie!";
}
else document.getElementById("imie_error").innerHTML="";

if (!sprawdzPole("wiek",obiektWiek))
{ ok=false;
document.getElementById("wiek_error").innerHTML=
"   Wpisz poprawnny wiek!";
}
else document.getElementById("wiek_error").innerHTML="";

if (!sprawdzPole("email",obiektemail))
{ ok=false;
document.getElementById("email_error").innerHTML=
"   Wpisz poprawnny email!";
}
else document.getElementById("email_error").innerHTML="";

var ktory_checkbox = sprawdz_box("zainteresowania");  //sprawdzamy czy któreś okienko zostało zaznaczone i jesli tak to zwracamy wszystkie zaznaczone wartości

if (ktory_checkbox==false)
{ ok=false;
document.getElementById("zainteresowania_error").innerHTML=
"   Musisz wybrać zainteresowania!";
}
else{
	document.getElementById("zainteresowania_error").innerHTML="";
}

var ktore_radio = sprawdz_radio("kolor"); //ze względu na defult zaznaczenie jednej opcji w sposobie zapłaty nie musimy sprawdzać czy któreś okienko jest zaznaczone i od razu sprawdzamy które


	if(ok){
	 var dane="Następujące dane zostaną wysłane:\n";  //zapis wiadomości w okienku do zmiennej dane
	 dane+="Imie: "+document.getElementById('imie').value+"\n";
	 dane+="Wiek: "+document.getElementById('wiek').value+"\n";
	 dane+="Email: "+document.getElementById('email').value+"\n";
	 dane+="Zainteresowania: "+ktory_checkbox+"\n";
	 dane+="Kolor: "+ktore_radio+"\n";
	 if (window.confirm(dane)) return true; //jeśli użytkownik potwierdzi dane w okienku to przejdź do wysyłania 
	 else return false; //jeśli anuluje to wróć do strony
	}
	else{
		return ok;
	}

}

function showLocation(position) { 
 var latitude = position.coords.latitude;
 var longitude = position.coords.longitude;
 var output = document.getElementById("geo");
 var wspolrzedne = new google.maps.LatLng(latitude,longitude);
 var opcjeMapy = {
  zoom: 10,
  center: wspolrzedne,
  mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 var mapa = new google.maps.Map(document.getElementById("mapka"),opcjeMapy);
 
 output.innerHTML = 'Szerokość geograficzna: ' + latitude + '</br>Długość geograficzna: ' + longitude;
 }
 
function errorHandler(error) {   
 var output = document.getElementById("geo");
 switch (error.code) {
 case error.PERMISSION_DENIED:
 output.innerHTML = "Użytkownik nie udostępnił danych.";
break;
 case error.POSITION_UNAVAILABLE:
 output.innerHTML = "Dane lokalizacyjne niedostępne.";
break;
 case error.TIMEOUT:
 output.innerHTML = "Przekroczono czas żądania.";
break;
 case error.UNKNOWN_ERROR:
 output.innerHTML = "Wystąpił nieznany błąd.";
 break;
 }
 }
 function getLocation() {
 if (navigator.geolocation) {
 var options = {timeout: 60000};
navigator.geolocation.getCurrentPosition(
 showLocation,
errorHandler,
options);
 } else { alert("Twoja przeglądarka nie wspiera geolokalizacji!");}
 }
