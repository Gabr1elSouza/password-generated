"use client";
import { Copy } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import Img from "../assets/illustration.svg";

export default function Home() {
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [specialCharacter, setSpecialCharacter] = useState(false);
  const [size, setSize] = useState("");
  const [password, setPassword] = useState("");

  function getChatTypes() {
    const charTypes = [];

    if (upperCase) {
      charTypes.push("ABCEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (lowerCase) {
      charTypes.push("abcdefghijklmnopqrstuvwxyz");
    }
    if (number) {
      charTypes.push("0123456789");
    }
    if (specialCharacter) {
      charTypes.push("!@#$%^&*()_-+=[]|\\/?<>:;\"'.,~`");
    }

    return charTypes;
  }

  function randomCharType(charTypes) {
    const randomIndex = Math.floor(Math.random() * charTypes.length);

    return charTypes[randomIndex][
      Math.floor(Math.random() * charTypes[randomIndex].length)
    ];
  }

  function getPasswordSize() {
    const numericSize = parseInt(size, 10);
    if (isNaN(numericSize) || numericSize < 4 || numericSize > 128) {
      toast.error("Tamanho inválido, digite um tamanho entre 4 e 128");
      return null;
    }
   
    return numericSize;
  }

  function generatePassword(size, charTypes) {
    let passwordGenerate = "";
    if (!charTypes.length) {
      toast.error('Selecione pelo menos um tipo de caractere!');
      return;
  }

    while (passwordGenerate.length < size) {
      passwordGenerate += randomCharType(charTypes);
    }

    return passwordGenerate;
  }

  function copy() {
    navigator.clipboard.writeText(password);
    toast.success("Senha copiada com sucesso!");
  }

  function generate() {
    setPassword(generatePassword(getPasswordSize(), getChatTypes()));
  }

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
          {password}
        </span>
        <button
          onClick={copy}
          className="bg-transparent border-none text-color-primary-1 h-10 w-8 text-base cursor-pointer hover:text-color-primary-2"
        >
          <Copy />
        </button>
      </div>

      <div className="w-[400px] bg-color-neutral-2 text-color-neutral-1 rounded-md flex flex-col gap-2 p-4">
        <div className="flex gap-3">
          <input
            className="w-12 text-center border-none rounded-sm focus:outline-1 text-slate-950"
            id="size"
            name="size"
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <label htmlFor="size">Password Length</label>
        </div>
        <div className="flex gap-3">
          <input
            id="include_uppercase"
            name="include_uppercase"
            type="checkbox"
            checked={upperCase}
            onChange={(e) => setUpperCase(e.target.checked)}
          />
          <label htmlFor="include_uppercase">Include Uppercase Letter</label>
        </div>
        <div className="flex gap-3">
          <input
            id="include_lowercase"
            name="include_lowercase"
            type="checkbox"
            checked={lowerCase}
            onChange={(e) => setLowerCase(e.target.checked)}
          />
          <label htmlFor="include_lowercase">Include Lowercase Letter</label>
        </div>
        <div className="flex gap-3">
          <input
            id="include_number"
            name="include_number"
            type="checkbox"
            checked={number}
            onChange={(e) => setNumber(e.target.checked)}
          />
          <label htmlFor="include_number">Include Number</label>
        </div>
        <div className="flex gap-3">
          <input
            id="include_special_character"
            name="include_special_character"
            type="checkbox"
            checked={specialCharacter}
            onChange={(e) => setSpecialCharacter(e.target.checked)}
          />
          <label htmlFor="include_special_character">
            Include Special Character
          </label>
        </div>
        <button
          className="bg-color-primary-1 border-none mt-3 py-2 px-0 rounded-sm text-color-neutral-3 font-semibold cursor-pointer hover:bg-color-primary-2"
          onClick={generate}
        >
          Generate Password
        </button>
      </div>
      <footer>
        <p className="text-color-neutral-1 font-bold">Gabriel Souza© 2024</p>
      </footer>
    </div>
  );
}
