let imageElement = document.getElementById("image");
let minlimit = 100;
let maxlimit = 300;
let picwidth = 200;
let warningmsg = document.getElementById("warningMessage");
let minlimitmsg = "Can't visible.Increase the size of the image";
let maxlimitmsg = "Too big,Decrease the size of the image";
let imagewidth = document.getElementById("imageWidth");
imageElement.style.width = picwidth + "px";
let updatewidth = picwidth + "px";
imagewidth.textContent = updatewidth;

function increment() {
    if (picwidth >= maxlimit) {
        warningmsg.textContent = maxlimitmsg;
    } else {
        picwidth = picwidth + 5;
        let updatedwidth = picwidth + "px";
        warningmsg.textContent = "";
        imageElement.style.width = updatedwidth;
        imagewidth.textContent = updatedwidth;
    }
}

function decrement() {
    if (picwidth <= minlimit) {
        warningmsg.textContent = minlimitmsg;
    } else {
        picwidth = picwidth - 5;
        let updatedwidth = picwidth + "px";
        warningmsg.textContent = "";
        imageElement.style.width = updatedwidth;
        imagewidth.textContent = updatedwidth;
    }
}