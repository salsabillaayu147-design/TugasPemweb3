import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputText from "../../../component/ui/InputText";
import SelectInput from "../../../component/ui/SelectInput";
import TextArea from "../../../component/ui/TextArea";
import Button from "../../../component/ui/Button";

type FormData = {
  nama: string;
  category: string;
  date: string;
  bio: string;
};

const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  category: z.string().min(1, "Category harus dipilih"),
  date: z.string().min(1, "Tanggal harus diisi"),
  bio: z.string().max(100, "Bio maksimal 100 karakter"),
});

export default function EventCreate() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ 
    resolver: zodResolver(schema) 
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="p-8 bg-[#F3F4F6] min-h-full flex justify-center ">
      <div className="w-full max-w-3xl bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold text-[#7B1D3F] mb-8 border-b border-gray-50 pb-4">New Event</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputText
            label="Nama Event"
            nama="nama"
            register={register}
            error={errors.nama?.message}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectInput
              label="Kategori"
              nama="category"
              register={register}
              error={errors.category?.message}
              options={[
                { value: "workshop", label: "Workshop" },
                { value: "seminar", label: "Seminar" },
                { value: "talkshow", label: "Talkshow" },
                { value: "competition", label: "Competition" }
              ]}
            />
            <InputText
              label="Tanggal"
              nama="date"
              register={register}
              error={errors.date?.message}
            />
          </div>
          <TextArea
            label="Deskripsi"
            nama="bio"
            register={register}
            error={errors.bio?.message}
            placeholder="Deskripsi event..."
          />
          <div className="pt-4">
            <Button
              tittle="Add Event"
              variant="primary"
              className="w-full md:w-auto bg-[#7B1D3F] hover:bg-[#5a152e] text-white px-12 py-4 rounded-2xl font-bold shadow-lg transition-all"
            />
          </div>
        </form>
      </div>
    </div>
  );
}