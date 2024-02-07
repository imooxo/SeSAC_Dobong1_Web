
//모듈 내보내기
// 임시 DB
// 배열을 return하는 함수
exports.commentsInfo = () => {
    return [
        {
            id:1,
            userid:'apple',
            date:'2024-02-07',
            comment: "동그랗고 빨간색인 사과입니다.",
        },
        {
            id:2,
            userid:'banana',
            date:'2023-11-17',
            comment: "길쭉하고 노란색인 바나나입니다.",
        },
        {
            id:3,
            userid:'cocoa',
            date:'2023-08-21',
            comment: "달콤한 코코아 맛있어요",
        },
        {
            id:4,
            userid:'donut',
            date:'2024-01-01',
            comment: "크리스피 도넛이 좋아요",
        },
    ];
};