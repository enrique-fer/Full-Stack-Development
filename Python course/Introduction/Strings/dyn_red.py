import operator
from functools import reduce

"""
dynamic_reducer([1, 2, 3], '+') #6
dynamic_reducer([1, 2, 3], '-') #-4
dynamic_reducer([1, 2, 3], '*') #6
dynamic_reducer([1, 2, 3], '/') #0.166
"""
"""
def dynamic_reducer(num_list, operation):
    total = num_list[0]
    
    if (operation == '+') :
        for i in num_list[1:] :
            total = operator.add(total, i)
    elif (operation == '-') :
        for i in num_list[1:] :
            total = operator.sub(total, i)
    elif (operation == '*') :
        for i in num_list[1:] :
            total = operator.mul(total, i)
    elif (operation == '/') :
        for i in num_list[1:] :
            total = operator.truediv(total, i)
    else :
        total = -1
        
    return total
"""

def dynamic_reducer (num_list, op) :
    operators = {'+': operator.add, 
                 '-': operator.sub, 
                 '*': operator.mul,
                 '/': operator.truediv
                 }
    
    return reduce(lambda total, element: operators[op](total, element), num_list)
        
###########################################################################
list_num = []
operation = input("What type of operation are you making?  ")
cant_num = int(input("How many number do you want to input?  "))


for i in range(0, cant_num) :
    list_num.append(int(input("Enter an integer : \n")))
    
print("--------------------------------------")
"""   
for g in list_num :
    print(g) """
    
print(dynamic_reducer(list_num, operation))
    
    