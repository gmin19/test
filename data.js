/**
 * 베셀 & 레쿠 오키나와 쿠폰북 데이터 (구글맵 연동 완료)
 * - mapUrl: 구글 지도 검색 링크 추가
 */

const couponData = [
    // [1] 호텔 레스토랑
    {
        id: 1,
        category: "맛집",
        name: "힐튼 수리윤 (뷔페)",
        benefit: "15% 할인 (런치/디너)",
        desc: "오키나와 & 세계 요리 뷔페",
        hours: "런치 11:30~15:00 / 디너 17:30~21:30",
        location: "힐튼 호텔",
        icon: "buffet-breakfast",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hilton+Okinawa+Chatan+Resort+SURIYUN"
    },
    {
        id: 2,
        category: "맛집",
        name: "힐튼 코렌테 (이탈리안)",
        benefit: "15% 할인 (런치/디너)",
        desc: "정통 이탈리안 레스토랑",
        hours: "런치 11:30~15:00 / 디너 17:30~22:30",
        location: "힐튼 호텔",
        icon: "pizza",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hilton+Okinawa+Chatan+Resort+Corrente"
    },

    // [2] 오키나와 요리
    {
        id: 3,
        category: "맛집",
        name: "키지무나 (타코라이스)",
        benefit: "음료 1잔 무료 (8명까지)",
        desc: "오무타코가 유명한 맛집",
        hours: "11:00 ~ 22:00",
        location: "데포 아일랜드 C동 2층",
        icon: "mexican-food",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Taco+Rice+Cafe+Kijimuna+Depot+Island"
    },
    {
        id: 4,
        category: "맛집",
        name: "카메젠 식당",
        benefit: "5% 할인",
        desc: "오키나와 소바",
        hours: "11:00 ~ 21:00",
        location: "데포 아일랜드 2층",
        icon: "noodles",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kamezen+Shokudo+Chatan"
    },
    {
        id: 5,
        category: "맛집",
        name: "츄라하마 식당",
        benefit: "음료 1잔 서비스 (최대 10잔)",
        desc: "오키나와 가정식",
        hours: "12:00 ~ 23:00",
        location: "디스토션 시사이드 3층",
        icon: "rice-bowl",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Churahama+Shokudo+Chatan"
    },
    {
        id: 6,
        category: "맛집",
        name: "차탄 둔치",
        benefit: "과실 식초 1잔 무료",
        desc: "오키나와 요리 주점",
        hours: "17:00 ~ 23:00",
        location: "시사이드 3층",
        icon: "sake",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Chatan+Denchi"
    },
    {
        id: 7,
        category: "맛집",
        name: "미하마 둔치",
        benefit: "과실 식초 1잔 무료",
        desc: "이자카야",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 2층",
        icon: "sake",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mihama+Denchi+Chatan"
    },
    {
        id: 8,
        category: "맛집",
        name: "라이브 주점 카나산야",
        benefit: "바다포도 소접시 서비스",
        desc: "라이브 공연 이자카야",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 3층",
        icon: "music-note",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kanasanya+Chatan"
    },
    {
        id: 9,
        category: "맛집",
        name: "시만츄 (Shimanchu)",
        benefit: "음료 1잔 서비스",
        desc: "오키나와 향토 요리",
        hours: "16:00 ~ 22:00",
        location: "레쿠 호텔 2층",
        icon: "rice-bowl",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Shimanchu+Lequ+Okinawa"
    },
    {
        id: 10,
        category: "맛집",
        name: "Funka Delica (주먹밥)",
        benefit: "음료 1잔 서비스",
        desc: "스팸 계란 주먹밥",
        hours: "16:00 ~ 22:00",
        location: "차탄 (미하마 34-2)",
        icon: "onigiri",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pork+Tamago+Onigiri+Funka+Delica"
    },
    {
        id: 11,
        category: "맛집",
        name: "오키나와 소바 키세키",
        benefit: "10% 할인 (주류 제외)",
        desc: "조개 육수 소바",
        hours: "11:00 ~ 21:00",
        location: "디스토션 시사이드 1층",
        icon: "seafood-noodles",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Okinawa+Soba+Kiseki+Chatan"
    },

    // [3] 스테이크 & 햄버거 & 카레
    {
        id: 12,
        category: "맛집",
        name: "점보 스테이크 한스 (미하마)",
        benefit: "10% 할인",
        desc: "푸짐한 스테이크",
        hours: "11:00 ~ 23:00",
        location: "데포 아일랜드 A동 2층",
        icon: "steak-medium",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Jumbo+Steak+Han's+Mihama"
    },
    {
        id: 13,
        category: "맛집",
        name: "스테이크 하우스 BB",
        benefit: "음료 1잔 또는 토핑 무료",
        desc: "가성비 스테이크",
        hours: "11:30 ~ 21:00",
        location: "데포 아일랜드 A동 2층",
        icon: "grill",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Steak+House+BB+Chatan"
    },
    {
        id: 14,
        category: "맛집",
        name: "캡틴스 인 (Captain's Inn)",
        benefit: "코스 주문 시 새우 2마리 서비스",
        desc: "철판구이 스테이크",
        hours: "11:30 ~ 22:00",
        location: "구르메관 2층",
        icon: "chef-hat",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Captain's+Inn+Mihama"
    },
    {
        id: 15,
        category: "맛집",
        name: "블루 오션 스테이크",
        benefit: "웰컴 드링크",
        desc: "오션뷰 스테이크",
        hours: "17:00 ~ 23:00",
        location: "차탄 (미하마 51-2)",
        icon: "wine-glass",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue+Ocean+Steak+Okinawa"
    },
    {
        id: 16,
        category: "맛집",
        name: "스테이크 하우스 88",
        benefit: "드링크바 무료",
        desc: "전통 스테이크 하우스",
        hours: "11:00 ~ 23:00",
        location: "앳 차탄 2층",
        icon: "cow",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Steak+House+88+Chatan"
    },
    {
        id: 17,
        category: "맛집",
        name: "비피스 (BEEFY'S)",
        benefit: "10% 할인",
        desc: "씨사이드 스테이크",
        hours: "11:30 ~ 22:00",
        location: "시사이드 4층",
        icon: "steak",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Seaside+Steak+Beefy's"
    },
    {
        id: 18,
        category: "맛집",
        name: "점보 스테이크 한스 (센트럴)",
        benefit: "10% 할인 또는 음료",
        desc: "센트럴점 스테이크",
        hours: "11:00 ~ 23:00",
        location: "데포 센트럴 2층",
        icon: "steak-medium",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Jumbo+Steak+Han's+Depot+Central"
    },
    {
        id: 19,
        category: "맛집",
        name: "차탄 버거 베이스",
        benefit: "토핑 1개 무료",
        desc: "수제 버거",
        hours: "11:00 ~ 21:00",
        location: "시사이드 1층",
        icon: "hamburger",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Chatan+Burger+Base+Atabies"
    },
    {
        id: 20,
        category: "맛집",
        name: "제타 버거 마켓",
        benefit: "아메리카노 1잔 서비스",
        desc: "빈티지 버거 카페",
        hours: "11:00 ~ 22:00",
        location: "디스토션 패션 2층",
        icon: "hamburger",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Zetta+Burger+Market"
    },
    {
        id: 21,
        category: "맛집",
        name: "BRUAL (브루알)",
        benefit: "10% 할인",
        desc: "버거 & 비어",
        hours: "10:00 ~ 21:00",
        location: "시사이드 2층",
        icon: "beer",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Brual+Chatan"
    },
    {
        id: 22,
        category: "맛집",
        name: "너티 바이 네이처",
        benefit: "음료 1잔 무료",
        desc: "건강한 버거",
        hours: "11:00 ~ 19:30",
        location: "차탄 (미하마 51-3)",
        icon: "hamburger",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Naughty+By+Nature+Chatan"
    },
    {
        id: 23,
        category: "맛집",
        name: "발리우드 드림스",
        benefit: "10% 할인",
        desc: "인도 커리",
        hours: "11:00 ~ 21:00",
        location: "데포 아일랜드 A동",
        icon: "curry",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Bollywood+Dreams+Okinawa"
    },
    {
        id: 24,
        category: "맛집",
        name: "호라이즌 커리 웍스",
        benefit: "10% 할인",
        desc: "오션뷰 카레",
        hours: "11:00 ~ 22:00",
        location: "디스토션 시사이드 2층",
        icon: "curry",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Horizon+Curry+Works"
    },
    {
        id: 25,
        category: "맛집",
        name: "발리우드 주얼",
        benefit: "10% 할인",
        desc: "인도 커리",
        hours: "11:00 ~ 21:30",
        location: "시사이드 스퀘어 1층",
        icon: "curry",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Bollywood+Jewel+Chatan"
    },

    // [4] 카페 & 디저트
    {
        id: 26,
        category: "카페",
        name: "Vongo & Anchor",
        benefit: "10% 할인",
        desc: "로스터리 카페",
        hours: "08:00 ~ 22:00",
        location: "베셀 호텔 별관",
        icon: "coffee-to-go",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Vongo+and+Anchor"
    },
    {
        id: 27,
        category: "카페",
        name: "하논 (Hanon)",
        benefit: "아이스크림 서비스",
        desc: "팬케이크 카페",
        hours: "09:00 ~ 19:00",
        location: "오크 패션 2층",
        icon: "pancakes",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Seaside+Cafe+Hanon"
    },
    {
        id: 28,
        category: "카페",
        name: "클라이맥스 커피",
        benefit: "10% 할인 (현금만)",
        desc: "머핀 & 커피",
        hours: "09:30 ~ 22:00",
        location: "시사이드 1층",
        icon: "muffin",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Climax+Coffee+Chatan"
    },
    {
        id: 29,
        category: "카페",
        name: "MaiMalu (마이마루)",
        benefit: "음료 1잔 서비스",
        desc: "카페 & 바",
        hours: "15:00 ~ 24:00",
        location: "디스토션 시사이드 1층",
        icon: "cocktail",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=MaiMalu+Chatan"
    },
    {
        id: 30,
        category: "카페",
        name: "지바고 커피",
        benefit: "10% 할인 (레쿠 투숙객)",
        desc: "인기 로스터리",
        hours: "07:00 ~ 22:00",
        location: "레쿠 호텔 1층",
        icon: "espresso-cup",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Zhyvago+Coffee+Roastery"
    },
    {
        id: 31,
        category: "카페",
        name: "Caravana (카라바나)",
        benefit: "10% 할인 (레쿠 투숙객)",
        desc: "아이스크림 & 도넛",
        hours: "11:00 ~ 22:00",
        location: "레쿠 호텔 1층",
        icon: "doughnut",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Caravana+Ice+Cream"
    },
    {
        id: 32,
        category: "카페",
        name: "오니얀마 커피",
        benefit: "아이스크림 서비스",
        desc: "스페셜티 커피",
        hours: "09:30 ~ 19:00",
        location: "디스토션 패션 2층",
        icon: "coffee-bean",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Oniyanma+Coffee+Chatan"
    },
    {
        id: 33,
        category: "카페",
        name: "블루씰 아이스크림",
        benefit: "주니어 스쿱 증정",
        desc: "오키나와 아이스크림",
        hours: "11:00 ~ 21:00",
        location: "시사이드 2층",
        icon: "ice-cream-cone",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue+Seal+Depot+Island+Seaside"
    },
    {
        id: 34,
        category: "쇼핑",
        name: "바움쿠헨 산토미",
        benefit: "1,000엔 이상 5% 할인",
        desc: "수제 바움쿠헨",
        hours: "10:00 ~ 18:00",
        location: "오크 패션 1층",
        icon: "cake",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fukugiya+Baumkuchen+Chatan"
    },
    {
        id: 35,
        category: "쇼핑",
        name: "카메 안다기",
        benefit: "도넛 1개 증정",
        desc: "오키나와 도넛",
        hours: "11:00 ~ 20:00",
        location: "레쿠 호텔 1층",
        icon: "doughnut",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kame+Andagi+Chatan"
    },
    {
        id: 36,
        category: "카페",
        name: "가마쿠라 (와라비모찌)",
        benefit: "꿀(미츠) 서비스",
        desc: "전통 디저트",
        hours: "10:30 ~ 20:00",
        location: "데포 아일랜드 A동",
        icon: "green-tea",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kamakura+Warabimochi+Chatan"
    },
    {
        id: 37,
        category: "카페",
        name: "BUNBUN (분분)",
        benefit: "음료 1잔 무료",
        desc: "과일 샌드위치",
        hours: "08:00 ~ 20:00",
        location: "플라자 F",
        icon: "sandwich",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Fruit+Bunbun"
    },

    // [5] 일식 / 고기 / 해산물 / 양식
    {
        id: 38,
        category: "맛집",
        name: "아구노 카쿠레가",
        benefit: "10% 할인",
        desc: "흑돼지 샤브샤브",
        hours: "17:00 ~ 22:30",
        location: "차탄",
        icon: "pot",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Agu+no+Kakurega+Chatan"
    },
    {
        id: 39,
        category: "맛집",
        name: "텐진 야키니쿠",
        benefit: "음료 1잔 서비스",
        desc: "하카타 야키니쿠",
        hours: "11:30 ~ 23:00",
        location: "아메리칸 데포 C동",
        icon: "grill",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hakata+Yakiniku+Tenjin"
    },
    {
        id: 40,
        category: "맛집",
        name: "야키니쿠 복우 (Fukugyu)",
        benefit: "지정 음료 서비스",
        desc: "와규 야키니쿠",
        hours: "11:00 ~ 23:00",
        location: "데포 아일랜드 E동",
        icon: "cow",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Yakiniku+Fukugyu"
    },
    {
        id: 41,
        category: "맛집",
        name: "증기 해산물",
        benefit: "웰컴 드링크",
        desc: "해산물 찜",
        hours: "11:00 ~ 23:00",
        location: "차탄",
        icon: "crab",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Steam+Seafood+Chatan"
    },
    {
        id: 42,
        category: "맛집",
        name: "규부시 (Gyuubushi)",
        benefit: "10% 할인",
        desc: "소고기 요리",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 6층",
        icon: "meat",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Gyubushi+Chatan"
    },
    {
        id: 43,
        category: "맛집",
        name: "야키니쿠 리키오",
        benefit: "음료 또는 디저트",
        desc: "야키니쿠",
        hours: "17:00 ~ 23:00",
        location: "디스토션 패션 2층",
        icon: "grill",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Yakiniku+Rikio"
    },
    {
        id: 44,
        category: "맛집",
        name: "지루야 (Jiruya)",
        benefit: "음료 1잔 무료",
        desc: "이자카야/마제소바",
        hours: "영업시간 문의",
        location: "앳 차탄 1층",
        icon: "noodles",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Jiruya+Chatan"
    },
    {
        id: 45,
        category: "맛집",
        name: "선라이즈 (SUNRISE)",
        benefit: "15% 할인",
        desc: "치즈 스테이크",
        hours: "07:30 ~ 22:00",
        location: "시사이드 스퀘어",
        icon: "cheese",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sunrise+Chatan"
    },
    {
        id: 46,
        category: "맛집",
        name: "함바그 마스오",
        benefit: "10% 할인 (룸키)",
        desc: "함박 스테이크",
        hours: "11:30 ~ 21:00",
        location: "앳 차탄 1층",
        icon: "steak",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hamburg+Steak+Masuo"
    },
    {
        id: 47,
        category: "맛집",
        name: "솔리스 그란데",
        benefit: "아이스크림 3종 서비스",
        desc: "오션뷰 이탈리안",
        hours: "11:30 ~ 22:00",
        location: "베셀 호텔 별관",
        icon: "pizza",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Solis+Grande+Chatan"
    },
    {
        id: 48,
        category: "맛집",
        name: "레드 랍스터",
        benefit: "음료/와인 1잔",
        desc: "씨푸드 레스토랑",
        hours: "11:00 ~ 22:00",
        location: "차탄",
        icon: "lobster",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Red+Lobster+Okinawa+Chatan"
    },
    {
        id: 49,
        category: "맛집",
        name: "토니 로마스",
        benefit: "음료/맥주 1잔",
        desc: "베이비 백 립",
        hours: "17:00 ~ 21:30",
        location: "차탄",
        icon: "ribs",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Tony+Roma's+Mihama"
    },
    {
        id: 50,
        category: "맛집",
        name: "카프리쵸사",
        benefit: "음료/와인 1잔",
        desc: "이탈리안 파스타",
        hours: "11:00 ~ 21:00",
        location: "차탄",
        icon: "spaghetti",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Capricciosa+Mihama"
    },
    {
        id: 51,
        category: "맛집",
        name: "포켓 팜",
        benefit: "음료 100엔 할인",
        desc: "스낵 & 음료",
        hours: "10:00 ~ 21:00",
        location: "아메리칸 데포 B동",
        icon: "hot-dog",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pocke+Farm+Chatan"
    },
    {
        id: 52,
        category: "맛집",
        name: "벤슨스 (BENSON'S)",
        benefit: "토핑 1개 무료",
        desc: "핫도그 맛집",
        hours: "10:00 ~ 21:00",
        location: "아메리칸 데포 B동",
        icon: "hot-dog",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Benson's+Hotdog"
    },
    {
        id: 53,
        category: "맛집",
        name: "타코스 카페 타코로코",
        benefit: "음료 1잔 서비스",
        desc: "타코 전문점",
        hours: "11:00 ~ 22:00",
        location: "아메리칸 데포 B동",
        icon: "taco",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Taco+Loco+Chatan"
    },
    {
        id: 54,
        category: "맛집",
        name: "가츠 (Guts)",
        benefit: "음료 증정",
        desc: "프라이드 치킨",
        hours: "12:00 ~ 21:00",
        location: "데포 센트럴 2층",
        icon: "fried-chicken",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Chicken+House+Guts"
    },
    {
        id: 55,
        category: "맛집",
        name: "파오파오 더 엘리펀트",
        benefit: "5% 할인",
        desc: "태국 요리",
        hours: "12:00 ~ 21:00",
        location: "차탄",
        icon: "elephant",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pao+Pao+The+Elephant"
    },
    {
        id: 56,
        category: "맛집",
        name: "라 페스카리나",
        benefit: "10% 할인 (3천엔 이상)",
        desc: "해산물 이탈리안",
        hours: "18:00 ~ 23:00",
        location: "레쿠 호텔 1층",
        icon: "fish",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Pesciplina+Chatan"
    },
    {
        id: 57,
        category: "맛집",
        name: "피제리아 바 아리치아",
        benefit: "음료 200엔 할인",
        desc: "화덕 피자",
        hours: "11:00 ~ 22:00",
        location: "시사이드 1층",
        icon: "pizza",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pizzeria+Bar+Ariccia"
    },
    {
        id: 58,
        category: "맛집",
        name: "엘 파소 (EL PASO)",
        benefit: "음료 200엔 할인",
        desc: "멕시칸 레스토랑",
        hours: "11:00 ~ 22:00",
        location: "데포 아일랜드 D동",
        icon: "cactus",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mexican+Food+El+Paso"
    },

    // [6] 이자카야 & 바
    {
        id: 59,
        category: "맛집",
        name: "Oh Yeah! (오 예)",
        benefit: "뱀술 1잔 서비스",
        desc: "카페 & 바",
        hours: "17:00 ~ 03:00",
        location: "오크 패션 2층",
        icon: "cocktail",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+and+Bar+Oh+Yeah"
    },
    {
        id: 60,
        category: "맛집",
        name: "이자카야 사이 (Sai)",
        benefit: "안주 1개 서비스",
        desc: "이자카야",
        hours: "17:00 ~ 02:00",
        location: "구르메관 2층",
        icon: "sake",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Izakaya+Sai+Chatan"
    },
    {
        id: 61,
        category: "맛집",
        name: "시라카와 상점",
        benefit: "2번째 음료 무료",
        desc: "이자카야",
        hours: "17:00 ~ 23:00",
        location: "앳 차탄 1층",
        icon: "beer",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Shirakawa+Shoten+Chatan"
    },
    {
        id: 62,
        category: "맛집",
        name: "아이리쉬 펍 하우디",
        benefit: "안주 1개 선물",
        desc: "아이리쉬 펍",
        hours: "17:00 ~ 01:00",
        location: "데포 센트럴 5층",
        icon: "beer-glass",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Irish+Pub+Howdy"
    },

    // [7] 쇼핑 - 의류 & 액세서리
    {
        id: 63,
        category: "쇼핑",
        name: "RUN OKI",
        benefit: "10% 할인",
        desc: "오키나와 티셔츠",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 B동",
        icon: "t-shirt",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=RUN+OKI+Depot+Island"
    },
    {
        id: 64,
        category: "쇼핑",
        name: "리스펙트 (Respect)",
        benefit: "5% 할인",
        desc: "캐주얼 의류",
        hours: "11:00 ~ 21:00",
        location: "시사이드 스퀘어",
        icon: "t-shirt",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Respect+Chatan+Seaside"
    },
    {
        id: 65,
        category: "쇼핑",
        name: "스킵 (SKIP)",
        benefit: "5% 할인",
        desc: "키즈 의류",
        hours: "11:00 ~ 20:00",
        location: "아메리칸 데포 B동",
        icon: "baby-onesie",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SKIP+American+Depot"
    },
    {
        id: 66,
        category: "쇼핑",
        name: "로얄 오키나와",
        benefit: "굿즈 증정",
        desc: "오키나와 셔츠",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드",
        icon: "shirt",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Royal+Okinawa+Chatan"
    },
    {
        id: 67,
        category: "쇼핑",
        name: "플레이바 (Flava)",
        benefit: "10% 할인",
        desc: "모자 전문점",
        hours: "10:00 ~ 22:00",
        location: "데포 아일랜드 C동",
        icon: "baseball-cap",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Flava+Hat+Depot+Island"
    },
    {
        id: 68,
        category: "쇼핑",
        name: "다즐 (Dazzle)",
        benefit: "10% 할인",
        desc: "패션 의류",
        hours: "10:00 ~ 21:00",
        location: "디스토션 패션",
        icon: "dress",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Dazzle+Chatan"
    },
    {
        id: 69,
        category: "쇼핑",
        name: "서던 델리 아구",
        benefit: "엽서 증정",
        desc: "오리지널 티셔츠",
        hours: "11:00 ~ 19:00",
        location: "디스토션 시사이드",
        icon: "t-shirt",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Southern+Deli+Agoo"
    },
    {
        id: 70,
        category: "쇼핑",
        name: "쵸시치야 1호점",
        benefit: "책갈피 증정",
        desc: "호타루 유리 공예",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드 A동",
        icon: "crystal",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Choshichiya+Depot+Island"
    },
    {
        id: 71,
        category: "쇼핑",
        name: "아마츠부",
        benefit: "5% 할인",
        desc: "파워스톤",
        hours: "12:00 ~ 21:00",
        location: "데포 아일랜드 A동",
        icon: "gem-stone",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Amatsubu+Chatan"
    },
    {
        id: 72,
        category: "쇼핑",
        name: "서덜리 (Southerly)",
        benefit: "10% 할인",
        desc: "액세서리",
        hours: "11:30 ~ 19:30",
        location: "시사이드 1층",
        icon: "pearl",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Southerly+Chatan"
    },
    {
        id: 73,
        category: "쇼핑",
        name: "스플래쉬 오키나와",
        benefit: "잡화 증정",
        desc: "오키나와 잡화",
        hours: "10:00 ~ 21:30",
        location: "디스토션 패션",
        icon: "starfish",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Splash+Okinawa+Mihama"
    },
    {
        id: 74,
        category: "쇼핑",
        name: "쵸시치야 2호점",
        benefit: "책갈피 증정",
        desc: "호타루 유리",
        hours: "11:00 ~ 20:00",
        location: "데포 센트럴",
        icon: "crystal",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Choshichiya+Depot+Central"
    },
    {
        id: 75,
        category: "쇼핑",
        name: "오하나 (OHANA)",
        benefit: "할인 또는 포장",
        desc: "액세서리",
        hours: "11:00 ~ 21:00",
        location: "데포 아일랜드 A동",
        icon: "flower",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=OHANA+Jewelry+Chatan"
    },
    {
        id: 76,
        category: "쇼핑",
        name: "라군 (Lagoon)",
        benefit: "5% 할인",
        desc: "리조트 주얼리",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 A동",
        icon: "necklace",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Lagoon+Okinawa+Jewelry"
    },

    // [8] 쇼핑 - 기념품 & 잡화
    {
        id: 77,
        category: "쇼핑",
        name: "오키나와 마켓",
        benefit: "굿즈 증정",
        desc: "기념품 & 과자",
        hours: "11:00 ~ 20:00",
        location: "시사이드 1층",
        icon: "shopping-bag",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Okinawa+Market+Depot+Island"
    },
    {
        id: 78,
        category: "쇼핑",
        name: "오카노 잇폰마츠",
        benefit: "무료배송/에코백",
        desc: "특산품",
        hours: "10:00 ~ 22:00",
        location: "드래곤 팰리스",
        icon: "gift",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Okano+Ipponmatsu"
    },
    {
        id: 79,
        category: "쇼핑",
        name: "오키나와야",
        benefit: "별모래 증정",
        desc: "종합 기념품",
        hours: "09:30 ~ 21:30",
        location: "아메리칸 데포 A동",
        icon: "gift",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Okinawaya+Mihama"
    },
    {
        id: 80,
        category: "쇼핑",
        name: "아와모리 창고",
        benefit: "미니 보틀 증정",
        desc: "전통주 전문",
        hours: "10:00 ~ 21:30",
        location: "아메리칸 데포 A동",
        icon: "bottle-of-water",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Okinawaya+Awamori+Kura"
    },
    {
        id: 81,
        category: "쇼핑",
        name: "파인애플 파인애플",
        benefit: "아이스크림 증정",
        desc: "파인애플 굿즈",
        hours: "11:00 ~ 20:00",
        location: "데포 센트럴",
        icon: "pineapple",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pineapple+Pineapple+Chatan"
    },
    {
        id: 82,
        category: "쇼핑",
        name: "메이드 인 오키나와",
        benefit: "5% 할인",
        desc: "특산품",
        hours: "11:00 ~ 19:00",
        location: "데포 센트럴",
        icon: "japan-map",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Made+In+Okinawa+Chatan"
    },
    {
        id: 83,
        category: "쇼핑",
        name: "데포 아일랜드 (수입)",
        benefit: "굿즈 증정",
        desc: "미국 수입 잡화",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 A동",
        icon: "shopping-bag",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Depot+Island+Chatan"
    },
    {
        id: 84,
        category: "쇼핑",
        name: "미하마 유리 소라",
        benefit: "소품 케이스 증정",
        desc: "유리 공예",
        hours: "12:00 ~ 21:00",
        location: "데포 아일랜드 A동",
        icon: "wine-glass",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mihama+Glass+Sora"
    },
    {
        id: 85,
        category: "쇼핑",
        name: "해양창고 21",
        benefit: "5% 할인",
        desc: "잡화 & 화장품",
        hours: "10:30 ~ 20:00",
        location: "데포 아일랜드 B동",
        icon: "cosmetics",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kaiyokura+21"
    },
    {
        id: 86,
        category: "쇼핑",
        name: "야마츄 본포",
        benefit: "키홀더 증정",
        desc: "전통주 & 식품",
        hours: "10:00 ~ 20:00",
        location: "데포 아일랜드",
        icon: "sake",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Yamachu+Honpo"
    },
    {
        id: 87,
        category: "쇼핑",
        name: "SOHO (소호)",
        benefit: "굿즈 증정",
        desc: "수입 의류",
        hours: "11:00 ~ 20:00",
        location: "아메리칸 데포 C동",
        icon: "trousers",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SOHO+Chatan"
    },
    {
        id: 88,
        category: "쇼핑",
        name: "아메리칸 데포",
        benefit: "굿즈 증정",
        desc: "빈티지 샵",
        hours: "10:00 ~ 21:00",
        location: "아메리칸 데포 A동",
        icon: "jeans",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=American+Depot+Chatan"
    },
    {
        id: 89,
        category: "쇼핑",
        name: "레더 베이스",
        benefit: "가죽 소품 증정",
        desc: "가죽 제품",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 E동",
        icon: "wallet",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Leather+Base+Chatan"
    },
    {
        id: 90,
        category: "쇼핑",
        name: "Leather & Wood",
        benefit: "키 커버 증정",
        desc: "가죽 & 나무 공예",
        hours: "11:00 ~ 21:00",
        location: "데포 아일랜드 E동",
        icon: "carpenter",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Leather+and+Wood+Chatan"
    },
    {
        id: 91,
        category: "쇼핑",
        name: "카사리나 (CASARINA)",
        benefit: "5% 할인",
        desc: "잡화점",
        hours: "11:00 ~ 19:00",
        location: "차탄 (미하마 51-3)",
        icon: "gift",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Casarina+Chatan"
    },
    {
        id: 92,
        category: "쇼핑",
        name: "남국잡화 티다",
        benefit: "스티커 증정",
        desc: "남국 잡화",
        hours: "12:00 ~ 19:00",
        location: "레쿠 호텔 1층",
        icon: "sun",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Nangoku+Zakka+Tida"
    },
    {
        id: 93,
        category: "뷰티",
        name: "슈리비누",
        benefit: "샘플 증정",
        desc: "수제 비누",
        hours: "10:00 ~ 20:00",
        location: "데포 아일랜드 A동",
        icon: "soap",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SuiSavon+Chura+Soap+Depot+Island"
    },

    // [9] 액티비티 & 놀거리
    {
        id: 94,
        category: "액티비티",
        name: "GiGO 게임센터",
        benefit: "메달 1.5배",
        desc: "대형 게임센터",
        hours: "10:00 ~ 24:00",
        location: "시사이드 스퀘어",
        icon: "controller",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=GiGO+Chatan"
    },
    {
        id: 95,
        category: "액티비티",
        name: "에너지 빅 볼",
        benefit: "1게임 할인",
        desc: "볼링장",
        hours: "10:00 ~ 24:00",
        location: "시사이드 스퀘어",
        icon: "bowling",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Enagic+Bowl+Mihama"
    },
    {
        id: 96,
        category: "액티비티",
        name: "조이 정글",
        benefit: "메달/UFO캐쳐 무료",
        desc: "오락실",
        hours: "10:00 ~ 24:00",
        location: "드래곤 팰리스",
        icon: "arcade",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Joy+Jungle+Mihama"
    },
    {
        id: 97,
        category: "액티비티",
        name: "츄라유 온천",
        benefit: "타월 무료 대여",
        desc: "천연 온천 & 수영장",
        hours: "07:00 ~ 23:00",
        location: "비치 타워 인근",
        icon: "sauna",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Terme+VILLA+Chula-u"
    },
    {
        id: 98,
        category: "기타",
        name: "라 레이아 (펫 호텔)",
        benefit: "5% 할인",
        desc: "반려견 호텔",
        hours: "12:00 ~ 19:00",
        location: "차탄",
        icon: "dog",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Leia+Chatan"
    },
    {
        id: 99,
        category: "액티비티",
        name: "매직 오션",
        benefit: "입장료 할인",
        desc: "매직 디너쇼",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 4층",
        icon: "magician",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Magic+Ocean+Okinawa"
    },

    // [10] 뷰티 & 스파
    {
        id: 100,
        category: "뷰티",
        name: "힐링 포레스트 슈로",
        benefit: "10% 할인",
        desc: "에스테틱",
        hours: "11:00 ~ 19:30",
        location: "차탄 빌라 1층",
        icon: "massage",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Healing+Forest+Shuro"
    },
    {
        id: 101,
        category: "뷰티",
        name: "엠 그레이스",
        benefit: "10% 할인",
        desc: "토탈 뷰티",
        hours: "11:00 ~ 20:00",
        location: "시사이드 2층",
        icon: "makeup",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=m-grace's+Chatan"
    },
    {
        id: 102,
        category: "뷰티",
        name: "러브 네일",
        benefit: "음료 1잔 서비스",
        desc: "네일 살롱",
        hours: "10:00 ~ 20:00",
        location: "디스토션 시사이드",
        icon: "nail-polish",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Love+Nail+Okinawa"
    },
    {
        id: 103,
        category: "뷰티",
        name: "셀레스테 스파",
        benefit: "45분 코스 특별가",
        desc: "고급 스파",
        hours: "13:00 ~ 22:00",
        location: "레쿠 호텔 8층",
        icon: "spa-flower",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Celeste+Spa+Lequ+Okinawa"
    },
    {
        id: 104,
        category: "쇼핑",
        name: "오키츄 (OKICHU)",
        benefit: "키홀더 증정",
        desc: "섬조리(쪼리)",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드 E동",
        icon: "flip-flops",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=OKICHU+Depot+Island"
    },
    {
        id: 105,
        category: "쇼핑",
        name: "미하마 유리 칸자시야",
        benefit: "소품 증정",
        desc: "비녀 & 액세서리",
        hours: "12:00 ~ 21:00",
        location: "아메리칸 데포 C동",
        icon: "hair-clip",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kanzashiya+wargo+Okinawa"
    },
    {
        id: 106,
        category: "뷰티",
        name: "류 스파 (Ryu Spa)",
        benefit: "마스크팩 증정",
        desc: "코스메틱",
        hours: "10:00 ~ 21:00",
        location: "데포 센트럴",
        icon: "water-drop",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ryu+Spa+Chatan"
    },
    {
        id: 107,
        category: "액티비티",
        name: "소드 피쉬",
        benefit: "투어 15% 할인",
        desc: "스노쿨링 & 다이빙",
        hours: "08:00 ~ 20:00",
        location: "온나손 (예약)",
        icon: "scuba-diving",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sword+Fish+Okinawa"
    },
    {
        id: 108,
        category: "액티비티",
        name: "슈하리 바이크",
        benefit: "렌탈 10% 할인",
        desc: "자전거 대여",
        hours: "11:00 ~ 18:00",
        location: "레쿠 호텔 1층",
        icon: "bicycle",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Shuhari+Bike+Works"
    }
];/**
 * 베셀 & 레쿠 오키나와 쿠폰북 데이터 (구글맵 연동 완료)
 * - mapUrl: 구글 지도 검색 링크 추가
 */

