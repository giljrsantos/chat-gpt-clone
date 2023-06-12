import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

export const Sidebar = ({
  open,
  onClose,
  children,
}: Props) => {
  return <section className=""></section>;
};
