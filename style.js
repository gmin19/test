/* 기본 설정 */
body {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    background-color: #f5f5f5;
    color: #333;
}

/* 상단 고정 헤더 */
.sticky-header {
    position: sticky;
    top: 0;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    z-index: 1000;
    text-align: center;
}

.notice {
    background-color: #ff4757; /* 강조색: 빨강 */
    color: white;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
}

h1 {
    margin: 10px 0;
    font-size: 18px;
}

/* 검색 및 필터 영역 */
.controls {
    padding: 15px;
    background-color: white;
}

#search-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-sizing: border-box; /* 패딩 포함 크기 계산 */
    font-size: 16px;
    margin-bottom: 10px;
}

.categories {
    display: flex;
    gap: 8px;
    overflow-x: auto; /* 모바일에서 가로 스크롤 가능하게 */
    white-space: nowrap;
    padding-bottom: 5px;
}

.filter-btn {
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 20px;
    background: white;
    cursor: pointer;
    font-size: 14px;
}

.filter-btn.active {
    background-color: #333;
    color: white;
    border-color: #333;
}

/* 쿠폰 리스트 (카드 UI) */
#coupon-list {
    padding: 15px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* 반응형 그리드 */
}

.coupon-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    transition: transform 0.2s;
}

.coupon-card:active {
    transform: scale(0.98); /* 터치 시 살짝 눌리는 효과 */
}

.card-img {
    width: 100%;
    height: 150px;
    background-color: #eee; /* 이미지 로딩 전 회색 배경 */
    object-fit: cover;
}

.card-body {
    padding: 15px;
}

.benefit-tag {
    color: #ff4757;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 5px;
    display: block;
}

.store-name {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 5px 0;
}

.store-info {
    font-size: 13px;
    color: #666;
    margin-top: 10px;
    line-height: 1.5;
}