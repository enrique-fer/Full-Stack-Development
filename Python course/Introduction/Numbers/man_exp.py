from functools import reduce

def manual_exponent(num, exp) :
    list_num = [num] * exp
    
    return reduce(lambda total, element: total * element, list_num)

"""
def manual_exponent(num, exp) :
    counter = exp - 1
    total = num
    
    while counter > 0 :
        total *= num
        counter -= 1
        
    return total
"""

########################################
print(manual_exponent(2, 10))