INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('Hudini', 'admin','hudini934@gmail.com', 'ADMIN'); 
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('JarvasT', 'admin', 'jarvast@gmail.com', 'ADMIN');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('GyCsaba', 'gycsaba','gycsaba@gmail.com', 'USER');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('FKristof', 'fkristof','fkristof@hotmail.com', 'USER');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('JBalint', 'jbalint','Jbalint@citromail.hu', 'USER');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('NagyBrigi', 'BRIGI','nagybrigi@gmail.com', 'USER');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('AAnna', 'aanna','aanna@gmail.com', 'USER');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('MizikK', 'mizikk','mizikk@gmail.com', 'USER');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('KovacsP', 'kovi','kovi@gmail.com', 'USER');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('NagyB', 'nagyb','nagyb@gmail.com', 'USER'); 

INSERT INTO CATEGORIES (NAME) VALUES ('Pizza');       
INSERT INTO CATEGORIES (NAME) VALUES ('Hamburger');   
INSERT INTO CATEGORIES (NAME) VALUES ('Soup');       
INSERT INTO CATEGORIES (NAME) VALUES ('Salad');       
INSERT INTO CATEGORIES (NAME) VALUES ('Drink');
INSERT INTO CATEGORIES (NAME) VALUES ('Dessert');    

--pizzak
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Al Capone','ham, egg, clam, fish, cheese', 'false', 'false','1650' ,1);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Bali','tomato sauce, cheese, pineapple,chicken breast, corn', 'true', 'false', '1550' ,1);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Bolognese', 'tomato sauce, cheese, bolognai ragu, smoked cheese ', 'true', 'false', '1650' ,1);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Cesare', 'cheese, bacon, salami, egg, tomato', 'true', 'false', '1550' ,1);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Feta', 'cheese, sheep cheese, sour cream, garlic ', 'true', 'true', '1550' ,1);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Hawaii', 'tomato sauce, cheese, ham, pineapple', 'false', 'false', '1250' ,1);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('HamCorn', 'cheese, ham, corn', 'false', 'false', '1450' ,1);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Maffioso', 'ham, mushroom, sausage, pfefferoni, cheese ', 'true', 'false', '1650' ,1);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Magyaros', 'cheese, sausage, paprika, tomato, onion', 'true', 'false', '1450' ,1);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Mexicana', 'bolognai ragu, corn, chili beans, sour cream, pfefferoni, cheese', 'true', 'false', '1550' ,1);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('SonGoKu', 'ham, mushroom, corn, cheese', 'false', 'false', '1550' ,1);

--hamburgerek
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Buffalo burger', 'puffs, beef, vegetables, fried onions, smoked cheese, sauce', 'false', 'false', '1150' , 2);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Chicken burger', 'puffs, roston chicken breast, vegetables, bacon, chicken liver, corn, smoked cheese, sauce, chicken breast fillet', 'false', 'false', '950' , 2);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Hawaii burger', 'puffs, roston chicken breast, vegetables, pineapple, cheese, mayonnaise, barbecue sauce, chicken breast fillet', 'false', 'false', '950' , 2);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Kentucky beef burger', 'puffs, beef, vegetables, bacon, grillezett cheese, garlic mayonnaise', 'false', 'false', '1250', 2);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Hell burger', 'puffs, beef, vegetables, fried onion, jalapeno, cheddar sajt, smoked cheese, pepper sauce', 'false', 'false', '1350' , 2);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Roszti burger', 'puffs, beef, vegetables, dupla bacon, roszti, cheese, mustard, barbecue sauce', 'false', 'false', '850' , 2);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Vega burger', 'puffs, fried cheese, fried onions, salad, cabbage, cucumber, tomato, tartar sauce', 'false', 'false', '850' , 2);

--levesek
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Bean soup', 'bowl', 'false', 'false', '850' , 3);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('French onion soup', 'bowl', 'false', 'false', '750' , 3);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Goulash soup', 'bowl', 'false', 'false', '850' , 3);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Liver dumpling soup', 'bowl', 'false', 'false', '850' , 3);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Pickled turkey soup', 'bowl', 'false', 'false', '850' , 3);


--salaták
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Caesar', 'grilled chicken breast, ice lettuce, tomato, pepper, cucumber, crouton, ceasar dressing', 'false', 'false', '2000' , 4);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Exotic salad', 'grilled chicken breast, ice lettuce, pineapple, banana, orange, toasted almonds', 'false', 'false', '1600' , 4);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Greek salad', 'sheep cheese, ice lettuce, tomatoes, peppers, cucumbers, red onions, olives, olive oil, lemon juice', 'false', 'true', '1500' , 4);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Mayonnaise corn salad', 'corn, curd, apple, tartar', 'false', 'true', '2000' , 4);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Grilled chicken salad', 'grilled chicken breast, tomato, pepper, cucumber, corn, olive oil, lemon juice', 'false', 'false', '1600' , 4);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Winged salad', 'cooked chicken breast, sheep cheese, egg, tomato, pepper, cucumber, onion dressing', 'false', 'false', '1600' , 4);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Tuna salad', 'tuna, tomatoes, peppers, cucumbers, olive oil, lemon juice, garlic and yoghurt sauce', 'false', 'false', '1500' , 4);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Tzatziki salad', 'kefir, sour cream, cottage cheese, cucumber, garlic, crouton', 'false', 'true','1400' , 4);

