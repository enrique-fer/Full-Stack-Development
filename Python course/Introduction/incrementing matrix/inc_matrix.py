def manual_incrementing_matrix(num) :
    grid = []
    counter = 0 
 
    for _ in range(num) :
        aux = []
        for i in range (counter, counter + num) :
            aux.append(i)
        grid.append(aux)
        counter += 1
        
    for g in grid :
        print(g)

"""def manual_incrementing_matrix(num) :
    grid = [[None for y in range(num)] for x in range(num)]
    
    counter = 0
    
    for idx, el in enumerate(grid) :
        
        for nested_idx, nested_el in enumerate(el) :
            grid[idx][nested_idx] = counter + nested_idx
            
        counter += 1        
    
    return grid
"""        
print(manual_incrementing_matrix(5))