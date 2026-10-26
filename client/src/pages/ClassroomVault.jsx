import { useAuth } from '@/hooks/useAuth'
import StudentClassroomVault from '@/components/student/StudentClassroomVault'
import '@/styles/PnewContentPage.css'
import './ClassroomVault.css'

export default function ClassroomVault() {
  const { user, profile } = useAuth()

  return (
    <div className="pnew-classroom-page space-y-6 animate-in fade-in duration-300">
      <header className="pnew-classroom-heading">
        <p>Your learning space</p>
        <h1>Classroom Vault</h1>
      </header>
      <StudentClassroomVault user={user} profile={profile} />
    </div>
  )
}
