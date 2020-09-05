def greeting(time_of_day, *args):
    print(f"Hi, {' '.join(args)}, I hope you're having a great {time_of_day}")
    
greeting('Morning', 'Enrique', 'F', 'S')