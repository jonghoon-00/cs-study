// 이진 검색,binary search
// 정렬된 리스트에서 검색 범위를 줄여나가면서 검색 값을 찾는 알고리즘
// 시간 복잡도 O(log n)
// 공간 복잡도 O(1)

// 문제 : 정렬된 배열에서 주어진 값을 찾아 그 인덱스를 반환하는 함수를 작성하시오.
// 값이 없으면 -1을 반환하세요

/**
 *
 * @param  arr : 정렬된 배열
 * @param  target : 답(찾고자 하는 값)
 * @return : target의 인덱스, 없으면 -1
 */
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let steps = 0;

  while (left <= right) {
    steps++;

    const mid = Math.floor((left + right) / 2);
    const midValue = arr[mid];

    if (midValue === target) {
      console.log(`비교 횟수 : ${steps}회`);
      return mid;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(`비교 횟수 : ${steps}회`);
  return -1;
};

// 테스트 케이스
const testCases = [
  { arr: [1, 3, 5, 7, 9, 11, 13, 15], target: 7, expected: 3 },
  { arr: [10, 20, 30, 40, 50], target: 30, expected: 2 },
  { arr: [2, 4, 6, 8], target: 5, expected: -1 },
  { arr: [1], target: 1, expected: 0 },
  { arr: [], target: 5, expected: -1 },
  { arr: [100, 200, 300], target: 200, expected: 1 },
  { arr: [5, 10, 15, 20, 25], target: 25, expected: 4 },
  { arr: [1, 2, 3, 4, 5], target: 0, expected: -1 },
];

//테스트 함수
function runTests() {
  let passedTests = 0;

  testCases.forEach((testCase, index) => {
    const result = binarySearch(testCase.arr, testCase.target);
    const passed = result === testCase.expected;

    console.log(`테스트 케이스 ${index + 1}:`);
    if (passed) {
      passedTests++;
      console.log(`통과 ! `);
    } else {
      console.log(`실패 / 결과 : ${result}, 예상 : ${testCase.expected}`);
    }
    console.log(`------------------`);
  });

  console.log(`\n 총 ${testCases.length}개의 테스트 중 ${passedTests}개 통과`);
}

runTests();

//----------------------------

// 재귀 함수로도 구현 가능
// 재귀함수 : 정의 단계에서 자신을 재참조하는 함수
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target)
    return binarySearchRecursive(arr, target, mid + 1, right);
  return binarySearchRecursive(arr, target, left, mid - 1);
}
