const idioms = [
    {
        id: 1, flag: "🇨🇳", original: "入乡随俗", 
        engFigurative: "When in Rome, do as the Romans do",
        finFigurative: "Maassa maan tavalla",
        literal: "Enter a village and follow its customs",
        image: "images/ru-xiang-sui-su.jpeg",
        analysis: "While the English 'Rome' suggests a temporary tourist adaptation, the Chinese 'entering a village' implies a deeper, almost ritualistic integration into the local social fabric. The Finnish version is similarly stoic, treating local ways as an objective standard rather than just a suggestion."
    },
    {
        id: 2, flag: "🇨🇳", original: "小菜一碟", 
        engFigurative: "A piece of cake",
        finFigurative: "Helppo nakki",
        literal: "A small dish of vegetables",
        image: "images/xiao-cai-yi-die.jpeg",
        analysis: "The Chinese idiom uses culinary humility—a 'small vegetable side' requires no skill compared to a banquet. The Finnish 'easy sausage' shares this pragmatic, non-sweet simplicity, whereas the English 'cake' feels more celebratory."
    },
    {
        id: 3, flag: "🇨🇳", original: "小题大做", 
        engFigurative: "Make a mountain out of a molehill",
        finFigurative: "Tehdä kärpäsestä härkänen",
        literal: "Make a big production out of a small topic",
        image: "images/xiao-ti-da-zuo.jpeg",
        analysis: "The Chinese idiom focuses on the 'production' or ceremony applied to a trivial matter. The Finnish 'bull from a fly' is more visually aggressive, while the English 'molehill' is purely about size. All three capture the absurdity of overreaction."
    },
    {
        id: 4, flag: "🇨🇳", original: "格格不入", 
        engFigurative: "A fish out of water",
        finFigurative: "Kuin kala kuivalla maalla",
        literal: "Not fitting into the grid",
        image: "images/ge-ge-bu-ru.jpeg",
        analysis: "The 'grid' refers to traditional lattice structures or social hierarchies. To be 'ge-ge-bu-ru' is to be structurally incompatible. Both English and Finnish use the 'fish' metaphor, which is about environment, whereas the Chinese version is about structural fit."
    },
    {
        id: 5, flag: "🇨🇳", original: "说漏嘴", 
        engFigurative: "Let the cat out of the bag",
        finFigurative: "Päästää sammakko suustaan",
        literal: "Let it slip/leak from your mouth",
        image: "images/shuo-lou-zui.jpeg",
        analysis: "The Chinese idiom is visceral; the secret is a liquid that physically escapes. The Finnish 'frog' and English 'cat' are both creatures, but the frog's sudden leap captures the jarring, awkward nature of a verbal slip-up better than the cat's slow reveal."
    },
    {
        id: 6, flag: "🇨🇳", original: "让人抓狂", 
        engFigurative: "Get on someone’s nerves",
        finFigurative: "Ottaa päähän",
        literal: "Make someone scratch/go crazy",
        image: "images/re-ren-xin-fan-rang-ren-zhua-kuang.jpeg",
        analysis: "The Chinese 'zhua kuang' involves physical scratching, representing a loss of physical composure. The Finnish 'hit into the head' is a direct physical impact, while the English 'nerves' is more internal and biological."
    },
    {
        id: 7, flag: "🇨🇳", original: "心花怒放", 
        engFigurative: "Over the moon",
        finFigurative: "Olla seitsemännessä taivaassa",
        literal: "Flowers bursting into bloom in the heart",
        image: "images/xin-hua-nu-fang.jpeg",
        analysis: "The Chinese imagery is organic and internal—joy as a blooming plant. The English 'moon' and Finnish 'seventh heaven' are both celestial/spatial, suggesting elevation, whereas the Chinese version suggests expansion and vitality."
    },
    {
        id: 8, flag: "🇨🇳", original: "一石二鸟", 
        engFigurative: "Kill two birds with one stone",
        finFigurative: "Lyödä kaksi kärpästä yhdellä iskulla",
        literal: "One stone, two birds",
        image: "images/yi-shi-er-niao.jpeg",
        analysis: "The Chinese and English versions are nearly identical in imagery. The Finnish 'two flies with one blow' is more domestic and less violent, reflecting a different relationship with pests. All three emphasize efficiency through a single action."
    },
    {
        id: 9, flag: "🇨🇳", original: "事有蹊跷", 
        engFigurative: "Something smells fishy",
        finFigurative: "Jokin haiskahtaa",
        literal: "Something is strange/suspicious",
        image: "images/shi-you-qi-qiao.jpeg",
        analysis: "The Chinese 'qi qiao' refers to a strange twist or irregularity in a path. Both English and Finnish rely on the sense of smell ('fishy'/'smells'), while the Chinese idiom relies on a visual or structural irregularity."
    },
    {
        id: 10, flag: "🇨🇳", original: "大吃一惊", 
        engFigurative: "Knock someone’s socks off",
        finFigurative: "Lyödä ällikällä",
        literal: "Eat a big surprise",
        image: "images/da-chi-yi-jing.jpeg",
        analysis: "The Chinese 'eat a big fright' treats surprise as a consumable object. The Finnish 'strike with astonishment' and English 'knock socks off' are both physical impacts. The Chinese version is unique in its oral/consumptive metaphor."
    }
];

