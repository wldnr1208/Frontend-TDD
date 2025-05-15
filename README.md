# 프론트엔드 TDD 연습 레포지토리

이 레포지토리는 React 기반 TDD(테스트 주도 개발) 연습을 위한 공간입니다.

## 🚀 소개

테스트 주도 개발(TDD)은 소프트웨어 개발 방법론 중 하나로, 테스트를 먼저 작성한 후 이 테스트를 통과하는 코드를 개발하는 접근 방식입니다. 이 레포지토리는 React 환경에서 TDD를 실습하고 학습하기 위한 목적으로 생성되었습니다.

## 📋 주요 내용

* React 컴포넌트 테스트
* 훅(Hooks) 테스트
* 비동기 작업 테스트
* 상태 관리 테스트
* 사용자 이벤트 시뮬레이션

## 🛠️ 기술 스택

* React
* Jest
* React Testing Library
* MSW (선택적)

## 📁 디렉토리 구조

```
/
├── src/
│   ├── components/        # React 컴포넌트
│   ├── hooks/             # 커스텀 훅
│   ├── utils/             # 유틸리티 함수
│   └── __tests__/         # 테스트 파일
├── public/
├── package.json
└── README.md
```

## 🏁 시작하기

1. 레포지토리 클론
   ```bash
   git clone [레포지토리 URL]
   cd [레포지토리 이름]
   ```

2. 의존성 설치
   ```bash
   npm install
   ```

3. 테스트 실행
   ```bash
   npm test
   ```

## 💡 TDD 사이클

TDD는 일반적으로 다음과 같은 사이클을 따릅니다:

1. **Red** - 실패하는 테스트 작성
2. **Green** - 테스트를 통과하는 최소한의 코드 작성
3. **Refactor** - 코드 개선 및 중복 제거

## 📚 학습 자료

- [React Testing Library 공식 문서](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest 공식 문서](https://jestjs.io/docs/getting-started)
- [테스트 주도 개발(TDD) 소개](https://ko.wikipedia.org/wiki/테스트_주도_개발)

## 🤝 기여 방법

1. 이 레포지토리를 포크합니다
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📝 라이센스

[라이센스 정보 추가]

## 👨‍💻 작성자

[귀하의 이름/닉네임]

---

TDD로 더 나은 코드를 작성하고 더 나은 개발자가 되기 위한 여정을 즐기세요! 🚀
