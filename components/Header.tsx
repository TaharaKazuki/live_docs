import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn('header', className)}>
      <Link href="/">
        <Image
          src="/assets/icons/logo.svg"
          alt="Logo with name"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:block"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
