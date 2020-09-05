'''
Lambdas are small anonymus functions,
they can have multiple arguments but
only one expression
'''
full_name = lambda first, last: f'{first} {last}'

def greeting(name):
    print(f'Hi there {name}')
    
    
greeting(full_name('Enrique', 'Fernandez'))