# Ételrendelés feladat

## Funkcionális követelmények

1. Vendégként a főoldalon kategóriánként ételeket, illetve a legnépszerűbb ételeket és italokat lehet látni.
2. Vendégként lehet kategóriát választva az ételek között böngészni és leírásukat olvasni.
3. Alkalmazottként be lehet jelentkezni / ki lehet jelentkezni.
4. Felhasználóként lehet ételeket/italokat helyezni a kosárba 20.000 Ft-ig.
5. Felhasználóként lehet a kosár tartalmát megtekinteni, illetve törölni a tartalmát.
6. Felhasználóként lehet a saját leadott rendeléseket megtekinteni.
7. Felhasználóként lehet a kosár alapján rendelést leadni (név, cím, telefonszám) adatok megadásával.
8. Alkalmazottként be lehet jelentkezni / ki lehet jelentkezni.
9. Alkalmazottként lehet új ételt/italt hozzáadni.
10. Alkalmazottként lehet új kategóriát hozzáadni.
11. Alkalmazottként lehet listázni az összes rendelést rendelést illetve szűrni közöttük.
12. Alkalmazottként az egyes rendeléseket lehet törölni vagy kézbesítettnek jelölni.

## Nem funkcionális követelmények

- Felhasználóbarát, ergonomikus elrendezés és kinézet.
- Gyors működés.
- Biztonságos működés: funkciókhoz való hozzáférés korlátozása jelszóval és szerepkörök bevezetésével.

## Szakterületi fogalmak

- Rendelés: Egy vendég által leadott rendelés, mely tartalmazhat ételt/italt, összesen maximum 20.000Ft-ig, tulajdonságai: leadás időpontja, teljesítés időpontja, státusz, név, cím, telefonszám, rendelt tételek.
- Termék: Olyan étel vagy ital mely rendelhető a cégtől, tulajdonságai: név, ár, leírás, étel esetén csípős/ vegetáriánus opció.

## Szerepkörök

- vendég: a főoldal tartalmához fér hozzá, böngészhet az ételek/italok között.
- felhasználó: a vendég szerepkörén kívül elemeket adhat a kosarához, rendelést adhat le, megnézheti saját rendeléseit.
- alkalmazott: a felhasználó szerepkörén túl új ételt/italt és kategóriát adhat hozzá, és az összes rendelést kezelheti.

## Fejlesztés

#### A backend megvalósításához a következő technológiákat, modelleket használtuk:
-	Java Spring Boot
-	MVC modell
-	REST API
-	authorizált végpontok
-	h2 adatbáziskezelő rendszer
-	GitHub, Git

#### Fejlesztői környezet: NetBeans

#### A frontend megvalósításához a következő technológiákat, modelleket használtuk:
- Angular 5, TypeScript nyelvi alapon
- Angular Material: design komponensek

#### Fejlesztői környezet: Visual Studio Code

## Adatbázis terv

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/db.png "Adatbazis modellje")

### Végpontok:
1. __user:__
- GET/api/user: bejelentkezett felhasználó
- POST/api/user/login: bejelentkezési adatok küldése, bejelentkezés
- POST/api/user/register: regisztrációs adatok elküldése, regisztráció
- POST/api/user/logout: kijelentkezés
2. __order:__
- GET/api/orders: role szerinti listázása a rendeléseknek
- POST/api/orders: új rendelés felvétele
- GET/api/orders/{id}/deliver : rendelés státuszának állítása
- GET/api/orders/{id}: rendelés lekérdezése
- DELETE/api/orders/{id}: rendelés törlése
3. __category:__
- GET/api/categories: összes kategória listázása
- GET/api/categories/{id}: egy kategória listázása
- POST/api/categories: új kategória felvétele
4. __cart:__
- GET/api/cart : kosár tartalmának listázása
- GET/api/cart/full : kosár tartalmának ára
- DELETE/api/cart/del : kosár tartalmának törlése
- POST/api/cart : új eleme hozzáadása a kosárhoz
5. __item:__
- GET/api/items: összes tétel listázása
- GET/api/items/max: a legnépszerűbb tételek lekérése
- GET/api/categories/{id}/items : kategóriánkénti listázás
- GET/api/order/{id}/items: a rendelésen belüli tételek listázása
- POST/api/items/new: új tétel felvétele
- GET/api/categories/{categoryId}/items/{itemId}: tétel lekérdezése


## Végpont bemutatása

Rendelés leadása:
![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/szekvencia.png "Szekvencia diagram")


