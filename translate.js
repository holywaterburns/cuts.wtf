document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    const map = {
        'フェイ': 'godololo',
        'クリス': 'avery u_u',
        'ミゲル': 'miguel xx',
        'クリークXO': 'creek xo',
        '副木': 'splint',
        'ジョシュ': 'terq',
        'スラム': 'slam T_T',
        '世論調査': 'poll',
        'MUSIC: Propblood & Jayden & Splint': 'MUSIC: Propblood & Jayden & Splint',
    };

    function createenglishnameelement(name) {
        const el = document.createElement('div');
        el.textContent = name;
        el.classList.add('english-name-popup');
        document.body.appendChild(el);
        el.getBoundingClientRect();
        el.style.bottom = "20px";
        return el;
    }

    function handlemouseover(event) {
        const target = event.target;
        if (target.tagName !== 'SPAN' || !target.classList.contains('japanese-name')) return;
        const japaneseName = target.textContent.trim();
        const englishName = map[japaneseName];
        if (!englishName) return;

        const existingEl = document.querySelector('.english-name-popup');
        if (existingEl) {
            existingEl.remove();
        }

        const englishNameElement = createenglishnameelement(englishName);
        target.dataset.englishNameElement = englishNameElement;
    }

    function handlemouseout(event) {
        const target = event.target;
        if (target.tagName !== 'SPAN' || !target.classList.contains('japanese-name')) return;
        const englishNameElement = target.dataset.englishNameElement;
        if (englishNameElement) {
            englishNameElement.remove();
            delete target.dataset.englishNameElement;
        }
    }

    function handledocumentmouseout(event) {
        const relatedTarget = event.relatedTarget;
        const englishNameElement = document.querySelector('.english-name-popup');
        if (!englishNameElement) return;
        if (!list.contains(relatedTarget) && relatedTarget !== englishNameElement) {
            englishNameElement.remove();
        }
    }

    const list = document.querySelector('.names-list ul');

    document.querySelector('.fade-button').addEventListener('click', function() {
        const namesList = document.querySelector('.names-list ul');
        namesList.addEventListener('mouseover', handlemouseover);
        namesList.addEventListener('mouseout', handlemouseout);
        document.body.addEventListener('mouseout', handledocumentmouseout);
    });
});
