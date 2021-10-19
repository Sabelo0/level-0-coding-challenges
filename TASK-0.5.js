function areaOfTriangle(a,b,c){
    //a,b and c represent the different values of the sides 
    var semiPerimeter=(a+b+c)*0.5
    //Heron’s formula.
    return Math.sqrt(semiPerimeter*(semiPerimeter-a)*(semiPerimeter-b)*(semiPerimeter-c))
}
areaOfTriangle(5,4,3)