import { NAV_LINKS, SOCIALS_MENU } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import Modal from './Modal';

const NavBar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/piedra-blanca-logo.png"
          alt="logo"
          width={96}
          height={96}
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-brown-90 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Ingresar"
          icon="/user.svg"
          variant="btn_dark_brown"
        />
      </div>

      <Modal
        visibleDivClasses="menu_modal"
        triggerElement={
          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
          />
        }
      >
        <div className="flex flex-col items-center justify-between h-screen">
          <ul className="h-full">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-24 text-brown-90 flexCenter cursor-pointer pb-1.5 transition-all pt-5 hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="flex flex-row justify-center pb-2 gap-2 w-[100%]">
            {SOCIALS_MENU.map((icon) => (
              <Image
                key={`${icon}_id`}
                src={icon}
                alt={`${icon} chat`}
                width={46}
                height={46}
              />
            ))}
          </div>
          <p className="pb-5">Chatea con nosotros</p>
        </div>
      </Modal>
    </nav>
  );
};
export default NavBar;
