// js/useTopbar.js
export const useUi = () => {
  const useTopBar = useState('useTopBar', () => false)
  return { useTopBar }
}
