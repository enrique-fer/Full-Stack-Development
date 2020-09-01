import math

sale_prices = [
    100,
    83,
    220,
    40,
    100,
    400,
    10,
    1,
    3
]

sorted_list = sorted(sale_prices)
items = len(sale_prices)
median_list = sorted_list[:math.floor(items/2)]

print(sorted_list)
print(items)
print(median_list)