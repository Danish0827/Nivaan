import parse from "html-react-parser";
import he from "he";

interface Props {
  title: string;
  description: string;
}
export default function DoctorInfoSection({ title, description }: Props) {
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="mb-4 text-2xl font-semibold text-[#284599]">
        {title}
      </h3>
      <div className="single-doctor-style prose list-disc  prose-blue max-w-none text-black font-normal font-mono">
        {parse(he.decode(description))}
      </div>
    </div>
  );
}
