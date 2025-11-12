// Small interactive behaviors
document.addEventListener('DOMContentLoaded', () => {
    // set year in footer
    const y = new Date().getFullYear();
    const el = document.getElementById('year');
    if (el) el.textContent = y;

    // mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    navToggle?.addEventListener('click', () => {
        const nav = document.querySelector('.nav');
        if (!nav) return;
        if (nav.style.display === 'flex') nav.style.display = 'none';
        else nav.style.display = 'flex';
    });

    // If the resume is missing, warn in console
    fetch('assets/JABBASTIN_AKASH_K.pdf', { method: 'HEAD' }).then(resp => {
        if (!resp.ok) console.warn('Resume file missing: place your real PDF at assets/JABBASTIN_AKASH_K.pdf to enable resume download.');
    }).catch(() => {/* ignore network errors when served as file:// */ });
});