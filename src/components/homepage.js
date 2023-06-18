import { useAuth0 } from "@auth0/auth0-react"
import  {useEffect} from "react";
import useDrivePicker from "react-google-drive-picker";
export default function HomePage() {
    const { logout,isAuthenticated } = useAuth0();
    const [openPicker,data,authResponse]= useDrivePicker();
    const client_id = process.env.REACT_APP_CLIENT_ID_FOR_GOOGLE_PICK;
    const developer_key= process.env.REACT_APP_DEVELOPER_KEY;
    const handleOpenPicker = ()=>{
        openPicker({
            clientId: client_id,
            developerKey:developer_key,
            viewId:"DOCS",
            showUploadView:true,
            supportDrives:true,
            showUploadFolders: true,
            multiselect:true,
            callbackFunction:(data)=>console.log(data)
            
        })
    }
    useEffect(()=>{
      if(data){
        data.docs?.map((i)=>console.log(i))
      }
    },[data])
    return <div>
    {isAuthenticated ? (<div>
        
        <button onClick={()=>handleOpenPicker()}>Pick files from Google Drive</button>
      
        <button className="ml-24" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
        </button>
    </div>) : <div> Not authenticated</div>
    }
    </div>
    

}