// Data
const menuData = {
    'show-all': {
        title: 'الكل',
        desc: 'كل المنتجات',
        products: [] // Will be populated after all data is loaded
    },
    'winter-drinks': {
        title: 'مشروبات شتويه',
        desc: 'دفء واستمتاع في فصل الشتاء',
        products: [
            { name: 'هوت شوكليت كلاسيك', desc: 'دفء وشوكولاتة غنية', badge: '' },
            { name: 'هوت شوكليت مارشيملو', desc: 'شوكولاتة مع مارشيملو', badge: '' },
            { name: 'هوت شوكليت بستاشيو', desc: 'نكهة فاخرة بستاشيو', badge: 'جديد' },
            { name: 'هوت شوكليت وايت', desc: 'نعومة الشوكولاتة البيضاء', badge: '' },
            { name: 'هوت شوكليت بندق', desc: 'حنة بندق مميزة', badge: '' },
            { name: 'سحلب كلاسيك', desc: 'طعم زمان أصيل', badge: '' },
            { name: 'سحلب مكسرات', desc: 'سحلب بلمسة مكسرات', badge: '' },
        ]
    },
    'most-requested': {
        title: 'الأكثر طلباً',
        desc: 'أكثر الأصناف طلباً من عملائنا',
        products: [
            { name: 'اسموزي تروبيكال', desc: 'كوب مليان حلاوة وانتعاش فراوله مع المانجا مع الموز و العسل مع مزيج من المياه الفواره', badge: 'الأكثر طلباً' },
            { name: 'ايس لاتيه كريم بروليه', desc: 'ايس كريم بروليه نكهة جديدة تعيشها', badge: 'الأكثر طلباً' },
            { name: 'كرواسون ميكس لانشون', desc: 'كرواسون ميكس لانشون طازج (لانشون - جبنه رومي - جبنه فلمانك)', badge: 'الأكثر طلباً' },
            { name: 'عصير مانجا', desc: 'عصير مانجا فريش طعم صيفي طبيعي ومنعش', badge: 'الأكثر طلباً' },
            { name: 'عصير افوكادو', desc: 'عصير أفوكادو انتعاش صحي لكل يوم', badge: 'الأكثر طلباً' },
            { name: 'لاتيه', desc: 'طعم يملأ يومك سعادة (بحبوب البن المخصصه بأنيسون)', badge: 'الأكثر طلباً' },
            { name: 'ميلك كندر', desc: 'طعم ناعم وحلاوة كندر في مشروب', badge: 'الأكثر طلباً' },
            { name: 'ميلك روشيه', desc: 'ميلك شيك روشيه شوكولاتة فاخرة مع لمسة كريمية', badge: 'الأكثر طلباً' },
            { name: 'فرابيه كراميل', desc: 'فرابيه كراميل قهوة مثلجة بحلاوة الكراميل', badge: 'الأكثر طلباً' },
            { name: 'كرواسون ميكس تشيز', desc: 'كرواسون ميكس تشيز طازج (جبنه رومي - جبنه شيدر - جبنه فلمانك - جبنه بيضه)', badge: 'الأكثر طلباً' },
            { name: 'كابتشينو', desc: 'استمتع باللحظة مع كابتشينو من أنيسون (بحبوب البن المخصصه بأنيسون)', badge: 'الأكثر طلباً' },
            { name: 'اسبريسو', desc: 'الاسبريسو طاقه فوريه نكهة مركزه مميزه بحبوب البن المخصصه بأنيسون', badge: 'الأكثر طلباً' },
            { name: 'ميكاتو', desc: 'مذاق يرفع مزاجك فوراً بحبوب البن المخصصه بأنيسون', badge: 'الأكثر طلباً' },
            { name: 'قهوه تركي S - D', desc: 'طعم غني و قوي من اهم و اميز قهوة تركي بطعم لا يُنسى تراث أنيسون', badge: 'الأكثر طلباً' },
        ]
    },
    'hot-drinks': {
        title: 'المشروبات الساخنه',
        desc: 'دفء واستمتاع في كل رشفة',
        products: [
            { name: 'هوت شوكليت كلاسيك', desc: 'دفء وشوكولاتة غنية', badge: '' },
            { name: 'هوت شوكليت مارشيملو', desc: 'شوكولاتة مع مارشيملو', badge: '' },
            { name: 'هوت شوكليت بستاشيو', desc: 'نكهة فاخرة بستاشيو', badge: 'جديد' },
            { name: 'هوت شوكليت وايت', desc: 'نعومة الشوكولاتة البيضاء', badge: '' },
            { name: 'هوت شوكليت بندق', desc: 'حنة بندق مميزة', badge: '' },
            { name: 'سحلب كلاسيك', desc: 'طعم زمان أصيل', badge: '' },
            { name: 'سحلب مكسرات', desc: 'سحلب بلمسة مكسرات', badge: '' },
        ]
    },
    'iced-coffee': {
        title: 'قهوة مثلجه',
        desc: 'انتعاش مع نكهة قهوة',
        products: [
            { name: 'ايس لاتيه', desc: 'برودة وكريمة', badge: '' },
            { name: 'ايس اسبانش لاتيه', desc: 'حلاوة مكثفة', badge: '' },
            { name: 'ايس لاتيه كريم بروليه', desc: 'نكهة جديدة', badge: 'الأكثر طلباً' },
            { name: 'ايس موكا', desc: 'شوكولاتة وقهوة', badge: '' },
            { name: 'ايس كراميل ميكاتو', desc: 'كراميل مع فوم', badge: '' },
            { name: 'ايس امريكانو', desc: 'قهوة قوية مثلجة', badge: '' },
            { name: 'ايس بور', desc: 'قهوة مع طاقة', badge: '' },
            { name: 'فرابيه كراميل', desc: 'قهوة مثلجة بحلاوة الكراميل', badge: 'الأكثر طلباً' },
        ]
    },
    'fresh-juices': {
        title: 'عصائر فريش',
        desc: 'عصائر فريش طبيعية 100%',
        products: [
            { name: 'عصير مانجا', desc: 'طعم صيفي منعش', badge: 'الأكثر طلباً' },
            { name: 'عصير برتقال', desc: 'انتعاش طبيعي', badge: '' },
            { name: 'عصير جوافه', desc: 'كوب مليان صحة', badge: '' },
            { name: 'عصير موز بلبن', desc: 'مشروب مشبع', badge: '' },
            { name: 'عصير كيوي', desc: 'نكهة مميزة', badge: '' },
            { name: 'عصير ليمون', desc: 'انتعاش طبيعي', badge: '' },
            { name: 'عصير افوكادو', desc: 'انتعاش صحي', badge: 'الأكثر طلباً' },
            { name: 'فيري باشون', desc: 'مغامرة استوائية', badge: '' },
        ]
    },
    'milkshake': {
        title: 'ميلك شيك',
        desc: 'مزيجات كريمية لذيذة',
        products: [
            { name: 'ميلك موز بالمكسرات', desc: 'طاقة طبيعية', badge: '' },
            { name: 'ميلك بستاشيو', desc: 'مزاج ملكي', badge: '' },
            { name: 'ميلك لوتس', desc: 'حكاية لوتس', badge: '' },
            { name: 'ميلك كندر', desc: 'طعم ناعم كندر', badge: 'الأكثر طلباً' },
            { name: 'ميلك روشيه', desc: 'شوكولاتة فاخرة', badge: 'الأكثر طلباً' },
            { name: 'ميلك كيوي', desc: 'انتعاش استوائي', badge: '' },
            { name: 'ميلك شوكولاته', desc: 'متعة باردة', badge: '' },
            { name: 'ميلك فانيليا', desc: 'طعم كلاسيكي', badge: '' },
        ]
    },
    'smoothies': {
        title: 'اسموزي',
        desc: 'تجارب مشروبات صحية',
        products: [
            { name: 'اسموزي تروبيكال', desc: 'حلاوة وانتعاش', badge: 'الأكثر طلباً' },
            { name: 'اسموزي مانجا', desc: 'طعم ما يتفوتش', badge: '' },
            { name: 'اسموزي برتقال', desc: 'منعش وطبيعي', badge: '' },
            { name: 'اسموزي جوافه', desc: 'مزاجك أحلى', badge: '' },
            { name: 'اسموزي كيوي', desc: 'نكهة مختلفة', badge: '' },
            { name: 'اسموزي كيوي مانجا', desc: 'نكهة مزدوجة', badge: '' },
            { name: 'اسموزي فيري باشون', desc: 'برد وبهجة', badge: '' },
            { name: 'اسموزي بلوبيري', desc: 'طعم توت طبيعي', badge: '' },
        ]
    },
    'iced-tea': {
        title: 'ايس تي',
        desc: 'نكهات فواكه مع شاي',
        products: [
            { name: 'ايس تي ليمون', desc: 'نعناع وليمون', badge: '' },
            { name: 'ايس تي فراوله', desc: 'طعم طبيعي', badge: '' },
            { name: 'ايس تي باشون', desc: 'انتعاش استوائي', badge: '' },
            { name: 'ايس تي خوخ', desc: 'مغامرة فاكهية', badge: '' },
            { name: 'ايس تي راسبيري', desc: 'نكهة فاكهية', badge: '' },
        ]
    },
    'soft-drinks': {
        title: 'صودا',
        desc: 'غازية وموهيتو',
        products: [
            { name: 'شيري كولا', desc: 'طعم الكرز', badge: '' },
            { name: 'موهيتو ريدبول', desc: 'طاقة وانتعاش', badge: '' },
            { name: 'موهيتو كلاسيك', desc: 'نعناع طبيعي', badge: '' },
            { name: 'موهيتو بلوهواي', desc: 'نكهة طبيعية', badge: '' },
            { name: 'موهيتو ايطاليان', desc: 'نعناع إيطالي', badge: '' },
        ]
    },
    'bakery': {
        title: 'مخبوزات',
        desc: 'مخبوزات يومية فاخرة',
        products: [
            { name: 'كرواسون ساده', desc: 'طازج ولذيذ', badge: '' },
            { name: 'كرواسون ميكس تشيز', desc: 'أنواع أجبان', badge: 'الأكثر طلباً' },
            { name: 'كرواسون ميكس لانشون', desc: 'لانشون وأجبان', badge: 'الأكثر طلباً' },
            { name: 'باتيه سوسيس', desc: 'طازج ولذيذ', badge: '' },
        ]
    }
};