const grid = document.getElementById('idiom-grid');
const modal = document.getElementById('modal');

const colors = ['bg-yellow-100', 'bg-green-100', 'bg-blue-100', 'bg-pink-100', 'bg-purple-100'];

idioms.forEach((idiom, index) => {
    const colorClass = colors[index % colors.length];
    const card = document.createElement('div');
    card.className = `${colorClass} post-it flex h-64 cursor-pointer flex-col justify-between border border-gray-200 p-6 shadow-md`;
    const revealDelay = Math.min(index * 45, 360);
    card.style.transitionDelay = `${revealDelay}ms`;
    card.dataset.revealDelay = revealDelay;
    card.style.setProperty('--tilt', `${index % 2 === 0 ? '-0.4deg' : '0.4deg'}`);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Open analysis for ${idiom.original}`);

    card.innerHTML = `
        <div>
            <div class="flex justify-between items-start mb-4">
                <span class="text-2xl">${idiom.flag}</span>
                <span class="text-xs font-bold uppercase text-gray-500 bg-white/50 px-2 py-1">Chinese Idiom</span>
            </div>
            <h3 class="text-3xl font-bold mb-3 chinese-text text-gray-900 leading-tight">${idiom.original}</h3>
            <p class="handwritten text-xl text-gray-700">${idiom.literal}</p>
        </div>
        <div class="space-y-2">
            <div class="border-t border-gray-300 pt-2">
                <span class="text-xs text-gray-500 block">English</span>
                <p class="text-sm font-medium text-gray-800 italic">"${idiom.engFigurative}"</p>
            </div>
            <div class="border-t border-gray-300 pt-2">
                <span class="text-xs text-gray-500 block">Finnish</span>
                <p class="text-sm font-medium text-gray-800 italic">"${idiom.finFigurative}"</p>
            </div>
        </div>
    `;
    card.onclick = () => openModal(idiom);
    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openModal(idiom);
        }
    });
    grid.appendChild(card);
});

const revealElements = document.querySelectorAll('.reveal, .post-it');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                if (entry.target.dataset.revealDelay) {
                    window.setTimeout(() => {
                        entry.target.style.transitionDelay = '0ms';
                    }, Number(entry.target.dataset.revealDelay) + 500);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
}

function openModal(idiom) {
    document.getElementById('modal-flag').textContent = idiom.flag;
    document.getElementById('modal-lang').textContent = "Original Chinese Idiom";
    document.getElementById('modal-original').textContent = idiom.original;
    document.getElementById('modal-literal').textContent = idiom.literal;
    document.getElementById('modal-image').src = idiom.image;
    document.getElementById('modal-analysis').textContent = idiom.analysis;
    document.getElementById('modal-eng').textContent = idiom.engFigurative;
    document.getElementById('modal-fin').textContent = idiom.finFigurative;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
