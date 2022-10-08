"use strict";

async function myFunction(element) {
    var copyText = document.getElementById("coupon-button");
    if (copyText.innerHTML === "<strong>LA45OFF</strong>") {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
        copyText.innerHTML = "<strong>Copied to clipboard</strong>";
        await sleep(1500);
        copyText.innerHTML = "<strong>LA45OFF</strong>";
    } else {
        copyText.innerHTML = "<strong>LA45OFF</strong>";
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}