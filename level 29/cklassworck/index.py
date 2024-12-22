#მოცემული კოდი იღებს ტექსტს და ტექსტს, როგორც შეყვანას და გადასცემს თემას ფუნქციას, სახელწოდებით <b>ძებნა ( )</b>

#საძიებო () ფუნქცია უნდა დაბრუნდეს " სიტყვა fuond " თუ სიტყვა არის ტექსტში, ან " სიტყვა არ არის ნაპოვნი ",თუ ეს არ არის

def search(text,word):
    if text == word:
        return "awsome"
    else:
        return "this is awesome"
print(search)

#2 
gps="didube"
print(gps.__len__)

#3
def even(n):
    if n % 2 == 0:
        return True
    else:
        return False
print(even)