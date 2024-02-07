import Image from 'next/image';
import React from 'react';

type Props = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: 'btn_dark_brown';
};

const Button = ({ type, title, icon, variant }: Props) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && (
        <Image
          src={icon}
          title={title}
          width={24}
          height={24}
          alt={`icon ${title}`}
        />
      )}
      {title}
    </button>
  );
};

export default Button;
