
const targetDate = new Date("2026-04-20T18:00:00"); 

function updateTime() {
    const now = new Date();
    const diff = targetDate - now;


    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = targetDate.toLocaleDateString('en-US', options);
    const dueDateElement = document.getElementById('due-date-text');
    
    if (dueDateElement) {
        dueDateElement.innerText = `Due ${formattedDate}`;
        dueDateElement.setAttribute('datetime', targetDate.toISOString());
    }

   
    let hint = "";
    if (diff <= 0) {
        hint = "Due now!";
    } else {
        const totalHours = Math.floor(diff / (1000 * 60 * 60));
        const totalDays = Math.floor(totalHours / 24);

        if (totalDays >= 2) {
            hint = `Due in ${totalDays} days`;
        } else if (totalDays === 1) {
            hint = "Due tomorrow";
        } else if (totalHours >= 1) {
            hint = `Due in ${totalHours} hours`;
        } else {
            const mins = Math.floor((diff / (1000 * 60)) % 60);
            hint = `Due in ${mins} minutes`;
        }
    }
    
    const timeRemainingElement = document.getElementById('time-remaining');
    if (timeRemainingElement) {
        timeRemainingElement.innerText = hint;
        timeRemainingElement.setAttribute('datetime', targetDate.toISOString());
    }
}

function handleToggle() {
    const isChecked = document.getElementById('toggle').checked;
    const title = document.getElementById('title');
    const status = document.getElementById('status');
    
    if (isChecked) {
        title.classList.add('done-state');
        status.innerText = "Done";
        status.className = "px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-lg border border-green-100";
    } else {
        title.classList.remove('done-state');
        status.innerText = "In Progress";
        status.className = "px-3 py-1 bg-amber-50 text-amber-600 text-[10px] font-black uppercase tracking-widest rounded-lg border border-amber-100";
    }
}


setInterval(updateTime, 30000);
updateTime();