# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

# move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]

def move_zeros(lst):
    zero_array = []
    for i in range(len(lst) - 1, -1, -1):
        if lst[i] == 0:
            zero_array.append(lst[i])
    
    for i in range(len(lst) - 1, -1, -1):
        if lst[i] == 0:
            del lst[i]
            
    
    return lst + zero_array