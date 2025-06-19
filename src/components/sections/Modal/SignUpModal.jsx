import React, { useState } from "react";
import Close from "../../icons/Close";
import Checkmark from "../../icons/Checkmark";
import { useModalContext } from "../../../contexts/ModalContext";

const initialState = {
  email: "",
  password: "",
};

function SignUpModal({ onClose }) {
  const {setActiveModal} = useModalContext();

  const [checked, setChecked] = useState(false);
  const [inputs, setInputs] = useState(initialState);

  function handleInputs(e) {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (checked && inputs.email && inputs.password) {
      console.log(inputs);
      setInputs(initialState);
      setChecked(false);
      setActiveModal("");

      // TODO: Submit data to backend/database
    }
  }

  return (
    <section className="grid max-w-3xl grid-cols-2 rounded-lg overflow-hidden max-sm:w-96 max-sm:grid-cols-1">
      <div className="bg-primary-1300 flex flex-col justify-center gap-y-4 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10 text-center max-md:px-6 max-md:py-8 max-sm:hidden">
        <h4 className="text-primary-50 text-4xl/12 font-bold tracking-tight">
          Let's Get You Signed Up
        </h4>
        <p className="text-primary-100 text-lg/8">
          No charges, no fees. Get note taking in minutes
        </p>
      </div>

      <div className="bg-primary-1500 flex flex-col justify-between gap-y-12 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10 max-md:px-6 max-md:py-8 max-sm:gap-y-16">
        <button
          onClick={() => setActiveModal("")}
          className="border-primary-75 hover:bg-primary-75 group transition-all ml-auto w-fit cursor-pointer rounded-2xl border-2 p-3"
        >
          <Close className="w-4 h-4 stroke-primary-75 group-hover:stroke-primary-1300 transition-all max-md:h-4 max-md:w-4 " />
        </button>

     
        <div className="text-primary-50 flex flex-col gap-y-6 text-lg font-semibold tracking-tight max-md:font-normal">
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="janedoe@gmail.com"
              onChange={handleInputs}
              value={inputs.email}
              className="bg-primary-75 text-primary-1300 placeholder-primary-1500 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20 max-md:px-6 max-md:py-3"
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              placeholder="***********"
              onChange={handleInputs}
              value={inputs.password}
              className="bg-primary-75 text-primary-1300 placeholder-primary-1500 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20 max-md:px-6 max-md:py-3"
            />
          </label>
        </div>

        {/* Checkbox + Submit */}
        <div>
          <div className="flex items-center justify-center gap-x-2 mb-4 max-sm:mb-1">
            <button
              type="button"
              onClick={() => setChecked((val) => !val)}
              className={`border-primary-100 transition-all h-4 w-4 flex items-center justify-center rounded-sm border-2  ${
                checked ? "bg-primary-100" : ""
              }`}
            >
              {checked && <Checkmark className="stroke-primary-1500" />}
            </button>
            <p
              onClick={() => setChecked((val) => !val)}
              className="text-primary-100 text-sm cursor-pointer max-md:px-6 max-md:py-3 max-md:text-base/loose"
            >
              I agree to all terms
            </p>
          </div>

          <button
          onClick={handleSubmit}
          disabled={!checked || !inputs.email || !inputs.password}
          className={`w-full cursor-pointer rounded-full py-4 text-lg font-semibold transition-all ${
            !checked || !inputs.email || !inputs.password
            ? 'bg-primary-200 text-primary-1500 cursor-not-allowed'
            : 'bg-primary-500 text-white hover:bg-primary-600'
            }`}
            >
            Get Started
            </button>
        </div>
      </div>
    </section>
  );
}

export default SignUpModal;
