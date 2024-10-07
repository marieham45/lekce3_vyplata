/*
Výplata jako stránka
Vytvořte webovou stránku, která uživatele požádá o jeho hodinovou sazbu v korunách a spočítá jeho hrubou mzdu za předpokladu, že pracuje 8 hodin denně 21 dní v měsíci. Do stránky vypište výsledek zabalený do nějaké přívětivé formulace. Dbejte na to, abyste korektně převedli uživatelem zadanou hodnotu na číslo.
Nechte uživatele zadat nejen hodinovou sazbu, ale také počet hodin a dní v měsíci. Opět dejte pozor na správnou konverzi.
*/

const hodinovka = Number(prompt("Zadej hodinovou sazbu", "300"));
const pocetHodin = Number(prompt("Počet hodin denně:", "8"));
const pocetDni = Number(prompt("Počet dní v měsíci:"));
const plat = hodinovka * pocetHodin * pocetDni;

document.body.innerHTML += "<p>Plat: " + plat + " Kč.</p>";
