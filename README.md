# Ételrendelés feladat

## Funkcionális követelmények

1. Vendégként a főoldalon kategóriánként ételeket, illetve a 10 legnépszerűbb ételt/italt lehet látni.
2. Vendégként lehet kategóriát választva az ételek között böngészni és leírásukat olvasni.
3. Vendégként lehet ételeket/italokat helyezni a kosárba 20.000 Ft-ig.
4. Vendégként lehet a kosár tartalmát megtekinteni, illetve eltávolítani tételeket belőle.
5. Vendégként lehet a kosár alapján rendelést leadni (név, cím, telefonszám) adatok megadásával.
6. Vendégként lehet a rendelést törölni.
7. Alkalmazottként be lehet jelentkezni / ki lehet jelentkezni.
8. Alkalmazottként lehet új ételt/italt hozzáadni.
9. Alkalmazottként lehet listázni a leadott / teljesített rendeléseket.
10. Alkalmazottként a rendelések listáját lehet szűrni, illetve teljesítettnek jelölni a rendelést.

## Nem funkcionális követelmények

- Felhasználóbarát, ergonomikus elrendezés és kinézet.
- Gyors működés.
- Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés.

## Szakterületi fogalmak

- Rendelés: Egy vendég által leadott rendelés, mely tartalmazhat ételt/italt, összesen maximum 20.000Ft-ig, tulajdonságai: leadás időpontja, teljesítés időpontja, név, cím, telefonszám, összeg.
- Termék: Olyan étel vagy ital mely rendelhető a cégtől, tulajdonságai: név, ár, leírás, étel esetén csípős/ vegetáriánus opció.

## Szerepkörök

- vendég: a főoldal tartalmához fér hozzá, rendelést adhat le.
- alkalmazott: a vendég szerepkörén túl új ételt vagy italt adhat hozzá, és a rendeléseket kezelheti.
