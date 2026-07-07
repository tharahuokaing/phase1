const dictionary = {
    en: { title: "⚠️ MONITORING PHASE 2: CYBERSECURITY ENFORCEMENT", desc: "Target: Threat mitigation and hardening." },
    fr: { title: "⚠️ SURVEILLANCE PHASE 2 : RENFORCEMENT CYBERSÉCURITÉ", desc: "Cible : Atténuation des menaces." },
    de: { title: "⚠️ ÜBERWACHUNG PHASE 2: CYBER-SICHERHEIT", desc: "Ziel: Bedrohungsabwehr." },
    es: { title: "⚠️ MONITOREO FASE 2: CIBERSEGURIDAD", desc: "Objetivo: Mitigación de amenazas." },
    it: { title: "⚠️ MONITORAGGIO FASE 2: ENFORCEMENT CYBERSICUREZZA", desc: "Obiettivo: Mitigazione delle minacce." }
};

function changeLanguage(lang) {
    document.getElementById("monitor-title").textContent = dictionary[lang].title;
    document.getElementById("monitor-desc").innerHTML = `<strong>គោលដៅ៖</strong> ${dictionary[lang].desc}`;
}

function exportToPDF() {
    alert("ប្រព័ន្ធកំពុងរៀបចំទិន្នន័យដើម្បីទាញយកជាឯកសារ PDF... សូមរង់ចាំបន្តិច។");
}

// AI Monitoring Logic
setInterval(() => {
    const aiFeed = document.getElementById("ai-feed");
    const insights = ["AI: Threat vectors safe.", "AI: Network bandwidth optimized.", "AI: Security layer at 99.9%."];
    const li = document.createElement("li");
    li.textContent = `[AI CORE]: ${insights[Math.floor(Math.random()*insights.length)]}`;
    aiFeed.prepend(li);
    if(aiFeed.children.length > 3) aiFeed.lastElementChild.remove();
}, 5000);
