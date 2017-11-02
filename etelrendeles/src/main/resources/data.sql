INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('Hudini934', 'admin','hudini934@gmail.com', 'ADMIN');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('JarvasT', 'admin', 'jarvast@gmail.com', 'ADMIN');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('GyCsaba', 'gycsaba','gycsaba@gmail.com', 'USER');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('FKristof', 'fkristof','fkristof@hotmail.com', 'USER');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('JBalint', 'jbalint','Jbalint@citromail.hu', 'USER');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('NagyBrigi', 'BRIGI','nagybrigi@gmail.com', 'USER');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('AAnna', 'aanna','aanna@gmail.com', 'USER');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('MizikK', 'mizikk','mizikk@gmail.com', 'USER');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('KovacsP', 'kovi','kovi@gmail.com', 'USER');
INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, ROLE) VALUES ('NagyB', 'nagyb','nagyb@gmail.com', 'USER');

INSERT INTO CATEGORIES (NAME) VALUES ('pizza');        //1000-es id-k
INSERT INTO CATEGORIES (NAME) VALUES ('hamburger');    //2000-es id-k
INSERT INTO CATEGORIES (NAME) VALUES ('leves');        //3000-es id-k 
INSERT INTO CATEGORIES (NAME) VALUES ('salata');       //4000-es id-k
INSERT INTO CATEGORIES (NAME) VALUES ('ital');         //5000-es id-k

//pizzak   
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Al Capone','ham, egg, clam, fish, cheese', 'false', 'false','1650' ,1001);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Bali','tomato sauce, cheese, pineapple,chicken breast, corn', 'true', 'false', '1550' ,1002);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Bolognese', 'tomato sauce, cheese, bolognai ragu, smoked cheese ', 'true', 'false', '1650' ,1003);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Cesare', 'cheese, bacon, salami, egg, tomato', 'true', 'false', '1550' ,1004);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Feta', 'cheese, sheep cheese, sour cream, garlic ', 'true', 'true', '1550' ,1005);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Hawaii', 'tomato sauce, cheese, ham, pineapple', 'false', 'false', '1250' ,1006);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('HamCorn,' 'cheese, ham, corn', 'false', 'false', '1450' ,1007);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Maffioso', 'ham, mushroom, sausage, pfefferoni, cheese ', 'true', 'false', '1650' ,1008);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Magyaros', 'cheese, sausage, paprika, tomato, onion', 'true', 'false', '1450' ,1009);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Mexicana', 'bolognai ragu, corn, chili beans, sour cream, pfefferoni, cheese', 'true', 'false', '1550' ,1010);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('SonGoKu', 'ham, mushroom, corn, cheese', 'false', 'false', '1550' ,1011);

//hamburgerek
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Buffalo burger', 'puffs, beef, vegetables, fried onions, smoked cheese, sauce', 'false', 'false', '1150' , 2001);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Chicken burger', 'puffs, roston chicken breast, vegetables, bacon, chicken liver, corn, smoked cheese, sauce, chicken breast fillet', 'false', 'false', '950' , 2002);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Hawaii burger', 'puffs, roston chicken breast, vegetables, pineapple, cheese, mayonnaise, barbecue sauce, chicken breast fillet', 'false', 'false', '950' , 2003);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Kentucky beef burger', 'puffs, beef, vegetables, bacon, grillezett cheese, garlic mayonnaise', 'false', 'false', '1250', 2004);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Hell burger', 'puffs, beef, vegetables, fried onion, jalapeno, cheddar sajt, smoked cheese, pepper sauce', 'false', 'false', '1350' , 2005);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Röszti burger', 'puffs, beef, vegetables, dupla bacon, röszti, cheese, mustard, barbecue sauce', 'false', 'false', '850' , 2006);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE, CATEGORY_ID) VALUES ('Vega burger', 'puffs, fried cheese, fried onions, salad, cabbage, cucumber, tomato, tartar sauce', 'false', 'false', '850' , 2006);

                                                     

//salaták

//italok
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Water', ' 0,5l', 'false', 'false', ,'50' , 5001);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Borsodi',' 0,5l', 'false', 'false', ,'300' , 5002);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Arany Aszok', ' 0,5l', 'false', 'false', ,'350' , 5002);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Heineken', ' 0,5l', 'false', 'false', ,'450' , 5003);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Soproni', ' 0,5l', 'false', 'false', ,'350' , 5004);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Dreher',' 0,5l', 'false', 'false', ,'400' , 5005);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Unicum',' 0,3cl', 'false', 'false', ,'400' , 5006);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Jagermeister',' 0,3l', 'false', 'false', ,'400' , 5007);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Vodka',' 0,5l', 'false', 'false', ,'400' , 5008);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Brandy',' 0,5l', 'false', 'false', ,'400' , 5009);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Red wine',' 0,3l', 'false', 'false', ,'250' , 5010);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('White wine',' 0,3l', 'false', 'false', ,'250' , 5011);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Rose',' 0,3l', 'false', 'false', ,'250' , 5012);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Pepsi',' 0,33l', 'false', 'false', ,'400' , 5013);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Coca Cola',' 0,33l', 'false', 'false', ,'400' , 5014);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Sprite',' 0,33l', 'false', 'false', ,'400' , 5015);
INSERT INTO ITEMS (NAME, DESCRIPTION, IS_SPICY, IS_VEGETARIAN, PRICE,CATEGORY_ID) VALUES ('Fanta',' 0,33l', 'false', 'false', ,'400' , 5016);



INSERT INTO ORDERS (NAME, ADDRESS, PHONE, RECEIVED,STATUS,USER_ID) VALUES ('James', 'Water str 12.', '887762',current_timestamp,'IDLE',2);
INSERT INTO ORDERS (NAME, ADDRESS, PHONE, RECEIVED,DELIVERED,STATUS,USER_ID) VALUES ('James', 'Water str 12.', '887762',current_timestamp,current_timestamp,'DELIVERED',1);

INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (1,1);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (1,2);
INSERT INTO ORDER_ITEMS (ORDER_ID, ITEM_ID) VALUES (2,2);
