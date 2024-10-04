#1.გააკეთეთ 3 მაგალითი format() - ზე

name= "luka"
last_name= "makharadze"
countre= "georgia"
info= "hello my name is {0} my last name is {1} i from {2}".format(name,last_name,countre)
print(info)

mom= 'khaty'
momlastname= 'jojishvili'
countre_2= "georgia"
info_2= "hello my mom name is {0} shes lastname is {1} she is from {2}".format(mom,momlastname,countre_2)

father= "gia"
fatherlastname= "makharadze"
countre_3= "georgia"
info_3= "hello my fathers name is {0} hes lastname is {1} he is from {2}".format(father,fatherlastname,countre_3)


#2.გააკეთეთ 3 მაგალითი join() - ზე

qouuntre=["geo","-","rus","-","deu","-","chez","-","por"]
remove_letters_2= qouuntre.pop(2)
remove_letters_4= qouuntre.pop(6)
new_qountre= "-".join(qouuntre)
print(new_qountre)
print(remove_letters_2)
print(remove_letters_4)

კვატი= ["10","20","30"]
num2= ",".join (კვატი)
print(კვატი)


name_ = ("ლუკა","მახარაძე") 
remove_letters = name.removeprefix(name)
remove_letters_5=name.join(remove_letters)
new_name = "".join(remove_letters_5)
print(remove_letters_5)

#3.გააკეთეთ 3 მაგალითი split() - ზე

name_1= "l@u@k@a"
new_name_2= "".split("@")
print(name_1)

n= ["bull rull kull shmull kvati"]
new_name_2= "".split("l")
print(n)

naha= "m####akh#####ra#####dze"
new_name_2= "".split("13")
print(name_1)

#4


