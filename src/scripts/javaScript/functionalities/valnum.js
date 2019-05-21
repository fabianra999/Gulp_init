function valnum(palabra) {
    var checkOK = "0123456789";
    var checkStr = palabra;
    var allValid = true;
    var decPoints = 0;
    var nuevoString="";
    for(i=0; i <checkStr.length; i++)
    {
        ch = checkStr.charAt(i);
        for(j=0; j<checkOK.length; j++)
        {
            if(ch == checkOK.charAt(j))
            {
                nuevoString=nuevoString+ch;
            }
        }
    }
    return  nuevoString;
}
