class Lineup:
    def __init__(self, players):
        self.players = players
        self.last_player_index = len(players) - 1
        
    
        
    def __iter__(self):
        self.n = 0
        return self
        
    def get_player(self, n):
        return self.players[n]
    
    def __next__(self):
        if self.n < self.last_player_index:
            player = self.get_player(self.n)
            self.n += 1
            return player
        elif self.n == self.last_player_index:
            player = self.get_player(self.n)
            self.n = 0
            return player
        
class InfiniteLineup:
    def __init__(self, players):
        self.players = players 
        
    def lineup(self):
        lineup_max = len(self.players)
        idx = 0
    
        while True:
            if idx < lineup_max:
                yield self.players[idx]
            else: 
                idx = 0
                yield self.players[idx]
            
        idx += 1
        
    def __repr__(self):
        return f'<InfiniteLineup({self.players})'
    
    def _str__(self):
        return f'InfiniteLineup with the players: {self.players}'

astros = [
    'Springer',
    'Bregman', 
    'Altuve',
    'Correa',
    'Reddick',
    'Gonzalez',
    'McCann',
    'Davis',
    'Tucker'
]

#astros_lineup = Lineup(astros)
#process = iter(astros_lineup)

#for i in range(11):
#    print(next(process))

full_lineup = InfiniteLineup(astros)
astros_lineup = full_lineup.lineup()

print(next(astros_lineup))

print(repr(astros_lineup))
print(str(astros_lineup))