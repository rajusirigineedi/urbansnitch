import { FooterBoxData } from "../(interfaces)/footerboxdata";

const FooterBox: React.FC<{ data: FooterBoxData }> = ({
  data,
}: {
  data: FooterBoxData;
}) => {
  return (
    <div className="w-1/4 bg-slate-400/10 shadow-lg p-5 flex h-32 justify-center items-center">
      <img src={data.iconUrl} alt="icon" className="h-10 w-10" />
      <div className="flex flex-col ml-4">
        <p className="font-bold">{data.heading}</p>
        <p className="text-sm text-gray-500">{data.description}</p>
      </div>
    </div>
  );
};
export default FooterBox;
