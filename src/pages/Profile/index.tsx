import Account from "../../components/Account";
import Main from "../../components/Layout/Main";
import UserInfo from "../../components/UserInfo";

const DUMMY_ACCOUNT = [
  { id: 1, title: 'Argent Bank Checking (x8349)', amount: 2082.79, description: 'Available Balance' },
  { id: 2, title: 'Argent Bank Savings (x6712)', amount: 10928.42, description: 'Available Balance' },
  { id: 3, title: 'Argent Bank Credit Card (x8349)', amount: 184.30, description: 'Current Balanc' },
]

const User: React.FC = () => {
  return (
    <Main bg="dark">
      <UserInfo />
      {DUMMY_ACCOUNT.map((a) => {
        return <Account key={a.id} title={a.title} amount={a.amount} description={a.description} />
      })}
    </Main>
  )
}

export default User;