let bgImage = document.getElementById("main-bg");
let bgSelector = document.getElementById("bg-selector");

let savedBg = localStorage.getItem("userBackground");

if (savedBg !== null) {
    bgImage.src = savedBg;
    bgSelector.value = savedBg;
}

bgSelector.addEventListener("change", function () {
    let newImage = bgSelector.value;

    bgImage.src = newImage;

    localStorage.setItem("userBackground", newImage);
});

// ===== THEME SWITCHER =====
// الثيمات المتاحة
const themes = {
    'classic': {
        '--color-almond': '#D6BD98',
        '--color-matchabrew': '#677D6A',
        '--color-forestroast': '#399775',
        '--color-eclipse': '#1A3636',
        '--color-timberbreeze': '#4C2B12',
        '--color-forestfloor': '#7F5235',
        '--color-earthydrift': '#BB8954',
        '--color-fernwhisper': '#F5F5D3',
        '--color-canopygreen': '#798262',
        '--color-deepwood': '#33352C',
        '--color-green': '#40534C'
    },
    'midnight': {
        '--color-almond': '#F0E6D3',
        '--color-matchabrew': '#C4956A',
        '--color-forestroast': '#D4622A',
        '--color-eclipse': '#3D2B1F',
        '--color-timberbreeze': '#1C3F5E',
        '--color-forestfloor': '#A84B2F',
        '--color-earthydrift': '#E8C27A',
        '--color-fernwhisper': '#FDF6EC',
        '--color-canopygreen': '#8B5E3C',
        '--color-deepwood': '#2C1A0E',
        '--color-green': '#7A4F2E'
    }
};

// تطبيق الثيم على الصفحة
function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;
    const root = document.documentElement;
    Object.entries(theme).forEach(([variable, value]) => {
        root.style.setProperty(variable, value);
    });
}

// عند تحميل الصفحة: تحقق من الثيم المحفوظ وطبقه
const savedTheme = localStorage.getItem('userTheme') || 'classic';
applyTheme(savedTheme);

// بعد تحميل الـ DOM: اضبط قيمة الـ select وأضف الـ event listener
document.addEventListener('DOMContentLoaded', function () {
    const themeSelector = document.getElementById('theme-selector');
    if (!themeSelector) return;

    // اضبط قيمة الـ select على الثيم المحفوظ
    themeSelector.value = savedTheme;

    // استمع لتغيير الاختيار
    themeSelector.addEventListener('change', function () {
        const selectedTheme = themeSelector.value;
        applyTheme(selectedTheme);
        localStorage.setItem('userTheme', selectedTheme);
    });
});
