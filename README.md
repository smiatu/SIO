# StuffIOWN

- Strona do wprowadzania i przeglądania kolekcji. Można przejrzeć listę użytkowników, powiązane z nimi kolekcje, przedmioty w kolekcjach.

## Technologia

- ReactJS
- HTML5
- CSS3
- JSX
- JSON

## Instalacja

- Dołączam plik package.json, istalacja to npm i --save
- Do odpalenia pliku należy uruchomić npm run start oraz json-server db/db.json

## Funkcjonalności

- Wprowadzanie kolekcji przez formularz, z podglądem powstającego inputu JSON,
- Przeglądanie listy użytkowników,
- Logowanie, jeśli użytkownik już istnieje,
- Powiązanie kolekcji z użytkownikiem,
- Przeglądanie wszystkich kolekcji,
- Strona korzysta z lokalnej bazy danych podanej w pliku db.json

## ToDo

- Bug do naprawy: w Insert nie da się wysłać formularza, jeśli nie wprowadzi się zmiany w tagach (docelowo nie powinno to być ważne),
- W Insert nazwa posiadacza kolekcji ma dolecowo pobierać się z informacji kto jest zalogowany,
- Rejestracja nowych userów,
- W formularzu w Insert należy wprowadzić opcję poprawiania wcześniejszych błędów,
- Przy rozwijaniu widoku kolekcji na pełny koniecznie trzeba wprowadzić scrollIntoView (dotychczasowo nie działało),
- Wprowadzić możliwość sortowania widoku po roku/nazwie/tagach,
- Wprowadzić stronicowanie wewnątrz kolekcji,
- Podgląd szczegółów poszczególnych przedmiotów (powiększenie zdjęcia, wyświetlenie opisu -wprowadzenie opisu-),
- Wprowadzenie dłuższych opisów do headerów poszczególnych kolekcji,
- Wprowadzenie opcji flagowania przedmiotów: przez właściciela jako do wymiany, przez innych użytkowników jako wanted,
- Zmiana stylowania na SASS, jest przygotowany plik,
- Przy zmianie na SASS konieczne skonfigurowanie pliku webpack.config,
- Podział pliku app.js na pojedyncze odpowiadające komponentom

## Screenshoty
Widok strony Kolekcje:
![alt text](https://github.com/smiatu/StuffIOwn/blob/master/images/collections.jpg "Widok strony Kolekcje")
![alt text](https://github.com/smiatu/StuffIOwn/blob/master/images/collections_big.jpg "Widok strony Kolekcje")
Widok podstrony kolekcjonera:
![alt text](https://github.com/smiatu/StuffIOwn/blob/master/images/collector.jpg "Widok podstrony kolekcjonera")
Widok formularza do wprowadzania kolekcji:
![alt text](https://github.com/smiatu/StuffIOwn/blob/master/images/insert.jpg "Widok formularza do wprowadzenia kolekcji")
