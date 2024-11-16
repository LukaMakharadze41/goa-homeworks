


#2

def num(even,none):
    if even % none % 2==0:
        return "its even" 
    else :
        return "its not even"

#3
print(input("enter your age-1:"))
def age(x):
    
    res = 0
    for i in range(x):
        res += i
    return res
print(age(5)+1)

