import { FooterBoxDataMobile } from "../(interfaces)/footerboxmobiledata";

const FooterBoxMobile: React.FC<{ data: FooterBoxDataMobile }> = ({
  data,
}: {
  data: FooterBoxDataMobile;
}) => {
  return (
    <div className="w-2/4 bg-slate-400/10 shadow-sm p-5 flex flex-col h-32 justify-center items-center gap-2">
      <img src={data.iconUrl} alt="icon" className="h-6 w-6" />
      <p className="text-xs text-muted-foreground text-gray-500 text-center">
        {data.heading}
      </p>
    </div>
  );
};
export default FooterBoxMobile;
