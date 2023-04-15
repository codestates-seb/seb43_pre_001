# 📎Git
 --- 
 
`main` : 서비스 운영 브랜치 dev : 메인 브랜치 배포전 릴리즈 브랜치
</br>
`dev-fe` : FE 개발 환경 브랜치 
</br>
dev-be : BE 개발 환경 브랜치
</br>
`feat/개발명` : 기능 개발 브랜치 ex) `feat/Login`
 
## 🌲 Branch

```
📌 Pull Request Merge 담당 📌
❗️주의 : 해당 브랜치별로 담당 인원분들은 전부 모여 코드리뷰 및 동의 후에 
Merge를 진행합니다.

main <- dev : 이호승 홍승현

dev <- dev-fe : 이호승 홍승현 
dev <- dev-be : 이호승 홍승현

dev-fe <- feat : 이호승  (조원호, 최현아)
dev-be <- feat : 홍승현 (남지훈, 김현지A)
``` 


## ✉️ Commit Message


| Message |설명 | 
| :--: | :--: |  
|   init | 브랜치 시작   |      
| feat   | 새로운 기능을 추가할 경우 ex) feat: 로그인 기능 추가    |      
| fix   |   버그 수정에 대한 커밋 |      
|  refactor  | 효율을 위한 코드 리팩토링에 대한 커밋    |      
|style    |  컨벤션에 맞춘 코드 스타일 또는 포맷 등에 관한 커밋  |      
|  docs  |   문서 및 주석 수정 |   

