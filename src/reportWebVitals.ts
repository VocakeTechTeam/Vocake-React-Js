import { onCLS, onFID, onLCP } from 'web-vitals'
/* eslint-disable  @typescript-eslint/no-explicit-any */
const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry)
    onFID(onPerfEntry)
    onLCP(onPerfEntry)
  }
}

export default reportWebVitals
