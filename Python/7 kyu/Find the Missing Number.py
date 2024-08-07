def missing_no(nums):
    number_of_numbers = 100
    sum_of_all_numbers = number_of_numbers * (number_of_numbers + 1) // 2
    sum_of_array = sum(nums)
    
    return sum_of_all_numbers - sum_of_array