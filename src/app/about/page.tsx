import { TeamMembers } from './team'

export default async function Page() {
  return (
    <>
      <h1>Hey this is the about page!</h1>
      <TeamMembers />
      <Address />
    </>
  );
}

const Address = () => <span>123 Main Street</span>
