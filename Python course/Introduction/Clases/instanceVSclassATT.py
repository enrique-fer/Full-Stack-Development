class Website:
    #Instance atribute
    def __init__(self, title):
        self.title = title
        
class DifferentWebsite:
    #Class atribute
    title = 'My class title'
        
    
    
ws = Website('My website title')
print(ws.__dict__)
print(ws.title)


dw = DifferentWebsite()
print(dw.__dict__)
print(dw.title)