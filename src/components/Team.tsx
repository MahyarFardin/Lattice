import { chain, team } from '../data/content'
import Card from './Card'
import Reveal from './Reveal'
import Scramble from './Scramble'
import SplitText from './SplitText'
import Terminal from './Terminal'

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <Scramble className="eyebrow" text="// the team" />
        <SplitText className="h2" text="Two engineers. One network." />

        <div className="team-grid">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 120} className="team-slot">
              <Card className="member">
                <div className="avatar" data-initials={member.initials}>
                  {member.photoUrl ? (
                    <img src={member.photoUrl} alt={member.name} />
                  ) : (
                    <span className="avatar-hint">[photo]</span>
                  )}
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
                <ul className="chips" aria-label={`${member.name} skills`}>
                  {member.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                <Terminal lines={member.terminal} title={`${member.initials.toLowerCase()}@lattice`} />
                <div className="member-links">
                  <a href={member.github} target="_blank" rel="noreferrer" className="link">
                    GitHub
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="link">
                    LinkedIn
                  </a>
                </div>
              </Card>
            </Reveal>
          ))}
          <div className="team-link" aria-hidden="true">
            <i />
            <b />
            <i />
          </div>
        </div>

        <Reveal className="chain">
          <p>Together, one team for the whole product.</p>
          <ol>
            {chain.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
