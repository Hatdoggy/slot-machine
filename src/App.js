import {useState} from 'react';
import Main,{Foot,PopUp,Win,MobMain,MainPop} from "./Components";
import { useMediaQuery } from 'react-responsive';

function App() {

  const small = useMediaQuery({
    query: '(min-width : 481px) and (max-width : 1000px)'
  })  

  const pad = useMediaQuery({
    query: '(min-width : 760px) and (max-width : 1000px) and (orientation:portrait)'
  })  

  const [alert,hideAlert] = useState(true);

  const [pop,showPop] = useState({
    mes:false,
    win:false,
    ctr:3,
    cash:100
  });
  const [win,showWin] = useState(false);

  return (
    alert?
    <MainPop hide={hideAlert}/>
      :
    <div className="h-100 w-100 pos-rel fade">

      {pop.win&&<Win/>}
      {pop.mes&&<PopUp show={showPop} pop={pop}/>}

      {small&&!pad?
      <MobMain show={showPop} pop={pop}/>
        :
      <Main show={showPop} pop={pop}/>
      }

      <Foot/>
    </div>    
  );
}

export default App;
