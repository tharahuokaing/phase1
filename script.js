/* =========================================================
   HUOKAING THARA BANK - OPERATIONAL LOGIC
   PHASE 2: SECURITY MONITORING & AI ANALYSIS
========================================================= */

// 1. Multilingual Dictionary
const dictionary = {
    en: { 
        title: "⚠️ MONITORING PHASE 2: CYBERSECURITY ENFORCEMENT", 
        desc: "Target: Threat mitigation and hardening of systemic routing endpoints." 
    },
    fr: { 
        title: "⚠️ SURVEILLANCE PHASE 2 : RENFORCEMENT CYBERSÉCURITÉ", 
        desc: "Cible : Atténuation des menaces et durcissement des points de routage." 
    },
    de: { 
        title: "⚠️ ÜBERWACHUNG PHASE 2: CYBER-SICHERHEITS-DURCHSETZUNG", 
        desc: "Ziel: Bedrohungsabwehr und Härtung der Routing-Endpunkte." 
    },
    es: { 
        title: "⚠️ MONITOREO FASE 2: CIBERSEGURIDAD", 
        desc: "Objetivo: Mitigación de amenazas y endurecimiento de puntos finales." 
    },
    it: { 
        title: "⚠️ MONITORAGGIO FASE 2: ENFORCEMENT CYBERSICUREZZA", 
        desc: "Obiettivo: Mitigazione delle minacce e protezione degli endpoint." 
    }
};

// 2. Language Switcher Function
function changeLanguage(lang) {
    const monitorTitle = document.getElementById("monitor-title");
    const monitorDesc = document.getElementById("monitor-desc");
    
    if (dictionary[lang]) {
        monitorTitle.textContent = dictionary[lang].title;
        monitorDesc.innerHTML = `<strong>គោលដៅ៖</strong> ${dictionary[lang].desc}`;
    }
}

// 3. PDF Export Placeholder
function exportToPDF() {
    console.log("PDF generation initiated...");
    alert("ប្រព័ន្ធកំពុងរៀបចំទិន្នន័យដើម្បីទាញយកជាឯកសារ PDF... សូមរង់ចាំបន្តិច។");
}

// 4. AI Monitoring Simulation
setInterval(() => {
    const aiFeed = document.getElementById("ai-feed");
    const insights = [
        "AI: Threat vectors within safety parameters.",
        "AI: Optimizing bandwidth allocation for secure routing.",
        "AI: Cybersecurity layer confirmed at 99.9% efficiency.",
        "AI: No anomalies detected in current node architecture."
    ];
    
    const insight = document.createElement("li");
    insight.style.color = "#c5a059";
    insight.textContent = `[AI CORE]: ${insights[Math.floor(Math.random() * insights.length)]}`;
    
    aiFeed.prepend(insight);
    if (aiFeed.children.length > 3) aiFeed.lastElementChild.remove();
}, 5000);

// 5. Operational Logs Simulation
setInterval(() => {
    const feed = document.getElementById("monitoring-feed");
    const logs = [
        "Network handshake secure.", 
        "Database latency optimal.", 
        "Security nodes stable."
    ];
    
    const log = document.createElement("li");
    log.textContent = `[${new Date().toLocaleTimeString()}] ${logs[Math.floor(Math.random() * logs.length)]}`;
    
    feed.prepend(log);
    if (feed.children.length > 5) feed.lastElementChild.remove();
}, 3000);
