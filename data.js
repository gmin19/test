/**
 * 베셀 & 레쿠 오키나와 쿠폰북 데이터 (전체 업체 포함)
 * - 이미지 대신 구글 매터리얼 심볼 아이콘 사용
 * - 모든 텍스트 한국어 번역 완료
 */

const couponData = [
    // -----------------------------------------------------------
    // [1] 호텔 레스토랑
    // -----------------------------------------------------------
    {
        id: 1,
        category: "맛집",
        name: "힐튼 수리윤 (뷔페)",
        benefit: "15% 할인 (런치/디너)",
        desc: "오키나와 요리와 세계 요리 뷔페",
        hours: "런치 11:30~15:00 / 디너 17:30~21:30",
        location: "힐튼 호텔",
        icon: "restaurant"
    },
    {
        id: 2,
        category: "맛집",
        name: "힐튼 코렌테 (이탈리안)",
        benefit: "15% 할인 (런치/디너)",
        desc: "세련된 정통 이탈리안 레스토랑",
        hours: "런치 11:30~15:00 / 디너 17:30~22:30",
        location: "힐튼 호텔",
        icon: "local_pizza"
    },

    // -----------------------------------------------------------
    // [2] 오키나와 요리 & 식당
    // -----------------------------------------------------------
    {
        id: 3,
        category: "맛집",
        name: "키지무나 (타코라이스)",
        benefit: "소프트 드링크 1잔 무료 (8명까지)",
        desc: "오무타코가 유명한 타코라이스 맛집",
        hours: "11:00 ~ 22:00",
        location: "데포 아일랜드 C동 2층",
        icon: "rice_bowl"
    },
    {
        id: 4,
        category: "맛집",
        name: "카메젠 식당",
        benefit: "5% 할인",
        desc: "깊은 국물의 오키나와 소바",
        hours: "11:00~14:45 / 17:00~21:00",
        location: "데포 아일랜드 2층",
        icon: "ramen_dining"
    },
    {
        id: 5,
        category: "맛집",
        name: "츄라하마 식당",
        benefit: "특정 음료 1잔 서비스 (최대 10잔)",
        desc: "오키나와 가정식과 정식",
        hours: "12:00~15:30 / 17:00~23:00 (월 휴무)",
        location: "디스토션 시사이드 3층",
        icon: "soup_kitchen"
    },
    {
        id: 6,
        category: "맛집",
        name: "차탄 둔치",
        benefit: "오리지널 과실 식초 1잔 무료",
        desc: "분위기 좋은 오키나와 요리 주점",
        hours: "17:00 ~ 23:00",
        location: "데포 아일랜드 시사이드 3층",
        icon: "dinner_dining"
    },
    {
        id: 7,
        category: "맛집",
        name: "미하마 둔치",
        benefit: "오리지널 과실 식초 1잔 무료",
        desc: "다양한 안주가 있는 이자카야",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 2층",
        icon: "dinner_dining"
    },
    {
        id: 8,
        category: "맛집",
        name: "라이브 주점 카나산야",
        benefit: "우미부도(바다포도) 소접시 서비스",
        desc: "라이브 공연과 함께하는 술자리",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 3층",
        icon: "music_note"
    },
    {
        id: 9,
        category: "맛집",
        name: "Funka Delica (포크타마고)",
        benefit: "소프트 드링크 1잔 서비스",
        desc: "스팸 계란 주먹밥 전문점",
        hours: "16:00 ~ 22:00",
        location: "차탄 (미하마 34-2)",
        icon: "takeout_dining"
    },
    {
        id: 10,
        category: "맛집",
        name: "오키나와 소바 키세키",
        benefit: "10% 할인 (주류 제외)",
        desc: "시원한 조개 육수 소바",
        hours: "11:00 ~ 21:00",
        location: "디스토션 시사이드 1층",
        icon: "ramen_dining"
    },

    // -----------------------------------------------------------
    // [3] 스테이크 & 햄버거 & 카레
    // -----------------------------------------------------------
    {
        id: 11,
        category: "맛집",
        name: "점보 스테이크 한스 (미하마)",
        benefit: "10% 할인",
        desc: "푸짐한 점보 스테이크",
        hours: "11:00 ~ 23:00",
        location: "데포 아일랜드 A동 2층",
        icon: "outdoor_grill"
    },
    {
        id: 12,
        category: "맛집",
        name: "스테이크 하우스 BB",
        benefit: "음료 1잔 무료 또는 토핑 서비스",
        desc: "가성비 좋은 스테이크",
        hours: "11:30 ~ 21:00",
        location: "데포 아일랜드 A동 2층",
        icon: "outdoor_grill"
    },
    {
        id: 13,
        category: "맛집",
        name: "블루 오션 스테이크",
        benefit: "웰컴 드링크 1잔 서비스",
        desc: "오션뷰 고급 스테이크",
        hours: "17:00 ~ 23:00",
        location: "차탄 (미하마 51-2)",
        icon: "wine_bar"
    },
    {
        id: 14,
        category: "맛집",
        name: "스테이크 하우스 88",
        benefit: "드링크바 1인 무료",
        desc: "오키나와 전통 스테이크",
        hours: "11:00 ~ 23:00",
        location: "앳 차탄 2층",
        icon: "restaurant"
    },
    {
        id: 15,
        category: "맛집",
        name: "비피스 (BEEFY'S)",
        benefit: "10% 할인",
        desc: "씨사이드 스테이크 맛집",
        hours: "11:30~15:00 / 17:00~22:00",
        location: "데포 아일랜드 시사이드 4층",
        icon: "outdoor_grill"
    },
    {
        id: 16,
        category: "맛집",
        name: "점보 스테이크 한스 (센트럴)",
        benefit: "10% 할인 또는 음료 서비스",
        desc: "새로 오픈한 센트럴점",
        hours: "11:00 ~ 23:00",
        location: "데포 센트럴 2층",
        icon: "outdoor_grill"
    },
    {
        id: 17,
        category: "맛집",
        name: "차탄 버거 베이스 아타비스",
        benefit: "햄버거 토핑 1개 무료",
        desc: "육즙 가득 수제 버거",
        hours: "11:00 ~ 21:00",
        location: "데포 아일랜드 시사이드 1층",
        icon: "lunch_dining"
    },
    {
        id: 18,
        category: "맛집",
        name: "제타 버거 마켓",
        benefit: "아메리카노 1잔 서비스",
        desc: "빈티지 햄버거 카페",
        hours: "11:00 ~ 22:00",
        location: "디스토션 패션 2층",
        icon: "lunch_dining"
    },
    {
        id: 19,
        category: "맛집",
        name: "BRUAL (브루알)",
        benefit: "10% 할인",
        desc: "버거와 맥주",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 시사이드 2층",
        icon: "lunch_dining"
    },
    {
        id: 20,
        category: "맛집",
        name: "너티 바이 네이처",
        benefit: "소프트 드링크 1잔 무료",
        desc: "건강한 재료의 버거",
        hours: "11:00 ~ 19:30 (금토 ~21:00)",
        location: "차탄 (미하마 51-3)",
        icon: "lunch_dining"
    },
    {
        id: 21,
        category: "맛집",
        name: "발리우드 드림스",
        benefit: "10% 할인",
        desc: "정통 인도 커리",
        hours: "11:00~14:30 / 17:00~21:00",
        location: "데포 아일랜드 A동 2층",
        icon: "local_dining"
    },
    {
        id: 22,
        category: "맛집",
        name: "호라이즌 커리 웍스",
        benefit: "10% 할인",
        desc: "바다 뷰 카레 맛집",
        hours: "11:00 ~ 22:00",
        location: "디스토션 시사이드 2층",
        icon: "local_dining"
    },
    {
        id: 2201,
        category: "맛집",
        name: "발리우드 주얼 (Bollywood Jewel)",
        benefit: "10% 할인",
        desc: "인도 커리 전문점",
        hours: "11:00~15:00 / 17:00~21:30",
        location: "시사이드 스퀘어 1층",
        icon: "local_dining"
    },


    // -----------------------------------------------------------
    // [4] 카페 & 디저트
    // -----------------------------------------------------------
    {
        id: 23,
        category: "카페",
        name: "Vongo & Anchor",
        benefit: "10% 할인",
        desc: "분위기 좋은 로스터리 카페",
        hours: "08:00 ~ 22:00",
        location: "베셀 호텔 별관 1층",
        icon: "coffee"
    },
    {
        id: 24,
        category: "카페",
        name: "씨사이드 카페 하논 (Hanon)",
        benefit: "식사 주문 시 아이스크림 서비스",
        desc: "유명한 팬케이크 전문점",
        hours: "09:00~17:00 (주말 ~19:00)",
        location: "오크 패션 2층",
        icon: "bakery_dining"
    },
    {
        id: 25,
        category: "카페",
        name: "클라이맥스 커피",
        benefit: "10% 할인 (현금만)",
        desc: "다양한 머핀과 커피",
        hours: "09:30 ~ 22:00",
        location: "데포 아일랜드 시사이드 1층",
        icon: "cookie"
    },
    {
        id: 2501,
        category: "카페",
        name: "카페 & 바 MaiMalu",
        benefit: "식사 시 칵테일/음료 1잔 서비스",
        desc: "카페 겸 바",
        hours: "15:00 ~ 24:00",
        location: "디스토션 시사이드 1층",
        icon: "local_bar"
    },
    {
        id: 26,
        category: "카페",
        name: "지바고 커피 (ZHYVAGO)",
        benefit: "10% 할인 (레쿠 투숙객 한정)",
        desc: "오키나와 인기 로스터리",
        hours: "07:00 ~ 22:00",
        location: "레쿠 호텔 프리미어 1층",
        icon: "coffee_maker"
    },
    {
        id: 27,
        category: "카페",
        name: "오니얀마 커피",
        benefit: "음료 주문 시 아이스크림 서비스",
        desc: "스페셜티 커피 전문",
        hours: "09:30 ~ 19:00",
        location: "디스토션 패션 2층",
        icon: "coffee"
    },
    {
        id: 28,
        category: "카페",
        name: "블루씰 아이스크림",
        benefit: "싱글 구매 시 주니어 스쿱 증정",
        desc: "오키나와 대표 아이스크림",
        hours: "11:00 ~ 21:00",
        location: "데포 아일랜드 시사이드 2층",
        icon: "icecream"
    },
    {
        id: 29,
        category: "쇼핑",
        name: "바움쿠헨 산토미",
        benefit: "1,000엔 이상 5% 할인",
        desc: "수제 바움쿠헨 디저트",
        hours: "10:00 ~ 18:00",
        location: "오크 패션 1층",
        icon: "cake"
    },
    {
        id: 30,
        category: "쇼핑",
        name: "카메 안다기",
        benefit: "1,000엔 이상 사타안다기 1개 증정",
        desc: "토핑 사타안다기(도넛)",
        hours: "11:00 ~ 20:00",
        location: "레쿠 호텔 메인 1층",
        icon: "cookie"
    },
    {
        id: 31,
        category: "카페",
        name: "감미처 가마쿠라 (와라비모찌)",
        benefit: "선물용 구매 시 꿀(미츠) 서비스",
        desc: "전통 와라비모찌 음료",
        hours: "10:30 ~ 20:00",
        location: "데포 아일랜드 A동 1층",
        icon: "local_drink"
    },
    {
        id: 32,
        category: "카페",
        name: "카페 & 프루츠 분분 (BUNBUN)",
        benefit: "식사 시 음료 1잔 무료",
        desc: "과일 샌드위치",
        hours: "08:00 ~ 20:00",
        location: "플라자 F 1층",
        icon: "bakery_dining"
    },

    // -----------------------------------------------------------
    // [5] 일식 / 고기 / 해산물
    // -----------------------------------------------------------
    {
        id: 33,
        category: "맛집",
        name: "아구노 카쿠레가 (샤브샤브)",
        benefit: "10% 할인",
        desc: "오키나와 흑돼지 샤브샤브",
        hours: "17:00 ~ 22:30",
        location: "차탄 (미하마 2-2-2)",
        icon: "soup_kitchen"
    },
    {
        id: 34,
        category: "맛집",
        name: "하카타 야키니쿠 텐진",
        benefit: "드링크 1잔 서비스 (주류 포함)",
        desc: "규슈 스타일 야키니쿠",
        hours: "11:30~15:00 / 17:00~23:00",
        location: "아메리칸 데포 C동 2층",
        icon: "outdoor_grill"
    },
    {
        id: 35,
        category: "맛집",
        name: "야키니쿠 복우 (Fukugyu)",
        benefit: "1팀 4명까지 지정 음료 서비스",
        desc: "와규 야키니쿠",
        hours: "11:00 ~ 23:00",
        location: "데포 아일랜드 E동 2층",
        icon: "outdoor_grill"
    },
    {
        id: 36,
        category: "맛집",
        name: "증기 해산물 (Steam Seafood)",
        benefit: "웰컴 드링크 1잔 서비스",
        desc: "해산물 찜 요리",
        hours: "11:00 ~ 23:00",
        location: "차탄 (미하마 51-2 3층)",
        icon: "set_meal"
    },
    {
        id: 37,
        category: "맛집",
        name: "규부시 (GYUBUSHI)",
        benefit: "식사 대금 10% 할인",
        desc: "고급 소고기 요리",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 6층",
        icon: "restaurant"
    },
    {
        id: 38,
        category: "맛집",
        name: "야키니쿠 리키오",
        benefit: "음료 또는 디저트 서비스",
        desc: "트렌디한 야키니쿠",
        hours: "17:00 ~ 23:00 (수 휴무)",
        location: "디스토션 패션 2층",
        icon: "outdoor_grill"
    },
    {
        id: 3801,
        category: "맛집",
        name: "지루야 (Jiruya)",
        benefit: "음료 1잔 무료",
        desc: "이자카야 / 마제소바",
        hours: "문의 필요",
        location: "앳 차탄 1층",
        icon: "ramen_dining"
    },

    // -----------------------------------------------------------
    // [6] 양식 & 세계요리
    // -----------------------------------------------------------
    {
        id: 39,
        category: "맛집",
        name: "선라이즈 (SUNRISE)",
        benefit: "15% 할인",
        desc: "치즈 스테이크 & 햄버거",
        hours: "07:30 ~ 22:00",
        location: "시사이드 스퀘어 1층",
        icon: "restaurant"
    },
    {
        id: 40,
        category: "맛집",
        name: "함바그 마스오",
        benefit: "10% 할인 (룸키 제시)",
        desc: "육즙 가득 함박 스테이크",
        hours: "11:30 ~ 21:00",
        location: "앳 차탄 1층",
        icon: "restaurant_menu"
    },
    {
        id: 41,
        category: "맛집",
        name: "솔리스 그란데",
        benefit: "식사 시 아이스크림 3종 서비스",
        desc: "오션뷰 이탈리안",
        hours: "11:30~16:00 / 17:00~22:00",
        location: "베셀 호텔 별관 1층",
        icon: "local_pizza"
    },
    {
        id: 42,
        category: "맛집",
        name: "레드 랍스터",
        benefit: "음료/맥주/와인 중 1잔 서비스",
        desc: "씨푸드 레스토랑",
        hours: "11:00 ~ 22:00",
        location: "차탄 (미하마 8-10)",
        icon: "set_meal"
    },
    {
        id: 43,
        category: "맛집",
        name: "토니 로마스",
        benefit: "소프트 드링크/하이네켄 1잔 서비스",
        desc: "베이비 백 립 맛집",
        hours: "17:00~21:30 (주말 런치O)",
        location: "차탄 (미하마 8-7)",
        icon: "restaurant"
    },
    {
        id: 44,
        category: "맛집",
        name: "카프리쵸사",
        benefit: "음료/맥주/와인 중 1잔 서비스",
        desc: "푸짐한 이탈리안 파스타",
        hours: "11:00 ~ 21:00",
        location: "차탄 (미하마 8-7)",
        icon: "local_pizza"
    },
    {
        id: 45,
        category: "맛집",
        name: "포켓 팜",
        benefit: "단품 음료 100엔 할인",
        desc: "간편한 스낵과 음료",
        hours: "10:00 ~ 21:00",
        location: "아메리칸 데포 B동 1층",
        icon: "fastfood"
    },
    {
        id: 46,
        category: "맛집",
        name: "벤슨스 (BENSON'S)",
        benefit: "핫도그 토핑 1개 무료",
        desc: "뉴욕 스타일 핫도그",
        hours: "10:00 ~ 21:00",
        location: "아메리칸 데포 B동 1층",
        icon: "fastfood"
    },
    {
        id: 47,
        category: "맛집",
        name: "타코스 카페 타코 로코",
        benefit: "소프트 드링크 1잔 서비스",
        desc: "다양한 타코 요리",
        hours: "11:00 ~ 22:00",
        location: "아메리칸 데포 B동 2층",
        icon: "fastfood"
    },
    {
        id: 48,
        category: "맛집",
        name: "가츠 (Guts)",
        benefit: "소프트 드링크 증정",
        desc: "프라이드 치킨",
        hours: "12:00 ~ 21:00",
        location: "데포 센트럴 2층",
        icon: "fastfood"
    },
    {
        id: 49,
        category: "맛집",
        name: "파오파오 더 엘리펀트",
        benefit: "5% 할인",
        desc: "본격 태국 요리",
        hours: "12:00~14:30 / 17:00~21:00",
        location: "차탄 (미하마 8-10)",
        icon: "restaurant"
    },
    {
        id: 50,
        category: "맛집",
        name: "라 페스카리나",
        benefit: "3,000엔 이상 10% 할인",
        desc: "해산물 이탈리안",
        hours: "18:00 ~ 23:00",
        location: "레쿠 호텔 프리미어 1층",
        icon: "local_pizza"
    },
    {
        id: 51,
        category: "맛집",
        name: "피제리아 바 아리치아",
        benefit: "식사 시 음료 200엔 할인",
        desc: "화덕 피자 & 펍",
        hours: "11:00 ~ 22:00",
        location: "데포 아일랜드 시사이드 1층",
        icon: "local_pizza"
    },
    {
        id: 52,
        category: "맛집",
        name: "엘 파소 (EL PASO)",
        benefit: "모든 음료 200엔 할인",
        desc: "멕시칸 레스토랑",
        hours: "11:00 ~ 22:00",
        location: "데포 아일랜드 D동 2층",
        icon: "restaurant"
    },

    // -----------------------------------------------------------
    // [7] 이자카야 & 바
    // -----------------------------------------------------------
    {
        id: 53,
        category: "맛집",
        name: "카페 & 바 Oh Yeah!",
        benefit: "음료 주문 시 뱀술 1잔 서비스",
        desc: "늦게까지 하는 바",
        hours: "17:00 ~ 03:00",
        location: "오크 패션 2층",
        icon: "local_bar"
    },
    {
        id: 54,
        category: "맛집",
        name: "이자카야 사이 (Sai)",
        benefit: "1팀당 안주 1개 서비스",
        desc: "편안한 분위기 이자카야",
        hours: "17:00 ~ 02:00",
        location: "구르메관 2층",
        icon: "nightlife"
    },
    {
        id: 55,
        category: "맛집",
        name: "시라카와 상점",
        benefit: "2번째 음료 1잔 무료",
        desc: "레트로 감성 술집",
        hours: "17:00 ~ 23:00",
        location: "앳 차탄 1층",
        icon: "sports_bar"
    },
    {
        id: 56,
        category: "맛집",
        name: "아이리쉬 펍 하우디",
        benefit: "안주 1개 선물",
        desc: "기네스와 피시앤칩스",
        hours: "17:00 ~ 01:00",
        location: "데포 센트럴 5층",
        icon: "sports_bar"
    },

    // -----------------------------------------------------------
    // [8] 쇼핑 - 의류
    // -----------------------------------------------------------
    {
        id: 57,
        category: "쇼핑",
        name: "RUN OKI (런 오키)",
        benefit: "10% 할인 (세일 제외)",
        desc: "오키나와 오리지널 티셔츠",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 B동 1층",
        icon: "checkroom"
    },
    {
        id: 58,
        category: "쇼핑",
        name: "리스펙트 (Respect)",
        benefit: "5% 할인 (세일 제외)",
        desc: "캐주얼 의류 편집샵",
        hours: "11:00 ~ 21:00",
        location: "시사이드 스퀘어 1층",
        icon: "checkroom"
    },
    {
        id: 59,
        category: "쇼핑",
        name: "스킵 (SKIP)",
        benefit: "5% 할인",
        desc: "키즈 캐주얼 의류",
        hours: "11:00 ~ 20:00",
        location: "아메리칸 데포 B동 1층",
        icon: "child_care"
    },
    {
        id: 60,
        category: "쇼핑",
        name: "로얄 오키나와",
        benefit: "3,000엔 이상 굿즈 증정",
        desc: "오키나와 셔츠 & 의류",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드 1층",
        icon: "checkroom"
    },
    {
        id: 61,
        category: "쇼핑",
        name: "플레이바 (Flava)",
        benefit: "10% 할인 (일부 제외)",
        desc: "다양한 모자 전문점",
        hours: "10:00 ~ 22:00",
        location: "데포 아일랜드 C동 1층",
        icon: "checkroom"
    },
    {
        id: 62,
        category: "쇼핑",
        name: "다즐 (Dazzle)",
        benefit: "10% 할인",
        desc: "트렌디한 패션 아이템",
        hours: "10:00 ~ 21:00",
        location: "디스토션 패션",
        icon: "checkroom"
    },
    {
        id: 63,
        category: "쇼핑",
        name: "서던 델리 아구",
        benefit: "3,000엔 이상 엽서 증정",
        desc: "오리지널 티셔츠 잡화",
        hours: "11:00 ~ 19:00",
        location: "디스토션 시사이드 1층",
        icon: "checkroom"
    },

    // -----------------------------------------------------------
    // [9] 쇼핑 - 액세서리 & 잡화
    // -----------------------------------------------------------
    {
        id: 64,
        category: "쇼핑",
        name: "쵸시치야 차탄 1호점",
        benefit: "4,000엔 이상 책갈피 증정",
        desc: "호타루 유리 공예",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드 A동 1층",
        icon: "diamond"
    },
    {
        id: 65,
        category: "쇼핑",
        name: "아마츠부 (파워스톤)",
        benefit: "3,000엔 이상 5% 할인",
        desc: "천연석 액세서리",
        hours: "12:00 ~ 21:00",
        location: "데포 아일랜드 A동 1층",
        icon: "diamond"
    },
    {
        id: 66,
        category: "쇼핑",
        name: "서덜리 (Southerly)",
        benefit: "10% 할인",
        desc: "바다 모티브 액세서리",
        hours: "11:30 ~ 19:30",
        location: "데포 아일랜드 시사이드 1층",
        icon: "diamond"
    },
    {
        id: 67,
        category: "쇼핑",
        name: "스플래쉬 오키나와",
        benefit: "3,000엔 이상 잡화 증정",
        desc: "오키나와 잡화점",
        hours: "10:00 ~ 21:30",
        location: "디스토션 패션 1층",
        icon: "local_mall"
    },
    {
        id: 68,
        category: "쇼핑",
        name: "쵸시치야 차탄 2호점",
        benefit: "4,000엔 이상 책갈피 증정",
        desc: "호타루 유리 전문",
        hours: "11:00 ~ 20:00",
        location: "데포 센트럴 1층",
        icon: "diamond"
    },
    {
        id: 69,
        category: "쇼핑",
        name: "오하나 (OHANA)",
        benefit: "2,000엔 이상 500엔 할인/포장",
        desc: "핸드메이드 액세서리",
        hours: "11:00 ~ 21:00",
        location: "데포 아일랜드 A동 1층",
        icon: "diamond"
    },
    {
        id: 70,
        category: "쇼핑",
        name: "라군 (Lagoon)",
        benefit: "5% 할인",
        desc: "리조트 주얼리",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 A동 1층",
        icon: "diamond"
    },

    // -----------------------------------------------------------
    // [10] 쇼핑 - 기념품
    // -----------------------------------------------------------
    {
        id: 71,
        category: "쇼핑",
        name: "오키나와 마켓",
        benefit: "3,000엔 이상 굿즈 증정",
        desc: "과자 및 캐릭터 굿즈",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드 시사이드 1층",
        icon: "shopping_bag"
    },
    {
        id: 72,
        category: "쇼핑",
        name: "오카노 잇폰마츠",
        benefit: "일정 금액 이상 무료배송/에코백",
        desc: "오키나와 특산품",
        hours: "10:00 ~ 22:00",
        location: "드래곤 팰리스 1층",
        icon: "shopping_bag"
    },
    {
        id: 73,
        category: "쇼핑",
        name: "오키나와야",
        benefit: "1,000엔 이상 별모래 증정",
        desc: "종합 기념품 샵",
        hours: "09:30 ~ 21:30",
        location: "아메리칸 데포 A동 1층",
        icon: "shopping_bag"
    },
    {
        id: 74,
        category: "쇼핑",
        name: "오키나와야 아와모리 창고",
        benefit: "3,000엔 이상 미니 보틀 증정",
        desc: "전통주 아와모리 전문",
        hours: "10:00 ~ 21:30",
        location: "아메리칸 데포 A동 1층",
        icon: "liquor"
    },
    {
        id: 75,
        category: "쇼핑",
        name: "파인애플 파인애플",
        benefit: "3,000엔 이상 아이스크림 증정",
        desc: "파인애플 굿즈 전문",
        hours: "11:00 ~ 20:00",
        location: "데포 센트럴 1층",
        icon: "shopping_bag"
    },
    {
        id: 76,
        category: "쇼핑",
        name: "메이드 인 오키나와",
        benefit: "3,000엔 이상 5% 할인",
        desc: "엄선된 특산품",
        hours: "11:00 ~ 19:00",
        location: "데포 센트럴 E동",
        icon: "shopping_bag"
    },

    // -----------------------------------------------------------
    // [11] 쇼핑 - 잡화 & 기타
    // -----------------------------------------------------------
    {
        id: 77,
        category: "쇼핑",
        name: "데포 아일랜드 (수입잡화)",
        benefit: "3,000엔 이상 굿즈 증정",
        desc: "미국 직수입 잡화",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 A동 1층",
        icon: "store"
    },
    {
        id: 78,
        category: "쇼핑",
        name: "미하마 유리 소라 (SORA)",
        benefit: "5,000엔 이상 소품 케이스 증정",
        desc: "유리 공예품",
        hours: "12:00 ~ 21:00",
        location: "데포 아일랜드 A동 1층",
        icon: "category"
    },
    {
        id: 79,
        category: "쇼핑",
        name: "해양창고 21",
        benefit: "전품목 5% 할인 (현금만)",
        desc: "저렴한 잡화와 코스메틱",
        hours: "10:30 ~ 20:00",
        location: "데포 아일랜드 B동 1층",
        icon: "store"
    },
    {
        id: 80,
        category: "쇼핑",
        name: "야마츄 본포",
        benefit: "오리지널 키홀더 증정",
        desc: "오키나와 술과 식품",
        hours: "10:00 ~ 20:00",
        location: "데포 아일랜드 1층",
        icon: "liquor"
    },
    {
        id: 81,
        category: "쇼핑",
        name: "SOHO (소호)",
        benefit: "3,000엔 이상 굿즈 증정",
        desc: "밀리터리 및 수입 의류",
        hours: "11:00 ~ 20:00",
        location: "아메리칸 데포 C동 1층",
        icon: "checkroom"
    },
    {
        id: 82,
        category: "쇼핑",
        name: "아메리칸 데포",
        benefit: "3,000엔 이상 굿즈 증정",
        desc: "아메리칸 빈티지 샵",
        hours: "10:00 ~ 21:00",
        location: "아메리칸 데포 A동 1층",
        icon: "store"
    },
    {
        id: 83,
        category: "쇼핑",
        name: "레더 베이스",
        benefit: "5,000엔 이상 가방 구매 시 소품",
        desc: "가죽 제품 전문",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 E동 1층",
        icon: "shopping_bag"
    },
    {
        id: 8301,
        category: "쇼핑",
        name: "Leather & Wood",
        benefit: "5,000엔 이상 키커버 증정",
        desc: "가죽과 나무 공예",
        hours: "11:00 ~ 21:00",
        location: "데포 아일랜드 E동 1층",
        icon: "carpenter"
    },
    {
        id: 84,
        category: "쇼핑",
        name: "카사리나 (CASARINA)",
        benefit: "5% 할인",
        desc: "오리지널 잡화점",
        hours: "11:00 ~ 19:00",
        location: "차탄 (미하마 51-3)",
        icon: "store"
    },
    {
        id: 85,
        category: "쇼핑",
        name: "남국잡화 티다",
        benefit: "1,000엔 이상 스티커 증정",
        desc: "트로피컬 잡화",
        hours: "12:00 ~ 19:00",
        location: "레쿠 호텔 메인 1층",
        icon: "beach_access"
    },
    {
        id: 86,
        category: "뷰티",
        name: "슈리비누 (Sui Savon)",
        benefit: "스킨케어 샘플 증정",
        desc: "천연 수제 비누",
        hours: "10:00 ~ 20:00",
        location: "데포 아일랜드 A동 1층",
        icon: "soap"
    },

    // -----------------------------------------------------------
    // [12] 액티비티 & 놀거리
    // -----------------------------------------------------------
    {
        id: 87,
        category: "액티비티",
        name: "GiGO (기고 게임센터)",
        benefit: "메달 1.5배 증량",
        desc: "대형 게임 센터",
        hours: "10:00 ~ 24:00",
        location: "시사이드 스퀘어 1층",
        icon: "sports_esports"
    },
    {
        id: 88,
        category: "액티비티",
        name: "에너지 빅 볼 (볼링)",
        benefit: "1게임 할인",
        desc: "락 볼링장",
        hours: "10:00(주말 09:00) ~ 24:00",
        location: "시사이드 스퀘어 2층",
        icon: "sports_baseball"
    },
    {
        id: 89,
        category: "액티비티",
        name: "조이 정글 (게임)",
        benefit: "메달 20개 또는 UFO캐쳐 1회",
        desc: "아케이드 게임",
        hours: "10:00 ~ 24:00",
        location: "드래곤 팰리스",
        icon: "videogame_asset"
    },
    {
        id: 90,
        category: "액티비티",
        name: "츄라유 온천",
        benefit: "타월 무료 대여",
        desc: "천연 온천과 수영장",
        hours: "07:00 ~ 23:00",
        location: "비치 타워 인근",
        icon: "pool"
    },
    {
        id: 91,
        category: "액티비티",
        name: "매직 오션",
        benefit: "입장료 할인 (성인 500엔 등)",
        desc: "매직 디너 쇼",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 4층",
        icon: "theater_comedy"
    },
    {
        id: 92,
        category: "액티비티",
        name: "소드 피쉬 (마린)",
        benefit: "투어 15% 할인",
        desc: "푸른 동굴 스노쿨링",
        hours: "08:00 ~ 20:00",
        location: "온나손 마에다",
        icon: "scuba_diving"
    },
    {
        id: 93,
        category: "액티비티",
        name: "슈하리 바이크",
        benefit: "자전거 렌탈 10% 할인",
        desc: "자전거 대여",
        hours: "11:00 ~ 18:00 (주말 ~19:00)",
        location: "레쿠 호텔 프리미어 1층",
        icon: "pedal_bike"
    },
    {
        id: 94,
        category: "기타",
        name: "라 레이아 (펫 호텔)",
        benefit: "이용료 5% 할인",
        desc: "반려견 호텔",
        hours: "12:00 ~ 19:00",
        location: "차탄 (미하마 15-31)",
        icon: "pets"
    },

    // -----------------------------------------------------------
    // [13] 뷰티 & 스파
    // -----------------------------------------------------------
    {
        id: 95,
        category: "뷰티",
        name: "힐링 포레스트 슈로",
        benefit: "시술 메뉴 10% 할인",
        desc: "릴렉스 에스테틱",
        hours: "11:00 ~ 19:30",
        location: "차탄 빌라 1층",
        icon: "spa"
    },
    {
        id: 96,
        category: "뷰티",
        name: "엠 그레이스",
        benefit: "정가 상품 10% 할인",
        desc: "토탈 뷰티 살롱",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드 시사이드 2층",
        icon: "face"
    },
    {
        id: 97,
        category: "뷰티",
        name: "러브 네일 오키나와",
        benefit: "음료 1잔 서비스",
        desc: "네일 아트",
        hours: "10:00 ~ 20:00",
        location: "디스토션 시사이드 3층",
        icon: "brush"
    },
    {
        id: 98,
        category: "뷰티",
        name: "셀레스테 스파",
        benefit: "45분 코스 특별가",
        desc: "호텔 내 고급 스파",
        hours: "13:00 ~ 22:00",
        location: "레쿠 호텔 메인 8층",
        icon: "spa"
    },
    {
        id: 99,
        category: "쇼핑",
        name: "오키츄 (OKICHU)",
        benefit: "섬조리 구매 시 키홀더 증정",
        desc: "커스텀 샌들",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드 E동 1층",
        icon: "foot_print" // 구글 아이콘에 foot_print가 없을 경우 'do_not_step' 또는 'shoes'
    },
    {
        id: 100,
        category: "쇼핑",
        name: "미하마 유리 칸자시야",
        benefit: "3,000엔 이상 소품 선물",
        desc: "일본 전통 비녀",
        hours: "12:00 ~ 21:00",
        location: "아메리칸 데포 C동 1층",
        icon: "stylus"
    },
    {
        id: 101,
        category: "뷰티",
        name: "류 스파 (Ryu Spa)",
        benefit: "1,100엔 이상 마스크팩 증정",
        desc: "해양 심층수 화장품",
        hours: "10:00 ~ 21:00",
        location: "데포 센트럴 1층",
        icon: "water_drop"
    }
];