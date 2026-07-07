/* =========================================================
   HUOKAING THARA BANK - EXTENDED OPERATIONAL LOGIC
   ========================================================= */

const dictionary = {
    en: { 
        title: "⚠️ PHASE 1 OPERATIONAL SUMMARY", 
        desc: "Summary: Elite developer hiring and Backend API optimization finalized 100%." 
    },
    kh: { 
        title: "⚠️ សេចក្តីសង្ខេបប្រតិបត្តិការដំណាក់កាលទី ១", 
        desc: "សេចក្តីសង្ខេប៖ ការជួលអ្នកជំនាញ និងការកែសម្រួល Backend API បានសម្រេច ១០០%។" 
    }
};

function changeLanguage(lang) {
    const titleEl = document.getElementById("monitor-title");
    const descEl = document.getElementById("monitor-desc");
    
    if (dictionary[lang]) {
        titleEl.textContent = dictionary[lang].lang === 'kh' ? dictionary.kh.title : dictionary.en.title;
        titleEl.textContent = dictionary[lang].title;
        descEl.innerHTML = `<strong>${lang === 'kh' ? 'សេចក្តីសង្ខេប៖' : 'Summary:'}</strong> ${dictionary[lang].desc}`;
    }
}

// Extended Logging System
const logs = [
    { en: "Phase 1 budget disbursement verified.", kh: "ការទូទាត់ថវិកាដំណាក់កាលទី ១ ត្រូវបានផ្ទៀងផ្ទាត់។" },
    { en: "Backend API optimization completed.", kh: "ការកែសម្រួល Backend API បានបញ្ចប់។" },
    { en: "Operational integrity at 100%.", kh: "ប្រសិទ្ធភាពប្រតិបត្តិការឈានដល់ ១០០%។" }
];

setInterval(() => {
    const feed = document.getElementById("monitoring-feed");
    const logEntry = document.createElement("li");
    const randomLog = logs[Math.floor(Math.random() * logs.length)];
    
    logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${randomLog.en} | ${randomLog.kh}`;
    feed.prepend(logEntry);
    
    if(feed.children.length > 6) feed.lastElementChild.remove();
}, 4000);
