#1)შექმენი ფუნქცია count_items(item_list, item), რომელიც მიიღებს ორ პარამეტრს:
# 2  ) item_list - ელემენტების სია.
 # 3 ) item - ელემენტი, რომლის დათვლაც გსურს სიაში.
  # 4) ფუნქციამ უნდა დააბრუნოს, რამდენჯერ გვხვდება ეს ელემენტი სიაში.

def count_items(item_list, item):
    if item_list:
        return item_list
    if item:
        return item
    if count_items(item_list=item)(item=[1,2,3,4,5,6,7,8,9,10]):
        print(item_list)


#შექმენი ფუნქცია sum_of_list(num_list), რომელიც მიიღებს რიცხვების სიას და დააბრუნებს სიაში არსებული ყველა რიცხვის ჯამს.
# ფუნქცია უნდა გამოიყენოს for ციკლი.


def sum_of_list(num_list):
    if num_list:
        return num_list
    if num_list(1,2,3,4,5,6,7,8,9,10):
        print(num_list)


#შექმენი ფუნქცია average_of_list(num_list), რომელიც იღებს რიცხვების სიას და აბრუნებს ამ რიცხვების საშუალო მნიშვნელობას.
#გამოიყენე სიის ჯამის გამოთვლა და ელემენტების რაოდენობის გაყოფა.


def average_of_list(num_list):
    if num_list:
        return num_list
    if num_list(1,2,3,4,5,6,7,8,9,10):
        print(num_list)



#