--italok
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Water', ' 0,5l', 'false', 'false', '50' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Borsodi',' 0,5l', 'false', 'false', '300' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Arany Aszok', ' 0,5l', 'false', 'false', '350' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Heineken', ' 0,5l', 'false', 'false', '450' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Soproni', ' 0,5l', 'false', 'false', '350' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Dreher',' 0,5l', 'false', 'false', '400' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Unicum',' 0,3cl', 'false', 'false', '400' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Jagermeister',' 0,3l', 'false', 'false', '500' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Vodka',' 0,5l', 'false', 'false', '400' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Brandy',' 0,5l', 'false', 'false', '400' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Red wine',' 0,3l', 'false', 'false', '250' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('White wine',' 0,3l', 'false', 'false', '250' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Rose',' 0,3l', 'false', 'false', '250' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Pepsi',' 0,33l', 'false', 'false', '400' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Coca Cola',' 0,33l', 'false', 'false', '400' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Sprite',' 0,33l', 'false', 'false', '400' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Fanta',' 0,33l', 'false', 'false', '400' , 5);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Kinley',' 0,33l', 'false', 'false', '400' , 5);

INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Cottage cheese palacsinta', 'cottage cheese filling', 'false', 'true', '350' , 6);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Nutella palacsinta', 'nutella filling', 'false', 'true', '350' , 6);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Jam palacsinta', 'peach jam filling', 'false', 'true', '350' , 6);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Cheese palacsinta', 'cheese filling', 'false', 'false', '350' , 6);


INSERT INTO ORDERS (NAME, ADDRESS, PHONE, RECEIVED,STATUS,USER_ID) VALUES ('Hudini', 'Water str 12.', '06206666666',current_timestamp,'IDLE',1);
INSERT INTO ORDERS (NAME, ADDRESS, PHONE, RECEIVED,DELIVERED,STATUS,USER_ID) VALUES ('Jarvas', 'Fire str 21.', '06305555555',current_timestamp,current_timestamp,'DELIVERED',2);
INSERT INTO ORDERS (NAME, ADDRESS, PHONE, RECEIVED,STATUS,USER_ID) VALUES ('MizikK', 'Wind str 5.', '06703333333',current_timestamp,'IDLE',3);
INSERT INTO ORDERS (NAME, ADDRESS, PHONE, RECEIVED,STATUS,USER_ID) VALUES ('Hudini', 'Water str 12.', '06206666666',current_timestamp,'IDLE',1);
INSERT INTO ORDERS (NAME, ADDRESS, PHONE, RECEIVED,STATUS,USER_ID) VALUES ('GyCsaba', 'Cat str 37.', '062039778315',current_timestamp,'IDLE',5);
INSERT INTO ORDERS (NAME, ADDRESS, PHONE, RECEIVED,STATUS,USER_ID) VALUES ('NagyB', 'Nun str 7.', '06203737373',current_timestamp,'IDLE',6);
INSERT INTO ORDERS (NAME, ADDRESS, PHONE, RECEIVED,STATUS,USER_ID) VALUES ('NagyBrigi', 'Cat str 13.', '06704566543',current_timestamp,'IDLE',7);
INSERT INTO ORDERS (NAME, ADDRESS, PHONE, RECEIVED,DELIVERED,STATUS,USER_ID) VALUES ('Jarvas', 'Fire str 21.', '06305555555',current_timestamp,current_timestamp,'DELIVERED',2);
INSERT INTO ORDERS (NAME, ADDRESS, PHONE, RECEIVED,STATUS,USER_ID) VALUES ('KovacsP', 'Bucka str 42.', '06708884888',current_timestamp,'IDLE',9);
INSERT INTO ORDERS (NAME, ADDRESS, PHONE, RECEIVED,STATUS,USER_ID) VALUES ('Joe', 'Smoke str 42.', '06708884888',current_timestamp,'IDLE',4);
INSERT INTO ORDERS (NAME, ADDRESS, PHONE, RECEIVED,STATUS,USER_ID) VALUES ('Jim', 'Fire str 42.', '062088891',current_timestamp,'IDLE',8);
INSERT INTO ORDERS (NAME, ADDRESS, PHONE, RECEIVED,STATUS,USER_ID) VALUES ('James', 'Good str 42.', '06708484888',current_timestamp,'DELIVERED',9);
INSERT INTO ORDERS (NAME, ADDRESS, PHONE, RECEIVED,STATUS,USER_ID) VALUES ('Peti', 'Boy str 42.', '06707784888',current_timestamp,'IDLE',2);



INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (1,10);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (1,48);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (1,8);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (1,25);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (2,2);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (3,12);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (3,45);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (4,16);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (4,15);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (4,46);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (5,25);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (6,16);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (6,32);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (7,6);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (7,35);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (7,25);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (8,7);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (8,8);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (8,34);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (8,25);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (8,45);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (9,19);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (9,8);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (9,24);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (10,45);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (10,46);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (11,8);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (11,25);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (11,2);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (12,1);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (12,45);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (13,1);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (13,6);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (13,6);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (13,8);