**Funckió leírása:**
A főoldalról a login képernyőre lépve meg kell adnunk a felhasználónév/ jelszó párosunkat, majd sikeres bejelentkezés után a program a kategóriák listájára irányít át. Kategóriaválasztás után választanunk kell egy vagy több tételt, amit a kosár gombra kattintva beteszünk a kosárba. A 'My Cart' gombra kattintva megtekinthetjük a kosarunk tartalmát és ha elégedettek vagyunk a 'Send order' gombbal elküldhetjük a rendelést vagy a 'Delete cart' gombbal ki is üríthetjük a kosarat. Az új rendelés űrlapot ki kell töltenünk kötelezően a név, cím, telefonszám (szám kell, hogy legyen) hármassal, ezután pedig el is küldhetjük a rendelést a 'Send' gomb segítségével.


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
-	CartController.java
3. …etelrendeles.entity: a tábláknak megfelelő entitások
-	BaseEntity.java
-	User.java
-	Order.java
-	Category.java
-	Item.java
-	Cart.java
4.	…etelrendeles.repository: adatbázissal kommunikáló CrudRepositoryk
-	UserRepository.java
-	OrderRepository.java
-	CategoryRepository.java
-	ItemRepository.java
5.	…etelrendeles.service: az üzleti logikákat tartalmazza, entitások elérése pl.
-	UserService.java
-	OrderService.java
-	CategoryService.java
-	CartService.java
-	ItemService.java

## Felhasználó modell

#### Vendég (GUEST)
![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/GUEST.jpg "Guest modell")

#### Felhasználó (USER)
![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/USER.jpg "User modell")

#### Alkalmazott (ADMIN)
![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/ADMIN.jpg "Admin modell")

## Felületi tervek

**Bejelentkezés mockup**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/bejelentkezes.jpg "Bejelentkezes mockup")

**Regisztráció mockup**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/Regisztracios.jpg "Regisztracio mockup")

**Étellista mockup**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/Ételek_listája.jpg "Ételek mockup")

**Kosár mockup**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/Kosar.jpg "Kosár mockup")

**Rendeléslista mockup**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/Rendeles_listazasa.jpg "Rendeles lista mockup")

**Rendelés kezelése mockup**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/Rendeles_kezeles.jpg "Rendeléskezelés mockup")

**Új rendelés mockup**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/Ujrendeles_kosar_alapjan.jpg "Új rendelés mockup")

**Új étel/ital mockup**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/Uj_étel_felvetele.jpg "Új étel mockup")


## Megvalósítás

**Főoldal**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/főoldal.png "Főoldal screen")

**Bejelentkezés felület**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/login.jpg "Login screen")

**Tételek listája**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/itemlist.png "Item lista screen")

**Saját kosár**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/cart.png "Cart screen")

**Új rendelés leadása felület**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/neworder.png "Új rendelés screen")

**Rendelések listája**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/orderlist.png "Rendeléslista screen")

**Rendelés kezelése felület**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/orderdetail.png "Rendelés részletek screen")

**Új étel/ital űrlap**

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/newitem.png "Új tétel screen")

### Tesztelés

Teszteléshez az Angular beépített end2end tesztekre használható Protractort használjuk, ezt az **npm run e2e** paranccsal indíthatjuk. Az eredmény itt látható: 

![alt text](https://github.com/jarvast/alkfejl2017_etelrendeles/blob/master/images/teszt.png "Tesztelés")



## Felhasználói dokumentáció

### Telepítés
#### Telepítés előtt pár szükséges lépés
  - Kell NodeJS és az npm amit itt lehet letölteni : [www.nodejs.org](https://www.nodejs.org)
  - Internet elérés

#### Telepítés
1. Látogasson el a 	[https://github.com/jarvast/alkfejl2017_etelrendeles](https://github.com/jarvast/alkfejl2017_etelrendeles) oldalra.
2. Itt kattintson a **"Clone or Download"** gombra, és azon belül kattintson a **"Download as Zip"** gombra.
3. A letöltött állományt csomagoljuk ki.
4. Az etelrendeles könyvtár tartalmazza a szervert, ezt importálás után a pom.xml segítségével a spring-boot:run paranccsal indítsuk el.
5. A food-order könyvtár tartalmazza a front end részt, ebben a mappában indítsuk el az npm install parancsot.
6. A telepítés befejezése után az **npm start** paranccsal ezután elindíthatjuk a programot.

### Használata
1. Böngészőben a keresősávba írjuk be a localhost:4200 elérést.
2. Regisztrálás és bejelentkezés után használhatjuk a programot.
