def is_even(value):
    if isinstance(value, int):
        if value % 2 != 0:
            return False
        else:
            return True
    else:
        print(f'Eror: "{value}" is not number')
        return False

def is_odd(value):
    if is_even(value) == True:
        return False
    else:
        return True

    
print(is_odd(1))