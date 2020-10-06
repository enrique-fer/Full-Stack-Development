class Invoice:
    
    def __init__(self, client, total):
        self._client = client
        self._total = total
        
    def __str__(self):
        return f'Invoice from {self.client} for {self.total}'
    
    def __repr__(self):
        return f'Invoice <value: client: {self.client}, total: {self.total}>'
        
    @property
    def client(self):
        return self._client
    
    @property
    def total(self):
        return self._total
    
    @client.setter
    def client(self, client):
        self._client = client
        
    @total.setter
    def total(self, total):
        self._total = total
    
    
    def formatter(self):
        return f'{self.client} owes : ${self.total}'
        
    def greeting(self):
        return 'Hi there'
    
    
inv = Invoice('Google', 100)
invt = Invoice('Snapchat', 200)

inv.client = 'Yahoo'

print(inv.formatter())
print(invt.formatter())

print(str(inv))
print(repr(invt))