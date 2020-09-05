'''
Write a program that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the
number and for the multiples of five print "Buzz". For
number which are multiples of both three and five print
"FizzBuzz"
'''
#Function definition
def fizzbuzzer(max_range):
    numbers = list(range(1, max_range + 1))
    
    for i in numbers:
        if i % 3 == 0 and i % 5 == 0: #Multiple of 3 & 5
            print("FizzBuzz")
        elif i % 3 == 0: #Multiple of 3
            print("Fizz")
        elif i % 5 == 0: #Multiple of 5
            print("Buzz")
        else: #Multiple of none
            print(i)
            
         
#Main code
max_number = int(input("Which is the maximum number? "))

fizzbuzzer(max_number)