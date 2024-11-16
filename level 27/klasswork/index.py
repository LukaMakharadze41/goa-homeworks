def max(x,y):
    if x >=y:

        return x
    else:
        return y

if max(6, 4) > 1:
    print("yes")
else:
    print("nope")

#1
def  welcome(name):
    if name:
        return name
if welcome("tommy"):
    print("hello," + input('enter your name:'))

#2

def printBill(customer_name):
    if customer_name:
        return customer_name
    else:
        if customer_name('Bill'):
            print (customer_name)