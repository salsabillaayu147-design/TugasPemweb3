interface cardInformasiProps {
  icon?: string; 
  desc: string;
  imageUrl?: string; 
  buttons?: React.ReactNode;     
}

export const CardInformasi: React.FC<cardInformasiProps> = ({ icon, desc, imageUrl, buttons }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-white min-h-400px">
      <div className="md:w-full flex flex-col gap-4">
        {icon && (
            <img 
            src={icon} 
            alt="Logo Invofest" 
            className="w-80" 
            />
         )} 

        <p className="text-slate-600 text-lg leading-relaxed">
            {desc}
        </p>
        {buttons && (
          <div className="flex flex-row gap-4">
            {buttons}
          </div>
        )}
      </div>

      <div className="md:w-full flex justify-end">
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt="Maskot Invofest" 
            className="w-100 max-w-md object-contain" 
          />
        )}
      </div>
      
    </div>
  );
};