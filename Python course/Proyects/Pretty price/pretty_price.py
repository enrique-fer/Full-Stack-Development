#pretty_price(3.21, 99) -> 3.99
#pretty_price(3.21, 0.99) -> 3.99 

def pretty_price(price, decimal):
    if isinstance(decimal, int):
        decimal /= 100
        
    return int(price) + decimal
      

print(pretty_price(3.21, 0.98))
print(pretty_price(5.57, 95))