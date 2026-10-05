import { siteConfig } from '../data/content'
import { useInView } from '../hooks/fx'
import Btn from './Btn'
import NodeMesh from './NodeMesh'
import Shape from './Shape'
import SplitText from './SplitText'

export default function CTA() {
  const [ref, near] = useInView<HTMLElement>(0.4, false)

  return (
    <section id="hire" ref={ref} className="cta">
      <NodeMesh converge={near} />
      <Shape className="cta-shape" />
      <div className="container cta-inner">
        <SplitText className="cta-title" text="Ready to build something great?" shimmer={['great?']} />
        <Btn href={siteConfig.upworkUrl} external size="lg">
          Hire Lattice on Upwork
        </Btn>
      </div>
    </section>
  )
}
