/**
 * uuid 등 여러 사용자를 고려한 유니크 ID 제너레이트도 가능하나
 * 이번 과제 범위를 크게 보지 않기 위해,
 * 1인 사용자 (백엔드 연동 없는) 스펙으로 최소화 해서 진행
 * @returns {string}
 */
export function generateId() {
  return `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
}
