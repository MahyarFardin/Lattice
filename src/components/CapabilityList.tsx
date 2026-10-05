import { capabilities } from '../data/content'
import './CapabilityList.css'

export default function CapabilityList() {
  return (
    <div className="container">
      <ul className="capability-list" aria-label="Core capabilities">
        {capabilities.map((item) => (
          <li key={item} className="capability-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
