const listContainer = document.getElementById('coupon-list');
const searchInput = document.getElementById('search-input');
const locationSelect = document.getElementById('location-select'); // 건물 선택 추가
const filterBtns = document.querySelectorAll('.filter-btn');

// 현재 필터 상태를 저장하는 객체
let currentFilters = {
    keyword: '',
    category: 'all',
    location: ''
};

// 1. 초기 렌더링
renderCoupons(couponData);

// 2. 통합 필터링 함수 (핵심 로직)
function applyFilters() {
    const filtered = couponData.filter(item => {
        // A. 키워드 검색 (이름, 설명, 혜택 내용)
        const matchKeyword = 
            item.name.toLowerCase().includes(currentFilters.keyword) || 
            item.desc.toLowerCase().includes(currentFilters.keyword) ||
            item.benefit.toLowerCase().includes(currentFilters.keyword);

        // B. 카테고리 필터
        const matchCategory = 
            currentFilters.category === 'all' || 
            item.category === currentFilters.category;

        // C. 건물 위치 필터 (부분 일치)
        // 예: '데포 아일랜드' 선택 시 '데포 아일랜드 빌딩 A동'도 포함됨
        const matchLocation = 
            currentFilters.location === '' || 
            item.location.includes(currentFilters.location);

        return matchKeyword && matchCategory && matchLocation;
    });

    renderCoupons(filtered);
}

// 3. 이벤트 리스너 등록

// 검색어 입력 시
searchInput.addEventListener('input', (e) => {
    currentFilters.keyword = e.target.value.toLowerCase();
    applyFilters();
});

// 건물 선택 변경 시
locationSelect.addEventListener('change', (e) => {
    currentFilters.location = e.target.value;
    applyFilters();
});

// 카테고리 버튼 클릭 시
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // 버튼 활성화 스타일 변경
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        // 필터 상태 업데이트
        currentFilters.category = e.target.getAttribute('data-category');
        applyFilters();
    });
});

// 4. 렌더링 함수 (동일하지만 HTML 구조에 맞춰 최적화)
function renderCoupons(data) {
    listContainer.innerHTML = '';

    if (data.length === 0) {
        listContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align:center; padding:20px; color:#666;">조건에 맞는 매장이 없습니다.</p>';
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'coupon-card';
        
        const imgDisplay = item.image ? 
            `<img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy">` : 
            '<div class="card-img" style="background:#ddd;"></div>';

        card.innerHTML = `
            ${imgDisplay}
            <div class="card-body">
                <div>
                    <span class="benefit-tag">${item.benefit}</span>
                    <h2 class="store-name">${item.name}</h2>
                    <p class="store-desc">${item.desc}</p>
                </div>
                <div class="store-info">
                    📍 ${item.location.replace('차탄쵸 미하마', '')} <br> ⏰ ${item.hours.split('/')[0]}... </div>
            </div>
        `;
        // 클릭 시 구글 검색 등으로 연결하려면 여기에 이벤트 추가 가능
        listContainer.appendChild(card);
    });
}