function DisplayCurrentTime() {
        const date = new Date();
        let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        let am_pm = date.getHours() >= 12 ? "PM" : "AM";
        hours = hours < 10 ? "0" + hours : hours;
        let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        const hou = document.getElementById("hour");
        const min = document.getElementById("minute");
        const sec = document.getElementById("second");
        const pe = document.getElementById("period");
        hou.innerHTML = hours;
        min.innerHTML = minutes;
        sec.innerHTML = seconds;
        pe.innerHTML = am_pm;
    };
    const timer= setInterval(DisplayCurrentTime,1000);