import { team } from '../data/content'
import Highlight from './Highlight'
import Reveal from './Reveal'
import TeamMember from './TeamMember'
import './Team.css'

export default function Team() {
  return (
    <section id="team" className="section section-border-top">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-label">Team</span>
          <h2 className="section-heading">
            Two specialists.{' '}
            <Highlight color="blue" shift="left">
              One team.
            </Highlight>
          </h2>
        </Reveal>

        <div className="team-grid">
          {team.map((member, i) => (
            <TeamMember key={member.name} member={member} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
