# seb43_pre_001 : E1I5

## Stack Overflow Clone

<img src="https://camo.githubusercontent.com/dcc135bf022f0d6dfb72e0d8616d1d4db4a6c6c0aed4261baccd27e6cb722c1b/68747470733a2f2f636f6e74656e742e7072657373706167652e636f6d2f75706c6f6164732f323635382f63313932305f6c6f676f2d737461636b6f766572666c6f772d62616e6e65722e6a70673f3634323234" width="600px" height="200px" alt="스택오버플로우 이미지"></img><br/>

---

## 📎Git

---

### 🌲 Branch

`main` : 서비스 운영 브랜치 dev : 메인 브랜치 배포전 릴리즈 브랜치
</br>
`dev-fe` : FE 개발 환경 브랜치
</br>
`dev-be` : BE 개발 환경 브랜치
</br>
`feat/개발명` : 기능 개발 브랜치 ex) `feat/Login`
</br>

```
### 📌 Pull Request Merge 담당 📌

>❗️주의 : 해당 브랜치별로 담당 인원분들은 전부 모여 코드리뷰 및 동의 후에 Merge를 진행합니다.

main <- dev : 이호승 홍승현

dev <- dev-fe : 이호승 홍승현
dev <- dev-be : 이호승 홍승현

dev-fe <- feat : 이호승  (조원호, 최현아)
dev-be <- feat : 홍승현 (남지훈, 김현지A)
```

### ✉️ Commit Message

| Message  |                         설명                         |
| :------: | :--------------------------------------------------: |
|   init   |                     브랜치 시작                      |
|   feat   | 새로운 기능을 추가할 경우 ex) feat: 로그인 기능 추가 |
|   fix    |                버그 수정에 대한 커밋                 |
| refactor |        효율을 위한 코드 리팩토링에 대한 커밋         |
|  rename  |             파일 및폴더명/ 경로 변경 시              |
|  style   |  컨벤션에 맞춘 코드 스타일 또는 포맷 등에 관한 커밋  |
|   docs   |                  문서 및 주석 수정                   |

2.prefix - 영어, 제목 - 한글

3.full 문장으로 쓰지 않는다.

4.뒤에 마침표를 찍지 않는다.

| 예시                                                            |
| :-------------------------------------------------------------- |
| feat: Todo 추가 기능                                            |
| style: 변수 네이밍 컨벤션에 맞게 변수명 변경 (ismale => isMale) |
| refactor: 불필요한 for 루프 삭제                                |