let allProducts = [];
let currentCategory = null;
let expandedCategory = null;

// Initialize
function init() {
    // Populate show-all category with all products first
    populateShowAll();
    renderCategories();
    flattenProducts();
}

// Populate show-all with all products
function populateShowAll() {
    let allProds = [];
    Object.keys(menuData).forEach(key => {
        if (key !== 'show-all' && menuData[key].products) {
            menuData[key].products.forEach(prod => {
                allProds.push(prod);
            });
        }
    });
    menuData['show-all'].products = allProds;
}

// Render categories
function renderCategories() {
    const nav = document.getElementById('categories-nav');
    nav.innerHTML = '';

    Object.keys(menuData).forEach(key => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn';
        btn.textContent = menuData[key].title;
        btn.onclick = () => selectCategory(key);
        btn.dataset.category = key;
        nav.appendChild(btn);
    });
}

// Flatten all products for search
function flattenProducts() {
    allProducts = [];
    const seen = new Set();
    Object.keys(menuData).forEach(key => {
        if (key !== 'show-all') {
            menuData[key].products.forEach(prod => {
                const prodKey = prod.name;
                if (!seen.has(prodKey)) {
                    seen.add(prodKey);
                    allProducts.push({ ...prod, category: menuData[key].title });
                }
            });
        }
    });
}

