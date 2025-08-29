const allHeartButtons = document.getElementsByClassName('btn-heart')

for(const heartBtn of allHeartButtons){
    heartBtn.addEventListener('click',function(){
        const heartcounter = document.getElementById('heart-counter').innerText
        document.getElementById('heart-counter').innerText = parseInt(heartcounter)+1
    })
}



const  allCopyButtons = document.getElementsByClassName('btn-copy')

for(const copyBtn of allCopyButtons){
    copyBtn.addEventListener('click',function(e){


    const number =  e.target.parentNode.parentNode.children[1].children[2].innerText

    const copyField = document.getElementById("copy-counter").innerText
    
    alert(`${number} copied`)
    
     document.getElementById("copy-counter").innerText = parseInt(copyField)+1
    
     navigator.clipboard.writeText(number)

    })
}


const allcallButtons = document.getElementsByClassName('btn-call')

for(const callBtn of allcallButtons){
    
    callBtn.addEventListener('click',function(e){

    const number =  e.target.parentNode.parentNode.children[1].children[2].innerText
    const title =  e.target.parentNode.parentNode.children[1].children[1].innerText
    const currentBalance = document.getElementById('coin-counter').innerText;
    const historyContainer = document.getElementById('history-container')

    if((parseInt(currentBalance))<20){
        alert ('❌ You can not make call due to insufficient balance make recharge..')
    return;
    } 


    alert(`${title} ${number} calling...`)

     document.getElementById('coin-counter').innerText = parseInt(currentBalance)-20

     const div = document.createElement('div')
     div.className = 'history p-2 bg-slate-300 my-4 rounded flex items-center '

     div.innerHTML = `

                        <div class="text w-2/3">
                            <h2 class="">${title}</h2>
                            <h4 class="font-bold">${number}</h4>
                        </div>
                        <p class="text-sm">${new Date().toLocaleTimeString()}</p>
     
     `
historyContainer.appendChild(div)

    })
}


document.getElementById('clear-history').addEventListener('click',function (){
  const historyContainer = document.getElementById('history-container')
  historyContainer.innerHTML = ''  
})