const listContainer = document.getElementById('coupon-list');
const searchInput = document.getElementById('search-input');
const locationSelect = document.getElementById('location-select');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentFilters = { keyword: '', category: 'all', location: '' };

// 초기 실행
if (typeof couponData === 'undefined') {
    listContainer.innerHTML = "<p style='padding:20px'>데이터 로드 실패</p>";
} else {
    renderCoupons(couponData);
}

// 필터링 로직
function applyFilters() {
    const filtered = couponData.filter(item => {
        const matchKeyword = 
            item.name.toLowerCase().includes(currentFilters.keyword) || 
            item.desc.toLowerCase().includes(currentFilters.keyword) ||
            item.benefit.toLowerCase().includes(currentFilters.keyword);
        const matchCategory = 
            currentFilters.category === 'all' || 
            item.category === currentFilters.category;
        const matchLocation = 
            currentFilters.location === '' || 
            item.location.includes(currentFilters.location);
        return matchKeyword && matchCategory && matchLocation;
    });
    renderCoupons(filtered);
}

// 렌더링 함수 (Icons8 버전)
function renderCoupons(data) {
    listContainer.innerHTML = '';

    if (data.length === 0) {
        listContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align:center; padding:40px; color:#999;">
                <p>조건에 맞는 매장이 없습니다.</p>
            </div>`;
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'coupon-card';
        
        // 데이터에 아이콘 이름이 없으면 'shop' 사용
        const iconName = item.icon ? item.icon : 'shop';
        
        // Icons8 컬러 아이콘 URL 생성 (크기 96px)
        const iconUrl = `https://img.icons8.com/color/96/${iconName}.png`;

        // 주소 간소화
        const simpleLocation = item.location.replace('차탄쵸 미하마', '').trim();

        card.innerHTML = `
            <div class="card-icon-box">
                <img src="${iconUrl}" alt="${item.name}" 
                     onerror="this.src='https://img.icons8.com/color/96/shop.png'">
            </div>
            <div class="card-body">
                <div>
                    <span class="benefit-tag">${item.benefit}</span>
                    <h2 class="store-name">${item.name}</h2>
                    <p class="store-desc">${item.desc}</p>
                </div>
                <div class="store-info">
                    📍 ${simpleLocation}<br>
                    ⏰ ${item.hours}
                </div>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

// 이벤트 리스너 (기존과 동일)
searchInput.addEventListener('input', (e) => {
    currentFilters.keyword = e.target.value.toLowerCase();
    applyFilters();
});
locationSelect.addEventListener('change', (e) => {
    currentFilters.location = e.target.value;
    applyFilters();
});
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilters.category = e.target.getAttribute('data-category');
        applyFilters();
    });
});