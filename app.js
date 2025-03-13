let tabs = [
    {
        button: "tb-info",
        tab: "t-info"
    },
    {
        button: "tb-system",
        tab: "t-system"
    },
    {
        button: "tb-advanced",
        tab: "t-advanced"
    },
    {
        button: "tb-security",
        tab: "t-security"
    },
    {
        button: "tb-boot",
        tab: "t-boot"
    },
    {
        button: "tb-exit",
        tab: "t-exit"
    },
];

let activeTab = 0;

document.addEventListener("keydown", (e)=>{
    if(e.key.toLowerCase() != "arrowright" &&
        e.key.toLowerCase() != "arrowleft") return;

    if(e.key.toLowerCase() == "arrowright")
    {
        if(activeTab < tabs.length-1) activeTab++;
        else activeTab = 0;
    }
    else
    {
        if(activeTab > 1) activeTab--;
        else activeTab = tabs.length-1;
    }

    for(let i=0;i<tabs.length;i++)
    {
        document.getElementById(tabs[i].button).classList.remove("active");
        document.getElementById(tabs[i].tab).classList.add("hidden");
    }

    document.getElementById(tabs[activeTab].button).classList.add("active");
    document.getElementById(tabs[activeTab].tab).classList.remove("hidden");
});

// github icon?
var urlParams = new URLSearchParams(window.location.search);
if(urlParams.has("github_icon"))
{
    if(urlParams.get("github_icon") == "no") document.body.removeChild(document.getElementById("github-btn"));
}

// General
setInterval(() => {
    var date = new Date();

    document.getElementById("sys-time").innerHTML = "[" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "]";
    document.getElementById("sys-date").innerHTML = "[" + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + "]"; 
}, 100);