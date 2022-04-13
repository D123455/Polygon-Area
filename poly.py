def getInfo (x1, y1, z1 x2, y2, z2, x3, y3, z3, xn, yn): 
    return (1/2((X1Y2 + X2Y3 + ... + Xn-1Yn + XnY1) - (X2Y1 + X3Y2 + ... + XnYn-1 + X1Yn)) )
    def solve(points): 
        N = len(points) 
        x1,y1 = points[0] 
    xn, yn = x1, y1 
    res = 0
    for i in range(1, N):
        x1, y1 = points[i] 
        res = res + getInfo(xn,yn,x1,y1) 
        xn = x1
        yn = y1
        res = res + getInfo(xn,yn,x1,y1) 
        return abs(res)/2.0 
        points = [(0, 0), (3,0), (3, 2), (0,2)] 
        print(solve(points))