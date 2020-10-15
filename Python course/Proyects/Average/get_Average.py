from functools import reduce

num_list = [1, 2, 3, 4, 5, 6, 8, 24]

#Functools - reduce
def get_averege(num_list):
    total = reduce(
        (lambda total, element: total + element),
        num_list)
    
    return total/len(num_list)

#sum / total
def get_avg(num_list):
    num = 0
    for i in num_list:
        num += i
    num /= len(num_list)
    
    return num


print(get_averege(num_list))
print(get_avg(num_list))

