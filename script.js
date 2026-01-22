/**
 * script.js
 * - 기능: 쿠폰 데이터 필터링 (검색어, 카테고리, 건물 위치), 화면 렌더링
 * - 특징: 이미지 대신 구글 아이콘 사용, 모바일 최적화
 */

// HTML 요소 가져오기
const listContainer = document.getElementById('coupon-list');
const searchInput = document.getElementById('search-input');
const locationSelect = document.getElementById('location-select'); // 건물 선택 박스
const filterBtns = document.querySelectorAll('.filter-btn'); // 카테고리 버튼들

// 현재 필터 상태 저장 (검색어, 카테고리, 위치)
let currentFilters = {
    keyword: '',
    category: 'all',
    location: ''
};

// 1. 초기 실행: 페이지 로드 시 모든 쿠폰 보여주기
renderCoupons(couponData);

// 2. 통합 필터링 로직
// 입력값이 바뀔 때마다 실행되어 조건에 맞는 데이터만 걸러냅니다.
function applyFilters() {
    const filtered = couponData.filter(item => {
        // A. 키워드 검색 (매장명, 설명, 혜택 내용 중 하나라도 포함되면 통과)
        const matchKeyword = 
            item.name.toLowerCase().includes(currentFilters.keyword) || 
            item.desc.toLowerCase().includes(currentFilters.keyword) ||
            item.benefit.toLowerCase().includes(currentFilters.keyword);

        // B. 카테고리 필터 ('all'이면 무조건 통과, 아니면 카테고리 일치 확인)
        const matchCategory = 
            currentFilters.category === 'all' || 
            item.category === currentFilters.category;

        // C. 건물 위치 필터 (선택 안 했으면 통과, 선택했으면 주소에 포함되는지 확인)
        // 예: '데포 아일랜드' 선택 시 -> '데포 아일랜드 빌딩 A동'도 포함됨 (부분 일치)
        const matchLocation = 
            currentFilters.location === '' || 
            item.location.includes(currentFilters.location);

        // 세 가지 조건이 모두 맞아야 결과에 포함
        return matchKeyword && matchCategory && matchLocation;
    });

    // 걸러진 데이터로 화면 다시 그리기
    renderCoupons(filtered);
}

// 3. 화면 렌더링 함수 (데이터 -> HTML 변환)
function renderCoupons(data) {
    listContainer.innerHTML = ''; // 기존 목록 초기화

    // 검색 결과가 없을 때 안내 메시지 표시
    if (data.length === 0) {
        listContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: #888;">
                <span class="material-symbols-outlined" style="font-size: 48px; color: #ccc;">search_off</span>
                <p>조건에 맞는 매장이 없습니다.<br>다른 검색어나 건물을 선택해보세요.</p>
            </div>
        `;
        return;
    }

    // 데이터 개수만큼 카드 생성
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'coupon-card';
        
        // 아이콘 설정 (데이터에 아이콘이 없으면 기본값 'store' 사용)
        const iconName = item.icon ? item.icon : 'store';

        // 주소 간소화 (카드 공간이 좁으므로 '차탄쵸 미하마' 같은 반복되는 주소 제거)
        const displayLocation = item.location.replace('차탄쵸 미하마', '').trim();

        // 카드 HTML 구성
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
                    📍 ${displayLocation} <br>
                    ⏰ ${item.hours}
                </div>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

// 4. 이벤트 리스너 등록 (사용자 동작 감지)

// A. 검색어 입력 시
searchInput.addEventListener('input', (e) => {
    currentFilters.keyword = e.target.value.toLowerCase();
    applyFilters();
});

// B. 건물 위치 선택 변경 시
locationSelect.addEventListener('change', (e) => {
    currentFilters.location = e.target.value;
    applyFilters();
});

// C. 카테고리 버튼 클릭 시
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // 모든 버튼에서 'active' 클래스 제거 (검은색 배경 해제)
        filterBtns.forEach(b => b.classList.remove('active'));
        // 클릭한 버튼에만 'active' 클래스 추가
        e.target.classList.add('active');

        // 선택된 카테고리로 필터 상태 업데이트
        currentFilters.category = e.target.getAttribute('data-category');
        applyFilters();
    });
});