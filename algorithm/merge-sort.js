// 문제: 정수 배열 arr가 주어질 때,
// 병합 정렬 알고리즘을 이용해 오름차순으로 정렬된 새로운 배열을 반환하는 함수 구현

// 테스트 케이스
const testCases = [
  {
    description: "빈 배열",
    input: [],
    expected: [],
  },
  {
    description: "단일 요소",
    input: [42],
    expected: [42],
  },
  {
    description: "이미 정렬된 배열",
    input: [1, 2, 3, 4, 5],
    expected: [1, 2, 3, 4, 5],
  },
  {
    description: "역순 배열",
    input: [5, 4, 3, 2, 1],
    expected: [1, 2, 3, 4, 5],
  },
  {
    description: "중복 및 음수 포함",
    input: [3, -2, 0, 11, 3, -2],
    expected: [-2, -2, 0, 3, 3, 11],
  },
];

/**
 * @param {number[]} arr - 정렬할 배열
 * @returns {number[]} - 오름차순으로 정렬된 새로운 배열
 */
function mergeSort(arr) {
  //배열 길이가 0 또는 1이면 즉시 반환
  if (arr.length <= 1) return arr;

  //분할
  const mid = Math.floor(arr.length / 2);
  // 절반을 재귀 호출 -> 반으로 나누기 (재귀적 분할)
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // 병합
  return merge(left, right);
}

/**
 * 두 정렬된 배열을 병합하는 함수
 * @param {number[]} left
 * @param {number[]} right
 * @returns {number[]} - 병합된 배열
 */
function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // left[i...] 또는 right[j...] 중 남은 부분을 concat
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// 테스트 실행
testCases.forEach(({ description, input, expected }, idx) => {
  const actual = mergeSort(input);
  const passed = JSON.stringify(actual) === JSON.stringify(expected);

  console.log(`\n테스트 #${idx + 1}: ${description}`);
  console.log(`입력:     [${input.join(", ")}]`);
  console.log(`예상값:   [${expected.join(", ")}]`);
  console.log(`실제 출력:[${actual.join(", ")}]`);
  console.log(passed ? "결과: ✅ 정답\n" : "결과: ❌ 오답\n");
});
