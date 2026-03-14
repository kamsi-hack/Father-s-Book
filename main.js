let browser = document.getElementById("browser")

function search(){

let input = document.getElementById("urlBar").value

if(input.startsWith("http")){
browser.src = input
}

else if(input.includes(".")){
browser.src = "https://" + input
}

else{
browser.src = "https://www.google.com/search?q=" + input
}

saveHistory(browser.src)

}

function goBack(){
browser.contentWindow.history.back()
}

function goForward(){
browser.contentWindow.history.forward()
}

function reloadPage(){
browser.contentWindow.location.reload()
}
