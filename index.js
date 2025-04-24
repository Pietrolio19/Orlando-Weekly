/*consente ad "activities-filter" di mantenere i suoi <li> arancioni e con testo bianco una volta cliccati
inoltre consente di visualizzare diversi menu di selezione in base all'attività scelta (EVENTS, MUSIC, etc., etc.)*/

document.addEventListener('DOMContentLoaded', () => {
    const tabs   = document.querySelectorAll('.activities-filter li');
    const panels = document.querySelectorAll('.panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {

            //reset dei tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            //reset dei panel
            panels.forEach(p => p.classList.remove('active'));

            //mostra ciò che è collegato a questo panel
            const id = tab.dataset.panel;
            document.getElementById(id).classList.add('active');
        });
    });

    //apre la prima voce
    tabs[0].click();
});

//javascript per il controllo dello slider in "digital-issue"
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const next   = document.querySelector('.arrow.next');
    const prev   = document.querySelector('.arrow.prev');
    let index = 0;

    function show(n) {
        slides[index].classList.remove('active');
        index = (n + slides.length) % slides.length;
        slides[index].classList.add('active');
    }

    next.addEventListener('click', () => show(index + 1));
    prev.addEventListener('click', () => show(index - 1));
});
