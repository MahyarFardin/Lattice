import type { TeamMemberData } from '../data/content'
import Reveal from './Reveal'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function TeamMember({ member, delay }: { member: TeamMemberData; delay?: number }) {
  return (
    <Reveal className="team-member" delay={delay}>
      <div className="team-member-avatar" aria-hidden={!member.photoUrl}>
        {member.photoUrl ? (
          <img src={member.photoUrl} alt={member.name} loading="lazy" />
        ) : (
          initials(member.name)
        )}
      </div>
      <p className="team-member-role">{member.role}</p>
      <h3 className="team-member-name">{member.name}</h3>
      <p className="team-member-bio">{member.bio}</p>
      <ul className="team-member-skills" aria-label={`${member.name} skills`}>
        {member.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </Reveal>
  )
}
