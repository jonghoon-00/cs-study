// 자료구조 - 해시테이블, hash table
// 키/값 대응으로 이루어진 표 형태의 자료구조

// Map 메서드가 내부적으로 해시 기반 구조 사용함

// 구현 목표 - 해시테이블 형태의 전화번호부 만들기.
// (체이닝 방식을 적용한 간단한 해시테이블블)

// 1. key-value 구조의 데이터 저장소 생성
// 2. 문자열 key를 기반으로 데이터를 저장하고 검색할 수 있다.
// 3. '해시 함수'를 통해 key를 정수형 index로 변환한다.
// 4. 충돌이 발생할 수 있으므로 '체이닝 방식'으로 처리한다
// 4-1. 체이닝 : 충돌이 발생한 데이터를 연결 리스트로 추가.
// 5. set, get, display 등의 기능 제공.

class HashTable {
  constructor(size = 10) {
    this.table = new Array(size); // 데이터 저장 공간
    this.size = size; // 테이블 사이즈
  }

  /**
   *
   * @description 해시 함수
   * @param {string} key
   * @returns 정수형 index 반환
   */
  _hash(key) {
    let hash = 0;
    for (let char of key) {
      //String.charCodeAt(index) 주어진 index의 UTF-16 코드 단위를 표현하는 0과 65535 사이의 정수 반환
      hash += char.charCodeAt(0);
    }
    return hash % this.size; // 배열의 범위 내에 들어오도록 this.size로 나누기
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.table[index]) {
      this.table[index] = []; // 비어있으면 배열(버킷) 생성
    }
    this.table[index].push([key, value]); // 중복 허용
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.table[index];

    if (bucket) {
      for (let [k, v] of bucket) {
        //k = key, v = value
        if (k === key) return v;
      }
    }
    return undefined;
  }

  display() {
    this.table.forEach((bucket, index) => {
      if (bucket) {
        console.log(index, bucket);
      }
    });
  }
}

const hashTable = new HashTable();
hashTable.set("홍길동", "010-1234-5678");
hashTable.set("마석대", "010-0000-0000");

hashTable.display();
//1 [ [ '마석대', '010-0000-0000' ] ]
//2 [ [ '홍길동', '010-1234-5678' ] ]

console.log(hashTable.get("홍길동")); //010-1234-5678
