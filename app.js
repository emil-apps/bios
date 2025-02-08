var tMain = document.getElementById("t-main");
var tAdvanced = document.getElementById("t-advanced");
var tSecurity = document.getElementById("t-security");
var tBoot = document.getElementById("t-boot");
var tExit = document.getElementById("t-exit");

let activeTab = tMain;
let activeSetting = null;

document.addEventListener("keyup", (e)=>{
    if(e.key.toLowerCase() == "escape") window.close()
});