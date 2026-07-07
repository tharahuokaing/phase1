/* ==========================================================================
   HUOKAING THARA BANK - OPERATIONAL MANAGEMENT LOGIC
   DESCRIPTION: គ្រប់គ្រងស្ថានភាពគម្រោង និងការទូទាត់ថវិកាដោយស្វ័យប្រវត្តិ
   ========================================================================== */

// 1. មូលដ្ឋានទិន្នន័យស្ថានភាពគម្រោង
const projectData = {
    phase1: { status: "PAID", label: "Phase 1: Programmers & Devs", cost: "$30.70 Billion" },
    phase2: { status: "PENDING", label: "Phase 2: Cybersecurity", cost: "Awaiting Approval" }
};

// 2. មុខងារផ្លាស់ប្តូរភាសា (English & Khmer)
const dictionary = {
    en: { title: "⚠️ OPERATIONAL MONITORING", desc: "Phase 1 complete. Phase 2 pending approval." },
    kh: { title: "⚠️ ការត្រួតពិនិត្យប្រតិបត្តិការ", desc: "ដំណាក់កាលទី ១ បានបញ្ចប់។ ដំណាក់កាលទី ២ កំពុងរង់ចាំការអនុម័ត។" }
};

function changeLanguage(lang) {
    const titleEl = document.getElementById("monitor-title");
    const descEl = document.getElementById("monitor-desc");
    if (dictionary[lang]) {
        titleEl.textContent = dictionary[lang].title;
        descEl.innerHTML = `<strong>${lang === 'kh' ? 'សេចក្តីសង្ខេប៖' : 'Summary:'}</strong> ${dictionary[lang].desc}`;
    }
}

// 3. មុខងារទាញយក PDF (Placeholder)
function exportToPDF() {
    alert("ប្រព័ន្ធកំពុងបង្កើតឯកសារ PDF សម្រាប់របាយការណ៍ហិរញ្ញវត្ថុ... សូមរង់ចាំ។");
}

// 4. មុខងារអនុម័ត Phase 2 (New Feature)
function approvePhase2() {
    if (projectData.phase2.status === "PENDING") {
        projectData.phase2.status = "PAID";
        projectData.phase2.cost = "$37.40 Billion";
        
        alert("ដំណាក់កាលទី ២ ត្រូវបានអនុម័តដោយជោគជ័យ!");
        
        // អាប់ដេតតារាងក្នុង HTML ភ្លាមៗ
        const table = document.getElementById("labor-table").getElementsByTagName('tbody')[0];
        table.rows[1].cells[1].textContent = "PAID / ទូទាត់រួចរាល់";
        table.rows[1].cells[2].textContent = projectData.phase2.cost;
        table.rows[1].style.color = "#00ffcc";
        
        addLog("[LOG]: Phase 2 disbursement approved and processed.");
    }
}

// 5. មុខងារបន្ថែម Log ទៅក្នុង Feed
function addLog(message) {
    const feed = document.getElementById("monitoring-feed");
    const log = document.createElement("li");
    log.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    feed.prepend(log);
}

// 6. AI Core Simulation (ដំណើរការរៀងរាល់ ៥ វិនាទី)
setInterval(() => {
    const aiFeed = document.getElementById("ai-feed");
    const insights = ["[AI CORE]: Phase 1 integrity 100%.", "[AI CORE]: System ready for Phase 2."];
    const li = document.createElement("li");
    li.textContent = insights[Math.floor(Math.random() * insights.length)];
    aiFeed.prepend(li);
    if(aiFeed.children.length > 3) aiFeed.lastElementChild.remove();
}, 5000);
