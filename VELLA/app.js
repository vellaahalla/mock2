// No. 1
let inputRow = 4
function showType1(){
    inputRow += 1
    let data = []
    for (let i=1; i<=inputRow; i++){
        let charRow =""
        for (let j=1; j<=inputRow; j++){
            if (j % 2 == 0 ){
            charRow += "#"}else{
                charRow += "*"
            }
        }
        data.push(charRow)
    }
    let listType1 = data.map((el) =>{
        return `
        <h4>${el}</h4>
        `
    })
    document.getElementById("resultType").innerHTML=listType1.join("")
}

function showType2(){
    inputRow += 1 
    let data = []
    for (let i=1; i<=inputRow; i++){
        let charRow = ""
        for (let j=inputRow; j>=i; j--){
            if (i%2==0){
                charRow += "#"
            } else{
                charRow += "*"
            }
            }
            data.push(charRow)
        }
         let listType2 = data.map((el) =>{
        return `
        <h4>${el}</h4>
        `
    })
    document.getElementById("resultType").innerHTML=listType2.join("")
    }

   
// No.2
let arrEvent = []
function showTable(){
    let listEvent = arrEvent.map(val =>{
        return (`
        <tr>
        <td>${val.no}</td>
        <td>${val.inputDate}</td>
        <td>${val.inputTime}</td>
        <td>${val.inputEvent}</td>
        <td><img src="${val.inputImage}"></td>
        <td>
        <input type="button" value="EDIT" onclick="funEdit(${val.no})">
        </td>
        <td>
        <input type="button" value="DELETE" onclick="funDelete(${val.no})">
        </td>
        </tr>
        `)
    })
    document.getElementById("renderTable").innerHTML=listEvent.join("")
}


function addEvent(){
    let inputDate = document.getElementById("inputDate").value
    let inputTime = document.getElementById("inputTime").value
    let inputEvent = document.getElementById("inputEvent").value
    let inputImage = document.getElementById("inputImage").value
    let no = arrEvent.length + 1 

    if (!inputDate) {
        alert("Tolong isi tanggal!")
    } else if (!inputTime) {
        alert("Tolong isi waktu")
    } else if (!inputEvent) {
        alert("Tolong isi kegiatan")
    } else if (!inputImage) {
        alert("Tolong isi source image")
    } else{
        arrEvent.push({
            no,
            inputDate,
            inputTime,
            inputEvent,
            inputImage,
        })  
    console.log(arrEvent)

        showTable()
    }
}

function funDelete(no){
    arrEvent = arrEvent.filter((el) =>{
        return el.no!== no;
    })
    showTable()
}

// No. 3
// arrResult=[]
// function addSentence(){
//     let inputSentence = document.getElementById("inputSentence").value
//     let hurufVokal = "aiueo"
//     let hurufKonsonan = "bcdfghjklmnpqrstvwxyz"
//     let countVokal = 0
//     for (let i=0; i< inputSentence.length; i++){
//         if (inputSentence.includes("hurufVokal"){
//             countVokal +=1
//         } else {break}
//     }

// }