import Image from "next/image";

export const Feature = ({ id, title, description } : { id:Number, title?:String, description?:String }) => {
    return (
        <div key={id} className="max-w-[450px] border border-black/40 p-5 text-center items-center rounded-xl flex flex-row sm:flex-col justify-center gap-4 hover:border-black/70">
          <div className="flex justify-center items-center h-20 w-20 mb-1 flex-[1] ">
            <Image src='/menu.svg' alt="img" width={50} height={50} className="bg-grey object-contain" />
          </div>
          <div className="flex flex-col flex-[5] justify-center items-center p-1" >
            <h4 className="font-bold">{title}</h4>
            <p className="text-black/60">{description}</p>
          </div>
        </div>
    );
}