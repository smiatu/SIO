# SIO
# StuffIOWN

- Strona do wprowadzania i przeglądania kolekcji. Można przejrzeć listę użytkowników, powiązane z nimi kolekcje, przedmioty w kolekcjach.

# Technologia

- React.js
- HTML5
- CSS3
- JSX
- JSON

# Instalacja

- Dołączam plik package.json, istalacja to npm i --save
- Do odpalenia pliku należy uruchomić npm run start oraz json-server db/db.json

# Funkcjonalności

- Wprowadzanie kolekcji przez formularz, z podglądem powstającego inputu JSON,
- Przeglądanie listy użytkowników,
- Logowanie, jeśli użytkownik już istnieje,
- Powiązanie kolekcji z użytkownikiem,
- Przeglądanie wszystkich kolekcji,
- Strona korzysta z lokalnej bazy danych podanej w pliku db.json

# ToDo

- Bug do naprawy: w Insert tagFixer nie działa jeśli przy pierwszym wprowadzanym przedmiocie będzie podany tylko jeden tag, później nie zwraca uwagi na ich ilość (docelowo ilość tagów nie powinna być ważna),
- Bug do naprawy: w podglądzie kolekcji uzależnionym od nazwy użytkownika zjechały się okna, trzeba poprawić CSS,
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
