// DOM 요소 가져오기
const listContainer = document.getElementById('coupon-list');
const searchInput = document.getElementById('search-input');
const locationSelect = document.getElementById('location-select');
const filterBtns = document.querySelectorAll('.filter-btn');

// 필터 상태 변수
let currentFilters = {
    keyword: '',
    category: 'all',
    location: ''
};

// 페이지 로드 시 실행
// 만약 couponData가 정의되지 않았다면 오류 메시지 출력 (안전장치)
if (typeof couponData === 'undefined') {
    console.error("오류: data.js 파일이 로드되지 않았습니다.");
    listContainer.innerHTML = "<p>데이터를 불러올 수 없습니다. data.js 경로를 확인해주세요.</p>";
} else {
    // 정상 로드 시 초기 렌더링 실행
    renderCoupons(couponData);
}

// 필터링 함수
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

// 렌더링 함수 (아이콘 방식)
function renderCoupons(data) {
    listContainer.innerHTML = '';

    if (data.length === 0) {
        listContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align:center; padding:30px; color:#999;">
                <span class="material-symbols-outlined" style="font-size:36px; margin-bottom:10px;">search_off</span>
                <p>조건에 맞는 매장이 없습니다.</p>
            </div>`;
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'coupon-card';
        
        // 아이콘이 없으면 기본값 'store' 사용
        const iconName = item.icon ? item.icon : 'store';
        // 주소 간소화 (반복되는 지명 제거)
        const simpleLocation = item.location.replace('차탄쵸 미하마', '').trim();

        card.innerHTML = `
            <div class="card-icon-box">
                <span class="material-symbols-outlined">${iconName}</span>
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

// 이벤트 리스너 설정
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