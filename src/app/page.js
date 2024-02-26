import { Copy } from "lucide-react";
import Image from "next/image";
import Img from "../assets/illustration.svg";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center gap-3
    "
    >
      <Image src={Img} alt="lock" className="w-[100px]" />
      <h1 className="text-color-neutral-1 font-semibold mb-[10px]">
        Generate Password
      </h1>

      <div className="w-full max-w-[400px] flex justify-between items-center bg-color-neutral-2 text-color-neutral-1 rounded-md py-2 px-4">
        <span className="whitespace-nowrap overflow-hidden text-ellipsis">
          asadsa
        </span>
        <button className="bg-transparent border-none text-color-primary-1 h-10 w-8 text-base cursor-pointer hover:text-color-primary-2">
          <Copy />
        </button>
      </div>

      <div className="w-[400px] bg-color-neutral-2 text-color-neutral-1 rounded-md flex flex-col gap-2 p-4">
        <div className="flex gap-3">
          <input
            className="w-12 text-center border-none rounded-sm focus:outline-1"
            id="size"
            name="size"
            type="number"
          />
          <label htmlFor="size">Password Length</label>
        </div>
        <div className="flex gap-3">
          <input
            id="include_uppercase"
            name="include_uppercase"
            type="checkbox"
          />
          <label htmlFor="include_uppercase">Include Uppercase Letter</label>
        </div>
        <div className="flex gap-3">
          <input
            id="include_lowercase"
            name="include_lowercase"
            type="checkbox"
          />
          <label htmlFor="include_lowercase">Include Uppercase Letter</label>
        </div>
        <div className="flex gap-3">
          <input id="include_number" name="include_number" type="checkbox" />
          <label htmlFor="include_number">Include Number</label>
        </div>
        <div className="flex gap-3">
          <input
            id="include_special_character"
            name="include_special_character"
            type="checkbox"
          />
          <label htmlFor="include_special_character">
            Include Special Character
          </label>
        </div>
        <button className="bg-color-primary-1 border-none mt-3 py-2 px-0 rounded-sm text-color-neutral-3 font-semibold cursor-pointer hover:bg-color-primary-2">
          Generate Password
        </button>
      </div>
    </div>
  );
}
