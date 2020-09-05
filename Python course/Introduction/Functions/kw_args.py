def greeting(**kwargs):
    if kwargs:
        print(f"Hi {kwargs['first_name']} {kwargs['last_name']}, have a great day")
    else:
        print("Hi Guest, have a great day")
    
greeting(first_name = 'Enrique', last_name = 'Fernandez')
greeting()