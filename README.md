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

## Fejlesztés

#### A backend megvalósításához a következő technológiákat, modelleket használtuk:
-	Java Spring Boot
-	MVC modell
-	REST API
-	authorizált végpontok
-	h2 adatbáziskezelő rendszer
-	GitHub, Git

#### Fejlesztői környezet: NetBeans

## Adatbázis terv

### Végpontok:
1. __user:__
-	GET/user: bejelentkezett felhasználó 
-	GET/login: bejelentkezés
-	POST/login: bejelentkezési adatok küldése
-	GET/register: regisztráció
-	POST/register: regisztrációs adatok elküldése
-	POST/logout: kijelentkezés
2. __order:__
-	GET/orders: role szerinti listázás
-	GET/searchStatus: státusz szerinti keresés
-	GET/searchName: név szerinti keresés
-	GET/searchAddress: cím szerinti keresés
-	POST/orders: új rendelés felküldése
-	PUT/orders/{id}/addItem: rendeléshez új tétel felvétele
-	PUT/orders/{id}: rendelés frissítése
-	GET/orders/{id}: rendelés lekérdezése
-	DELETE/orders/{id}: rendelés törlése
3. __category:__
-	GET/categories: összes kategória listázás
4. __item:__
-	GET/items: összes tétel listázása
-	GET/max: a legnépszerűbb tétel lekérése
-	GET/category/{id}/items : kategóriánkénti listázás
-	GET /category/{id}/item/search/{keyWord}: kategórián belül kulcsszóval keresés
-	GET/order/{id}/items: a rendelésen belüli tételek listázása
-	POST/category/{id}/items: új tétel felvétele
-	PUT/ /category/{categoryId}/item/{itemId}: tétel módosítása
-	GET/ /category/{categoryId}/item/{itemId}: tétel lekérdezése
-	DELETE/category/{categoryId}/item/{itemId}: tétel törlése


## Adatbázis szekvencia diagram
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)

## Könyvtárstruktúra
1.	…etelrendeles.annotations: egyedi annotációk
- Role.java
-	…etelrendeles.config
-	AuthInterceptor.java
2. …etelrendeles.controller: HTTP kérésekért, végpontokért felelős kontrollerek
-	UserController.java
-	OrderController.java
-	CategoryController.java
-	ItemController.java
3. …etelrendeles.entity: a tábláknak megfelelő entitások
-	BaseEntity.java
-	User.java
-	Order.java
-	Category.java
-	Item.java
4.	…etelrendeles.repository: adatbázissal kommunikáló CrudRepositoryk
-	UserRepository.java
-	OrderRepository.java
-	CategoryRepository.java
-	ItemRepository.java
5.	…etelrendeles.service: az üzleti logikákat tartalmazza, entitások elérése pl.
-	UserService.java
-	OrderService.java
-	CategoryService.java
-	ItemService.java



