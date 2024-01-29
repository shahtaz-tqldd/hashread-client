import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function LoginModal({ isOpen, setIsOpen }) {
  const closeModal = () => setIsOpen(false);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-tan p-10 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-bold text-center leading-6 text-sin"
                >
                  Get started with hashread
                </Dialog.Title>
                <div className="mt-10 flex flex-col gap-5">
                  <input type="email" className="bg-tan focus:outline-none border-b border-b-sin w-full py-1" placeholder="Email" />
                  <input type="password" className="bg-tan focus:outline-none border-b border-b-sin w-full py-1" placeholder="Password" />
                </div>

                <div className="mt-10">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-full border border-transparent bg-cot px-6 py-2 text-sm font-medium text-white hover:bg-tan/80 tr focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Sign In
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
