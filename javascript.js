var count=0;
function chan()
{
    let bac=document.querySelector("body");
    let tex=document.getElementById("hh");
    let arr=["red","yellow","green"];
    
    for(i=0;i<3;i++)
    {
        if(count==i)
        {
        bac.style.backgroundColor=arr[i];
        tex.innerHTML="background color : "+arr[i];
        count++;
        if(count==3)
        {
            count=0;
        }
        break;
        }
    }
}