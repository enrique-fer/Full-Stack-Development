def greeting(time_of_day, *args, **kwargs):
    print(f"Hi {' '.join(args)}, have a nice {time_of_day}")
    
    if kwargs:
        print("Your tasks for the day are: ")
        for key, val in kwargs.items():
            print(f"{key} => {val}")
            
            
greeting('evening',
         'Enrique', 'Fernandez',
         first = 'laundry', second = 'programming')