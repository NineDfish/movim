function closeTalk(n) {
    n.parentNode.parentNode.removeChild(n.parentNode);
}

function showTalk(n) {
    var box = n.parentNode.querySelector('.box');
    if(box.style.display == "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";
    }
}

function sendMessage(n, jid)
{
    var text = n.value;
    var date = new Date();
    var box = document.getElementById(jid + 'Messages');
    box.innerHTML = '<p class="message me"><span class="date">'+date.getHours()+':'+date.getMinutes()+'</span>' + text + '</p>'+n.parentNode.innerHTML;
    n.value = "";
    n.focus();
    return text;

}
