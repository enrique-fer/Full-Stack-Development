class User:
    def __init__(self, email, first_name, last_name):
        self.email = email
        self.first_name = first_name
        self.last_name = last_name
        
    def greeting(self):
        return f'Hi {self.first_name} {self.last_name}'
    
#AdminUser esta heredando de User, introduciendo User como paramertro 
#de la clase
class AdminUser(User):
    def active_users(self):
        return '500'
    
    
tifanny = AdminUser('tifanny@devcamp.com', 'Tifanny', 'Hudgens')
kristine = User('kristine@devcamp.com', 'Kristine', 'Hudgens')

print(tifanny.active_users())
print(kristine.greeting())
print(tifanny.greeting())
print(kristine.active_users())