// Select category - toggle on click
function selectCategory(key) {
    // If same category clicked, toggle it off
    if (expandedCategory === key) {
        expandedCategory = null;
        hideProducts();
        document.querySelectorAll('.cat-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        return;
    }

    expandedCategory = key;
    const data = menuData[key];

    // Remove existing products from DOM if any
    const existingProducts = document.getElementById('products-container');
    if (existingProducts) {
        existingProducts.remove();
    }

    // Update active button
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`[data-category="${key}"]`);
    activeBtn.classList.add('active');

    // Clear search
    document.getElementById('search').value = '';

    // Insert products right after the clicked category button
    displayProductsInline(data.products, activeBtn);
}

// Hide products
function hideProducts() {
    const existingProducts = document.getElementById('products-container');
    if (existingProducts) {
        existingProducts.remove();
    }
}

// Display products inline
function displayProductsInline(products, afterElement) {
    // Remove existing products container if any
    const existing = document.getElementById('products-container');
    if (existing) {
        existing.remove();
    }

    // Create products container
    const container = document.createElement('div');
    container.id = 'products-container';
    container.className = 'products-container';

    if (products.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><p>لم يتم العثور على نتائج</p></div>';
    } else {
        container.innerHTML = '<div class="products-grid-inline">' + products.map(prod => `
                    <div class="product-card">
                        <div class="product-image">
                            <img src="https://via.placeholder.com/200x140?text=${encodeURIComponent(prod.name)}" alt="${prod.name}">
                        </div>
                        <div class="product-info">
                            ${prod.badge ? `<div class="product-badge">${prod.badge}</div>` : ''}
                            <div class="product-name">${prod.name}</div>
                            <div class="product-desc">${prod.desc}</div>
                        </div>
                    </div>
                `).join('') + '</div>';
    }

    // Insert after the clicked button
    afterElement.parentNode.insertBefore(container, afterElement.nextSibling);
}

// Search functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize first
    init();

    document.getElementById('search').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query === '') {
            // Show current expanded category
            if (expandedCategory) {
                const data = menuData[expandedCategory];
                const activeBtn = document.querySelector(`[data-category="${expandedCategory}"]`);
                displayProductsInline(data.products, activeBtn);
            } else {
                // If no category selected, clear products display
                const existing = document.getElementById('products-container');
                if (existing) {
                    existing.remove();
                }
            }
        } else {
            // Filter all products across all categories - search doesn't depend on selected category
            const filtered = allProducts.filter(prod =>
                prod.name.toLowerCase().includes(query) || prod.desc.toLowerCase().includes(query)
            );

            // Display search results right below the search box
            const searchBox = document.querySelector('.search-box');
            displayProductsInline(filtered, searchBox);
        }
    });
});
