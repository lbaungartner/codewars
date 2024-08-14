# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

# Additionally, if the number is negative, return 0.

# Note: If the number is a multiple of both 3 and 5, only count it once.

# Courtesy of projecteuler.net (Problem 1)

def solution(number):
    if number < 0:
        return 0
    
    array_of_numbers = list(range(1, number))
    multiples_of_3 = []
    multiples_of_5 = []
    combined_multiples = []
    
    for n in array_of_numbers:
        if n % 3 == 0:
            multiples_of_3.append(n)
        elif n % 5 == 0:
            multiples_of_5.append(n)
    
    combined_multiples = list(set(multiples_of_3 + multiples_of_5))
    
    return sum(combined_multiples)
            