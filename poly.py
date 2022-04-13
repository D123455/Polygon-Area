def polygonArea(X, Y, n):
  
    # Initialize area
    area = 0.0
  
    # Calculate value of shoelace formula
    j = n - 1
    for i in range(0,n):
        area += (X[j] + X[i]) * (Y[j] - Y[i])
        j = i   # j is previous vertex to i
      
  
    # Return absolute value
    return int(abs(area / 2.0))
  
# Driver program to test above function
X = [0, 3, 3, 0]
Y = [0, 0, 2, 2]
n = len(X)
print(polygonArea(X, Y, n))




   