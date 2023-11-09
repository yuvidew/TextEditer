/*this for the print text box */

// const theTextBox = document.getElementById('theTextBox')

const printPage = (divId) =>{
    var content = document.getElementById(divId).innerHTML;
    var printWindow = window.open('');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

/*this is for the nav btn */

const hamBarBtn = document.getElementById('hamBarBtn')
const theNavBar = document.querySelector('.theNavBar')

hamBarBtn.addEventListener('click', () => {
    if(theNavBar.style.display === 'block'){
        theNavBar.style.display = 'none'
    }else{
        theNavBar.style.display = 'block'
    }
})

/* thsi is  for the change text style  */

const theBtnCont = document.querySelectorAll('.theBtnCont , button')

theBtnCont.forEach(ele => {
    ele.addEventListener('click', () => {
        modifyTheText(ele.name , false , null)
    })
})

const modifyTheText = (command , defaultUI , value) => {
    document.execCommand(command , defaultUI , value)
}

/*thsi is for the change text color */

const theColor = document.querySelectorAll('.theColor input')

theColor.forEach(btn =>{
    btn.addEventListener('change', () => {
        modifyTheText(btn.name , false , btn.value)
    })
})

/*this is for the create Link  and uncreate link  */

const theLinkBtn = document.getElementById('theLinkBtn')
const theUnLinkBtn = document.getElementById('theUnLinkBtn')

theLinkBtn.addEventListener('click' , () => {
    let userLink = prompt('Enter a URL')
    if(/http/i.test(userLink)){
        modifyTheText(theLinkBtn.name , false , userLink)
    }else{
        userLink =`http://${userLink}`
        modifyTheText(theLinkBtn.name , false , userLink)
    }
})

theUnLinkBtn.addEventListener('click', () => {
    modifyTheText(theUnLinkBtn.name , false , null)
})

/* this is for the text positining btn */

const thePositionBtn = document.querySelectorAll('.thePositionBtn button')

thePositionBtn.forEach(ele => {
    ele.addEventListener('click', () => {
        modifyTheText(ele.name , false , null)
    })
})

/* this is for the undo or redo btn */

const theOtherTools = document.querySelectorAll('.theOtherTools button')

theOtherTools.forEach(ele =>{
    ele.addEventListener('click', () => {
        modifyTheText(ele.name , false , null)
    })
})


/* this is the font style */

const theFontSele = document.querySelector('.theFontSele')

theFontSele.addEventListener('change', (e) => {
    modifyTheText('fontName', false, e.target.value)
})

/* this is the font size */

const theFontSele2 = document.querySelector('.theFontSele2')

theFontSele2.addEventListener('change', (e) => {
    modifyTheText('fontSize', false, Number(e.target.value))
})

/* this is for the move the text left and right */

const theindentoutdent = document.querySelectorAll('.theindentoutdent button')

theindentoutdent.forEach(ele => {
    ele.addEventListener('click', () => {
        modifyTheText(ele.name , false , null)
    })
})