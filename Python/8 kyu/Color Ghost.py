# Color Ghost
# Create a class Ghost

# Ghost objects are instantiated without any arguments.

# Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

# ghost = Ghost()
# ghost.color  #=> "white" or "yellow" or "purple" or "red"

import random

class Ghost:
    def __init__(self):
        # List of possible colors
        colors = ["white", "yellow", "purple", "red"]
        # Randomly select a color
        self.color = random.choice(colors)