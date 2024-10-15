document.getElementById("standardBishBoshButton").onclick = GetStandardBishBoshList;
document.getElementById("advancedBishBoshButton").onclick = AdvancedBishBosh;

let errorMessageText = document.getElementById("errorMessage")

let list = document.getElementById("bishBoshList")

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

function AdvancedBishBosh() 
{
    let bishValue = Number(document.getElementById("bishNumber").value)
    let boshValue = Number(document.getElementById("boshNumber").value)
    let loopMax = Number(document.getElementById("loopMax").value)


    if (bishValue == ''  || bishValue == null || boshValue == ''  || boshValue == null || loopMax == ''  || loopMax == null) 
    {
        ErrorMessage("Values not entered correctly");
    }
    else if (bishValue < 1)
    {
        ErrorMessage("Bish number cannot be below 1")
    }
    else if (bishValue >= boshValue) 
    {
        ErrorMessage("Bish number has to be smaller than Bosh number")
    }
    else if (loopMax < boshValue) 
    {
        ErrorMessage("Loop max cannot be smaller than Bosh number")
    }
    else 
    {
        ClearErrorMessage()
        ClearList(false);

        for (let i = 1; i <= loopMax; i++) 
        {
            let listItem = document.createElement('li')
            if (i % bishValue == 0 && i % boshValue == 0) 
            {
                listItem.innerText = 'Bish-Bosh'
            } 
            else if (i % bishValue == 0) 
            {
                listItem.innerText = 'Bish'
            }
            else if (i % boshValue == 0) 
            {
                listItem.innerText = 'Bosh'
            }
            else
            {
                listItem.innerText = i.toString()
            }
            list.appendChild(listItem)
        }
    }
}

function ErrorMessage(message)
{
    errorMessageText.textContent = message
}

function ClearErrorMessage()
{
    errorMessageText.textContent = ""
}

function ClearList(addNothingHere)
{
    list.innerText = ''
    if (addNothingHere)
    {
        let listItem = document.createElement('li')
        listItem.innerText = 'Nothing here'
        list.appendChild(listItem)
    }
}