const couponData = [
    // [1] 호텔 레스토랑
    {
        id: 1,
        category: "맛집",
        name: "힐튼 수리윤 (뷔페)",
        benefit: "15% 할인 (런치/디너)",
        desc: "오키나와 & 세계 요리 뷔페",
        hours: "런치 11:30~15:00 / 디너 17:30~21:30",
        location: "힐튼 호텔",
        icon: "buffet-breakfast",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hilton+Okinawa+Chatan+Resort+SURIYUN"
    },
    {
        id: 2,
        category: "맛집",
        name: "힐튼 코렌테 (이탈리안)",
        benefit: "15% 할인 (런치/디너)",
        desc: "정통 이탈리안 레스토랑",
        hours: "런치 11:30~15:00 / 디너 17:30~22:30",
        location: "힐튼 호텔",
        icon: "pizza",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hilton+Okinawa+Chatan+Resort+Corrente"
    },

    // [2] 오키나와 요리
    {
        id: 3,
        category: "맛집",
        name: "키지무나 (타코라이스)",
        benefit: "음료 1잔 무료 (8명까지)",
        desc: "오무타코가 유명한 맛집",
        hours: "11:00 ~ 22:00",
        location: "데포 아일랜드 C동 2층",
        icon: "mexican-food",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Taco+Rice+Cafe+Kijimuna+Depot+Island"
    },
    {
        id: 4,
        category: "맛집",
        name: "카메젠 식당",
        benefit: "5% 할인",
        desc: "오키나와 소바",
        hours: "11:00 ~ 21:00",
        location: "데포 아일랜드 2층",
        icon: "noodles",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kamezen+Shokudo+Chatan"
    },
    {
        id: 5,
        category: "맛집",
        name: "츄라하마 식당",
        benefit: "음료 1잔 서비스 (최대 10잔)",
        desc: "오키나와 가정식",
        hours: "12:00 ~ 23:00",
        location: "디스토션 시사이드 3층",
        icon: "rice-bowl",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Churahama+Shokudo+Chatan"
    },
    {
        id: 6,
        category: "맛집",
        name: "차탄 둔치",
        benefit: "과실 식초 1잔 무료",
        desc: "오키나와 요리 주점",
        hours: "17:00 ~ 23:00",
        location: "시사이드 3층",
        icon: "sake",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Chatan+Denchi"
    },
    {
        id: 7,
        category: "맛집",
        name: "미하마 둔치",
        benefit: "과실 식초 1잔 무료",
        desc: "이자카야",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 2층",
        icon: "sake",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mihama+Denchi+Chatan"
    },
    {
        id: 8,
        category: "맛집",
        name: "라이브 주점 카나산야",
        benefit: "바다포도 소접시 서비스",
        desc: "라이브 공연 이자카야",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 3층",
        icon: "music-note",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kanasanya+Chatan"
    },
    {
        id: 9,
        category: "맛집",
        name: "시만츄 (Shimanchu)",
        benefit: "음료 1잔 서비스",
        desc: "오키나와 향토 요리",
        hours: "16:00 ~ 22:00",
        location: "레쿠 호텔 2층",
        icon: "rice-bowl",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Shimanchu+Lequ+Okinawa"
    },
    {
        id: 10,
        category: "맛집",
        name: "Funka Delica (주먹밥)",
        benefit: "음료 1잔 서비스",
        desc: "스팸 계란 주먹밥",
        hours: "16:00 ~ 22:00",
        location: "차탄 (미하마 34-2)",
        icon: "onigiri",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pork+Tamago+Onigiri+Funka+Delica"
    },
    {
        id: 11,
        category: "맛집",
        name: "오키나와 소바 키세키",
        benefit: "10% 할인 (주류 제외)",
        desc: "조개 육수 소바",
        hours: "11:00 ~ 21:00",
        location: "디스토션 시사이드 1층",
        icon: "seafood-noodles",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Okinawa+Soba+Kiseki+Chatan"
    },

    // [3] 스테이크 & 햄버거 & 카레
    {
        id: 12,
        category: "맛집",
        name: "점보 스테이크 한스 (미하마)",
        benefit: "10% 할인",
        desc: "푸짐한 스테이크",
        hours: "11:00 ~ 23:00",
        location: "데포 아일랜드 A동 2층",
        icon: "steak-medium",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Jumbo+Steak+Han's+Mihama"
    },
    {
        id: 13,
        category: "맛집",
        name: "스테이크 하우스 BB",
        benefit: "음료 1잔 또는 토핑 무료",
        desc: "가성비 스테이크",
        hours: "11:30 ~ 21:00",
        location: "데포 아일랜드 A동 2층",
        icon: "grill",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Steak+House+BB+Chatan"
    },
    {
        id: 14,
        category: "맛집",
        name: "캡틴스 인 (Captain's Inn)",
        benefit: "코스 주문 시 새우 2마리 서비스",
        desc: "철판구이 스테이크",
        hours: "11:30 ~ 22:00",
        location: "구르메관 2층",
        icon: "chef-hat",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Captain's+Inn+Mihama"
    },
    {
        id: 15,
        category: "맛집",
        name: "블루 오션 스테이크",
        benefit: "웰컴 드링크",
        desc: "오션뷰 스테이크",
        hours: "17:00 ~ 23:00",
        location: "차탄 (미하마 51-2)",
        icon: "wine-glass",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue+Ocean+Steak+Okinawa"
    },
    {
        id: 16,
        category: "맛집",
        name: "스테이크 하우스 88",
        benefit: "드링크바 무료",
        desc: "전통 스테이크 하우스",
        hours: "11:00 ~ 23:00",
        location: "앳 차탄 2층",
        icon: "cow",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Steak+House+88+Chatan"
    },
    {
        id: 17,
        category: "맛집",
        name: "비피스 (BEEFY'S)",
        benefit: "10% 할인",
        desc: "씨사이드 스테이크",
        hours: "11:30 ~ 22:00",
        location: "시사이드 4층",
        icon: "steak",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Seaside+Steak+Beefy's"
    },
    {
        id: 18,
        category: "맛집",
        name: "점보 스테이크 한스 (센트럴)",
        benefit: "10% 할인 또는 음료",
        desc: "센트럴점 스테이크",
        hours: "11:00 ~ 23:00",
        location: "데포 센트럴 2층",
        icon: "steak-medium",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Jumbo+Steak+Han's+Depot+Central"
    },
    {
        id: 19,
        category: "맛집",
        name: "차탄 버거 베이스",
        benefit: "토핑 1개 무료",
        desc: "수제 버거",
        hours: "11:00 ~ 21:00",
        location: "시사이드 1층",
        icon: "hamburger",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Chatan+Burger+Base+Atabies"
    },
    {
        id: 20,
        category: "맛집",
        name: "제타 버거 마켓",
        benefit: "아메리카노 1잔 서비스",
        desc: "빈티지 버거 카페",
        hours: "11:00 ~ 22:00",
        location: "디스토션 패션 2층",
        icon: "hamburger",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Zetta+Burger+Market"
    },
    {
        id: 21,
        category: "맛집",
        name: "BRUAL (브루알)",
        benefit: "10% 할인",
        desc: "버거 & 비어",
        hours: "10:00 ~ 21:00",
        location: "시사이드 2층",
        icon: "beer",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Brual+Chatan"
    },
    {
        id: 22,
        category: "맛집",
        name: "너티 바이 네이처",
        benefit: "음료 1잔 무료",
        desc: "건강한 버거",
        hours: "11:00 ~ 19:30",
        location: "차탄 (미하마 51-3)",
        icon: "hamburger",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Naughty+By+Nature+Chatan"
    },
    {
        id: 23,
        category: "맛집",
        name: "발리우드 드림스",
        benefit: "10% 할인",
        desc: "인도 커리",
        hours: "11:00 ~ 21:00",
        location: "데포 아일랜드 A동",
        icon: "curry",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Bollywood+Dreams+Okinawa"
    },
    {
        id: 24,
        category: "맛집",
        name: "호라이즌 커리 웍스",
        benefit: "10% 할인",
        desc: "오션뷰 카레",
        hours: "11:00 ~ 22:00",
        location: "디스토션 시사이드 2층",
        icon: "curry",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Horizon+Curry+Works"
    },
    {
        id: 25,
        category: "맛집",
        name: "발리우드 주얼",
        benefit: "10% 할인",
        desc: "인도 커리",
        hours: "11:00 ~ 21:30",
        location: "시사이드 스퀘어 1층",
        icon: "curry",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Bollywood+Jewel+Chatan"
    },

    // [4] 카페 & 디저트
    {
        id: 26,
        category: "카페",
        name: "Vongo & Anchor",
        benefit: "10% 할인",
        desc: "로스터리 카페",
        hours: "08:00 ~ 22:00",
        location: "베셀 호텔 별관",
        icon: "coffee-to-go",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Vongo+and+Anchor"
    },
    {
        id: 27,
        category: "카페",
        name: "하논 (Hanon)",
        benefit: "아이스크림 서비스",
        desc: "팬케이크 카페",
        hours: "09:00 ~ 19:00",
        location: "오크 패션 2층",
        icon: "pancakes",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Seaside+Cafe+Hanon"
    },
    {
        id: 28,
        category: "카페",
        name: "클라이맥스 커피",
        benefit: "10% 할인 (현금만)",
        desc: "머핀 & 커피",
        hours: "09:30 ~ 22:00",
        location: "시사이드 1층",
        icon: "muffin",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Climax+Coffee+Chatan"
    },
    {
        id: 29,
        category: "카페",
        name: "MaiMalu (마이마루)",
        benefit: "음료 1잔 서비스",
        desc: "카페 & 바",
        hours: "15:00 ~ 24:00",
        location: "디스토션 시사이드 1층",
        icon: "cocktail",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=MaiMalu+Chatan"
    },
    {
        id: 30,
        category: "카페",
        name: "지바고 커피",
        benefit: "10% 할인 (레쿠 투숙객)",
        desc: "인기 로스터리",
        hours: "07:00 ~ 22:00",
        location: "레쿠 호텔 1층",
        icon: "espresso-cup",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Zhyvago+Coffee+Roastery"
    },
    {
        id: 31,
        category: "카페",
        name: "Caravana (카라바나)",
        benefit: "10% 할인 (레쿠 투숙객)",
        desc: "아이스크림 & 도넛",
        hours: "11:00 ~ 22:00",
        location: "레쿠 호텔 1층",
        icon: "doughnut",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Caravana+Ice+Cream"
    },
    {
        id: 32,
        category: "카페",
        name: "오니얀마 커피",
        benefit: "아이스크림 서비스",
        desc: "스페셜티 커피",
        hours: "09:30 ~ 19:00",
        location: "디스토션 패션 2층",
        icon: "coffee-bean",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Oniyanma+Coffee+Chatan"
    },
    {
        id: 33,
        category: "카페",
        name: "블루씰 아이스크림",
        benefit: "주니어 스쿱 증정",
        desc: "오키나와 아이스크림",
        hours: "11:00 ~ 21:00",
        location: "시사이드 2층",
        icon: "ice-cream-cone",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue+Seal+Depot+Island+Seaside"
    },
    {
        id: 34,
        category: "쇼핑",
        name: "바움쿠헨 산토미",
        benefit: "1,000엔 이상 5% 할인",
        desc: "수제 바움쿠헨",
        hours: "10:00 ~ 18:00",
        location: "오크 패션 1층",
        icon: "cake",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fukugiya+Baumkuchen+Chatan"
    },
    {
        id: 35,
        category: "쇼핑",
        name: "카메 안다기",
        benefit: "도넛 1개 증정",
        desc: "오키나와 도넛",
        hours: "11:00 ~ 20:00",
        location: "레쿠 호텔 1층",
        icon: "doughnut",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kame+Andagi+Chatan"
    },
    {
        id: 36,
        category: "카페",
        name: "가마쿠라 (와라비모찌)",
        benefit: "꿀(미츠) 서비스",
        desc: "전통 디저트",
        hours: "10:30 ~ 20:00",
        location: "데포 아일랜드 A동",
        icon: "green-tea",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kamakura+Warabimochi+Chatan"
    },
    {
        id: 37,
        category: "카페",
        name: "BUNBUN (분분)",
        benefit: "음료 1잔 무료",
        desc: "과일 샌드위치",
        hours: "08:00 ~ 20:00",
        location: "플라자 F",
        icon: "sandwich",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Fruit+Bunbun"
    },

    // [5] 일식 / 고기 / 해산물 / 양식
    {
        id: 38,
        category: "맛집",
        name: "아구노 카쿠레가",
        benefit: "10% 할인",
        desc: "흑돼지 샤브샤브",
        hours: "17:00 ~ 22:30",
        location: "차탄",
        icon: "pot",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Agu+no+Kakurega+Chatan"
    },
    {
        id: 39,
        category: "맛집",
        name: "텐진 야키니쿠",
        benefit: "음료 1잔 서비스",
        desc: "하카타 야키니쿠",
        hours: "11:30 ~ 23:00",
        location: "아메리칸 데포 C동",
        icon: "grill",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hakata+Yakiniku+Tenjin"
    },
    {
        id: 40,
        category: "맛집",
        name: "야키니쿠 복우 (Fukugyu)",
        benefit: "지정 음료 서비스",
        desc: "와규 야키니쿠",
        hours: "11:00 ~ 23:00",
        location: "데포 아일랜드 E동",
        icon: "cow",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Yakiniku+Fukugyu"
    },
    {
        id: 41,
        category: "맛집",
        name: "증기 해산물",
        benefit: "웰컴 드링크",
        desc: "해산물 찜",
        hours: "11:00 ~ 23:00",
        location: "차탄",
        icon: "crab",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Steam+Seafood+Chatan"
    },
    {
        id: 42,
        category: "맛집",
        name: "규부시 (Gyuubushi)",
        benefit: "10% 할인",
        desc: "소고기 요리",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 6층",
        icon: "meat",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Gyubushi+Chatan"
    },
    {
        id: 43,
        category: "맛집",
        name: "야키니쿠 리키오",
        benefit: "음료 또는 디저트",
        desc: "야키니쿠",
        hours: "17:00 ~ 23:00",
        location: "디스토션 패션 2층",
        icon: "grill",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Yakiniku+Rikio"
    },
    {
        id: 44,
        category: "맛집",
        name: "지루야 (Jiruya)",
        benefit: "음료 1잔 무료",
        desc: "이자카야/마제소바",
        hours: "영업시간 문의",
        location: "앳 차탄 1층",
        icon: "noodles",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Jiruya+Chatan"
    },
    {
        id: 45,
        category: "맛집",
        name: "선라이즈 (SUNRISE)",
        benefit: "15% 할인",
        desc: "치즈 스테이크",
        hours: "07:30 ~ 22:00",
        location: "시사이드 스퀘어",
        icon: "cheese",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sunrise+Chatan"
    },
    {
        id: 46,
        category: "맛집",
        name: "함바그 마스오",
        benefit: "10% 할인 (룸키)",
        desc: "함박 스테이크",
        hours: "11:30 ~ 21:00",
        location: "앳 차탄 1층",
        icon: "steak",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hamburg+Steak+Masuo"
    },
    {
        id: 47,
        category: "맛집",
        name: "솔리스 그란데",
        benefit: "아이스크림 3종 서비스",
        desc: "오션뷰 이탈리안",
        hours: "11:30 ~ 22:00",
        location: "베셀 호텔 별관",
        icon: "pizza",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Solis+Grande+Chatan"
    },
    {
        id: 48,
        category: "맛집",
        name: "레드 랍스터",
        benefit: "음료/와인 1잔",
        desc: "씨푸드 레스토랑",
        hours: "11:00 ~ 22:00",
        location: "차탄",
        icon: "lobster",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Red+Lobster+Okinawa+Chatan"
    },
    {
        id: 49,
        category: "맛집",
        name: "토니 로마스",
        benefit: "음료/맥주 1잔",
        desc: "베이비 백 립",
        hours: "17:00 ~ 21:30",
        location: "차탄",
        icon: "ribs",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Tony+Roma's+Mihama"
    },
    {
        id: 50,
        category: "맛집",
        name: "카프리쵸사",
        benefit: "음료/와인 1잔",
        desc: "이탈리안 파스타",
        hours: "11:00 ~ 21:00",
        location: "차탄",
        icon: "spaghetti",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Capricciosa+Mihama"
    },
    {
        id: 51,
        category: "맛집",
        name: "포켓 팜",
        benefit: "음료 100엔 할인",
        desc: "스낵 & 음료",
        hours: "10:00 ~ 21:00",
        location: "아메리칸 데포 B동",
        icon: "hot-dog",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pocke+Farm+Chatan"
    },
    {
        id: 52,
        category: "맛집",
        name: "벤슨스 (BENSON'S)",
        benefit: "토핑 1개 무료",
        desc: "핫도그 맛집",
        hours: "10:00 ~ 21:00",
        location: "아메리칸 데포 B동",
        icon: "hot-dog",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Benson's+Hotdog"
    },
    {
        id: 53,
        category: "맛집",
        name: "타코스 카페 타코로코",
        benefit: "음료 1잔 서비스",
        desc: "타코 전문점",
        hours: "11:00 ~ 22:00",
        location: "아메리칸 데포 B동",
        icon: "taco",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Taco+Loco+Chatan"
    },
    {
        id: 54,
        category: "맛집",
        name: "가츠 (Guts)",
        benefit: "음료 증정",
        desc: "프라이드 치킨",
        hours: "12:00 ~ 21:00",
        location: "데포 센트럴 2층",
        icon: "fried-chicken",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Chicken+House+Guts"
    },
    {
        id: 55,
        category: "맛집",
        name: "파오파오 더 엘리펀트",
        benefit: "5% 할인",
        desc: "태국 요리",
        hours: "12:00 ~ 21:00",
        location: "차탄",
        icon: "elephant",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pao+Pao+The+Elephant"
    },
    {
        id: 56,
        category: "맛집",
        name: "라 페스카리나",
        benefit: "10% 할인 (3천엔 이상)",
        desc: "해산물 이탈리안",
        hours: "18:00 ~ 23:00",
        location: "레쿠 호텔 1층",
        icon: "fish",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Pesciplina+Chatan"
    },
    {
        id: 57,
        category: "맛집",
        name: "피제리아 바 아리치아",
        benefit: "음료 200엔 할인",
        desc: "화덕 피자",
        hours: "11:00 ~ 22:00",
        location: "시사이드 1층",
        icon: "pizza",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pizzeria+Bar+Ariccia"
    },
    {
        id: 58,
        category: "맛집",
        name: "엘 파소 (EL PASO)",
        benefit: "음료 200엔 할인",
        desc: "멕시칸 레스토랑",
        hours: "11:00 ~ 22:00",
        location: "데포 아일랜드 D동",
        icon: "cactus",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mexican+Food+El+Paso"
    },

    // [6] 이자카야 & 바
    {
        id: 59,
        category: "맛집",
        name: "Oh Yeah! (오 예)",
        benefit: "뱀술 1잔 서비스",
        desc: "카페 & 바",
        hours: "17:00 ~ 03:00",
        location: "오크 패션 2층",
        icon: "cocktail",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+and+Bar+Oh+Yeah"
    },
    {
        id: 60,
        category: "맛집",
        name: "이자카야 사이 (Sai)",
        benefit: "안주 1개 서비스",
        desc: "이자카야",
        hours: "17:00 ~ 02:00",
        location: "구르메관 2층",
        icon: "sake",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Izakaya+Sai+Chatan"
    },
    {
        id: 61,
        category: "맛집",
        name: "시라카와 상점",
        benefit: "2번째 음료 무료",
        desc: "이자카야",
        hours: "17:00 ~ 23:00",
        location: "앳 차탄 1층",
        icon: "beer",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Shirakawa+Shoten+Chatan"
    },
    {
        id: 62,
        category: "맛집",
        name: "아이리쉬 펍 하우디",
        benefit: "안주 1개 선물",
        desc: "아이리쉬 펍",
        hours: "17:00 ~ 01:00",
        location: "데포 센트럴 5층",
        icon: "beer-glass",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Irish+Pub+Howdy"
    },

    // [7] 쇼핑 - 의류 & 액세서리
    {
        id: 63,
        category: "쇼핑",
        name: "RUN OKI",
        benefit: "10% 할인",
        desc: "오키나와 티셔츠",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 B동",
        icon: "t-shirt",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=RUN+OKI+Depot+Island"
    },
    {
        id: 64,
        category: "쇼핑",
        name: "리스펙트 (Respect)",
        benefit: "5% 할인",
        desc: "캐주얼 의류",
        hours: "11:00 ~ 21:00",
        location: "시사이드 스퀘어",
        icon: "t-shirt",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Respect+Chatan+Seaside"
    },
    {
        id: 65,
        category: "쇼핑",
        name: "스킵 (SKIP)",
        benefit: "5% 할인",
        desc: "키즈 의류",
        hours: "11:00 ~ 20:00",
        location: "아메리칸 데포 B동",
        icon: "baby-onesie",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SKIP+American+Depot"
    },
    {
        id: 66,
        category: "쇼핑",
        name: "로얄 오키나와",
        benefit: "굿즈 증정",
        desc: "오키나와 셔츠",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드",
        icon: "shirt",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Royal+Okinawa+Chatan"
    },
    {
        id: 67,
        category: "쇼핑",
        name: "플레이바 (Flava)",
        benefit: "10% 할인",
        desc: "모자 전문점",
        hours: "10:00 ~ 22:00",
        location: "데포 아일랜드 C동",
        icon: "baseball-cap",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Flava+Hat+Depot+Island"
    },
    {
        id: 68,
        category: "쇼핑",
        name: "다즐 (Dazzle)",
        benefit: "10% 할인",
        desc: "패션 의류",
        hours: "10:00 ~ 21:00",
        location: "디스토션 패션",
        icon: "dress",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Dazzle+Chatan"
    },
    {
        id: 69,
        category: "쇼핑",
        name: "서던 델리 아구",
        benefit: "엽서 증정",
        desc: "오리지널 티셔츠",
        hours: "11:00 ~ 19:00",
        location: "디스토션 시사이드",
        icon: "t-shirt",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Southern+Deli+Agoo"
    },
    {
        id: 70,
        category: "쇼핑",
        name: "쵸시치야 1호점",
        benefit: "책갈피 증정",
        desc: "호타루 유리 공예",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드 A동",
        icon: "crystal",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Choshichiya+Depot+Island"
    },
    {
        id: 71,
        category: "쇼핑",
        name: "아마츠부",
        benefit: "5% 할인",
        desc: "파워스톤",
        hours: "12:00 ~ 21:00",
        location: "데포 아일랜드 A동",
        icon: "gem-stone",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Amatsubu+Chatan"
    },
    {
        id: 72,
        category: "쇼핑",
        name: "서덜리 (Southerly)",
        benefit: "10% 할인",
        desc: "액세서리",
        hours: "11:30 ~ 19:30",
        location: "시사이드 1층",
        icon: "pearl",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Southerly+Chatan"
    },
    {
        id: 73,
        category: "쇼핑",
        name: "스플래쉬 오키나와",
        benefit: "잡화 증정",
        desc: "오키나와 잡화",
        hours: "10:00 ~ 21:30",
        location: "디스토션 패션",
        icon: "starfish",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Splash+Okinawa+Mihama"
    },
    {
        id: 74,
        category: "쇼핑",
        name: "쵸시치야 2호점",
        benefit: "책갈피 증정",
        desc: "호타루 유리",
        hours: "11:00 ~ 20:00",
        location: "데포 센트럴",
        icon: "crystal",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Choshichiya+Depot+Central"
    },
    {
        id: 75,
        category: "쇼핑",
        name: "오하나 (OHANA)",
        benefit: "할인 또는 포장",
        desc: "액세서리",
        hours: "11:00 ~ 21:00",
        location: "데포 아일랜드 A동",
        icon: "flower",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=OHANA+Jewelry+Chatan"
    },
    {
        id: 76,
        category: "쇼핑",
        name: "라군 (Lagoon)",
        benefit: "5% 할인",
        desc: "리조트 주얼리",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 A동",
        icon: "necklace",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Lagoon+Okinawa+Jewelry"
    },

    // [8] 쇼핑 - 기념품 & 잡화
    {
        id: 77,
        category: "쇼핑",
        name: "오키나와 마켓",
        benefit: "굿즈 증정",
        desc: "기념품 & 과자",
        hours: "11:00 ~ 20:00",
        location: "시사이드 1층",
        icon: "shopping-bag",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Okinawa+Market+Depot+Island"
    },
    {
        id: 78,
        category: "쇼핑",
        name: "오카노 잇폰마츠",
        benefit: "무료배송/에코백",
        desc: "특산품",
        hours: "10:00 ~ 22:00",
        location: "드래곤 팰리스",
        icon: "gift",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Okano+Ipponmatsu"
    },
    {
        id: 79,
        category: "쇼핑",
        name: "오키나와야",
        benefit: "별모래 증정",
        desc: "종합 기념품",
        hours: "09:30 ~ 21:30",
        location: "아메리칸 데포 A동",
        icon: "gift",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Okinawaya+Mihama"
    },
    {
        id: 80,
        category: "쇼핑",
        name: "아와모리 창고",
        benefit: "미니 보틀 증정",
        desc: "전통주 전문",
        hours: "10:00 ~ 21:30",
        location: "아메리칸 데포 A동",
        icon: "bottle-of-water",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Okinawaya+Awamori+Kura"
    },
    {
        id: 81,
        category: "쇼핑",
        name: "파인애플 파인애플",
        benefit: "아이스크림 증정",
        desc: "파인애플 굿즈",
        hours: "11:00 ~ 20:00",
        location: "데포 센트럴",
        icon: "pineapple",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pineapple+Pineapple+Chatan"
    },
    {
        id: 82,
        category: "쇼핑",
        name: "메이드 인 오키나와",
        benefit: "5% 할인",
        desc: "특산품",
        hours: "11:00 ~ 19:00",
        location: "데포 센트럴",
        icon: "japan-map",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Made+In+Okinawa+Chatan"
    },
    {
        id: 83,
        category: "쇼핑",
        name: "데포 아일랜드 (수입)",
        benefit: "굿즈 증정",
        desc: "미국 수입 잡화",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 A동",
        icon: "shopping-bag",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Depot+Island+Chatan"
    },
    {
        id: 84,
        category: "쇼핑",
        name: "미하마 유리 소라",
        benefit: "소품 케이스 증정",
        desc: "유리 공예",
        hours: "12:00 ~ 21:00",
        location: "데포 아일랜드 A동",
        icon: "wine-glass",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mihama+Glass+Sora"
    },
    {
        id: 85,
        category: "쇼핑",
        name: "해양창고 21",
        benefit: "5% 할인",
        desc: "잡화 & 화장품",
        hours: "10:30 ~ 20:00",
        location: "데포 아일랜드 B동",
        icon: "cosmetics",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kaiyokura+21"
    },
    {
        id: 86,
        category: "쇼핑",
        name: "야마츄 본포",
        benefit: "키홀더 증정",
        desc: "전통주 & 식품",
        hours: "10:00 ~ 20:00",
        location: "데포 아일랜드",
        icon: "sake",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Yamachu+Honpo"
    },
    {
        id: 87,
        category: "쇼핑",
        name: "SOHO (소호)",
        benefit: "굿즈 증정",
        desc: "수입 의류",
        hours: "11:00 ~ 20:00",
        location: "아메리칸 데포 C동",
        icon: "trousers",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SOHO+Chatan"
    },
    {
        id: 88,
        category: "쇼핑",
        name: "아메리칸 데포",
        benefit: "굿즈 증정",
        desc: "빈티지 샵",
        hours: "10:00 ~ 21:00",
        location: "아메리칸 데포 A동",
        icon: "jeans",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=American+Depot+Chatan"
    },
    {
        id: 89,
        category: "쇼핑",
        name: "레더 베이스",
        benefit: "가죽 소품 증정",
        desc: "가죽 제품",
        hours: "10:00 ~ 21:00",
        location: "데포 아일랜드 E동",
        icon: "wallet",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Leather+Base+Chatan"
    },
    {
        id: 90,
        category: "쇼핑",
        name: "Leather & Wood",
        benefit: "키 커버 증정",
        desc: "가죽 & 나무 공예",
        hours: "11:00 ~ 21:00",
        location: "데포 아일랜드 E동",
        icon: "carpenter",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Leather+and+Wood+Chatan"
    },
    {
        id: 91,
        category: "쇼핑",
        name: "카사리나 (CASARINA)",
        benefit: "5% 할인",
        desc: "잡화점",
        hours: "11:00 ~ 19:00",
        location: "차탄 (미하마 51-3)",
        icon: "gift",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Casarina+Chatan"
    },
    {
        id: 92,
        category: "쇼핑",
        name: "남국잡화 티다",
        benefit: "스티커 증정",
        desc: "남국 잡화",
        hours: "12:00 ~ 19:00",
        location: "레쿠 호텔 1층",
        icon: "sun",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Nangoku+Zakka+Tida"
    },
    {
        id: 93,
        category: "뷰티",
        name: "슈리비누",
        benefit: "샘플 증정",
        desc: "수제 비누",
        hours: "10:00 ~ 20:00",
        location: "데포 아일랜드 A동",
        icon: "soap",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SuiSavon+Chura+Soap+Depot+Island"
    },

    // [9] 액티비티 & 놀거리
    {
        id: 94,
        category: "액티비티",
        name: "GiGO 게임센터",
        benefit: "메달 1.5배",
        desc: "대형 게임센터",
        hours: "10:00 ~ 24:00",
        location: "시사이드 스퀘어",
        icon: "controller",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=GiGO+Chatan"
    },
    {
        id: 95,
        category: "액티비티",
        name: "에너지 빅 볼",
        benefit: "1게임 할인",
        desc: "볼링장",
        hours: "10:00 ~ 24:00",
        location: "시사이드 스퀘어",
        icon: "bowling",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Enagic+Bowl+Mihama"
    },
    {
        id: 96,
        category: "액티비티",
        name: "조이 정글",
        benefit: "메달/UFO캐쳐 무료",
        desc: "오락실",
        hours: "10:00 ~ 24:00",
        location: "드래곤 팰리스",
        icon: "arcade",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Joy+Jungle+Mihama"
    },
    {
        id: 97,
        category: "액티비티",
        name: "츄라유 온천",
        benefit: "타월 무료 대여",
        desc: "천연 온천 & 수영장",
        hours: "07:00 ~ 23:00",
        location: "비치 타워 인근",
        icon: "sauna",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Terme+VILLA+Chula-u"
    },
    {
        id: 98,
        category: "기타",
        name: "라 레이아 (펫 호텔)",
        benefit: "5% 할인",
        desc: "반려견 호텔",
        hours: "12:00 ~ 19:00",
        location: "차탄",
        icon: "dog",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Leia+Chatan"
    },
    {
        id: 99,
        category: "액티비티",
        name: "매직 오션",
        benefit: "입장료 할인",
        desc: "매직 디너쇼",
        hours: "17:00 ~ 23:00",
        location: "데포 센트럴 4층",
        icon: "magician",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Magic+Ocean+Okinawa"
    },

    // [10] 뷰티 & 스파
    {
        id: 100,
        category: "뷰티",
        name: "힐링 포레스트 슈로",
        benefit: "10% 할인",
        desc: "에스테틱",
        hours: "11:00 ~ 19:30",
        location: "차탄 빌라 1층",
        icon: "massage",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Healing+Forest+Shuro"
    },
    {
        id: 101,
        category: "뷰티",
        name: "엠 그레이스",
        benefit: "10% 할인",
        desc: "토탈 뷰티",
        hours: "11:00 ~ 20:00",
        location: "시사이드 2층",
        icon: "makeup",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=m-grace's+Chatan"
    },
    {
        id: 102,
        category: "뷰티",
        name: "러브 네일",
        benefit: "음료 1잔 서비스",
        desc: "네일 살롱",
        hours: "10:00 ~ 20:00",
        location: "디스토션 시사이드",
        icon: "nail-polish",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Love+Nail+Okinawa"
    },
    {
        id: 103,
        category: "뷰티",
        name: "셀레스테 스파",
        benefit: "45분 코스 특별가",
        desc: "고급 스파",
        hours: "13:00 ~ 22:00",
        location: "레쿠 호텔 8층",
        icon: "spa-flower",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Celeste+Spa+Lequ+Okinawa"
    },
    {
        id: 104,
        category: "쇼핑",
        name: "오키츄 (OKICHU)",
        benefit: "키홀더 증정",
        desc: "섬조리(쪼리)",
        hours: "11:00 ~ 20:00",
        location: "데포 아일랜드 E동",
        icon: "flip-flops",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=OKICHU+Depot+Island"
    },
    {
        id: 105,
        category: "쇼핑",
        name: "미하마 유리 칸자시야",
        benefit: "소품 증정",
        desc: "비녀 & 액세서리",
        hours: "12:00 ~ 21:00",
        location: "아메리칸 데포 C동",
        icon: "hair-clip",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kanzashiya+wargo+Okinawa"
    },
    {
        id: 106,
        category: "뷰티",
        name: "류 스파 (Ryu Spa)",
        benefit: "마스크팩 증정",
        desc: "코스메틱",
        hours: "10:00 ~ 21:00",
        location: "데포 센트럴",
        icon: "water-drop",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ryu+Spa+Chatan"
    },
    {
        id: 107,
        category: "액티비티",
        name: "소드 피쉬",
        benefit: "투어 15% 할인",
        desc: "스노쿨링 & 다이빙",
        hours: "08:00 ~ 20:00",
        location: "온나손 (예약)",
        icon: "scuba-diving",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sword+Fish+Okinawa"
    },
    {
        id: 108,
        category: "액티비티",
        name: "슈하리 바이크",
        benefit: "렌탈 10% 할인",
        desc: "자전거 대여",
        hours: "11:00 ~ 18:00",
        location: "레쿠 호텔 1층",
        icon: "bicycle",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Shuhari+Bike+Works"
    }
];