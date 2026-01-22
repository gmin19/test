/**
 * 베셀 & 레쿠 오키나와 제휴 쿠폰 데이터
 * - 전화번호 제외됨
 * - 모든 텍스트 한국어 번역 완료
 * - 이미지 경로는 실제 파일명에 맞춰 수정 필요 (현재는 예시로 작성됨)
 */

const couponData = [
    // --- 1. 호텔 레스토랑 ---
    {
        id: 1,
        category: "맛집",
        name: "힐튼 오키나와 차탄 리조트 (수리윤)",
        benefit: "뷔페 식사 시 15% 할인",
        hours: "런치 11:30~15:00 / 디너 17:30~21:30",
        location: "힐튼 오키나와 차탄 리조트 내",
        desc: "다양한 요리를 맛볼 수 있는 뷔페 레스토랑",
        image: "images/food_buffet.jpg"
    },
    {
        id: 2,
        category: "맛집",
        name: "힐튼 오키나와 차탄 리조트 (코렌테)",
        benefit: "이탈리안 레스토랑 15% 할인 (런치/디너)",
        hours: "런치 11:30~15:00 / 디너 17:30~22:30",
        location: "힐튼 오키나와 차탄 리조트 내",
        desc: "고급스러운 분위기의 정통 이탈리안 레스토랑",
        image: "images/food_italian.jpg"
    },

    // --- 2. 오키나와 요리 ---
    {
        id: 3,
        category: "맛집",
        name: "타코라이스 카페 키지무나",
        benefit: "식사 주문 시 소프트 드링크 1잔 무료 (8명까지)",
        hours: "11:00 ~ 22:00",
        location: "데포 아일랜드 빌딩 C동 2층",
        desc: "오키나와 명물 타코라이스 전문점 (오무타코 추천)",
        image: "images/food_taco.jpg"
    },
    {
        id: 4,
        category: "맛집",
        name: "카메젠 식당",
        benefit: "결제 시 5% 할인",
        hours: "11:00~14:45 / 17:00~21:00",
        location: "데포 아일랜드 빌딩 2층",
        desc: "깊은 국물 맛의 오키나와 소바 전문점",
        image: "images/food_soba.jpg"
    },
    {
        id: 5,
        category: "맛집",
        name: "츄라하마 식당",
        benefit: "특정 음료 1잔 서비스 (최대 10잔)",
        hours: "12:00~15:30 / 17:00~23:00 (월요일 휴무)",
        location: "디스토션 시사이드 빌딩 3층",
        desc: "오키나와 가정식을 즐길 수 있는 식당",
        image: "images/food_okinawa.jpg"
    },
    {
        id: 6,
        category: "맛집",
        name: "차탄 둔치 (Chatan Dunchi)",
        benefit: "오리지널 과실 식초(시크워사/히비스커스) 1잔 무료",
        hours: "17:00 ~ 23:00",
        location: "데포 아일랜드 시사이드 빌딩 3층",
        desc: "현지 분위기가 물씬 풍기는 오키나와 요리 주점",
        image: "images/food_izakaya.jpg"
    },
    {
        id: 7,
        category: "맛집",
        name: "미하마 둔치",
        benefit: "오리지널 과실 식초 1잔 서비스",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 빌딩 2층",
        desc: "다양한 안주와 술이 있는 이자카야",
        image: "images/food_izakaya.jpg"
    },
    {
        id: 8,
        category: "맛집",
        name: "라이브 주점 카나산야",
        benefit: "우미부도(바다포도) 소접시 1개 서비스",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 빌딩 3층",
        desc: "오키나와 라이브 공연을 보며 즐기는 술자리",
        image: "images/food_live.jpg"
    },
    {
        id: 9,
        category: "맛집",
        name: "포크 타마고 오니기리 (Funka Delica)",
        benefit: "소프트 드링크 1잔 서비스",
        hours: "16:00 ~ 22:00",
        location: "차탄쵸 미하마 34-2 1층",
        desc: "간편하고 든든한 스팸 계란 주먹밥",
        image: "images/food_onigiri.jpg"
    },
    {
        id: 10,
        category: "맛집",
        name: "조개 육수 오키나와 소바 키세키",
        benefit: "결제 시 10% 할인 (주류 제외)",
        hours: "11:00 ~ 21:00",
        location: "디스토션 시사이드 빌딩 1층",
        desc: "시원한 조개 육수가 일품인 소바집",
        image: "images/food_soba2.jpg"
    },

    // --- 3. 스테이크 ---
    {
        id: 11,
        category: "맛집",
        name: "점보 스테이크 한스 (미하마점)",
        benefit: "결제 금액 10% 할인",
        hours: "11:00 ~ 23:00",
        location: "데포 아일랜드 빌딩 A동 2층",
        desc: "푸짐한 양의 점보 스테이크",
        image: "images/food_steak.jpg"
    },
    {
        id: 12,
        category: "맛집",
        name: "스테이크 하우스 BB",
        benefit: "음료 1잔 무료 또는 스테이크 토핑 1개 서비스",
        hours: "11:30 ~ 21:00",
        location: "데포 아일랜드 빌딩 A동 2층",
        desc: "가성비 좋은 스테이크 하우스",
        image: "images/food_steak.jpg"
    },
    {
        id: 13,
        category: "맛집",
        name: "블루 오션 스테이크",
        benefit: "웰컴 드링크 1잔 서비스",
        hours: "17:00 ~ 23:00",
        location: "차탄쵸 미하마 51-2 2층",
        desc: "바다를 보며 즐기는 고급 스테이크",
        image: "images/food_steak_ocean.jpg"
    },
    {
        id: 14,
        category: "맛집",
        name: "스테이크 하우스 88 (차탄점)",
        benefit: "드링크바 1인 무료",
        hours: "11:00 ~ 23:00",
        location: "데포 아일랜드 A동 2층",
        desc: "오키나와를 대표하는 전통의 스테이크 체인",
        image: "images/food_steak88.jpg"
    },
    {
        id: 15,
        category: "맛집",
        name: "씨사이드 스테이크 비피스 (BEEFY'S)",
        benefit: "결제 금액 10% 할인",
        hours: "11:30~15:00 / 17:00~22:00",
        location: "데포 아일랜드 시사이드 빌딩 4층",
        desc: "전망 좋은 씨사이드 스테이크 레스토랑",
        image: "images/food_steak.jpg"
    },
    {
        id: 16,
        category: "맛집",
        name: "점보 스테이크 한스 (데포 센트럴점)",
        benefit: "10% 할인 또는 음료 1잔 서비스",
        hours: "11:00 ~ 23:00",
        location: "데포 센트럴 빌딩 2층",
        desc: "새로 오픈한 센트럴 빌딩의 한스 스테이크",
        image: "images/food_steak.jpg"
    },

    // --- 4. 햄버거 ---
    {
        id: 17,
        category: "맛집",
        name: "차탄 버거 베이스 아타비스",
        benefit: "햄버거 주문 시 토핑 1개 무료",
        hours: "11:00 ~ 21:00 (중간 브레이크 타임 확인 필요)",
        location: "데포 아일랜드 시사이드 빌딩 1층",
        desc: "육즙 가득한 수제 버거 전문점",
        image: "images/food_burger.jpg"
    },
    {
        id: 18,
        category: "맛집",
        name: "제타 버거 마켓",
        benefit: "아메리카노(HOT/ICE) 1잔 서비스",
        hours: "11:00 ~ 22:00",
        location: "디스토션 패션 빌딩 2층",
        desc: "빈티지한 분위기의 햄버거 가게",
        image: "images/food_burger.jpg"
    },
    {
        id: 19,
        category: "맛집",
        name: "BRUAL (브루알)",
        benefit: "결제 금액 10% 할인",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 시사이드 빌딩 2층",
        desc: "수제 버거와 맥주를 즐길 수 있는 곳",
        image: "images/food_burger.jpg"
    },
    {
        id: 20,
        category: "맛집",
        name: "너티 바이 네이처 (Naughty By Nature)",
        benefit: "소프트 드링크 1잔 무료",
        hours: "11:00 ~ 19:30 (금토 ~21:00)",
        location: "차탄쵸 미하마 51-3 1층",
        desc: "건강하고 신선한 재료의 햄버거",
        image: "images/food_burger.jpg"
    },

    // --- 5. 카레 ---
    {
        id: 21,
        category: "맛집",
        name: "발리우드 드림스",
        benefit: "결제 금액 10% 할인",
        hours: "11:00~14:30 / 17:00~21:00",
        location: "데포 아일랜드 빌딩 A동 2층",
        desc: "현지 셰프가 만드는 정통 인도 커리",
        image: "images/food_curry.jpg"
    },
    {
        id: 22,
        category: "맛집",
        name: "호라이즌 커리 웍스",
        benefit: "결제 금액 10% 할인",
        hours: "11:00 ~ 22:00",
        location: "디스토션 시사이드 빌딩 2층",
        desc: "바다를 보며 즐기는 일본식 카레",
        image: "images/food_curry.jpg"
    },

    // --- 6. 카페 ---
    {
        id: 23,
        category: "카페",
        name: "Vongo & Anchor (봉고 앤 앵커)",
        benefit: "결제 금액 10% 할인",
        hours: "08:00 ~ 22:00",
        location: "베셀 호텔 캄파나 별관 1층",
        desc: "직접 로스팅한 커피와 브런치가 맛있는 카페",
        image: "images/cafe_vongo.jpg"
    },
    {
        id: 24,
        category: "카페",
        name: "씨사이드 카페 하논 (Hanon)",
        benefit: "음식 주문 시 아이스크림 서비스",
        hours: "09:00~17:00 (주말 ~19:00)",
        location: "오크 패션 빌딩 2층",
        desc: "유명한 팬케이크 전문 카페",
        image: "images/cafe_hanon.jpg"
    },
    {
        id: 25,
        category: "카페",
        name: "클라이맥스 커피",
        benefit: "10% 할인 (현금 결제만 가능)",
        hours: "09:30 ~ 22:00",
        location: "데포 아일랜드 시사이드 빌딩 1층",
        desc: "다양한 토핑의 머핀과 커피",
        image: "images/cafe_coffee.jpg"
    },
    {
        id: 26,
        category: "카페",
        name: "지바고 커피 로스터리 (ZHYVAGO)",
        benefit: "10% 할인 (레쿠 호텔 투숙객 한정)",
        hours: "07:00 ~ 22:00",
        location: "레쿠 오키나와 프리미어동 1층",
        desc: "힙한 분위기의 로스터리 카페",
        image: "images/cafe_zhyvago.jpg"
    },
    {
        id: 27,
        category: "카페",
        name: "오니얀마 커피 (ONIYANMA)",
        benefit: "음료 주문 시 아이스크림 서비스",
        hours: "09:30 ~ 19:00",
        location: "디스토션 패션 빌딩 2층",
        desc: "깔끔한 맛의 스페셜티 커피",
        image: "images/cafe_coffee.jpg"
    },

    // --- 7. 디저트 & 스위츠 ---
    {
        id: 28,
        category: "카페",
        name: "블루씰 아이스크림",
        benefit: "싱글 아이스크림 구매 시 주니어 스쿱 추가 증정",
        hours: "11:00 ~ 21:00",
        location: "데포 아일랜드 시사이드 빌딩 2층",
        desc: "오키나와 대표 아이스크림 브랜드",
        image: "images/dessert_blueseal.jpg"
    },
    {
        id: 29,
        category: "쇼핑",
        name: "바움쿠헨 공방 산토미",
        benefit: "1,000엔 이상 구매 시 5% 할인",
        hours: "10:00 ~ 18:00",
        location: "오크 패션 빌딩 1층",
        desc: "부드러운 수제 바움쿠헨",
        image: "images/dessert_cake.jpg"
    },
    {
        id: 30,
        category: "쇼핑",
        name: "카메 안다기 (KAME ANDAGI)",
        benefit: "1,000엔 이상 구매 시 갓 튀긴 사타안다기 1개 증정",
        hours: "11:00 ~ 20:00",
        location: "레쿠 오키나와 메인동 1층",
        desc: "다양한 토핑을 얹은 오키나와 도넛",
        image: "images/dessert_andagi.jpg"
    },
    {
        id: 31,
        category: "카페",
        name: "감미처 가마쿠라 (와라비모찌)",
        benefit: "기념품용 와라비모찌 구매 시 꿀(미츠) 서비스",
        hours: "10:30 ~ 20:00",
        location: "데포 아일랜드 빌딩 A동 1층",
        desc: "부드럽고 쫄깃한 일본 전통 디저트",
        image: "images/dessert_mochi.jpg"
    },
    {
        id: 32,
        category: "카페",
        name: "카페 앤 프루츠 분분 (BUNBUN)",
        benefit: "식사 주문 시 소프트 드링크 1잔 무료",
        hours: "08:00 ~ 20:00 (금토일 ~21:00)",
        location: "플라자 F 1층",
        desc: "신선한 과일 샌드위치 전문점",
        image: "images/dessert_fruit.jpg"
    },

    // --- 8. 일식 (샤브샤브, 야키니쿠, 해산물) ---
    {
        id: 33,
        category: "맛집",
        name: "아구의 은신처 (아구노 카쿠레가)",
        benefit: "결제 금액 10% 할인",
        hours: "17:00 ~ 22:30",
        location: "차탄쵸 미하마 2-2-2",
        desc: "오키나와 흑돼지(아구) 샤브샤브 전문점",
        image: "images/food_shabu.jpg"
    },
    {
        id: 34,
        category: "맛집",
        name: "하카타 야키니쿠 텐진",
        benefit: "드링크 1잔 서비스 (주류 포함)",
        hours: "런치 11:30~15:00 / 디너 17:00~23:00",
        location: "아메리칸 데포 C동 2층",
        desc: "규슈 스타일의 야키니쿠",
        image: "images/food_yakiniku.jpg"
    },
    {
        id: 35,
        category: "맛집",
        name: "야키니쿠 복우 (Fukugyu)",
        benefit: "1팀당 4명까지 지정 음료 서비스",
        hours: "11:00 ~ 23:00",
        location: "데포 아일랜드 빌딩 E동 2층",
        desc: "품질 좋은 와규 야키니쿠",
        image: "images/food_yakiniku.jpg"
    },
    {
        id: 36,
        category: "맛집",
        name: "증기 해산물 (Steam Seafood)",
        benefit: "웰컴 드링크 1잔 서비스",
        hours: "11:00 ~ 23:00",
        location: "차탄쵸 미하마 51-2 3층",
        desc: "재료 본연의 맛을 살린 해산물 찜 요리",
        image: "images/food_seafood.jpg"
    },
    {
        id: 37,
        category: "맛집",
        name: "규부시 (GYUBUSHI)",
        benefit: "식사 대금 10% 할인",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 빌딩 6층",
        desc: "고급스러운 소고기 요리점",
        image: "images/food_beef.jpg"
    },
    {
        id: 38,
        category: "맛집",
        name: "야키니쿠 리키오 (RIKIO)",
        benefit: "음료 1잔 또는 디저트 서비스",
        hours: "17:00 ~ 23:00 (수요일 휴무)",
        location: "디스토션 패션 빌딩 2층",
        desc: "트렌디한 분위기의 야키니쿠",
        image: "images/food_yakiniku.jpg"
    },

    // --- 9. 양식 & 세계요리 ---
    {
        id: 39,
        category: "맛집",
        name: "선라이즈 (SUNRISE)",
        benefit: "결제 금액 15% 할인",
        hours: "07:30 ~ 22:00 (시간대별 상이)",
        location: "시사이드 스퀘어 1층",
        desc: "치즈 스테이크와 와규 햄버거",
        image: "images/food_western.jpg"
    },
    {
        id: 40,
        category: "맛집",
        name: "함바그 스테이크 마스오",
        benefit: "룸 키 제시 시 10% 할인",
        hours: "11:30 ~ 21:00",
        location: "앳 차탄 1층",
        desc: "육즙이 풍부한 함박 스테이크",
        image: "images/food_hamburg.jpg"
    },
    {
        id: 41,
        category: "맛집",
        name: "솔리스 그란데 (SOLIS GRANDE)",
        benefit: "식사 주문 시 아이스크림 3종 서비스",
        hours: "런치 11:30~16:00 / 디너 17:00~22:00",
        location: "베셀 호텔 캄파나 별관 1층",
        desc: "오션뷰 이탈리안 레스토랑",
        image: "images/food_italian.jpg"
    },
    {
        id: 42,
        category: "맛집",
        name: "레드 랍스터 (Red Lobster)",
        benefit: "맥주/와인/리필음료 중 1잔 서비스",
        hours: "11:00 ~ 22:00",
        location: "차탄쵸 미하마 8-10",
        desc: "전 세계적으로 유명한 씨푸드 레스토랑",
        image: "images/food_lobster.jpg"
    },
    {
        id: 43,
        category: "맛집",
        name: "토니 로마스 (Tony Roma's)",
        benefit: "소프트 드링크 또는 하이네켄 1잔 서비스",
        hours: "디너 17:00~21:30 (주말 런치 운영)",
        location: "차탄쵸 미하마 8-7",
        desc: "오리지널 베이비 백 립이 유명한 곳",
        image: "images/food_ribs.jpg"
    },
    {
        id: 44,
        category: "맛집",
        name: "카프리쵸사 (Capricciosa)",
        benefit: "소프트 드링크, 글라스 맥주, 와인 중 1잔 서비스",
        hours: "11:00 ~ 21:00",
        location: "차탄쵸 미하마 8-7",
        desc: "양이 푸짐한 이탈리안 파스타",
        image: "images/food_pasta.jpg"
    },
    {
        id: 45,
        category: "맛집",
        name: "포켓 팜 (Pocke Farm)",
        benefit: "단품 음료 주문 시 100엔 할인",
        hours: "10:00 ~ 21:00",
        location: "아메리칸 데포 B동 1층",
        desc: "간단한 식사와 음료를 즐길 수 있는 곳",
        image: "images/food_snack.jpg"
    },
    {
        id: 46,
        category: "맛집",
        name: "벤슨스 (BENSON'S)",
        benefit: "핫도그 토핑 1개 무료",
        hours: "10:00 ~ 21:00",
        location: "아메리칸 데포 B동 1층",
        desc: "뉴욕 스타일 핫도그",
        image: "images/food_hotdog.jpg"
    },
    {
        id: 47,
        category: "맛집",
        name: "타코스 카페 타코 로코",
        benefit: "코카콜라사 소프트 드링크 1잔 서비스 (8명까지)",
        hours: "11:00 ~ 22:00",
        location: "아메리칸 데포 B동 2층",
        desc: "다양한 종류의 타코 전문점",
        image: "images/food_taco.jpg"
    },
    {
        id: 48,
        category: "맛집",
        name: "가츠 (Guts)",
        benefit: "구매 고객에게 소프트 드링크 증정",
        hours: "12:00 ~ 21:00",
        location: "데포 센트럴 빌딩 2층",
        desc: "바삭한 프라이드 치킨",
        image: "images/food_chicken.jpg"
    },
    {
        id: 49,
        category: "맛집",
        name: "파오파오 더 엘리펀트",
        benefit: "결제 금액 5% 할인",
        hours: "12:00~14:30 / 17:00~21:00",
        location: "차탄쵸 미하마 8-10",
        desc: "본격 타이 요리 전문점",
        image: "images/food_thai.jpg"
    },
    {
        id: 50,
        category: "맛집",
        name: "라 페스카리나 (La Pesciplina)",
        benefit: "3,000엔 이상 식사 시 10% 할인",
        hours: "18:00 ~ 23:00",
        location: "레쿠 오키나와 프리미어동 1층",
        desc: "신선한 해산물 이탈리안",
        image: "images/food_italian.jpg"
    },
    {
        id: 51,
        category: "맛집",
        name: "피제리아 바 아리치아 (Ariccia)",
        benefit: "식사 주문 시 모든 음료 200엔 할인",
        hours: "런치 11:00~16:00 / 디너 17:30~22:00",
        location: "데포 아일랜드 시사이드 빌딩 1층",
        desc: "화덕 피자가 맛있는 펍",
        image: "images/food_pizza.jpg"
    },
    {
        id: 52,
        category: "맛집",
        name: "멕시칸 레스토랑 엘 파소",
        benefit: "모든 음료 200엔 할인 (1인 1잔)",
        hours: "11:00~15:00 / 16:30~22:00",
        location: "데포 아일랜드 빌딩 D동 2층",
        desc: "매콤한 멕시칸 요리",
        image: "images/food_mexican.jpg"
    },

    // --- 10. 이자카야 & 바 (Bar) ---
    {
        id: 53,
        category: "맛집",
        name: "카페 & 바 Oh Yeah!",
        benefit: "음료 주문 시 오키나와 뱀술(허브주) 1잔 서비스",
        hours: "17:00 ~ 03:00",
        location: "오크 패션 빌딩 2층",
        desc: "늦은 밤까지 즐기는 카페 & 바",
        image: "images/bar_ohyeah.jpg"
    },
    {
        id: 54,
        category: "맛집",
        name: "이자카야 사이 (Sai)",
        benefit: "1팀당 안주 1품목 서비스",
        hours: "17:00 ~ 02:00",
        location: "구르메관 2층",
        desc: "다양한 안주가 있는 이자카야",
        image: "images/bar_izakaya.jpg"
    },
    {
        id: 55,
        category: "맛집",
        name: "시라카와 상점",
        benefit: "2번째 음료 1잔 무료",
        hours: "17:00 ~ 23:00",
        location: "앳 차탄 1층",
        desc: "편안한 분위기의 술집",
        image: "images/bar_shirakawa.jpg"
    },
    {
        id: 56,
        category: "맛집",
        name: "아이리쉬 펍 하우디 (Howdy)",
        benefit: "선택 가능한 안주 1개 선물",
        hours: "17:00 ~ 01:00 (주말 시간 상이)",
        location: "데포 센트럴 빌딩 5층",
        desc: "기네스 맥주와 피시 앤 칩스",
        image: "images/bar_pub.jpg"
    },

    // --- 11. 쇼핑 (의류) ---
    {
        id: 57,
        category: "쇼핑",
        name: "RUN OKI (런 오키)",
        benefit: "결제 시 10% 할인 (세일 품목 제외)",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 빌딩 B동 1층",
        desc: "오키나와 오리지널 티셔츠 브랜드",
        image: "images/shop_clothes.jpg"
    },
    {
        id: 58,
        category: "쇼핑",
        name: "리스펙트 (Respect)",
        benefit: "결제 시 5% 할인 (세일 품목 제외)",
        hours: "11:00 ~ 21:00",
        location: "시사이드 스퀘어 1층",
        desc: "캐주얼 의류 편집샵",
        image: "images/shop_clothes.jpg"
    },
    {
        id: 59,
        category: "쇼핑",
        name: "스킵 (SKIP)",
        benefit: "결제 시 5% 할인",
        hours: "11:00 ~ 20:00",
        location: "아메리칸 데포 B동 1층",
        desc: "키즈 캐주얼 의류",
        image: "images/shop_kids.jpg"
    },
    {
        id: 60,
        category: "쇼핑",
        name: "로얄 오키나와",
        benefit: "3,000엔 이상 구매 시 오리지널 굿즈 증정",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드 빌딩 1층",
        desc: "오키나와 스타일 셔츠와 의류",
        image: "images/shop_clothes.jpg"
    },
    {
        id: 61,
        category: "쇼핑",
        name: "플레이바 (Flava)",
        benefit: "10% 할인 (일부 제외)",
        hours: "10:00 ~ 22:00",
        location: "데포 아일랜드 빌딩 C동 1층",
        desc: "다양한 모자 전문점",
        image: "images/shop_hat.jpg"
    },
    {
        id: 62,
        category: "쇼핑",
        name: "다즐 (Dazzle)",
        benefit: "결제 금액 10% 할인",
        hours: "10:00 ~ 21:00",
        location: "디스토션 패션 빌딩",
        desc: "트렌디한 패션 아이템",
        image: "images/shop_clothes.jpg"
    },
    {
        id: 63,
        category: "쇼핑",
        name: "서던 델리 아구 (Southern Deli AGOO)",
        benefit: "3,000엔 이상 구매 시 엽서 1장 증정",
        hours: "11:00 ~ 19:00",
        location: "디스토션 시사이드 빌딩 1층",
        desc: "오리지널 티셔츠와 잡화",
        image: "images/shop_clothes.jpg"
    },

    // --- 12. 쇼핑 (액세서리 & 잡화) ---
    {
        id: 64,
        category: "쇼핑",
        name: "쵸시치야 차탄 1호점",
        benefit: "4,000엔 이상 구매 시 책갈피(시오리) 증정",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드 빌딩 A동 1층",
        desc: "반짝이는 호타루(반딧불) 유리 공예품",
        image: "images/shop_glass.jpg"
    },
    {
        id: 65,
        category: "쇼핑",
        name: "아마츠부 (파워스톤)",
        benefit: "3,000엔 이상 구매 시 5% 할인 (현금만)",
        hours: "12:00 ~ 21:00",
        location: "데포 아일랜드 빌딩 A동 1층",
        desc: "천연석 액세서리 전문점",
        image: "images/shop_stone.jpg"
    },
    {
        id: 66,
        category: "쇼핑",
        name: "서덜리 (Southerly)",
        benefit: "결제 시 10% 할인",
        hours: "11:30 ~ 19:30",
        location: "데포 아일랜드 시사이드 빌딩 1층",
        desc: "바다를 모티브로 한 액세서리",
        image: "images/shop_acc.jpg"
    },
    {
        id: 67,
        category: "쇼핑",
        name: "스플래쉬 오키나와 미하마 마켓",
        benefit: "3,000엔 이상 구매 시 오리지널 잡화 증정",
        hours: "10:00 ~ 21:30",
        location: "디스토션 패션 빌딩 1층",
        desc: "아기자기한 오키나와 잡화",
        image: "images/shop_splash.jpg"
    },
    {
        id: 68,
        category: "쇼핑",
        name: "쵸시치야 차탄 2호점",
        benefit: "4,000엔 이상 구매 시 책갈피 증정",
        hours: "11:00 ~ 20:00",
        location: "데포 센트럴 1층",
        desc: "호타루 유리 전문점",
        image: "images/shop_glass.jpg"
    },
    {
        id: 69,
        category: "쇼핑",
        name: "오하나 (OHANA)",
        benefit: "2,000엔 이상 구매 시 500엔 할인 또는 무료 포장",
        hours: "11:00 ~ 21:00",
        location: "데포 아일랜드 빌딩 A동 1층",
        desc: "핸드메이드 액세서리",
        image: "images/shop_acc.jpg"
    },
    {
        id: 70,
        category: "쇼핑",
        name: "라군 (Lagoon)",
        benefit: "결제 시 5% 할인",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 빌딩 A동 1층",
        desc: "세련된 리조트 주얼리",
        image: "images/shop_acc.jpg"
    },

    // --- 13. 기념품 & 선물 ---
    {
        id: 71,
        category: "쇼핑",
        name: "오키나와 마켓",
        benefit: "3,000엔 이상 구매 시 굿즈 증정",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드 시사이드 빌딩 1층",
        desc: "오키나와 과자, 캐릭터 굿즈 총집합",
        image: "images/shop_market.jpg"
    },
    {
        id: 72,
        category: "쇼핑",
        name: "오카노 잇폰마츠",
        benefit: "8,000엔 이상 무료 배송 / 2,500엔 이상 에코백 증정",
        hours: "10:00 ~ 22:00",
        location: "드래곤 팰리스 1층",
        desc: "다양한 종류의 오키나와 특산품",
        image: "images/shop_souvenir.jpg"
    },
    {
        id: 73,
        category: "쇼핑",
        name: "오키나와야 (Okinaway)",
        benefit: "1,000엔 이상 구매 시 별모래(호시즈나) 증정",
        hours: "09:30 ~ 21:30",
        location: "아메리칸 데포 A동 1층",
        desc: "종합 기념품 샵",
        image: "images/shop_okinawaya.jpg"
    },
    {
        id: 74,
        category: "쇼핑",
        name: "오키나와야 아와모리 창고",
        benefit: "오리지널 상품 3천엔 이상 구매 시 미니 보틀 증정",
        hours: "10:00 ~ 21:30",
        location: "아메리칸 데포 A동 1층",
        desc: "오키나와 전통주 아와모리 전문점",
        image: "images/shop_sake.jpg"
    },
    {
        id: 75,
        category: "쇼핑",
        name: "파인애플 파인애플",
        benefit: "3,000엔 이상 구매 시 파인애플 아이스크림 증정",
        hours: "11:00 ~ 20:00",
        location: "데포 센트럴 빌딩 1층",
        desc: "파인애플 관련 상품 전문점",
        image: "images/shop_pineapple.jpg"
    },
    {
        id: 76,
        category: "쇼핑",
        name: "메이드 인 오키나와",
        benefit: "3,000엔 이상 구매 시 5% 할인",
        hours: "11:00 ~ 19:00",
        location: "데포 센트럴 E동",
        desc: "오키나와산 엄선된 특산품",
        image: "images/shop_souvenir.jpg"
    },

    // --- 14. 잡화 (수입/가죽/화장품 등) ---
    {
        id: 77,
        category: "쇼핑",
        name: "데포 아일랜드 (수입잡화)",
        benefit: "3,000엔 이상 구매 시 임포트 굿즈 증정",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 빌딩 A동 1층",
        desc: "미국 직수입 의류 및 잡화",
        image: "images/shop_import.jpg"
    },
    {
        id: 78,
        category: "쇼핑",
        name: "미하마 유리 소라 (SORA)",
        benefit: "5,000엔 이상 구매 시 소품 케이스 증정",
        hours: "12:00 ~ 21:00",
        location: "데포 아일랜드 빌딩 1층",
        desc: "아름다운 유리 공예품",
        image: "images/shop_glass.jpg"
    },
    {
        id: 79,
        category: "쇼핑",
        name: "해양창고 21",
        benefit: "전품목 5% 할인 (현금만, 식품/일부 제외)",
        hours: "10:30 ~ 20:00",
        location: "데포 아일랜드 빌딩 B동 1층",
        desc: "저렴한 잡화와 코스메틱",
        image: "images/shop_variety.jpg"
    },
    {
        id: 80,
        category: "쇼핑",
        name: "야마츄 본포 (산충본포)",
        benefit: "오리지널 키홀더 증정",
        hours: "10:00 ~ 20:00",
        location: "데포 아일랜드 빌딩 1층",
        desc: "오키나와 전통술과 식품",
        image: "images/shop_sake.jpg"
    },
    {
        id: 81,
        category: "쇼핑",
        name: "SOHO (소호)",
        benefit: "3,000엔 이상 구매 시 임포트 굿즈 증정",
        hours: "11:00 ~ 20:00",
        location: "아메리칸 데포 C동 1층",
        desc: "밀리터리 및 수입 의류",
        image: "images/shop_import.jpg"
    },
    {
        id: 82,
        category: "쇼핑",
        name: "아메리칸 데포 (American Depot)",
        benefit: "3,000엔 이상 구매 시 임포트 굿즈 증정",
        hours: "10:00 ~ 21:00",
        location: "아메리칸 데포 A동 1층",
        desc: "아메리칸 빈티지 라이프스타일 샵",
        image: "images/shop_american.jpg"
    },
    {
        id: 83,
        category: "쇼핑",
        name: "레더 베이스 (Leather Base)",
        benefit: "5,000엔 이상 가방 구매 시 가죽 소품 증정",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 빌딩 E동 1층",
        desc: "고품질 가죽 제품 전문점",
        image: "images/shop_leather.jpg"
    },
    {
        id: 84,
        category: "쇼핑",
        name: "카사리나 (CASARINA)",
        benefit: "결제 시 5% 할인",
        hours: "11:00 ~ 19:00",
        location: "차탄쵸 미하마 51-3",
        desc: "오리지널 잡화점",
        image: "images/shop_variety.jpg"
    },
    {
        id: 85,
        category: "쇼핑",
        name: "남국잡화 티다 (TIDA)",
        benefit: "1,000엔 이상 구매 시 오리지널 스티커 증정",
        hours: "12:00 ~ 19:00",
        location: "레쿠 오키나와 메인동 1층",
        desc: "트로피컬한 디자인의 잡화",
        image: "images/shop_tida.jpg"
    },
    {
        id: 86,
        category: "뷰티",
        name: "슈리비누 (Sui Savon)",
        benefit: "스킨케어 샘플 증정",
        hours: "10:00 ~ 20:00",
        location: "데포 아일랜드 빌딩 A동 1층",
        desc: "오키나와 천연 재료로 만든 수제 비누",
        image: "images/shop_soap.jpg"
    },

    // --- 15. 놀거리 & 액티비티 ---
    {
        id: 87,
        category: "액티비티",
        name: "GiGO (기고 게임센터)",
        benefit: "메달 대여 매수 1.5배 증량",
        hours: "10:00 ~ 24:00",
        location: "시사이드 스퀘어 1층",
        desc: "가족 모두 즐기는 대형 게임 센터",
        image: "images/play_game.jpg"
    },
    {
        id: 88,
        category: "액티비티",
        name: "에너지 빅 볼 (볼링장)",
        benefit: "1게임 할인 적용",
        hours: "평일 10:00~24:00 / 주말 09:00~24:00",
        location: "시사이드 스퀘어 2층",
        desc: "신나는 락 볼링장",
        image: "images/play_bowling.jpg"
    },
    {
        id: 89,
        category: "액티비티",
        name: "게임랜드 조이 정글",
        benefit: "메달 20개 선물 또는 UFO 캐쳐 1회 무료",
        hours: "10:00 ~ 24:00",
        location: "드래곤 팰리스",
        desc: "다양한 아케이드 게임",
        image: "images/play_game.jpg"
    },
    {
        id: 90,
        category: "액티비티",
        name: "테르메 빌라 츄라유 (온천)",
        benefit: "목욕 타월 및 페이스 타월 무료 대여",
        hours: "온천 07:00~23:00 / 실외풀 10:00~21:00",
        location: "더 비치 타워 호텔 인근",
        desc: "천연 온천과 수영장 복합 시설",
        image: "images/play_spa.jpg"
    },
    {
        id: 91,
        category: "액티비티",
        name: "매직 오션 (Magic Ocean)",
        benefit: "입장료 할인 (성인 500엔 할인 등)",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 빌딩 4층",
        desc: "식사와 함께 즐기는 매직 디너 쇼",
        image: "images/play_magic.jpg"
    },
    {
        id: 92,
        category: "액티비티",
        name: "소드 피쉬 (Sword Fish)",
        benefit: "마린 투어 각종 플랜 15% 할인",
        hours: "08:00 ~ 20:00",
        location: "온나손 마에다 (예약 필수)",
        desc: "푸른 동굴 스노쿨링 및 다이빙",
        image: "images/play_marine.jpg"
    },
    {
        id: 93,
        category: "액티비티",
        name: "슈하리 바이크 웍스",
        benefit: "자전거 렌탈 10% 할인 (기념사진 포함)",
        hours: "11:00 ~ 18:00 (주말 10:00~19:00)",
        location: "레쿠 오키나와 프리미어동 1층",
        desc: "자전거를 빌려 미하마 해변 라이딩",
        image: "images/play_bike.jpg"
    },
    {
        id: 94,
        category: "기타",
        name: "라 레이아 (La Leia) 펫 호텔",
        benefit: "펫 호텔 이용료 5% 할인",
        hours: "12:00 ~ 19:00",
        location: "차탄쵸 미하마 15-31",
        desc: "반려견을 위한 호텔 서비스",
        image: "images/etc_pet.jpg"
    },

    // --- 16. 뷰티 & 스파 ---
    {
        id: 95,
        category: "뷰티",
        name: "힐링 포레스트 슈로 (SHURO)",
        benefit: "시술 메뉴 10% 할인",
        hours: "11:00 ~ 19:30 (화요일 휴무)",
        location: "스코야카노모리 빌라 차탄 1층",
        desc: "편안한 휴식을 주는 에스테틱",
        image: "images/beauty_spa.jpg"
    },
    {
        id: 96,
        category: "뷰티",
        name: "엠 그레이스 (m-grace's)",
        benefit: "정가 상품 10% 할인",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드 시사이드 빌딩 2층",
        desc: "토탈 뷰티 살롱",
        image: "images/beauty_salon.jpg"
    },
    {
        id: 97,
        category: "뷰티",
        name: "러브 네일 오키나와",
        benefit: "음료 1잔 서비스",
        hours: "10:00 ~ 20:00",
        location: "디스토션 시사이드 빌딩 3층",
        desc: "네일 아트 살롱",
        image: "images/beauty_nail.jpg"
    },
    {
        id: 98,
        category: "뷰티",
        name: "셀레스테 스파 (celeste spa)",
        benefit: "쇼트 바디 45분 코스 특별가 12,650엔",
        hours: "13:00 ~ 22:00",
        location: "레쿠 오키나와 메인동 8층",
        desc: "호텔 내 고급 릴렉세이션 스파",
        image: "images/beauty_spa.jpg"
    },
    {
        id: 99,
        category: "쇼핑",
        name: "오키츄 (OKICHU)",
        benefit: "오리지널 섬조리(쪼리) 구매 시 키홀더 증정",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드 빌딩 E동 1층",
        desc: "내가 직접 디자인하는 커스텀 샌들",
        image: "images/shop_shoes.jpg"
    },
    {
        id: 100,
        category: "쇼핑",
        name: "미하마 유리 칸자시야",
        benefit: "3,000엔 이상 구매 시 소품 선물",
        hours: "12:00 ~ 21:00",
        location: "아메리칸 데포 C동 1층",
        desc: "일본 전통 비녀와 액세서리",
        image: "images/shop_acc.jpg"
    },
    {
        id: 101,
        category: "뷰티",
        name: "류 스파 (Ryu Spa)",
        benefit: "1,100엔 이상 구매 시 페이스 마스크 1매 증정",
        hours: "10:00 ~ 21:00",
        location: "데포 센트럴 1층",
        desc: "오키나와 해양 심층수 화장품",
        image: "images/beauty_cosmetic.jpg"
    }
];