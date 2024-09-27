
#2) მომხმარებელს შემოატანინეთ მისი სახელი და სახელიდან 2 ინდექსზე მდგომი ასო ამოშალეთ(ისევე როგორც ლისტებზე ვაკეთებდით)

name = list("ლუკა") 
remove_letters = name.pop(2)
new_name = "".join(name)
print(new_name)


#3)შექმენით სია ქვეყნების. გამოიყენეთ pop() და წაშალეთ მეორე ქვეყანა შემდეგ გამოიტანეთ ორივე წაშლილი ქვეყანაც და ახალი სიაც


qouuntre=["geo","","rus","","deu","","chez","","por"]
remove_letters_2= qouuntre.pop(2)
remove_letters_4= qouuntre.pop(6)
new_qountre= "-".join(qouuntre)
print(new_qountre)
print(remove_letters_2)
print(remove_letters_4)

#4) numbers = [10, 20, 30] ლისტში insert მეთოდით 10 და 20 შუაში ჩაამატეთ 15

number= [10,20,30]
plus_num= ",".join (number)
print(plus_num)

#5) შექმენით ცარიელი სია. სიას სათითაოდ დაუმატეთ "Dog" "cat" და "bird" და დაბეჭდეთ საბოლოო სია. 

list= []
list.__add__("bird")
list.__add__(0,"cat")
list.__add__(0,"cat")
print(list)
