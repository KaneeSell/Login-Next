"use client";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import logo from "../../favicon.ico";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoFolderOpenOutline, IoHomeOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { ThemeBtnReduzido } from "../theme/ThemeButton";
import { BtnWhatsapp } from "../Contato";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  function MenuInferiorMobile() {
    return (
      <motion.div
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.4,
        }}
        className={`
        flex z-10
        brightness-90 h-15 w-full md:hidden fixed bottom-0 left-0 px-3
        justify-between items-center bg-gray-800 light:bg-neutral-400
        `}
      >
        <nav
          className={`
          flex justify-between items-center w-full gap-1
          `}
        >
          <a
            href="#inicio"
            className="py-4 w-1/4 justify-center flex light:hover:bg-neutral-600 light:hover:text-white hover:bg-gray-200 hover:text-black"
          >
            <IoHomeOutline size={"20px"} className="cursor-pointer " />
          </a>
          <a
            href="#sobreMim"
            className="py-4 w-1/4 justify-center flex light:hover:bg-neutral-600 light:hover:text-white hover:bg-gray-200 hover:text-black"
          >
            <FaRegUser size={"20px"} className="cursor-pointer " />
          </a>
          <a
            href="#projetos"
            className="py-4 w-1/4 justify-center flex light:hover:bg-neutral-600 light:hover:text-white hover:bg-gray-200 hover:text-black"
          >
            <IoFolderOpenOutline size={"20px"} className="cursor-pointer " />
          </a>
          <a
            href="#contato"
            className="py-4 w-1/4 justify-center flex light:hover:bg-neutral-600 light:hover:text-white hover:bg-gray-200 hover:text-black"
          >
            <TiContacts size={"24px"} className="cursor-pointer " />
          </a>
        </nav>
      </motion.div>
    );
  }

  return (
    <div
      className={`
        flex w-full justify-between h-15 text-white light:text-black
        `}
    >
      {/* Menu Superior */}
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.4,
        }}
        className={`
            brightness-90 h-15 w-full flex fixed top-0 left-0 px-3 z-10
            justify-between items-center backdrop-blur bg-white/10 light:bg-black/10
            `}
      >
        <motion.span 
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }} 
          viewport={{
            once: true
          }}
          transition={{
            times: [0.4],
            ease: 'easeOut',
            duration: 0.6
          }}
        className="fixed w-full flex justify-center items-center">
          <h1 className="fixed cursor-default text-2xl font-extrabold font-serif">
            Kane&apos;e Sell
          </h1>
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }} 
          viewport={{
            once: true
          }}
          transition={{
            times: [0.4],
            ease: 'easeOut',
            duration: 0.6
          }}
        className="flex items-center gap-2">
          <Image alt="icon" src={logo} height={45} />
        </motion.span>
        <motion.span 
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }} 
          viewport={{
            once: true
          }}
          transition={{
            times: [0.4],
            ease: 'easeOut',
            duration: 0.6
          }}
        className="flex items-center gap-5">
          <BtnWhatsapp className="hidden md:flex" />
          <ThemeBtnReduzido icones="icones-5" size="20px" />
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            onBlur={() => {
              setTimeout(() => setMenuOpen(false), 100);
            }}
            className={`
        ${!menuOpen && "cursor-pointer"}
        hidden md:flex flex-col gap-1 relative cursor-default focus:outline-none
        `}
          >
            <motion.span
              initial={{
                x: 0,
                y: 0,
                rotate: 0,
              }}
              animate={{
                x: 0,
                y: menuOpen ? 8 : 0,
                rotate: menuOpen ? 45 : 0,
              }}
              transition={{
                ease: "easeOut",
                duration: 0.4,
              }}
              className="h-1 bg-white light:bg-black w-7 flex rounded-2xl z-1"
            />
            <motion.span
              initial={{
                x: 0,
                y: 0,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                x: 0,
                y: 0,
                rotate: 0,
                opacity: menuOpen ? 0 : 1,
              }}
              transition={{
                ease: "easeOut",
                duration: 0.4,
              }}
              className="h-1 bg-white light:bg-black w-7 flex rounded-2xl z-1"
            />
            <motion.span
              initial={{
                x: 0,
                y: 0,
                rotate: 0,
              }}
              animate={{
                x: 0,
                y: menuOpen ? -8 : 0,
                rotate: menuOpen ? -45 : 0,
              }}
              transition={{
                ease: "easeOut",
                duration: 0.4,
              }}
              className="h-1 bg-white light:bg-black w-7 flex rounded-2xl z-1"
            />
            {/* Menu Suspenso */}
            <motion.nav
              initial={{
                scale: 0,
                x: 50,
                y: -80,
                opacity: 0,
              }}
              animate={{
                scale: menuOpen ? 1 : 0,
                x: menuOpen ? 0 : 40,
                y: menuOpen ? 0 : -75,
                opacity: menuOpen ? 1 : 0,
              }}
              transition={{
                ease: "easeOut",
                duration: 0.3,
              }}
              className="absolute right-[-10] top-[-10] bg-gray-700 light:bg-neutral-400 rounded-2xl py-2 px-3 pt-10 flex flex-col gap-2 text-nowrap"
            >
              <span className="h-7 w-7 cursor-pointer absolute right-2.5 top-1.5 z-15" />
              <AnimatePresence mode='wait'>
              <motion.a
               key={1}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: menuOpen ? 1 : 0,
                }}
                transition={{
                  times: [0.5],
                  ease: "easeOut",
                  duration: 0.6,
                }}
                href="#inicio"
                className="hover:bg-gray-200 light:hover:bg-neutral-600 light:hover:text-white rounded-lg px-3 py-1 hover:text-black font-bold cursor-pointer"
              >
                Início
              </motion.a>
              <motion.a
               key={2}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: menuOpen ? 1 : 0,
                }}
                transition={{
                  times: [0.5],
                  ease: "easeOut",
                  duration: 0.6,
                }}
                href="#sobreMim"
                className="hover:bg-gray-200 rounded-lg px-3 py-1 light:hover:bg-neutral-600 light:hover:text-white hover:text-black font-bold cursor-pointer"
              >
                Sobre Mim
              </motion.a>
              <motion.a
               key={3}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: menuOpen ? 1 : 0,
                }}
                transition={{
                  times: [0.5],
                  ease: "easeOut",
                  duration: 0.6,
                }}
                href="#projetos"
                className="hover:bg-gray-200 rounded-lg px-3 py-1 light:hover:bg-neutral-600 light:hover:text-white hover:text-black font-bold cursor-pointer"
              >
                Projetos
              </motion.a>
              <motion.a
               key={4}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: menuOpen ? 1 : 0,
                }}
                transition={{
                  times: [0.5],
                  ease: "easeOut",
                  duration: 0.6,
                }}
                href="#contato"
                className="hover:bg-gray-200 rounded-lg px-3 py-1 light:hover:bg-neutral-600 light:hover:text-white hover:text-black font-bold cursor-pointer"
              >
                Contato
              </motion.a>
              </AnimatePresence>
            </motion.nav>
          </button>
        </motion.span>
      </motion.div>
      {/* Menu Inferior Mobile */}
      <MenuInferiorMobile />
    </div>
  );
}
