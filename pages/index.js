import Center from '../components/Center';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="bg-black h-screen over">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      
     <div>{/* {player} */}</div>
    </div>
  );
}
