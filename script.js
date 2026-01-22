const listContainer = document.getElementById('coupon-list');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');

// 1. 초기 화면 렌더링 (모든 데이터 보여주기)
renderCoupons(couponData);

// 2. 쿠폰 카드를 만드는 함수 (DOM 조작)
function renderCoupons(data) {
    listContainer.innerHTML = ''; // 기존 목록 비우기

    if (data.length === 0) {
        listContainer.innerHTML = '<p style="text-align:center; padding:20px;">검색 결과가 없습니다.</p>';
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'coupon-card';
        
        // 이미지 경로가 없으면 기본 회색 박스로 대체하는 로직 포함
        const imgDisplay = item.image ? `<img src="${item.image}" alt="${item.name}" class="card-img">` : '<div class="card-img" style="background:#ddd;"></div>';

        card.innerHTML = `
            ${imgDisplay}
            <div class="card-body">
                <span class="benefit-tag">${item.benefit}</span>
                <h2 class="store-name">${item.name}</h2>
                <p class="store-desc">${item.desc}</p>
                <div class="store-info">
                    📍 ${item.location}<br>
                    ⏰ ${item.hours}
                </div>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

// 3. 카테고리 필터링 기능
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // 버튼 스타일 활성화
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const category = e.target.getAttribute('data-category');
        
        if (category === 'all') {
            renderCoupons(couponData);
        } else {
            const filtered = couponData.filter(item => item.category === category);
            renderCoupons(filtered);
        }
    });
});

// 4. 검색 기능 (실시간 검색)
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = couponData.filter(item => 
        item.name.toLowerCase().includes(keyword) || 
        item.desc.toLowerCase().includes(keyword) ||
        item.benefit.toLowerCase().includes(keyword)
    );
    renderCoupons(filtered);
});