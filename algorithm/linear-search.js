// 선형 검색 - linear search
// 특정 요소를 찾기 위해 처음부터 끝까지 순차적으로 요소를 하나씩 비교하는 방식
// 시간 복잡도 : O(N)

// 문제 : 배열에서 주어진 값을 찾아, 그 인덱스를 반환하시오
// 값이 없으면 -1 반환

/**
 *
 * @param {배열} arr
 * @param {찾을 값} target
 * @returns target의 index
 * @returns
 */
function linearSearch(arr, target) {
  let steps = 0;
  let result = 0;

  for (let i = 0; i <= arr.length; i++) {
    steps++;
    if (arr[i] === target) {
      console.log(`연산 횟수 : ${steps}`);
      return result;
    }
    result++;
  }
  console.log(`연산 횟수 : ${steps}`);
  return -1;
}

const testCases = [
  // 정렬된 배열
  { arr: [1, 3, 5, 7, 9], target: 5, expected: 2 },
  { arr: [10, 20, 30, 40], target: 10, expected: 0 },

  // 정렬되지 않은 배열
  { arr: [9, 2, 8, 1, 5], target: 8, expected: 2 },
  { arr: [100, 50, 200, 25], target: 25, expected: 3 },

  // 중복값이 있는 배열 (첫 번째 인덱스 반환)
  { arr: [3, 7, 3, 9, 3], target: 3, expected: 0 },
  { arr: [1, 2, 2, 4, 2], target: 2, expected: 1 },

  // 문자열 배열
  { arr: ["apple", "banana", "cherry"], target: "banana", expected: 1 },
  { arr: ["dog", "cat", "bird"], target: "fish", expected: -1 },

  // 특수 케이스
  { arr: [42], target: 42, expected: 0 },
  { arr: [], target: 5, expected: -1 },
  { arr: [1, 2, 3, 4, 5], target: 6, expected: -1 },

  // 음수 포함
  { arr: [-5, -2, 0, 3, 7], target: -2, expected: 1 },
];

function runTests() {
  let passedTests = 0;

  testCases.forEach((testCase, index) => {
    const result = linearSearch(testCase.arr, testCase.target);
    const passed = result === testCase.expected;

    console.log(`테스트 ${index + 1} : `);
    if (passed) {
      passedTests++;
      console.log(`통과`);
    } else {
      console.log(`실패 / 결과 : ${result}, 예상: ${testCase.expected}`);
    }
    console.log(`-----------------------`);
  });

  console.log(`총 결과: ${passedTests}/${testCases.length} 통과`);
}
runTests();
