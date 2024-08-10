# Welcome.

# In this kata you are required to, given a string, replace every letter with its position in the alphabet.

# If anything in the text isn't a letter, ignore it and don't return it.

# "a" = 1, "b" = 2, etc.

# Example
# Input = "The sunset sets at twelve o' clock."
# Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

def alphabet_position(text):
    alphabet_array = [' ' ,'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    text_array = list(text)
    filtered_array = []
    indices = []
    
    for i in range(len(text_array)):
        text_array[i] = text_array[i].lower()
    
    for i in text_array:
        if i.isalpha():
            filtered_array.append(i)
        
    for i in filtered_array:
        if i in alphabet_array:
            indices.append(alphabet_array.index(i))
    
    indices_string = ' '.join(map(str, indices))

    return indices_string