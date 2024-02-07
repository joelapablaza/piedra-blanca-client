'use client';
import useTogleModal from '@/hooks/useTogleModal';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type ModalClassOptions = 'menu_modal' | 'central_modal';

type Props = {
  children: React.ReactNode;
  triggerElement: React.ReactElement;
  visibleDivClasses: ModalClassOptions;
};

const Modal = ({ children, triggerElement, visibleDivClasses }: Props) => {
  const [show, setShow] = useState(false);

  const closeMobileMenu = () => {
    setShow(false);
  };

  const menuRef = useTogleModal({ callback: closeMobileMenu });

  return (
    <>
      {React.cloneElement(triggerElement, { onClick: () => setShow(true) })}

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 flex justify-center items-center z-50 lg:hidden`}
          >
            <div ref={menuRef} className={visibleDivClasses}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
