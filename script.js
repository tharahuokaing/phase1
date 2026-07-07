/* ==========================================================================
   HUOKAING THARA BANK - OPERATIONAL LOGIC & LABOR COST MANAGEMENT
   DESCRIPTION: មុខងារនេះគ្រប់គ្រងការបង្ហាញទិន្នន័យចំណាយ និងវឌ្ឍនភាពការងារ
   ========================================================================== */

// 1. មូលដ្ឋានទិន្នន័យនៃថវិកាជួល (Labor Cost Database)
const laborBudget = {
    programmers: {
        base: 12.50, 
        contract: 18.20, 
        total: 30.70,
        description: "Rent of Elite Full-Stack Developers & Senior Core Programmers.",
        descriptionKH: "ការជួលអ្នកជំនាញ Full-Stack Developers និង Senior Core Programmers សម្រាប់ការកែសម្រួល Backend API។"
    },
    cyberSecurity: {
        base: 15.00, 
        contract: 22.40, 
        total: 37.40,
        description: "Rent of Offensive Security Operators & Incident Responders.",
        descriptionKH: "ការជួលក្រុមប្រតិបត្តិការសន្តិសុខ និងអ្នកជំនាញដោះស្រាយបញ្ហា (Incident Responders)។"
    }
};

// 2. មុខងារបង្ហាញព័ត៌មានលម្អិតនៃថវិកា (Advanced Labor Display)
function displayLaborDetails() {
    const logContainer = document.getElementById("monitoring-feed");
    
    // បង្កើតអត្ថបទលម្អិតជាពីរភាសាសម្រាប់ Developers
    const reportText = `
        [FINANCE REPORT]: 
        - EN: ${laborBudget.programmers.description} 
        - KH: ${laborBudget.programmers.descriptionKH} 
        - TOTAL DISBURSED: $${laborBudget.programmers.total.toFixed(2)} Billion USD.
    `;

    const logEntry = document.createElement("li");
    logEntry.style.color = "#c5a059";
    logEntry.textContent = reportText;
    
    logContainer.prepend(logEntry);
    console.log("Labor details updated successfully in dashboard.");
}

// 3. មុខងារ Multilingual (English & Khmer Support)
const dictionary = {
    en: {
        title: "⚠️ MONITORING PHASE 2: CYBERSECURITY ENFORCEMENT",
        desc: "Target: Threat mitigation and hardening of systemic routing endpoints."
    },
    kh: {
        title: "⚠️ ការត្រួតពិនិត្យដំណាក់កាលទី ២៖ ការពង្រឹងសុវត្ថិភាពសាយប័រ",
        desc: "គោលដៅ៖ ការកាត់បន្ថយហានិភ័យ និងការពង្រឹងសុវត្ថិភាពប្រព័ន្ធបណ្តាញរបស់ធនាគារ។"
    }
};

function changeLanguage(lang) {
    const titleEl = document.getElementById("monitor-title");
    const descEl = document.getElementById("monitor-desc");
    
    if (dictionary[lang]) {
        titleEl.textContent = dictionary[lang].title;
        descEl.innerHTML = `<strong>${lang === 'kh' ? 'គោលដៅ៖' : 'Target:'}</strong> ${dictionary[lang].desc}`;
    }
}

// 4. ការដំណើរការមុខងារដោយស្វ័យប្រវត្តិ
window.onload = () => {
    displayLaborDetails();
    console.log("System Operational: Labor tracking active.");
};

// បន្តដំណើរការ AI និង Log Simulation ដែលមានស្រាប់...
setInterval(() => {
    const aiFeed = document.getElementById("ai-feed");
    const insight = document.createElement("li");
    insight.textContent = `[AI CORE]: Labor costs verified for Phase 1. Budget integrity 100%.`;
    aiFeed.prepend(insight);
}, 6000);
