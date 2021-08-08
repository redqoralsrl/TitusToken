Titus (Ethereum ERC-20 token project)
=====================================

### Titus 란?
    히브리어로 Titus(디도)로 읽으며 '공경하다'라는 뜻이다.
    블록체인에 있어서 신뢰도도 중요하지만 개발자의 마음가짐을
    올바르게 하자는 다짐이다. 사용자를 위한 개발자가 공경하기
    위한 마음이다.
    
------------

### 구현사항
> - 발행
>     - 토큰 이름 : TitusToken
>     - 토큰 기호 : TTT
>     - 토큰 십진법(decimals) : 18
>     - 토큰 발행량 : 21000000개
> - 권한
>     - 소각권한 부여(BURN)
>     - 생성권한 부여(MINT)
> - 락업
>     - 21000000개 중 1000000개만 유통 나머지는 락업
>     - 락업 지갑 주인은 처음 생성 지갑의 주인 (constructor로 지정)
>     - 락업 지갑 주인 변경 가능
>     - 락업 설정 함수
>     - 락업 추가로 설정 함수
>     - 락업 물량 업데이트
>       - 한달 단위로 2000000개씩 언락

------------

### 참고사이트 및 학습사이트
- 크립토 좀비 : [cryptozombies](https://cryptozombies.io/ko/)
- 이더리움 솔리디티 : [Solidity](https://docs.soliditylang.org/en/v0.8.6/)
- 이더리움 개발자 문서 : [ethereum.org](https://ethereum.org/en/developers/docs/)
- OpenZeppelin 문서 : [OpenZeppelin](https://docs.openzeppelin.com/openzeppelin/)

### 제작시 이용 사이트
- myetherwallet : [myetherwallet](https://www.myetherwallet.com/wallet/access)
- 롭스텐 테스트 지원 : [INFURA](https://infura.io/)
- 메타마스크 지갑 : [METAMASK](https://metamask.io/)
