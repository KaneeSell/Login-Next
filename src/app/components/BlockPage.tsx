import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function BlockPage(){
    return(
        <div className="z-20 w-full h-screen fixed flex items-center justify-center bg-black/100">
            <AiOutlineLoading3Quarters size={'20px'} className="animate-spin"/>
        </div>
    )
}