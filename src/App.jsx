import Card from './Components/Card';
import './App.css'

const App = () => {

  const styles = {
    display: 'flex',
    gap: '20px',
  }

  return (
    <div className='parent'>
      <Card type='FREE' cost='$0/month' user='Single User'/>
      <Card type='PLUS' cost='$9/month' user='5 Users'/>
      <Card type='PRO' cost='$49/month' user='Unlimited Users'/>
    </div>
  )
}

export default App;
