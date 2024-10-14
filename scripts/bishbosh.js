document.getElementById("bishBoshButton").onclick = GetStandardBishBoshList;


function GetStandardBishBoshList() 
{
    let bishBoshList = []

    for (let i = 1; i <= 100; i++) 
    {
        if (i % 12 == 0) 
        {
            bishBoshList.push('Bish-Bosh')
        } 
        else if (i % 3 == 0) 
        {
            bishBoshList.push('Bish')
        }
        else if (i % 4 == 0) 
        {
            bishBoshList.push('Bosh')
        }
        else
        {
            bishBoshList.push(i.toString())
        }
    }
    console.log(bishBoshList)
}